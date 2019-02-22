var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)NOTE: If you are starting a new project on Julia 0.6 or later, it is recommended to use the CodecZlib.jl package instead. CodecZlib.jl and other packages offer more unified interfaces for a wide range of file formats.This is yet another zlib interface for Julia. It\'s intended to replace the two prior zlib packages.GZip.jl\nZlib.jlBoth have shortcomings that this package aims to address, specifically:Zlib.jl is very slow.\nGZip.jl is not as slow as Zlib.jl, but still slower than it could to be.\nGZip.jl only supports file I/O.\nGZip.jl doesn\'t support reading/writing plain zlib data."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "This library exports four stream types:Type Description\nZlibInflateOutputStream write and decompress data\nZlibDeflateOutputStream write and compress data\nZlibInflateInputStream read and decompress data\nZlibDeflateInputStream read and compress dataThese work like regular IO objects. Each takes as a parameter either in input or output source."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "# read lines from a compressed file\nfor line in eachline(open(\"data.txt.gz\") |> ZlibInflateInputStream)\n    # do something...\nend\n\n# write compressed data to a file\nio = open(\"data.txt.gz\", \"w\")\nstream = ZlibDeflateOutputStream(io)\nfor c in rand(UInt8, 10000)\n    write(stream, c)\nend\nclose(stream)  # this closes not only `stream` but also `io`\n\n# pointlessly compress and decompress some data (use `read` on v0.5)\nreadbytes(rand(UInt8, 10000) |> ZlibDeflateInputStream |> ZlibInflateInputStream)"
},

{
    "location": "#Other-functions-1",
    "page": "Readme",
    "title": "Other functions",
    "category": "section",
    "text": "There are convenience Libz.inflate(::Vector{UInt8}) and Libz.deflate(::Vector{UInt8}) functions that take a byte array and return another compressed or decompressed byte array.Checksum functions are exposed as Libz.crc32(::Vector{UInt8}) and Libz.adler32(::Vector{UInt8}).See BufferedStreams.jl for benchmarks of this library.Low-level APIs are defined in src/lowlevel.jl. These constants and functions are not exported but available if necessary. At the moment, function wrappers are minimal but feel free to add and send functions you need as pull requests."
},

