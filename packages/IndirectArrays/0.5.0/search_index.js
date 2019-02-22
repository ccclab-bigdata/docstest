var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IndirectArrays-1",
    "page": "Readme",
    "title": "IndirectArrays",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)An IndirectArray is one that encodes data using a combination of an index and a value table. Each element is assigned its own index, which is used to retrieve the value from the value table.  Concretely, if A is an IndirectArray, then A[i,j...] = value[index[i,j,...]].Among other uses, IndirectArrays can represent indexed images, sometimes called \"colormap images\" or \"paletted images.\""
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"IndirectArrays\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "For example:using IndirectArrays, Colors\n\ncolors = distinguishable_colors(6)\nindex = rand(1:6, 32, 32)\nA = IndirectArray(index, colors)(Image: random image)which has only 6 colors in it.The value array can be of any type; it does not have to be color information.Note that setindex! is not supported: you cannot set the value of A to an arbitrary value, because the value has to be one of the values in the value table."
},

{
    "location": "#Related-packages-1",
    "page": "Readme",
    "title": "Related packages",
    "category": "section",
    "text": "CategoricalArrays offers an even more flexible interface for dealing with arrays in which values are looked up in an index.\nPooledArrays supports setindex!, but requires that values be sorted."
},

{
    "location": "autodocs/#IndirectArrays.IndirectArray",
    "page": "Docstrings",
    "title": "IndirectArrays.IndirectArray",
    "category": "type",
    "text": "IndirectArray(index, values)\n\ncreates an array A where the values are looked up in the value table, values, using the index.  Concretely, A[i,j] = values[index[i,j]].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IndirectArrays.IndirectArrayIndirectArrays.IndirectArraysIndirectArrays.evalIndirectArrays.include"
},

]}
