var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#COIN-OR-Linear-Programming-Interface-(Clp.jl)-1",
    "page": "Readme",
    "title": "COIN-OR Linear Programming Interface (Clp.jl)",
    "category": "section",
    "text": "(Image: )Clp.jl is an interface to the COIN-OR Linear Programming solver. It provides a complete interface to the low-level C API, as well as an implementation of the solver-independent MathProgBase and MathOptInterface API\'s.   Note: This wrapper is maintained by the JuliaOpt community and is not a COIN-OR project.(Image: Build Status) (Image: codecov)[Clp]: https://projects.coin-or.org/Clp [Cbc]: https://github.com/JuliaOpt/Cbc.jl"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> import Pkg; Pkg.add(\"Clp\")Clp.jl will use BinaryProvider.jl to automatically install the Clp binaries. This should work for both the official Julia binaries from https://julialang.org/downloads/ and source-builds."
},

{
    "location": "#Custom-Installation-1",
    "page": "Readme",
    "title": "Custom Installation",
    "category": "section",
    "text": "To install custom built Clp binaries set the environmental variable JULIA_CLP_LIBRARY_PATH and call import Pkg; Pkg.build(\"Clp\"). For instance, if the libraries are installed in /opt/lib, then callENV[\"JULIA_CLP_LIBRARY_PATH\"] = \"/opt/lib\"\nimport Pkg; Pkg.build(\"Clp\")If you do not want BinaryProvider to download the default binaries on install, set JULIA_CLP_LIBRARY_PATH before calling import Pkg; Pkg.add(\"Clp\").To switch back to the default binaries clear JULIA_CLP_LIBRARY_PATH and call import Pkg; Pkg.build(\"Clp\")."
},

{
    "location": "#Using-with-**[MathProgBase]**-1",
    "page": "Readme",
    "title": "Using with [MathProgBase]",
    "category": "section",
    "text": "Clp provides a solver object that can be passed to linprog in MathProgBase (and used to create instances of the solver-independent AbstractMathProgModel type):using Clp\nusing MathProgBase\nlinprog(..., ClpSolver(Option1=value1,Option2=value2,...))see the MathProgBase documentation for further information.[MathProgBase]: https://github.com/JuliaOpt/MathProgBase.jlOptions are solver-dependent. The following options are the most useful (and well documented):PrimalTolerance - primal feasibility tolerance (default 1e-7)\nDualTolerance - dual feasibility tolerance (default 1e-7)\nDualObjectiveLimit - when using dual simplex (where the objective is monotonically changing), terminate when the objective exceeds this limit\nMaximumIterations - terminate after performing this number of simplex iterations\nMaximumSeconds - terminate after this many seconds have passed\nLogLevel - set to 1, 2, 3, or 4 for increasing output (default 0)\nPresolveType - set to 1 to disable presolve\nSolveType - choose the solution method:\n0 - dual simplex- 1 - primal simplex\n- 3 - barrier with crossover to optimal basis\n- 4 - barrier without crossover to optimal basis\n- 5 - automaticInfeasibleReturn - set to 1 to return as soon as the problem is found to be infeasible (by default, an infeasibility proof is computed as well)"
},

{
    "location": "#Using-the-C-interface-1",
    "page": "Readme",
    "title": "Using the C interface",
    "category": "section",
    "text": "The low-level C interface is available in the ClpCInterface submodule:using Clp.ClpCInterfaceUsing this interface is only recommended for advanced users. The Julia API is essentially a thin wrapper around the interface exported by ClpsrcClp_C_Interfaceh, which is documented in-line."
},

{
    "location": "autodocs/#Clp.append_row",
    "page": "Docstrings",
    "title": "Clp.append_row",
    "category": "function",
    "text": "append_row(instance::Optimizer, row::Int, lower::Float64, upper::Float64,\n           rows::Vector{Int}, cols::Vector{Int}, coefs::Vector{Float64})\n\nGiven a sparse matrix in the triplet-form (rows, cols, coefs), add row row with upper bound upper and lower bound  lower to the instance instance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Clp.replace_inf",
    "page": "Docstrings",
    "title": "Clp.replace_inf",
    "category": "function",
    "text": "replace_inf(x::Real)\n\nReturn Inf if x>1e20, -Inf if x<-1e20, and x otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Clp.ClpClp.ClpCInterfaceClp.ClpMathProgSolverInterfaceClp.ClpSolverClp.LQOIClp.MOIClp.OptimizerClp.SUPPORTED_CONSTRAINTSClp.SUPPORTED_OBJECTIVESClp.append_rowClp.evalClp.includeClp.optionmapClp.replace_infClp.solveoptionmap"
},

]}
