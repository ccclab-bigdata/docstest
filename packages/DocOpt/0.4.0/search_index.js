var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DocOpt.jl-1",
    "page": "Readme",
    "title": "DocOpt.jl",
    "category": "section",
    "text": "(Image: Build Status)DocOpt.jl is a port of docopt written in the Julia language.docopt generates a command-line arguments parser from human-readable usage patterns.You will find how attractive the idea of docopt is with the example below:doc = \"\"\"Naval Fate.\n\nUsage:\n  naval_fate.jl ship new <name>...\n  naval_fate.jl ship <name> move <x> <y> [--speed=<kn>]\n  naval_fate.jl ship shoot <x> <y>\n  naval_fate.jl mine (set|remove) <x> <y> [--moored|--drifting]\n  naval_fate.jl -h | --help\n  naval_fate.jl --version\n\nOptions:\n  -h --help     Show this screen.\n  --version     Show version.\n  --speed=<kn>  Speed in knots [default: 10].\n  --moored      Moored (anchored) mine.\n  --drifting    Drifting mine.\n\n\"\"\"\n\nusing DocOpt  # import docopt function\n\nargs = docopt(doc, version=v\"2.0.0\")The result is:$ julia -qL examples/naval_fate.jl ship new FOO\njulia> args\nDict{String,Any} with 15 entries:\n  \"remove\"     => false\n  \"--help\"     => false\n  \"<name>\"     => String[\"FOO\"]\n  \"--drifting\" => false\n  \"mine\"       => false\n  \"move\"       => false\n  \"--version\"  => false\n  \"--moored\"   => false\n  \"<x>\"        => nothing\n  \"ship\"       => true\n  \"new\"        => true\n  \"shoot\"      => false\n  \"set\"        => false\n  \"<y>\"        => nothing\n  \"--speed\"    => \"10\"\nJulia v0.6 is now supported."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "The DocOpt module exports just one function, docopt, which takes multiple arguments but all of them except the first one are optional.docopt(doc::AbstractString, argv=ARGS; help=true, version=nothing, options_first=false, exit_on_error=true)Argumentsdoc : Description of your command-line interface. (type: AbstractString)\nargv : Argument vector to be parsed. (type: String or Vector{String}, default: ARGS)\nhelp : Set to false to disable automatic help on -h or –help options. (type: Bool, default: true)\nversion : If passed, the value will be printed if –version is in argv. (any type, but VersionNumber is recommended, e.g. v\"1.0.2\")\noptions_first : Set to true to require options precedes positional arguments, i.e. to forbid options and positional arguments intermix. (type: Bool, default: false)\nexit_on_error : Set to true to print the usage and exit when parsing error happens. This option is for unit testing. (type: Bool, default: true)doc argument is mandatory, argv argument is automatically set to command-line arguments, and help, version, options_first and exit_on_error are keyword arguments.Returnparsed arguments : An associative collection, where keys are names of command-line elements such as e.g. \"–verbose\" and \"<path>\", and values are the parsed values of those elements. (type: Dict{String,Any})See http://docopt.org/ for more details about the grammar of the usage pattern."
},

{
    "location": "autodocs/#DocOpt.docopt",
    "page": "Docstrings",
    "title": "DocOpt.docopt",
    "category": "function",
    "text": "docopt(doc::AbstractString,\n       args=ARGS;\n       version=nothing,\n       help::Bool=true,\n       options_first::Bool=false,\n       exit_on_error::Bool=true)\n\nParse command-line arguments according to a help message.\n\nParsed command-line arguments are retuned as a dictionary of arguments of type Dict{AbstractString,Any}; keys are argument names or flag names, and values are argument values passed to the command-line arguments.\n\nSee http://docopt.org/ for the description language of help.\n\nArguments\n\ndoc: description of your command-line interface.\nargs=ARGS: argument vector to be parsed.\nversion=nothing: version of your command-line tool (e.g. v\"1.0.2\").\nhelp=true: show the help when \'-h\' or \'–help\' is passed.\noptions_first=false: force options to precede positional arguments.\nexit_on_error=true: print the usage and exit when parsing error happens.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DocOpt.ArgumentDocOpt.BranchPatternDocOpt.ChildrenDocOpt.CommandDocOpt.DocOptDocOpt.DocOptExitDocOpt.DocOptLanguageErrorDocOpt.EitherDocOpt.IteratorSizeDocOpt.LeafPatternDocOpt.OneOrMoreDocOpt.OptionDocOpt.OptionalDocOpt.OptionsShortcutDocOpt.PatternDocOpt.RequiredDocOpt.TokensDocOpt.currentDocOpt.docoptDocOpt.evalDocOpt.extrasDocOpt.fixDocOpt.fix_identitiesDocOpt.fix_repeating_argumentsDocOpt.flatDocOpt.formal_usageDocOpt.includeDocOpt.isdashDocOpt.move!DocOpt.nameDocOpt.parse_argvDocOpt.parse_atomDocOpt.parse_defaultsDocOpt.parse_exprDocOpt.parse_longDocOpt.parse_patternDocOpt.parse_sectionDocOpt.parse_seqDocOpt.parse_shortsDocOpt.partitionDocOpt.patternmatchDocOpt.single_matchDocOpt.transform"
},

]}
