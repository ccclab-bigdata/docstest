var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ColorVectorSpace-1",
    "page": "Readme",
    "title": "ColorVectorSpace",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package is an add-on to ColorTypes, and provides fast mathematical operations for objects with types such as RGB and Gray."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Colorspaces such as RGB, unlike XYZ, are technically non-linear; the \"colorimetrically correct\" approach when averaging two RGBs is to first convert each to XYZ, average them, and then convert back to RGB.However, particularly in image processing it is common to ignore this concern, and for the sake of performance treat an RGB as if it were a 3-vector.  This package provides such operations.If you\'re curious about how much difference it makes, the following diagram might help. The first 10 distinguishable_colors were generated, and all pairs were averaged. Each box represents the average of the pair of diagonal elements intersected by tracing vertically and horizontally; within each box, the upper diagonal is the \"colorimetrically-correct\" version, while the lower diagonal represents the \"RGB vector space\" version.(Image: ColorVectorSpace)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using ColorTypes, ColorVectorSpaceThat\'s it. Just by loading ColorVectorSpace, most basic mathematical operations will \"just work\" on AbstractRGB, AbstractGray (OpaqueColor{T,1}), TransparentRGB, and TransparentGray objects. (See definitions for the latter inside of ColorTypes).If you discover missing operations, please open an issue, or better yet submit a pull request."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ColorVectorSpace.ColorVectorSpaceColorVectorSpace.MathTypesColorVectorSpace.TransparentGrayFloatColorVectorSpace.TransparentGrayNormedColorVectorSpace.TransparentRGBFloatColorVectorSpace.TransparentRGBNormedColorVectorSpace._color_rettypeColorVectorSpace._nanColorVectorSpace.accColorVectorSpace.acctypeColorVectorSpace.arith_colorant_typeColorVectorSpace.color_rettypeColorVectorSpace.coltypeColorVectorSpace.divtypeColorVectorSpace.dotcColorVectorSpace.evalColorVectorSpace.includeColorVectorSpace.mod1ColorVectorSpace.multypeColorVectorSpace.nanColorVectorSpace.powtypeColorVectorSpace.sumtypeColorVectorSpace.unaryOps"
},

]}
