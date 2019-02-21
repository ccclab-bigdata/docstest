abstract type AbstractUniqueIndex <: AbstractIndex; end

struct UniqueIndex <: AbstractUniqueIndex; end

accelerate(a, ::Type{UniqueIndex}) = AcceleratedArray(a, UniqueIndex())

Base.unique(a::AcceleratedArray{<:Any, <:Any, <:Any, <:AbstractUniqueIndex}) = a
