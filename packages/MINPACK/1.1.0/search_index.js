var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MINPACK-1",
    "page": "Readme",
    "title": "MINPACK",
    "category": "section",
    "text": "(Image: Build Status)(Image: Windows Build status)(Image: Coverage Status)(Image: codecov.io)Julia interface to cminpack, a C/C++ rewrite of the MINPACK software (originally in fortran)."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Usage is quite simple, there are two main API methods:fsolve(f!::Function, x0::Vector{Float64}, m::Int=length(x0); tol::Float64=1e-8,\n       show_trace::Bool=false, tracing::Bool=false, method::Symbol=:hybr,\n       iterations::Int=typemax(Int), io::IO=STDOUT, kwargs...)\n\nfsolve(f!::Function, g!::Function, x0::Vector{Float64}, m::Int=length(x0);\n       tol::Float64=1e-8, show_trace::Bool=false, tracing::Bool=false,\n       method::Symbol=:hybr, iterations::Int=typemax(Int), io::IO=STDOUT,\n       kwargs...)The functions f! and g! should accept the current point (call it x) as the second argument and fill the first argument with the function values and Jacobian matrix, repsectively. If no Jacobian is passed, one will be approximated using finite differences.Example:julia> using MINPACK\n\njulia> function f!(fvec, x)\n           fvec[1] = (x[1]+3)*(x[2]^3-7)+18\n           fvec[2] = sin(x[2]*exp(x[1])-1)\n           fvec\n       end;\n\njulia> function g!(fjac, x)\n           fjac[1, 1] = x[2]^3 - 7\n           fjac[1, 2] = 3 * (x[1] + 3) * x[2]*x[2]\n           fjac[2, 1] = x[2] * exp(x[1]) * cos(x[2] * exp(x[1]) - 1)\n           fjac[2, 2] = exp(x[1]) * cos(x[2] * exp(x[1]) - 1)\n           fjac\n       end\ng! (generic function with 2 methods)\n\njulia> res_jac = fsolve(f!, g!, ones(2))\nResults of Nonlinear Solver Algorithm\n * Algorithm: Modified Powell (User Jac, Expert)\n * Starting Point: [1.0, 1.0]\n * Zero: [6.05177e-12, 1.0]\n * Inf-norm of residuals: 0.000000\n * Convergence: true\n * Message: algorithm estimates that the relative error between x and the solution is at most tol\n * Total time: 0.033416 seconds\n * Function Calls: 0\n * Jacobian Calls (df/dx): 0\n\njulia> res_nojac = fsolve(f!, ones(2))\nResults of Nonlinear Solver Algorithm\n * Algorithm: Modified Powell\n * Starting Point: [1.0, 1.0]\n * Zero: [6.05138e-12, 1.0]\n * Inf-norm of residuals: 0.000000\n * Convergence: true\n * Message: algorithm estimates that the relative error between x and the solution is at most tol\n * Total time: 0.000024 seconds\n * Function Calls: 0\n * Jacobian Calls (df/dx): 0The additional available keyword arguments captured by ;kwargs... vary by the method used.The keyword argument method can take on different value depending on which method of fsolve you are calling.Available methods for the version where only f! is pased are::hybr: Modified version of Powell\'s algorithm. Uses MINPACK routine hybrd1\n:lm: Levenberg-Marquardt. Uses MINPACK routine lmdif1\n:lmdif: Advanced Levenberg-Marquardt (more options available with ;kwargs...). See MINPACK routine lmdif for more information\n:hybrd: Advacned modified version of Powell\'s algorithm (more options available with ;kwargs...). See MINPACK routine hybrd for more informationAvailable methods for the version where both f! and g! are passed are::hybr: Advacned modified version of Powell\'s algorithm with user supplied Jacobian. Additional arguments are available via ;kwargs.... See MINPACK routine hybrj for more information\n:lm: Advanced Levenberg-Marquardt with user supplied Jacobian. Additional arguments are available via ;kwargs.... See MINPACK routine lmder for more information"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MINPACK.AlgoTraceMINPACK.IterationStateMINPACK.MINPACKMINPACK.SolverResultsMINPACK._dl_extMINPACK._hybr_messagesMINPACK._hybrd_messagesMINPACK._hybrj_messagesMINPACK._lmder_messagesMINPACK._lmdif1_messagesMINPACK._lmdif_messagesMINPACK.cminpackMINPACK.evalMINPACK.fdjac1MINPACK.fsolveMINPACK.hybrdMINPACK.hybrd1MINPACK.hybrjMINPACK.includeMINPACK.lmderMINPACK.lmdifMINPACK.lmdif1"
},

]}
