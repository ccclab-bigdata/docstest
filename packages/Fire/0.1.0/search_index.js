var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Fire.jl-1",
    "page": "Readme",
    "title": "Fire.jl",
    "category": "section",
    "text": "(Image: ) (Image: ) (Image: )Fire.jl is a library for creating simple CLI from julia function definitions."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Fire\")"
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "put using Fire into your file\nput @main in front of your entry functions\n(optional) add shebang and chmod to save a word in commandline\nenjoyusing Fire\n\n\"Your Doc String\"\n@main function repeat_string(message::AbstractString, times::Integer=3; color::Symbol=:normal)\n    times < 0 && throw(ArgumentError(\"cannot repeat negative times\"))\n    for i in 1:times\n        print_with_color(color, message)\n    end\nendThen you can call repeat_string at commandline (assume the file is called \"example.jl\")$ julia example.jl hello\nhello\nhello\nhello\n\n$ julia example.jl \"hello world!\" 1\nhello world!\n\n$ julia example.jl \"hello world!\" 1 --color red\nhello world!\n\n$ julia example.jl \"hello world!\" badguy\nError parsing positional argument `times`: require `Integer`, but got \"badguy\"\n`--help` for usages\n\n$ julia example.jl --help\nYour Doc String\n\nPositional Arguments:\n    str: AbstractString\n    times: Integer (default: 3)\n\nOptional Arguments:\n    color: Symbol (default: normal)Multiple entries are supported. You can call each function by name.using Fire\n\n@main function is_odd(x::Integer)\n    x == 0 ? println(\"false\") : is_even(x-sign(x))\nend\n\n@main function is_even(x::Integer)\n    x == 0 ? println(\"true\") : is_odd(x-sign(x))\nend$ julia example.jl is_odd 3\ntrue\n\n$ julia example.jl is_even 3\nfalse"
},

{
    "location": "#Why-is-it-called-Fire?-1",
    "page": "Readme",
    "title": "Why is it called Fire?",
    "category": "section",
    "text": "This package is highly inspired by python-fire"
},

{
    "location": "#Details-1",
    "page": "Readme",
    "title": "Details",
    "category": "section",
    "text": ""
},

{
    "location": "#Supported-Types-1",
    "page": "Readme",
    "title": "Supported Types",
    "category": "section",
    "text": "String / AbstractString / Symbol\n\"basic\" number types like Int32, AbstractFloat, etc.\nVarArgs of above types\nVector of above types is allowed in optional arguments\nBool is allowed in optional arguments, and will be parsed as flag"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Fire.@mainFire.BASIC_ABSTRACT_TYPEFire.BASIC_NUMBER_TYPEFire.BASIC_STRING_TYPEFire.BASIC_TYPESFire.FireFire.FuncDefFire.OPTIONALFire.REQUIREDFire.VARLENGTHFire.__init__Fire.entriesFire.evalFire.includeFire.parse_command_lineFire.parse_function_definitionFire.parse_with_typeFire.print_help_allFire.print_help_entry"
},

]}
