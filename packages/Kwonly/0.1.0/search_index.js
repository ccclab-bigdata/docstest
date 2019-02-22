var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Kwonly.jl-–-Macro-to-generate-keyword-only-version-of-a-function-1",
    "page": "Readme",
    "title": "Kwonly.jl –- Macro to generate keyword-only version of a function",
    "category": "section",
    "text": "[![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![codecov.io][codecov-img]][codecov-url]"
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "Kwonly.jl provides a macro @add_kwonly.  It creates a keyword-only version of the given function.  Example:using Kwonly\n\nstruct A\n    x\n    y\n    @add_kwonly A(x, y=2) = new(x, y)\nendThis macro add a keyword-only constructor by expanding A(x, y=2) = new(x, y) into:  A(x, y) = new(x, y)                                      # original\n  A(; x = throw(UndefKeywordError(:x)), y=2) = new(x, y)   # keyword-only\n  ```\n\nSo, the struct `A` can also be constructed by using only keyword\narguments:\njulia @test A(1) == A(x=1) ```[travis-img]: https://travis-ci.org/tkf/Kwonly.jl.svg?branch=master [travis-url]: https://travis-ci.org/tkf/Kwonly.jl [coveralls-img]: https://coveralls.io/repos/tkf/Kwonly.jl/badge.svg?branch=master&service=github [coveralls-url]: https://coveralls.io/github/tkf/Kwonly.jl?branch=master [codecov-img]: http://codecov.io/github/tkf/Kwonly.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/tkf/Kwonly.jl?branch=master"
},

{
    "location": "autodocs/#Kwonly.@add_kwonly",
    "page": "Docstrings",
    "title": "Kwonly.@add_kwonly",
    "category": "macro",
    "text": "@add_kwonly function_definition\n\nDefine keyword-only version of the function_definition.\n\n@add_kwonly function f(a, b; c=1, d=2)\n    ...\nend\n\nexpands to:\n\nfunction f(x; y=1)\n    ...\nend\nfunction f(; x = throw(UndefKeywordError(:x)), y=1)\n    ...\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Kwonly.@add_kwonlyKwonly.KwonlyKwonly.add_kwonlyKwonly.evalKwonly.include"
},

]}
