var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#The-NLopt-module-for-Julia-1",
    "page": "Readme",
    "title": "The NLopt module for Julia",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)(Image: NLopt) (Image: NLopt) (Image: NLopt)This module provides a Julia-language interface to the free/open-source NLopt library for nonlinear optimization. NLopt provides a common interface for many different optimization algorithms, including:Both global and local optimization\nAlgorithms using function values only (derivative-free) and also algorithms exploiting user-supplied gradients.\nAlgorithms for unconstrained optimization, bound-constrained optimization, and general nonlinear inequality/equality constraints.See the NLopt introduction for a further overview of the types of problems it addresses.NLopt can be used either by accessing it\'s specialized API or by using the generic MathProgBase interface for nonlinear optimization. Both methods are documented below."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, you can install the NLopt.jl package with the package manager: Pkg.add(\"NLopt\")On Windows and OS X platforms, NLopt binaries will be automatically installed. On other platforms, Julia will attempt to build NLopt from source; be sure to have a compiler installed."
},

{
    "location": "#Using-with-MathProgBase-1",
    "page": "Readme",
    "title": "Using with MathProgBase",
    "category": "section",
    "text": "NLopt implements the MathProgBase interface for nonlinear optimization, which means that it can be used interchangeably with other optimization packages from modeling packages like JuMP or when providing hand-written derivatives. Note that NLopt does not exploit sparsity of Jacobians.The NLopt solver is named NLoptSolver and takes parameters:algorithm\nstopval\nftol_rel\nftol_abs\nxtol_rel\nxtol_abs\nconstrtol_abs\nmaxeval\nmaxtime\ninitial_step\npopulation\nseed\nvector_storageThe algorithm parameter is required, and all others are optional. The meaning and acceptable values of all parameters, except constrtol_abs, match the descriptions below from the specialized NLopt API. The constrtol_abs parameter is an absolute feasibility tolerance applied to all constraints."
},

{
    "location": "#Tutorial-1",
    "page": "Readme",
    "title": "Tutorial",
    "category": "section",
    "text": "The following example code solves the nonlinearly constrained minimization problem from the NLopt Tutorial:using NLopt\n\nfunction myfunc(x::Vector, grad::Vector)\n    if length(grad) > 0\n        grad[1] = 0\n        grad[2] = 0.5/sqrt(x[2])\n    end\n    return sqrt(x[2])\nend\n\nfunction myconstraint(x::Vector, grad::Vector, a, b)\n    if length(grad) > 0\n        grad[1] = 3a * (a*x[1] + b)^2\n        grad[2] = -1\n    end\n    (a*x[1] + b)^3 - x[2]\nend\n\nopt = Opt(:LD_MMA, 2)\nlower_bounds!(opt, [-Inf, 0.])\nxtol_rel!(opt,1e-4)\n\nmin_objective!(opt, myfunc)\ninequality_constraint!(opt, (x,g) -> myconstraint(x,g,2,0), 1e-8)\ninequality_constraint!(opt, (x,g) -> myconstraint(x,g,-1,1), 1e-8)\n\n(minf,minx,ret) = optimize(opt, [1.234, 5.678])\ncount = opt.numevals # the number of function evaluations\nprintln(\"got $minf at $minx after $count iterations (returned $ret)\")The output should be:got 0.5443310476200902 at [0.3333333346933468,0.29629628940318486] after 11 iterations (returned XTOL_REACHED)Much like the NLopt interfaces in other languages, you create an Opt object (analogous to nlopt_opt in C) which encapsulates the dimensionality of your problem (here, 2) and the algorithm to be used (here, LD_MMA) and use various functions to specify the constraints and stopping criteria (along with any other aspects of the problem).The same problem can be solved by using the JuMP interface to NLopt:using JuMP\nusing NLopt\n\nm = Model(solver=NLoptSolver(algorithm=:LD_MMA))\n\na1 = 2\nb1 = 0\na2 = -1\nb2 = 1\n\n@variable(m, x1)\n@variable(m, x2 >= 0)\n\n@NLobjective(m, Min, sqrt(x2))\n@NLconstraint(m, x2 >= (a1*x1+b1)^3)\n@NLconstraint(m, x2 >= (a2*x1+b2)^3)\n\nsetvalue(x1, 1.234)\nsetvalue(x2, 5.678)\n\nstatus = solve(m)\n\nprintln(\"got \", getobjectivevalue(m), \" at \", [getvalue(x1),getvalue(x2)])The output should be:got 0.5443310477213124 at [0.3333333342139688,0.29629628951338166]Note that the MathProgBase interface sets slightly different convergence tolerances by default, so the outputs from the two problems are not identical."
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "The main purpose of this section is to document the syntax and unique features of the Julia interface; for more detail on the underlying features, please refer to the C documentation in the NLopt Reference."
},

