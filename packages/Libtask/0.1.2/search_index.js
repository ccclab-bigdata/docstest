var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Libtask-1",
    "page": "Readme",
    "title": "Libtask",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)C shim for task copying in Turingusing Libtask\n\n# Stack allocated objects are deep copied.\nfunction f_ct()\n  t = 0;\n  while true\n    produce(t)\n    t = 1 + t\n  end\nend\n\nt = Task(f_ct)\n\nconsume(t) == 0\nconsume(t) == 1\na = copy(t);\nconsume(a) == 2\nconsume(a) == 3\nconsume(t) == 2\nconsume(t) == 3\n\n# Heap allocated objects are shallow copied.\n\nfunction f_ct2()\n  t = [0 1 2];\n  while true\n    produce(t[1])\n    t[1] = 1 + t[1]\n  end\nend\n\nt = Task(f_ct2)\n\nconsume(t) == 0\nconsume(t) == 1\na = copy(t);\nconsume(a) == 2\nconsume(a) == 3\nconsume(t) == 4\nconsume(t) == 5\n\n# `TArray` implements a copy-on-write array. This is useful for task copying. \n#  In constrast to standard arrays, which are only shallow copied during task copying, \n#  `TArray` are deep copied after task copying. \n\nfunction f_cta()\n  t = TArray(Int, 1);\n  t[1] = 0;\n  while true\n    produce(t[1])\n    t[1] = 1 + t[1]\n  end\nend\n\nt = Task(f_cta)\n\nconsume(t) == 0\nconsume(t) == 1\na = copy(t);\nconsume(a) == 2\nconsume(a) == 3\nconsume(t) == 2\nconsume(t) == 3Note: The Turing probabilistic programming language uses this task copying feature in an efficient implementation of the particle filtering sampling algorithm for arbitary order Markov processes. Disclaimer: This feature is still experimental and should only be used with caution. Some discussions on its potential caveats can be found here."
},

{
    "location": "autodocs/#Libtask.TArray",
    "page": "Docstrings",
    "title": "Libtask.TArray",
    "category": "type",
    "text": "TArray{T}(dims, ...)\n\nImplementation of data structures that automatically perform copy-on-write after task copying.\n\nIf currenttask is an existing key in s, then return `s[currenttask]. Otherwise, returns[currenttask] = s[lasttask]`.\n\nUsage:\n\nTArray(dim)\n\nExample:\n\nta = TArray(4)              # init\nfor i in 1:4 ta[i] = i end  # assign\nArray(ta)                   # convert to 4-element Array{Int64,1}: [1, 2, 3, 4]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libtask.tzeros",
    "page": "Docstrings",
    "title": "Libtask.tzeros",
    "category": "function",
    "text": " tzeros(dims, ...)\n\nConstruct a distributed array of zeros. Trailing arguments are the same as those accepted by TArray.\n\ntzeros(dim)\n\nExample:\n\ntz = tzeros(4)              # construct\nArray(tz)                   # convert to 4-element Array{Int64,1}: [0, 0, 0, 0]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Libtask.LibtaskLibtask.TArrayLibtask.check_depsLibtask.consumeLibtask.evalLibtask.getLibtask.includeLibtask.libtaskLibtask.n_copiesLibtask.produceLibtask.tzeros"
},

]}
