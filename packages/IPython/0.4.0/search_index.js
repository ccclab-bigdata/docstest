var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Launch-IPython-in-Julia-1",
    "page": "Readme",
    "title": "Launch IPython in Julia",
    "category": "section",
    "text": "[![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![codecov.io][codecov-img]][codecov-url](Image: Example REPL session)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Run using IPython and then type . in empty julia> prompt or run IPython.start_ipython().  If you are using IPython 7.0 or above, you can switch back to Julia REPl by backspace or ctrl-h key (like other REPL modes).  For older versions of IPython, exiting IPython as usual (e.g., ctrl-d) brings you back to the Julia REPL.  Re-entering IPython keeps the previous state.  Use pre-defined Main object to access Julia namespace from IPython.  Use py\"...\" string macro to access Python namespace from Julia.Note: First launch of IPython may be slow."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": ""
},

{
    "location": "#Julia-1",
    "page": "Readme",
    "title": "Julia",
    "category": "section",
    "text": "PyCall"
},

{
    "location": "#Python-1",
    "page": "Readme",
    "title": "Python",
    "category": "section",
    "text": "IPython (7.0 or above is recommended)"
},

{
    "location": "#Accessing-Julia-from-Python-1",
    "page": "Readme",
    "title": "Accessing Julia from Python",
    "category": "section",
    "text": "If simple Main.eval(\"...\") and Main.<name> accessor is not enough, [PyJulia] is a nice way to access Julia objects from Python.  For example, you can import any Julia package from Python:[PyJulia]: https://github.com/JuliaPy/pyjulia>>> from julia import Base\n>>> Base.banner()Note: Until PyJulia 0.2 is released, I recommend using the master branch of PyJulia. See: https://github.com/JuliaPy/pyjulia/issues/198For more advanced/experimental Julia-(I)Python integration, see [ipyjulia_hacks].[ipyjulia_hacks]: http://ipyjulia-hacks.readthedocs.io/en/latest"
},

{
    "location": "#Configuration-1",
    "page": "Readme",
    "title": "Configuration",
    "category": "section",
    "text": ""
},

{
    "location": "#Julia-mode-like-prompt-1",
    "page": "Readme",
    "title": "Julia-mode like prompt",
    "category": "section",
    "text": "If you want IPython prompt to look like a part of Julia prompt, then add the following snippet in ~/.ipython/profile_default/ipython_config.py:try:\n    from ipython_jl.tools import JuliaModePrompt\nexcept ImportError:\n    pass\nelse:\n    c.TerminalInteractiveShell.prompts_class = JuliaModePromptThen the prompt would then look like ipy 1> instead of In [1]:. It also removes Out[1].  Note that above setting does not change your normal IPython prompts.[travis-img]: https://travis-ci.org/tkf/IPython.jl.svg?branch=master [travis-url]: https://travis-ci.org/tkf/IPython.jl [coveralls-img]: https://coveralls.io/repos/tkf/IPython.jl/badge.svg?branch=master&service=github [coveralls-url]: https://coveralls.io/github/tkf/IPython.jl?branch=master [codecov-img]: http://codecov.io/github/tkf/IPython.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/tkf/IPython.jl?branch=master"
},

{
    "location": "autodocs/#IPython.afterreplinit",
    "page": "Docstrings",
    "title": "IPython.afterreplinit",
    "category": "function",
    "text": "afterreplinit(f)\n\nLike atreplinit but triggers f even after REPL is initialized when it is called.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IPython.IPythonIPython.JuliaAPIIPython.NOT_INSTALLABLEIPython.__init__IPython._pyversionIPython._start_ipythonIPython.afterreplinitIPython.conda_installationIPython.conda_packagesIPython.condajl_installationIPython.envinfoIPython.evalIPython.includeIPython.init_replIPython.install_dependencyIPython.julia_exepathIPython.pip_installationIPython.pkg_resources_versionIPython.pyversionIPython.start_ipythonIPython.test_ipython_jlIPython.test_ipython_jl_cliIPython.test_ipython_jl_inprocessIPython.wait_repl_interfaceIPython.yes_or_no"
},

]}
