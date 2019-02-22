var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DFOLS-1",
    "page": "Readme",
    "title": "DFOLS",
    "category": "section",
    "text": "(Image: Build Status)A light wrapper around the DFO-LS (Derivative-Free Optimizer for Least-Squares Minimization) Python package written by the Numerical Algorithms Group at Oxford University. See here for the paper and the github repository."
},

{
    "location": "#TOC-1",
    "page": "Readme",
    "title": "TOC",
    "category": "section",
    "text": "Installation\nUsage\nConstraints and Stochastic Objectives\nAdvanced UsageNote: This package is GPL3 licensed, to comply with the underlying Python."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Simply run] add DFOLSNote: The build script assumes that $(PyCall.pyprogramname) pip is a valid command. This is automatically true on Windows and macOS, but needs to be verified on Linux (i.e., make sure it isn\'t pip3, or python-pip3, or something). You can do this by aliasing pip=pip3 or setting up a symbolic link pip -> pip3."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "We define a type DFOLSResults to store the solver output.struct DFOLSResults{TI, TF}\n    x::Array{TF, 1}\n    resid::Array{TF, 1}\n    f::TF\n    jacobian::Union{Nothing, Matrix{TF}} # jacobian is nothing if convergence is immediate\n    nf::TI\n    nx::TI # differs from nf if sample averaging is used\n    nruns::TI # > 1 if multiple restarts\n    flag::TI\n    msg::String\n    EXIT_SUCCESS::TI\n    EXIT_MAXFUN_WARNING::TI\n    EXIT_SLOW_WARNING::TI\n    EXIT_FALSE_SUCCESS_WARNING::TI\n    EXIT_INPUT_ERROR::TI\n    EXIT_TR_INCREASE_ERROR::TI\n    EXIT_LINALG_ERROR::TI\nendAnd we define a set of convenience functions to interact with itconverged, optimizer, optimum, residuals, jacobian, nf, nruns, nx, flag, msgYou can run the solver by calling the solve function, as belowrosenbrock = x -> [10. * (x[2]-x[1]^2), 1. - x[1]]\nsol = solve(rosenbrock, [-1.2, 1.])Options for solve includefunction solve(objfun, x0::Array{TF, 1};\n                bounds = nothing,\n                npt = nothing,\n                rhobeg = nothing,\n                rhoend = 1e-8,\n                maxfun = nothing,\n                nsamples = nothing,\n                user_params = nothing, # see https://numericalalgorithmsgroup.github.io/dfols/build/html/advanced.html\n                objfun_has_noise = false,\n                scaling_within_bounds = false) where {TF <: AbstractFloat}"
},

{
    "location": "#Constraints-and-Stochastic-Objectives-1",
    "page": "Readme",
    "title": "Constraints and Stochastic Objectives",
    "category": "section",
    "text": "You can impose constraints on the solution spacesolve(rosenbrock, x0, bounds = ([-5., -5.], [5., 5.])) # two-sided box\nsolve(rosenbrock, x0, bounds = ([-5., -5.], nothing)) # one-sided constraintAnd note that the objective is stochasticσ = 0.01\nμ = 1.\nrosenbrock_noisy = x -> rosenbrock(x) .* (μ .+ σ*randn(2))\nsolve(rosenbrock_noisy, x0, objfun_has_noise=true)Note: The solver will determine the stochasticity of the objective only by examining the objfun_has_noise flag, and not by looking at the actual function supplied."
},

{
    "location": "#Advanced-Usage-1",
    "page": "Readme",
    "title": "Advanced Usage",
    "category": "section",
    "text": "The user_params should be a Julia dict (see here for valid key, value pairs). For example:solve(rosenbrock, x0, user_params = Dict(\"init.random_initial_directions\" => false,\n                                        \"model.abs_tol\" => 1e-20,\n                                        \"noise.quit_on_noise_level\" => false))"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DFOLS.DFOLSDFOLS.DFOLSResultsDFOLS.__init__DFOLS.convergedDFOLS.dfolsDFOLS.evalDFOLS.flagDFOLS.includeDFOLS.jacobianDFOLS.msgDFOLS.nfDFOLS.nrunsDFOLS.nxDFOLS.optimizerDFOLS.optimumDFOLS.residualsDFOLS.solve"
},

]}
