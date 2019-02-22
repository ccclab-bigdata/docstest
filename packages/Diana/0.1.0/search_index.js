var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<p align=\"center\"><img src=\"diana-banner.png\" width=\"25%\" ></p> <p align=\"center\"> <strong>This repository is a GraphQL server implementation.</strong> <br><br> <a href=\"https://travis-ci.org/codeneomatrix/Diana.jl\"><img src=\"https://travis-ci.org/codeneomatrix/Diana.jl.svg?branch=master\"></a> <a href=\"https://codecov.io/gh/codeneomatrix/Diana.jl\">   <img src=\"https://codecov.io/gh/codeneomatrix/Diana.jl/branch/master/graph/badge.svg\" /> </a> &nbsp;&nbsp;&nbsp; <a href=\"https://pkg.julialang.org/detail/Diana\"><img src=\"http://pkg.julialang.org/badges/Diana_0.6.svg\"></a>  &nbsp;&nbsp;&nbsp; <a href=\"https://raw.githubusercontent.com/codeneomatrix/Diana.jl/master/LICENSE.md\"><img src=\"https://img.shields.io/badge/license-MIT-blue.svg\"></a></p>"
},

{
    "location": "#About-1",
    "page": "Readme",
    "title": "About",
    "category": "section",
    "text": "This repository is an implementation of a GraphQL server, a query language for API created by Facebook. See more complete documentation at http://graphql.org/Looking for help? Find resources from the community."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "An overview of GraphQL in general is available in the README for the Specification for GraphQL.This package is intended to help you building GraphQL schemas/types fast and easily.Easy to use: Diana.jl helps you use GraphQL in Julia without effort.\nData agnostic: Diana.jl supports any type of data source: SQL, NoSQL, etc. The intent is to provide a complete API and make your data available through GraphQL.\nMake querys: Diana.jl allows queries to graphql schemas"
},

{
    "location": "#Roadmap-1",
    "page": "Readme",
    "title": "Roadmap",
    "category": "section",
    "text": ""
},

{
    "location": "#Version-0.0.2-1",
    "page": "Readme",
    "title": "Version 0.0.2",
    "category": "section",
    "text": "graphql client"
},

{
    "location": "#Version-0.1.0-1",
    "page": "Readme",
    "title": "Version 0.1.0",
    "category": "section",
    "text": "Update to julia 1.0\nCreation of schemas / types\nValidator\nSchemas / Types\nExecute"
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "[x] Client\n[x] Lexer\n[x] Parser\n[x] Query validation\n[x] Schemas / Types\n[ ] Schemas validation\n[x] Query execution\n[x] Arguments\n[ ] Scalar types\n[ ] Multiple forms of resolution\n[ ] Complex types (List, Object, etc)\n[ ] Fragments in queries\n[ ] Extract variable values\n[ ] Introspection\n[ ] Directives\n[ ] Depth of the query\n[ ] Middleware"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": ""
},

{
    "location": "#Your-pull-requests-are-more-than-welcome!!!-1",
    "page": "Readme",
    "title": "Your pull requests are more than welcome!!!",
    "category": "section",
    "text": ""
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "Pkg> add Diana\n#Release\npkg> add Diana#master\n#Development"
},

{
    "location": "#Client-1",
    "page": "Readme",
    "title": "Client",
    "category": "section",
    "text": ""
},

