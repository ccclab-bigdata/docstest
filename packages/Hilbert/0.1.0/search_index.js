var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hilbert.jl-1",
    "page": "Readme",
    "title": "Hilbert.jl",
    "category": "section",
    "text": "master: (Image: master) v1.0: (Image: v1.0)Compute the Hilbert transform of a signal in Julia.julia> using Hilbert\n\njulia> signal = [1 2 3 4]\n1×4 Array{Int64,2}:\n 1  2  3  4\n\njulia> hilbert(signal)\n1×4 Array{Complex{Float64},2}:\n 1.0+1.0im  2.0-1.0im  3.0-1.0im  4.0+1.0im"
},

{
    "location": "autodocs/#Hilbert.hilbert",
    "page": "Docstrings",
    "title": "Hilbert.hilbert",
    "category": "function",
    "text": "hilbert(x)\nhilbert(x, n)\n\nAnalytic signal, computed using the Hilbert transform. y = hilbert(x) gives the analytic signal y = x + i*xi where xi is the Hilbert transform of vector x. If x is complex, only the real part is used. If x is a matrix, then hilbert operates along columns. If n is provided, the n-point Hilbert transform is computed.\n\nExample\n\nx = randn(10,10)\ny = hilbert(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Hilbert.HilbertHilbert.evalHilbert.hilbertHilbert.include"
},

]}
