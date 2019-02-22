var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "#ReinforcementLearning-1",
    "page": "Introduction",
    "title": "ReinforcementLearning",
    "category": "section",
    "text": "(Image: Documentation) (Image: Build Status) (Image: codecov)A reinforcement learning package for Julia."
},

{
    "location": "#What-is-reinforcement-learning?-1",
    "page": "Introduction",
    "title": "What is reinforcement learning?",
    "category": "section",
    "text": "Wikipedia\nNew Sutton & Barto book"
},

{
    "location": "#Features-1",
    "page": "Introduction",
    "title": "Features",
    "category": "section",
    "text": ""
},

{
    "location": "#Learning-methods-1",
    "page": "Introduction",
    "title": "Learning methods",
    "category": "section",
    "text": "name discrete states linear approximation non-linear approximation\nQ-learning/SARSA(λ) ✓ ✓ \nn-step Q-learning/SARSA ✓ ✓ \nOnline Policy Gradient ✓ ✓ \nEpisodic Reinforce ✓ ✓ \nn-step Actor-Critic Policy-Gradient ✓ ✓ ✓\nMonte Carlo Control ✓  \nPrioritized Sweeping ✓  \n(double) DQN  ✓ ✓"
},

{
    "location": "#Environments-1",
    "page": "Introduction",
    "title": "Environments",
    "category": "section",
    "text": "name state space action space\nCartpole 4D discrete\nMountain Car 2D discrete\nPendulum 3D 1D\nAtari pixel images discrete\nVizDoom pixel images discrete\nPOMDPs, MDPs, Mazes, Cliffwalking discrete discrete\nOpenAi Gym (using PyCall) see here see here"
},

{
    "location": "#Preprocessors-1",
    "page": "Introduction",
    "title": "Preprocessors",
    "category": "section",
    "text": "State Aggregation\nTile Coding\nRandom Projections\nRadial Basis Functions"
},

{
    "location": "#Helper-Functions-1",
    "page": "Introduction",
    "title": "Helper Functions",
    "category": "section",
    "text": "comparison of different methods\ncallbacks to track performance, change exploration policy, save models during learning etc."
},

