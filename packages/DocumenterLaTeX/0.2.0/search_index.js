var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DocumenterLaTeX-1",
    "page": "Readme",
    "title": "DocumenterLaTeX",
    "category": "section",
    "text": "Build Status\n[![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][codecov-img]][codecov-url]This package enables the LaTeX / PDF backend of [Documenter.jl][documenter]."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package can be added using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and runpkg> add DocumenterLaTeX"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To enable the backend import the package in make.jl and then just pass format = DocumenterLaTeX.LaTeX() to makedocs:using Documenter\nusing DocumenterLaTeX\nmakedocs(format = DocumenterLaTeX.LaTeX(), ...)[documenter]: https://github.com/JuliaDocs/Documenter.jl [documenter-docs]: https://juliadocs.github.io/Documenter.jl/stable/[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://juliadocs.github.io/DocumenterLaTeX.jl/stable[travis-img]: https://travis-ci.org/JuliaDocs/DocumenterLaTeX.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaDocs/DocumenterLaTeX.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/x5d69ftlp7q44kam?svg=true [appveyor-url]: https://ci.appveyor.com/project/JuliaDocs/documenterlatex-jl[codecov-img]: https://codecov.io/gh/JuliaDocs/DocumenterLaTeX.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaDocs/DocumenterLaTeX.jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DocumenterLaTeX.DocumenterLaTeXDocumenterLaTeX.LaTeXDocumenterLaTeX.__init__DocumenterLaTeX.evalDocumenterLaTeX.include"
},

]}
