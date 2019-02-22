var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Humanize.jl-1",
    "page": "Readme",
    "title": "Humanize.jl",
    "category": "section",
    "text": "(Image: Build Status)Humanize numbers, includingdata sizes (3e6 -> 3.0 MB or 2.9 MiB).\nDate/datetime differences (Date(2014,2,3) - Date(2013,3,7) -> 1 year, 1 month)\nDigit separator (12345678 -> 12,345,678)This package is MIT licensed, and is based on jmoiron\'s humanize Python library."
},

{
    "location": "#Data-sizes-1",
    "page": "Readme",
    "title": "Data sizes",
    "category": "section",
    "text": "datasize(value::Number; style=:dec, format=\"%.1f\")Style can be  :dec (base 10^3), :bin (base 2^10), :gnu (base 2^10, like ls -hs).import Humanize: datasize\ndatasize(3000000)  # \"3.0 MB\"\ndatasize(3000000, style=:bin, format=\"%.3f\")  # \"2.861 MiB\"\ndatasize(3000000, style=:gnu, format=\"%.3f\")  # \"2.861M\""
},

{
    "location": "#Date/datetime-differences-1",
    "page": "Readme",
    "title": "Date/datetime differences",
    "category": "section",
    "text": "timedelta(seconds::Integer)\ntimedelta(seconds::Dates.Second)\ntimedelta(Δdt::Dates.Millisecond)\ntimedelta(Δdate::Dates.Day)Turns a date/datetime difference into a abbreviated human-friendly form.import Humanize: timedelta\ntimedelta(70)  # \"a minute\"\nimport Dates: DateTime, Date\ntimedelta(DateTime(2014,2,3,12,11,10) - \n            DateTime(2013,3,7,13,1,20))  # \"11 months\"\ntimedelta(Date(2014,3,7) - Date(2013,2,4))  # \"1 year, 1 month\""
},

{
    "location": "#Digit-separator-1",
    "page": "Readme",
    "title": "Digit separator",
    "category": "section",
    "text": "digitsep(value::Integer; separator=\",\", per_separator=3)Convert an integer to a string, separating each per_separator digits by separator.import Humanize: digitsep\ndigitsep(12345678)  # \"12,345,678\"\ndigitsep(12345678, seperator= \"\'\")  # \"12\'345\'678\"\ndigitsep(12345678, seperator= \"-\", per_separator=4)  # \"1234-5678\""
},

{
    "location": "autodocs/#Humanize.datasize",
    "page": "Docstrings",
    "title": "Humanize.datasize",
    "category": "function",
    "text": "datasize(value::Number; style=:dec, format=\"%.1f\")\n\nFormat a number of bytes in a human-friendly format (eg. 10 kB).\n\nstyle=:dec - default, decimal suffixes (kB, MB), base 10^3\nstyle=:bin - binary suffixes (KiB, MiB), base 2^10\nstyle=:gnu - GNU-style (ls -sh style, K, M), base 2^10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Humanize.digitsep",
    "page": "Docstrings",
    "title": "Humanize.digitsep",
    "category": "function",
    "text": "digitsep(value::Integer; separator=\",\", per_separator=3)\n\nConvert an integer to a string, separating each per_separator digits by separator.\n\ndigitsep(12345678)  # \"12,345,678\"\ndigitsep(12345678, seperator= \"\'\")  # \"12\'345\'678\"\ndigitsep(12345678, seperator= \"-\", per_separator=4)  # \"1234-5678\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Humanize.timedelta",
    "page": "Docstrings",
    "title": "Humanize.timedelta",
    "category": "function",
    "text": "timedelta(seconds::Integer)\ntimedelta(seconds::Dates.Second)\ntimedelta(Δdt::Dates.Millisecond)\ntimedelta(Δdate::Dates.Day)\n\nTurns a date/datetime difference into a abbreviated human-friendly form.\n\ntimedelta(70)  # \"a minute\"\ntimedelta(DateTime(2014,2,3,12,11,10) - \n            DateTime(2013,3,7,13,1,20))  # \"11 months\"\ntimedelta(Date(2014,3,7) - Date(2013,2,4))  # \"1 year, 1 month\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Humanize.BASESHumanize.HumanizeHumanize.SUFFIXESHumanize.datasizeHumanize.digitsepHumanize.evalHumanize.includeHumanize.timedelta"
},

]}
