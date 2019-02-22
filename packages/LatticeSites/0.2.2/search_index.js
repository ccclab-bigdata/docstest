var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LatticeSites.jl-1",
    "page": "Readme",
    "title": "LatticeSites.jl",
    "category": "section",
    "text": "(Image: Build Status)Type for different kind of sites on different lattices."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add https://github.com/Roger-luo/LatticeSites.jl.git"
},

{
    "location": "#Intro-1",
    "page": "Readme",
    "title": "Intro",
    "category": "section",
    "text": "This package provides types for sites, which defines the configuration of a lattice.Binary configuration label is provided as:Bit,  refers to 0/1\nSpin, refers to -1/+1\nHalf, refers to -0.5/+0.5Array, StaticArray and etc. (e.g SparseArray) is supported for store configurations.It is simple, and you can use it like a Number (but it is not a Number)julia> rand(Bit{Float64})\n0.0\n\njulia> rand(Bit{Float64}, 2, 2)\n2×2 Array{Bit{Float64},2}:\n 0.0  0.0\n 0.0  0.0\n\njulia> using StaticArrays\n\njulia> rand(SMatrix{2, 2, Bit{Int}})\n2×2 SArray{Tuple{2,2},Bit{Int64},2,4}:\n0  1\n0  1and to support indexing, you can convert any AbstractArray contains sites to an integer (as long as this integer type does not overflow).julia> convert(Int, rand(SMatrix{2, 2, Bit{Int}}))\n12There is also a HilbertSpace iterator that help you iterate through the space.julia> space = HilbertSpace{Bit{Int}}(2, 2)\nHilbertSpace{Bit{Int64},Tuple{2,2},2,4}(Bit{Int64}[0 0; 0 0])\n\njulia> collect(space)\n16-element Array{Array{Bit{Int64},2},1}:\n [0 0; 0 0]\n [1 0; 0 0]\n [0 0; 1 0]\n [1 0; 1 0]\n [0 1; 0 0]\n [1 1; 0 0]\n [0 1; 1 0]\n [1 1; 1 0]\n [0 0; 0 1]\n [1 0; 0 1]\n [0 0; 1 1]\n [1 0; 1 1]\n [0 1; 0 1]\n [1 1; 0 1]\n [0 1; 1 1]\n [1 1; 1 1]We use the convention that the first index a[1] take the first digit position during the convention, which is opposite to natural notation 0b0101, where the last digit in bit string take the first position.In short0b011 is equivalent to Bit[1, 1, 0]"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Apache License 2.0"
},

{
    "location": "autodocs/#LatticeSites.FlipStyle",
    "page": "Docstrings",
    "title": "LatticeSites.FlipStyle",
    "category": "type",
    "text": "FlipStyle\n\nAbstract type for flip styles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatticeSites.HilbertSpace",
    "page": "Docstrings",
    "title": "LatticeSites.HilbertSpace",
    "category": "type",
    "text": "HilbertSpace{L, S, M}\n\nM dimension Hilbert space of Site type L in with shape S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatticeSites.UniformFlip",
    "page": "Docstrings",
    "title": "LatticeSites.UniformFlip",
    "category": "type",
    "text": "UniformFlip{N}\n\nChoose N sites in the configuration uniformly and flip it\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatticeSites.down",
    "page": "Docstrings",
    "title": "LatticeSites.down",
    "category": "function",
    "text": "down(site) -> site\ndown(site_type) -> site\n\ndown tag for this label. e.g. 0 for Bit, -0.5 for Half.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatticeSites.flip",
    "page": "Docstrings",
    "title": "LatticeSites.flip",
    "category": "function",
    "text": "flip(site)\n\nDefines how to flip this type of site.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatticeSites.flip!",
    "page": "Docstrings",
    "title": "LatticeSites.flip!",
    "category": "function",
    "text": "flip!(S, I...)\n\nFlips given configuration S at index I....\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatticeSites.randflip!",
    "page": "Docstrings",
    "title": "LatticeSites.randflip!",
    "category": "function",
    "text": "randflip!(config) -> (proposed_index, config)\nrandflip!(::FlipStyle, config) -> (proposed_index, config)\n\nFlip the lattice configuration randomly using given flip style, default flip style is UniformFlip{1}, which choose one site in the configuration uniformly and flip it.\n\nOne should always be able to use config[proposed_index] to get the current value of this lattice configuration. Whether one can change the site, depends on whether the configuration is stored in a mutable type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatticeSites.up",
    "page": "Docstrings",
    "title": "LatticeSites.up",
    "category": "function",
    "text": "up(site) -> site\nup(site_type) -> site\n\nup tag for this label. e.g. 1 for Bit, 0.5 for Half.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LatticeSites.AbstractSiteLatticeSites.BinarySiteLatticeSites.BitLatticeSites.FlipStyleLatticeSites.HalfLatticeSites.HilbertSpaceLatticeSites.LatticeSitesLatticeSites.SpinLatticeSites.UniformFlipLatticeSites._convertLatticeSites._downsLatticeSites._upsLatticeSites.carrybit!LatticeSites.downLatticeSites.downsLatticeSites.evalLatticeSites.fill_bit!LatticeSites.flipLatticeSites.flip!LatticeSites.get_bitLatticeSites.if_stopLatticeSites.includeLatticeSites.randflip!LatticeSites.upLatticeSites.upsLatticeSites.value"
},

]}