{
    "location": "#Using-the-Julia-API-1",
    "page": "Readme",
    "title": "Using the Julia API",
    "category": "section",
    "text": "To use NLopt in Julia, your Julia program should include the line:using NLoptwhich imports the NLopt module and its symbols.  (Alternatively, you can use import NLopt if you want to keep all the NLopt symbols in their own namespace.  You would then prefix all functions below with NLopt., e.g. NLopt.Opt and so on.)"
},

{
    "location": "#The-Opt-type-1",
    "page": "Readme",
    "title": "The Opt type",
    "category": "section",
    "text": "The NLopt API revolves around an object of type Opt. Via functions acting on this object, all of the parameters of the optimization are specified (dimensions, algorithm, stopping criteria, constraints, objective function, etcetera), and then one finally calls the optimize function in order to perform the optimization. The object should normally be created via the constructor:opt = Opt(algorithm, n)given an algorithm (see NLopt Algorithms for possible values) and the dimensionality of the problem (n, the number of optimization parameters). Whereas in C the algorithms are specified by nlopt_algorithm constants of the form NLOPT_LD_MMA, NLOPT_LN_COBYLA, etcetera, the Julia algorithm values are symbols of the form :LD_MMA, :LN_COBYLA, etcetera (with the NLOPT_ prefix replaced by : to create a Julia symbol).There is also a copy(opt::Opt) function to make a copy of a given object (equivalent to nlopt_copy in the C API).If there is an error in these functions, an exception is thrown.The algorithm and dimension parameters of the object are immutable (cannot be changed without constructing a new object), but you can query them for a given object by the functions:ndims(opt::Opt)\nalgorithm(opt::Opt)You can get a string description of the algorithm via:algorithm_name(opt::Opt)"
},

{
    "location": "#Objective-function-1",
    "page": "Readme",
    "title": "Objective function",
    "category": "section",
    "text": "The objective function is specified by calling one of the functions:min_objective!(opt::Opt, f::Function)\nmax_objective!(opt::Opt, f::Function)depending on whether one wishes to minimize or maximize the objective function f, respectively. The function f should be of the form:function f(x::Vector, grad::Vector):\n    if length(grad) > 0:\n        ...set grad to gradient, in-place...\n    return ...value of f(x)...\nendThe return value should be the value of the function at the point x, where x is a (Float64) array of length n of the optimization parameters (the same as the dimension passed to the Opt constructor).In addition, if the argument grad is not empty [i.e. length(grad)>0], then grad is a (Float64) array of length n which should (upon return) be set to the gradient of the function with respect to the optimization parameters at x. That is, grad[i] should upon return contain the partial derivative &part;f/&part;x<sub>i</sub>, for 1&le;i&le;n, if grad is non-empty. Not all of the optimization algorithms (below) use the gradient information: for algorithms listed as \"derivative-free,\" the grad argument will always be empty and need never be computed. (For algorithms that do use gradient information, however, grad may still be empty for some calls.)Note that grad must be modified in-place by your function f. Generally, this means using indexing operations grad[...] = ... to overwrite the contents of grad.  For example grad = 2x will not work, because it points grad to a new array 2x rather than overwriting the old contents; instead, use an explicit loop or use grad[:] = 2x."
},

{
    "location": "#Bound-constraints-1",
    "page": "Readme",
    "title": "Bound constraints",
    "category": "section",
    "text": "The bound constraints can be specified by calling the functions:lower_bounds!(opt::Opt, lb::AbstractVector)\nupper_bounds!(opt::Opt, ub::AbstractVector)where lb and ub are real arrays of length n (the same as the dimension passed to the Opt constructor). For convenience, these are overloaded with functions that take a single number as arguments, in order to set the lower/upper bounds for all optimization parameters to a single constant.To retrieve the values of the lower/upper bounds, you can call one of:lower_bounds(opt::Opt)\nupper_bounds(opt::Opt)both of which return Vector{Float64} arrays.To specify an unbounded dimension, you can use &plusmn;Inf."
},

