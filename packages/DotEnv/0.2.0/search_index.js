var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DotEnv.jl-1",
    "page": "Readme",
    "title": "DotEnv.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)DotEnv.jl is a zero-dependency package that loads environment variables from a .env file into ENV. Storing configuration in the environment is based on The Twelve-Factor App methodology."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "Pkg.add(\"DotEnv\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using DotEnv\nDotEnv.config()Create a .env file in your project. You can add environment-specific variables using the rule NAME=VALUE. For example:#.env file\nDB_HOST=127.0.0.1\nDB_USER=john\nDB_PASS=42In this way, ENV obtain both, the keys and the values you set in your .env file.ENV[\"DB_PASS\"]\n\"42\""
},

{
    "location": "#Config-1",
    "page": "Readme",
    "title": "Config",
    "category": "section",
    "text": "config reads your .env file, parse the content, stores it to  ENV, and finally return a Dict with the content.  import DotEnv\n\ncfg = DotEnv.config()\n\nprintln(cfg)"
},

{
    "location": "#Options-1",
    "page": "Readme",
    "title": "Options",
    "category": "section",
    "text": ""
},

{
    "location": "#Path-1",
    "page": "Readme",
    "title": "Path",
    "category": "section",
    "text": "Default: .envYou can specify a custom path for your .env file.using DotEnv\nDotEnv.config(path = \"custom.env\")"
},

{
    "location": "#Manual-Parsing-1",
    "page": "Readme",
    "title": "Manual Parsing",
    "category": "section",
    "text": "DotEnv.parse accepts a String or an IOBuffer (Any value that can be converted into String), and it will return a Dict with the parsed keys and values.import DotEnv\nbuff = IOBuffer(\"BASIC=basic\")\ncfg = DotEnv.parse(buff) # will return a Dict\nprintln(config) # Dict(\"BASIC\"=>\"basic\")"
},

{
    "location": "#Rules-1",
    "page": "Readme",
    "title": "Rules",
    "category": "section",
    "text": "You can write your .env file using the following rules:BASIC=basic becomes Dict(\"BASIC\"=>\"basic\")\nempty lines are skipped\n# are comments\nempty content is treated as an empty string (EMPTY= -> Dict(\"EMPTY\"=>\"\"))\nexternal single and double quotes are removed (SINGLE_QUOTE=\'quoted\' -> Dict(\"SINGLE_QUOTE\"=>\"quoted\"))\ninside double quotes, new lines are expanded (MULTILINE=\"new\\nline\" ->Dict(\"MULTILINE\"=>\"new\nline\")inner quotes are maintained (like JSON) (JSON={\"foo\": \"bar\"} -> Dict(\"JSON\"=>\"{\\\"foo\\\": \\\"bar\\\"}\")\")\nextra spaces are removed from both ends of the value (FOO=\"  some value  \" -> Dict(\"FOO\"=>\"some value\"))\nprevious ENV environment variables are not replaced. If you want to override ENV try:using DotEnv\n\ncfg = DotEnv.parse(read(\".env.override\"))\n\nfor (k, v) in cfg\n    ENV[k] = v\nend"
},

{
    "location": "#Note-about-credits-1",
    "page": "Readme",
    "title": "Note about credits",
    "category": "section",
    "text": "We want to thank @motdotla. Our code is mostly based on his repo"
},

{
    "location": "autodocs/#DotEnv.config",
    "page": "Docstrings",
    "title": "DotEnv.config",
    "category": "function",
    "text": "config reads your .env file, parse the content, stores it to ENV, and finally return a Dict with the content.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DotEnv.parse",
    "page": "Docstrings",
    "title": "DotEnv.parse",
    "category": "function",
    "text": "DotEnv.parse accepts a String or an IOBuffer (Any value that  can be converted into String), and it will return a Dict with  the parsed keys and values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DotEnv.DotEnvDotEnv.configDotEnv.evalDotEnv.includeDotEnv.loadDotEnv.parse"
},

]}
