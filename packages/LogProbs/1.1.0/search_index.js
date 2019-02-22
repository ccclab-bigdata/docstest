var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LogProbs-1",
    "page": "Readme",
    "title": "LogProbs",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)This package provides the Type LogProb for calculations with logspace probabilities."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using LogProbs\n\njulia> p = LogProb(0.2)\nLogProb(0.2)\n\njulia> q = LogProb(0.5)\nLogProb(0.5)\n\njulia> p + q\nLogProb(0.7)\n\njulia> float(p + q)\n0.7\n\njulia> log(p + q)\n-0.35667494393873234\n\njulia> float(p * q)\n0.10000000000000002\n\njulia> q - p\nLogProb(0.30000000000000004)\n\njulia> q - p == LogProb(0.3)\nfalse\n\njulia> q - p ≈ LogProb(0.3)\ntrue\n\njulia> q / p\nLogProb(2.5)\n\njulia> p / q\nLogProb(0.4)\n\njulia> rand(LogProb)\nLogProb(0.8973798055014042)\n\njulia> p < q, q < p\n(true, false)\n\njulia> information(p) # Shannon information content in bits\n2.321928094887362"
},

{
    "location": "autodocs/#LogProbs.LogProb",
    "page": "Docstrings",
    "title": "LogProbs.LogProb",
    "category": "type",
    "text": "LogProb(x)\n\nCreate a container of a positive real number x for convenient calculations with logspace probabilities\n\nsee https://en.wikipedia.org/wiki/Log_probability\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LogProbs.information",
    "page": "Docstrings",
    "title": "LogProbs.information",
    "category": "function",
    "text": "information(p::LogProb)\n\nCalculate the Shannon information content of p in bits\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LogProbs.LogProbLogProbs.LogProbsLogProbs.evalLogProbs.includeLogProbs.information"
},

]}
