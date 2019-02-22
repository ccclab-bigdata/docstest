var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Pajarito-1",
    "page": "Readme",
    "title": "Pajarito",
    "category": "section",
    "text": "Pajarito is a mixed-integer convex programming (MICP) solver package written in Julia. MICP problems are convex except for restrictions that some variables take binary or integer values.Pajarito solves MICP problems by constructing sequential polyhedral outer-approximations of the convex feasible set, similar to Bonmin. The underlying algorithm has theoretical finite-time convergence under reasonable assumptions. Pajarito accesses state-of-the-art MILP solvers and continuous convex conic solvers through the MathProgBase interface. It currently accepts mixed-integer conic problems with second-order, rotated second-order, (primal) exponential, and positive semidefinite cones. MISOCP and MISDP are two established sub-classes of MICPs that Pajarito can solve.For algorithms that use a derivative-based nonlinear programming (NLP) solver (e.g. Ipopt) instead of a conic solver, use Pavito. Pavito is a convex mixed-integer nonlinear programming (convex MINLP) solver. As Pavito relies on gradient cuts, it can fail near points of nondifferentiability. Pajarito may be more robust than Pavito on nonsmooth problems (such as MISOCPs)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pajarito can be installed through the Julia package manager:julia> Pkg.add(\"Pajarito\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "There are several convenient ways to model MICPs in Julia and access Pajarito:|             | [JuMP][JuMP-url]  | [Convex.jl][convex-url]  | [MathProgBase][mpb-url]  | |––––––-|–––––––––-|–––––––––––––|–––––––––––––| | Conic model | X                 | X                        | [X][mpb-conic-url]       |[mpb-conic-url]: http://mathprogbasejl.readthedocs.io/en/latest/conic.html [JuMP-url]: https://github.com/JuliaOpt/JuMP.jl [convex-url]: https://github.com/JuliaOpt/Convex.jl [mpb-url]: https://github.com/JuliaOpt/MathProgBase.jlJuMP and Convex.jl are algebraic modeling interfaces, while MathProgBase is a lower-level interface for providing input in raw callback or matrix form. Convex.jl is perhaps the most user-friendly way to provide input in conic form, since it transparently handles conversion of algebraic expressions. JuMP supports conic modeling, but requires cones to be explicitly specified, e.g. by using norm(x) <= t for second-order cone constraints and @SDconstraint for positive semidefinite constraints. Pajarito may be accessed through MathProgBase from outside Julia by using the experimental cmpb interface which provides a C API to the low-level conic input format. The ConicBenchmarkUtilities package provides utilities to read files in the CBF format."
},

{
    "location": "#MIP-and-continuous-solvers-1",
    "page": "Readme",
    "title": "MIP and continuous solvers",
    "category": "section",
    "text": "The algorithm implemented by Pajarito itself is relatively simple, and most of the hard work is performed by the MIP solver and the continuous conic solver. The performance of Pajarito depends on these two types of solvers. For best performance, use commercial solvers.The mixed-integer solver is specified by using the mip_solver option to PajaritoSolver, e.g. PajaritoSolver(mip_solver=CplexSolver()). You must first load the Julia package which provides the mixed-integer solver, e.g. using CPLEX. This solver is typically a mixed-integer linear solver, but if a conic problem has both second-order cones and other nonlinear cones, or if it has PSD cones, then the MIP solver can be an MISOCP solver and Pajarito can put second-order cones in the outer approximation model.The continuous conic solver is specified by using the cont_solver option, e.g. PajaritoSolver(cont_solver=MosekSolver()). For conic models, the predefined cones are listed in the MathProgBase documentation. The following conic solvers (O means open-source) can be used by Pajarito to solve mixed-integer conic models with any mixture of the corresponding cones:|                        | Second-order | Rotated second-order | Positive semidefinite | Primal exponential | |––––––––––––|–––––––|–––––––––––|–––––––––––-|––––––––––| | [CSDP][csdp-url] O |              |                      | X                     |                    | | [ECOS][ecos-url] O | X            | X                    |                       | X                  | | [SCS][scs-url] O   | X            | X                    | X                     | X                  | | [Mosek][mosek-url]     | X            | X                    | X                     |                    |[csdp-url]: https://github.com/JuliaOpt/CSDP.jl [ecos-url]: https://github.com/JuliaOpt/ECOS.jl [mosek-url]: https://github.com/JuliaOpt/Mosek.jl [scs-url]: https://github.com/JuliaOpt/SCS.jlMIP and continuous solver parameters must be specified through their corresponding Julia interfaces. For example, to turn off the output of Mosek solver, use cont_solver=MosekSolver(LOG=0)."
},

