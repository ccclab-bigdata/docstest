var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Destruct.jl-1",
    "page": "Readme",
    "title": "Destruct.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: PkgEval.jl Status on Julia 0.6) (Image: PkgEval.jl Status on Julia 0.7)Destructuring arrays of tuples in Julia. Should work in Julia 0.6 - 1.0."
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "Using julia\'s \'dot-call\' syntax on functions with multiple return arguments results in an array of tuples. Sometimes, you want the tuple of arrays instead, preserving array shape. This can be achieved using destruct, which converts an array of tuple to a tuple of arrays.Works with any tuples (ie: with elements of different types).This single function doesn\'t really require it\'s package, maybe you can find it a better home."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using Destruct; using BenchmarkTools\njulia> f(a, b) = a+1im*b, a*b, convert(Int, round(a-b)); # some transform returing multiple values\njulia> v = f.(rand(3,1), rand(1,4));\njulia> typeof(v)\nArray{Tuple{Complex{Float64},Float64,Int64},2}\njulia> x, y, z = destruct(v);\njulia> z\n3×4 Array{Int64,2}:\n 0  0  0  0\n 1  0  1  1\n 1  0  1  1\njulia> v = f.(rand(500,1,1), rand(1,500,500));\njulia> @btime destruct($v); # using BenchmarkTools\n  1.396 s (7 allocations: 3.73 GiB)Getting this out of the way:julia> x, y, z = f.(rand(100,1,1), rand(1,100,100)) |> destruct;"
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "A common way to unpack Arrays of tuples uses the broadcast dot-call:unpack_broadcast(w::Array{<:Tuple}) = Tuple((v->v[i]).(w) for i=1:length(w[1]))However, this approach suffers from two problems: it doesn\'t access the elements in the order they are stored in memory and has huge memory consumption for Tuples with varying types (Tuples instead of NTuples).This \"broadcast unpack\" takes between 1.5x and 2x longer than destruct supplied here for arrays of NTuples. The performance gain is much larger  for tuples of heterogenous types: in the 10x to 75x range, using 1/10th of the memory.See timing scripts: timing.jl and comparative_timing.jl."
},

{
    "location": "#How-does-it-work?-1",
    "page": "Readme",
    "title": "How does it work?",
    "category": "section",
    "text": "The destruct function uses macros from Base.Cartesian to allocate destination arrays and iterate over all the things. The alternative implementations using broadcast dot-call is available as Destruct.unpack_broadcast."
},

{
    "location": "autodocs/#Destruct.destruct",
    "page": "Docstrings",
    "title": "Destruct.destruct",
    "category": "function",
    "text": "destruct(v::Array{<:Tuple,N})\n\nDestructure an array of tuples to a tuple of arrays. Works for tuples with elements of varying types.\n\nExamples\n\njulia> f(a, b) = a+b, a*b, a-b;\njulia> v = f.(rand(3,1), rand(1,4));\njulia> x, y, z = destruct(v);\njulia> x\n3×4 Array{Float64,2}:\n 0.301013  0.888299  1.03866  1.0867\n 0.853248  1.44053   1.5909   1.63894\n 0.687546  1.27483   1.4252   1.47324\njulia> v = f.(rand(100,1,1), rand(1,100,100));\njulia> @btime destruct(v);\n  7.138 ms (7 allocations: 22.89 MiB)\njulia> x, y, z = f.(rand(100,1,1), rand(1,100,100)) |> destruct;\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Destruct.DestructDestruct.destructDestruct.destruct_cartesianDestruct.evalDestruct.includeDestruct.unpack_broadcast"
},

]}
