var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AbstractLattices-1",
    "page": "Readme",
    "title": "AbstractLattices",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This module defines ∨ (for join) and ∧ (for meet) as binary operators so other modules can import them for their own purposes.We also define dist so distance can be defined in various modules. "
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Two of my modules use the meet and join operators. Here\'s what happens when we don\'t first define them via this module:julia> using SimplePartitions\n\njulia> using ClosedIntervals\n\njulia> A = 3..5\n[3,5]\n\njulia> B = 6..10\n[6,10]\n\njulia> A ∨ B\nWARNING: both ClosedIntervals and SimplePartitions export \"∨\"; uses of it in module Main must be qualified\nERROR: UndefVarError: ∨ not defined\nStacktrace:\n [1] top-level scope at none:0To fix this, my modules that use these operators need to import them from AbstractLattices."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AbstractLattices.AbstractLatticesAbstractLattices.distAbstractLattices.evalAbstractLattices.includeAbstractLattices.∧AbstractLattices.∨"
},

]}
