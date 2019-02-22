var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Welcome-to-QuantumWalk.jl-1",
    "page": "Home",
    "title": "Welcome to QuantumWalk.jl",
    "category": "section",
    "text": "QuantumWalk.jl is a package for Julia programming language, which provides a framework for implementing and analyzing quantum walks. The package provides general implementation of functions relevant for all models of quantum walks. To achieve this, it utilizes the Julia\'s type hierarchy to implement general functions working on large collection of quantum walk models."
},

{
    "location": "#Motivation-1",
    "page": "Home",
    "title": "Motivation",
    "category": "section",
    "text": "Since the very first paper defining quantum walk, plenty of quantum walk models were proposed. This includes continuous-time quantum walk, Szegedy quantum walk, coined quantum walk, stochastic quantum walk, and flip-flop quantum walk, to name a few. Most of the models have the same applications, including spatial search and transport. Furthermore, models can be compared by analyzing their general properties such as localization, propagation, and trapping.The purpose of the package is not to provide implementations of all models, as this is simply impossible due to the rapid progress in the theory of quantum walks. We aim to provide functionality common for all models. Thanks to this, by providing the implementation details of a particular single model, the user can execute the types of dynamics defined by the package, including spatial search and walk evolution. On the other hand, if one is interested in some property relevant for a general quantum walk, the package can be used for analyzing already existing models."
},

{
    "location": "#Package-structure-1",
    "page": "Home",
    "title": "Package structure",
    "category": "section",
    "text": "The package structure is based on two independent type hierarchies: the first one for operating on walk models, and second for defining dynamics. The dynamic is defined if the appropriate functions for the model are defined. For example, if one provides evolve, measure, and check_qwdynamics methods for the newly defined model, the package can be used to simulate the evolution of this model. If additionally, the user provides initial_state method, the package can be used for executing quantum spatial search dynamics.Models of quantum walks currently implemented in the package are presented in section Models, while the types of dynamics provided by the package are decried in section Dynamics. Simple usage examples can be found on our GitHub repository."
},

{
    "location": "#Can-I-contribute?-1",
    "page": "Home",
    "title": "Can I contribute?",
    "category": "section",
    "text": "Yes, You can! There are simply to many models and quantum dynamics, we cannot deal with all of them. If you can provide an implementation of a new model, we would be happy to include it in our package. The details can be found in section Contributing.An example of how to define new dynamics or quantum walk model can be found in tutorial directory on our GitHub repository."
},

{
    "location": "type_hierarchy/#",
    "page": "Type hierarchies",
    "title": "Type hierarchies",
    "category": "page",
    "text": "DocTestSetup = quote\n   using QuantumWalk, LightGraphs\nend"
},

{
    "location": "type_hierarchy/#Type-hierarchy-1",
    "page": "Type hierarchies",
    "title": "Type hierarchy",
    "category": "section",
    "text": "The package consists of two main type hierarchies: quantum walk model hierarchy, which is simply a description of the quantum walk model, and quantum walk dynamics, which are used for quantum walk analysis or simulation. The first one should in general be small, and should consist only of general parameters used in most of the models. Second one should possess all information needed for efficient simulation/analysis. For example CTQW model should consist of graph, on which the evolution is made and label which implies if adjacency or Laplacian matrix is used. Contrary QWEvolution{CTQW} should consist of Hamiltonian used for evolution."
},

{
    "location": "type_hierarchy/#Quantum-walk-models-hierarchy-1",
    "page": "Type hierarchies",
    "title": "Quantum walk models hierarchy",
    "category": "section",
    "text": "The main supertype is QWModel. As typically discrete and continuous evolution are simulated and analysed using different techniques, QWModelCont and QWModelDiscr are its direct subtypes. Furthermore every model have its direct abstract supertype, which is at least similar in the sense of implemented function to the supertype.Any instance of quantum walk model consists of graph on which evolution is made. Such graph can be accessed via graph function. Hence an typical definition of quantum walk model type takes the fromstruct Model <: AbstractModel\n   graph::Graph\n   ...\n   function Model(graph::Graph, ...)\n      ...\n      new(graph, ...)\n   end\nendAt the moment CTQW and Szegedy walks are implemented. Note that arbitrary quantum walk model should consist of measure, evolve and check_qwdynamics for basic pure walk simulation implemented in QWEvolution."
},

{
    "location": "type_hierarchy/#Quantum-dynamics-hierarchy-1",
    "page": "Type hierarchies",
    "title": "Quantum dynamics hierarchy",
    "category": "section",
    "text": "The main supertype is QWDynamics. As the algorithms and analysis usually differs strongly, subtypes of QWDynamics should be mostly a composite types.Any QWDynamics should consist of at least two parameters: model::QWModel, which is a quantum walk model, and parameters::Dict{Symbol,Any}, which is a dictionary consisting of values needed for model. Elements are accessible via function with the same name. In order to check correctness, check_qwdynamics should always be executed in the constructor. Typical quantum walk dynamics are defined as follows.struct Dynamics{T} <: QWDynamics{T}\n  model::T\n  parameters::Dict{Symbol}\n  ...\n\n  function Dynamics(model::T, parameters::Dict{Symbol}, ...) where T<:QWModel\n     ...\n     check_qwdynamics(Dynamics, model, parameters, ...)\n     ...\n     new(model, parameters, ...)\n  end\nendAt the moment QWEvolution for pure walk evolution and QWSearch for quantum spatial search are implemented. All dynamics provides execute functionality, together with its variation."
},

{
    "location": "type_hierarchy/#Documentation-1",
    "page": "Type hierarchies",
    "title": "Documentation",
    "category": "section",
    "text": "Following functions are connected to the presented topic:Order = [:type, :function]\nModules = [QuantumWalk]\nPages   = [\"type_hierarchy.md\"]"
},

{
    "location": "type_hierarchy/#QuantumWalk.QWDynamics",
    "page": "Type hierarchies",
    "title": "QuantumWalk.QWDynamics",
    "category": "type",
    "text": "QWDynamics\n\nAbstract supertype of all dynamics on quantum walk models.\n\n\n\n\n\n"
},

{
    "location": "type_hierarchy/#QuantumWalk.QWModel",
    "page": "Type hierarchies",
    "title": "QuantumWalk.QWModel",
    "category": "type",
    "text": "QWModel\n\nAbstract supertype of all quantum walk models.\n\n\n\n\n\n"
},

{
    "location": "type_hierarchy/#QuantumWalk.QWModelCont",
    "page": "Type hierarchies",
    "title": "QuantumWalk.QWModelCont",
    "category": "type",
    "text": "QWModelCont\n\nAbstract supertype of all continuous quantum walk models.\n\n\n\n\n\n"
},

