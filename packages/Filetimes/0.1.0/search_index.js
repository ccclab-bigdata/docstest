var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Filetimes-1",
    "page": "Readme",
    "title": "Filetimes",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)A trivial implementation of FILETIME style timestamps [1].FILETIME was apparently introduced in the Windows NT operating system and is now used in a variety of file formats and equipment, including Simrad Echosounders.A FILETIME is an \"integer value stating the number of 100 nanosecond intervals since January 1, 1601\".julia> d = DateTime(1969, 10, 8)\n1969-10-08T00:00:00\n\njulia> filetime(d)\n116371296000000000\n\njulia> datetime(ans)\n1969-10-08T00:00:00\n\njulia> filetime()\n131546381807780000\n\njulia> datetime(ans)\n2017-11-08T18:09:40.778"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] FILETIME structure. MSDN documentation, http://bit.ly/2nYBBL2"
},

{
    "location": "autodocs/#Filetimes.datetime",
    "page": "Docstrings",
    "title": "Filetimes.datetime",
    "category": "function",
    "text": "datetime(f::Integer)\n\nReturns a DateTime object given a filetime f, being the number of 100 nanosecond intervals since January 1, 1601.\n\nN.B. Possible loss of precision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Filetimes.filetime",
    "page": "Docstrings",
    "title": "Filetimes.filetime",
    "category": "function",
    "text": "filetime()\n\nReturns the current time as the number of 100 nanosecond intervals since January 1, 1601.\n\n\n\n\n\nfiletime(d::Dates.DateTime)\n\nReturns the number of 100 nanosecond intervals since January 1, 1601 for the given DateTime.\n\n\n\n\n\nfiletime(s::AbstractString)\n\nReturns the number of 100 nanosecond intervals since January 1, 1601, for the given ISO8601 string.\n\nfiletime(\"2014-09-02T08:20:07\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Filetimes.EPOCHFiletimes.FiletimesFiletimes.datetimeFiletimes.evalFiletimes.filetimeFiletimes.include"
},

]}
