var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CEnum-1",
    "page": "Readme",
    "title": "CEnum",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Codecov)This package provides a C-compatible enum for Julia.julia> @enum Foo a = 1 b = 2 c = 1\nERROR: LoadError: ArgumentError: values for Enum Foo are not unique\nStacktrace:\n [1] @enum(::LineNumberNode, ::Module, ::Any, ::Vararg{Any,N} where N) at ./Enums.jl:128\nin expression starting at REPL[12]:1\n\njulia> using CEnum\n\njulia> @cenum(Bar, d = 1, e = 2, f = 1)\n\njulia> d == f\ntrue"
},

{
    "location": "#Credit-1",
    "page": "Readme",
    "title": "Credit",
    "category": "section",
    "text": "The original version is written by SimonDanisch in this PR."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CEnum.@cenumCEnum.CEnumCEnum.CenumCEnum.enum_nameCEnum.enum_namesCEnum.enum_valuesCEnum.evalCEnum.includeCEnum.is_memberCEnum.islinear"
},

]}
