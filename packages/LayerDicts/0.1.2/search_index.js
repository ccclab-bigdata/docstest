var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LayerDicts-1",
    "page": "Readme",
    "title": "LayerDicts",
    "category": "section",
    "text": "(Image: Build Status) (Image: CodeCov)LayerDict is an Associative type that wraps a series of other associatives (e.g. Dicts). When performing a lookup, a LayerDict will look through its associatives in the order they were passed to the constructor until it finds a match. LayerDicts are immutable—you cannot call setindex! on them. However, you can update its wrapped associatives and those changes will be reflected in future lookups."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using LayerDicts\n\ndict1 = Dict{Symbol, Int}(:foo => 1, :bar => 1)\ndict2 = Dict{Symbol, Int}()\ndict3 = Dict{Symbol, Int}(:bar => 3, :baz => 3)\n\nld = LayerDict([dict1, dict2, dict3])\n@assert ld[:foo] == 1\n@assert ld[:bar] == 1\n@assert ld[:baz] == 3\nld[:quuz]  # throws a KeyError"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LayerDicts.LayerDictLayerDicts.LayerDictsLayerDicts._kv_typesLayerDicts.evalLayerDicts.include"
},

]}
