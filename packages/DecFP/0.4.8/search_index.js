var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DecFP:-IEEE-Decimal-Floating-point-in-Julia-1",
    "page": "Readme",
    "title": "DecFP: IEEE Decimal Floating-point in Julia",
    "category": "section",
    "text": "(Image: Travis Status) (Image: Appveyor status) (Image: Coverage Status)The DecFP package is a Julia wrapper around the Intel Decimal Floating-Point Math Library, providing a software implementation of the IEEE 754-2008 Decimal Floating-Point Arithmetic specification.32-bit, 64-bit, and 128-bit decimal floating-point types Dec32, Dec64, and Dec128, respectively, are provided.  This is very different from packages such as Decimals.jl, which provide arbitrary-precision decimal types analogous to BigFloat: arbitrary precision types are very flexible, but fixed-precision types such as those in DecFP are much faster (though still about 100x slower than the hardware binary floating-point types Float32 and Float64).The DecFP package currently requires the Julia 0.5 release or later."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Dec64 and the other types mentioned above can be constructed from other Julia numeric types (binary floating-point or integers) via Dec64(3.5) or Dec(3), from strings by parse(Dec64, \"3.2\") or d64\"3.2\" (a Julia string macro); similarly for Dec32 and Dec128. The string macro d\"3.2\" constructs Dec64.Once a decimal float is constructed, most Julia arithmetic and special functions should work without modification.  For example, d\"3.2\" * d\"4.5\" produces the Dec64 result +1440E-2 (14.4). Most basic arithmetic functions are supported, and many special functions (sqrt, log, trigonometric functions, etc.).   Mixed operations involving decimal and binary floating-point or integer types are supported (the result is promoted to decimal floating-point).In general, you should be able to use the DecFP types in any context where you would have used binary floating-point types: arrays, complex arithmetic, and linear algebra should all work, for the most part."
},

{
    "location": "autodocs/#DecFP.exponent10",
    "page": "Docstrings",
    "title": "DecFP.exponent10",
    "category": "function",
    "text": "exponent10(x::DecFP.DecimalFloatingPoint)\n\nGet the exponent of the base 10 representation of a normalized floating-point number.\n\nExamples\n\njulia> exponent10(Dec64(123))\n2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DecFP.ldexp10",
    "page": "Docstrings",
    "title": "DecFP.ldexp10",
    "category": "function",
    "text": "ldexp10(x::DecFP.DecimalFloatingPoint, n::Integer)\n\nCompute x * 10^n.\n\nExamples\n\njulia> ldexp10(Dec64(15), 2)\n1500.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DecFP.@d128_strDecFP.@d32_strDecFP.@d64_strDecFP.@d_strDecFP.@xchkDecFP.DIVBYZERODecFP.Dec128DecFP.Dec32DecFP.Dec64DecFP.DecFPDecFP.DecimalFloatingPointDecFP.INEXACTDecFP.INVALIDDecFP.OVERFLOWDecFP.UNDERFLOWDecFP.UNNORMALDecFP.__init__DecFP._bufferDecFP._nextfloatDecFP._parseDecFP._prevfloatDecFP._subDecFP.bidsymDecFP.check_depsDecFP.depsjl_pathDecFP.evalDecFP.exponent10DecFP.flagsDecFP.getdigitsbufDecFP.includeDecFP.isnanstrDecFP.ldexp10DecFP.libbidDecFP.minf128DecFP.noxDecFP.pinf128DecFP.printzerosDecFP.roundingDecFP.rounding_c2jDecFP.rounding_j2cDecFP.tostring"
},

]}
