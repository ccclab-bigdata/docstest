var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FunctionWrappers.jl:-Type-stable-and-efficient-wrapper-of-arbitrary-functions-1",
    "page": "Readme",
    "title": "FunctionWrappers.jl: Type stable and efficient wrapper of arbitrary functions",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)Proof of principle implementation of JuliaLang/julia#13984."
},

{
    "location": "#Limitations-1",
    "page": "Readme",
    "title": "Limitations",
    "category": "section",
    "text": "Does not handle more than 128 arguments without jlcall wrapper\n128 is an arbitrary limit. Should be high enough for all practical cases\nDoes not support vararg argument types\nWrapper Object cannot be serialized by dump.c and therefore the precompilation of FunctionWrappers is done using a runtime branch and by making the wrapper type mutable."
},

{
    "location": "#Compared-to-@cfunction-1",
    "page": "Readme",
    "title": "Compared to @cfunction",
    "category": "section",
    "text": "This does not require LLVM trampoline support, which is not currently supported by LLVM on all the architectures julia runs on (JuliaLang/julia#27174). Other than this issue @cfunction should cover all of the use cases."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FunctionWrappers.CallWrapperFunctionWrappers.FunctionWrapperFunctionWrappers.FunctionWrappersFunctionWrappers.assumeFunctionWrappers.convert_retFunctionWrappers.do_ccallFunctionWrappers.evalFunctionWrappers.gen_fptrFunctionWrappers.get_cfunc_argtypeFunctionWrappers.identityAnyAnyFunctionWrappers.includeFunctionWrappers.is_singletonFunctionWrappers.map_argtypeFunctionWrappers.map_cfunc_argtypeFunctionWrappers.map_rettypeFunctionWrappers.reinit_wrapper"
},

]}
