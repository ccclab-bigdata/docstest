var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BitIntegers-1",
    "page": "Readme",
    "title": "BitIntegers",
    "category": "section",
    "text": "(Image: Build Status)This package implements fixed-width integer types similar to standard builtin-ones like Int or UInt128. The following types, with obvious meaning, are exported: Int256, UInt256, Int512, UInt512, Int1024, UInt1024; they come with string macros to construct them (like for Int128 and UInt128), e.g. int256\"123\". It\'s possible to instantiate a new pair of types with the non-exported @define_integers macro:julia> BitIntegers.@define_integers 24\n\njulia> UInt24(1), Int24(2)\n(0x000001, 2)\n\njulia> BitIntegers.@define_integers 8 MyInt8 MyUInt8\n\njulia> MyUInt8(1)\n0x01\n\njulia> myint8\"123\" # the string macro is named like the type, in lower case\n123Enough functions have been implemented to make those numbers a bit useful, but many more are missing. Issues and PRs are welcome :)I expected to implement this using tuples, but it turned out that using primitive type was a huge win: many basic functions were already available for free via the use of intrinsics! (which tap into already implemented features in LLVM). The caveat is that I have no idea whether how it is used here is legal: for example, it seems possible to call Primes.factor(rand(Int256)) without a problem, but Primes.factor(rand(UInt256)) will make LLVM abort the program, in a way that I\'m unable to debug so far.There are another couple of outstanding issues:the intrinsics for division operations make LLVM fail (at least for widths greater than 128 bits),so they are here implemented via conversion to BigInt first, which makes them quite slow (but a patch to Julia is on the way to accelerate that). What is quite surprising is that the intrinsics seem to work when not wrapped in another function! So if speed is paramount and you don\'t need checked operations, you can use Base.sdiv_int instead of div for example;for some reason, importing this code invalidates many precompiled functions from Base, so theREPL experience becomes very annoyingly slow until functions get recompiled. Hopefully this will be a solvable problem."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BitIntegers.@define_integersBitIntegers.@int1024_strBitIntegers.@int256_strBitIntegers.@int512_strBitIntegers.@uint1024_strBitIntegers.@uint256_strBitIntegers.@uint512_strBitIntegers.AbstractBitSignedBitIntegers.AbstractBitUnsignedBitIntegers.BBIBitIntegers.BBSBitIntegers.BBUBitIntegers.BitIntegerBitIntegers.BitInteger_typesBitIntegers.BitIntegersBitIntegers.BitSignedBitIntegers.BitSigned_typesBitIntegers.BitUnsignedBitIntegers.BitUnsigned_typesBitIntegers.Int1024BitIntegers.Int256BitIntegers.Int512BitIntegers.NBitsBitIntegers.SamplerRangeFastBitIntegers.UBIBitIntegers.UBSBitIntegers.UBUBitIntegers.UInt1024BitIntegers.UInt256BitIntegers.UInt512BitIntegers.XBIBitIntegers.XBSBitIntegers.XBUBitIntegers._DEFINED_SIZESBitIntegers._remBitIntegers.broken_mul_with_overflowBitIntegers.converttoBitIntegers.evalBitIntegers.include"
},

]}
