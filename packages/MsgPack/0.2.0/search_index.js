var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MsgPack-1",
    "page": "Readme",
    "title": "MsgPack",
    "category": "section",
    "text": "(Image: Build Status)(Image: Build status)(Image: Coverage Status)(Image: codecov.io)Provides basic support for the msgpack format.julia> import MsgPack\n\njulia> MsgPack.pack(\"hi\")\n3-element Array{Uint8,1}:\n 0xa2\n 0x68\n 0x69\n\njulia> a = MsgPack.pack([1,2,\"hi\"])\n6-element Array{Uint8,1}:\n 0x93\n 0x01\n 0x02\n 0xa2\n 0x68\n 0x69\n\njulia> MsgPack.unpack(MsgPack.pack(4.5))\n4.5\n\njulia> f = open(\"in.mp\")\njulia> MsgPack.unpack(f)\n\"hello\"\n\njulia> f2 = open(\"out.mp\", \"w\")\njulia> MsgPack.pack(f2, [1,2,\"hi\"])\n\n\nNOTE: The standard method for encoding integers in msgpack is to use the most compact representation possible, and to encode negative integers as signed ints and non-negative numbers as unsigned ints.For compatibility with other implementations, I\'m following this convention.  On the unpacking side, every integer type becomes an Int64 in Julia, unless it doesn\'t fit (ie. values greater than 2^63 are unpacked as Uint64).I might change this at some point, and/or provide a way to control the unpacked types."
},

{
    "location": "#The-Extension-Type-1",
    "page": "Readme",
    "title": "The Extension Type",
    "category": "section",
    "text": "The MsgPack spec defines the extension type to be a tuple of (typecode, bytearray) where typecode is an application-specific identifier for the data in bytearray. MsgPack.jl provides support for the extension type through the Ext immutable.It is defined like sostruct Ext\n    typecode::Int8\n    data::Vector{Uint8}\nendand used like thisjulia> a = [0x34, 0xff, 0x76, 0x22, 0xd3, 0xab]\n6-element Array{UInt8,1}:\n 0x34\n 0xff\n 0x76\n 0x22\n 0xd3\n 0xab\n\njulia> b = Ext(22, a)\nMsgPack.Ext(22,UInt8[0x34,0xff,0x76,0x22,0xd3,0xab])\n\njulia> p = pack(b)\n9-element Array{UInt8,1}:\n 0xc7\n 0x06\n 0x16\n 0x34\n 0xff\n 0x76\n 0x22\n 0xd3\n 0xab\n\njulia> c = unpack(p)\nMsgPack.Ext(22,UInt8[0x34,0xff,0x76,0x22,0xd3,0xab])\n\njulia> c == b\ntrueMsgPack reserves typecodes in the range [-128, -1] for future types specified by the MsgPack spec. MsgPack.jl enforces this when creating an Ext but if you are packing an implementation defined extension type (currently there are none) you can pass impltype=true.julia> Ext(-43, Uint8[1, 5, 3, 9])\nERROR: MsgPack Ext typecode -128 through -1 reserved by implementation\n in call at /Users/sean/.julia/v0.4/MsgPack/src/MsgPack.jl:48\n\njulia> Ext(-43, Uint8[1, 5, 3, 9], impltype=true)\nMsgPack.Ext(-43,UInt8[0x01,0x05,0x03,0x09])"
},

{
    "location": "#Serialization-1",
    "page": "Readme",
    "title": "Serialization",
    "category": "section",
    "text": "MsgPack.jl also defines the extserialize and extdeserialize convenience functions. These functions can turn an arbitrary object into an Ext and vice-versa.julia> mutable struct Point{T}\n        x::T\n        y::T\n       end\n\njulia> r = Point(2.5, 7.8)\nPoint{Float64}(2.5,7.8)\n\njulia> e = MsgPack.extserialize(123, r)\nMsgPack.Ext(123,UInt8[0x11,0x01,0x02,0x05,0x50,0x6f,0x69,0x6e,0x74,0x23  …  0x40,0x0e,0x33,0x33,0x33,0x33,0x33,0x33,0x1f,0x40])\n\njulia> s = MsgPack.extdeserialize(e)\n(123,Point{Float64}(2.5,7.8))\n\njulia> s[2]\nPoint{Float64}(2.5,7.8)\n\njulia> r\nPoint{Float64}(2.5,7.8)Since these functions use serialize under the hood they are subject to the following caveat.In general, this process will not work if the reading and writing are done by different versions of Julia, or an instance of Julia with a different system image."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MsgPack.ARR_16MsgPack.ARR_32MsgPack.ARR_FMsgPack.BIN_16MsgPack.BIN_32MsgPack.BIN_8MsgPack.DISPATCHMsgPack.EXT_16MsgPack.EXT_32MsgPack.EXT_8MsgPack.EXT_FMsgPack.ExtMsgPack.FALSEMsgPack.FLOAT_32MsgPack.FLOAT_64MsgPack.INT_16MsgPack.INT_32MsgPack.INT_64MsgPack.INT_8MsgPack.INT_FNMsgPack.INT_FPMsgPack.MAP_16MsgPack.MAP_32MsgPack.MAP_FMsgPack.MsgPackMsgPack.NILMsgPack.STR_16MsgPack.STR_32MsgPack.STR_8MsgPack.STR_FMsgPack.TRUEMsgPack.UINT_16MsgPack.UINT_32MsgPack.UINT_64MsgPack.UINT_8MsgPack.UNUSEDMsgPack.evalMsgPack.extdeserializeMsgPack.extserializeMsgPack.includeMsgPack.packMsgPack.readiMsgPack.readnMsgPack.readu64MsgPack.unpackMsgPack.unpack_arrMsgPack.unpack_binMsgPack.unpack_extMsgPack.unpack_mapMsgPack.unpack_strMsgPack.wh"
},

]}