{
    "location": "#Simple-query-1",
    "page": "Readme",
    "title": "Simple query",
    "category": "section",
    "text": "using Diana\n\nquery = \"\"\"\n{\n  neomatrix{\n    nombre\n    linkedin\n  }\n}\n\"\"\"\n\nr = Queryclient(\"https://neomatrix.herokuapp.com/graphql\",query,headers=Dict(\"header\"=>\"value\"))\nif (r.Info.status == 200) println(r.Data) endresult:{\n  \"data\":{\n    \"neomatrix\":{\n        \"nombre\":\"Acevedo Maldonado Josue\",\n        \"linkedin\":\"https://www.linkedin.com/in/acevedo-maldonado-josue/\"\n    }\n  }\n}query = \"\"\"\n       query consulta{\n          neomatrix{\n            nombre\n            linkedin\n          }\n        }\n\n       query hola{\n          neomatrix{\n            nombre\n          }\n       }\n       \"\"\"\n  r = Queryclient(\"https://neomatrix.herokuapp.com/graphql\",query,operationName=\"hola\")\n  if (r.Info.status == 200) println(r.Data) endresult:{\"data\":{\"neomatrix\":{\"nombre\":\"Acevedo Maldonado Josue\"}}}using Diana\n\nquery = \"\"\"\nquery(\\$number_of_repos:Int!) {\n  viewer {\n    name\n     repositories(last: \\$number_of_repos) {\n       nodes {\n         name\n       }\n     }\n   }\n}\n\"\"\"\n\nr = Queryclient(\"https://api.github.com/graphql\",query,vars= Dict(\"number_of_repos\" => 3),auth=\"Bearer 7fe6d7e40cc191101b4708b078a5fcea35ee7280\")\nif (r.Info.status == 200) println(r.Data) end\n"
},

{
    "location": "#Query-1",
    "page": "Readme",
    "title": "Query",
    "category": "section",
    "text": "using Diana\n\nclient = GraphQLClient(\"https://api.graph.cool/simple/v1/movies\")\nclient.serverAuth(\"Bearer my-jwt-token\")\nclient.headers(Dict(\"header\"=>\"value\"))\n\nor\n\nclient = GraphQLClient(\"https://api.graph.cool/simple/v1/movies\",auth=\"Bearer my-jwt-token\",headers=Dict(\"header\"=>\"value\"))query = \"\"\"\n{\n  Movie(title: \"Inception\"){\n    actors{\n      name\n    }\n  }\n}\n\"\"\"\n\nr = client.Query(query)\nif (r.Info.status == 200) println(r.Data) endresult:{\n  \"data\":{\n    \"Movie\":{\n      \"actors\":[\n        {\n          \"name\":\"Leonardo DiCaprio\"\n        },\n        {\n          \"name\":\"Ellen Page\"\n        },\n        {\n          \"name\":\"Tom Hardy\"\n        },\n        {\n          \"name\":\"Joseph Gordon-Levitt\"\n        },\n        {\n          \"name\":\"Marion Cotillard\"\n        }\n      ]\n    }\n  }\n}query = \"\"\"\nquery getMovie(\\$title: String!) {\n  Movie(title:\\$title) {\n    releaseDate\n    actors {\n      name\n    }\n  }\n}\n\"\"\"\nr = client.Query(query,vars= Dict(\"title\" => \"Inception\"))\n\nif (r.Info.status == 200)\n  println(r.Data)\nelse\n  println(r.Data)\nendquery = \"\"\"\nquery consulta{\n  Movie(title: \"Inception\"){\n    actors{\n      name\n    }\n  }\n}\nquery hola{\n  Movie(title: \"Inception\"){\n    actors{\n      name\n    }\n  }\n}\n\"\"\"\nr = client.Query(query,operationName=\"consulta\")\nif (r.Info.status == 200) println(r.Data) endresult:{\"data\":{\"Movie\":{\"actors\":[{\"name\":\"Leonardo DiCaprio\"},{\"name\":\"Ellen Page\"},{\"name\":\"Tom Hardy\"},{\"name\":\"Joseph Gordon-Levitt\"},{\"name\":\"Marion Cotillard\"}]}}}"
},

{
    "location": "#Change-serverUrl-1",
    "page": "Readme",
    "title": "Change serverUrl",
    "category": "section",
    "text": "client.serverUrl(\"https://api.graph.cool/simple/v1/movies\")"
},

{
    "location": "#Change-headers-1",
    "page": "Readme",
    "title": "Change headers",
    "category": "section",
    "text": "client.headers(Dict(\"header\"=>\"value\"))"
},

{
    "location": "#Change-serverAuth-1",
    "page": "Readme",
    "title": "Change serverAuth",
    "category": "section",
    "text": "client.serverAuth(\"Bearer my-jwt-token\")"
},

