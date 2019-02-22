var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Parameters.jl",
    "title": "Parameters.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#[Parameters.jl](https://github.com/mauro3/Parameters.jl)-1",
    "page": "Parameters.jl",
    "title": "Parameters.jl",
    "category": "section",
    "text": "Breaking news: Julia 0.5 support dropped.This is a package I use to handle numerical-model parameters, thus the name.  However, it should be useful otherwise too.  It has two main features:keyword type constructors with default values, and\nunpacking and packing of composite types and dicts.The keyword-constructor and default-values functionality will probably make it into Julia (# 10146, #533 and #6122) although probably not with all the features present in this package.  I suspect that this package should stay usable & useful even after this change lands in Julia.  Note that keyword functions are currently slow in Julia, so these constructors should not be used in hot inner loops. However, the normal positional constructor is also provided and could be used in performance critical code.NEWS.md keeps tabs on updates."
},

{
    "location": "manual/#",
    "page": "Parameters manual",
    "title": "Parameters manual",
    "category": "page",
    "text": ""
},

{
    "location": "manual/#Parameters-manual-1",
    "page": "Parameters manual",
    "title": "Parameters manual",
    "category": "section",
    "text": "This is a manual by example (examples/ex1.jl)."
},

{
    "location": "manual/#Types-with-default-values-and-keyword-constructors-1",
    "page": "Parameters manual",
    "title": "Types with default values & keyword constructors",
    "category": "section",
    "text": "Create a type which has default values using @with_kw:using Parameters\n\n@with_kw struct PhysicalPara{R}\n    rw::R = 1000.\n    ri::R = 900.\n    L::R = 3.34e5\n    g::R = 9.81\n    cw::R = 4220.\n    day::R = 24*3600.\nendNow the type can be constructed using the default values, or with non-defaults specified with keywords:# Create an instance with the defaults\npp = PhysicalPara()\npp_f32 = PhysicalPara{Float32}() # the type parameter can be chosen explicitly\n# Make one with some non-defaults\npp2 = PhysicalPara(cw=77.0, day= 987.0)\n# Make another one based on the previous one with some modifications\npp3 = PhysicalPara(pp2; cw=.11e-7, rw=100.)\n# the normal positional constructor can also be used\n# (and should be used in hot inner loops)\npp4 = PhysicalPara(1,2,3,4,5,6)To enforce constraints on the values, it\'s possible to use @asserts straight inside the type-def.  (As usual, for mutables these asserts can be violated by updating the fields after type construction.)@with_kw struct PhysicalPara2{R}\n    rw::R = 1000.; @assert rw>0\n    ri::R = 900.\n    @assert rw>ri # Note that the placement of assertions is not\n                  # relevant. (They are moved to the constructor.\nendParameter interdependence is possible:@with_kw struct Para{R<:Real}\n    a::R = 5\n    b::R\n    c::R = a+b\nend\npa = Para(b=7)Often the bulk of fields will have the same type.  To help with this, a default type can be set.  Using this feature, the last example (with additional field d) can be written more compactly as:@with_kw struct Para2{R<:Real} @deftype R\n    a = 5\n    b\n    c = a+b\n    d::Int = 4 # adding a type overrides the @deftype\nend\npa2 = Para2(b=7)\n\n# or more pedestrian\n@with_kw struct Para3 @deftype Float64\n    a = 5\n    b\n    c = a+b\n    d::Int = 4\nend\npa3 = Para3(b=7)Custom inner constructors can be defined as long as:one defining all positional arguments is given\nno zero-positional arguments constructor is defined (as that would clash with the keyword constructor)\nno @asserts (as in above example) are used within the type body.The keyword constructor goes through the inner positional constructor, thus invariants or any other calculation will be honored.@with_kw struct MyS{R}\n    a::R = 5\n    b = 4\n    MyS{R}(a,b) where {R} = (@assert a>b; new(a,b)) #\n    MyS{R}(a) where {R} = MyS{R}(a, a-1) # For this provide your own outer constructor:\nend\nMyS(a::R) where {R} = MyS{R}(a)\n\nMyS{Int}() # MyS(5,4)\nms = MyS(3) # MyS(3,2)\nMyS(ms, b=-1) # MyS(3,-1)\ntry\n    MyS(ms, b=6) # this will fail the assertion\ncatch\nendNote that two of the main reasons to have an inner constructor, assertions and simple calculations, are more easily achieved with @asserts and parameter interdependence.The macro @with_kw defines a show-method which is, hopefully, more informative than the standard one.  For example the printing of the first example is:julia> PhysicalPara()\nPhysicalPara{Float64}\n  rw: Float64 1000.0\n  ri: Float64 900.0\n  L: Float64 334000.0\n  g: Float64 9.81\n  cw: Float64 4220.0\n  day: Float64 86400.0If this show method definition is not desired, for instance because of method re-definition warnings, then use @with_kw_noshow."
},

