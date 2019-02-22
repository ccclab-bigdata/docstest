var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CircularArrays.jl-Multi-dimensional-arrays-with-fixed-size-and-circular-indexing-1",
    "page": "Readme",
    "title": "CircularArrays.jl - Multi-dimensional arrays with fixed size and circular indexing",
    "category": "section",
    "text": "CircularArrays.jl is a small package adding the CircularArray{T, N} type which can be backed by any AbstractArray{T, N}. A CircularArray has a fixed size and features circular indexing across all dimensions: Indexing and assigning beyond its bounds is possible, as the end of the array is considered adjacent to its start; indices less than 1 are possible too. Iterators will still stop at the end of the array, and indexing using ranges is only possible with ranges within the bounds of the backing array.The CircularVector{T} type is added as an alias for CircularArray{T, 1}.# CircularArrays use mod1 for their circular behaviour.\narray[index] == array[mod1(index, size)]The following functions are provided.# Initialize a CircularArray backed by any AbstractArray.\nCircularArray(arr::AbstractArray{T, N}) where {T, N}\n# Initialize a CircularArray with default values and the specified dimensions.\nCircularArray(initialValue::T, dims...) where T\n# Alternative functions for one-dimensional circular arrays.\nCircularVector(arr::AbstractArray{T, 1}) where T\nCircularVector(initialValue::T, size::Int) where T"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "CircularArrays.jl is licensed under the MIT license. By using or interacting with this software in any way, you agree to the license of this software."
},

{
    "location": "autodocs/#CircularArrays.CircularArray",
    "page": "Docstrings",
    "title": "CircularArrays.CircularArray",
    "category": "type",
    "text": "CircularArray{T, N} <: AbstractArray{T, N}\n\nN-dimensional array backed by an AbstractArray{T, N} with fixed size and circular indexing.\n\narray[index] == array[mod1(index, size)]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CircularArrays.CircularArrays",
    "page": "Docstrings",
    "title": "CircularArrays.CircularArrays",
    "category": "module",
    "text": "Arrays with fixed size and circular indexing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CircularArrays.CircularVector",
    "page": "Docstrings",
    "title": "CircularArrays.CircularVector",
    "category": "type",
    "text": "CircularVector{T} <: AbstractVector{T}\n\nOne-dimensional array backed by an AbstractArray{T, 1} with fixed size and circular indexing. Alias for CircularArray{T,1}.\n\narray[index] == array[mod1(index, size)]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CircularArrays.CircularArrayCircularArrays.CircularArraysCircularArrays.CircularVectorCircularArrays.clamp_boundsCircularArrays.evalCircularArrays.include"
},

]}