{
    "location": "autodocs/#Libz.Sink",
    "page": "Docstrings",
    "title": "Libz.Sink",
    "category": "type",
    "text": "The mode type parameter must be either :inflate or :deflate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libz.Source",
    "page": "Docstrings",
    "title": "Libz.Source",
    "category": "type",
    "text": "The mode type parameter must be either :inflate or :deflate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libz.ZlibDeflateInputStream",
    "page": "Docstrings",
    "title": "Libz.ZlibDeflateInputStream",
    "category": "function",
    "text": "ZlibDeflateInputStream(input[; <keyword arguments>])\n\nConstruct a zlib deflate input stream to compress gzip/zlib data.\n\nArguments\n\ninput: a byte vector, IO object, or BufferedInputStream containing data to compress.\nbufsize::Integer=8192: input and output buffer size.\nraw::Bool=false: if true, data is raw compress data, without zlib metadata\ngzip::Bool=true: if true, data is gzip compressed; if false, zlib compressed.\nlevel::Integer=6: compression level in 1-9.\nmem_level::Integer=8: memory to use for compression in 1-9.\nstrategy=Z_DEFAULT_STRATEGY: compression strategy; see zlib documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libz.ZlibDeflateOutputStream",
    "page": "Docstrings",
    "title": "Libz.ZlibDeflateOutputStream",
    "category": "function",
    "text": "ZlibDeflateOutputStream(output[; <keyword arguments>])\n\nConstruct a zlib deflate output stream to compress gzip/zlib data.\n\nArguments\n\noutput: a byte vector, IO object, or BufferedInputStream to which compressed data should be written.\nbufsize::Integer=8192: input and output buffer size.\nraw::Bool=false: if true, data is raw compress data, without zlib metadata\ngzip::Bool=true: if true, data is gzip compressed; if false, zlib compressed.\nlevel::Integer=6: compression level in 1-9.\nmem_level::Integer=8: memory to use for compression in 1-9.\nstrategy=Z_DEFAULT_STRATEGY: compression strategy; see zlib documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libz.ZlibInflateInputStream",
    "page": "Docstrings",
    "title": "Libz.ZlibInflateInputStream",
    "category": "function",
    "text": "ZlibInflateInputStream(input[; <keyword arguments>])\n\nConstruct a zlib inflate input stream to decompress gzip/zlib data.\n\nArguments\n\ninput: a byte vector, IO object, or BufferedInputStream containing compressed data to inflate.\nbufsize::Integer=8192: input and output buffer size.\nraw::Bool=falso: if true, data is raw compress data, without zlib metadata\ngzip::Bool=true: if true, data is gzip compressed; if false, zlib compressed.\nreset_on_end::Bool=true: on stream end, try to find the start of another stream.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libz.ZlibInflateOutputStream",
    "page": "Docstrings",
    "title": "Libz.ZlibInflateOutputStream",
    "category": "function",
    "text": "ZlibInflateOutputStream(output[; <keyword arguments>])\n\nConstruct a zlib inflate output stream to decompress gzip/zlib data.\n\nArguments\n\noutput: a byte vector, IO object, or BufferedInputStream to which decompressed data should be written.\nbufsize::Integer=8192: input and output buffer size.\nraw::Bool=false: if true, data is raw compress data, without zlib metadata\ngzip::Bool=true: if true, data is gzip compressed; if false, zlib compressed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libz.adler32",
    "page": "Docstrings",
    "title": "Libz.adler32",
    "category": "function",
    "text": "adler32(data)\n\nCompute the Adler-32 checksum over the data input. data can be BufferedInputStream or Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Libz.crc32",
    "page": "Docstrings",
    "title": "Libz.crc32",
    "category": "function",
    "text": "crc32(data)\n\nCompute the CRC-32 checksum over the data input. data can be BufferedInputStream or Vector{UInt8}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Libz.@transLibz.@zcheckLibz.DeflateSinkLibz.DeflateSourceLibz.InflateSinkLibz.InflateSourceLibz.LibzLibz.SinkLibz.SourceLibz.StateLibz.ZStreamLibz.Z_ASCIILibz.Z_BEST_COMPRESSIONLibz.Z_BEST_SPEEDLibz.Z_BINARYLibz.Z_BLOCKLibz.Z_BUF_ERRORLibz.Z_DATA_ERRORLibz.Z_DEFAULT_COMPRESSIONLibz.Z_DEFAULT_STRATEGYLibz.Z_DEFLATEDLibz.Z_ERRNOLibz.Z_FILTEREDLibz.Z_FINISHLibz.Z_FIXEDLibz.Z_FULL_FLUSHLibz.Z_HUFFMAN_ONLYLibz.Z_MEM_ERRORLibz.Z_NEED_DICTLibz.Z_NO_COMPRESSIONLibz.Z_NO_FLUSHLibz.Z_OKLibz.Z_PARTIAL_FLUSHLibz.Z_RLELibz.Z_STREAM_ENDLibz.Z_STREAM_ERRORLibz.Z_SYNC_FLUSHLibz.Z_TEXTLibz.Z_TREESLibz.Z_UNKNOWNLibz.Z_VERSION_ERRORLibz.ZlibDeflateInputStreamLibz.ZlibDeflateOutputStreamLibz.ZlibInflateInputStreamLibz.ZlibInflateOutputStreamLibz.adler32Libz.code2strLibz.compressLibz.crc32Libz.decompressLibz.deflateLibz.deflate!Libz.end_deflate!Libz.end_inflate!Libz.evalLibz.finalizedLibz.finishedLibz.includeLibz.inflateLibz.inflate!Libz.init_deflate!Libz.init_deflate_zstreamLibz.init_inflate!Libz.init_inflate_zstreamLibz.initializedLibz.inprogressLibz.processLibz.reset!Libz.reset_deflate!Libz.reset_inflate!Libz.versionLibz.zerrorLibz.zlibLibz.zlib_version"
},

]}