{
    "location": "#Query-get-1",
    "page": "Readme",
    "title": "Query get",
    "category": "section",
    "text": "query=\"https://neomatrix.herokuapp.com/graphql?query=%7B%0A%20%20neomatrix%7B%0A%20%20%20%20nombre%0A%20%20%20%20linkedin%0A%20%20%7D%0A%7D\"\nr = Queryclient(query)\nif (r.Info.status == 200) println(r.Data) end"
},

{
    "location": "#Link-1",
    "page": "Readme",
    "title": "Link",
    "category": "section",
    "text": "It is possible to get links to the graphql query editorquery = \"\"\"\n{\n  neomatrix{\n    nombre\n    linkedin\n  }\n}\n\"\"\"\nr = Queryclient(\"https://neomatrix.herokuapp.com/graphql\",query,getlink=true)result:\"https://neomatrix.herokuapp.com/graphql?query=%7B%0A%20%20neomatrix%7B%0A%20%20%20%20nombre%0A%20%20%20%20linkedin%0A%20%20%7D%0A%7D%0A\"orr = client.Query(query,getlink=true)result:\"https://api.graph.cool/simple/v1/movies?query=%7B%0A%20%20Movie%28title%3A%20%22Inception%22%29%7B%0A%20%20%20%20actors%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A\"query = \"\"\"\nquery consulta{\n  neomatrix{\n    nombre\n  }\n}\nquery hola{\n  neomatrix{\n    nombre\n    linkedin\n  }\n}\n\"\"\"\nr = Queryclient(\"https://neomatrix.herokuapp.com/graphql\",query,getlink=true,operationName=\"consulta\")result:\"https://neomatrix.herokuapp.com/graphql?query=query%20consulta%7B%0A%20%20neomatrix%7B%0A%20%20%20%20%20%20nombre%0A%20%20%20%7D%0A%7D%0Aquery%20hola%7B%0A%20%20neomatrix%7B%0A%20%20%20%20%20%20nombre%0A%20%20%20%20%20%20linkedin%0A%20%20%20%20%7D%0A%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&operationName=consulta\""
},

{
    "location": "#Validating-query-1",
    "page": "Readme",
    "title": "Validating query",
    "category": "section",
    "text": "It is possible to validate the query locally before sending the request, only basic validations are carried out.query = \"\"\"\n{\n  neomatrix{\n    nombre\n    linkedin\n  }\n}\n\"\"\"\nr = Queryclient(query,check=true)result:\"ok\" query = \"\"\"\n       {\n         }neomatrix{\n             nombre\n                 linkedin\n                   }\n                   }\n               \"\"\"\n  r = Queryclient(query,true)result:ERROR: {\"errors\":[{\"locations\": [{\"column\": 3,\"line\": 2}],\"message\": \"Syntax Error GraphQL request (3:2) Expected NAME, found } \"}]}r = client.Query(query,check=true)"
},

{
    "location": "#Note-1",
    "page": "Readme",
    "title": "Note",
    "category": "section",
    "text": "The lexer is built based on the Tokenize package code and the Parser on the graphql-js package"
},

{
    "location": "#Thanks-people-1",
    "page": "Readme",
    "title": "Thanks people",
    "category": "section",
    "text": ""
},

{
    "location": "#Lexer-1",
    "page": "Readme",
    "title": "Lexer",
    "category": "section",
    "text": "using Diana\n\nTokensgraphql(\"\"\"\n#\nquery {\n  Region(name:\"The North\") {\n      NobleHouse(name:\"Stark\"){\n        castle{\n          name\n        }\n        members{\n          name\n          alias\n      }\n    }\n  }\n}\n\"\"\")result:29-element Array{Diana.Tokens.Token,1}:\n NAME           query               2,1 - 2,5\n LBRACE         {                   2,7 - 2,7\n NAME           Region              3,3 - 3,8\n LPAREN         (                   3,9 - 3,9\n NAME           name                3,10 - 3,13\n COLON          :                   3,14 - 3,14\n STRING         \\\"The North\\\"       3,15 - 3,25\n RPAREN         )                   3,26 - 3,26\n LBRACE         {                   3,28 - 3,28\n NAME           NobleHouse          4,7 - 4,16\n LPAREN         (                   4,17 - 4,17\n NAME           name                4,18 - 4,21\n COLON          :                   4,22 - 4,22\n STRING         \\\"Stark\\\"           4,23 - 4,29\n RPAREN         )                   4,30 - 4,30\n LBRACE         {                   4,31 - 4,31\n NAME           castle              5,9 - 5,14\n LBRACE         {                   5,15 - 5,15\n NAME           name                6,11 - 6,14\n RBRACE         }                   7,9 - 7,9\n NAME           members             8,9 - 8,15\n LBRACE         {                   8,16 - 8,16\n NAME           name                9,11 - 9,14\n NAME           alias               10,11 - 10,15\n RBRACE         }                   11,7 - 11,7\n RBRACE         }                   12,5 - 12,5\n RBRACE         }                   13,3 - 13,3\n RBRACE         }                   14,1 - 14,1\n ENDMARKER                          15,1 - 15,0"
},

