var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LRUCache.jl-1",
    "page": "Readme",
    "title": "LRUCache.jl",
    "category": "section",
    "text": "(Image: Build Status)Provides an implementation of a Least Recently Used (LRU) Cache for Julia.An LRU Cache is a useful associative data structure that has a set maximum size. Once that size is reached, the least recently used items are removed first."
},

{
    "location": "#Interface-1",
    "page": "Readme",
    "title": "Interface",
    "category": "section",
    "text": "LRU supports the standard Associative interface. Some examples of common operations are shown below:Creationlru = LRU{K, V}([, maxsize=100])Create an LRU Cache with maximum size maxsize. If maxsize is not provided, a default of 100 is used.Add an item to the cachesetitem!(lru, key, value)\nlru[key] = valueLookup an item in the cachegetitem(lru, key)\nlru[key]Change the maxsizeresize!(lru, size)Empty the cacheempty!(lru)"
},

{
    "location": "#Caching-Use-1",
    "page": "Readme",
    "title": "Caching Use",
    "category": "section",
    "text": "To effectively use LRU as a cache, several functions and macros have been defined that allow for easy checking if an item is present, and if not quickly calculating a default."
},

{
    "location": "#get!(lru::LRU,-key,-default)-1",
    "page": "Readme",
    "title": "get!(lru::LRU, key, default)",
    "category": "section",
    "text": "Returns the value stored in lru for key if present. If not, stores key => default, and returns default."
},

{
    "location": "#get!(default::Callable,-lru::LRU,-key)-1",
    "page": "Readme",
    "title": "get!(default::Callable, lru::LRU, key)",
    "category": "section",
    "text": "Like above, except if key is not present, stores key => default(), and returns the result. This is intended to be used in do block syntax:get!(lru, key) do\n   ...\nend"
},

{
    "location": "#@get!(lru::LRU,-key,-default)-1",
    "page": "Readme",
    "title": "@get!(lru::LRU, key, default)",
    "category": "section",
    "text": "The do block syntax of get! is nice, but can be slow due to how Julia currently handles anonymous functions. The @get! macro is an attempt to get around this issue. It takes 3 parameters: the cache, a key to lookup, and a default.  Note that as this is handled with meta-programming, the default can be anything that can be set as the right-hand-side of an assignment. Example.const lru = LRU{Float64, Int}()\n\n_foo(a::Float64) = ...    # Some long-running calculation that returns an Int\n\nfunction foo(a::Float64)\n    @get! lru a _foo(a)\nendThis expands (roughly) to:function foo(a::Float64)\n    return begin\n        if haskey(lru, a)\n            value = lru[a]\n        else\n            value = _foo(a)\n            lru[a] = value\n        end\n        value\n    end\nendThe same can be done with a constant default value, or a begin block:const lru = LRU{Int, Int}()\n\nfunction fib(a::Int)\n    @get! lru a begin\n        if a < 2\n            a\n        else\n            fib(a - 1) + fib(a - 2)\n        end\n    end\nend"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Commonly, you may have some long running function that sometimes gets called with the same parameters more than once. As such, it may benefit from cacheing the results.Here\'s our example, long running calculation:function foo(a::Float64, b::Float64)\n    sleep(100)\n    result = a * b\nendAs this function requires more than one parameter, we need a cache from (Float64, Float64) to Float64. A cached version is then:const lru = LRU{(Float64, Float64), Float64}()\n\nfunction cached_foo(a::Float64, b::Float64)\n    @get! lru (a, b) foo(a, b)\nend"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LRUCache.@get!LRUCache.LRULRUCache.LRUCacheLRUCache.LRUListLRUCache.LRUNodeLRUCache.__MAXCACHE__LRUCache.evalLRUCache.includeLRUCache.move_to_front!LRUCache.rotate!"
},

]}
