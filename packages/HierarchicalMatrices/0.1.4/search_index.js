var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#HierarchicalMatrices.jl-1",
    "page": "Readme",
    "title": "HierarchicalMatrices.jl",
    "category": "section",
    "text": "(Image: Build Status)  (Image: AppVeyor)This package provides a flexible framework for hierarchical data types in Julia.Create your own hierarchical matrix as simply as:julia> using HierarchicalMatrices\n\njulia> @hierarchical MyHierarchicalMatrix LowRankMatrix Matrix\nThe invocation of the @hierarchical macro creates an abstract supertype AbstractMyHierarchicalMatrix{T} <: AbstractMatrix{T} and the immutable type MyHierarchicalMatrix, endowing it with fields of HierarchicalMatrixblocks, LowRankMatrixblocks, Matrixblocks, and a matrix of integers, assigned, to determine which type of block is active. The package comes pre-loaded with a HierarchicalMatrix.See the example on speeding up the matrix-vector product with Cauchy matrices."
},

{
    "location": "#Implementation-1",
    "page": "Readme",
    "title": "Implementation",
    "category": "section",
    "text": "A straightforward implementation of hierarchical (self-referential) data types might suffer from Russell\'s paradox. In the context of types, Russell\'s paradox states that either you know the type, or you know its fields, but neither concretely. On one side of the paradox, you end up with type-stable constructors and type-unstable getters; on the other side, you are stuck with type-unstable constructors and type-stable getters.This implementation of hierarchical data types avoids Russell\'s paradox at the cost of restricting the entire list of concrete matrix types that are the fields upon construction. This allows for fast and type-stable setters and getters. Enjoy!"
},

{
    "location": "autodocs/#HierarchicalMatrices.Block",
    "page": "Docstrings",
    "title": "HierarchicalMatrices.Block",
    "category": "type",
    "text": "Block is used for get index of a block matrix.  For example,\n\nA[Block(1),Block(2)]\n\nretrieves the 1 x 2 block\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HierarchicalMatrices.LowRankMatrix",
    "page": "Docstrings",
    "title": "HierarchicalMatrices.LowRankMatrix",
    "category": "type",
    "text": "Store the singular value decomposition of a matrix:\n\nA = UΣV\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HierarchicalMatrices.half",
    "page": "Docstrings",
    "title": "HierarchicalMatrices.half",
    "category": "function",
    "text": "Compute a typed 0.5.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HierarchicalMatrices.two",
    "page": "Docstrings",
    "title": "HierarchicalMatrices.two",
    "category": "function",
    "text": "Compute a typed 2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "HierarchicalMatrices.@hierarchicalHierarchicalMatrices.A_mul_B!HierarchicalMatrices.AbstractBarycentricMatrixHierarchicalMatrices.AbstractHierarchicalMatrixHierarchicalMatrices.AbstractKernelMatrixHierarchicalMatrices.AbstractLowRankMatrixHierarchicalMatrices.AbstractSuperTypeHierarchicalMatrices.Ac_mul_B!HierarchicalMatrices.At_mul_B!HierarchicalMatrices.BLOCKRANKHierarchicalMatrices.BLOCKSIZEHierarchicalMatrices.BarycentricMatrix2DHierarchicalMatrices.BarycentricPoly2DHierarchicalMatrices.BlockHierarchicalMatrices.EvenBarycentricMatrixHierarchicalMatrices.HierarchicalMatricesHierarchicalMatrices.HierarchicalMatrixHierarchicalMatrices.HierarchicalMatrixFactorizationHierarchicalMatrices.KernelMatrixHierarchicalMatrices.KernelMatrix1HierarchicalMatrices.KernelMatrix2HierarchicalMatrices.KernelMatrixFactorizationHierarchicalMatrices.LowRankMatrixHierarchicalMatrices.ThreadSafeVectorHierarchicalMatrices.add_colHierarchicalMatrices.add_col!HierarchicalMatrices.barycentricmatrixHierarchicalMatrices.blockgetindexHierarchicalMatrices.blocksizeHierarchicalMatrices.chebyshevbarycentricweightsHierarchicalMatrices.chebyshevpointsHierarchicalMatrices.evalHierarchicalMatrices.evaluateHierarchicalMatrices.getrankHierarchicalMatrices.halfHierarchicalMatrices.includeHierarchicalMatrices.indsplitHierarchicalMatrices.lrzerosHierarchicalMatrices.mul!HierarchicalMatrices.scale!HierarchicalMatrices.svdtruncHierarchicalMatrices.threadsafeonesHierarchicalMatrices.threadsafezerosHierarchicalMatrices.twoHierarchicalMatrices.unsafe_broadcasttimes!HierarchicalMatrices.update!"
},

]}
