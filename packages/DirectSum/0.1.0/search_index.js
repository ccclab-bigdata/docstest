var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DirectSum.jl-1",
    "page": "Readme",
    "title": "DirectSum.jl",
    "category": "section",
    "text": "Abstract vector space type operations at compile-time(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package is a work in progress providing the necessary tools to work with arbitrary dual VectorSpace elements with optional origin. Due to the parametric type system for the generating VectorSpace, the Julia compiler can fully preallocate and often cache values efficiently ahead of run-time.Although intended for use with the Grassmann.jl package, DirectSum can be used independently."
},

{
    "location": "#Direct-sum-yields-VectorSpace-parametric-type-polymorphism-1",
    "page": "Readme",
    "title": "Direct-sum yields VectorSpace parametric type polymorphism ⨁",
    "category": "section",
    "text": "Let N be the dimension (number of indices) of a VectorSpace{N}. The metric signature of the basis elements of a vector space V can be specified with the V\"...\" constructor by using + and - to specify whether the basis element of the corresponding index squares to +1 or -1. For example, V\"+++\" constructs a positive definite 3-dimensional VectorSpace.julia> ℝ^3 == V\"+++\" == VectorSpace(3)\ntrueThe direct sum operator ⊕ can be used to join spaces (alternatively +), and \' is an involution which toggles a dual vector space with inverted signature.julia> V = ℝ\'⊕ℝ^3\n⟨-+++⟩\n\njulia> V\'\n⟨+---⟩\'\n\njulia> W = V⊕V\'\n⟨-++++---⟩*The direct sum of a VectorSpace and its dual V⊕V\' represents the full mother space V*."
},

{
    "location": "#Compile-time-type-operations-make-code-optimization-easier-1",
    "page": "Readme",
    "title": "Compile-time type operations make code optimization easier",
    "category": "section",
    "text": "Additionally to the direct-sum operation, several others operations are supported, such as ∪, ∩, ⊆, ⊇ for set operations.julia> ℝ+ℝ\' ⊇ VectorSpace(1)\ntrue\n\njulia> ℝ ∩ ℝ\' == VectorSpace(0)\ntrue\n\njulia> ℝ ∪ ℝ\' == ℝ+ℝ\'\ntrueNote, although some of the operations sometimes result in the same value as shown in the above examples, the ∪ and + are entirely different operations in general."
},

{
    "location": "#Extended-dual-index-printing-with-full-alphanumeric-characters-#62\'-1",
    "page": "Readme",
    "title": "Extended dual index printing with full alphanumeric characters #62\'",
    "category": "section",
    "text": "To help provide a commonly shared and readable indexing to the user, some print methods are provided:julia> DirectSum.printindices(stdout,DirectSum.indices(UInt(2^62-1)),\"v\")\nv₁₂₃₄₅₆₇₈₉₀abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\n\njulia> DirectSum.printindices(stdout,DirectSum.indices(UInt(2^62-1)),\"w\")\nw¹²³⁴⁵⁶⁷⁸⁹⁰ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzAn application of this is in the Grasmann package, where dual indexing is used."
},

{
    "location": "#Additional-features-for-projective-geometry-generators-1",
    "page": "Readme",
    "title": "Additional features for projective geometry generators",
    "category": "section",
    "text": "Not to be confused with the dual basis, to declare dual numbers it is possible to specify a degenerate basis element with ϵ at the first index, i.e. V\"ϵ+++\" Optionally, an additional element can be specified as the origin by using o subsequently, i.e. V\"o+++\" or V\"ϵo+++\". These two basis elements will be interpreted in the type system such that they propagate under transformations when combining a mixed index sets (provided the signature is compatible).The index number N of the VectorSpace corresponds to the total number of generator elements, but even though V\"ϵo+++\" of type VectorSpace{5,3} has standard generator elements, it can be internally recognized in the direct sum algebra as being generated by a 3-index VectorSpace{3,0} due to the encoding of the degenerate and origin elements with M in the VectorSpace{N,M} type."
},

{
    "location": "#Future-work-1",
    "page": "Readme",
    "title": "Future work",
    "category": "section",
    "text": "This package is still in its beginning stages and may have deprecating changes."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DirectSum.@V_strDirectSum.BitsDirectSum.DirectSumDirectSum.V0DirectSum.VTIDirectSum.VectorSpaceDirectSum.alphanumvDirectSum.alphanumwDirectSum.bit2intDirectSum.digsDirectSum.doc2mDirectSum.dualDirectSum.dualtypeDirectSum.evalDirectSum.flip_sigDirectSum.hasdualDirectSum.hasoriginDirectSum.includeDirectSum.indexbitsDirectSum.indicesDirectSum.low_caseDirectSum.low_greekDirectSum.optionsDirectSum.options_listDirectSum.preDirectSum.printindexDirectSum.printindicesDirectSum.shift_indicesDirectSum.sigDirectSum.subsDirectSum.supsDirectSum.upp_caseDirectSum.upp_greekDirectSum.valueDirectSum.vectorspaceDirectSum.vsnDirectSum.ℝDirectSum.⊕"
},

]}