{
    "location": "#Parser-1",
    "page": "Readme",
    "title": "Parser",
    "category": "section",
    "text": "using Diana\n\nParse(\"\"\"\n#\nquery {\n  Region(name:\"The North\") {\n      NobleHouse(name:\"Stark\"){\n        castle{\n          name\n        }\n        members{\n          name\n          alias\n      }\n    }\n  }\n}\n\"\"\")result: < Node :: Document ,definitions : Any[\n < Node :: OperationDefinition ,operation : query ,selectionSet :\n < Node :: SelectionSet ,selections : Main.Diana.Field[\n < Node :: Field ,name :\n < Node :: Name ,value : Region >  ,arguments : Main.Diana.Argument[\n < Node :: Argument ,name :\n < Node :: Name ,value : name >  ,value : (\":\",\n < Node :: StringValue ,value : \"The North\" > ) > ] ,selectionSet :\n < Node :: SelectionSet ,selections : Main.Diana.Field[\n < Node :: Field ,name :\n < Node :: Name ,value : NobleHouse >  ,arguments : Main.Diana.Argument[\n < Node :: Argument ,name :\n < Node :: Name ,value : name >  ,value : (\":\",\n < Node :: StringValue ,value : \"Stark\" > ) > ] ,selectionSet :\n < Node :: SelectionSet ,selections : Main.Diana.Field[\n < Node :: Field ,name :\n < Node :: Name ,value : castle >  ,selectionSet :\n < Node :: SelectionSet ,selections : Main.Diana.Field[\n < Node :: Field ,name :\n < Node :: Name ,value : name >  > ] >  > ,\n < Node :: Field ,name :\n < Node :: Name ,value : members >  ,selectionSet :\n < Node :: SelectionSet ,selections : Main.Diana.Field[\n < Node :: Field ,name :\n < Node :: Name ,value : name >  > ,\n < Node :: Field ,name :\n < Node :: Name ,value : alias >  > ] >  > ] >  > ] >  > ] >  > ] >"
},

{
    "location": "#Execute-1",
    "page": "Readme",
    "title": "Execute",
    "category": "section",
    "text": "using Diana\n\nschema= \"\"\"\ntype Persona {\n  nombre: String\n  edad: Int\n}\n\ntype Query{\n  persona: Persona\n  neomatrix: Persona\n}\n\nschema {\n  query: Query\n}\n\n\"\"\"\n\nresolvers=Dict(\n        \"Query_neomatrix\" => (obj,args,ctx,info)->(return Dict(\"nombre\"=>\"josue\",\"edad\"=>5) )\n        ,\"Query_persona\" => (obj,args,ctx,info)->begin\n        return Dict(\"nombre\"=>\"Diana\",\"edad\"=>15)\n        end\n        ,\"Persona_nombre\" => (obj,args,ctx,info)->(return ctx[\"nombre\"])\n        ,\"Persona_edad\" => (obj,args,ctx,info)->(return ctx[\"edad\"])\n        )\n\nmy_schema = Schema(schema, resolvers)\n\nquery= \"\"\"\nquery{\n  neomatrix{\n  nombre\n  }\n}\n\"\"\"\ndata = my_schema.execute(query)\nresult:{\"datos\":{\n  \"neomatrix\":{\n    \"nombre\":\"josue\"\n    }\n  }\n}\"\nquery= \"\"\"\n  query{\n    persona{\n      nombre\n      }\n  }\n\"\"\"\n\ndata = my_schema.execute(query)\nresult:{\"datos\":{\n  \"persona\":{\n    \"nombre\":\"Diana\"\n    }\n  }\n}"
},

