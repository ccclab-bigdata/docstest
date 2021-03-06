var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LinearDynamicsModels.jl-1",
    "page": "Readme",
    "title": "LinearDynamicsModels.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This package serves two purposes:To extend the interfaces defined in DifferentialDynamicsModels.jl to linear time-invariant systems of the form (Image: linear dynamics) and implement fast solutions to two-point boundary value problems with these dynamics (provided they are controllable), minimizing the mixed time/control effort criterion (Image: time plus quadratic control) (where (Image: R) is symmetric positive definite).\nLinearDynamics{Dx,Du} <: DifferentialDynamics is the main type exported by this package. The type parameters Dx and Du denote the state and control dimension respectively. Statically sized arrays are used in this package for their performance benefits; the type constructor requires arguments of the form LinearDynamics(A::StaticMatrix{Dx,Dx}, B::StaticMatrix{Dx,Du}, c::StaticVector{Du}). Though LinearDynamics supports arbitrary values for A, B, and c, this package also exports the convenience constructors DoubleIntegatorDynamics(D::Int), TripleIntegatorDynamics(D::Int), and NIntegratorDynamics(N::Int, D::Int) where D is the spatial dimension (e.g., DoubleIntegatorDynamics(3) will model a point mass in three dimensions under controlled acceleration).\nLinearQuadraticSteering is a type alias for a particular parameterization of SteeringBVP:   julia   const LinearQuadraticSteering{Dx,Du,Cache} = SteeringBVP{<:LinearDynamics{Dx,Du},<:TimePlusQuadraticControl{Du},EmptySteeringConstraints,Cache}   Depending on whether SteeringBVP(f::LinearDynamics, j::TimePlusQuadraticControl) is called with the keyword argument compile=Val(true) or compile=Val(false) (the default), the resulting SteeringBVP instance may contain a cache of optimal control functions/quantities symbolically computed using SymPy.jl. Compilation greatly reduces BVP computation time (useful if you need to solve millions or even billions of steering problems, as in sampling-based robot motion planning) but introduces a large initial overhead (i.e., stick to compile=Val(false) if you only need to solve a few instances of a particular steering setup). Note that for BVP compilation the user must first using SymPy or import SymPy.\nTo implement functions for dynamics linearization, leveraging automatic differentiation provided by ForwardDiff.jl. In particular this package provides linearization of continuous-time systems as well as linearization of the corresponding discrete-time systems arising from zero-order hold or first-order hold input.\nlinearize(f::DifferentialDynamics, x, u) — linearization of a differential dynamics model f about the state x and control u; returns a LinearDynamics.\nlinearize(f::DifferentialDynamics, x, u::StepControl) — linearization of the discrete time model produced by integrating f starting from the state x and applying the zero-order hold control interval u (constant control u.u over duration u.t); returns a ZeroOrderHoldLinearization. This linearization is exact (up to numerical error) if f isa LinearDynamics.\nlinearize(f::DifferentialDynamics, x, u::RampControl) — linearization of the discrete time model produced by integrating f starting from the state x and applying the first-order hold control interval u (control linearly interpolated from u.u0 to u.uf over duration u.t); returns a FirstOrderHoldLinearization. This linearization is exact (up to numerical error) if f isa LinearDynamics."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LinearDynamicsModels.DoubleIntegratorDynamicsLinearDynamicsModels.DoubleIntegratorSteeringLinearDynamicsModels.FirstOrderHoldLinearizationLinearDynamicsModels.LinearDynamicsLinearDynamicsModels.LinearDynamicsModelsLinearDynamicsModels.LinearQuadraticSteeringLinearDynamicsModels.LinearQuadraticSteeringControlLinearDynamicsModels.NIntegratorDynamicsLinearDynamicsModels.NIntegratorSteeringLinearDynamicsModels.TripleIntegratorDynamicsLinearDynamicsModels.TripleIntegratorSteeringLinearDynamicsModels.ZeroOrderHoldLinearizationLinearDynamicsModels.__init__LinearDynamicsModels._integrate_expAt_BLinearDynamicsModels._integrate_expAt_Bt_dtinvLinearDynamicsModels.bisectionLinearDynamicsModels.costLinearDynamicsModels.dcostLinearDynamicsModels.evalLinearDynamicsModels.false_positionLinearDynamicsModels.golden_sectionLinearDynamicsModels.includeLinearDynamicsModels.integrate_expAt_BLinearDynamicsModels.integrate_expAt_B_expATtLinearDynamicsModels.integrate_expAt_Bt_dtinvLinearDynamicsModels.linearizeLinearDynamicsModels.newtonLinearDynamicsModels.optimal_time"
},

]}
