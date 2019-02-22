var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StrFormat-1",
    "page": "Readme",
    "title": "StrFormat",
    "category": "section",
    "text": "Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/StrFormat.jl [travis-s-img]: https://travis-ci.org/JuliaString/StrFormat.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/StrFormat.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/strformat-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/strformat-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/r3c2alh3jfcmu2gc?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/r3c2alh3jfcmu2gc/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/detail/StrFormat [pkg-m-url]:    http://pkg.julialang.org/detail/StrFormat [pkg-s-img]:    http://pkg.julialang.org/badges/StrFormat0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/StrFormat0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/StrFormat.jl [codecov-img]:  https://codecov.io/gh/JuliaString/StrFormat.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/StrFormat.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/StrFormat.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/StrFormat.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/StrFormat.jl/badge.svg?branch=masterThe following extra format sequences (see StrLiterals for the full specification) are added:\\%<ccc><formatcode>(arguments) is interpolated as a call to cfmt(\"<cccc><formatcode>\",arguments), where <ccc><formatcode> is a C-style format string.\n\\%(arguments) is interpolated as a call to fmt(arguments).This is especially useful when defaults have been set for the type of the first argument.fmt_default!{T}(::Type{T}, syms::Symbol...; kwargs...) sets the defaults for a particular type.\nfmt_default!(syms::Symbol...; kwargs...) sets the defaults for all types.Symbols that can currently be used are: :ljust or :left, :rjust or :right, :commas, :zpad or :zeropad, and :ipre or :prefix.reset!{T}(::Type{T}) resets the defaults for a particular type.\ndefaultSpec(x) will return the defaults for the type of x, and\ndefaultSpec{T}(::Type{T}) will return the defaults for the given type.There is currently support for Python style formatting, although that is a work-in-progress, and I am intending to improve the syntax to make it as close as possible to Python\'s 3.6 format strings. Currently, the syntax is \\{<formatstring>}(expression), however I plan on changing it shortly to \\{expression} (equivalent to pyfmt(\"\", expression), and \\{expression;formatstring} (equivalent to pyfmt(\"formatstring\", expression)."
},

{
    "location": "autodocs/#StrFormat.StrFormat",
    "page": "Docstrings",
    "title": "StrFormat.StrFormat",
    "category": "module",
    "text": "\" Add C, Python and type-based formatting to Str string literals\n\nCopyright 2016-2018 Gandalf Software, Inc., Scott P. Jones Licensed under MIT License, see LICENSE.md\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StrFormat.StrFormatStrFormat.__init__StrFormat.__tmp_api__StrFormat._parse_fmtStrFormat._parse_formatStrFormat._parse_pyfmtStrFormat.evalStrFormat.include"
},

]}
