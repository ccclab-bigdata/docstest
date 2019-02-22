var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "The NPZ package provides support for reading and writing Numpy .npy and .npz files in Julia.An .npy file contains a single numpy array, stored in a binary format along with its shape, data type, etc. An .npz file contains a collection numpy arrays each encoded in the .npy format and stored in a ZIP file.  For more information, see the numpy.save, numpy.savez, numpy.savez_compressed, and numpy.load functions in the Numpy documentation.(Image: Build Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install via the Julia package manager, Pkg.add(\"NPZ\")."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "We try to provide an interface similar to the MAT.jl package.  Some usage examples are shown below.Write and then read back an array:julia> using NPZ\n\njulia> x = [i-j for i in 1:3, j in 1:4];\n\njulia> npzwrite(\"x.npy\", x)\n\njulia> y = npzread(\"x.npy\")\n3x4 Int64 Array:\n 0  -1  -2  -3\n 1   0  -1  -2\n 2   1   0  -1Write and then read back a collection of arrays or numbers:julia> npzwrite(\"data.npz\", [\"x\" => x, \"a\" => [1:9], \"n\" => 42])\n\njulia> vars = npzread(\"data.npz\")\n[\"x\"=>3x4 Int64 Array:\n 0  -1  -2  -3\n 1   0  -1  -2\n 2   1   0  -1,\"n\"=>42,\"a\"=>[1,2,3,4,5,6,7,8,9]]"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NPZ.HeaderNPZ.Julia2NumpyNPZ.MaxMagicLenNPZ.NPYMagicNPZ.NPZNPZ.Numpy2JuliaNPZ.TypeMapsNPZ.VersionNPZ.ZIPMagicNPZ.__init__NPZ.evalNPZ.includeNPZ.npzreadNPZ.npzreadarrayNPZ.npzwriteNPZ.npzwritearrayNPZ.parseboolNPZ.parsecharNPZ.parsedtypeNPZ.parseheaderNPZ.parseintegerNPZ.parsestringNPZ.parsetupleNPZ.readleNPZ.samestartNPZ.writecheckNPZ.writele"
},

]}
