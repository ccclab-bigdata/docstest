var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#COIN-OR-Branch-and-Cut-Interface-(Cbc.jl)-1",
    "page": "Readme",
    "title": "COIN-OR Branch and Cut Interface (Cbc.jl)",
    "category": "section",
    "text": "(Image: )Cbc.jl is an interface to the COIN-OR Branch and Cut solver. It provides a complete interface to the low-level C API, as well as an implementation of the solver-independent MathProgBase and MathOptInterface API\'s.   Note: This wrapper is maintained by the JuliaOpt community and is not a COIN-OR project.(Image: Build Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> import Pkg; Pkg.add(\"Cbc\")Cbc.jl will use BinaryProvider.jl to automatically install the Cbc binaries. This should work for both the official Julia binaries from https://julialang.org/downloads/ and source-builds."
},

{
    "location": "#Custom-Installation-1",
    "page": "Readme",
    "title": "Custom Installation",
    "category": "section",
    "text": "To install custom built Clp binaries set the environmental variable JULIA_CBC_LIBRARY_PATH and call import Pkg; Pkg.build(\"Cbc\"). For instance, if the libraries are installed in /opt/lib just callENV[\"JULIA_CBC_LIBRARY_PATH\"] = \"/opt/lib\"\nimport Pkg; Pkg.build(\"Cbc\")If you do not want BinaryProvider to download the default binaries on install set  JULIA_CBC_LIBRARY_PATH  before calling import Pkg; Pkg.add(\"Cbc\").To switch back to the default binaries clear JULIA_CBC_LIBRARY_PATH and call import Pkg; Pkg.build(\"Cbc\")."
},

{
    "location": "#Using-with-**[MathProgBase]**-1",
    "page": "Readme",
    "title": "Using with [MathProgBase]",
    "category": "section",
    "text": "Cbc provides a solver object that can be passed to mixintprog in MathProgBase (and used to create instances of the solver-independent AbstractMathProgModel type):using Cbc\nusing MathProgBase\nmixintprog(..., CbcSolver(Option1=value1,Option2=value2,...))see the MathProgBase documentation for further information.Options are solver-dependent, and unfortunately not well documented. The following options are likely to be the most useful:seconds – Solution timeout limit. (Must be a Float64)\nlogLevel – Set to 1 to enable solution output.\nmaxSolutions – Terminate after this many feasible solutions have been found.\nmaxNodes – Terminate after this many branch-and-bound nodes have been evaluated.\nallowableGap – Terminate after optimality gap is less than this value (on an absolute scale).\nratioGap – Terminate after optimality gap is smaller than this relative fraction.\nthreads – Set the number of threads to use for parallel branch & boundThe complete list of parameters can be found by running the cbc executable and typing  at the prompt.In addition, we provide the julia-specific option check_warmstart which, if set to false, will tell the wrapper to pass along the warmstart solution regardless of if it satisfies the constraints of the problem. The default value is true."
},

{
    "location": "#Using-the-C-interface-1",
    "page": "Readme",
    "title": "Using the C interface",
    "category": "section",
    "text": "The low-level C interface is available in the CbcCInterface submodule:using Cbc.CbcCInterfaceUsing this interface is not recommended.[Cbc]: https://projects.coin-or.org/Cbc [MathProgBase]: https://github.com/JuliaOpt/MathProgBase.jl"
},

{
    "location": "autodocs/#Cbc.create_constraint_indices",
    "page": "Docstrings",
    "title": "Cbc.create_constraint_indices",
    "category": "function",
    "text": "create_constraint_indices(src::MOI.ModelLike, mapping::MOIU.IndexMap)\n\nCreate a new set of constraint indices. Importantly:\n\nThe .value field of each ConstraintIndex{ScalarAffineFunction, S} is its row in the constraint matrix.\nThe .value field of each ConstraintIndex{SingleVariable, S} is the column of the associated variable in the constraint matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Cbc.create_variable_indices",
    "page": "Docstrings",
    "title": "Cbc.create_variable_indices",
    "category": "function",
    "text": "create_variable_indices(src::MOI.ModelLike, mapping::MOIU.IndexMap)\n\nCreate a new set of variable indices. Importantly, the .value field of each VariableIndex is its column in the constraint matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Cbc.CbcCbc.CbcCICbc.CbcCInterfaceCbc.CbcMathProgSolverInterfaceCbc.CbcModelFormatCbc.CbcSolverCbc.MOICbc.MOIUCbc.OptimizerCbc.add_termsCbc.check_depsCbc.column_valueCbc.create_constraint_indicesCbc.create_variable_indicesCbc.evalCbc.includeCbc.libCbcCbc.libcbcsolverCbc.load_constraintCbc.load_objective"
},

]}
