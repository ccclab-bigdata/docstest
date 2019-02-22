var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Mixers-1",
    "page": "Readme",
    "title": "Mixers",
    "category": "section",
    "text": "<img src=\"https://www.giraffescanbake.com/wp-content/uploads/2016/12/Pomegranate-Martini3.gif\" data-canonical-src=\"https://www.giraffescanbake.com/wp-content/uploads/2016/12/Pomegranate-Martini3.gif\" width=\"300\" height=\"420\" />(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Mixers.jl provides mixin macros, for writing, well, \"DRY\" code. Mixers useful when types share a subset of fields but have no common concrete type, or adding one would add unnecessary, annoying nesting. Generally it shouldn\'t be a replacement for regular composition!The @mix and @premix macros generate custom macros that can add fields to any struct, preserving parametric types and macros such as @with_kw from Parameters.jl. @mix and @premix macros can also be applied to @mix macros, allowing  a kind of mixin inheritance.@premix inserts fields and types at the start of the definition:@premix struct Fruitjuice{P,B}\n    pommegranite::P\n    orange::B\nend\n\n@Fruitjuice struct Punch{L}\n    vodka::L\nend\n\njulia> fieldnames(Punch)\n\n3-element Array{Symbol,1}:\n :pommegranite\n :orange      \n :vodka       \n\njulia> punch = Punch(20, 150, 2.5)\n               \nPunch{Int64,Int64,Float64}(20, 15, 12.5) @mix puts them at the end:using Parameters\nusing Unitful\n\n@mix @with_kw struct Soda{J}\n    soda::J = 2u\"L\"\nend\n\n@Soda struct Drink{M,B}\n    lemon::M = 0.4u\"kg\"\n    lime::B = 0.2u\"kg\"\nend\n\njulia> fieldnames(Drinks)\n\n3-element Array{Symbol,1}:\n :lemon\n :lime     \n :soda    Notice how we added that @with_kw to Soda but left it off Drinks? Inheritable macro chains are a thing!The only thing @mix does not preserve is parent abstract types, like  @mix struct Lemonade <: AbstractDrink. These can\'t really be mixed in as types  can only have one parent, so we keep thing simple and add type inheritance on the actual  struct. If there is anything else @mix ignores that it shouldn\'t, open an issue.One gotcha is the need to put empty curly braces on a struct with no parametric fields, if it is going to have parametric fields after @mix or @premix. This keeps Mixers.jl code simple, and is a clear visual reminder  that the struct is actually parametrically typed:@Fruitjuice struct Juice{} endLastly, @pour is a basic version of @mix. It generates simple macros that insert lines of code.  It doesn\'t have to be used with structs:@pour milk begin\n    \"Yum\"\nend\n\ntaste() = @milk\n\njulia> taste()                                                                      \n\"Yum\""
},

{
    "location": "autodocs/#Mixers.@mix",
    "page": "Docstrings",
    "title": "Mixers.@mix",
    "category": "macro",
    "text": "Generates a mixin macro that preserve parametric types. Fields and parametric types are appended to the struct. Identical parametric types are merged.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mixers.@pour",
    "page": "Docstrings",
    "title": "Mixers.@pour",
    "category": "macro",
    "text": "Generates simple macros for inserting any lines anywhere.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mixers.@premix",
    "page": "Docstrings",
    "title": "Mixers.@premix",
    "category": "macro",
    "text": "Just like @mix but generated macro insert fields and types at the start of the definition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Mixers.@mixMixers.@pourMixers.@premixMixers.MixersMixers.chained_macrosMixers.chained_macros!Mixers.defmacroMixers.evalMixers.firstheadMixers.includeMixers.mergefieldsMixers.mergetypesMixers.mix"
},

]}
