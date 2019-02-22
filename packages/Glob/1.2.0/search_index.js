var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Glob-1",
    "page": "Readme",
    "title": "Glob",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This implementation of Glob is based on the IEEE Std 1003.1, 2004 Edition (Open Group Base Specifications Issue 6) for fnmatch and glob. The specification of which can be found online: fnmatch and glob.Note, because this is based on the POSIX specification, the path separator in a glob pattern is always / and the escape character is always \\. However, the returned path string will always contain the system path separator character Base.path_separator. Therefore, it may be true that a path returned by glob will fail to match a Glob.FilenameMatch constructed from the same pattern."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Glob is implemented to have both a functional form and an object-oriented form. There is no \"correct\" choice; you are encouraged to pick whichever is better suited to your application.glob(pattern, [directory::AbstractString]) ::\nReturns a list of all files matching pattern in directory.\nIf directory is not specified, it defaults to the current working directory.\nPattern can be any of:\nA Glob.GlobMatch object:\n glob\"a/?/c\"\nA string, which will be converted into a GlobMatch expression:\n \"a/?/c\" # equivalent to 1, above\nA vector of strings and/or objects which implement occursin, including Regex and Glob.FilenameMatch objects\n [\"a\", r\".\", fn\"c\"] # again, equivalent to 1, above\nEach element of the vector will be used to match another level in the file hierarchy\nno conversion of strings to Glob.FilenameMatch objects or directory splitting on / will occur.\nA trailing / (or equivalently, a trailing empty string in the vector) will cause glob to only match directories\nAttempting to creat a GlobMatch object from a string with a leading / or the empty string is an error\nreaddir(pattern::GlobMatch, [directory::AbstractString]) ::\nalias for glob()\nglob\"pattern\" ::\nReturns a Glob.GlobMatch object, which can be used with glob() or readdir(). See above descriptions.\nfn\"pattern\"ipedx ::\nReturns a Glob.FilenameMatch object, which can be used with ismatch() or occursin(). Available flags are:\ni = CASELESS : Performs case-insensitive matching\np = PERIOD : A leading period (.) character must be exactly matched by a period (.) character (not a ?, *, or []). A leading period is a period at the beginning of a string, or a period after a slash if PATHNAME is true.\ne = NOESCAPE : Do not treat backslash (\\) as a special character (in extended mode, this only outside of [])\nd = PATHNAME : A slash (/) character must be exactly matched by a slash (/) character (not a ?, *, or [])\nx = EXTENDED : Additional features borrowed from newer shells, such as bash and tcsh\nBackslash (\\) characters in [] groups escape the next character"
},

{
    "location": "#Unimplemented-features-1",
    "page": "Readme",
    "title": "Unimplemented features",
    "category": "section",
    "text": "[. collating symbols only accept single characters (the Unicode locale has no collating symbols defined)\n[= equivalence classes only match the exact character specified (the Unicode locale has no equivalence classes defined)\nAdvanced extended features (beyond the POSIX spec) such as {} groups, have not yet been implemented"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Glob.@fn_mstrGlob.@fn_strGlob.@glob_mstrGlob.@glob_strGlob.CASELESSGlob.EXTENDEDGlob.FilenameMatchGlob.GlobGlob.GlobMatchGlob.NOESCAPEGlob.PATHNAMEGlob.PERIODGlob._glob!Glob._matchGlob._match_bracketGlob.evalGlob.filterGlob.filter!Glob.globGlob.includeGlob.ismatch"
},

]}