{
    "location": "autodocs/#Diana.Parse",
    "page": "Docstrings",
    "title": "Diana.Parse",
    "category": "function",
    "text": "Given a GraphQL source, parses it into a Document. Throws GraphQLError if a syntax error is encountered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.Lexers.Tokenize",
    "page": "Docstrings",
    "title": "Diana.Lexers.Tokenize",
    "category": "function",
    "text": "Tokenize(x)\n\nReturns an Iterable containing the tokenized input. Can be reverted by e.g. join(untokenize.(Tokenize(x))).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.an_y",
    "page": "Docstrings",
    "title": "Diana.an_y",
    "category": "function",
    "text": "Returns a possibly empty list of parse nodes, determined by   the parseFn. This list begins with a lex token of openKind   and ends with a lex token of closeKind. Advances the parser   to the next lex token after the closing token.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.expect",
    "page": "Docstrings",
    "title": "Diana.expect",
    "category": "function",
    "text": "If the next token is of the given kind, return that token after advancing   the lexer. Otherwise, do not change the parser state and throw an error.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.expectKeyword",
    "page": "Docstrings",
    "title": "Diana.expectKeyword",
    "category": "function",
    "text": "If the next token is a keyword with the given value, return that token after   advancing the lexer. Otherwise, do not change the parser state and return   false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.many",
    "page": "Docstrings",
    "title": "Diana.many",
    "category": "function",
    "text": "Returns a non-empty list of parse nodes, determined by   the parseFn. This list begins with a lex token of openKind   and ends with a lex token of closeKind. Advances the parser   to the next lex token after the closing token.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.next_token",
    "page": "Docstrings",
    "title": "Diana.next_token",
    "category": "function",
    "text": "If the next token is of the given kind, return true after advancing   the lexer. Otherwise, do not change the parser state and return false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseArgument",
    "page": "Docstrings",
    "title": "Diana.parseArgument",
    "category": "function",
    "text": "Argument : Name : Value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseArgumentDefs",
    "page": "Docstrings",
    "title": "Diana.parseArgumentDefs",
    "category": "function",
    "text": "ArgumentsDefinition : ( InputValueDefinition+ )\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseArguments",
    "page": "Docstrings",
    "title": "Diana.parseArguments",
    "category": "function",
    "text": "Arguments : ( Argument+ )\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseDefinition",
    "page": "Docstrings",
    "title": "Diana.parseDefinition",
    "category": "function",
    "text": "Definition :     - OperationDefinition     - FragmentDefinition     - TypeSystemDefinition\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseDirective",
    "page": "Docstrings",
    "title": "Diana.parseDirective",
    "category": "function",
    "text": "Directive : @ Name Arguments?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseDirectiveDefinition",
    "page": "Docstrings",
    "title": "Diana.parseDirectiveDefinition",
    "category": "function",
    "text": "DirectiveDefinition :     - directive @ Name ArgumentsDefinition? on DirectiveLocations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseDirectiveLocations",
    "page": "Docstrings",
    "title": "Diana.parseDirectiveLocations",
    "category": "function",
    "text": "DirectiveLocations :     - |? Name     - DirectiveLocations | Name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseDirectives",
    "page": "Docstrings",
    "title": "Diana.parseDirectives",
    "category": "function",
    "text": "Implements the parsing rules in the Directives section.\n\nDirectives : Directive+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseDocument",
    "page": "Docstrings",
    "title": "Diana.parseDocument",
    "category": "function",
    "text": "#if length(errors)>0\n#	println(\"Syntax Error GraphQL request (x:x) Unexpected character\")\n#	errors\n	# {\"errors\":[{\"locations\":[{\"column\":5,\"line\":3}],\"message\":\"Syntax Error GraphQL request (3:5) Unexpected character \"\".\n\n2:   neomatrix{\n\n	3:     nombre\n   ^\n\n4:     linkedin \"}]}   Document : Definition+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseEnumTypeDefinition",
    "page": "Docstrings",
    "title": "Diana.parseEnumTypeDefinition",
    "category": "function",
    "text": "EnumTypeDefinition : enum Name Directives? { EnumValueDefinition+ }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseEnumValueDefinition",
    "page": "Docstrings",
    "title": "Diana.parseEnumValueDefinition",
    "category": "function",
    "text": "EnumValueDefinition : EnumValue Directives?\n\nEnumValue : Name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseField",
    "page": "Docstrings",
    "title": "Diana.parseField",
    "category": "function",
    "text": "Field : Alias? Name Arguments? Directives? SelectionSet?\n\nAlias : Name : NAME\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseFieldDefinition",
    "page": "Docstrings",
    "title": "Diana.parseFieldDefinition",
    "category": "function",
    "text": "FieldDefinition : Name ArgumentsDefinition? : Type Directives?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseFragment",
    "page": "Docstrings",
    "title": "Diana.parseFragment",
    "category": "function",
    "text": "Implements the parsing rules in the Fragments section.\n\nCorresponds to both FragmentSpread and InlineFragment in the spec.\n\nFragmentSpread : ... FragmentName Directives?\n\nInlineFragment : ... TypeCondition? Directives? SelectionSet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseFragmentDefinition",
    "page": "Docstrings",
    "title": "Diana.parseFragmentDefinition",
    "category": "function",
    "text": "FragmentDefinition :     - fragment FragmentName on TypeCondition Directives? SelectionSet\n\nTypeCondition : NamedType\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseFragmentName",
    "page": "Docstrings",
    "title": "Diana.parseFragmentName",
    "category": "function",
    "text": "FragmentName : Name but not on\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseImplementsInterfaces",
    "page": "Docstrings",
    "title": "Diana.parseImplementsInterfaces",
    "category": "function",
    "text": "ImplementsInterfaces : implements NamedType+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseInputObjectTypeDefinition",
    "page": "Docstrings",
    "title": "Diana.parseInputObjectTypeDefinition",
    "category": "function",
    "text": "InputObjectTypeDefinition : input Name Directives? { InputValueDefinition+ }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseInputValueDef",
    "page": "Docstrings",
    "title": "Diana.parseInputValueDef",
    "category": "function",
    "text": "InputValueDefinition : Name : Type DefaultValue? Directives?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseInterfaceTypeDefinition",
    "page": "Docstrings",
    "title": "Diana.parseInterfaceTypeDefinition",
    "category": "function",
    "text": "InterfaceTypeDefinition : interface Name Directives? { FieldDefinition+ }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseList",
    "page": "Docstrings",
    "title": "Diana.parseList",
    "category": "function",
    "text": "ListValue[Const] :     - [ ]     - [ Value[?Const]+ ]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseName",
    "page": "Docstrings",
    "title": "Diana.parseName",
    "category": "function",
    "text": "Converts a name lex token into a name parse node.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseNamedType",
    "page": "Docstrings",
    "title": "Diana.parseNamedType",
    "category": "function",
    "text": "NamedType : Name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseObject",
    "page": "Docstrings",
    "title": "Diana.parseObject",
    "category": "function",
    "text": "ObjectValue[Const] :     - { }     - { ObjectField[?Const]+ }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseObjectField",
    "page": "Docstrings",
    "title": "Diana.parseObjectField",
    "category": "function",
    "text": "ObjectField[Const] : Name : Value[?Const]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseObjectTypeDefinition",
    "page": "Docstrings",
    "title": "Diana.parseObjectTypeDefinition",
    "category": "function",
    "text": "ObjectTypeDefinition :     - type Name ImplementsInterfaces? Directives? { FieldDefinition+ }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseOperationDefinition",
    "page": "Docstrings",
    "title": "Diana.parseOperationDefinition",
    "category": "function",
    "text": "Implements the parsing rules in the Operations section.\n\nOperationDefinition :\n\nSelectionSet\nOperationType Name? VariableDefinitions? Directives? SelectionSet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseOperationType",
    "page": "Docstrings",
    "title": "Diana.parseOperationType",
    "category": "function",
    "text": "Implements the parsing rules in the Document section.\n\nOperationType : one of query mutation subscription\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseScalarTypeDefinition",
    "page": "Docstrings",
    "title": "Diana.parseScalarTypeDefinition",
    "category": "function",
    "text": "ScalarTypeDefinition : scalar Name Directives?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseSchemaDefinition",
    "page": "Docstrings",
    "title": "Diana.parseSchemaDefinition",
    "category": "function",
    "text": "SchemaDefinition : schema Directives? { OperationTypeDefinition+ }\n\nOperationTypeDefinition : OperationType : NamedType\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseSelection",
    "page": "Docstrings",
    "title": "Diana.parseSelection",
    "category": "function",
    "text": "Selection :     - Field     - FragmentSpread     - InlineFragment\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseSelectionSet",
    "page": "Docstrings",
    "title": "Diana.parseSelectionSet",
    "category": "function",
    "text": "SelectionSet : { Selection+ }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseType",
    "page": "Docstrings",
    "title": "Diana.parseType",
    "category": "function",
    "text": "Given a string containing a GraphQL Type (ex. [Int!]), parse the AST for   that type.   Throws GraphQLError if a syntax error is encountered.\n\nThis is useful within tools that operate upon GraphQL Types directly and   in isolation of complete GraphQL documents.\n\nConsider providing the results to the utility function: typeFromAST().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseTypeExtensionDefinition",
    "page": "Docstrings",
    "title": "Diana.parseTypeExtensionDefinition",
    "category": "function",
    "text": "TypeExtensionDefinition : extend ObjectTypeDefinition\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseTypeReference",
    "page": "Docstrings",
    "title": "Diana.parseTypeReference",
    "category": "function",
    "text": "Implements the parsing rules in the Types section.\n\nType :     - NamedType     - ListType     - NonNullType\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseTypeSystemDefinition",
    "page": "Docstrings",
    "title": "Diana.parseTypeSystemDefinition",
    "category": "function",
    "text": "Implements the parsing rules in the Type Definition section.\n\nTypeSystemDefinition :     - SchemaDefinition     - TypeDefinition     - TypeExtensionDefinition     - DirectiveDefinition\n\nTypeDefinition :     - ScalarTypeDefinition     - ObjectTypeDefinition     - InterfaceTypeDefinition     - UnionTypeDefinition     - EnumTypeDefinition     - InputObjectTypeDefinition\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseUnionMembers",
    "page": "Docstrings",
    "title": "Diana.parseUnionMembers",
    "category": "function",
    "text": "UnionMembers :\n- `|`? NamedType\n- UnionMembers | NamedType\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseUnionTypeDefinition",
    "page": "Docstrings",
    "title": "Diana.parseUnionTypeDefinition",
    "category": "function",
    "text": "UnionTypeDefinition : union Name Directives? = UnionMembers\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseValue",
    "page": "Docstrings",
    "title": "Diana.parseValue",
    "category": "function",
    "text": "Given a string containing a GraphQL value (ex. [42]), parse the AST for   that value.   Throws GraphQLError if a syntax error is encountered.\n\nThis is useful within tools that operate upon GraphQL Values directly and   in isolation of complete GraphQL documents.\n\nConsider providing the results to the utility function: valueFromAST().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseValueLiteral",
    "page": "Docstrings",
    "title": "Diana.parseValueLiteral",
    "category": "function",
    "text": "Implements the parsing rules in the Values section.\n\nValue[Const] :     - [~Const] Variable     - IntValue     - FloatValue     - StringValue     - BooleanValue     - NullValue     - EnumValue     - ListValue[?Const]     - ObjectValue[?Const]\n\nBooleanValue : one of true false\n\nNullValue : null\n\nEnumValue : Name but not true, false or null\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseVariable",
    "page": "Docstrings",
    "title": "Diana.parseVariable",
    "category": "function",
    "text": "Variable : $ Name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseVariableDefinition",
    "page": "Docstrings",
    "title": "Diana.parseVariableDefinition",
    "category": "function",
    "text": "VariableDefinition : Variable : Type DefaultValue?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.parseVariableDefinitions",
    "page": "Docstrings",
    "title": "Diana.parseVariableDefinitions",
    "category": "function",
    "text": "VariableDefinitions : ( VariableDefinition+ )\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.peek",
    "page": "Docstrings",
    "title": "Diana.peek",
    "category": "function",
    "text": "Determines if the next token is of a given kind\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Diana.unexpected",
    "page": "Docstrings",
    "title": "Diana.unexpected",
    "category": "function",
    "text": "Helper function for creating an error when an unexpected lexed token   is encountered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Diana.ArgumentDiana.BooleanValueDiana.ClientDiana.DianaDiana.DirectiveDiana.DirectiveDefinitionDiana.DocumentDiana.EnumTypeDefinitionDiana.EnumValueDiana.EnumValueDefinitionDiana.ExecuteQueryDiana.FieldDiana.FieldDefinitionDiana.FloatValueDiana.FragmentCyclesDiana.FragmentDefinitionDiana.FragmentNamesDiana.FragmentSpreadDiana.FragmentSubscriptionDiana.FragmentUnknowNotUsedDiana.GraphQLClientDiana.GraphqlErrorDiana.InlineFragmentDiana.InputObjectTypeDefinitionDiana.InputValueDefinitionDiana.IntValueDiana.InterfaceTypeDefinitionDiana.LexerDiana.LexersDiana.ListTypeDiana.List_Diana.NameDiana.NamedTypeDiana.NodeDiana.NonNullTypeDiana.NotExtensionOnOperationDiana.NotSchemaOnOperationDiana.NotTypeOnOperationDiana.NullValueDiana.ObjectTypeDefinitionDiana.Object_Diana.Object_FieldDiana.OperationAnonymousDiana.OperationDefinitionDiana.OperationNamesDiana.OperationTypeDefinitionDiana.ParseDiana.QueryclientDiana.ResultDiana.ScalarTypeDefinitionDiana.SchemaDiana.SchemaDefinitionDiana.SelectionSetDiana.StringValueDiana.SubscriptionFieldsDiana.TokenizeDiana.TokensDiana.TokensgraphqlDiana.TypeExtensionDefinitionDiana.UnionTypeDefinitionDiana.ValidatequeryDiana.VariableDiana.VariableDefinitionDiana.an_yDiana.createLexerDiana.deepqueryDiana.evalDiana.executorDiana.expectDiana.expectKeywordDiana.getdeepDiana.getfield_typesDiana.gettypesDiana.includeDiana.manyDiana.next_tokenDiana.parseArgumentDiana.parseArgumentDefsDiana.parseArgumentsDiana.parseConstValueDiana.parseDefinitionDiana.parseDirectiveDiana.parseDirectiveDefinitionDiana.parseDirectiveLocationsDiana.parseDirectivesDiana.parseDocumentDiana.parseEnumTypeDefinitionDiana.parseEnumValueDefinitionDiana.parseFieldDiana.parseFieldDefinitionDiana.parseFragmentDiana.parseFragmentDefinitionDiana.parseFragmentNameDiana.parseImplementsInterfacesDiana.parseInputObjectTypeDefinitionDiana.parseInputValueDefDiana.parseInterfaceTypeDefinitionDiana.parseListDiana.parseNameDiana.parseNamedTypeDiana.parseObjectDiana.parseObjectFieldDiana.parseObjectTypeDefinitionDiana.parseOperationDefinitionDiana.parseOperationTypeDiana.parseOperationTypeDefinitionDiana.parseScalarTypeDefinitionDiana.parseSchemaDefinitionDiana.parseSelectionDiana.parseSelectionSetDiana.parseTypeDiana.parseTypeExtensionDefinitionDiana.parseTypeReferenceDiana.parseTypeSystemDefinitionDiana.parseUnionMembersDiana.parseUnionTypeDefinitionDiana.parseValueDiana.parseValueLiteralDiana.parseValueValueDiana.parseVariableDiana.parseVariableDefinitionDiana.parseVariableDefinitionsDiana.peekDiana.resolDiana.schemaDiana.unexpectedDiana.visitante"
},

]}
