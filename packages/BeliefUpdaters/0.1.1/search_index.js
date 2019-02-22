var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BeliefUpdaters.jl-1",
    "page": "Readme",
    "title": "BeliefUpdaters.jl",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)Support tools for POMDPs.jl. This is a supported JuliaPOMDP package that provides tools for problem modeling."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "using Pkg\nPkg.add(\"BeliefUpdaters\")"
},

{
    "location": "#Code-structure-1",
    "page": "Readme",
    "title": "Code structure",
    "category": "section",
    "text": "Within src each file contains one tool. Each file should clearly indicate who is the maintainer of that file."
},

{
    "location": "#Tools-1",
    "page": "Readme",
    "title": "Tools",
    "category": "section",
    "text": ""
},

{
    "location": "#[discrete.jl](src/beliefs/discrete.jl)-1",
    "page": "Readme",
    "title": "discrete.jl",
    "category": "section",
    "text": "Dense discrete probability distribution and updater.Create an updater with DiscreteUpdater(pomdp); create a belief with DiscreteBelief(pomdp, b), where b is a vector of probabilities; create a uniform belief with uniform_belief(pomdp).States sampled from a DiscreteBelief will be actual states (of type statetype(pomdp)) instead of integer indices as in previous versions, and actual states instead of indices should be used in pdf(b::DiscreteBelief, s). DiscreteBelief uses state_index(pomdp, s) to keep track of the states internally."
},

{
    "location": "#[previous_observation.jl](src/beliefs/previous_observation.jl)-1",
    "page": "Readme",
    "title": "previous_observation.jl",
    "category": "section",
    "text": "Beliefs (and updaters) that only deal with the most recent observationPreviousObservationUpdater maintains a \"belief\" that is a Nullable{O} where O is the observation type. The \"belief\" is null if there is no observation available, and contains the previous observation if there is one."
},

{
    "location": "#[k_previous_observation.jl](src/beliefs/k_previous_observation.jl)-1",
    "page": "Readme",
    "title": "k_previous_observation.jl",
    "category": "section",
    "text": "KMarkovUpdater maintains a \"belief\" that is a Vector{O} where O is the observation type. It consists of the last k observations where k is an integer to pass to the constructor of KMarkovUpdater. The last observation is at the end of the vector and the oldest one is at the beginning. Example:using POMDPSimulators\nup = KMarkovUpdater(5)\ns0 = initialstate(pomdp, rng)\ninitialobservation = generate_o(pomdp, s0, rng)\ninitialobs_vec = fill(initialobservation, 5)\nhr = HistoryRecorder(rng=rng, max_steps=100)\nhist = simulate(hr, pomdp, policy, up, initialobs_vec, s0)"
},

{
    "location": "#[void.jl](src/beliefs/void.jl)-1",
    "page": "Readme",
    "title": "void.jl",
    "category": "section",
    "text": "An updater useful for when a belief is not necessary (i.e. for a random policy). update always returns nothing."
},

{
    "location": "autodocs/#BeliefUpdaters.DiscreteBelief",
    "page": "Docstrings",
    "title": "BeliefUpdaters.DiscreteBelief",
    "category": "type",
    "text": "DiscreteBelief\n\nA belief specified by a probability vector.\n\nNormalization of b is NOT enforced at all times, but the DiscreteBeleif(pomdp, b) constructor will warn, and update(...) always returns a belief with normalized b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BeliefUpdaters.KMarkovUpdater",
    "page": "Docstrings",
    "title": "BeliefUpdaters.KMarkovUpdater",
    "category": "type",
    "text": "Updater that stores the k most recent observations as the belief.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BeliefUpdaters.PreviousObservationUpdater",
    "page": "Docstrings",
    "title": "BeliefUpdaters.PreviousObservationUpdater",
    "category": "type",
    "text": "Updater that stores the most recent observation as the belief, missing if none is available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BeliefUpdaters.uniform_belief",
    "page": "Docstrings",
    "title": "BeliefUpdaters.uniform_belief",
    "category": "function",
    "text": "Return a DiscreteBelief with equal probability for each state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BeliefUpdaters.BeliefUpdatersBeliefUpdaters.DiscreteBeliefBeliefUpdaters.DiscreteUpdaterBeliefUpdaters.FastPreviousObservationUpdaterBeliefUpdaters.KMarkovUpdaterBeliefUpdaters.NothingUpdaterBeliefUpdaters.PreviousObservationUpdaterBeliefUpdaters.PrimedPreviousObservationUpdaterBeliefUpdaters.create_beliefBeliefUpdaters.evalBeliefUpdaters.includeBeliefUpdaters.throw_exampleBeliefUpdaters.uniform_belief"
},

]}
