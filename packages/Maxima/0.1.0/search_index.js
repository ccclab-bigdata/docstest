var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<p align=\"center\">   <img src=\"./docs/src/assets/logo.png\" alt=\"Maxima.jl\"/> </p>"
},

{
    "location": "#Maxima.jl-1",
    "page": "Readme",
    "title": "Maxima.jl",
    "category": "section",
    "text": "Symbolic Computations in Julia using MaximaDocumentation Build Status\n[![][docs-stable-img]][docs-stable-url] [![][docs-latest-img]][docs-latest-url] [![travis-img]][travis-url] [![codecov-img]][codecov-url]"
},

{
    "location": "#About-1",
    "page": "Readme",
    "title": "About",
    "category": "section",
    "text": "Maxima.jl is a Julia package for performing symbolic computations using Maxima. Maxima is computer algebra software that provides a free and open source alternative to proprietary software such as Mathematica, Maple and others."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Contains a full Maxima repl that can be entered from the Julia repl\nPretty I/O for Maxima expressions including Latex when using IJulia and formatted \'2d\' plain text in the repl\nBasic translation of expressions between Maxima and Julia\nWrapper functions for much of the Maxima standard library that operate on Maxima expressions, Julia expressions and strings\nPlotting via Maxima\'s gnuplot functionality"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Maxima.jl can be installed using the Julia package manager. Maxima.jl currently supports version of Julia >= v0.7.0.julia> Pkg.add(\"Maxima\")\nMaxima.jl requires a working Maxima installation. Downloads and installation instructions can be found here. If you\'re running a Linux operating system take a look in your local repositories.Note: The Maxima package in most Debian based distributions is compiled against gcl and does not have unicode support. Unicode support is required by Maxima.jl. The solution is to compile Maxima yourself using a lisp that supports unicode (sbcl and clisp both work)On Windows you will also need to add the directory containing the maxima.bat executable to your PATH environment variable so that Julia can find it.[home-url]: https://github.com/nsmith5/Maxima.jl.git [logo]: ./docs/src/assets/logo.png[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://nsmith5.github.io/Maxima.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://nsmith5.github.io/Maxima.jl/stable[codecov-img]: https://codecov.io/gh/nsmith5/Maxima.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/nsmith5/Maxima.jl[travis-img]: https://travis-ci.org/nsmith5/Maxima.jl.svg?branch=master [travis-url]: https://travis-ci.org/nsmith5/Maxima.jl"
},

]}
