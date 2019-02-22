var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InplaceOps.jl-1",
    "page": "Readme",
    "title": "InplaceOps.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)InplaceOps.jl is a Julia package that provides macros that enable a simple syntax for performing in-place (i.e. overwriting) array operations using standard arithmetic operators."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "InplaceOps.jl provides a macro @! which rewrites expressions of the form:C = A*B to mul!(C,A,B)\nC = C*B or C *= B to rmul!(C,B)\nC = A*C to lmul!(A,B)\nC = A/B to rdiv!(C,A,B)\nC = C/B or C /= B to rdiv!(C,B)\nC = A\\B to ldiv!(C,A,B)\nC = A\\C to ldiv!(A,B)Functionality for broadcasting is no longer supported. Use the Base @. macro instead."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using LinearAlgebra, InplaceOps\n\njulia> T = UpperTriangular(ones(5,5))\n5×5 UpperTriangular{Float64,Array{Float64,2}}:\n 1.0  1.0  1.0  1.0  1.0\n  ⋅   1.0  1.0  1.0  1.0\n  ⋅    ⋅   1.0  1.0  1.0\n  ⋅    ⋅    ⋅   1.0  1.0\n  ⋅    ⋅    ⋅    ⋅   1.0\n\njulia> x_orig = x = [1.0,2.0,3.0,4.0,5.0]\n5-element Array{Float64,1}:\n 1.0\n 2.0\n 3.0\n 4.0\n 5.0\n\njulia> @! x = T \\ x\n5-element Array{Float64,1}:\n -1.0\n -1.0\n -1.0\n -1.0\n  5.0\n\njulia> x === x_orig\ntrue"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "InplaceOps.@!InplaceOps.InplaceOpsInplaceOps.evalInplaceOps.include"
},

]}
