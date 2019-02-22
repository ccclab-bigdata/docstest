var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LittleEndianBase128.jl-1",
    "page": "Readme",
    "title": "LittleEndianBase128.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)Little Endian Base 128 (LEB128) encoding and decoding module for the Julia programming language"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "LEB128 or Little Endian Base 128 is a form of variable-length code compression used to store an arbitrarily large integer in a small number of bytes. There are 2 versions of LEB128: unsigned LEB128 and signed LEB128. The decoder must know whether the encoded value is unsigned LEB128 or signed LEB128."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "At the Julia prompt, type:julia> Pkg.add(\"LittleEndianBase128\")"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using LittleEndianBase128\n\njulia> x = rand(-100:100, 3, 3)\n3×3 Array{Int64,2}:\n -95   9  -76\n -71  -2   60\n  43  57   14\n\njulia> y = encode(x)\n12-element Array{UInt8,1}:\n 0xbd\n 0x01\n 0x8d\n 0x01\n 0x56\n 0x12\n 0x03\n 0x72\n 0x97\n 0x01\n 0x78\n 0x1c\n\njulia> z = reshape(decode(y, Int8), 3, 3)\n3×3 Array{Int64,2}:\n -95   9  -76\n -71  -2   60\n  43  57   14\n\njulia> z = reshape(decodesigned(y), 3, 3)\n3×3 Array{Int64,2}:\n -95   9  -76\n -71  -2   60\n  43  57   14\n\njulia> z = reshape(decode(y), 3, 3)\n3×3 Array{UInt64,2}:\n 0x00000000000000bd  0x0000000000000012  0x0000000000000097\n 0x000000000000008d  0x0000000000000003  0x0000000000000078\n 0x0000000000000056  0x0000000000000072  0x000000000000001cNote that the encoded array is 1-D because the length of each encoded element is not fixed, so a uniform array shaping is not possible.  This is the tradeoff of getting a large compression factor. Consequently when decoding, you\'ll need to reshape the output back to the original shape, because no shape information is retained within the encoded data.Also notice that the final decode command assumed that the output is unsigned, so it produced incorrect output. If you have encoded signed data that you wish to decode, then you need to call decodesigned or decode(::Array{UInt8,1}, ::DataType) with an appropriate signed data type passed in the second argument."
},

{
    "location": "#Getting-Help-1",
    "page": "Readme",
    "title": "Getting Help",
    "category": "section",
    "text": "For help, file an issue on the bug tracker or email one of the authors. Third party help is welcome and can be contributed through pull requests."
},

{
    "location": "#Authors-1",
    "page": "Readme",
    "title": "Authors",
    "category": "section",
    "text": "David S. Smith, Dong Wang"
},

{
    "location": "#Disclaimer-1",
    "page": "Readme",
    "title": "Disclaimer",
    "category": "section",
    "text": "This code comes with no warranty. Use at your own risk. "
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LittleEndianBase128.LittleEndianBase128LittleEndianBase128.decodeLittleEndianBase128.decodesignedLittleEndianBase128.decodeunsignedLittleEndianBase128.encodeLittleEndianBase128.evalLittleEndianBase128.includeLittleEndianBase128.movesignLittleEndianBase128.version"
},

]}