{
    "location": "#Pajarito-solver-options-1",
    "page": "Readme",
    "title": "Pajarito solver options",
    "category": "section",
    "text": "The following options can be passed to PajaritoSolver() to modify its behavior (see solver.jl for default values):log_level::Int Verbosity flag: 0 for quiet, 1 for basic solve info, 2 for iteration info, 3 for detailed timing and cuts and solution feasibility info\ntimeout::Float64 Time limit for algorithm (in seconds)\nrel_gap::Float64 Relative optimality gap termination condition\nmip_solver_drives::Bool Let MIP solver manage convergence (\"branch and cut\")\nmip_solver::MathProgBase.AbstractMathProgSolver MIP solver (MILP or MISOCP)\nmip_subopt_solver::MathProgBase.AbstractMathProgSolver MIP solver for suboptimal solves (with appropriate options already passed)\nmip_subopt_count::Int Number of times to use mip_subopt_solver between mip_solver solves\nround_mip_sols::Bool Round integer variable values before solving subproblems\nuse_mip_starts::Bool Use conic subproblem feasible solutions as MIP warm-starts or heuristic solutions\ncont_solver::MathProgBase.AbstractMathProgSolver Continuous conic solver\nsolve_relax::Bool Solve the continuous conic relaxation to add initial subproblem cuts\nsolve_subp::Bool Solve the continuous conic subproblems to add subproblem cuts\ndualize_relax::Bool Solve the conic dual of the continuous conic relaxation\ndualize_subp::Bool Solve the conic duals of the continuous conic subproblems\nsoc_disagg::Bool Disaggregate SOC cones\nsoc_abslift::Bool Use SOC absolute value lifting\nsoc_in_mip::Bool Use SOC cones in the MIP model (if mip_solver supports MISOCP)\nsdp_eig::Bool Use PSD cone eigenvector cuts\nsdp_soc::Bool Use PSD cone eigenvector SOC cuts (if mip_solver supports MISOCP)\ninit_soc_one::Bool Use SOC initial L_1 cuts\ninit_soc_inf::Bool Use SOC initial L_inf cuts\ninit_exp::Bool Use Exp initial cuts\ninit_sdp_lin::Bool Use PSD cone initial linear cuts\ninit_sdp_soc::Bool Use PSD cone initial SOC cuts (if mip_solver supports MISOCP)\nscale_subp_cuts::Bool Use scaling for subproblem cuts\nscale_subp_factor::Float64 Fixed multiplicative factor for scaled subproblem cuts\nviol_cuts_only::Bool Only add cuts violated by current MIP solution\nprim_cuts_only::Bool Add primal cuts, do not add subproblem cuts\nprim_cuts_always::Bool Add primal cuts and subproblem cuts\nprim_cuts_assist::Bool Add subproblem cuts, and add primal cuts only subproblem cuts cannot be added\ncut_zero_tol::Float64 Zero tolerance for cut coefficients\nprim_cut_feas_tol::Float64 Absolute feasibility tolerance used for primal cuts (set equal to feasibility tolerance of mip_solver)Pajarito may require tuning of parameters to improve convergence.Note:Pajarito usually returns a solution constructed from one of the conic solver\'s feasible solutions. Since the conic solver is not subject to the same feasibility tolerances as the MIP solver (which should match the absolute feasibility tolerance prim_cut_feas_tol), Pajarito\'s solution will not necessarily satisfy prim_cut_feas_tol.\nMIP solver integrality tolerance should typically be tightened, for example to 1e-8, for improved Pajarito performance.\nviol_cuts_only defaults to true on the MIP-solver-driven algorithm and false on the iterative algorithm."
},

