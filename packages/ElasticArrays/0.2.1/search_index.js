var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ElasticArrays.jl-1",
    "page": "Readme",
    "title": "ElasticArrays.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov)ElasticArrays provides resizeable multidimensional arrays for Julia.An ElasticArray is a fast, contiguous array that can grow and shrink, but only in its last dimension:\nusing ElasticArrays\n\nA = ElasticArray{Int}(2, 3, 0)\n\nfor i in 1:4\n    append!(A, rand(0:99, 2, 3))\nend\nsize(A) == (2, 3, 4)\n\nresize!(A, 2, 3, 2)\nsize(A) == (2, 3, 2)Howeverresize!(A, 2, 4, 2)would result in an error, as only the size of the last dimension may be changed."
},

{
    "location": "autodocs/#ElasticArrays.ElasticArray",
    "page": "Docstrings",
    "title": "ElasticArrays.ElasticArray",
    "category": "type",
    "text": "ElasticArray{T,N,M} <: DenseArray{T,N}\n\nAn ElasticArray can grow/shrink in its last dimension. N is the total number of dimensions, M == N - 1 the number of non-resizable dimensions.\n\nConstructors:\n\nElasticArray{T}(dims::Integer...)\nconvert(ElasticArray, A::AbstractArray)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ElasticArrays.ElasticArrayElasticArrays.ElasticArraysElasticArrays._copyto_impl!ElasticArrays._split_dimsElasticArrays._split_resize_dimsElasticArrays.evalElasticArrays.include"
},

]}
