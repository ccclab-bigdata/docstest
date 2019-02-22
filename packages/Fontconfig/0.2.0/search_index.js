var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Fontconfig-1",
    "page": "Readme",
    "title": "Fontconfig",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)Fontconfig.jl provides basic binding to fontconfig."
},

{
    "location": "#Pattern-1",
    "page": "Readme",
    "title": "Pattern",
    "category": "section",
    "text": "Pattern corresponds to the fontconfig type FcPattern. It respresents a set of font properties used to match specific fonts.It can be constructed in two ways. First with zero or more keyword arguments corresponding to fontconfig font properties.Fontconfig.Pattern(; args...)For exampleFontconfig.Pattern(family=\"Helvetica\", size=10, hinting=true)Secondly, it can be constructed with a fontconfig specifications stringFontconfig.Pattern(name::String)For exampleFontconfig.Pattern(\"Helvetica-10\")"
},

{
    "location": "#Match-1",
    "page": "Readme",
    "title": "Match",
    "category": "section",
    "text": "The primary functionality fontconfig provides is matching font patterns. In Fontconfig.jl this is done with the match function, corresponding to FcMatch in fontconfig.match(pat::Pattern)It takes a Pattern and return a Pattern corresponding to the nearest matching installed font."
},

{
    "location": "#Format-1",
    "page": "Readme",
    "title": "Format",
    "category": "section",
    "text": "Extracting property values from a Pattern can be done with the format function, which wraps FcPatternFormat.format(pat::Pattern, fmt::String=\"%{=fclist}\")See man FcPatternFormat for the format string specification."
},

{
    "location": "#List-1",
    "page": "Readme",
    "title": "List",
    "category": "section",
    "text": "Fontconfig also provides a function list to enumerate all installed fonts. Optionally, a Pattern can be provided to list just matching fonts. The function will return a vector of Patternslist(pat::Pattern=Pattern())"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Fontconfig.@checked_libFontconfig.FcFontSetFontconfig.FcMatchFontFontconfig.FcMatchPatternFontconfig.FcMatchScanFontconfig.FontconfigFontconfig.PatternFontconfig.__init__Fontconfig.bool_attrsFontconfig.depsfileFontconfig.double_attrsFontconfig.evalFontconfig.formatFontconfig.includeFontconfig.integer_attrsFontconfig.jl_libfontconfigFontconfig.listFontconfig.matchFontconfig.string_attrs"
},

]}
