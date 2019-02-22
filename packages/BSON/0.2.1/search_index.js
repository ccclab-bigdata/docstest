var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BSON-1",
    "page": "Readme",
    "title": "BSON",
    "category": "section",
    "text": "(Image: Build Status)BSON.jl is a Julia package for working with the Binary JSON serialisation format. It can be used as a general store for Julia data structures, with the following features:Lightweight and ubiquitous, with a simple JSON-like data model and clients in many languages.\nEfficient for binary data (eg. arrays of floats).\nFlexible enough to handle anything you throw at it – closures, custom types, circular data structures, etc.\nBackwards compatible, so that if data layout changes old files will still load.julia> using BSON\n\njulia> bson(\"test.bson\", Dict(:a => [1+2im, 3+4im], :b => \"Hello, World!\"))\n\njulia> BSON.load(\"test.bson\")\nDict{Symbol,Any} with 2 entries:\n  :a => Complex{Int64}[1+2im, 3+4im]\n  :b => \"Hello, World!\"(Note that the top-level object in BSON is always a Dict{Symbol,Any}).There a few utility methods for working with BSON files.julia> using BSON\n\njulia> bson(\"test.bson\", a = 1, b = 2)\n\njulia> BSON.load(\"test.bson\")\nDict{Symbol,Any} with 2 entries:\n  :a => 1\n  :b => 2\n\njulia> using BSON: @save, @load\n\njulia> a, b = 1, 2\n(1, 2)\n\njulia> @save \"test.bson\" a b # Same as above\n\njulia> @load \"test.bson\" a b # Loads `a` and `b` back into the workspaceFor external files you can use BSON.parse to load raw BSON data structures without any Julia-specific interpretation. In basic cases, this will look that same, but Julia-specific types will be stored in a more complex format.julia> BSON.parse(\"test.bson\")\nDict{Symbol,Any} with 2 entries:\n  :a => 1\n  :b => 2\n\njulia> BSON.parse(\"test.bson\")[:data]\nDict{Symbol,Any} with 4 entries:\n  :tag  => \"array\"\n  :type => Dict(:tag=>\"datatype\",:params=>Any[],:name=>[\"Core\",\"Int64\"])\n  :size => [3]\n  :data => UInt8[0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00  …  ]This is also how the data will appear to readers in other languages, should you wish to move data outside of Julia."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BSON.@loadBSON.@saveBSON.BSONBSON.BSONArrayBSON.BSONDictBSON.BSONTypeBSON.PrimitiveBSON.__deserialized_types__BSON._lower_recursiveBSON._raise_recursiveBSON.applychildren!BSON.arrayBSON.backrefs!BSON.binaryBSON.booleanBSON.bsonBSON.bson_docBSON.bson_keyBSON.bson_pairBSON.bson_primitiveBSON.bson_typeBSON.constructtypeBSON.datetimeBSON.dbpointerBSON.decimal128BSON.documentBSON.doubleBSON.eofBSON.evalBSON.includeBSON.initstructBSON.int32BSON.int64BSON.isanonBSON.iscyclicBSON.ismutableBSON.isprimitiveBSON.javascriptBSON.javascript_scopedBSON.jtypeBSON.loadBSON.lowerBSON.lower_anonBSON.lower_recursiveBSON.maxkeyBSON.minkeyBSON.modpathBSON.newprimitiveBSON.newstructBSON.newstruct!BSON.newstruct_rawBSON.nullBSON.objectidBSON.parseBSON.parse_cstrBSON.parse_docBSON.parse_pairsBSON.parse_tagBSON.raiseBSON.raise_recursiveBSON.refBSON.regexBSON.reinterpret_BSON.resolveBSON.roundtripBSON.stringBSON.striprefBSON.structdataBSON.symbolBSON.tagsBSON.timestampBSON.typeof_BSON.typepathBSON.undefined"
},

]}