{
    "location": "#Nonlinear-constraints-1",
    "page": "Readme",
    "title": "Nonlinear constraints",
    "category": "section",
    "text": "Just as for nonlinear constraints in C, you can specify nonlinear inequality and equality constraints by the functions:inequality_constraint!(opt::Opt, fc, tol=0)\nequality_constraint!(opt::Opt, h, tol=0)where the arguments fc and h have the same form as the objective function above. The optional tol arguments specify a tolerance (which defaults to zero) in judging feasibility for the purposes of stopping the optimization, as in C.To remove all of the inequality and equality constraints from a given problem, you can call the following functions:remove_constraints!(opt::Opt)"
},

{
    "location": "#Vector-valued-constraints-1",
    "page": "Readme",
    "title": "Vector-valued constraints",
    "category": "section",
    "text": "Just as for nonlinear constraints in C, you can specify vector-valued nonlinear inequality and equality constraints by the functionsinequality_constraint!(opt::Opt, c, tol::AbstractVector)\nequality_constraint!(opt::Opt, c, tol::AbstractVector)Here, tol is an array of the tolerances in each constraint dimension; the dimensionality m of the constraint is determined by length(tol). The constraint function c must be of the form:function c(result::Vector, x::Vector, grad::Matrix):\n    if length(grad) > 0:\n        ...set grad to gradient, in-place...\n    result[1] = ...value of c1(x)...\n    result[2] = ...value of c2(x)...\n    ...result is a (Float64) array whose length equals the dimensionality m of the constraint (same as the length of tol above), which upon return should be set in-place (see also above) to the constraint results at the point x (a Float64 array whose length n is the same as the dimension passed to the Opt constructor). Any return value of the function is ignored.In addition, if the argument grad is not empty [i.e. length(grad)>0], then grad is a 2d array of size n&times;m which should (upon return) be set in-place (see above) to the gradient of the function with respect to the optimization parameters at x. That is, grad[j,i] should upon return contain the partial derivative &part;c<sub>i</sub>/&part;x<sub>j</sub> if grad is non-empty. Not all of the optimization algorithms (below) use the gradient information: for algorithms listed as \"derivative-free,\" the grad argument will always be empty and need never be computed. (For algorithms that do use gradient information, however, grad may still be empty for some calls.)An inequality constraint corresponds to c<sub>i</sub>&le;0 for 1&le;i&le;m, and an equality constraint corresponds to c<sub>i</sub>=0, in both cases with tolerance tol[i] for purposes of termination criteria.(You can add multiple vector-valued constraints and/or scalar constraints in the same problem.)"
},

{
    "location": "#Stopping-criteria-1",
    "page": "Readme",
    "title": "Stopping criteria",
    "category": "section",
    "text": "As explained in the C API Reference and the Introduction), you have multiple options for different stopping criteria that you can specify. (Unspecified stopping criteria are disabled; i.e., they have innocuous defaults.)For each stopping criteria, there are (at least) two functions: a \"set\" function (ending with !) to specify the stopping criterion, and a \"get\" function to retrieve the current value for that criterion. The meanings of each criterion are exactly the same as in the C API.stopval!(o::Opt, stopval::Real)\nstopval(o::Opt)Stop when an objective value of at least stopval is found.ftol_rel!(o::Opt, tol::Real)\nftol_rel(o::Opt)Set relative tolerance on function value.ftol_abs!(o::Opt, tol::Real)\nftol_abs(o::Opt)Set absolute tolerance on function value.xtol_rel!(o::Opt, tol::Real)\nxtol_rel(o::Opt)Set relative tolerance on optimization parameters.xtol_abs!(o::Opt, tol)\nxtol_abs(o::Opt)Set absolute tolerances on optimization parameters. The tol input must be an array of length n (the dimension specified in the Opt constructor); alternatively, you can pass a single number in order to set the same tolerance for all optimization parameters. xtol_abs(o) returns the tolerances as a array.maxeval!(o::Opt, mev::Integer)\nmaxeval(o::Opt)Stop when the number of function evaluations exceeds mev. (0 or negative for no limit.)maxtime!(o::Opt, t::Real)\nmaxtime(o::Opt)Stop when the optimization time (in seconds) exceeds t. (0 or negative for no limit.)"
},

{
    "location": "#Forced-termination-1",
    "page": "Readme",
    "title": "Forced termination",
    "category": "section",
    "text": "In certain cases, the caller may wish to force the optimization to halt, for some reason unknown to NLopt. For example, if the user presses Ctrl-C, or there is an error of some sort in the objective function. You can do this by throwing any exception inside your objective/constraint functions: the optimization will be halted gracefully, and the same exception will be thrown to the caller. See below regarding exceptions. The Julia equivalent of nlopt_forced_stop from the C API is to throw a ForcedStop exception."
},

