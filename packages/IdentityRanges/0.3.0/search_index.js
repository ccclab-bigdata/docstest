var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IdentityRanges-1",
    "page": "Readme",
    "title": "IdentityRanges",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)IdentityRanges are Julia-language a helper type for creating \"views\" of arrays. They are a custom type of AbstractUnitRange that makes it easy to preserve the indices of array views. The key property of an IdentityRange r is that r[i] == i (hence the name of the type/package), and that they support arbitrary start/stop indices (i.e., not just starting at 1).julia> A = reshape(1:24, 4, 6)\n4×6 reshape(::UnitRange{Int64}, 4, 6) with eltype Int64:\n 1  5   9  13  17  21\n 2  6  10  14  18  22\n 3  7  11  15  19  23\n 4  8  12  16  20  24\n\njulia> V = view(A, 2:3, 3:5)\n2×3 view(reshape(::UnitRange{Int64}, 4, 6), 2:3, 3:5) with eltype Int64:\n 10  14  18\n 11  15  19\n\njulia> axes(V)\n(Base.OneTo(2),Base.OneTo(3))\n\njulia> V[1,1]\n10\n\njulia> using IdentityRanges\n\njulia> Vp = view(A, IdentityRange(2:3), IdentityRange(3:5))\nview(reshape(::UnitRange{Int64}, 4, 6), IdentityRange(2:3), IdentityRange(3:5)) with eltype Int64 with indices 2:3×3:5:\n 10  14  18\n 11  15  19\n\njulia> axes(Vp)\n(2:3,3:5)\n\njulia> Vp[1,1]\nERROR: BoundsError: attempt to access view(reshape(::UnitRange{Int64}, 4, 6), IdentityRange(2:3), IdentityRange(3:5)) with eltype Int64 with indices 2:3×3:5 at index [1, 1]\nStacktrace:\n [1] throw_boundserror(::SubArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}},Tuple{IdentityRange{Int64},IdentityRange{Int64}},false}, ::Tuple{Int64,Int64}) at ./abstractarray.jl:484\n [2] checkbounds at ./abstractarray.jl:449 [inlined]\n [3] getindex(::SubArray{Int64,2,Base.ReshapedArray{Int64,2,UnitRange{Int64},Tuple{}},Tuple{IdentityRange{Int64},IdentityRange{Int64}},false}, ::Int64, ::Int64) at ./subarray.jl:206\n [4] top-level scope at none:0\n\njulia> Vp[2,3]\n10\n\njulia> A[2,3]\n10"
},

{
    "location": "autodocs/#IdentityRanges.IdentityRange",
    "page": "Docstrings",
    "title": "IdentityRanges.IdentityRange",
    "category": "type",
    "text": "IdentityRange(start, stop) -> idr\nIdentityRange(r::AbstractUnitRange) -> idr\n\nDefines an AbstractUnitRange where idr[i] == i for any valid i, or equivalently axes(idr, 1) returns a range with the same values as present in idr.\n\nThese are particularly useful for creating views of arrays that preserve the supplied axes:\n\njulia> a = rand(8);\n\njulia> v1 = view(a, 3:5);\n\njulia> axes(v1, 1)\nBase.OneTo(3)\n\njulia> idr = IdentityRange(3:5)\nIdentityRange(3:5)\n\njulia> v2 = view(a, idr);\n\njulia> axes(v2, 1)\n3:5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IdentityRanges.+IdentityRanges.-IdentityRanges.IdentityRangeIdentityRanges.IdentityRangesIdentityRanges._lengthIdentityRanges.evalIdentityRanges.include"
},

]}
