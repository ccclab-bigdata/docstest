var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NBInclude-1",
    "page": "Readme",
    "title": "NBInclude",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)NBInclude is a package for the Julia language which allows you to include and execute IJulia (Julia-language Jupyter) notebook files just as you would include an ordinary Julia file.  That is, analogous to doing include(\"myfile.jl\") in Julia to execute myfile.jl, you can dousing NBInclude\n@nbinclude(\"myfile.ipynb\")to execute all of the code cells in the IJulia notebook myfile.ipynb. Similar to include, the value of the last evaluated expression in the last evaluated code cell is returned.The goal of this package is to make notebook files just as easy to incorporate into Julia programs as ordinary Julia (.jl) files, giving you the advantages of a notebook (integrated code, formatted text, equations, graphics, and other results) while retaining the modularity and re-usability of .jl files.Note: Scoping rules have changed between Julia 0.6 and Julia 1.0. Running a notebook as @nbinclude(foo.ipynb, softscope=true) will load notebooks as they work for interactive use in the IJulia kernel (\"soft\" global scoping, or 0.6-style). That flag\'s default value, false, will load notebooks with the \"hard\" scoping rule of Julia 1.0 (e.g. in include); see the SoftGlobalScope package for more details.Key features of NBInclude are:The path of the notebook is relative to the path of the current file (if any),and nested inclusions can use paths relative to the notebook, just as for include.In a module, included notebooks work fine with precompilation in Julia 0.4 (and re-compilation is automatically triggered if the notebook changes).\nCode is associated with accurate line numbers (e.g. for backtraces when exceptions are thrown), in the form of myfile.ipynb:In[N]:M for line M in input cell N of the myfile.ipynb notebook.  Un-numbered cells (e.g. unevaluated cells) are given a number+N for the N-th nonempty cell in the notebook.  You can use @nbinclude(\"myfile.ipynb\", renumber=true) to automatically renumber the cells in sequence (as if you had selected Run All from the Jupyter Cell menu), without altering the file.The Julia @__FILE__ macro returns /path/to/myfile.ipynb:In[N] for input cell N.\nIn IJulia, cells beginning with ; or ? are interpreted as shell commands or help requests, respectively.  Such cells are ignored by @nbinclude.\ncounters and regex keywords can be used to include a subset of notebook cells to those for which counter ∈ counters and the cell text matches regex. For example, @nbinclude(\"notebook.ipynb\"; counters=1:10, regex=r\"#\\s*EXECUTE\")would include cells 1 to 10 from notebook.ipynb that contain comments like # EXECUTE.A keyword anshook can be used to run a passed function on the return value of all the cells.\nNo Python or Jupyter dependency.\nThe softscope flag mentioned above. To install it, simply do Pkg.add(\"NBInclude\") as usual for Julia packages."
},

{
    "location": "#Contact-1",
    "page": "Readme",
    "title": "Contact",
    "category": "section",
    "text": "NBInclude was written by Steven G. Johnson and is free/open-source software under the MIT/Expat license.  Please file bug reports and feature requests at the NBInclude github page."
},

{
    "location": "autodocs/#NBInclude.@nbinclude",
    "page": "Docstrings",
    "title": "NBInclude.@nbinclude",
    "category": "macro",
    "text": "@nbinclude(path::AbstractString; renumber::Bool=false, counters=1:typemax(Int), regex::Regex=r\"\", anshook = identity, softscope::Bool = false)\n\nInclude the IJulia Jupyter notebook at path and execute the code cells (in the order that they appear in the file) in m, returning the result of the last expression in the last code cell.\n\nSimilarly to include(path) for .jl files, the path is relative to the path of the current file (if any), and nested calls to include or nbinclude are relative to the path of the notebook file.\n\nFor code in the N-th input cell of the notebook, the @__FILE__ macro (and other code that uses the file name, e.g. exception backtraces) returns path:In[N], where N is the cell number saved in the notebook. If the cell has no number (e.g. if it hasn\'t been evaluated yet), then it is assigned a number +N for the N-th nonempty cell.  If renumber is set to true, then the cell numbers saved in the notebook are ignored and each cell is assigned a consecutive number N.\n\ncounters and regex can be used to include only a subset of notebook cells. Only cells for which counter ∈ counters holds and the cell text matches regex are executed. E.g.\n\n@nbinclude(\"notebook.ipynb\"; counters = 1:10, regex=r\"# *exec\"i)\n\nwould include cells 1 to 10 from \"notebook.ipynb\" that contain comments like # exec or # ExecuteMe in the cell text.\n\nanshook can be used to execute a function on all the values returned in the cells.\n\nsoftscope toggles between the \"hard\" and \"soft\" scoping rules described in the README.\n\nSee also nbinclude(module, path; ...) to include a notebook in a specified module.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NBInclude.NBInclude",
    "page": "Docstrings",
    "title": "NBInclude.NBInclude",
    "category": "module",
    "text": "The NBInclude module allow you to include and execute Julia code from IJulia Jupyter notebooks.  Analogous to include(\"myfile.jl\"), just do\n\nusing NBInclude\n@nbinclude(\"myfile.ipynb\")\n\nto include the Julia code from the notebook myfile.ipynb.  Like include, the value of the last evaluated expression is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NBInclude.my_include_string",
    "page": "Docstrings",
    "title": "NBInclude.my_include_string",
    "category": "function",
    "text": "my_include_string(m::Module, s::AbstractString, path::AbstractString, prev, softscope)\n\nLike includestring (or softscopeincludestring, depending on the softscope flag), but also change the current source path just as include(filename) would do.   We are hacking undocumented internals of Julia here (see `base/loading.jl:includerelative), but it hasn\'t changed from Julia 0.2 to Julia 0.7 so it\'s not too crazy.prevshould be the previous path returned byBase.source_path`.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NBInclude.nbinclude",
    "page": "Docstrings",
    "title": "NBInclude.nbinclude",
    "category": "function",
    "text": "nbinclude(m::Module, path; ...)\n\nLike @nbinclude(path; ...) but allows you to specify a module to evaluate in, similar to include(m, path).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NBInclude.@nbincludeNBInclude.NBIncludeNBInclude.curmod_exprNBInclude.evalNBInclude.includeNBInclude.my_include_stringNBInclude.nbinclude"
},

]}
