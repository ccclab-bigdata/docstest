using Base.Test
using AmplNLReader

function exercise_ampl_model(nlp :: AmplModel)
  show(STDOUT, nlp)
  print(STDOUT, nlp)

  # Perform dummy scaling.
  varscale(nlp, ones(nlp.meta.nvar))
  conscale(nlp, ones(nlp.meta.ncon))

  f = obj( nlp, nlp.meta.x0)
  g = grad(nlp, nlp.meta.x0)
  c = cons(nlp, nlp.meta.x0)
  J = jac( nlp, nlp.meta.x0)
  H = hess(nlp, nlp.meta.x0, y=ones(nlp.meta.ncon,))

  @printf("f(x0) = %f\n", f)
  @printf("∇f(x0) = "); display(g'); @printf("\n")
  @printf("c(x0) = ");  display(c'); @printf("\n")
  for j = 1 : nlp.meta.ncon
    @printf("c_%d(x0) = %8.1e\n", j, jth_con(nlp, nlp.meta.x0, j));
    @printf("∇c_%d(x0) =", j)
    display(jth_congrad(nlp, nlp.meta.x0, j)); @printf("\n")
    @printf("sparse ∇c_%d(x0) =", j)
    display(jth_sparse_congrad(nlp, nlp.meta.x0, j)); @printf("\n")
  end
  @printf("J(x0) = \n");      display(J); @printf("\n")
  @printf("∇²L(x0,y0) = \n"); display(H); @printf("\n")

  e = ones(nlp.meta.nvar)
  je = jprod(nlp, nlp.meta.x0, e)
  @printf("J(x0) * e = \n"); display(je); @printf("\n")
  jte = jtprod(nlp, nlp.meta.x0, ones(nlp.meta.ncon))
  @printf("J(x0)' * e = \n"); display(jte); @printf("\n")
  je = rand(nlp.meta.ncon)
  jprod!(nlp, nlp.meta.x0, e, je)
  @printf("J(x0) * e = \n"); display(je); @printf("\n")
  jte = rand(nlp.meta.nvar)
  jtprod!(nlp, nlp.meta.x0, ones(nlp.meta.ncon), jte)
  @printf("J(x0)' * e = \n"); display(jte); @printf("\n")
  he = hprod(nlp, nlp.meta.x0, e)
  @printf("∇²L(x0,y0) * e = \n"); display(he); @printf("\n")
  hprod!(nlp, nlp.meta.x0, e, he)
  @printf("∇²L(x0,y0) * e = \n"); display(he); @printf("\n")
  for j = 1 : nlp.meta.ncon
    Hje = jth_hprod(nlp, nlp.meta.x0, e, j)
    @printf("∇²c_%d(x0) * e = ", j); display(Hje'); @printf("\n")
  end

  ghje = ghjvprod(nlp, nlp.meta.x0, g, e)
  @printf "(∇f(x0), ∇²c_j(x0) * e) = "; display(ghje'); @printf("\n")

  write_sol(nlp, "And the winner is...", rand(nlp.meta.nvar), rand(nlp.meta.ncon))
  reset!(nlp)
end

path = dirname(@__FILE__)
hs33 = AmplModel(joinpath(path, "hs033.nl"))
rosenbrock = AmplModel(joinpath(path, "rosenbr.nl"))
exercise_ampl_model(rosenbrock)
hs9 = AmplModel(joinpath(path, "hs009.nl"))
exercise_ampl_model(hs33)
exercise_ampl_model(hs9)
amplmodel_finalize(hs33)
amplmodel_finalize(rosenbrock)
amplmodel_finalize(hs9)
@test_throws AmplException obj(hs9, hs9.meta.x0)
