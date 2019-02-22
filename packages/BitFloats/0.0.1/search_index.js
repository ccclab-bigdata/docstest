var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BitFloats-1",
    "page": "Readme",
    "title": "BitFloats",
    "category": "section",
    "text": "(Image: Build Status)This package is a wrapper around LLVM\'s builtin floating-point types with 80 and 128 bits, here called Float80 and Float128.This is very experimental:I heard that support for Float80 exists mainly only on x86 CPUs;\nLLVM support for Float128 operations (e.g. log, cos, etc.) is bad on my machine, except for the most simple arithmetic, so conversion to/from BigFloat is done before/after computation;\nconversions to/from other types is mostly done without consideration for rounding modes;\nthere can be unexpected segfaults (which I don\'t understand);\nthis is tested only on Linux; some tests pass on MacOS, but I don\'t have a machine at hand to check what doesn\'t work;\nthis uses the BitIntegers.jl package, so the problem of slow REPL experience after using BitFloats carries over here;\narrays of Float80 are prone to segfaults.An issue is open for last two items in the Julia repository, so these will hopefully be fixed eventually. It would be desirable to use a proper library for handling Float128 computations, but I had no luck with libquadmath for example, results were simply incorrect.I\'m way out of my areas of expertise, both in terms of \"talking with LLVM\", and in terms of floating-point tricks, so there are bugs along those two dimensions. This package is currently just a starting point, and will need other contributors to stand a chance of becoming reliable.Note also that there has already been some discussions regarding including a Float128 type in Base, for example here."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BitFloats.@int80_strBitFloats.@uint80_strBitFloats.BigFloat_mpfrBitFloats.BitFloatsBitFloats.Float128BitFloats.Float80BitFloats.Inf128BitFloats.Inf80BitFloats.Int80BitFloats.NaN128BitFloats.NaN80BitFloats.UInt80BitFloats.WBFBitFloats.evalBitFloats.explicit_bitBitFloats.exponent_biasBitFloats.fpisltBitFloats.includeBitFloats.llvmvarsBitFloats.squeezeimplicitBitFloats.unsqueezeimplicit"
},

]}
