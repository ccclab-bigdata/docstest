var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CodecBzip2.jl-1",
    "page": "Readme",
    "title": "CodecBzip2.jl",
    "category": "section",
    "text": "[![TravisCI Status][travisci-img]][travisci-url] [![AppVeyor Status][appveyor-img]][appveyor-url] [![codecov.io][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"CodecBzip2\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using CodecBzip2\n\n# Some text.\ntext = \"\"\"\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin\nmauris non nisi consectetur, a dapibus urna pretium. Vestibulum non posuere\nerat. Donec luctus a turpis eget aliquet. Cras tristique iaculis ex, eu\nmalesuada sem interdum sed. Vestibulum ante ipsum primis in faucibus orci luctus\net ultrices posuere cubilia Curae; Etiam volutpat, risus nec gravida ultricies,\nerat ex bibendum ipsum, sed varius ipsum ipsum vitae dui.\n\"\"\"\n\n# Streaming API.\nstream = Bzip2CompressorStream(IOBuffer(text))\nfor line in eachline(Bzip2DecompressorStream(stream))\n    println(line)\nend\nclose(stream)\n\n# Array API.\ncompressed = transcode(Bzip2Compressor, text)\n@assert sizeof(compressed) < sizeof(text)\n@assert transcode(Bzip2Decompressor, compressed) == Vector{UInt8}(text)This package exports following codecs and streams:Codec Stream\nBzip2Compressor Bzip2CompressorStream\nBzip2Decompressor Bzip2DecompressorStreamSee docstrings and TranscodingStreams.jl for details.[travisci-img]: https://travis-ci.org/bicycle1885/CodecBzip2.jl.svg?branch=master [travisci-url]: https://travis-ci.org/bicycle1885/CodecBzip2.jl [appveyor-img]: https://ci.appveyor.com/api/projects/status/bqm4qh5cd13u70cm?svg=true [appveyor-url]: https://ci.appveyor.com/project/bicycle1885/codecbzip2-jl [codecov-img]: http://codecov.io/github/bicycle1885/CodecBzip2.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/bicycle1885/CodecBzip2.jl?branch=master"
},

{
    "location": "autodocs/#CodecBzip2.Bzip2Compressor",
    "page": "Docstrings",
    "title": "CodecBzip2.Bzip2Compressor",
    "category": "type",
    "text": "Bzip2Compressor(;blocksize100k=9, workfactor=30, verbosity=0)\n\nCreate a bzip2 compression codec.\n\nArguments\n\nblocksize100k: block size to be use for compression (1..9)\nworkfactor: amount of effort the standard algorithm will expend before resorting to the fallback (0..250)\nverbosity: verbosity level (0..4)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBzip2.Bzip2CompressorStream",
    "page": "Docstrings",
    "title": "CodecBzip2.Bzip2CompressorStream",
    "category": "type",
    "text": "Bzip2CompressorStream(stream::IO; kwargs...)\n\nCreate a bzip2 compression stream (see Bzip2Compressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBzip2.Bzip2Decompressor",
    "page": "Docstrings",
    "title": "CodecBzip2.Bzip2Decompressor",
    "category": "type",
    "text": "Bzip2Decompressor(;small=false, verbosity=0)\n\nCreate a bzip2 decompression codec.\n\nArguments\n\nsmall: flag to activate an algorithm which uses less memory\nverbosity: verbosity level (0..4)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CodecBzip2.Bzip2DecompressorStream",
    "page": "Docstrings",
    "title": "CodecBzip2.Bzip2DecompressorStream",
    "category": "type",
    "text": "Bzip2DecompressorStream(stream::IO; kwargs...)\n\nCreate a bzip2 decompression stream (see Bzip2Decompressor for kwargs).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CodecBzip2.@checked_libCodecBzip2.BZ2ErrorCodecBzip2.BZStreamCodecBzip2.BZ_CONFIG_ERRORCodecBzip2.BZ_DATA_ERRORCodecBzip2.BZ_DATA_ERROR_MAGICCodecBzip2.BZ_FINISHCodecBzip2.BZ_FINISH_OKCodecBzip2.BZ_FLUSHCodecBzip2.BZ_FLUSH_OKCodecBzip2.BZ_IO_ERRORCodecBzip2.BZ_MEM_ERRORCodecBzip2.BZ_OKCodecBzip2.BZ_OUTBUFF_FULLCodecBzip2.BZ_PARAM_ERRORCodecBzip2.BZ_RUNCodecBzip2.BZ_RUN_OKCodecBzip2.BZ_SEQUENCE_ERRORCodecBzip2.BZ_STREAM_ENDCodecBzip2.BZ_UNEXPECTED_EOFCodecBzip2.Bzip2CompressorCodecBzip2.Bzip2CompressorStreamCodecBzip2.Bzip2DecompressorCodecBzip2.Bzip2DecompressorStreamCodecBzip2.CodecBzip2CodecBzip2.DEFAULT_BLOCKSIZE100KCodecBzip2.DEFAULT_VERBOSITYCodecBzip2.DEFAULT_WORKFACTORCodecBzip2.WIN32CodecBzip2.bzerrorCodecBzip2.compress!CodecBzip2.compress_end!CodecBzip2.compress_init!CodecBzip2.decompress!CodecBzip2.decompress_end!CodecBzip2.decompress_init!CodecBzip2.evalCodecBzip2.includeCodecBzip2.libbz2"
},

]}
