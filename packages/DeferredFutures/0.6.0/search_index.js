var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DeferredFutures-1",
    "page": "Readme",
    "title": "DeferredFutures",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov)A DeferredFuture is like a regular Julia Future, but is initialized when put! is called on it. This means that the data in the DeferredFuture lives with the process the data was created on. The process the DeferredFuture itself lives on never needs to fetch the data to its process. This is useful when there is a lightweight controller process which handles scheduling work on and transferring data between multiple machines."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Use a DeferredFuture as you would a Future.julia> DeferredFuture()\nDeferredFuture at (1,1,1)\n\njulia> DeferredFuture(3)\nDeferredFuture at (3,1,2)You can also use a DeferredChannel as you would a RemoteChannel.julia> DeferredChannel(()->Channel{Int}(10), 4)\nDeferredChannel(#1) at (4,1,3)\n\njulia> DeferredChannel(4)\nDeferredChannel(DeferredFutures.#2) at (4,1,4)\n\njulia> DeferredChannel(4, 128; content=Int)\nDeferredChannel(DeferredFutures.#2) at (4,1,5)Note that DeferredChannel() will create a RemoteChannel with RemoteChannel(()->Channel{Any}(1), myid()) by default.Furthermore, @defer can be used when creating a Future or RemoteChannel to create their deferred counterparts.julia> @defer Future()\nDeferredFuture at (1,1,6)\n\njulia> @defer RemoteChannel(()->Channel{Int}(10))\nDeferredChannel(#3) at (1,1,7)Note that DeferredFuture(n) does not control where the data lives, only where the RemoteChannel which refers to the data lives."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "DeferredFutures.jl is provided under the MIT \"Expat\" License."
},

{
    "location": "autodocs/#DeferredFutures.@defer",
    "page": "Docstrings",
    "title": "DeferredFutures.@defer",
    "category": "macro",
    "text": "@defer Future(...)\n@defer RemoteChannel(...)\n\n@defer transforms a Future or RemoteChannel construction into a \'DeferredFuture\' or \'DeferredChannel\' construction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DeferredFutures.DeferredChannel",
    "page": "Docstrings",
    "title": "DeferredFutures.DeferredChannel",
    "category": "type",
    "text": "DeferredChannel(pid::Integer=myid(), num::Integer=1; content::DataType=Any) -> DeferredChannel\n\nCreate a DeferredChannel with a reference to a remote channel of a specific size and type. f() is a function that when executed on pid must return an implementation of an AbstractChannel.\n\nThe default pid is the current process.\n\n\n\n\n\nDeferredChannel(pid::Integer=myid(), num::Integer=1; content::DataType=Any) -> DeferredChannel\n\nCreate a DeferredChannel. The default pid is the current process. When initialized, the DeferredChannel will reference a Channel{content}(num) on process pid.\n\nNote that the data in the DeferredChannel will still be located wherever the first piece of data was put! from. The pid argument controls where the outermost reference to that data is located.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DeferredFutures.DeferredFuture",
    "page": "Docstrings",
    "title": "DeferredFutures.DeferredFuture",
    "category": "type",
    "text": "DeferredFuture(pid::Integer=myid()) -> DeferredFuture\n\nCreate a DeferredFuture on process pid. The default pid is the current process.\n\nNote that the data in the DeferredFuture will still be located wherever it was put! from. The pid argument controlls where the outermost reference to that data is located.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DeferredFutures.DeferredRemoteRef",
    "page": "Docstrings",
    "title": "DeferredFutures.DeferredRemoteRef",
    "category": "type",
    "text": "DeferredRemoteRef is the common supertype of DeferredFuture and DeferredChannel and is the counterpart of Distributed.AbstractRemoteRef.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DeferredFutures.finalize_ref",
    "page": "Docstrings",
    "title": "DeferredFutures.finalize_ref",
    "category": "function",
    "text": "finalize_ref(ref::DeferredRemoteRef)\n\nThis finalizer is attached to both DeferredFuture and DeferredChannel on construction and finalizes the inner and outer RemoteChannels.\n\nFor more information on finalizing remote references, see the Julia manual[1].\n\n[1]: Remote References and Distributed Garbage Collection\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DeferredFutures.reset!",
    "page": "Docstrings",
    "title": "DeferredFutures.reset!",
    "category": "function",
    "text": "reset!{T<:DeferredRemoteRef}(ref::T) -> T\n\nRemoves any data from the DeferredRemoteRef and allows it to be reinitialized with data.\n\nReturns the input DeferredRemoteRef.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DeferredFutures.@deferDeferredFutures.DeferredChannelDeferredFutures.DeferredFutureDeferredFutures.DeferredFuturesDeferredFutures.DeferredRemoteRefDeferredFutures.evalDeferredFutures.finalize_refDeferredFutures.includeDeferredFutures.reset!"
},

]}