{
    "location": "#Performing-the-optimization-1",
    "page": "Readme",
    "title": "Performing the optimization",
    "category": "section",
    "text": "Once all of the desired optimization parameters have been specified in a given object opt::Opt, you can perform the optimization by calling:(optf,optx,ret) = optimize(opt::Opt, x::AbstractVector)On input, x is an array of length n (the dimension of the problem from the Opt constructor) giving an initial guess for the optimization parameters. The return value optx is a array containing the optimized values of the optimization parameters. optf contains the optimized value of the objective function, and ret contains a symbol indicating the NLopt return code (below).Alternatively,(optf,optx,ret) = optimize!(opt::Opt, x::Vector{Float64})is the same but modifies x in-place (as well as returning optx=x).On failure (negative return codes), optimize() throws an exception (see Exceptions, below)."
},

{
    "location": "#Return-values-1",
    "page": "Readme",
    "title": "Return values",
    "category": "section",
    "text": "The possible return values are the same as the return values in the C API, except that the NLOPT_ prefix is replaced with :.  That is, the return values are :SUCCESS, :XTOL_REACHED, etcetera (instead of NLOPT_SUCCESS etcetera)."
},

{
    "location": "#Exceptions-1",
    "page": "Readme",
    "title": "Exceptions",
    "category": "section",
    "text": "The error codes in the C API are replaced in the Julia API by thrown exceptions. The following exceptions are thrown by the various routines:If your objective/constraint functions throw any exception during the execution of optimize, it will be caught by NLopt and the optimization will be halted gracefully, and opt.optimize will re-throw the same exception to its caller."
},

{
    "location": "#Local/subsidiary-optimization-algorithm-1",
    "page": "Readme",
    "title": "Local/subsidiary optimization algorithm",
    "category": "section",
    "text": "Some of the algorithms, especially MLSL and AUGLAG, use a different optimization algorithm as a subroutine, typically for local optimization. You can change the local search algorithm and its tolerances by calling:local_optimizer!(opt::Opt, local_opt::Opt)Here, local_opt is another Opt object whose parameters are used to determine the local search algorithm, its stopping criteria, and other algorithm parameters. (However, the objective function, bounds, and nonlinear-constraint parameters of local_opt are ignored.) The dimension n of local_opt must match that of opt.This function makes a copy of the local_opt object, so you can freely change your original local_opt afterwards without affecting opt."
},

{
    "location": "#Initial-step-size-1",
    "page": "Readme",
    "title": "Initial step size",
    "category": "section",
    "text": "Just as in the C API, you can get and set the initial step sizes for derivative-free optimization algorithms. The Julia equivalents of the C functions are the following functions:initial_step!(opt::Opt, dx::AbstractVector)Here, dx is an array of the (nonzero) initial steps for each dimension, or a single number if you wish to use the same initial steps for all dimensions. get_initial_step(opt::Opt, x::AbstractVector) returns the initial step that will be used for a starting guess of x in optimize(opt,x)."
},

{
    "location": "#Stochastic-population-1",
    "page": "Readme",
    "title": "Stochastic population",
    "category": "section",
    "text": "Just as in the C API, you can get and set the initial population for stochastic optimization algorithms, by the functions:population!(opt::Opt, pop::Integer)\npopulation(opt::Opt)(A pop of zero implies that the heuristic default will be used.)"
},

{
    "location": "#Pseudorandom-numbers-1",
    "page": "Readme",
    "title": "Pseudorandom numbers",
    "category": "section",
    "text": "For stochastic optimization algorithms, NLopt uses pseudorandom numbers generated by the Mersenne Twister algorithm, based on code from Makoto Matsumoto. By default, the seed for the random numbers is generated from the system time, so that you will get a different sequence of pseudorandom numbers each time you run your program. If you want to use a \"deterministic\" sequence of pseudorandom numbers, i.e. the same sequence from run to run, you can set the seed by calling:NLopt.srand(seed::Integer)To reset the seed based on the system time, you can call NLopt.srand_time().(Normally, you don\'t need to call this as it is called automatically. However, it might be useful if you want to \"re-randomize\" the pseudorandom numbers after calling nlopt.srand to set a deterministic seed.)"
},

{
    "location": "#Vector-storage-for-limited-memory-quasi-Newton-algorithms-1",
    "page": "Readme",
    "title": "Vector storage for limited-memory quasi-Newton algorithms",
    "category": "section",
    "text": "Just as in the C API, you can get and set the number M of stored vectors for limited-memory quasi-Newton algorithms, via the functions:vector_storage!(opt::Opt, M::Integer)\nvector_storage(opt::Opt)(The default is M=0, in which case NLopt uses a heuristic nonzero value.)"
},