{
    "location": "type_hierarchy/#QuantumWalk.QWModelDiscr",
    "page": "Type hierarchies",
    "title": "QuantumWalk.QWModelDiscr",
    "category": "type",
    "text": "QWModelDiscr\n\nAbstract supertype of all discrete quantum walk models.\n\n\n\n\n\n"
},

{
    "location": "type_hierarchy/#QuantumWalk.graph-Tuple{QWModel}",
    "page": "Type hierarchies",
    "title": "QuantumWalk.graph",
    "category": "method",
    "text": "graph(model)\n\nReturns graph element of model.\n\n\n\n\n\n"
},

{
    "location": "type_hierarchy/#QuantumWalk.graph-Tuple{QWDynamics}",
    "page": "Type hierarchies",
    "title": "QuantumWalk.graph",
    "category": "method",
    "text": "graph(qwd)\n\nReturns graph element of model from dynamics qwd. Equivalent to graph(model(qwd)).\n\n\n\n\n\n"
},

{
    "location": "type_hierarchy/#QuantumWalk.model-Tuple{QWDynamics}",
    "page": "Type hierarchies",
    "title": "QuantumWalk.model",
    "category": "method",
    "text": "model(qwd)\n\nReturns model element of dynamics qwd.\n\n\n\n\n\n"
},

{
    "location": "type_hierarchy/#QuantumWalk.parameters-Tuple{QWDynamics}",
    "page": "Type hierarchies",
    "title": "QuantumWalk.parameters",
    "category": "method",
    "text": "parameters(qwd)\n\nReturns parameters element of dynamics qwd.\n\n\n\n\n\n"
},

{
    "location": "type_hierarchy/#Full-docs-1",
    "page": "Type hierarchies",
    "title": "Full docs",
    "category": "section",
    "text": "QWDynamics{T<:QWModel}\nQWModel\nQWModelCont\nQWModelDiscr\ngraph(::QWModel)\ngraph(::QWDynamics)\nmodel(::QWDynamics)\nparameters(::QWDynamics)"
},

{
    "location": "quantum_walk/#",
    "page": "Quantum walk evolution",
    "title": "Quantum walk evolution",
    "category": "page",
    "text": "DocTestSetup = quote\n   using QuantumWalk, LightGraphs\nend"
},

{
    "location": "quantum_walk/#Quantum-walk-evolution-1",
    "page": "Quantum walk evolution",
    "title": "Quantum walk evolution",
    "category": "section",
    "text": "The simplest quantum walk evolution. It simply takes the model and initial state from the user, simulate an evolution and outputs the state or the probability distribution of measured state.The dynamics requires evolve, measure and check_qwdynamics functions. It provides execute, execute_single, execute_single_measured, execute_all and execute_all_measured functions. Depending on the name it outputs single state or all states, measured or not measured. The execute combines the last four functions. In the case of type-stability requirement, we recommend to use the last four functions.Note: Methods execute_all and execute_all_measured are provided only for discrete quantum walk models."
},

{
    "location": "quantum_walk/#Example-1",
    "page": "Quantum walk evolution",
    "title": "Example",
    "category": "section",
    "text": "julia> qwe = QWEvolution(Szegedy(CompleteGraph(4)));\n\njulia> state = rand(16); state = sparse(state/norm(state));\n\njulia> execute_single(qwe, state, 4)\n16-element SparseVector{Float64,Int64} with 16 stored entries:\n  [1 ]  =  0.37243\n  [2 ]  =  0.402212\n  [3 ]  =  0.356914\n  [4 ]  =  0.0384893\n  [5 ]  =  0.230443\n  [6 ]  =  0.0373444\n  [7 ]  =  0.12092\n  [8 ]  =  0.285178\n  [9 ]  =  0.151519\n  [10]  =  0.258755\n  [11]  =  0.30374\n  [12]  =  0.375624\n  [13]  =  0.169741\n  [14]  =  -0.0403198\n  [15]  =  0.255573\n  [16]  =  0.0344363\n\njulia> execute_all_measured(qwe, state, 4)\n4×5 Array{Float64,2}:\n 0.273249  0.455568  0.308632  0.339199  0.429348\n 0.20334   0.165956  0.188335  0.188466  0.150447\n 0.244393  0.213254  0.378161  0.171268  0.323264\n 0.279018  0.165221  0.124872  0.301066  0.0969412\n\njulia> execute(qwe, state, 4, measure=true, all=true)\n4×5 Array{Float64,2}:\n 0.273249  0.455568  0.308632  0.339199  0.429348\n 0.20334   0.165956  0.188335  0.188466  0.150447\n 0.244393  0.213254  0.378161  0.171268  0.323264\n 0.279018  0.165221  0.124872  0.301066  0.0969412"
},

{
    "location": "quantum_walk/#Adjusting-model-to-QWEvolution-1",
    "page": "Quantum walk evolution",
    "title": "Adjusting model to QWEvolution",
    "category": "section",
    "text": "The QWEvolution requires an implementation of evolve, measure and check_qwdynamics. Instead of implementing purely quantum walk, we will implement simple random walk, which still fits our considerations.We create an  AbstractStochastic supertype, in case someone would prefer to make different stochastic evolution (for example change the stochastic matrix). Note we skipped some assertion checking for readability. Furthermore note we have defined two versions of measure: in most cases measuring only part of vertices are faster than making full measurement.abstract type AbstractStochastic <: QWModelDiscr end\n\nstruct UniformStochastic{G<:SimpleGraph} <: AbstractStochastic\n  graph::G\nend\n\nUniformScaling(digraph::G) where G= UniformStochastic{G}(digraph)\n\nfunction check_qwdynamics(::Type{QWEvolution},\n                          abs_stoch::UniformStochastic,\n                          parameters::Dict{Symbol,Any})\n  @assert :stochastic ∈ keys(parameters) \"parameters needs to have key stochastic\"\n  n = nv(graph(abs_stoch))\n  @assert isa(parameters[:stochastic], SparseMatrixCSC{<:Real}) \"value for :stochastic needs to be sparse matrix with real numbers\"\n  @assert size(parameters[:stochastic], 1) == size(parameters[:stochastic], 2) \"Stochastic matrix needs to be square stochastic matrix\"\n  @assert mapslices(sum, parameters[:stochastic], 1)[1,:] ≈ ones(n) \"Stochastic matrix needs to be square stochastic matrix of order graph\"\nend\n\nfunction stochastic_matrix(g::SimpleGraph)\n  a = adjacency_matrix(g)\n  a*spdiagm(mapslices(x->1/sum(x), a, 1)[1,:])\nend\n\nfunction QWEvolution(stoch::AbstractStochastic)\n   parameters = Dict{Symbol,Any}(:stochastic => stochastic_matrix(graph(stoch)))\n   QWEvolution(stoch, parameters)\nend\n\nfunction stochastic_evolution(s::SparseMatrixCSC{T}, v::Vector{T}) where T<:Real\n  s*v\nend\n\nfunction evolve(qws::QWDynamics{<:AbstractStochastic}, state)\n  stochastic_evolution(parameters(qws)[:stochastic], state)\nend\n\nfunction measure(::QWDynamics{<:AbstractStochastic}, state::Vector{<:Real})\n   return state\nend\n\nfunction measure(::QWDynamics{<:AbstractStochastic},\n                 state::Vector{<:Real},\n                 vertices::Vector{Int})\n   return state[vertices]\nendNow we can make a pure walk evolution.julia> dynamic = QWEvolution(UniformStochastic(smallgraph(:bull)))\nQuantumWalk.QWEvolution{UniformStochastic{LightGraphs.SimpleGraphs.SimpleGraph{Int64}}}(UniformStochastic{LightGraphs.SimpleGraphs.SimpleGraph{Int64}}({5, 5} undirected simple Int64 graph), Dict{Symbol,Any}(Pair{Symbol,Any}(:stochastic,\n  [2, 1]  =  0.5\n  [3, 1]  =  0.5\n  [1, 2]  =  0.333333\n  [3, 2]  =  0.333333\n  [4, 2]  =  0.333333\n  [1, 3]  =  0.333333\n  [2, 3]  =  0.333333\n  [5, 3]  =  0.333333\n  [2, 4]  =  1.0\n  [3, 5]  =  1.0)))\n\njulia> println(execute_single(dynamic, fill(1./5, 5), 5))\n[0.186831, 0.313169, 0.313169, 0.0934156, 0.0934156]Note that continuous walks requires time argument in evolution function, as an example consider  CTQW model."
},

