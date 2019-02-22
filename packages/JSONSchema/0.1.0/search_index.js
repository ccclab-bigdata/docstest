var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JSONSchema-1",
    "page": "Readme",
    "title": "JSONSchema",
    "category": "section",
    "text": "JSON instance validation using JSON Schemas(Image: Build Status) (Image: Build status) (Image: JSONSchema) (Image: JSONSchema) (Image: Coverage Status) (Image: codecov)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "JSONSchema.jl is a JSON validation package for the julia programming language. Given a validation Schema (see http://json-schema.org/specification.html) this package can verify if any JSON instance follows all the assertions defining a valid document.This package has been validated with the test suite of the JSON Schema org (https://github.com/json-schema-org/JSON-Schema-Test-Suite) for draft v4 and v6."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "First step is to create a Schema object :# using a String as input\nmyschema = Schema(\"\"\"\n {\n    \"properties\": {\n       \"foo\": {},\n       \"bar\": {}\n    },\n    \"required\": [\"foo\"]\n }\"\"\")  \n\n# or using a pre-processed JSON as input, using the JSON package\nsch = JSON.parsefile(filepath)\nmyschema = Schema(sch)You can then check the validity of a given JSON instance by calling isvalid with the JSON instance to be tested and the Schema:isvalid( JSON.parse(\"{ \"foo\": true }\"), myschema) # true\nisvalid( JSON.parse(\"{ \"bar\": 12.5 }\"), myschema) # falseThe JSON instance should be provided as a pre-processed JSON object created with the JSON package.Should you need a diagnostic message to understand the cause of rejection you can use the diagnose() function. diagnose() will either return nothing if the instance is valid or a message detailing which assertion failed.diagnose( JSON.parse(\"{ \"foo\": true }\") , myschema)\n# nothing\ndiagnose( JSON.parse(\"{ \"bar\": 12.5 }\") , myschema)\n# \"in [] : required property \'foo\' missing\""
},

{
    "location": "autodocs/#JSONSchema.Schema",
    "page": "Docstrings",
    "title": "JSONSchema.Schema",
    "category": "type",
    "text": "Schema(sch::String)\n\nCreate a schema for document validation. sch should be a String containing a valid JSON.\n\nSchema(sch::Dict)\n\nCreate a schema but with sch being a parsed JSON created with JSON.parse() or JSON.parsefile().\n\nExample\n\njulia> myschema = Schema(\"\n  {\n    \"properties\": {\n      \"foo\": {},\n      \"bar\": {}\n    },\n    \"required\": [\"foo\"]\n  }\n  \")\n\njulia> sch = JSON.parsefile(filepath)\njulia> myschema = Schema(sch)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JSONSchema.diagnose",
    "page": "Docstrings",
    "title": "JSONSchema.diagnose",
    "category": "function",
    "text": "diagnose(x, s::Schema)\n\nCheck that a document x is valid against the Schema s. If valid return nothing, and if not, return a diagnostic String containing a selection of one or more likely causes of failure.\n\nExamples\n\njulia> diagnose( JSON.parse(\"{ \"foo\": true }\"), myschema)\nnothing\njulia> diagnose( JSON.parse(\"{ \"bar\": 12.5 }\"), myschema)\n\"in [] : required property \'foo\' missing\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isvalid",
    "page": "Docstrings",
    "title": "Base.isvalid",
    "category": "function",
    "text": "isvalid(x, s::Schema)\n\nCheck that a document x is valid against the Schema s.\n\nExamples\n\njulia> myschema = Schema(\"\n  {\n    \"properties\": {\n      \"foo\": {},\n      \"bar\": {}\n    },\n    \"required\": [\"foo\"]\n  }\n  \")\n\njulia> isvalid( JSON.parse(\"{ \"foo\": true }\"), myschema)\ntrue\njulia> isvalid( JSON.parse(\"{ \"bar\": 12.5 }\"), myschema)\nfalse\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JSONSchema.@doassertJSONSchema.@reportJSONSchema.AbstractIssueJSONSchema.JSONSchemaJSONSchema.OneOfIssueJSONSchema.SchemaJSONSchema.SingleIssueJSONSchema.array_assertsJSONSchema.diagnoseJSONSchema.evalJSONSchema.findelementJSONSchema.findrefJSONSchema.flattenJSONSchema.getremoteschemaJSONSchema.includeJSONSchema.isvalidJSONSchema.mkidmap!JSONSchema.number_assertsJSONSchema.object_assertsJSONSchema.resolverefs!JSONSchema.rmfragmentJSONSchema.singleissuerecapJSONSchema.string_assertsJSONSchema.todictJSONSchema.type_assertsJSONSchema.unescapeJPathJSONSchema.updateidJSONSchema.validate"
},

]}
