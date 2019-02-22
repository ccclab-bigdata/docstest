var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataArrays.jl-1",
    "page": "Readme",
    "title": "DataArrays.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Latest release: (Image: DataArrays)Documentation: (Image: ) (Image: )The DataArrays package provides the DataArray type for working efficiently with missing data in Julia, based on the missing value from the Missings.jl package.Most Julian arrays cannot contain missing values: only Array{Union{T, Missing}} and more generally Array{>:Missing} can contain missing values.The generic use of heterogeneous Array is discouraged in Julia versions below 0.7 because it is inefficient: accessing any value requires dereferencing a pointer. The DataArray type allows one to work around this inefficiency by providing tightly-typed arrays that can contain values of exactly one type, but can also contain missing values.For example, a DataArray{Int} can contain integers and missing values. We can construct one as follows:da = @data([1, 2, missing, 4])This package used to provide the PooledDataArray type, a variant of DataArray{T} optimized for representing arrays that contain many repetitions of a small number of unique values. PooledDataArray has been deprecated in favor of CategoricalArray or PooledArray."
},

]}
