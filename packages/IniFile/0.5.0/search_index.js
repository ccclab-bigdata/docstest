var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IniFile.jl-1",
    "page": "Readme",
    "title": "IniFile.jl",
    "category": "section",
    "text": "(Image: IniFile) (Image: IniFile) (Image: IniFile) (Image: Build Status)Reading and writing Windows-style INI files from Julia"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Pkg.add(\"IniFile\") # first-time only\nusing Inifile # load code into current session"
},

{
    "location": "#Create-IniFile-1",
    "page": "Readme",
    "title": "Create IniFile",
    "category": "section",
    "text": "ini = IniFile()"
},

{
    "location": "#Get-defaults-and-sections-of-an-IniFile-1",
    "page": "Readme",
    "title": "Get defaults & sections of an IniFile",
    "category": "section",
    "text": "sections(ini)\ndefaults(ini)"
},

{
    "location": "#Get-specific-key-from-section,-return-default-if-not-found-1",
    "page": "Readme",
    "title": "Get specific key from section, return default if not found",
    "category": "section",
    "text": "get(ini, \"section\", \"key\", default)"
},

{
    "location": "#Set-key-for-section-1",
    "page": "Readme",
    "title": "Set key for section",
    "category": "section",
    "text": "set(ini, \"section\", \"key\", value)"
},

{
    "location": "#Parse-a-*.ini-file-1",
    "page": "Readme",
    "title": "Parse a *.ini file",
    "category": "section",
    "text": "ini = read(IniFile(), \"file.ini\")"
},

{
    "location": "#Write-out-a-*.ini-file-1",
    "page": "Readme",
    "title": "Write out a *.ini file",
    "category": "section",
    "text": "open(\"file.ini\", \"w+\") do io\n    write(io, ini)\nend"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IniFile.HTSSIniFile.INIVALIniFile.IniFileIniFile.InifileIniFile.defaultsIniFile.evalIniFile.get_boolIniFile.get_floatIniFile.get_intIniFile.has_sectionIniFile.includeIniFile.sectionIniFile.sectionsIniFile.set"
},

]}