{
    "location": "#Version-number-1",
    "page": "Readme",
    "title": "Version number",
    "category": "section",
    "text": "The version number of NLopt is given by the global variable:NLOPT_VERSION::VersionNumberwhere VersionNumber is a built-in Julia type from the Julia standard library."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "This module was initially written by Steven G. Johnson, with subsequent contributions by several other authors (see the git history)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NLopt.@GETSETNLopt.@GETSET_VECNLopt.AUGLAGNLopt.AUGLAG_EQNLopt.AlgorithmNLopt.Callback_DataNLopt.FAILURENLopt.FORCED_STOPNLopt.FTOL_REACHEDNLopt.ForcedStopNLopt.GD_MLSLNLopt.GD_MLSL_LDSNLopt.GD_STOGONLopt.GD_STOGO_RANDNLopt.GN_AGSNLopt.GN_CRS2_LMNLopt.GN_DIRECTNLopt.GN_DIRECT_LNLopt.GN_DIRECT_L_NOSCALNLopt.GN_DIRECT_L_RANDNLopt.GN_DIRECT_L_RAND_NOSCALNLopt.GN_DIRECT_NOSCALNLopt.GN_ESCHNLopt.GN_ISRESNLopt.GN_MLSLNLopt.GN_MLSL_LDSNLopt.GN_ORIG_DIRECTNLopt.GN_ORIG_DIRECT_LNLopt.G_MLSLNLopt.G_MLSL_LDSNLopt.INVALID_ARGSNLopt.LD_AUGLAGNLopt.LD_AUGLAG_EQNLopt.LD_CCSAQNLopt.LD_LBFGSNLopt.LD_LBFGS_NOCEDALNLopt.LD_MMANLopt.LD_SLSQPNLopt.LD_TNEWTONNLopt.LD_TNEWTON_PRECONDNLopt.LD_TNEWTON_PRECOND_RESTARTNLopt.LD_TNEWTON_RESTARTNLopt.LD_VAR1NLopt.LD_VAR2NLopt.LN_AUGLAGNLopt.LN_AUGLAG_EQNLopt.LN_BOBYQANLopt.LN_COBYLANLopt.LN_NELDERMEADNLopt.LN_NEWUOANLopt.LN_NEWUOA_BOUNDNLopt.LN_PRAXISNLopt.LN_SBPLXNLopt.MAXEVAL_REACHEDNLopt.MAXTIME_REACHEDNLopt.NLOPT_VERSIONNLopt.NLoptNLopt.NLoptMathProgModelNLopt.NLoptSolverNLopt.OUT_OF_MEMORYNLopt.OptNLopt.ROUNDOFF_LIMITEDNLopt.ResultNLopt.STOPVAL_REACHEDNLopt.SUCCESSNLopt.XTOL_REACHEDNLopt._OptNLopt.__init__NLopt._errmsgNLopt.algorithmNLopt.algorithm_nameNLopt.check_depsNLopt.chkNLopt.default_initial_step!NLopt.depsjl_pathNLopt.destroyNLopt.empty_gradNLopt.empty_jacNLopt.equality_constraint!NLopt.errmsgNLopt.evalNLopt.force_stopNLopt.force_stop!NLopt.ftol_absNLopt.ftol_abs!NLopt.ftol_relNLopt.ftol_rel!NLopt.includeNLopt.inequality_constraint!NLopt.initial_stepNLopt.initial_step!NLopt.libnloptNLopt.local_optimizer!NLopt.lower_boundsNLopt.lower_bounds!NLopt.max_objective!NLopt.maxevalNLopt.maxeval!NLopt.maxtimeNLopt.maxtime!NLopt.min_objective!NLopt.munge_callbackNLopt.nlopt_callback_wrapperNLopt.nlopt_exceptionNLopt.nlopt_vcallback_wrapperNLopt.numevalsNLopt.optimizeNLopt.optimize!NLopt.populationNLopt.population!NLopt.qsymNLopt.remove_constraints!NLopt.srandNLopt.srand_timeNLopt.stopvalNLopt.stopval!NLopt.sym2algNLopt.upper_boundsNLopt.upper_bounds!NLopt.vector_storageNLopt.vector_storage!NLopt.versionNLopt.xtol_absNLopt.xtol_abs!NLopt.xtol_relNLopt.xtol_rel!"
},

]}
