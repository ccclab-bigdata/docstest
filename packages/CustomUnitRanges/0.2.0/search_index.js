var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CustomUnitRanges-1",
    "page": "Readme",
    "title": "CustomUnitRanges",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This Julia package supports the creation of array types with \"unconventional\" indices, i.e., when the indices may not start at 1. With this package, each custom array type can have a corresponding indices range type, consequently providing a means for consistency in allocation by similar.See http://docs.julialang.org/en/latest/devdocs/offset-arrays.html for more information about defining and using array types with non-1 indices."
},

{
    "location": "#What\'s-in-this-package-1",
    "page": "Readme",
    "title": "What\'s in this package",
    "category": "section",
    "text": "Currently this package defines two AbstractUnitRange types:ZeroRange, where ZeroRange(n) is the equivalent of 0:n-1, except that Julia\'s type system knows that the lower bound is 0. (This is analogous to Base\'s OneTo type.) This is useful for defining arrays that are indexed starting with 0.\nURange, a parallel to UnitRange, for defining arbitrary range indices."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This package has a somewhat atypical usage: you should include files from this repository at the source level. The reason is that this package\'s range types should be private to the module that needs them; consequently you don\'t want to define a module in the global namespace.Instead, suppose you\'re defining an array type that supports arbitrary indices. In broad terms, your module might look like this:module MyArrayType\n\nusing CustomUnitRanges: filename_for_urange\ninclude(filename_for_urange)\n\nstruct MyArray{T,N} <: AbstractArray{T,N}\n    ...\nend\n\nindices(A::MyArray) = map(URange, #=starting indices=#, #=ending indices=#)\n\n...\n\nendHere,using CustomUnitRanges: filename_for_urangebrings a non-exported string, filename_for_urange, into the scope of MyArrayType. The key line is the include(filename_for_urange) statement, which will load (at source-level) the code for the URange type into your MyArrayType module.  We chose \"URange.jl\" because here we want arbitrary indices; had we wanted zero-based indices, we would have chosen \"ZeroRange.jl\" instead. Second, note that the output of indices is a URange type. More specifically, it\'s creating a tuple of MyArrayType.URange–-there is no \"global\" URange type, so the indices-tuple is therefore specific to this package.The important result is that two packages, defining MyArray and OtherArray, can independently exploit URange.  If MyArrayType includes the specializationfunction Base.similar(f::Union{Type,Function}, shape::Tuple{URange,Vararg{URange}}\n    MyArray(f(map(length, shape)), #=something for the offset=#)\nendand similarly for OtherArrayType. Then, if A is a MyArray and B is an OtherArray,similar(Array{Int}, indices(A)) will create another MyArray\nsimilar(Array{Int}, indices(B)) will create another OtherArraydespite the fact that they both use URange."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CustomUnitRanges.CustomUnitRangesCustomUnitRanges.evalCustomUnitRanges.filename_for_urangeCustomUnitRanges.filename_for_zerorangeCustomUnitRanges.include"
},

]}
