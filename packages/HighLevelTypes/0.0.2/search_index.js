var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#HighLevelTypes-1",
    "page": "Readme",
    "title": "HighLevelTypes",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov) (Image: Join the chat at https://gitter.im/realopt/Scanner.jl)The goal of HighLevelTypes.jl is to relieve the user from having to answer the question that we often face. Should this be a concrete or abstract type? This question is important because both have their own limitations.For concrete types: Any behavior defined using concrete types can not be inherited.  Sometimes you even don\'t know whether you will have in the future a specialization of your type or not. Take for example the case of Diagonal matrices defined here. Assume someone works with diagonal matrices such that all elements of a matrix are taking only 3 values. It is natural to create a new type that additionally stores those values. But since all the functions were defined for the concrete type Diagonal, it is not possible to reuse this behavior. And as you know, inheriting behavior is much more important than inheriting fields.\nFor abstract types: If there is a field that would naturally fit in the abstract type, its definition needs to be delayed until the definition of the concrete types. This second issue is probably less important than the first one, although for some cases it makes the code really awkward.As a high level language, Julia deserves a high level type. doesn\'t it? "
},

{
    "location": "#What-is-a-high-level-type-?-1",
    "page": "Readme",
    "title": "What is a high level type ?",
    "category": "section",
    "text": "A high level type is an abstraction for two underlying types: one is abstract and one is concrete. The user only defines high level types. By default, the concrete type will be only used for instantiation.@hl struct Person\n    name::String\nend\n    \n@hl struct Developer <: Person\n    salary::Int32\nend\n\n@hl struct SepecializedDeveloper <: Developer\n    language::String\nend\n\nfunction sumsalaries(first::Developer, second::Developer)\n    return first.salary + second.salary\nend\n\nbob = Developer(\"Bob\", 10000)\nbob.name #returns \"Bob\" \nbob.salary #returns 10000\n\nalice = SepecializedDeveloper(\"Alice\", 15000, \"Julia\")    \nalice.name # returns \"Alice\" \nalice.salary # returns 15000    \nalice.language # returns \"Julia\"\n    \nsumsalaries(bob, alice) #returns 25000"
},

{
    "location": "#How-about-performance-?-1",
    "page": "Readme",
    "title": "How about performance ?",
    "category": "section",
    "text": "This is not the best choice for performance-critical code. Using abstract types instead of concrete types may increase the running time. Therefore the package provides the macro @concretify which can be applied on a block to use only the concrete types for all high level types within that block.vec1 = Vector{Developer}()\npush!(vec, bob) # OK\npush!(vec, alice) # OK\n\n@concretify vec2 = Vector{Developer}()\npush!(vec2, bob) # OK\npush!(vec2, alice) # throws MethodError (wrong concrete type for alice)\n````\n\nIn particular, `@concretify` can be used to create concrete types.\njulia @hl struct Job     nbhours::Int     assigneddev::Developer endJob(10, bob) # OK  Job(100, alice) # OK@concretify @hl struct ConcreteJob     nbhours::Int     assigneddev::Developer endConcreteJob(10, bob) # OK ConcreteJob(100, alice) # throws MethodError (wrong concrete type for alice) ````"
},

{
    "location": "#Current-limitations-1",
    "page": "Readme",
    "title": "Current limitations",
    "category": "section",
    "text": "A high level type can not have a tuple as its field (will be fixed soon)."
},

{
    "location": "#Acknowledgment-1",
    "page": "Readme",
    "title": "Acknowledgment",
    "category": "section",
    "text": "This package was inspired by ConcreteAbstractions.jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "HighLevelTypes.@concretifyHighLevelTypes.@hlHighLevelTypes.HighLevelTypesHighLevelTypes._hl_typesHighLevelTypes.createhltypeHighLevelTypes.evalHighLevelTypes.includeHighLevelTypes.maketypesconcreteHighLevelTypes.tuplejoin"
},

]}
