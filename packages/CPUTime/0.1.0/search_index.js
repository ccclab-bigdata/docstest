var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CPUTime.jl-1",
    "page": "Readme",
    "title": "CPUTime.jl",
    "category": "section",
    "text": "(Image: Build Status)A Julia package for measuring elapsed CPU time in Julia."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You should only use this package if you know what you\'re doing - CPU time on multi-core processors is a tricky beast. Please at least read the discussion in Issue #1 before proceeding. Once you\'ve done that, to install call:Pkg.add(\"CPUTime\")from the Julia command line."
},

{
    "location": "#Functions-and-Macros-1",
    "page": "Readme",
    "title": "Functions and Macros",
    "category": "section",
    "text": "The exported functions and macros, as well as their absolute time equivalents, are listed in the following table.Real time (Julia standard library) CPU time (CPUTime.jl)\ntime_ns() CPUtime_us()\ntic() CPUtic()\ntoq() CPUtoq()\ntoc() CPUtoc()\n@time @CPUtime\n@elapsed @CPUelapsedNote that the finest resolution for CPU time is microseconds, as opposed to nanoseconds for absolute time."
},

{
    "location": "#Usage-Example-1",
    "page": "Readme",
    "title": "Usage Example",
    "category": "section",
    "text": "using CPUTime\n\nfunction add_and_sleep()\n    x = 0\n    for i in 1:1e7\n        x += i\n    end\n    sleep(1)\nend\n\n@time @CPUtime add_and_sleep()elapsed CPU time: 0.578552 seconds\nelapsed time: 1.580263121 seconds (320166488 bytes allocated, 11.91% gc time)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CPUTime.@CPUelapsedCPUTime.@CPUtimeCPUTime.CPUTimeCPUTime.CPUticCPUTime.CPUtime_usCPUTime.CPUtocCPUTime.CPUtoqCPUTime.evalCPUTime.include"
},

]}