{
    "location": "#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "(v1.0) pkg> add ReinforcementLearningor in julia v0.6Pkg.add(\"ReinforcementLearning\")"
},

{
    "location": "#Credits-1",
    "page": "Introduction",
    "title": "Credits",
    "category": "section",
    "text": "Main author: Johanni Brea\nContributions: Marco Lehmann, Raphaël Nunes"
},

{
    "location": "#Contribute-1",
    "page": "Introduction",
    "title": "Contribute",
    "category": "section",
    "text": "Contributions are highly welcome. Please have a look at the issues."
},

{
    "location": "usage/#",
    "page": "Usage",
    "title": "Usage",
    "category": "page",
    "text": ""
},

{
    "location": "usage/#Simple-usage-1",
    "page": "Usage",
    "title": "Simple usage",
    "category": "section",
    "text": "Choose a learner.\nChoose an environment.\nChoose a stopping criterion.\n(Optionally) choose callbacks.\n(Optionally) choose a preprocessor.\nDefine an RLSetup.\nLearn with learn!.\nLook at results with getvalue."
},

{
    "location": "usage/#Example-1-1",
    "page": "Usage",
    "title": "Example 1",
    "category": "section",
    "text": "using ReinforcementLearning, ReinforcementLearningEnvironmentDiscrete\n\nlearner = QLearning()\nenv = MDP()\nstop = ConstantNumberSteps(10^3)\nx = RLSetup(learner, env, stop, callbacks = [TotalReward()])\nlearn!(x)\ngetvalue(x.callbacks[1])"
},

{
    "location": "usage/#Example-2-1",
    "page": "Usage",
    "title": "Example 2",
    "category": "section",
    "text": "using ReinforcementLearning, ReinforcementLearningEnvironmentClassicControl, Flux\n\nlearner = DQN(Chain(Dense(4, 24, relu), Dense(24, 48, relu), Dense(48, 2)),\n              opttype = x -> ADAM(x, .001))\nenv = CartPole()\nstop = ConstantNumberEpisodes(2*10^3)\ncallbacks = [EvaluateGreedy(EvaluationPerEpisode(TimeSteps(), returnmean=true),\n                            ConstantNumberEpisodes(100), every = Episode(100)),\n             EvaluationPerEpisode(TimeSteps()),\n             Progress()]\nx = RLSetup(learner, env, stop, callbacks = callbacks)\nlearn!(x)\ngetvalue(x.callbacks[1])"
},

{
    "location": "usage/#Comparisons-1",
    "page": "Usage",
    "title": "Comparisons",
    "category": "section",
    "text": "See section Comparison."
},

{
    "location": "usage/#Examples-1",
    "page": "Usage",
    "title": "Examples",
    "category": "section",
    "text": "See environments"
},

{
    "location": "tutorial/#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "tutorial/#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "You would like to test existing reinforcement learning methods on your environment or try your method on existing environments? Extending this package is a piece of cake. Please consider registering the binding to your own environment as a new package (see e.g. ReinforcementLearningEnvironmentAtari) and open a pull request for any other extension."
},

{
    "location": "tutorial/#Write-your-own-learner-1",
    "page": "Tutorial",
    "title": "Write your own learner",
    "category": "section",
    "text": "For a new learner you need to implement the functionsupdate!(learner, buffer)                          # returns nothing\ndefaultpolicy(learner, actionspace, buffer)       # returns a policy\ndefaultbuffer(learner, environment, preprocessor) # returns a bufferLet\'s assume you want to implement plain, simple Q-learning (you don\'t need to do this; it is already implemented. Your file qlearning.jl could containimport ReinforcementLearning: update!, defaultpolicy, defaultbuffer, Buffer\n\nstruct MyQLearning\n    Q::Array{Float64, 2} # number of actions x number of states\n    alpha::Float64       # learning rate\nend\n\nfunction update!(learner::MyQLearning, buffer)\n    s = buffer.states[1]\n    snext = buffer.states[2]\n    r = buffer.rewards[1]\n    a = buffer.actions[1]\n    Q = learner.Q\n    Q[a, s] += learner.alpha * (r + maximum(Q[:, snext]) - Q[a, s])\nend\n\nfunction defaultpolicy(learner::MyQLearning, actionspace, buffer)\n    EpsilonGreedyPolicy(.1, actionspace, s -> getvalue(learner.params, s))\nend\n\nfunction defaultbuffer(learner::MyQLearning, environment, preprocessor)\n    state, done = getstate(environment)\n    processedstate = preprocessstate(preprocessor, state)\n    Buffer(statetype = typeof(processedstate), capacity = 2)\nendThe functions defaultpolicy and defaultbuffer get called during the construction of an RLSetup. defaultbuffer returns a buffer that is filled with states, actions and rewards during interaction with the environment. Currently there are three types of Buffers implementedimport ReinforcementLearning: Buffer, EpisodeBuffer, ArrayStateBuffer\n?Buffer"
},

{
    "location": "tutorial/#api_environments-1",
    "page": "Tutorial",
    "title": "Bind your own environment",
    "category": "section",
    "text": "For new environments you need to implement the functionsinteract!(action, environment)          # returns state, reward done\ngetstate(environment)                   # returns state, done\nreset!(environment)                     # returns stateOptionally you may also implement the functionplotenv(environment)Please have a look at the cartpole for an example."
},

{
    "location": "tutorial/#Preprocessors-1",
    "page": "Tutorial",
    "title": "Preprocessors",
    "category": "section",
    "text": "preprocessstate(preprocessor, state)    # returns the preprocessed stateOptional:preprocess(preprocessor, reward, state, done) # returns a preprocessed (state, reward done) tuple."
},

{
    "location": "tutorial/#Policies-1",
    "page": "Tutorial",
    "title": "Policies",
    "category": "section",
    "text": "Policies are function-like objects. To implement for example a policy that returns (the action) 42 for every possible input state one could writestruct MyPolicy end\n(p::MyPolicy)(state) = 42"
},

{
    "location": "tutorial/#Callbacks-1",
    "page": "Tutorial",
    "title": "Callbacks",
    "category": "section",
    "text": "callback!(callback, rlsetup, state, action, reward, done) # returns nothing"
},

{
    "location": "tutorial/#Stopping-Criteria-1",
    "page": "Tutorial",
    "title": "Stopping Criteria",
    "category": "section",
    "text": "isbreak!(stoppingcriterion, state, action, reward, done) # returns true of false"
},

{
    "location": "comparison/#",
    "page": "Comparison",
    "title": "Comparison",
    "category": "page",
    "text": ""
},

{
    "location": "comparison/#ReinforcementLearning.compare-Tuple{Any,Any}",
    "page": "Comparison",
    "title": "ReinforcementLearning.compare",
    "category": "method",
    "text": "compare(rlsetupcreators::Dict, N; callbackid = 1, verbose = false)\n\nRun different setups in dictionary rlsetupcreators N times. The dictionary has elements \"name\" => createrlsetup, where createrlsetup is a function that has a single integer argument (id of the comparison; useful for saving  intermediate results). For each run, getvalue(rlsetup.callbacks[callbackid]) gets entered as result in a DataFrame with columns \"name\", \"result\", \"seed\". It is useful to specify the callbackid if the createrlsetup creates RLSetups with multiple callbacks.\n\nExample\n\nusing ReinforcementLearningEnvironmentDiscrete\nenv = MDP()\nsetup(learner) = RLSetup(learner, env, ConstantNumberSteps(10^4), callbacks = [EvaluationPerT(10^2, MeanReward())])\nrlsetupcreators = Dict(\"sarsa\" => (i) -> setup(Sarsa()), \"smallbackups\" => (i) -> setup(SmallBackups()))\nresult = compare(rlsetupcreators, 4)\nplotcomparison(result)\n\n\n\n\n\n"
},

{
    "location": "comparison/#ReinforcementLearning.plotcomparison-Tuple{Any}",
    "page": "Comparison",
    "title": "ReinforcementLearning.plotcomparison",
    "category": "method",
    "text": "plotcomparison(df; nmaxpergroup = 20, linestyles = [], \n                   showbest = true, axisoptions = @pgf {})\n\nPlots results obtained with compare using PGFPlotsX.\n\n\n\n\n\n"
},

{
    "location": "comparison/#comparison-1",
    "page": "Comparison",
    "title": "Comparison Tools",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"compare.jl\"]"
},

{
    "location": "learning/#ReinforcementLearning.RLSetup-Tuple{Any,Any,Any}",
    "page": "Learning",
    "title": "ReinforcementLearning.RLSetup",
    "category": "method",
    "text": "RLSetup(learner, env, stop; kargs...) = RLSetup(learner = learner,\n                                                environment = env,\n                                                stoppingcriterion = stop;\n                                                kargs...)\n\n\n\n\n\n"
},

{
    "location": "learning/#ReinforcementLearning.learn!-Tuple{Any}",
    "page": "Learning",
    "title": "ReinforcementLearning.learn!",
    "category": "method",
    "text": "learn!(rlsetup)\n\nRuns an rlsetup with learning.\n\n\n\n\n\n"
},

{
    "location": "learning/#ReinforcementLearning.run!-Tuple{Any}",
    "page": "Learning",
    "title": "ReinforcementLearning.run!",
    "category": "method",
    "text": "run!(rlsetup)\n\nRuns an rlsetup without learning.\n\n\n\n\n\n"
},

{
    "location": "learning/#",
    "page": "Learning",
    "title": "Learning",
    "category": "page",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"rlsetup.jl\", \"learn.jl\"]"
},

{
    "location": "learners/#",
    "page": "Learners",
    "title": "Learners",
    "category": "page",
    "text": ""
},

{
    "location": "learners/#learners-1",
    "page": "Learners",
    "title": "Learners",
    "category": "section",
    "text": ""
},

{
    "location": "learners/#ReinforcementLearning.ExpectedSarsa-Tuple{}",
    "page": "Learners",
    "title": "ReinforcementLearning.ExpectedSarsa",
    "category": "method",
    "text": "ExpectedSarsa(; kargs...) = TDLearner(; endvaluepolicy = ExpectedSarsaEndPolicy(VeryOptimisticEpsilonGreedyPolicy(.1)), kargs...)\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.QLearning-Tuple{}",
    "page": "Learners",
    "title": "ReinforcementLearning.QLearning",
    "category": "method",
    "text": "QLearning(; kargs...) = TDLearner(; endvaluepolicy = QLearningEndPolicy(), kargs...)\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.Sarsa-Tuple{}",
    "page": "Learners",
    "title": "ReinforcementLearning.Sarsa",
    "category": "method",
    "text": "Sarsa(; kargs...) = TDLearner(; kargs...)\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.AccumulatingTraces",
    "page": "Learners",
    "title": "ReinforcementLearning.AccumulatingTraces",
    "category": "type",
    "text": "struct AccumulatingTraces <: AbstractTraces\n    λ::Float64\n    γλ::Float64\n    trace::Array{Float64, 2}\n    minimaltracevalue::Float64\n\nDecaying traces with factor γλ. \n\nTraces are updated according to e(a s)   1 + e(a s) for the current action-state pair and e(a s)   γλ e(a s) for all other pairs unless e(a s)  minimaltracevalue where the trace is set to 0  (for computational efficiency).\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.AccumulatingTraces-Tuple{}",
    "page": "Learners",
    "title": "ReinforcementLearning.AccumulatingTraces",
    "category": "method",
    "text": "AccumulatingTraces(ns, na, λ::Float64, γ::Float64; minimaltracevalue = 1e-12)\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.NoTraces",
    "page": "Learners",
    "title": "ReinforcementLearning.NoTraces",
    "category": "type",
    "text": "struct NoTraces <: AbstractTraces\n\nNo eligibility traces, i.e. e(a s) = 1 for current action a and state s and zero otherwise.\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.ReplacingTraces",
    "page": "Learners",
    "title": "ReinforcementLearning.ReplacingTraces",
    "category": "type",
    "text": "struct ReplacingTraces <: AbstractTraces\n    λ::Float64\n    γλ::Float64\n    trace::Array{Float64, 2}\n    minimaltracevalue::Float64\n\nDecaying traces with factor γλ. \n\nTraces are updated according to e(a s)   1 for the current action-state pair and e(a s)   γλ e(a s) for all other pairs unless e(a s)  minimaltracevalue where the trace is set to 0  (for computational efficiency).\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.ReplacingTraces-Tuple{}",
    "page": "Learners",
    "title": "ReinforcementLearning.ReplacingTraces",
    "category": "method",
    "text": "ReplacingTraces(ns, na, λ::Float64, γ::Float64; minimaltracevalue = 1e-12)\n\n\n\n\n\n"
},

{
    "location": "learners/#TD-Learner-1",
    "page": "Learners",
    "title": "TD Learner",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"tdlearning.jl\", \"traces.jl\"]"
},

{
    "location": "learners/#initunseen-1",
    "page": "Learners",
    "title": "Initial values, novel actions and unseen values",
    "category": "section",
    "text": "For td-error dependent methods, the exploration-exploitation trade-off depends on the initvalue and the unseenvalue.  To distinguish actions that were never choosen before, i.e. novel actions, the default initial Q-value (field param) is initvalue = Inf64. In a state with novel actions, the policy determines how to deal with novel actions. To compute the td-error the unseenvalue is used for states with novel actions.  One way to achieve agressively exploratory behavior is to assure that unseenvalue (or initvalue) is larger than the largest possible Q-value."
},

{
    "location": "learners/#ReinforcementLearning.Critic",
    "page": "Learners",
    "title": "ReinforcementLearning.Critic",
    "category": "type",
    "text": "mutable struct Critic <: AbstractBiasCorrector\n    α::Float64\n    V::Array{Float64, 1}\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.Critic-Tuple{}",
    "page": "Learners",
    "title": "ReinforcementLearning.Critic",
    "category": "method",
    "text": "Critic(; γ = .9, α = .1, ns = 10, initvalue = 0.)\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.NoBiasCorrector",
    "page": "Learners",
    "title": "ReinforcementLearning.NoBiasCorrector",
    "category": "type",
    "text": "struct NoBiasCorrector <: AbstractBiasCorrector\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.RewardLowpassFilterBiasCorrector",
    "page": "Learners",
    "title": "ReinforcementLearning.RewardLowpassFilterBiasCorrector",
    "category": "type",
    "text": "mutable struct RewardLowpassFilterBiasCorrector <: AbstractBiasCorrector\nλ::Float64\nrmean::Float64\n\nFilters the reward with factor λ and uses effective reward (r - rmean) to update the parameters.\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.ActorCriticPolicyGradient-Tuple{}",
    "page": "Learners",
    "title": "ReinforcementLearning.ActorCriticPolicyGradient",
    "category": "method",
    "text": "ActorCriticPolicyGradient(; nsteps = 1, γ = .9, ns = 10, na = 4, \n                            α = .1, αcritic = .1, initvalue = Inf64)\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.EpisodicReinforce-Tuple{}",
    "page": "Learners",
    "title": "ReinforcementLearning.EpisodicReinforce",
    "category": "method",
    "text": "EpisodicReinforce(; kwargs...) = PolicyGradientForward(; kwargs...)\n\n\n\n\n\n"
},

{
    "location": "learners/#ReinforcementLearning.AbstractPolicyGradient",
    "page": "Learners",
    "title": "ReinforcementLearning.AbstractPolicyGradient",
    "category": "type",
    "text": "mutable struct PolicyGradientBackward <: AbstractPolicyGradient\n    ns::Int64 = 10\n    na::Int64 = 4\n    γ::Float64 = .9\n    α::Float64 = .1\n    initvalue::Float64 = 0.\n    params::Array{Float64, 2} = zeros(na, ns) + initvalue\n    traces::AccumulatingTraces = AccumulatingTraces(ns, na, 1., γ, \n                                                    trace = zeros(na, ns))\n    biascorrector::T = NoBiasCorrector()\n\nPolicy gradient learning in the backward view.\n\nThe parameters are updated according to paramsa s += α * r_eff * ea s where r_eff =  r for NoBiasCorrector, r_eff =  r - rmean for RewardLowpassFilterBiasCorrector and e[a, s] is the eligibility trace.\n\n\n\n\n\n"
},

{
    "location": "learners/#Policy-Gradient-Learner-1",
    "page": "Learners",
    "title": "Policy Gradient Learner",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"policygradientlearning.jl\"]"
},

{
    "location": "learners/#N-step-Learner-1",
    "page": "Learners",
    "title": "N-step Learner",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"montecarlo.jl\"]"
},

{
    "location": "learners/#ReinforcementLearning.policy_iteration!-Tuple{MDPLearner}",
    "page": "Learners",
    "title": "ReinforcementLearning.policy_iteration!",
    "category": "method",
    "text": "policy_iteration!(mdplearner::MDPLearner)\n\nSolve MDP with policy iteration using MDPLearner.\n\n\n\n\n\n"
},

{
    "location": "learners/#Model-Based-Learner-1",
    "page": "Learners",
    "title": "Model Based Learner",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"mdplearner.jl\", \"prioritizedsweeping.jl\"]"
},

{
    "location": "learners/#Deep-Reinforcement-Learning-1",
    "page": "Learners",
    "title": "Deep Reinforcement Learning",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"dqn.jl\", \"deepactorcritic.jl\"]"
},

{
    "location": "buffers/#",
    "page": "Buffers",
    "title": "Buffers",
    "category": "page",
    "text": ""
},

{
    "location": "buffers/#ReinforcementLearning.ArrayCircularBuffer",
    "page": "Buffers",
    "title": "ReinforcementLearning.ArrayCircularBuffer",
    "category": "type",
    "text": "mutable struct ArrayCircularBuffer{T}\n    data::T\n    capacity::Int64\n    start::Int64\n    counter::Int64\n    full::Bool\n\n\n\n\n\n"
},

{
    "location": "buffers/#ReinforcementLearning.ArrayCircularBuffer-NTuple{4,Any}",
    "page": "Buffers",
    "title": "ReinforcementLearning.ArrayCircularBuffer",
    "category": "method",
    "text": "ArrayCircularBuffer(arraytype, datatype, elemshape, capacity)\n\n\n\n\n\n"
},

{
    "location": "buffers/#ReinforcementLearning.ArrayStateBuffer",
    "page": "Buffers",
    "title": "ReinforcementLearning.ArrayStateBuffer",
    "category": "type",
    "text": "struct ArrayStateBuffer{Ts, Ta}\n    states::ArrayCircularBuffer{Ts}\n    actions::CircularBuffer{Ta}\n    rewards::CircularBuffer{Float64}\n    done::CircularBuffer{Bool}\n\n\n\n\n\n"
},

{
    "location": "buffers/#ReinforcementLearning.ArrayStateBuffer-Tuple{}",
    "page": "Buffers",
    "title": "ReinforcementLearning.ArrayStateBuffer",
    "category": "method",
    "text": "ArrayStateBuffer(; arraytype = Array, datatype = Float64, \n                   elemshape = (1), actiontype = Int64, \n                   capacity = 2, capacitystates = capacity,\n                   capacityrewards = capacity - 1)\n\nAn ArrayStateBuffer is similar to a Buffer but the states are stored in a prealocated array of size (elemshape..., capacity). K consecutive states at position i in the state buffer can can efficiently be retrieved with nmarkovview(buffer.states, i, K) or nmarkovgetindex(buffer.states, i, K). See the implementation of DQN for an example. \n\n\n\n\n\n"
},

{
    "location": "buffers/#ReinforcementLearning.Buffer",
    "page": "Buffers",
    "title": "ReinforcementLearning.Buffer",
    "category": "type",
    "text": "struct Buffer{Ts, Ta}\n    states::CircularBuffer{Ts}\n    actions::CircularBuffer{Ta}\n    rewards::CircularBuffer{Float64}\n    done::CircularBuffer{Bool}\n\n\n\n\n\n"
},

{
    "location": "buffers/#ReinforcementLearning.Buffer-Tuple{}",
    "page": "Buffers",
    "title": "ReinforcementLearning.Buffer",
    "category": "method",
    "text": "Buffer(; statetype = Int64, actiontype = Int64, \n         capacity = 2, capacitystates = capacity,\n         capacityrewards = capacity - 1)\n\n\n\n\n\n"
},

{
    "location": "buffers/#ReinforcementLearning.EpisodeBuffer",
    "page": "Buffers",
    "title": "ReinforcementLearning.EpisodeBuffer",
    "category": "type",
    "text": "struct EpisodeBuffer{Ts, Ta}\n    states::Array{Ts, 1}\n    actions::Array{Ta, 1}\n    rewards::Array{Float64, 1}\n    done::Array{Bool, 1}\n\n\n\n\n\n"
},

{
    "location": "buffers/#ReinforcementLearning.EpisodeBuffer-Tuple{}",
    "page": "Buffers",
    "title": "ReinforcementLearning.EpisodeBuffer",
    "category": "method",
    "text": "EpisodeBuffer(; statetype = Int64, actiontype = Int64) = \n    EpisodeBuffer(statetype[], actiontype[], Float64[], Bool[])\n\n\n\n\n\n"
},

{
    "location": "buffers/#buffers-1",
    "page": "Buffers",
    "title": "Buffers",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"buffers.jl\"]"
},

{
    "location": "environments/#",
    "page": "Environments",
    "title": "Environments",
    "category": "page",
    "text": ""
},

{
    "location": "environments/#environments-1",
    "page": "Environments",
    "title": "Environments",
    "category": "section",
    "text": "The following environments can be added with (v1.0) pkg> add ReinforcementLearningEnvironmentXZYorPkg.add(\"ReinforcementLearningEnvironmentXYZ\")Examples can be found in the example folders of these repositories.ReinforcementLearningEnvironmentAtari, ReinforcementLearningEnvironmentClassicControl, ReinforcementLearningEnvironmentDiscrete. ReinforcementLearningEnvironmentViZDoom. ReinforcementLearningEnvironmentViZGym."
},

{
    "location": "stop/#",
    "page": "Stopping Criteria",
    "title": "Stopping Criteria",
    "category": "page",
    "text": ""
},

{
    "location": "stop/#ReinforcementLearning.ConstantNumberEpisodes",
    "page": "Stopping Criteria",
    "title": "ReinforcementLearning.ConstantNumberEpisodes",
    "category": "type",
    "text": "mutable struct ConstantNumberEpisodes\n    N::Int64\n    counter::Int64\n\nStops learning when the agent has finished \'N\' episodes.\n\n\n\n\n\n"
},

{
    "location": "stop/#ReinforcementLearning.ConstantNumberEpisodes-Tuple{Any}",
    "page": "Stopping Criteria",
    "title": "ReinforcementLearning.ConstantNumberEpisodes",
    "category": "method",
    "text": "    ConstantNumbeEpisodes(N) = ConstantNumberEpisodes(N, 0)\n\n\n\n\n\n"
},

{
    "location": "stop/#ReinforcementLearning.ConstantNumberSteps",
    "page": "Stopping Criteria",
    "title": "ReinforcementLearning.ConstantNumberSteps",
    "category": "type",
    "text": "mutable struct ConstantNumberSteps\n    T::Int64\n    counter::Int64\n\nStops learning when the agent has taken \'T\' actions.\n\n\n\n\n\n"
},

{
    "location": "stop/#ReinforcementLearning.ConstantNumberSteps-Tuple{Any}",
    "page": "Stopping Criteria",
    "title": "ReinforcementLearning.ConstantNumberSteps",
    "category": "method",
    "text": "ConstantNumberSteps(N) = ConstantNumberSteps(N, 0)\n\n\n\n\n\n"
},

{
    "location": "stop/#stop-1",
    "page": "Stopping Criteria",
    "title": "Stopping Criteria",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"stoppingcriterion.jl\"]"
},

{
    "location": "preprocessors/#",
    "page": "Preprocessors",
    "title": "Preprocessors",
    "category": "page",
    "text": ""
},

{
    "location": "preprocessors/#ReinforcementLearning.ImageCrop",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.ImageCrop",
    "category": "type",
    "text": "struct ImageCrop\n    xidx::UnitRange{Int64}\n    yidx::UnitRange{Int64}\n\nSelect indices xidx and yidx from a 2 or 3 dimensional array.\n\nExample:\n\nc = ImageCrop(2:5, 3:2:9)\nc([10i + j for i in 1:10, j in 1:10])\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.ImageResizeBilinear",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.ImageResizeBilinear",
    "category": "type",
    "text": "struct ImageResizeBilinear\n    outdim::Tuple{Int64, Int64}\n\nResize any image to outdim = (width, height) with bilinear interpolation.\n\nExample:\n\nr = ImageResizeBilinear((50, 50))\nr(rand(200, 200))\nr(rand(UInt8, 3, 100, 100))\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.ImageResizeNearestNeighbour",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.ImageResizeNearestNeighbour",
    "category": "type",
    "text": "struct ImageResizeNearestNeighbour\n    outdim::Tuple{Int64, Int64}\n\nResize any image to outdim = (width, height) by nearest-neighbour interpolation (i.e. subsampling).\n\nExample:\n\nr = ImageResizeNearestNeighbour((50, 50))\nr(rand(200, 200))\nr(rand(UInt8, 3, 100, 100))\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.NoPreprocessor",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.NoPreprocessor",
    "category": "type",
    "text": "struct NoPreprocessor end\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.RadialBasisFunctions",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.RadialBasisFunctions",
    "category": "type",
    "text": "struct RadialBasisFunctions\n    means::Array{Array{Float64, 1}, 1}\n    sigmas::Array{Float64, 1}\n    state::Array{Float64, 1}\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.RandomProjection",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.RandomProjection",
    "category": "type",
    "text": "struct RandomProjection\n    w::Array{Float64, 2}\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.SparseRandomProjection",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.SparseRandomProjection",
    "category": "type",
    "text": "struct SparseRandomProjection\n    w::Array{Float64, 2}\n    b::Array{Float64, 1}\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.StateAggregator",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.StateAggregator",
    "category": "type",
    "text": "struct StateAggregator\n    box::Box\n    ns::Int64\n    nbins::Array{Int64, 1}\n    offsets::Array{Int64, 1}\n    perdimension::Bool\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.StateAggregator-Tuple{Array{T,1} where T,Array{T,1} where T,Array{T,1} where T}",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.StateAggregator",
    "category": "method",
    "text": "StateAggregator(lb::Vector, ub::Vector, nbins::Vector;\n                perdimension = false)\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.StateAggregator-Tuple{Number,Number,Int64,Int64}",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.StateAggregator",
    "category": "method",
    "text": "StateAggregator(lb::Number, ub::Number, nbins::Int, ndims::Int; \n                perdimension = false)\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.TilingStateAggregator",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.TilingStateAggregator",
    "category": "type",
    "text": "struct TilingStateAggregator{T <: Array{StateAggregator,1}}\n    ns::Int64\n    tiling::T\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#ReinforcementLearning.Box",
    "page": "Preprocessors",
    "title": "ReinforcementLearning.Box",
    "category": "type",
    "text": "struct Box{T}\n    low::Array{T, 1}\n    high::Array{T, 1}\n\n\n\n\n\n"
},

{
    "location": "preprocessors/#preprocessors-1",
    "page": "Preprocessors",
    "title": "Preprocessors",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"preprocessor.jl\"]"
},

{
    "location": "policies/#",
    "page": "Policies",
    "title": "Policies",
    "category": "page",
    "text": ""
},

{
    "location": "policies/#policies-1",
    "page": "Policies",
    "title": "Policies",
    "category": "section",
    "text": ""
},

{
    "location": "policies/#Epsilon-Greedy-Policies-1",
    "page": "Policies",
    "title": "Epsilon Greedy Policies",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"epsilongreedypolicies.jl\"]"
},

{
    "location": "policies/#Softmax-Policies-1",
    "page": "Policies",
    "title": "Softmax Policies",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"softmaxpolicy.jl\"]"
},

{
    "location": "policies/#ReinforcementLearning.ForcedEpisode",
    "page": "Policies",
    "title": "ReinforcementLearning.ForcedEpisode",
    "category": "type",
    "text": "mutable struct ForcedEpisode{Ts}\n    t::Int64\n    states::Ts\n    dones::Array{Bool, 1}\n    rewards::Array{Float64, 1}\n\n\n\n\n\n"
},

{
    "location": "policies/#Forced-Policy-and-Episode-1",
    "page": "Policies",
    "title": "Forced Policy and Episode",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"forced.jl\"]"
},

{
    "location": "callbacks/#",
    "page": "Callbacks",
    "title": "Callbacks",
    "category": "page",
    "text": ""
},

{
    "location": "callbacks/#ReinforcementLearning.AllRewards",
    "page": "Callbacks",
    "title": "ReinforcementLearning.AllRewards",
    "category": "type",
    "text": "struct AllRewards\n    rewards::Array{Float64, 1}\n\nRecords all rewards.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.AllRewards-Tuple{}",
    "page": "Callbacks",
    "title": "ReinforcementLearning.AllRewards",
    "category": "method",
    "text": "AllRewards()\n\nInitializes with empty array.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.EvaluateGreedy-Tuple{Any,Any}",
    "page": "Callbacks",
    "title": "ReinforcementLearning.EvaluateGreedy",
    "category": "method",
    "text": "EvaluateGreedy(callback, stoppincriterion; every = Episode(10))\n\nEvaluate an rlsetup greedily by leaving the normal learning loop and evaluating the agent with callback until stoppingcriterion is met, at which point normal learning is resumed. This is done every Nth Episode (where N = 10 by default) or every Nth Step (e.g. every = Step(10)).\n\nExample:\n\neg = EvaluateGreedy(EvaluationPerEpisode(TotalReward(), returnmean = true),\n                    ConstantNumberEpisodes(10), every = Episode(100))\nrlsetup = RLSetup(learner, environment, stoppingcriterion, callbacks = [eg])\nlearn!(rlsetup)\ngetvalue(eg)\n\nLeaves the learning loop every 100th episode to estimate the average total reward per episode, by running a greedy policy for 10 episodes.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.LinearDecreaseEpsilon",
    "page": "Callbacks",
    "title": "ReinforcementLearning.LinearDecreaseEpsilon",
    "category": "type",
    "text": "mutable struct LinearDecreaseEpsilon\n    start::Int64\n    stop::Int64\n    initval::Float64\n    finalval::Float64\n    t::Int64\n    step::Float64\n\nLinearly decrease ϵ of an EpsilonGreedyPolicy from initval until  step start to finalval at step stop.\n\nStepsize step = (finalval - initval)/(stop - start).\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.LinearDecreaseEpsilon-NTuple{4,Any}",
    "page": "Callbacks",
    "title": "ReinforcementLearning.LinearDecreaseEpsilon",
    "category": "method",
    "text": "LinearDecreaseEpsilon(start, stop, initval, finalval)\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.Progress",
    "page": "Callbacks",
    "title": "ReinforcementLearning.Progress",
    "category": "type",
    "text": "mutable struct Progress \n    steps::Int64\n    laststopcountervalue::Int64\n\nShow steps times progress information during learning.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.Progress",
    "page": "Callbacks",
    "title": "ReinforcementLearning.Progress",
    "category": "type",
    "text": "Progress(steps = 10) = Progress(steps, 0)\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.RecordAll",
    "page": "Callbacks",
    "title": "ReinforcementLearning.RecordAll",
    "category": "type",
    "text": "struct RecordAll\n    rewards::Array{Float64, 1}\n    actions::Array{Int64, 1}\n    states::Array{Int64, 1}\n    done::Array{Bool, 1}\n\nRecords everything.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.RecordAll-Tuple{}",
    "page": "Callbacks",
    "title": "ReinforcementLearning.RecordAll",
    "category": "method",
    "text": "RecordAll()\n\nInitializes with empty arrays.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.ReduceEpsilonPerEpisode",
    "page": "Callbacks",
    "title": "ReinforcementLearning.ReduceEpsilonPerEpisode",
    "category": "type",
    "text": "mutable struct ReduceEpsilonPerEpisode\n    ϵ0::Float64\n    counter::Int64\n\nReduces ϵ of an EpsilonGreedyPolicy after each episode.\n\nIn episode n, ϵ = ϵ0/n\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.ReduceEpsilonPerEpisode-Tuple{}",
    "page": "Callbacks",
    "title": "ReinforcementLearning.ReduceEpsilonPerEpisode",
    "category": "method",
    "text": "ReduceEpsilonPerEpisode()\n\nInitialize callback.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.ReduceEpsilonPerT",
    "page": "Callbacks",
    "title": "ReinforcementLearning.ReduceEpsilonPerT",
    "category": "type",
    "text": "mutable struct ReduceEpsilonPerT\n    ϵ0::Float64\n    T::Int64\n    n::Int64\n    counter::Int64\n\nReduces ϵ of an EpsilonGreedyPolicy after every T steps.\n\nAfter n * T steps, ϵ = ϵ0/n\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.ReduceEpsilonPerT-Tuple{Any}",
    "page": "Callbacks",
    "title": "ReinforcementLearning.ReduceEpsilonPerT",
    "category": "method",
    "text": "ReduceEpsilonPerT()\n\nInitialize callback.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.Visualize",
    "page": "Callbacks",
    "title": "ReinforcementLearning.Visualize",
    "category": "type",
    "text": "mutable struct Visualize \n    plot\n    wait::Float64\n\n\n\n\n\n"
},

{
    "location": "callbacks/#ReinforcementLearning.Visualize-Tuple{}",
    "page": "Callbacks",
    "title": "ReinforcementLearning.Visualize",
    "category": "method",
    "text": "Visualize(; wait = .15)\n\nA callback to be used in an RLSetup to visualize an environment during  running or learning.\n\n\n\n\n\n"
},

{
    "location": "callbacks/#callbacks-1",
    "page": "Callbacks",
    "title": "Callbacks",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"callbacks.jl\"]"
},

{
    "location": "metrics/#",
    "page": "Evaluation Metrics",
    "title": "Evaluation Metrics",
    "category": "page",
    "text": ""
},

{
    "location": "metrics/#ReinforcementLearning.EvaluationPerEpisode",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.EvaluationPerEpisode",
    "category": "type",
    "text": "EvaluationPerEpisode\n    values::Array{Float64, 1}\n    metric::SimpleEvaluationMetric\n\nStores the value of the simple metric for each episode in values.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.EvaluationPerEpisode",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.EvaluationPerEpisode",
    "category": "type",
    "text": "EvaluationPerEpisode(metric = MeanReward())\n\nInitializes with empty values array and simple metric (default MeanReward). Other options are TimeSteps (to measure the lengths of episodes) or TotalReward.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.EvaluationPerT",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.EvaluationPerT",
    "category": "type",
    "text": "EvaluationPerT\n    T::Int64\n    counter::Int64\n    values::Array{Float64, 1}\n    metric::SimpleEvaluationMetric\n\nStores the value of the simple metric after every T steps in values.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.EvaluationPerT",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.EvaluationPerT",
    "category": "type",
    "text": "EvaluationPerT(T, metric = MeanReward())\n\nInitializes with T, counter = 0, empty values array and simple metric (default MeanReward).  Another option is TotalReward.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.MeanReward",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.MeanReward",
    "category": "type",
    "text": "mutable struct MeanReward \n    meanreward::Float64\n    counter::Int64\n\nComputes iteratively the mean reward.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.MeanReward-Tuple{}",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.MeanReward",
    "category": "method",
    "text": "MeanReward()\n\nInitializes counter and meanreward to 0.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.TimeSteps",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.TimeSteps",
    "category": "type",
    "text": "mutable struct TimeSteps\n    counter::Int64\n\nCounts the number of timesteps the simulation is running.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.TimeSteps-Tuple{}",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.TimeSteps",
    "category": "method",
    "text": "TimeSteps()\n\nInitializes counter to 0.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.TotalReward",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.TotalReward",
    "category": "type",
    "text": "mutable struct TotalReward \n    reward::Float64\n\nAccumulates all rewards.\n\n\n\n\n\n"
},

{
    "location": "metrics/#ReinforcementLearning.TotalReward-Tuple{}",
    "page": "Evaluation Metrics",
    "title": "ReinforcementLearning.TotalReward",
    "category": "method",
    "text": "TotalReward()\n\nInitializes reward to 0.\n\n\n\n\n\n"
},

{
    "location": "metrics/#metrics-1",
    "page": "Evaluation Metrics",
    "title": "Evaluation Metrics",
    "category": "section",
    "text": "Modules = [ReinforcementLearning]\nPages   = [\"metrics.jl\"]"
},

]}