{
    "location": "quantum_walk/#Documentation-1",
    "page": "Quantum walk evolution",
    "title": "Documentation",
    "category": "section",
    "text": "Following functions are connected to the dynamics. Note that since QWEvolution is a default subtype of QWDynamics, most of the functions are defined for the last type.Order = [:type, :function]\nModules = [QuantumWalk]\nPages   = [\"quantum_walk.md\"]"
},

{
    "location": "quantum_walk/#QuantumWalk.QWEvolution",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.QWEvolution",
    "category": "type",
    "text": "QWEvolution(model, parameters, check)\n\nType describing standard quantum walk evolution. check_qwdynamics is executed if and only iff check is true.\n\nNeeds implementation of\n\nevolve(::QWEvolution{<:QWModelDiscr}, state) or evolve(::QWEvolution{<:QWModelCont}, state, time::Real)\nmeasure(::QWEvolution, state)\ncheck_qwdynamics(QWEvolution, ::QWModel, parameters::Dict{Symbol})\nproper constructors.\n\nOffers functions\n\nexecute\nexecute_single\nexecute_single_measured\nexecute_all\nexecute_all_measured\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#QuantumWalk.check_qwdynamics-Tuple{Any}",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.check_qwdynamics",
    "category": "method",
    "text": "check_qwdynamics(qwdtype::Type{<:QWDynamics}, model::QWModel, parameters::Dict{Symbol}, ...)\ncheck_qwdynamics(qwd)\n\nChecks whetver combination of the arguments creates valid quantum walk dynamics qwdtype. Check whether qwd is properly parametrized dynamic.\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#QuantumWalk.evolve-Tuple{Any}",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.evolve",
    "category": "method",
    "text": "evolve(qwd::QWDynamics{<:QWModelDiscr}, state)\nevolve(qwd::QWDynamics{<:QWModelCont}, state, time::Real)\n\nEvolve state according to qwd. For discrete model single-step evolution is implemented. Type returned is the same as type of state.\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#QuantumWalk.execute-Tuple{QWDynamics,Any,Real}",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.execute",
    "category": "method",
    "text": "execute(qwd, initstate, runtime[, all=false, measure=false])\n\nRun proper execution function depending on given keywords. all and measure keywords defaults to false. In case of all being true, all intermidiate states are returned. Note that for all equal to true, the model specified by qwd needs to be disrete. For measure equal to true, measurement distributions are returned.\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#QuantumWalk.execute_all-Tuple{QWDynamics{#s4978} where #s4978<:QWModelDiscr,Any,Int64}",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.execute_all",
    "category": "method",
    "text": "execute_all(qwd, initstate, runtime)\n\nReturns list of all states including the initstate according to qwd for times from 0 to runtime. runtime needs to be nonnegative.\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#QuantumWalk.execute_all_measured-Tuple{QWDynamics{#s4978} where #s4978<:QWModelDiscr,Any,Int64}",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.execute_all_measured",
    "category": "method",
    "text": "execute_all_measured(qwd, initstate, runtime)\n\nEvolve initstate acording to qwd for time runtime. Returns matrix of type Matrix{Float64} for which i-th column is the probability distribution obtained  from the measurement in (i-1)-th step. runtime needs to be nonnegative.\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#QuantumWalk.execute_single-Tuple{QWDynamics{#s4978} where #s4978<:QWModelDiscr,Any,Int64}",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.execute_single",
    "category": "method",
    "text": "execute_single(qwd, initstate, runtime)\n\nEvolve initstate according to QWDynamics qwd for time runtime. runtime needs to be nonnegative.\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#QuantumWalk.execute_single_measured-Tuple{QWDynamics,Any,Real}",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.execute_single_measured",
    "category": "method",
    "text": "execute_single_measured(qwd, initstate, runtime)\n\nEvolve initstate acording to qwd for time runtime and measure it in the end. runtime needs to be nonnegative.\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#QuantumWalk.measure-Tuple{Any}",
    "page": "Quantum walk evolution",
    "title": "QuantumWalk.measure",
    "category": "method",
    "text": "measure(qwd::QWDynamics, state[, vertices::Vector{Int}])\n\nMeasure state according to qwd. If vertices is provided, probabilities of given vertices is returned. Otherwise full probability distribution is returned. Output is of type Vector{Float64}.\n\n\n\n\n\n"
},

{
    "location": "quantum_walk/#Full-docs-1",
    "page": "Quantum walk evolution",
    "title": "Full docs",
    "category": "section",
    "text": "QWEvolution\ncheck_qwdynamics(::Any)\nevolve(::Any)\nexecute(::QWDynamics, ::Any, ::Real)\nexecute_all(::QWDynamics{<:QWModelDiscr}, ::Any, ::Int)\nexecute_all_measured(::QWDynamics{<:QWModelDiscr}, ::Any, ::Int)\nexecute_single(::QWDynamics{<:QWModelDiscr}, ::Any, ::Int)\nexecute_single_measured(::QWDynamics, ::Any, ::Real)\nmeasure(::Any)"
},

{
    "location": "quantum_search/#",
    "page": "Quantum search",
    "title": "Quantum search",
    "category": "page",
    "text": "DocTestSetup = quote\n   using QuantumWalk, LightGraphs\nend"
},

