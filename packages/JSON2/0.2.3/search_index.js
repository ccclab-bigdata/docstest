var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JSON2-1",
    "page": "Readme",
    "title": "JSON2",
    "category": "section",
    "text": "Fast JSON for Julia typesPackageEvaluator Build Status\n[![][pkg-0.6-img]][pkg-0.6-url] [![][travis-img]][travis-url] [![][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered in METADATA.jl and so can be installed with Pkg.add.julia> Pkg.add(\"JSON2\")"
},

{
    "location": "#Project-Status-1",
    "page": "Readme",
    "title": "Project Status",
    "category": "section",
    "text": "The package is tested against the current Julia 0.6 release and nightly on Linux and OS X."
},

{
    "location": "#Contributing-and-Questions-1",
    "page": "Readme",
    "title": "Contributing and Questions",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions. Please open an [issue][issues-url] if you encounter any problems or would just like to ask a question.<!– [docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://quinnj.github.io/JSON2.jl/latest –>[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://quinnj.github.io/JSON2.jl/stable[travis-img]: https://travis-ci.org/quinnj/JSON2.jl.svg?branch=master [travis-url]: https://travis-ci.org/quinnj/JSON2.jl[codecov-img]: https://codecov.io/gh/quinnj/JSON2.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/quinnj/JSON2.jl[issues-url]: https://github.com/quinnj/JSON2.jl/issues[pkg-0.6-img]: http://pkg.julialang.org/badges/JSON2_0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=JSON2"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "For most use-cases, all you ever need are:JSON2.write(obj) => String\nJSON2.read(str, T) => T\n@pretty json_string # print a \"prettified\" version of a JSON stringNative support for reading/writing is provided for:NamedTuple\nArray\nNumber\nNothing/Missing: corresponds to JSON null\nString\nBool\nJSON2.Function: type that represents a javascipt function (stored in plain text)\nUnion{T, Nothing}\nAbstractDict\nTuple\nSet\nChar\nSymbol\nEnum\nDate/DateTimeCustom types are supported by default as well, utilizing reflection to generate compiled JSON parsers for a type\'s fields. So in general, you really can just do JSON2.read(str, MyType) and everything will \"Just Work\" (and be freaky fast as well!)."
},

{
    "location": "#Custom-JSON-Formatting-1",
    "page": "Readme",
    "title": "Custom JSON Formatting",
    "category": "section",
    "text": ""
},

{
    "location": "#Default-1",
    "page": "Readme",
    "title": "Default",
    "category": "section",
    "text": "In many cases, a type doesn\'t even need to use JSON2.@format since the default reflection-based parsing is somewhat flexible. By default, the JSON input is expected to contain each field of a type and be in the same order as the type was defined. For example, the struct:struct T\n    a::Int\n    b::Int\n    c::Union{Nothing, Int}\nendCould have valid JSON in the forms:{\"a\": 0, \"b\": 1, \"c\": null} // all 3 fields provided in correct order\n{\"a\": 0, \"b\": 1, \"c\": 2}\n{\"a\": 0, \"b\": 1, \"c\": null, \"d\": 3} // extra fields are ignored\n{\"a\": 0} // will work if T(a) constructor is defined\n{\"a\": 0, \"b\": 1} // will work if T(a, b) constructor is definedThat is, each field must be present in the JSON input and match in position to the original struct definition. Extra arguments after the struct\'s own fieldtypes are ignored. As noted, the exception to a field needing to be present is if 1) the field and all subsequent fields are not present and 2) appropriate constructors are defined that take these limited subsets of inputs when constructing, e.g. T(a), T(a, b), etc."
},

{
    "location": "#JSON.@format-T-1",
    "page": "Readme",
    "title": "JSON.@format T",
    "category": "section",
    "text": "JSON2.@format T [noargs|keywordargs] begin\n    _field_ => (; options...)\n    _field2_ => (; options...)\nendSpecify a custom JSON formatting for a struct T, with individual field options being given like fieldname => (; option1=value1, option2=value2), i.e a Pair of the name of the field to a NamedTuple of options. Valid field options include:name: if a field\'s name should be read/written differently than it\'s defined name\njsontype: if the JSON type of a field is different than the julia field type, the JSON type can be provided like jsontype=String\nomitempty: whether an \"empty\" julia field should still be written; applies to collection types like AbstractArray, AbstractDict, AbstractSet, etc.\nexclude: whether a julia field should be excluded altogether from JSON reading/writing\ndefault: a default value that can be provided for a julia field if it may not appear in a JSON input string when parsingAgain, the default case is for JSON input that will have consistently ordered, always-present fields; for cases where the input JSON is not well-ordered or if there is a possibility of a field not being present in the JSON input, there are a few additional options for custom parsing."
},

{
    "location": "#Default-field-values-1",
    "page": "Readme",
    "title": "Default field values",
    "category": "section",
    "text": "If the JSON input fields will always be consistenly-ordered, but fields may be missing (i.e. field isn\'t present at all in the input), field defaults can be provided like:JSON2.@format T begin\n    c => (default=0,)\nendThis says that, when reading from a JSON input, if field c isn\'t present, to set it\'s value to 0.If the JSON input is not consistenly-ordered, there are two other options for allowing direct type parsing"
},

{
    "location": "#Keywordargs-Constructor-1",
    "page": "Readme",
    "title": "Keywordargs Constructor",
    "category": "section",
    "text": "T(; a=0, b=0, c=0, kwargs...) = T(a, b, c)\nJSON2.@format T keywordargs begin\n    # ...\nendHere we\'ve defined a \"keywordargs\" constructor for T that essentially takes a default for each field as keyword arguments, then constructs T. During parsing, the JSON input will be parsed for any valid field key-values and the keyword constructor will be called with whatever arguments are parsed in whatever order. Note that we also included a catchall kwargs... in our constructor which can be used to \"throw away\" or ignore any extra fields in the JSON input."
},

{
    "location": "#Noargs-Constructor-1",
    "page": "Readme",
    "title": "Noargs Constructor",
    "category": "section",
    "text": "mutable struct T\n    a::Int\n    b::Int\n    c::Union{Nothing, Int}\nend\nT() = T(0, 0, 0)\nJSON2.@format T noargs begin\n    #...\nendIn this case, we\'ve made T a mutable struct and defined a \"noargs\" constructor T() = ...; we then specified in JSON2.@format T noargs the noargs option. During parsing, an instance of T will first constructed using the \"noargs\" constructor, then fields will be set as they\'re parsed from the JSON input (hence why mutable struct is required)."
},

{
    "location": "autodocs/#JSON2.@format",
    "page": "Docstrings",
    "title": "JSON2.@format",
    "category": "macro",
    "text": "JSON2.@format T [noargs|keywordargs] begin\n    _field_ => (; options...)\n    _field2_ => (; options...)\nend\n\nSpecify a custom JSON formatting for a struct T. Options include:     name:      jsontype:     omitempty:     exclude:     default:\n\nBy default, the JSON input is expected to contain each field of a type and be in the same order as the type was defined. For example, the struct:\n\nstruct T\n    a::Int\n    b::Int\n    c::Union{Nothing, Int}\nend\n\nWould have JSON like:\n\n{\"a\": 0, \"b\": 1, \"c\": null}\n{\"a\": 0, \"b\": 1, \"c\": 2}\n{\"a\": 0, \"b\": 1, \"c\": null, \"d\": 3} // extra fields are ignored\n{\"a\": 0} // will work if T(a) constructor is defined\n{\"a\": 0, \"b\": 1} // will work if T(a, b) constructor is defined\n\nThat is, each field must be present in the JSON input and match in position to the original struct definition. Extra arguments after the struct\'s own fieldtypes are ignored.\n\nAgain, the default case is for JSON input that will have consistently ordered, always-present fields; for cases where the input JSON is not well-ordered or if there is a possibility of a null, non-Union{T, Nothing} field, here\'s how to approach more advanced custom formatting:     - If the input will always be consistenly-ordered, but fields may be missing (not null, but the field key isn\'t even available in the input), defaults can be provided like:     JSON2.@format T begin         c => (default=0,)     end     This says that, when reading from a JSON input, if field c isn\'t present, to set it\'s value to 0.\n\n- If the JSON input is not consistenly-ordered, there are two other options for allowing direct type parsing:\n  \n  ```\n  T(; a=0, b=0, c=0, kwargs...) = T(a, b, c)\n  JSON2.@format T keywordargs begin\n    ...\n  end\n  ```\n  Here we\'ve defined a \"keywordargs\" constructor for `T` that essentially takes a default for each field as keyword arguments, then constructs `T`.\n  During parsing, the JSON input will be parsed for any valid field key-values and the keyword constructor will be called\n  with whatever arguments are parsed in whatever order. Note that we also included a catchall `kwargs...` in our constructor which can be used to \"throw away\" or ignore any extra fields in the JSON input.\n\n  ```\n  mutable struct T\n      a::Int\n      b::Int\n      c::Union{Nothing, Int}\n  end\n  T() = T(0, 0, 0)\n  JSON2.@format T noargs begin\n    ...\n  end\n  ```\n  In this case, we\'ve made `T` a _mutable_ struct and defined a \"noargs\" constructor `T() = ...`; we then specified in `JSON2.@format T noargs` the `noargs` option.\n  During parsing, an instance of `T` will first constructed using the \"noargs\" constructor, then fields will be set as they\'re parsed from the JSON input (hence why `mutable struct` is required).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JSON2.@expectJSON2.@expectoneofJSON2.@formatJSON2.@prettyJSON2.BACKSLASHJSON2.BACKSPACEJSON2.BIG_AJSON2.BIG_EJSON2.BIG_FJSON2.BIG_IJSON2.BIG_NJSON2.BIG_TJSON2.BIG_YJSON2.BUFJSON2.CLOSE_CURLY_BRACEJSON2.CLOSE_SQUARE_BRACEJSON2.COLONJSON2.COMMAJSON2.EMPTY_SYMBOLJSON2.ESCAPECHARSJSON2.FORMJSON2.FORWARDSLASHJSON2.FunctionJSON2.JSON2JSON2.LITTLE_AJSON2.LITTLE_BJSON2.LITTLE_EJSON2.LITTLE_FJSON2.LITTLE_IJSON2.LITTLE_LJSON2.LITTLE_NJSON2.LITTLE_RJSON2.LITTLE_SJSON2.LITTLE_TJSON2.LITTLE_UJSON2.LITTLE_YJSON2.MINUSJSON2.NEEDESCAPEJSON2.NEG_ONEJSON2.NEWLINEJSON2.OPEN_CURLY_BRACEJSON2.OPEN_SQUARE_BRACEJSON2.PERIODJSON2.PLUSJSON2.QUOTEJSON2.RETURNJSON2.SPACEJSON2.TABJSON2.TENJSON2.ZEROJSON2.charvalueJSON2.escapecharJSON2.escapedJSON2.evalJSON2.generate_default_read_bodyJSON2.generate_missing_read_bodyJSON2.generate_read_body_noargsJSON2.generate_write_bodyJSON2.getconvertJSON2.getformatsJSON2.includeJSON2.invalidJSON2.iscntrlJSON2.isemptyJSON2.iswhJSON2.needescapeJSON2.nonNothingTJSON2.numberJSON2.peekbyteJSON2.prettyJSON2.readJSON2.read_argsJSON2.readbyteJSON2.readhexcharJSON2.reverseescapecharJSON2.unescapeJSON2.wh!JSON2.write"
},

]}
