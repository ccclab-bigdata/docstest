var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FieldDefaults-1",
    "page": "Readme",
    "title": "FieldDefaults",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)A lightweight package that adds keyword defaults to (the also lightweight!) FieldMetadata.jl.The @default_kw macro adds a keyword arg constructor to a type:@default_kw struct MyStruct\n    foo::Int | 1\n    bar::Int | 2\nend\n\njulia> m = MyStruct()\njulia> m.foo\n1\n\njulia> m.bar\n2It has a similar outcome (though entirely difference mechanism) to Parameters.jl. It has some limitations: presently it only adds an outside constructor, and defaults can\'t use the other default values.But it has some other nice features. Defaults can be added to a struct that has already been defined by prefixing re to the macro name, as in FieldMetadata.jl:struct SomeoneElseDefined\n    foo::Int\n    bar::Int\nend\n\n@redefault struct SomeoneElseDefined\n    foo | 7\n    bar | 19\nendEach default value can be overridden by declaring a new function:default(::YourType, ::Type{Val{:fieldname}}) = 99The process of creating defaults can be also overriden by writing methods of get_default(), to change defauls for all fields at once, to say, swap out all defaults for a second default field, or optionally add units from @units metadata. Add units metadata when you need it (and you have allready attached it to YourType with FieldMetadata.jl):get_default(t::YourType) = default(t) .* units(t)Or change an individual fields using the original default value:get_default(t::YourType, x::Val{:fieldname}) = default(t, x) * 2Extra metadata fields are easy to add to a struct at definition time or afterwards, using a @metadata macro.Default values of single structs or more complex composite types can be flattened to tuples or vectors using Flatten.jl. This can be combined with fieldnames, other metadata and current field values for generating tabular displays, or other uses."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FieldDefaults.@default_kwFieldDefaults.@redefault_kwFieldDefaults.FieldDefaultsFieldDefaults.default_kwFieldDefaults.evalFieldDefaults.get_defaultFieldDefaults.get_typeFieldDefaults.include"
},

]}