{
    "location": "quantum_search/#Quantum-Search-1",
    "page": "Quantum search",
    "title": "Quantum Search",
    "category": "section",
    "text": "Quantum spatial search is an algorithm, which starts at some initial state (which  depends on the graph structure), and runs for some time in order to cumulate  amplitude at marked vertex. The algorithm is known to outperform classical search.The dynamics requires evolve, measure, initial_state and check_qwdynamics functions. It provides execute, execute_single, execute_single_measured, execute_all and execute_all_measured functions - the description can be found in Quantum walk evolution section. The only difference is that QWSearch uses the state generated by initial_state function if not provided. Furthermore the function provides marked, penalty and maximize_quantum_search. The first two returns the parameters from QWSearch. The last one searches for optimal measure time. The maximization methods depends on the model (if it is continuous or discrete).The penalty is an additional time added in optimization. Note, that if we optimize  time/success_probability(time) function, the optimum is always at time 0. This would imply that algorithm achieves full efficiency if it is instantly measured. This is misleading, as the time for constructing initial state and for measurement is ignored.  Hence we need to include (usually small) additional time in penalty in order to  get useful result. Note the time/success_probability(time) is at called  expected runtime and can be obtained by expected_runtime function.Some function as a result outputs QSearchState instead of the original state.  It consists of the original state, the runtime, the probability of measuring  each marked vertex, and penalty used for computing QSearchState. Those elements can be extracted by state, runtime, probability and penalty functions."
},

{
    "location": "quantum_search/#Example-1",
    "page": "Quantum search",
    "title": "Example",
    "category": "section",
    "text": "julia> n = 100;\n\njulia> penalty_szegedy = log(n);\n\njulia> qsearch = QWSearch(Szegedy(CompleteGraph(n)), [1], penalty_szegedy);\n\njulia> runtime(maximize_quantum_search(qsearch))-penalty_szegedy\n5.0\n\njulia> probability(maximize_quantum_search(qsearch))\n1-element Array{Float64,1}:\n 0.569689\n\njulia> execute_single_measured(qsearch, ceil(Int, pi*sqrt(100)/2))\n100-element Array{Float64,1}:\n 0.428475  \n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n ⋮         \n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298\n 0.00577298"
},

{
    "location": "quantum_search/#Adjusting-model-to-QWSearch-1",
    "page": "Quantum search",
    "title": "Adjusting model to QWSearch",
    "category": "section",
    "text": "Here we consider the example from the Quantum walk evolution section. We consider random walk search as follows: at given step we check if we are at the marked vertex. If not, we continue evolution. Hence we need to cumulate the success probability at marked vertices. We propose following implementation (including the functions from mentioned section). Again some additional assertion could be included for full functionality.function check_qwdynamics(::Type{QWSearch},\n                          abs_stoch::UniformStochastic,\n                          ::Vector{Int},\n                          parameters::Dict{Symbol,Any})\n  @assert :stochastic ∈ keys(parameters) \"parameters needs to have key stochastic\"\n  n = nv(graph(abs_stoch))\n  @assert isa(parameters[:stochastic], SparseMatrixCSC{<:Real}) \"value for :stochastic needs to be sparse matrix with real numbers\"\n  @assert size(parameters[:stochastic], 1) == size(parameters[:stochastic], 2) \"Stochastic matrix needs to be square stochastic matrix\"\n  @assert mapslices(sum, parameters[:stochastic], 1)[1,:] ≈ ones(n) \"Stochastic matrix needs to be square stochastic matrix of order graph\"\nend\n\nfunction QWSearch(stoch::AbstractStochastic,\n                  marked::Vector{Int},\n                  penalty::Real = 0.)\n   parameters = Dict{Symbol,Any}(:stochastic => stochastic_matrix(graph(stoch)))\n\n   QWSearch(stoch, marked, parameters, penalty)\nend\n\nfunction initial_state(qws::QWSearch{<:AbstractStochastic})\n  n = nv(graph(qws))\n  fill(1./n, n)\nend\n\nfunction evolve(qws::QWSearch{<:AbstractStochastic}, state::Vector{<:Real})\n  old_probability = measure(qws, state, marked(qws))\n  state[marked(qws)] = zero(marked(qws))\n  state = stochastic_evolution(parameters(qws)[:stochastic], state)\n  state[marked(qws)] += old_probability\n  state\nendNote that for example measure function does not change. Below we provide an evolution simulation example.julia> dynamic = QWSearch(UniformStochastic(CompleteGraph(100)), [1])\nQuantumWalk.QWSearch{UniformStochastic{LightGraphs.SimpleGraphs.SimpleGraph{Int64}},Float64}(UniformStochastic{LightGraphs.SimpleGraphs.SimpleGraph{Int64}}({100, 4950} undirected simple Int64 graph), [1], Dict{Symbol,Any}(Pair{Symbol,Any}(:stochastic,\n  [2  ,   1]  =  0.010101\n  [3  ,   1]  =  0.010101\n  [4  ,   1]  =  0.010101\n  [5  ,   1]  =  0.010101\n  [6  ,   1]  =  0.010101\n  ⋮\n  [94 , 100]  =  0.010101\n  [95 , 100]  =  0.010101\n  [96 , 100]  =  0.010101\n  [97 , 100]  =  0.010101\n  [98 , 100]  =  0.010101\n  [99 , 100]  =  0.010101)), 0.0)\n\njulia> measure(dynamic, execute_single(dynamic, 0), [1])\n1-element Array{Float64,1}:\n 0.01\n\njulia> measure(dynamic, execute_single(dynamic, 40), [1])\n1-element Array{Float64,1}:\n 0.340416\n\njulia> measure(dynamic, execute_single(dynamic, 1000), [1])\n1-element Array{Float64,1}:\n 0.999961"
},

{
    "location": "quantum_search/#Documentation-1",
    "page": "Quantum search",
    "title": "Documentation",
    "category": "section",
    "text": "Following functions are connected to the quantum search:Order = [:type, :function]\nModules = [QuantumWalk]\nPages   = [\"quantum_search.md\"]"
},

