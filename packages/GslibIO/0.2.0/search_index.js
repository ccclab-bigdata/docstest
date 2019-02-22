var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GslibIO.jl-1",
    "page": "Readme",
    "title": "GslibIO.jl",
    "category": "section",
    "text": "Utilities to read/write extended GSLIB files in Julia.(Image: Build Status) (Image: GslibIO) (Image: Coverage Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "The GSLIB file format was introduced a long time ago for storing regular grids in text files that are easy to read. The format specification is incomplete mainly because:it doesn\'t contain the size of the grid (i.e. (Nx, Ny, Nz))\nit doesn\'t specify the origin and spacing (i.e. (Ox, Oy, Oz), (dx, dy, dz))\nit doesn\'t specify the special symbol for inactive cells (e.g. -999)This package introduces an extended GSLIB format that addresses the issues listed above:# optional comment lines at the start of the file\n# more comments ...\n<Nx> <Ny> <Nz>\n<Ox> <Oy> <Oz>\n<dx> <dy> <dz>\n<property_name1>   <property_name2> ...   <property_nameN>\n<property_value11> <property_value12> ... <property_value1N>\n<property_value21> <property_value22> ... <property_value2N>\n...\n<property_value(Nx*Ny*Nz)1> <property_value(Nx*Ny*Nz)2> ... <property_value(Nx*Ny*Nz)N>Inactive cells are marked with the special symbol NaN. This means that all properties are saved as floating point numbers regardless of interpretation (categorical or continuous)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"GslibIO\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This package follows Julia\'s FileIO interface, it provides two functions:using FileIO\n\n# save 3D arrays to GSLIB file\nsave(filename, [array1, array2, ...])\nsave(filename, array) # version with single array\n\n# read 3D arrays from GSLIB file\ngridobj = load(filename)wherefilename must have extension .gslib or .sgems\narray1, array2, ... are 3D Julia arrays\ngridobj is an object that holds the properties (i.e. gridobj.properties)Additional saving options are available:origin is the origin of the grid (default to (0.,0.,0.))\nspacing is the spacing of the grid (default to (1.,1.,1.))\nheader contains additional comments about the data\npropnames is the name of each property being saved (default to prop1, prop2, ...)"
},

{
    "location": "autodocs/#GslibIO.GslibGRID",
    "page": "Docstrings",
    "title": "GslibIO.GslibGRID",
    "category": "type",
    "text": "GslibGRID\n\nType holding all necessary information for saving/loading properties.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GslibIO.load",
    "page": "Docstrings",
    "title": "GslibIO.load",
    "category": "function",
    "text": "load(file)\n\nLoad grid properties from file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GslibIO.save",
    "page": "Docstrings",
    "title": "GslibIO.save",
    "category": "function",
    "text": "save(file, properties, propsize; [optional parameters])\n\nSave 1D properties, which originally had 3D size propsize.\n\n\n\n\n\nsave(file, properties, [optional parameters])\n\nSave 3D properties by first flattening them into 1D properties.\n\n\n\n\n\nsave(file, property)\n\nSave single 3D property by wrapping it into a singleton collection.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GslibIO.GslibGRIDGslibIO.GslibIOGslibIO.evalGslibIO.includeGslibIO.loadGslibIO.save"
},

]}
