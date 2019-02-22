var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DocumenterTools-1",
    "page": "Readme",
    "title": "DocumenterTools",
    "category": "section",
    "text": "Build Status\n[![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][codecov-img]][codecov-url]This package contains utilities for setting up documentation generation with [Documenter.jl][documenter]. For documentation see [Documenter.jls documentation][documenter-docs]."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package can be added using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and runpkg> add DocumenterTools[documenter]: https://github.com/JuliaDocs/Documenter.jl [documenter-docs]: https://juliadocs.github.io/Documenter.jl/stable/[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://juliadocs.github.io/DocumenterTools.jl/stable[travis-img]: https://travis-ci.org/JuliaDocs/DocumenterTools.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaDocs/DocumenterTools.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/xx7nimfpnl1r4gx0?svg=true [appveyor-url]: https://ci.appveyor.com/project/JuliaDocs/documentertools-jl[codecov-img]: https://codecov.io/gh/JuliaDocs/DocumenterTools.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/JuliaDocs/DocumenterTools.jl"
},

{
    "location": "autodocs/#DocumenterTools.Generator",
    "page": "Docstrings",
    "title": "DocumenterTools.Generator",
    "category": "module",
    "text": "Provides the functions related to generating documentation stubs.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumenterTools.Travis",
    "page": "Docstrings",
    "title": "DocumenterTools.Travis",
    "category": "module",
    "text": "Package functions for interacting with Travis.\n\ngenkeys\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumenterTools.generate",
    "page": "Docstrings",
    "title": "DocumenterTools.generate",
    "category": "function",
    "text": "DocumenterTools.generate(path::String; name = nothing, format = :html)\n\nCreate a documentation stub in path, which is usually a sub folder in the package root. The name of the package is determined automatically, but can be given with the name keyword argument.\n\ngenerate creates the following files in path:\n\n.gitignore\nsrc/index.md\nmake.jl\nmkdocs.yml\nProject.toml\n\nArguments\n\npath file path to the documentation directory.\n\nKeywords Arguments\n\nname is the name of the package (without .jl). If name is not given generate tries to detect it automatically.\n\nformat can be either :html (default), :markdown or :pdf corresponding to the format keyword to Documenter\'s makedocs function, see Documenter\'s manual.\n\nExamples\n\njulia> using DocumenterTools\n\njulia> Documenter.generate(\"path/to/MyPackage/docs\")\n[ ... output ... ]\n\n\n\n\n\nDocumenterTools.generate(pkg::Module; dir = \"docs\", format = :html)\n\nSame as generate(path::String) but the path and name is determined automatically from the module.\n\nnote: Note\nThe package must be in development mode. Make sure you run pkg> develop pkg from the Pkg REPL, or Pkg.develop(\"pkg\") before generating docs.\n\nExamples\n\njulia> using DocumenterTools\n\njulia> using MyPackage\n\njulia> DocumenterTools.generate(MyPackage)\n[ ... output ... ]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DocumenterTools.package_devpath",
    "page": "Docstrings",
    "title": "DocumenterTools.package_devpath",
    "category": "function",
    "text": "package_devpath(pkg)\n\n\nReturns the path to the top level directory of a devved out package source tree. The package is identified by its top level module pkg.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DocumenterTools.DocumenterToolsDocumenterTools.GeneratorDocumenterTools.TravisDocumenterTools.evalDocumenterTools.generateDocumenterTools.includeDocumenterTools.package_devpath"
},

]}