{
    "location": "quantum_search/#QuantumWalk.QSearchState",
    "page": "Quantum search",
    "title": "QuantumWalk.QSearchState",
    "category": "type",
    "text": "QSearchState(state, probability, runtime, penalty)\nQSearchState(qws, state, runtime)\n\nCreates container which consists of state, success probability probability, running time runtime and penalty penalty.\n\nIn second case state is measured according to qws.\n\nExample\n\njulia> qws = QWSearch(Szegedy(CompleteGraph(4)), [1]);\n\njulia> result = QSearchState(qws, initial_state(qws), 0)\nQSearchState{Array{Float64,1},Int64,Int64}([0.0, 0.288675, 0.288675, 0.288675, 0.288675, 0.0, 0.288675, 0.288675, 0.288675, 0.288675, 0.0, 0.288675, 0.288675, 0.288675, 0.288675, 0.0], [0.25], 0, 0)\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.QWSearch",
    "page": "Quantum search",
    "title": "QuantumWalk.QWSearch",
    "category": "type",
    "text": "QWSearch(model, parameters, marked, penalty[; check])\n\nSimulates quantum search on model with marked vertices and additional parameters. penalty represents the cost of initial state creation and measurement, which should be included for better optimization, see documentation of maximizing_function. Note that marked vertices needs to be between 1 and nv(graph(model)). Furthermore penalty needs to be nonnegative.\n\ncheck_qwdynamics is executed if and only iff check is true.\n\nNeeds implementation of\n\ninitial_state(qws::QWSearch)\nevolve(qws::QWSearch{<:QWModelDiscr}, state) or evolve(qws::QWSearch{<:QWModelCont}, state, time::Real)\nmeasure(qws::QWSearch, state[, vertices])\ncheck_qwdynamics(QWSearch, model::QWModel, parameters::Dict{Symbol}, penalty::Real)\nproper constructors.\n\nOffers functions\n\nexecute\nexecute_single\nexecute_single_measured\nexecute_all\nexecute_all_measured\nmaximize_quantum_search.\n\nIt is encoureged to implement constructor, which changes the penalty and/or marked vertices only, as their are usually simple to adapt.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.execute-Tuple{QWSearch,Real}",
    "page": "Quantum search",
    "title": "QuantumWalk.execute",
    "category": "method",
    "text": "execute(qws,[ initstate,] runtime[, all, measure])\n\nRun proper execution  of quantum spatial search depending on given keywords. The initial state is generated by initial_state(qws) if not provided. all and measure keywords defaults to false. For detailed description please see documentation of corresponding function, like execute_single_measured or execute_all. Note that for all equal to true model in qws needs to be disrete.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.execute_all-Union{Tuple{S}, Tuple{QWSearch{#s4978,W} where W<:Real where #s4978<:QWModelDiscr,S,Int64}} where S",
    "page": "Quantum search",
    "title": "QuantumWalk.execute_all",
    "category": "method",
    "text": "execute_all(qws,[ initstate,] runtime)\n\nEvolve initstate acording to qws for time runtime. runtime needs to be nonnegative. The initial state is generated by initial_state(qws) if not provided. Returns Vector of all QSearchState{typeof(initstate)} including initstate.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.execute_all_measured-Tuple{QWSearch{#s4978,W} where W<:Real where #s4978<:QWModelDiscr,Int64}",
    "page": "Quantum search",
    "title": "QuantumWalk.execute_all_measured",
    "category": "method",
    "text": "execute_all_measured(qws,[ initstate,] runtime)\n\nEvolve initstate acording to qws for time runtime. runtime needs to be nonnegative. The initial state is generated by initial_state(qws)  if not provided. As a result return matrix of type Matrix{Float64}  for which i-th column is measurement probability distribution in (i-1)-th step.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.execute_single-Tuple{QWSearch{#s4978,W} where W<:Real where #s4978<:QWModelDiscr,Any,Int64}",
    "page": "Quantum search",
    "title": "QuantumWalk.execute_single",
    "category": "method",
    "text": "execute_single(qws, [ initstate,] runtime)\n\nEvolve initstate acording to qws for time runtime. The initial state is generated by initial_state(qws) if not provided. runtime needs to be nonnegative. QSearchState{typeof(initstate)} is returned.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.execute_single_measured-Tuple{QWSearch,Int64}",
    "page": "Quantum search",
    "title": "QuantumWalk.execute_single_measured",
    "category": "method",
    "text": "execute_single_measured(qws,[ initstate,] runtime)\n\nEvolve initstate acording to qws for time runtime. The initial state is generated by initial_state(qws) if not provided. runtime needs to be nonnegative. Measurement probability distribution is returned.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.expected_runtime-Tuple{Real,Real}",
    "page": "Quantum search",
    "title": "QuantumWalk.expected_runtime",
    "category": "method",
    "text": "expected_runtime(runtime, probability)\nexpected_runtime(state)\n\nReturns the expected runtime needed for quantum walk, considering it as Bernoulli process. It equals to runtime/probability. In the case of state provided the measurement is made, penalty is included.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.initial_state-Tuple{QWSearch}",
    "page": "Quantum search",
    "title": "QuantumWalk.initial_state",
    "category": "method",
    "text": "initial_state(qws)\n\nGenerates initial state for qws.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.marked-Tuple{QWSearch}",
    "page": "Quantum search",
    "title": "QuantumWalk.marked",
    "category": "method",
    "text": "marked(qws)\n\nReturns marked vertices element of qws.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.maximize_quantum_search-Tuple{QWSearch{#s4978,W} where W<:Real where #s4978<:QWModelCont}",
    "page": "Quantum search",
    "title": "QuantumWalk.maximize_quantum_search",
    "category": "method",
    "text": "maximize_quantum_search(qws_cont [, maxtime, tstep])\n\nDetermines optimal runtime for continuous quantum walk search. The time is searched in [0, maxtime] interval, with penalty penalty(qws_cont). It is recommended for penalty to be nonzero, otherwise time close to 0 is usually returned. Typically penalty equal to log(nv(graph(qws_cont))) is enough, but optimal value may depend on the model or graph chosen.\n\nThe optimal time is chosen according to expected runtime, which equals to runtime over probability. This comes from interpreting the evolution as the Bernoulli process.\n\ntstep is used for primary grid search to search for determine intervale which is supsected to have small expected runtime. To large value may miss the optimal value, while to small may greatly increase runtime of the algorithm.\n\nmaxtime defaults to graph order n, tstep defaults to sqrt(n)/5. Note that in general the probability is not maximal.\n\njulia> qws = QWSearch(CTQW(CompleteGraph(100)), [1], 1., 0.01);\n\njulia> result = maximize_quantum_search(qws)\nQSearchState{Array{Complex{Float64},1},Float64,Float64}(Complex{Float64}[0.621142+0.695665im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im  …  0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im, 0.0279736-0.023086im], [0.869767], 11.996369403338626, 1.0)\n\njulia> probability(result)\n1-element Array{Float64,1}:\n 0.8697670118862033\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.maximize_quantum_search-Tuple{QWSearch{#s4978,W} where W<:Real where #s4978<:QWModelDiscr}",
    "page": "Quantum search",
    "title": "QuantumWalk.maximize_quantum_search",
    "category": "method",
    "text": "maximize_quantum_search(qws_discr [, runtime, mode])\n\nDetermines optimal runtime for discrete quantum walk search. The time is searched in [0, runtime] interval, with penalty penalty(qws_discr). It is recommended for penalty to be nonzero, otherwise time close 0 is returned. Typically small penalty approximately equal to log(n) is enough, but optimal value may depend on the model or graph chosen.\n\nThe optimal time depends on chosen mode:\n\n:firstmaxprob stops when probability start to decrease,\n:firstmaxeff stops when expected runtime start to increase,\n:maxtimeeff chooses exhaustively the time from [0, runtime] with smallest expected time,\n:maxtimeprob chooses exhaustively the time from [0, runtime] with maximal success probability,\n:maxeff (default) finds optimal time with smallest expected time, usually faster than :maxtimefff.\n\nNote last three modes always returns optimal time within the interval.\n\nmaxtime defaults to graph order n, mode defaults to :maxeff.\n\njulia> qws = QWSearch(Szegedy(CompleteGraph(200)), [1], 1);\n\njulia> result = maximize_quantum_search(qws);\n\njulia> runtime(result)\n6\n\njulia> probability(result)\n1-element Array{Float64,1}:\n 0.5000160413993847\n\njulia> result = maximize_quantum_search(qws, 100, :maxtimeprob);\n\njulia> runtime(result)\n39\n\njulia> probability(result)\n1-element Array{Float64,1}:\n 0.5509378780415133\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.penalty-Tuple{QWSearch}",
    "page": "Quantum search",
    "title": "QuantumWalk.penalty",
    "category": "method",
    "text": "penalty(qws)\n\nReturns penalty element of qws.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.penalty-Tuple{QSearchState}",
    "page": "Quantum search",
    "title": "QuantumWalk.penalty",
    "category": "method",
    "text": "penalty(qsearchstate)\n\nReturns the penalty time for which the state was calulated.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.probability-Tuple{QSearchState}",
    "page": "Quantum search",
    "title": "QuantumWalk.probability",
    "category": "method",
    "text": "probability(qsearchstate)\n\nReturns the list of probabilities of finding marked vertices.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.runtime-Tuple{QSearchState}",
    "page": "Quantum search",
    "title": "QuantumWalk.runtime",
    "category": "method",
    "text": "runtime(qsearchstate)\n\nReturns the time for which the state was calulated.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#QuantumWalk.state-Tuple{QSearchState}",
    "page": "Quantum search",
    "title": "QuantumWalk.state",
    "category": "method",
    "text": "state(qsearchstate)\n\nReturns the state of qsearchstate.\n\n\n\n\n\n"
},

