var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OMETIFF.jl-1",
    "page": "Readme",
    "title": "OMETIFF.jl",
    "category": "section",
    "text": "PackageEvaluator Master Status Code coverage\n(Image: OMETIFF) (Image: OMETIFF) (Image: Build Status) (Image: codecov.io)Adds support for reading OME-TIFF files to the Images.jl platform. Allows fast and easy interfacing with high-dimensional data with nice labeled axes provided by AxisArrays.jl.(Image: )"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "OMETIFF.jl will be automatically installed when you use FileIO to open an OME-TIFF file. You can also install it by running the following in the Julia REPL:Pkg.add(\"OMETIFF\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using FileIO\nimg = load(\"path/to/ome.tif\") # FileIO will install OME-TIFF upon running this command\nprintln(axisnames(img))\nprintln(axisvalues(img))(:y, :x, :channel, :time)\n(1:1024, 1:1024, Symbol[:_561_CF, :Conf_DIA], 0.0 ms:10000.0 ms:290000.0 ms)"
},

{
    "location": "autodocs/#OMETIFF.ImageSlice",
    "page": "Docstrings",
    "title": "OMETIFF.ImageSlice",
    "category": "type",
    "text": "An ImageSlice struct contains all the information from a TiffData element in the OME-XML.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.build_axes",
    "page": "Docstrings",
    "title": "OMETIFF.build_axes",
    "category": "function",
    "text": "build_axes(omexml::EzXML.Node)\n\nReturns an array of ints with dimension sizes and an array of AxisArrays.Axis objects both in XYZCT order given the Pixels node of the OME-XML document\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.check_bswap",
    "page": "Docstrings",
    "title": "OMETIFF.check_bswap",
    "category": "function",
    "text": "check_bswap(io::Union{Stream, IOStream})\n\nCheck endianness of TIFF file to see if we need to swap bytes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.extract_filename",
    "page": "Docstrings",
    "title": "OMETIFF.extract_filename",
    "category": "function",
    "text": "Extract the name of the file backing a stream\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.load_master_xml",
    "page": "Docstrings",
    "title": "OMETIFF.load_master_xml",
    "category": "function",
    "text": "load_master_xml(file::TiffFile)\n\nLoads the master OME-XML file from file or from a linked file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.loadxml",
    "page": "Docstrings",
    "title": "OMETIFF.loadxml",
    "category": "function",
    "text": "loadxml(file::TiffFile)\n\nExtract the OME-XML embedded in the TiffFile file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.myendian",
    "page": "Docstrings",
    "title": "OMETIFF.myendian",
    "category": "function",
    "text": "myendian()\n\nReturns the TIFF endian byte order expected if its endianness matches the host\'s\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.next",
    "page": "Docstrings",
    "title": "OMETIFF.next",
    "category": "function",
    "text": "next(file::TiffFile)\n\nLoads the next IFD in file as determined by file.loc and returns a list of the strip offsets to load the data stored in this IFD. If the IFD has not been loaded yet then this function loads it from disk, otherwise it returns the IFD location from memory.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.read_tiffdata",
    "page": "Docstrings",
    "title": "OMETIFF.read_tiffdata",
    "category": "function",
    "text": "read_tiffdata(tiffdata::EzXML.Node, files::Dict{String, TiffFile}, orig_file::TiffFile)\n\nReads a Tiff Data entry and generates an ImageSlice object from it. Keeps track of all relevant files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.reset",
    "page": "Docstrings",
    "title": "OMETIFF.reset",
    "category": "function",
    "text": "reset(file)\n\nResets the IFD pointer to the beginning of the file. This is helpful for when loading the next position from files that may already be fully loaded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.to_symbol",
    "page": "Docstrings",
    "title": "OMETIFF.to_symbol",
    "category": "function",
    "text": "to_symbol(input::String)\n\nCleans up input string and converts it into a symbol\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OMETIFF.type_mapping",
    "page": "Docstrings",
    "title": "OMETIFF.type_mapping",
    "category": "constant",
    "text": "Corresponding Julian types for OME-XML types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OMETIFF.ImageSliceOMETIFF.OMETIFFOMETIFF.TiffFileOMETIFF._nextOMETIFF.build_axesOMETIFF.check_bswapOMETIFF.do_bswapOMETIFF.evalOMETIFF.extract_filenameOMETIFF.includeOMETIFF.loadOMETIFF.load_commentsOMETIFF.load_master_xmlOMETIFF.loadxmlOMETIFF.myendianOMETIFF.nextOMETIFF.read_tiffdataOMETIFF.resetOMETIFF.to_symbolOMETIFF.type_mapping"
},

]}
