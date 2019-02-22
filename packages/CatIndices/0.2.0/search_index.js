var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CatIndices-1",
    "page": "Readme",
    "title": "CatIndices",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)A Julia package for concatenating, growing, and shrinking arrays in ways that allow control over the resulting axes."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#BidirectionalVector-1",
    "page": "Readme",
    "title": "BidirectionalVector",
    "category": "section",
    "text": "These vectors can grow or shrink from either end, and the axes update correspondingly. In this demo, pay careful attention to the axes at each step:julia> using CatIndices\n\njulia> v = BidirectionalVector(rand(3))\nCatIndices.BidirectionalVector{Float64} with indices CatIndices.URange(1,3):\n 0.32572\n 0.250426\n 0.834728\n\njulia> append!(v, rand(2))\nCatIndices.BidirectionalVector{Float64} with indices CatIndices.URange(1,5):\n 0.32572\n 0.250426\n 0.834728\n 0.388788\n 0.282573\n\njulia> prepend!(v, rand(3))\nCatIndices.BidirectionalVector{Float64} with indices CatIndices.URange(-2,5):\n 0.992902\n 0.849368\n 0.189849\n 0.32572\n 0.250426\n 0.834728\n 0.388788\n 0.282573\n\njulia> pop!(v)\n0.28257294456774673\n\njulia> axes(v)\n(CatIndices.URange(-2,4),)\n\njulia> popfirst!(v)\n0.9929020233076613\n\njulia> axes(v)\n(CatIndices.URange(-1,4),)deleteat! and insert! are not supported, since it is unclear whether it should shrink/grow from the beginning or end.  To eliminate many items at the beginning or end of the vector, this package exports deletehead!(v, n) and deletetail!(v, n)."
},

{
    "location": "#Concatenation-1",
    "page": "Readme",
    "title": "Concatenation",
    "category": "section",
    "text": "TODO"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CatIndices.BidirectionalVectorCatIndices.CatIndicesCatIndices.PinIndicesCatIndices.URangeCatIndices.copyeltsCatIndices.deletehead!CatIndices.deletetail!CatIndices.evalCatIndices.includeCatIndices.is_pinnedCatIndices.unpinCatIndices.urange_last"
},

]}