{
    "location": "quantum_search/#Full-docs-1",
    "page": "Quantum search",
    "title": "Full docs",
    "category": "section",
    "text": "QSearchState\nQWSearch\nexecute(::QWSearch, ::Real)\nexecute_all(::QWSearch{<:QWModelDiscr}, ::S, ::Int) where S\nexecute_all_measured(::QWSearch{<:QWModelDiscr}, ::Int)\nexecute_single(::QWSearch{<:QWModelDiscr}, ::Any, ::Int)\nexecute_single_measured(::QWSearch, ::Int)\nexpected_runtime(::Real, ::Real)\ninitial_state(::QWSearch)\nmarked(::QWSearch)\nmaximize_quantum_search(::QWSearch{<:QWModelCont})\nmaximize_quantum_search(::QWSearch{<:QWModelDiscr})\npenalty(::QWSearch)\npenalty(::QSearchState)\nprobability(::QSearchState)\nruntime(::QSearchState)\nstate(::QSearchState)"
},

{
    "location": "ctqw/#",
    "page": "CTQW and CTQWDense",
    "title": "CTQW and CTQWDense",
    "category": "page",
    "text": "DocTestSetup = quote\n   using QuantumWalk, LightGraphs\nend"
},

{
    "location": "ctqw/#Continuous-Time-Quantum-Walk-1",
    "page": "CTQW and CTQWDense",
    "title": "Continuous-Time Quantum Walk",
    "category": "section",
    "text": "Implementation of the continuous-time quantum walk. The model is defined for an arbitrary undirected graph. Hamiltonian is chosen to be adjacency, normalized Laplacian  or Laplacian matrix. After the evolution, the state is measured in the canonical basis. The evolution is defined on a system of size equal to graph order. The precise definition can be found in Spatial search by quantum walk by Childs and Goldstone, where both pure walk and search dynamics are described.The abstract supertype is AbstractCTQW with its default realization CTQW, utilizing sparse matrices. Alternative realization is CTQWDense, which works on standard matrices. The model includes the following types and methods:"
},

{
    "location": "ctqw/#Documentation-1",
    "page": "CTQW and CTQWDense",
    "title": "Documentation",
    "category": "section",
    "text": "Order = [:type, :function]\nModules = [QuantumWalk]\nPages   = [\"ctqw.md\"]"
},

