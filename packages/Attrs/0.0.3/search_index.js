var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Attrs-1",
    "page": "Readme",
    "title": "Attrs",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)Give Attribtures the treatment they deserve: use dynamic dispatch to implement an extensible mechanism for user provided attributes."
},

{
    "location": "#Background-1",
    "page": "Readme",
    "title": "Background",
    "category": "section",
    "text": "Julia 0.7+ makes it possible to overload property access via Base.getproperty and Base.setproperty!, and uses Symbols to name a property. This makes it easier to use in dynamic scenarios (e.g. Python interoperability), but has one huge drawback: all the coded related to properties for a single type has to be in one single place and can thus not be extended. This is not the Julian way of using dynamic dispatch to get the usual extensibility along multiple dimensions we know and love!"
},

{
    "location": "#Performance:-Base.getproperty-and-Inlining-1",
    "page": "Readme",
    "title": "Performance: Base.getproperty and Inlining",
    "category": "section",
    "text": "There is another problem with getproperty/setproperty this package tries to adress: performance. Consider this code:struct Foo\n    x::Int\nend\n\nfunction compute_y(a::Foo)\n    return a.x * 2 + 1\nend\n\n@inline function Base.getproperty(a::Foo, f::Symbol)\n    (f === :x) && return getfield(a, :x)\n    (f === :y) && return compute_y(a)\n    error(\"type $(typeof(a)) has no field $f\")\nend\n\nf(a::Foo) = a.y\n\ncode_native(f, (Foo,))\n# Output:\n#  .text\n#  [...]\n#  pushq    %rax\n#  movabsq  $julia_getproperty_36741, %rax\n#  movabsq  $116219542556536, %rsi  # imm = 0x69B3788CCF78\n#  callq    *%rax\n#  [...]\n#  leaq     1(%rax,%rax), %rax\n#  popq     %rcx\n#  retq\n#  nop Why is getproperty not inlined? The problem is getproperty calling compute_y which itself calls getproperty (after lowering a.x). So the compiler rightfully refuses to do recursive inlining (there are ways around it, e.g. partial inlining, but lets appreciate what we have!). One fix is to replace a.x with getfield(a, :x) to break the cycle in the call graph. This package provides a similar solution via the @literalattrs macro. This macro replaces the property access with literal_getattr and literal_setattr!, to avoid the cyclic call graph.using Attrs\n\n@defattrs Foo\n\n@literalattrs function compute_y(a::Foo)\n    return a.x * 2 + 1\nend\n\n@inline Attrs.getattr(a::Foo, ::Attr{:y}) = compute_y(a)\n\ncode_native(f, (Foo, ))\n# Output:\n#    .text\n#    movq    (%rdi), %rax\n#    leaq    1(%rax,%rax), %rax\n#    retq\n#    nopl    (%rax)Now compute_y(a) has been inlined!"
},

{
    "location": "#How-to-use-1",
    "page": "Readme",
    "title": "How to use",
    "category": "section",
    "text": "First define your type as usual:struct MyType\n   [...]\nendMake your type opt in to the Attrs package (after using Attrs):@defattrs MyType\n@defattrs MyOtherType{X, Y} where {X<:AbstractFloat, Y<:Integer}Define your attributes, make sure all gettatr/settattr! methods of your type use the @literalattrs macro to make inlining possible.@inline @literalattrs Attrs.getattr(x::MyType, ::Attr{:foo}) = [...]\n\n@inline @literalattrs Attrs.setattr!(x::MyType, ::Attr{:foo}, y) = [...]Now just use your type as usual: f(x::MyType) = x.y no @literalattrs is necessary at this point!"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Attrs.@defattrsAttrs.@literalattrsAttrs.AttrAttrs.AttrsAttrs.NoSuchAttrAttrs.attrnamesAttrs.deepliteralattrsAttrs.default_getpropertyAttrs.default_literal_getattrAttrs.default_literal_setattr!Attrs.default_setproperty!Attrs.evalAttrs.getattrAttrs.includeAttrs.literal_getattrAttrs.literal_setattr!Attrs.match_callAttrs.match_getpropertyAttrs.match_setproperty!Attrs.setattr!Attrs.trygetfieldAttrs.trysetfield!"
},

]}
