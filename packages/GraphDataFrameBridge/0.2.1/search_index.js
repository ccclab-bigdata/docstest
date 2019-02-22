var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GraphDataFrameBridge.jl-1",
    "page": "Readme",
    "title": "GraphDataFrameBridge.jl",
    "category": "section",
    "text": "Tools for interoperability between DataFrame objects and LightGraphs and MetaGraphs objects."
},

{
    "location": "#Examples:-1",
    "page": "Readme",
    "title": "Examples:",
    "category": "section",
    "text": "julia> using DataFrames\njulia> using GraphDataFrameBridge\n\njulia> df = DataFrame(Dict(\"start\" => [\"a\", \"b\", \"a\", \"d\"],\n                           \"finish\" => [\"b\", \"c\", \"e\", \"e\"],\n                           \"weights\" => 1:4,\n                           \"extras\" => 5:8))\n\n# Simple undirected MetaGraph\njulia> mg = MetaGraph(df, :start, :finish)\n{5, 4} undirected Int64 metagraph with Float64 weights defined by :weight (default weight 1.0)\n\njulia> props(mg, 1)\nDict Symbol → Any with 1 entries\n  :name → \"a\"\n\n# Simple directed MetaDiGraph\njulia> mdg = MetaDiGraph(df, :start, :finish)\n{5, 4} directed Int64 metagraph with Float64 weights defined by :weight (default weight 1.0)\n\n# MetaGraph with `weight` attribute set and\n# `:extras` values stored as attributes.\njulia> mgw = MetaGraph(df, :start, :finish,\n                                      weight=:weights,\n                                      edge_attributes=:extras)\n{5, 4} undirected Int64 metagraph with Float64 weights defined by :weight (default weight 1.0)\n\njulia> props(mgw, 1, 2)\nDict Symbol → Any with 2 entries\n  :extras → 5\n  :weight → 1"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GraphDataFrameBridge.GraphDataFrameBridgeGraphDataFrameBridge.MetaDiGraphGraphDataFrameBridge.MetaGraphGraphDataFrameBridge.evalGraphDataFrameBridge.includeGraphDataFrameBridge.metagraph_from_dataframe"
},

]}
