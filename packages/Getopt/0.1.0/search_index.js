var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Getopt.jl is a Julia package that parses command-line arguments with an API nearly identical to getopt [in Python][1]. To install:julia -e \'using Pkg; Pkg.add(\"https://github.com/attractivechaos/Getopt.jl\")\'To use:for (opt, arg) in Getopt.getopt(ARGS, \"xy:\", [\"foo\", \"bar=\"])\n	@show (opt, arg)\nend\n@show ARGS[1]: https://docs.python.org/3/library/getopt.html"
},

{
    "location": "autodocs/#Getopt.getopt",
    "page": "Docstrings",
    "title": "Getopt.getopt",
    "category": "function",
    "text": "getopt(args::Array{String}, ostr::String, longopts::Array{String}=String[])\n\nIterate through command line options with a getopt-like interface and remove options from args.\n\nargs is typically ARGS. By default, options are allowed to occur after non-option arguments. If ostr[1]==\'+\', the default behavior is disabled.\n\nExamples\n\nfor (opt, arg) in Getopt.getopt(ARGS, \"xy:\", [\"foo\", \"bar=\"])\n	@show (opt, arg)\nend\n@show ARGS # only non-option arguments remain\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Getopt.GetoptGetopt.GetoptIterGetopt.evalGetopt.getoptGetopt.include"
},

]}