{
    "location": "ctqw/#QuantumWalk.AbstractCTQW",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.AbstractCTQW",
    "category": "type",
    "text": "AbstractCTQW\n\nAbstract CTQW model. By default evolve according to Schrödinger equation and performs measurmenet by taking square of absolute values of its elements. Default representation of AbstractCTQW is CTQW.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.CTQW",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.CTQW",
    "category": "type",
    "text": "CTQW(graph, matrix)\n\nDefault representation of AbstractCTQW. matrix defaults to :adjacency. The Hamiltonian is a sparse matrix.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.CTQW-Tuple{SimpleGraph}",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.CTQW",
    "category": "method",
    "text": "CTQW(graph)\n\nConstructor for CTQW, taking matrix to be :adjacency.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.CTQWDense",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.CTQWDense",
    "category": "type",
    "text": "CTQWDense(graph, matrix)\n\nAlternative representation of AbstractCTQW. matrix defaults to :adjacency. The Hamiltonian is a dense matrix.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.CTQWDense-Tuple{SimpleGraph}",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.CTQWDense",
    "category": "method",
    "text": "CTQWDense(graph)\n\nConstructor for CTQWDense, taking matrix to be :adjacency.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.QWEvolution-Union{Tuple{U}, Tuple{Type{U},AbstractCTQW}} where U<:Number",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.QWEvolution",
    "category": "method",
    "text": "QWEvolution([type_ctqw, ]ctqw)\n\nCreates QWEvolution according to AbstractCTQW model. By default type equals ComplexF64.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.QWSearch-Union{Tuple{T}, Tuple{Type{T},AbstractCTQW,Array{Int64,1}}, Tuple{Type{T},AbstractCTQW,Array{Int64,1},Real,T}} where T<:Number",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.QWSearch",
    "category": "method",
    "text": "QWSearch([type, ]ctqw, marked[, penalty, jumpingrate])\n\nCreates QWSearch according to AbstractCTQW model. By default type equals ComplexF64, jumpingrate equals largest eigenvalue of adjacency matrix of graph if matrix(CTQW) outputs :adjacency and error otherwise, and penalty equals 0.\n\nQWSearch(qws_ctqw; marked, penalty)\n\nUpdates quantum walk search to new subset of marked elements and new penalty. By default marked and penalty are the same as in qws.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.check_qwdynamics-Tuple{Type{QWSearch},AbstractCTQW,Dict{Symbol,V} where V,Array{Int64,1}}",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.check_qwdynamics",
    "category": "method",
    "text": "check_qwdynamics(QWSearch, ctqw, parameters, marked)\n\nChecks whetver combination of ctqw, marked and parameters produces valid QWSearch object. It checks if parameters consists of key :hamiltonian with real-valued matrix. Furthermore the hamiltonian needs to be square of size equals to graph(ctqw) order. the hermiticity is not checked for efficiency issue.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.check_qwdynamics-Tuple{Type{QWEvolution},AbstractCTQW,Dict{Symbol,V} where V}",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.check_qwdynamics",
    "category": "method",
    "text": "check_qwdynamics(QWEvolution, ctqw, parameters)\n\nChecks if combination of ctqw and parameters produces valid QWSearch object. It checks if parameters consists of key :hamiltonian with real-valued matrix. Furthermore the hamiltonian needs to be square of size equals to graph(ctqw) order. The hermiticity is not checked for efficiency issues.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.evolve-Tuple{QWDynamics{#s4978} where #s4978<:AbstractCTQW,Array{#s4977,1} where #s4977<:Number,Real}",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.evolve",
    "category": "method",
    "text": "evolve(qwd_ctqw, state, runtime)\n\nReturnes new state creates by evolving state by parameters(qwd_ctqw)[:hamiltonian] for time runtime according to Schrödinger equation.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.initial_state-Tuple{QWSearch{#s4978,W} where W<:Real where #s4978<:AbstractCTQW}",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.initial_state",
    "category": "method",
    "text": "initial_state(qws_ctqw)\n\nReturns equal superposition of size size and type of parameters(qws_ctqw)[:hamiltonian].\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.matrix-Tuple{AbstractCTQW}",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.matrix",
    "category": "method",
    "text": "matrix(ctqw)\n\nReturns the matrix symbol defining matrix graph used.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#QuantumWalk.measure-Tuple{QWDynamics{#s4978} where #s4978<:AbstractCTQW,Array{#s4977,1} where #s4977<:Number}",
    "page": "CTQW and CTQWDense",
    "title": "QuantumWalk.measure",
    "category": "method",
    "text": "measure(qwd_ctqw, state[, vertices])\n\nReturns the probability of measuring each vertex from vertices from state according to qwd_ctqw model. If vertices is not provided, full measurement is made. The measurement is done by taking square of absolute value of all elements of state.\n\n\n\n\n\n"
},

{
    "location": "ctqw/#Full-docs-1",
    "page": "CTQW and CTQWDense",
    "title": "Full docs",
    "category": "section",
    "text": "AbstractCTQW\nCTQW\nCTQW(::Graph)\nCTQWDense\nCTQWDense(::Graph)\nQWEvolution(::Type{U}, ::AbstractCTQW) where U<:Number\nQWSearch(::Type{T}, ::AbstractCTQW, ::Vector{Int}, ::Real = 0., ::T) where T<:Number\ncheck_qwdynamics(::Type{QWSearch}, ::AbstractCTQW, ::Dict{Symbol}, ::Vector{Int})\ncheck_qwdynamics(::Type{QWEvolution}, ::AbstractCTQW, ::Dict{Symbol})\nevolve(::QWDynamics{<:AbstractCTQW}, ::Vector{<:Number}, ::Real)\ninitial_state(::QWSearch{<:AbstractCTQW})\nmatrix(::AbstractCTQW)\nmeasure(::QWDynamics{<:AbstractCTQW}, ::Vector{<:Number})"
},

{
    "location": "szegedy/#",
    "page": "Szegedy",
    "title": "Szegedy",
    "category": "page",
    "text": "DocTestSetup = quote\n   using QuantumWalk, LightGraphs\nend"
},

{
    "location": "szegedy/#Szegedy-Quantum-Walk-1",
    "page": "Szegedy",
    "title": "Szegedy Quantum Walk",
    "category": "section",
    "text": "The Szegedy quantum walk is one of the most popular discrete quantum walk models. It takes stochastic matrix, turns it into unitary operator and use it for evolution. The evolution is purely unitary on the dimension equal to square of the graph order. The definition can be found in Quantum speed-up of Markov chain based algorithms by Szegedy. The definition of quantum search can be found in Direct Equivalence of Coined and Szegedy\'s Quantum Walks by Wong.The abstract supertype is AbstractSzegedy with its default realization Szegedy. The model includes following types and methods:"
},

{
    "location": "szegedy/#Documentation-1",
    "page": "Szegedy",
    "title": "Documentation",
    "category": "section",
    "text": "Order = [:type, :function]\nModules = [QuantumWalk]\nPages   = [\"szegedy.md\"]"
},

