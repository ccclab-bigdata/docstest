var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FiniteFloats.jl-1",
    "page": "Readme",
    "title": "FiniteFloats.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Floats-with-neither-Infinities-nor-NaNs.-1",
    "page": "Readme",
    "title": "Floats with neither Infinities nor NaNs.",
    "category": "section",
    "text": ""
},

{
    "location": "#Copyright-and-thinsp;2018-by-Jeffrey-Sarnoff.-and-nbsp;-and-nbsp;-This-work-is-released-under-The-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright ©&thinsp;2018 by Jeffrey Sarnoff. &nbsp;&nbsp; This work is released under The MIT License.",
    "category": "section",
    "text": ""
},

{
    "location": "#[![Build-Status](https://travis-ci.org/JeffreySarnoff/FiniteFloats.jl.svg?branchmaster)](https://travis-ci.org/JeffreySarnoff/FiniteFloats.jl)-1",
    "page": "Readme",
    "title": "(Image: Build Status)",
    "category": "section",
    "text": ""
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": "\nusing FiniteFloats\n\njulia> a = sqrt(Finite64(2))\n1.4142135623730951\n\njulia> typeof(a)\nFinite64\n\njulia> b = Finite32(Inf32)\n3.4028235f38\n\njulia> b == typemax(Finite32)\ntrue"
},

{
    "location": "#Exports-1",
    "page": "Readme",
    "title": "Exports",
    "category": "section",
    "text": ""
},

{
    "location": "#exported-types-1",
    "page": "Readme",
    "title": "exported types",
    "category": "section",
    "text": "Finite64, Finite32, Finite16"
},

{
    "location": "#supported-functions-1",
    "page": "Readme",
    "title": "supported functions",
    "category": "section",
    "text": "In addition to the familiar functions that work with Float64, Float32, Float16,     (comparisions, floating part decompositions, arithmetic, elementary functions)square, cube\nstring, show, \ntypemax, typemin, floatmax, floatmin\nsignificand, exponent, precision\nprevfloat, nextfloat, isequal, isless\n(==), (!=), (<), (<=), (>=), (>)\n(+), (-), (*), (/), (^)\ninv, div, rem, fld, mod, cld\nround, trunc, ceil, floor (single arg forms)\nabs, signbit, copysign, flipsign, sign\nfrexp, ldexp, modf\nmin, max, minmax\nclamp, sqrt, cbrt, hypot\nexp, expm1, exp2, exp10\nlog, log1p, log2, log10sin, cos, tan, csc, sec, cot\nasin, acos, atan, acsc, asec, acot\nsinh, cosh, tanh, csch, sech, coth,\nasinh, acosh, atanh, acsch, asech, acothsind, cosd, tand, cscd, secd, cotd\nasind, acosd, atand, acscd, asecd, acotd\nrad2deg, deg2rad, mod2pi, rem2pi\nsincos, sinc, sinpi, cospi"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "julia> Float64(0) * inv(Float64(0))\nNaN\n\njulia> Finite64(0) * inv(Finite64(0))\n0.0\n\njulia> typemax(Finite64) == nextfloat(floatmax(Finite64)) == floatmax(Finite64)\ntrueFinite64|32|16 are saturating at ±floatmax(T) "
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FiniteFloats.AbstractFiniteFiniteFloats.Finite16FiniteFloats.Finite16_maxnegFiniteFloats.Finite16_maxposFiniteFloats.Finite16_minnegFiniteFloats.Finite16_minposFiniteFloats.Finite32FiniteFloats.Finite32_maxnegFiniteFloats.Finite32_maxposFiniteFloats.Finite32_minnegFiniteFloats.Finite32_minposFiniteFloats.Finite64FiniteFloats.Finite64_maxnegFiniteFloats.Finite64_maxposFiniteFloats.Finite64_minnegFiniteFloats.Finite64_minposFiniteFloats.FiniteFloat16FiniteFloats.FiniteFloat32FiniteFloats.FiniteFloat64FiniteFloats.FiniteFloatsFiniteFloats.cubeFiniteFloats.evalFiniteFloats.exmp!FiniteFloats.expmFiniteFloats.expm!FiniteFloats.finiteFiniteFloats.includeFiniteFloats.squareFiniteFloats.typemaxnegFiniteFloats.typeminneg"
},

]}
