var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IntArrays-1",
    "page": "Readme",
    "title": "IntArrays",
    "category": "section",
    "text": "(Image: Build Status)IntArrays.jl is a package for packed integer arrays. An array type, IntArray, is exported from this package and some methods in Base are extended for it.The IntArray type is defined as follows:type IntArray{w,T<:Unsigned,n} <: AbstractArray{T,n}wherew: the bit width of integers (i.e. the number of bits to encode an integer)\nT: the type of integers\nn: the number of dimensions in the array.This works like normal arrays, but each element is packed in a buffer as compact as possible. That means the total memory footprint can be reduced if you specify small w value: the total size is about w * length(int_array) bits. You can think of it as a generalization of BitArray defined in the standard library: IntArray can store any (unsigned) integers, whereas BitArray is restricted to Bool. It is your responsibility to keep values between 0 and 2^w-1; otherwise values will be truncated to w bits with no warning.Like Vector{T} and Matrix{T} in Base, IntVector{w,T} and IntMatrix{w,T} are also defined as a type alias of IntArray{w,T,n}."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using IntArrays\n\njulia> ivec = IntVector{2}([0x00, 0x01, 0x03, 0x02])\n4-element IntArrays.IntArray{2,UInt8,1}:\n 0x00\n 0x01\n 0x03\n 0x02\n\njulia> ivec[2]\n0x01\n\njulia> ivec[2] = 0x03\n0x03\n\njulia> ivec[2]\n0x03See tutorial.ipynb for more details."
},

{
    "location": "#Plan-1",
    "page": "Readme",
    "title": "Plan",
    "category": "section",
    "text": "Make it behave more like usual arrays.\nStore signed integers."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IntArrays.BufferIntArrays.IntArrayIntArrays.IntArraysIntArrays.IntMatrixIntArrays.IntVectorIntArrays.bitsofIntArrays.evalIntArrays.fill0!IntArrays.fill1!IntArrays.get_chunk_idIntArrays.includeIntArrays.maskIntArrays.mergebitsIntArrays.radixsortIntArrays.radixsort!IntArrays.unsafe_getindexIntArrays.unsafe_setindex!"
},

]}
