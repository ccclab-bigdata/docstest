var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JSON.jl-1",
    "page": "Readme",
    "title": "JSON.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Parsing-and-printing-JSON-in-pure-Julia.-1",
    "page": "Readme",
    "title": "Parsing and printing JSON in pure Julia.",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)(Image: JSON) (Image: JSON) (Image: JSON) (Image: JSON)Installation: julia> Pkg.add(\"JSON\")"
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "import JSON\n\n# JSON.parse - string or stream to Julia data structures\ns = \"{\\\"a_number\\\" : 5.0, \\\"an_array\\\" : [\\\"string\\\", 9]}\"\nj = JSON.parse(s)\n#  Dict{AbstractString,Any} with 2 entries:\n#    \"an_array\" => {\"string\",9}\n#    \"a_number\" => 5.0\n\n# JSON.json - Julia data structures to a string\nJSON.json([2,3])\n#  \"[2,3]\"\nJSON.json(j)\n#  \"{\\\"an_array\\\":[\\\"string\\\",9],\\\"a_number\\\":5.0}\""
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "JSON.print(io::IO, s::AbstractString)\nJSON.print(io::IO, s::Union{Integer, AbstractFloat})\nJSON.print(io::IO, n::Nothing)\nJSON.print(io::IO, b::Bool)\nJSON.print(io::IO, a::AbstractDict)\nJSON.print(io::IO, v::AbstractVector)\nJSON.print{T, N}(io::IO, v::Array{T, N})Writes a compact (no extra whitespace or indentation) JSON representation to the supplied IO.JSON.print(a::AbstractDict, indent)\nJSON.print(io::IO, a::AbstractDict, indent)Writes a JSON representation with newlines, and indentation if specified. Non-zero indent will be applied recursively to nested elements.json(a::Any)Returns a compact JSON representation as an AbstractString.JSON.parse(s::AbstractString; dicttype=Dict, inttype=Int64)\nJSON.parse(io::IO; dicttype=Dict, inttype=Int64)\nJSON.parsefile(filename::AbstractString; dicttype=Dict, inttype=Int64, use_mmap=true)Parses a JSON AbstractString or IO stream into a nested Array or Dict.The dicttype indicates the dictionary type (<: Associative), or a function that returns an instance of a dictionary type, that JSON objects are parsed to.  It defaults to Dict (the built-in Julia dictionary), but a different type can be passed for additional functionality. For example, if you import DataStructures (assuming the DataStructures package is installed)you can pass dicttype=DataStructures.OrderedDict to maintain the insertion order of the items in the object;\nor you can pass ()->DefaultDict{String,Any}(Missing) to having any non-found keys return missing when you index the result.The inttype argument controls how integers are parsed.  If a number in a JSON file is recognized to be an integer, it is parsed as one; otherwise it is parsed as a Float64.  The inttype defaults to Int64, but, for example, if you know that your integer numbers are all small and want to save space, you can pass inttype=Int32.  Alternatively, if your JSON input has integers which are too large for Int64, you can pass inttype=Int128 or inttype=BigInt.  inttype can be any subtype of Real.JSONText(s::AbstractString)A wrapper around a Julia string representing JSON-formatted text, which is inserted as-is in the JSON output of JSON.print and JSON.json.JSON.lower(p::Point2D) = [p.x, p.y]Define a custom serialization rule for a particular data type. Must return a value that can be directly serialized; see help for more details."
},

{
    "location": "autodocs/#JSON.Common",
    "page": "Docstrings",
    "title": "JSON.Common",
    "category": "module",
    "text": "Internal implementation detail.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JSON.Writer.JSONText",
    "page": "Docstrings",
    "title": "JSON.Writer.JSONText",
    "category": "type",
    "text": "JSONText(s::AbstractString)\n\nJSONText is a wrapper around a Julia string representing JSON-formatted text, which is inserted as-is in the JSON output of JSON.print and JSON.json for compact output, and is otherwise re-parsed for pretty-printed output.\n\ns must contain valid JSON text.  Otherwise compact output will contain the malformed s and other serialization output will throw a parsing exception.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JSON.Serializations",
    "page": "Docstrings",
    "title": "JSON.Serializations",
    "category": "module",
    "text": "JSON writer serialization contexts.\n\nThis module defines the Serialization abstract type and several concrete implementations, as they relate to JSON.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JSON.CommonJSON.JSONJSON.JSONTextJSON.ParserJSON.SerializationsJSON.WriterJSON.evalJSON.includeJSON.json"
},

]}
