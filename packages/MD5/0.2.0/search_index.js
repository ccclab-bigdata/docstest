var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MD5-1",
    "page": "Readme",
    "title": "MD5",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)A pure julia MD5 implementation. There is few reasons to create new MD5 checksums, but there are a huge number of existing ones. Honestly, just use SHA-256 for everything you would use MD5 for. MD5 is not secure, and it\'s not faster, and it doesn\'t have much going for it.With that said, this is an MD5 implementation.It directly extends SHA.jl. Using a lot of the same underlying functionality, and it\'s interface.Just like the functions from SHA.jl md5 takes either an Array{UInt8}, a String, or an IO object. This makes it trivial to checksum a file.julia> using MD5\n\njulia> bytes2hex(md5(\"test\"))\n\"098f6bcd4621d373cade4e832627b4f6\"\n\njulia> String(read(\"test.txt\"))\n\"test\\n\"\n\njulia> open(md5, \"test.txt\")\n16-element Array{UInt8,1}:\n 0xd8\n 0xe8\n 0xfc\n 0xa2\n 0xdc\n 0x0f\n 0x89\n 0x6f\n 0xd7\n 0xcb\n 0x4c\n 0xb0\n 0x03\n 0x1b\n 0xa2\n 0x49"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MD5.MD5MD5.MD5_CTXMD5.MD5_initial_hash_valueMD5.evalMD5.includeMD5.kkMD5.md5MD5.ss"
},

]}