{
    "location": "manual/#Named-Tuple-Support-1",
    "page": "Parameters manual",
    "title": "Named Tuple Support",
    "category": "section",
    "text": "As mentioned in the README, the @with_kw macro can be used to decorate a named tuple and produce a named tuple constructor with those defaults. Users of Julia v0.6 should be aware of this caveat that prohibits assignments like @with_kw (f = f, x = x). This is a consequence of different scoping rules for keyword arguments in v0.6 and v0.7. Users of v0.6 will also need to explicitly import NamedTuples.jl, since this functionality is not present in that version of base Julia. These named tuples can be defined as such: MyNT = @with_kw (f = x -> x^3, y = 3, z = \"foo\")And the constructors can be used as follows:julia> MyNT(f = x -> x^2, z = :foo)\n(f = #12, y = 3, z = :foo)The constructor is not type-locked:julia> MyNT(f = \"x -> x^3\")\n(f = \"x -> x^3\", y = 3, z = \"foo\")And these named tuples can unpacked in the usual way (see below).julia> @unpack f, y, z = MyNT()\n(f = #7, y = 3, z = \"foo\")\n\njulia> f\n(::#7) (generic function with 1 method)\n\njulia> y\n3\n\njulia> z\n\"foo\"Since the macro operates on a single tuple expression (as opposed to a tuple of assignment expressions),writing @with_kw(x = 1, y = :foo) will return an error suggesting you write @with_kw (x = 1, y = :foo)."
},

{
    "location": "manual/#(Un)pack-macros-1",
    "page": "Parameters manual",
    "title": "(Un)pack macros",
    "category": "section",
    "text": "When working with parameters, or otherwise, it is often convenient to unpack (and pack) some or all of the fields of a type.  This is often the case when passed into a function.The preferred to do this is using the @unpack and @pack macros which are generic and also work with non-@with_kw types, modules, and dictionaries (and can be customized for other types too, see next section).  Continuing with the Para type defined above:function fn2(var, pa::Para)\n    @unpack a, b = pa # equivalent to: a,b = pa.a,pa.b\n    out = var + a + b\n    b = 77\n    @pack pa = b # equivalent to: pa.b = b\n    return out, pa\nend\n\nout, pa = fn1(7, pa)Example with a dictionary:d = Dict{Symbol,Any}(:a=>5.0,:b=>2,:c=>\"Hi!\")\n@unpack a, c = d\na == 5.0 #true\nc == \"Hi!\" #true\n\nd = Dict{Symbol,Any}()\n@pack d = a, c\nd # Dict{Symbol,Any}(:a=>5.0,:c=>\"Hi!\")"
},

{
    "location": "manual/#Customization-of-@unpack-and-@pack-1",
    "page": "Parameters manual",
    "title": "Customization of @unpack and @pack",
    "category": "section",
    "text": "What happens during the (un-)packing of a particular datatype is determined by the functions Parameters.unpack and Parameters.pack!.The Parameters.unpack function is invoked to unpack one entity of some DataType and has signature:unpack(dt::Any, ::Val{field}) -> value of fieldTwo definitions are included in the package to unpack a composite type or a dictionary with Symbol or string keys:@inline unpack{f}(x, ::Val{f}) = getfield(x, f)\n@inline unpack{k}(x::Associative{Symbol}, ::Val{k}) = x[k]\n@inline unpack{S<:AbstractString,k}(x::Associative{S}, ::Val{k}) = x[string(k)]The Parameters.pack! function is invoked to pack one entity into some DataType and has signature:pack!(dt::Any, ::Val{field}, value) -> valueTwo definitions are included in the package to pack into a composite type or into a dictionary with Symbol or string keys:@inline pack!{f}(x, ::Val{f}, val) = setfield!(x, f, val)\n@inline pack!{k}(x::Associative{Symbol}, ::Val{k}, val) = x[k]=val\n@inline pack!{S<:AbstractString,k}(x::Associative{S}, ::Val{k}, val) = x[string(k)]=valMore methods can be added to unpack and pack! to allow for specialized packing of datatypes."
},

