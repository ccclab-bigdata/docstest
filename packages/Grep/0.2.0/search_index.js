var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Grep-for-Julia-iterables/containers-1",
    "page": "Readme",
    "title": "Grep for Julia iterables/containers",
    "category": "section",
    "text": ""
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "grep(pattern)\ngrep(function)\ngrep(val)\ngrep(val, iterable)Return a function that greps out matches of an interable.Examples:julia> grep(\"1\", 1:11)\n3-element Array{Int64,1}:\n  1\n 10\n 11\n\njulia> grep(1, 1:11)\n1-element Array{Int64,1}:\n 1\n\njulia> 1:10 |> grep(isodd)\n5-element Array{Int64,1}:\n 1\n 3\n 5\n 7\n 9\n\njulia> ENV |> grep(\"LANG\")\nDict{String,String} with 3 entries:\n  \"LANG\"     => \"en_CA.UTF-8\"\n  \"LANGUAGE\" => \"en_CA\"\n  \"GDM_LANG\" => \"en_CA\"\n\n\njulia> ENV |> grep(r\"en_ca\"i)\nDict{String,String} with 3 entries:\n  \"LANG\"     => \"en_CA.UTF-8\"\n  \"LANGUAGE\" => \"en_CA\"\n  \"GDM_LANG\" => \"en_CA\"\n\n"
},

{
    "location": "autodocs/#Grep.grep",
    "page": "Docstrings",
    "title": "Grep.grep",
    "category": "function",
    "text": "grep(pattern)\ngrep(function)\ngrep(val)\ngrep(val, iterable)\n\nReturn a function that greps out matches of an interable.\n\nExamples:\n\njulia> grep(\"1\", 1:11)\n3-element Array{Int64,1}:\n  1\n 10\n 11\n\njulia> grep(1, 1:11)\n1-element Array{Int64,1}:\n 1\n\njulia> 1:10 |> grep(isodd)\n5-element Array{Int64,1}:\n 1\n 3\n 5\n 7\n 9\n\njulia> ENV |> grep(\"LANG\")\nDict{String,String} with 3 entries:\n  \"LANG\"     => \"en_CA.UTF-8\"\n  \"LANGUAGE\" => \"en_CA\"\n  \"GDM_LANG\" => \"en_CA\"\n\n\njulia> ENV |> grep(r\"en_ca\"i)\nDict{String,String} with 3 entries:\n  \"LANG\"     => \"en_CA.UTF-8\"\n  \"LANGUAGE\" => \"en_CA\"\n  \"GDM_LANG\" => \"en_CA\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Grep.GrepGrep.evalGrep.grepGrep.include"
},

]}
