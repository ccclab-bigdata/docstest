var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: AutoHashEquals) (Image: AutoHashEquals)"
},

{
    "location": "#AutoHashEquals-1",
    "page": "Readme",
    "title": "AutoHashEquals",
    "category": "section",
    "text": "A macro to add == and hash() to composite types (ie struct and mutable struct blocks).For example:@auto_hash_equals mutable struct Foo\n    a::Int\n    b\nendbecomesmutable struct Foo\n    a::Int\n    b\nend\nBase.hash(a::Foo, h::UInt) = hash(a.b, hash(a.a, hash(:Foo, h)))\nBase.(:(==))(a::Foo, b::Foo) = isequal(a.b, b.b) && isequal(a.a, b.a) && trueWherewe use isequal() because we want to match Inf values, etc.\nwe include the type in the hash so that different types with the same contents don\'t collide\nthe type and true make it simple to generate code for empty records\nthe Base module is explicitly used so that you don\'t need to import it"
},

{
    "location": "#Background-1",
    "page": "Readme",
    "title": "Background",
    "category": "section",
    "text": "Julia has two composite types: value types, defined with struct, and record types, defined with mutable struct.Value types are intended for compact, immutable objects.  They are stored on the stack, passed by value, and the default hash and equality are based on the literal bits in memory.Record types are allocated on the heap, are passed by reference, and the default hash and equality are based on the pointer value (the data address).When you embed a record type in a value type, then the pointer to the record type becomes part of the value type, and so is included in equality and hash.Given the above, it is often necessary to define hash and equality for composite types.  Particularly when record types are used (directly, or in a value type), and when records with the same contents are semantically equal.A common way to do this is to define the hash as a combination of the hashes of all the fields.  Similarly, equality is often defined as equality of all fields.This macro automates this common approach."
},

{
    "location": "#Warnings-1",
    "page": "Readme",
    "title": "Warnings",
    "category": "section",
    "text": "If you use this macro for a mutable type, then the hash depends on the contents of that type, so changing the contents changes the hash.  Such types should not be stored in a hash table (Dict) and then mutated, because the objects will be \"lost\" (as the hash table assumes that hash is constant).More generally, this macro is only useful for mutable types when they are used as immutable records."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Thanks to Michael Hatherly, Yichao Yu, and Carlo Lucibello."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AutoHashEquals.@auto_hash_equalsAutoHashEquals.AutoHashEqualsAutoHashEquals.UnpackExceptionAutoHashEquals.auto_equalsAutoHashEquals.auto_hashAutoHashEquals.evalAutoHashEquals.includeAutoHashEquals.unpack_name"
},

]}