{
    "location": "manual/#The-type-specific-(un)pack-macros-(somewhat-dangerous)-1",
    "page": "Parameters manual",
    "title": "The type-specific (un)pack macros (somewhat dangerous)",
    "category": "section",
    "text": "The @with_kw macro automatically produces type-specific (un-)pack macros of form @unpack_TypeName and @pack!_TypeName which unpack/pack all fields:function fn(var, pa::Para)\n    @unpack_Para pa # the macro is constructed during the @with_kw\n                    # and called @unpack_*\n    out = var + a + b\n    b = 77\n    @pack!_Para pa # only works with mutables\n    return out, pa\nend\n\nout, pa = fn(7, pa)However, note that the (un-)packing macros which unpack all fields have a few pitfalls, as changing the type definition will change what local variables are available in a function using @unpack_*.  Examples:adding a field pi to a type would hijack Base.pi usage in any function using @unpack_*\nthe @unpack_* will shadow an input argument of the function with the same name as a type-fieldname.  This I found very perplexing at times.Thus, in general, it is probably better to use the @(un)pack macros instead."
},

{
    "location": "api/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api/#Parameters.Parameters",
    "page": "API",
    "title": "Parameters.Parameters",
    "category": "module",
    "text": "This is a package I use to handle numerical-model parameters, thus the name. However, it should be useful otherwise too. It has two main features:\n\nkeyword type constructors with default values, and\nunpacking and packing of composite types and dicts.\n\nThe macro @with_kw which decorates a type definition to allow default values and a keyword constructor:\n\njulia> using Parameters\n\njulia> @with_kw struct A\n           a::Int = 6\n           b::Float64 = -1.1\n           c::UInt8\n       end\n\njulia> A(c=4)\nA\n  a: 6\n  b: -1.1\n  c: 4\n\nUnpacking is done with @unpack (@pack is similar):\n\nstruct B\n    a\n    b\n    c\nend\n@unpack a, c = B(4,5,6)\n# is equivalent to\nBB = B(4,5,6)\na = BB.a\nc = BB.c\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.reconstruct-Union{Tuple{T}, Tuple{T,Any}} where T",
    "page": "API",
    "title": "Parameters.reconstruct",
    "category": "method",
    "text": "Make a new instance of a type with the same values as the input type except for the fields given in the AbstractDict second argument or as keywords.  Works for types, Dicts, and NamedTuples.\n\nNote: this is not very performant.  Check Setfield.jl for a faster & nicer implementation.\n\njulia> struct A\n           a\n           b\n       end\n\njulia> a = A(3,4)\nA(3, 4)\n\njulia> b = reconstruct(a, b=99)\nA(3, 99)\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.type2dict-Tuple{Any}",
    "page": "API",
    "title": "Parameters.type2dict",
    "category": "method",
    "text": "Transforms a type-instance into a dictionary.\n\njulia> type T\n           a\n           b\n       end\n\njulia> type2dict(T(4,5))\nDict{Symbol,Any} with 2 entries:\n  :a => 4\n  :b => 5\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.with_kw",
    "page": "API",
    "title": "Parameters.with_kw",
    "category": "function",
    "text": "This function is called by the @with_kw macro and does the syntax transformation from:\n\n@with_kw struct MM{R}\n    r::R = 1000.\n    a::R\nend\n\ninto\n\nstruct MM{R}\n    r::R\n    a::R\n    MM{R}(r,a) where {R} = new(r,a)\n    MM{R}(;r=1000., a=error(\"no default for a\")) where {R} = MM{R}(r,a) # inner kw, type-paras are required when calling\nend\nMM(r::R,a::R) where {R} = MM{R}(r,a) # default outer positional constructor\nMM(;r=1000,a=error(\"no default for a\")) =  MM(r,a) # outer kw, so no type-paras are needed when calling\nMM(m::MM; kws...) = reconstruct(mm,kws)\nMM(m::MM, di::Union{AbstractDict, Tuple{Symbol,Any}}) = reconstruct(mm, di)\nmacro unpack_MM(varname)\n    esc(quote\n    r = varname.r\n    a = varname.a\n    end)\nend\nmacro pack_MM(varname)\n    esc(quote\n    varname = Parameters.reconstruct(varname,r=r,a=a)\n    end)\nend\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.@pack-Tuple{Any}",
    "page": "API",
    "title": "Parameters.@pack",
    "category": "macro",
    "text": "Packs variables into a composite type or a Dict{Symbol}\n\n@pack dict_or_typeinstance = a, b, c\n\nExample with dict:\n\na = 5.0\nc = \"Hi!\"\nd = Dict{Symbol,Any}()\n@pack d = a, c\nd # Dict{Symbol,Any}(:a=>5.0,:c=>\"Hi!\")\n\nExample with type:\n\na = 99\nc = \"HaHa\"\nmutable struct A; a; b; c; end\nd = A(4,7.0,\"Hi\")\n@pack d = a, c\nd.a == 99 #true\nd.c == \"HaHa\" #true\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.@unpack-Tuple{Any}",
    "page": "API",
    "title": "Parameters.@unpack",
    "category": "macro",
    "text": "Unpacks fields/keys from a composite type or a Dict{Symbol} into variables\n\n@unpack a, b, c = dict_or_typeinstance\n\nExample with dict:\n\nd = Dict{Symbol,Any}(:a=>5.0,:b=>2,:c=>\"Hi!\")\n@unpack a, c = d\na == 5.0 #true\nc == \"Hi!\" #true\n\nExample with type:\n\nstruct A; a; b; c; end\nd = A(4,7.0,\"Hi\")\n@unpack a, c = d\na == 4 #true\nc == \"Hi\" #true\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.@with_kw-Tuple{Any}",
    "page": "API",
    "title": "Parameters.@with_kw",
    "category": "macro",
    "text": "Macro which allows default values for field types and a few other features.\n\nBasic usage:\n\n@with_kw struct MM{R}\n    r::R = 1000.\n    a::Int = 4\nend\n\nFor more details see manual.\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.@with_kw_noshow-Tuple{Any}",
    "page": "API",
    "title": "Parameters.@with_kw_noshow",
    "category": "macro",
    "text": "As @with_kw but does not define a show method to avoid annoying redefinition warnings.\n\n@with_kw_noshow struct MM{R}\n    r::R = 1000.\n    a::Int = 4\nend\n\nFor more details see manual.\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.pack!",
    "page": "API",
    "title": "Parameters.pack!",
    "category": "function",
    "text": "This function is invoked to pack one entity into some DataType and has signature:\n\npack!(dt::Any, ::Val{field}, value) -> value\n\nNote that this means the only symbols or immutable field-descriptors are allowed, as they are used as type parameter in Val.\n\nTwo definitions are included in the package to pack into a composite type or into a dictionary with Symbol or string keys:\n\n@inline pack!{f}(x, ::Val{f}, val) = setfield!(x, f, val)\n@inline pack!{k}(x::AbstractDict{Symbol}, ::Val{k}, val) = x[k]=val\n@inline pack!{S<:AbstractString,k}(x::AbstractDict{S}, ::Val{k}, val) = x[string(k)]=val\n\nMore methods can be added to allow for specialized packing of other datatypes.\n\nSee also unpack.\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.unpack",
    "page": "API",
    "title": "Parameters.unpack",
    "category": "function",
    "text": "This function is invoked to unpack one field/entry of some DataType dt and has signature:\n\nunpack(dt::Any, ::Val{field}) -> value of field\n\nThe field is the symbol of the assigned variable.\n\nThree definitions are included in the package to unpack a composite type or a dictionary with Symbol or string keys:\n\n@inline unpack{f}(x, ::Val{f}) = getfield(x, f)\n@inline unpack{k}(x::AbstractDict{Symbol}, ::Val{k}) = x[k]\n@inline unpack{S<:AbstractString,k}(x::AbstractDict{S}, ::Val{k}) = x[string(k)]\n\nMore methods can be added to allow for specialized unpacking of other datatypes.\n\nSee also pack!.\n\n\n\n\n\n"
},

{
    "location": "api/#Parameters.with_kw_nt-Tuple{Any,Any}",
    "page": "API",
    "title": "Parameters.with_kw_nt",
    "category": "method",
    "text": "Do the with-kw stuff for named tuples.\n\n\n\n\n\n"
},

{
    "location": "api/#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "Modules = [Parameters]"
},

]}
