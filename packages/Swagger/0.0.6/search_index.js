var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Swagger-1",
    "page": "Readme",
    "title": "Swagger",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)This is a Julia plugin and code generator to generate your own client library with Swagger.The goal of Swagger™ is to define a standard, language-agnostic interface to REST APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined via Swagger, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interfaces have done for lower-level programming, Swagger removes the guesswork in calling the service.Check out OpenAPI-Spec for additional information about the Swagger project, including additional libraries with support for other languages and more."
},

{
    "location": "#How-do-I-use-this?-1",
    "page": "Readme",
    "title": "How do I use this?",
    "category": "section",
    "text": ""
},

{
    "location": "#Building-1",
    "page": "Readme",
    "title": "Building",
    "category": "section",
    "text": "To build the project, run this:plugin/build.shA single jar file (julia-swagger-codegen-0.0.1.jar) will be produced in plugin/target.You can now use that for codegen."
},

{
    "location": "#Code-Generation:-1",
    "page": "Readme",
    "title": "Code Generation:",
    "category": "section",
    "text": "Use the supplied script plugin/generate.sh and point it to the specification file and a configuration file. E.g.:${SWAGGERDIR}/plugin/generate.sh -i ${SPECDIR}/${SPECFILE} -o ${GENDIR} -c config.jsonThe configuration file (config.json) can have the following options:packageName: the Julia package to generate (SwaggerClient by default)"
},

]}
