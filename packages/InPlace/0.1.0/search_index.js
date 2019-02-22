var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InPlace.jl-in-place-operations-where-possible-1",
    "page": "Readme",
    "title": "InPlace.jl - in-place operations where possible",
    "category": "section",
    "text": ""
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "using InPlace\na = big\"1\"\nb = a\n@inplace b += 2\na   # is now also equal to 3"
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "This package exposes a single macro, @inplace, which applies the operation in its expression argument in-place on the left-hand side (if it is mutable).Examples:@inplace a = f(args...)\n@inplace a += exprIn the case where a is mutable, it is an implementation detail whether its value is actually modified. For this reason, one should use this operation only on values for which the current stackframe holds the only reference; e.g. by using deepcopy.In this version of the package, it is only the +,- (unary and binary) and * operations that are done in-place, and only for BigInt operands."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "This package was created for speeding up [PolynomialRings.jl][poly].[poly]: https://github.com/tkluck/PolynomialRings.jl"
},

{
    "location": "autodocs/#InPlace.@inplace",
    "page": "Docstrings",
    "title": "InPlace.@inplace",
    "category": "macro",
    "text": "@inplace a = f(args...)\n@inplace a += expr\n\nCompute f(args...) resp. +(a, expr) and assign the result to a. If a is mutable, possibly modify its value in-place.\n\nIn the case where a is mutable, it is an implementation detail whether its value is actually modified. For this reason, one should use this operation only on values for which the current stackframe holds the only reference; e.g. by using deepcopy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InPlace.inclusiveinplace!",
    "page": "Docstrings",
    "title": "InPlace.inclusiveinplace!",
    "category": "function",
    "text": "a = inclusiveinplace!(op, a, b...)\n\nCompute and return op(a, b...). If a is mutable, possibly modify its value in-place.\n\nIn the case where a is mutable, it is an implementation detail whether its value is actually modified, and for this reason, one should always also assign the result of this call to a. Moreover, one should use it only on values for which the current stackframe holds the only reference; e.g. by using deepcopy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InPlace.inplace!",
    "page": "Docstrings",
    "title": "InPlace.inplace!",
    "category": "function",
    "text": "a = inplace!(op, a, b...)\n\nCompute and return op(b...). If a is mutable, possibly modify its value in-place.\n\nIn the case where a is mutable, it is an implementation detail whether its value is actually modified, and for this reason, one should always also assign the result of this call to a. Moreover, one should use it only on values for which the current stackframe holds the only reference; e.g. by using deepcopy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "InPlace.@inplaceInPlace.InPlaceInPlace.evalInPlace.includeInPlace.inclusiveinplace!InPlace.inplace!"
},

]}