{
    "location": "szegedy/#QuantumWalk.AbstractSzegedy",
    "page": "Szegedy",
    "title": "QuantumWalk.AbstractSzegedy",
    "category": "type",
    "text": "AbstractSzegedy\n\nType representing the abstract Szegedy model. Description of the default parameter can be found in https://arxiv.org/abs/1611.02238, where two oracle operator case is chosen.  Default representation of AbstractSzegedy is Szegedy.\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.QWEvolution-Tuple{AbstractSzegedy}",
    "page": "Szegedy",
    "title": "QuantumWalk.QWEvolution",
    "category": "method",
    "text": "QWEvolution(szegedy)\n\nCreate QWEvolution according to AbstractSzegedy model. By default, the constructed operator is of type SparseMatrixCSC.\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.QWSearch-Tuple{AbstractSzegedy,Array{Int64,1},Real}",
    "page": "Szegedy",
    "title": "QuantumWalk.QWSearch",
    "category": "method",
    "text": "QWSearch(szegedy, marked[, penalty])\n\nCreates QWSearch according to AbstractSzegedy model. By default parameter penalty is set to 0. Evolution operators are constructed according to the definition from https://arxiv.org/abs/1611.02238.\n\nQWSearch(qws[; marked, penalty]; check)\n\nUpdate quantum walk search to new subset of marked elements and new penalty. By default marked and penalty are the same as in qws.\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.Szegedy",
    "page": "Szegedy",
    "title": "QuantumWalk.Szegedy",
    "category": "type",
    "text": "Szegedy(graph, sqrtstochastic)\n\nDefault representation of AbstractSzegedy. Parameter sqrtstochastic needs to be an element-wise square root of stochastic matrix.\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.check_qwdynamics-Tuple{Type{QWSearch},AbstractSzegedy,Dict{Symbol,V} where V,Array{Int64,1}}",
    "page": "Szegedy",
    "title": "QuantumWalk.check_qwdynamics",
    "category": "method",
    "text": "check_qwdynamics(QWSearch, szegedy, marked, parameters)\n\nCheck whetver combination of szegedy, marked and parameters produces valid QWSearch object. It checks where parameters consists of key :operators with corresponding value being list of AbstractMatrix. Furthermore operators needs to be square of size equals to square of graph(szegedy). order.\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.check_qwdynamics-Tuple{Type{QWEvolution},AbstractSzegedy,Dict{Symbol,V} where V}",
    "page": "Szegedy",
    "title": "QuantumWalk.check_qwdynamics",
    "category": "method",
    "text": "check_qwdynamics(QWEvolution, szegedy, parameters)\n\nCheck whetver combination of szegedy, and parameters produces a valid QWEvolution object. It checks where parameters consists of key :operators with corresponding value being a list of AbstractMatrix objects. Furthermore operators need to be square of size equals to square of the order of graph(szegedy).\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.evolve-Union{Tuple{T}, Tuple{QWDynamics{Szegedy{#s4978,T} where #s4978},SparseVector{T,Ti} where Ti<:Integer}} where T<:Number",
    "page": "Szegedy",
    "title": "QuantumWalk.evolve",
    "category": "method",
    "text": "evolve(qwd_szegedy, state)\n\nMultiplies state be each operator from operators from quantum walk evolution qwd_szegedy. Elements of operators and state should be of the same type.\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.initial_state-Tuple{QWSearch{#s4978,W} where W<:Real where #s4978<:AbstractSzegedy}",
    "page": "Szegedy",
    "title": "QuantumWalk.initial_state",
    "category": "method",
    "text": "initial_state(qws_szegedy)\n\nGenerates typical initial state for Szegedy search, see https://arxiv.org/abs/1611.02238. Vectorizes and normalizes obtained sqrtstochastic matrix from model(qws).\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.measure-Tuple{QWDynamics{#s4978} where #s4978<:AbstractSzegedy,SparseVector{#s4977,Ti} where Ti<:Integer where #s4977<:Number}",
    "page": "Szegedy",
    "title": "QuantumWalk.measure",
    "category": "method",
    "text": "measure(qwd_szegedy, state[, vertices])\n\nPerformes a measurement on state on vertices. vertices defaults to list of all vertices. It is defined as the measurement of partially traced on second system state https://arxiv.org/abs/1611.02238.\n\n\n\n\n\n"
},

{
    "location": "szegedy/#QuantumWalk.sqrtstochastic-Tuple{AbstractSzegedy}",
    "page": "Szegedy",
    "title": "QuantumWalk.sqrtstochastic",
    "category": "method",
    "text": "sqrtstochastic(szegedy)\n\nReturns the sqrtstochastic element of szegedy.\n\n\n\n\n\n"
},

{
    "location": "szegedy/#Full-docs-1",
    "page": "Szegedy",
    "title": "Full docs",
    "category": "section",
    "text": "AbstractSzegedy\nQWEvolution(::AbstractSzegedy)\nQWSearch(::AbstractSzegedy, ::Vector{Int}, ::Real)\nSzegedy\ncheck_qwdynamics(::Type{QWSearch}, ::AbstractSzegedy, ::Dict{Symbol}, ::Vector{Int})\ncheck_qwdynamics(::Type{QWEvolution}, ::AbstractSzegedy, ::Dict{Symbol})\nevolve(::QWDynamics{Szegedy{<:Any,T}}, ::SparseVector{T}) where T<:Number\ninitial_state(::QWSearch{<:AbstractSzegedy})\nmeasure(::QWDynamics{<:AbstractSzegedy}, ::SparseVector{<:Number})\nsqrtstochastic(::AbstractSzegedy)"
},

{
    "location": "contributing/#",
    "page": "Contributing",
    "title": "Contributing",
    "category": "page",
    "text": ""
},

{
    "location": "contributing/#Contributing-1",
    "page": "Contributing",
    "title": "Contributing",
    "category": "section",
    "text": "If you have a model or an algorithm which in your opinion should be included in the package, please open an issue at GitHub. After discussing the issue and the proposed changes, we will be happy to include your code in the main tree.Please do not send pull request before an issue!"
},

{
    "location": "contributing/#Bugs-1",
    "page": "Contributing",
    "title": "Bugs",
    "category": "section",
    "text": "In the case, you noticed some bugs, please start with an issue with a minimal working example reproducing it. If Exception is thrown, please provide an exception message as well.  If no Exception is thrown, but the result is invalid, please provide the correct answer in the issue message.Please add the example reproducing the problem as a test in the pull request."
},

{
    "location": "contributing/#Improvements-1",
    "page": "Contributing",
    "title": "Improvements",
    "category": "section",
    "text": "If you can provide a code, which works faster than already existing, please check its efficiency for various input data. In particular, check various dynamics and graphs. Typically checked graphs are PathGraph and CompleteGraph.The efficiency of the quantum walk model evolution may depend strongly on the graph properties, including order and sparsity. If your implementation works better only on some collection, please provide it as a separate model, possible as a subtype of an already existing model if possible. Note we are interested in the implementation which works well for many parameters, not only for fixed graphs.We welcome any ideas concerning the readability and logic of the code as well."
},

{
    "location": "contributing/#Development-guidelines-1",
    "page": "Contributing",
    "title": "Development guidelines",
    "category": "section",
    "text": "Post an issue.\nWait until the discussion ends.\nCheck the name convention from already existing model.\nTry to make your code as general as possible, for example:\nCheck if the general functions as measure or evolve are defined for\nabstract supertype (if you provide such).\nCheck the requirements for model/dynamics. If possible, extend them.\nCreate assertions on argument types and other requirements.\nInclude necessary references.\nWrite tests."
},

{
    "location": "citing/#",
    "page": "Citing",
    "title": "Citing",
    "category": "page",
    "text": ""
},

{
    "location": "citing/#Usage-and-citing-1",
    "page": "Citing",
    "title": "Usage and citing",
    "category": "section",
    "text": "If you are using our package, please cite us by using the following BibTeX entry:@misc{glos2018quantumwalkjl,\n  author       = {Adam Glos and Jaros{\\l}aw Adam Miszczak},\n  title        = {{QuantumWalks/QuantumWalk.jl}},\n  year         = {2018},\n  url          = {https://github.com/QuantumWalks/QuantumWalk.jl}\n}Our package was already used in papers concerning quantum attacksAdam Glos, Jarosław Adam Miszczak. \'Impact of the malicious input data modification on the efficiency of quantum algorithms.\' arXiv preprint arXiv:1802.10041 (2018).In case you have used our package for your research, we will be grateful for any information about the paper or the package utilizing our code. With your consent, we will provide a link to your work."
},

{
    "location": "license/#",
    "page": "Licence",
    "title": "Licence",
    "category": "page",
    "text": "MIT LicenseCopyright (c) 2017 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
},

]}