{
    "location": "#Bug-reports-and-support-1",
    "page": "Readme",
    "title": "Bug reports and support",
    "category": "section",
    "text": "Please report any issues via the Github [issue tracker]. All types of issues are welcome and encouraged; this includes bug reports, documentation typos, feature requests, etc. The [Optimization (Mathematical)] category on Discourse is appropriate for general discussion.[issue tracker]: https://github.com/mlubin/Pajarito.jl/issues [Optimization (Mathematical)]: https://discourse.julialang.org/c/domain/opt"
},

{
    "location": "#We-need-your-challenging-MICP-problems-1",
    "page": "Readme",
    "title": "We need your challenging MICP problems",
    "category": "section",
    "text": "Mixed-integer convex programming is an active area of research, and we are seeking out hard benchmark instances. Please get in touch either by opening an issue or privately if you would like to share any hard instances to be used as benchmarks in future work. Challenging problems will help us determine how to improve Pajarito."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "If you find Pajarito useful in your work, we kindly request that you cite the following paper (arXiv preprint):@Inbook{LubinYamangilBentVielma2016,\nauthor=\"Lubin, Miles\nand Yamangil, Emre\nand Bent, Russell\nand Vielma, Juan Pablo\",\neditor=\"Louveaux, Quentin\nand Skutella, Martin\",\ntitle=\"Extended Formulations in Mixed-Integer Convex Programming\",\nbookTitle=\"Integer Programming and Combinatorial Optimization: 18th International Conference, IPCO 2016, Li{\\`e}ge, Belgium, June 1-3, 2016, Proceedings\",\nyear=\"2016\",\npublisher=\"Springer International Publishing\",\naddress=\"Cham\",\npages=\"102--113\",\nisbn=\"978-3-319-33461-5\",\ndoi=\"10.1007/978-3-319-33461-5_9\",\nurl=\"http://dx.doi.org/10.1007/978-3-319-33461-5_9\"\n}The paper describes the motivation of Pajarito and is recommended reading for advanced users."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Pajarito.ConicDualModelPajarito.ConicDualWrapperPajarito.PajaritoPajarito.PajaritoConicModelPajarito.PajaritoSolverPajarito.UnsetSolverPajarito.add_cut!Pajarito.add_cut_exp!Pajarito.add_cut_sdp!Pajarito.add_cut_soc!Pajarito.add_sep_cut_exp!Pajarito.add_sep_cut_sdp!Pajarito.add_sep_cut_soc!Pajarito.add_subp_cut_exp!Pajarito.add_subp_cut_sdp!Pajarito.add_subp_cut_soc!Pajarito.calc_infeasPajarito.check_feas_add_sep_cuts!Pajarito.clean_array!Pajarito.conedualPajarito.create_conicsub_data!Pajarito.create_logs!Pajarito.create_mip_data!Pajarito.evalPajarito.feas_factorPajarito.includePajarito.infeas_ray_tolPajarito.make_smat!Pajarito.print_finishPajarito.print_gapPajarito.set_best_soln!Pajarito.solve_iterative!Pajarito.solve_mip_driven!Pajarito.solve_subp!Pajarito.solve_subp_add_subp_cuts!Pajarito.sqrt2Pajarito.sqrt2invPajarito.transform_dataPajarito.unstable_soc_disagg_tol"
},

]}
