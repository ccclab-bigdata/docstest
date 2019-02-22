var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)(Image: codecov.io)"
},

{
    "location": "#FixedSizeStrings.jl-1",
    "page": "Readme",
    "title": "FixedSizeStrings.jl",
    "category": "section",
    "text": "This is a string type for compactly storing short strings of statically-known size. Each character is stored in one byte, so currently only the Latin-1 subset of Unicode is supported.To use, call FixedSizeString{n}(itr), where n is the length and itr is an iterable of characters. Alternatively, other string types can be converted to FixedSizeString{n}.FixedSizeStrings works well in the following cases:Very short strings, e.g. <= 8 characters\nStoring many strings of the same length, when the number of unique strings is largeIf you have a large array with a relatively small number of unique strings, it is probably better to use PooledArrays with whatever string type is convenient.TODO and open questions:Support more characters by adding a parameter for the representation (UInt16, UInt32)\nDoes it make sense to support UTF-8?\nPossibly add MaxLengthString, which is the same except can be padded with 0 bytes to represent fewer than the maximum possible number of characters."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FixedSizeStrings.FixedSizeStringFixedSizeStrings.FixedSizeStringsFixedSizeStrings.evalFixedSizeStrings.include"
},

]}
