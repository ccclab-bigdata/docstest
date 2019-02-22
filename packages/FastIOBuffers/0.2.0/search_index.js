var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FastIOBuffers-1",
    "page": "Readme",
    "title": "FastIOBuffers",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)FastIOBuffers aims to provide faster alternatives to Base.IOBuffer, which as of time of writing allocates memory even when e.g. a Float64 is written to or read from it."
},

{
    "location": "#FastWriteBuffer-1",
    "page": "Readme",
    "title": "FastWriteBuffer",
    "category": "section",
    "text": "FastWriteBuffer solves the allocation problem for the write use case. On 0.6.4, using IOBuffer:using Compat, BenchmarkTools\nN = 1000\n@btime write(buf, x) evals = N setup = begin\n    x = rand(Float64)\n    buf = IOBuffer(Vector{UInt8}(undef, N * Core.sizeof(x)), false, true)\nendresults in 39.338 ns (2 allocations: 32 bytes), whileusing Compat, BenchmarkTools\nusing FastIOBuffers\nN = 1000\n@btime write(buf, x) evals = N setup = begin\n    x = rand(Float64)\n    buf = FastWriteBuffer(Vector{UInt8}(undef, N * Core.sizeof(x)))\nendresults in 10.526 ns (0 allocations: 0 bytes)"
},

{
    "location": "#FastReadBuffer-1",
    "page": "Readme",
    "title": "FastReadBuffer",
    "category": "section",
    "text": "Similarly, FastReadBuffer can be used in place of IOBuffer for reading. On 0.6.4, using IOBuffer:using BenchmarkTools\nN = 1000\n@btime read(buf, Float64) evals = N setup = begin\n    rng = MersenneTwister(1)\n    writebuf = IOBuffer()\n    map(1 : N) do _\n        write(writebuf, rand(rng, Float64))\n    end\n    buf = IOBuffer(take!(writebuf))\nendresults in 13.620 ns (1 allocation: 16 bytes), while replacing IOBuffer with FastReadBuffer results in 2.017 ns (0 allocations: 0 bytes)."
},

{
    "location": "autodocs/#FastIOBuffers.setdata!",
    "page": "Docstrings",
    "title": "FastIOBuffers.setdata!",
    "category": "function",
    "text": "setdata!(buf::FastReadBuffer, data::AbstractVector{UInt8))\n\nCopy the data in data to the internal data buffer in buf and reset the position to the beginning.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FastIOBuffers.FastIOBuffersFastIOBuffers.FastReadBufferFastIOBuffers.FastWriteBufferFastIOBuffers.ensureroom!FastIOBuffers.evalFastIOBuffers.includeFastIOBuffers.setdata!"
},

]}
