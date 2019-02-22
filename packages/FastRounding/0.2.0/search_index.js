var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FastRounding.jl-1",
    "page": "Readme",
    "title": "FastRounding.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Faster-directed-rounding-for-inline-arithmetic-1",
    "page": "Readme",
    "title": "Faster directed rounding for inline arithmetic",
    "category": "section",
    "text": ""
},

{
    "location": "#Copyright-2015-2018-by-Jeffrey-Sarnoff.-Released-under-the-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright © 2015-2018 by Jeffrey Sarnoff.  Released under the MIT License.",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#Quick-Overview-1",
    "page": "Readme",
    "title": "Quick Overview",
    "category": "section",
    "text": "This package provides arithmetic with directed rounding\nThe numeric types     { Float32, Float64 }\nThe arithmetic operations { +, -, *, inv, /, sqrt }     \nThe directed rounding modes     { RoundNearest, RoundUp, RoundDown, RoundToZero, RoundFromZero }\nThese functions ran faster than Julia\'s erstwhile setrounding"
},

{
    "location": "#Rounding-Modes-1",
    "page": "Readme",
    "title": "Rounding Modes",
    "category": "section",
    "text": "RoundNearest\nRoundUp\nRoundDown\nRoundToZero\nRoundFromZero"
},

{
    "location": "#Exports-1",
    "page": "Readme",
    "title": "Exports",
    "category": "section",
    "text": "addround, subround\nsquareround, mulround\nsqrtround, invround\ndiv_round"
},

{
    "location": "#Equivalent-Exports-1",
    "page": "Readme",
    "title": "Equivalent Exports",
    "category": "section",
    "text": "subscript signifies mode\n◌₌ RoundNearest\n◌₊ RoundUp\n◌₋ RoundDown\n◌₀ RoundToZero\n◌₁ RoundFromZerounicode op arithmetic op\n⊕ +\n⊖ -\n⊗ *\n⚆ inv\n⊘ /\n⊚ square\n⊙ sqrt"
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": "julia> using FastRounding\n\njulia> a = Float32(pi)\n3.1415927f0\n\njulia> b = inv(Float32(pi))\n0.31830987f0\n\njulia> mul_round(a, b, RoundUp)\n1.0f0\n\njulia> mul_round(a, b, RoundNearest)\n1.0f0\n\njulia> mul_round(a, b, RoundDown)\n0.99999994f0\n\njulia> mul_round(a, b, RoundToZero)\n0.99999994f0\n\njulia> mul_round(a, b, RoundFromZero)\n1.0f0\n\njulia> two = Float64(2)\n2.0\n\njulia> sqrt_round(two, RoundUp)\n1.4142135623730951\n\njulia> sqrt_round(two, RoundNearest)\n1.4142135623730951\n\njulia> sqrt_round(two, RoundDown)\n1.414213562373095\n\njulia> inv_round(-two, RoundToZero)\n-0.5\n\njulia> inv_round(-two, RoundFromZero)\n-0.5000000000000001\n\njulia> ⊙₋(two)  # sqrt(2) rounding down\n1.414213562373095\n\njulia> two ⊘₁ ans  # 2 / (sqrt(2) rounding down) rounding away from zero\n1.4142135623730954\n"
},

{
    "location": "#Conformance-1",
    "page": "Readme",
    "title": "Conformance",
    "category": "section",
    "text": "These functions conform to the requirements of the IEEE Interval Floating Point Standard for directed rounding, passing their tests as implemented in IntervalArithmetic.jl.While not required by the IEEE Floating Point Standard, RoundToZero and RoundFromZero modes exist.The determination of last bit(s) is correct to twice the significance of the rounded value. We do not provide the equivalent of infinitly precise evaluation when at doubled the given precision, all least significant bits are zero.  We are accurate and fast.If you require that RoundUp, RoundDown pairs assure enclosure of the theoretical result at a precision that exceeds 106 bits when working with Float64s (which have 53 significant bits), please let me know.  I could force nextfloat and prevfloat calls in those cases, forgoing the tightest results for the most inclusive.  Those routines run a little slower than these. Note that those routines may not match the Standard test suite values in those adjusted cases."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FastRounding.FastRoundingFastRounding.SysFloatFastRounding.add_roundFastRounding.div_roundFastRounding.evalFastRounding.includeFastRounding.inv_roundFastRounding.mul_roundFastRounding.next_awayfrom_zeroFastRounding.next_nearerto_zeroFastRounding.round_errorfreeFastRounding.sqrt_roundFastRounding.square_roundFastRounding.sub_roundFastRounding.⊕₀FastRounding.⊕₁FastRounding.⊕₊FastRounding.⊕₋FastRounding.⊕₌FastRounding.⊖₀FastRounding.⊖₁FastRounding.⊖₊FastRounding.⊖₋FastRounding.⊖₌FastRounding.⊗₀FastRounding.⊗₁FastRounding.⊗₊FastRounding.⊗₋FastRounding.⊗₌FastRounding.⊘₀FastRounding.⊘₁FastRounding.⊘₊FastRounding.⊘₋FastRounding.⊘₌FastRounding.⊙₀FastRounding.⊙₁FastRounding.⊙₊FastRounding.⊙₋FastRounding.⊙₌FastRounding.⊚₀FastRounding.⊚₁FastRounding.⊚₊FastRounding.⊚₋FastRounding.⊚₌FastRounding.⚆₀FastRounding.⚆₁FastRounding.⚆₊FastRounding.⚆₋FastRounding.⚆₌"
},

]}
