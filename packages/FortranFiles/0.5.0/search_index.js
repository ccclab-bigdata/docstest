var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#FortranFiles.jl-1",
    "page": "Home",
    "title": "FortranFiles.jl",
    "category": "section",
    "text": "A Julia package for reading and writing Fortran unformatted (i.e. binary) files."
},

{
    "location": "#Features-1",
    "page": "Home",
    "title": "Features",
    "category": "section",
    "text": "Currently the following features are implemented and working:Sequential Access mode\n4-byte record markers, with subrecord support (allowing records larger than 2 GiB)\n8-byte record markers (used by early versions of gfortran)\nDirect Access mode \nfixed-size records without any record markers\nMost standard Fortran datatypes, including arrays and strings\n\"Inhomogeneous\" records, i.e. records made from multiple different datatypes\nByte-order conversion (little endian ⟷ big endian) The following features are not (yet) supported:Derived Type I/O\nEquivalents of BACKSPACE and ENDFILE"
},

{
    "location": "#Documentation-1",
    "page": "Home",
    "title": "Documentation",
    "category": "section",
    "text": "Pages = [\n   \"files.md\",\n   \"types.md\",\n   \"read.md\",\n   \"write.md\",\n   \"exceptions.md\",\n   \"tests.md\",\n   \"theindex.md\"\n]This documentation uses julia-0.7/1.0 syntax. On julia-0.6, either use using Compat or make the following adjustments:ComplexF64 -> Complex128 and ComplexF32 -> Complex64\ndrop undef from Array constructors"
},

{
    "location": "#Acknowledgments-1",
    "page": "Home",
    "title": "Acknowledgments",
    "category": "section",
    "text": "The FortranFiles.jl logo has been produced with help of the Virtual Keypunch service from masswerk.at. The punchcard artwork is Copyright 2012 Norbert Landsteiner, mass:werk – media environments. It is here used by kind permission."
},

{
    "location": "files/#",
    "page": "Files",
    "title": "Files",
    "category": "page",
    "text": ""
},

{
    "location": "files/#Files-1",
    "page": "Files",
    "title": "Files",
    "category": "section",
    "text": ""
},

{
    "location": "files/#Terminology-1",
    "page": "Files",
    "title": "Terminology",
    "category": "section",
    "text": "When opening a file in Fortran, you can specify its access mode. The default and most commonly used mode is sequential access. This package additionally supports direct access mode. (If the Fortran program uses stream access mode, then the file contains plain binary data, which can be easily read with Julia\'s built-in facilities.)In Fortran, files are organized into records. Each READ or WRITE statement in Fortran processes a complete record. This Julia package emulates this behavior, i.e. each call to read or write will process a whole record.In sequential access mode, records can only be accessed sequentially, but they can be of variable length. The length of a record is determined by the amount of data passed to the WRITE statement. The length of the record is also written to the file, encoded in record markers which preceed and follow the record. Unfortunately, Fortran compilers have used various ways to encode the record markers (the following is from personal recollection and may be incorrect):g77 used 4 bytes, so that records could be no longer than 2 GiB.\nifort uses 4 bytes, and uses the sign bit to signal that more data will follow. That is, the record is split into subrecords, where each subrecord has its own record markers. For records smaller than 2 GiB, this is compatible to g77.\ngfortran 4.0 and 4.1 offered 8-byte record markers as an alternative to g77-style record markers, and used them by default (at least on 64-bit systems).\ngfortran 4.2 introduced ifort-compatible record markers. These are now the default.All these kinds of record markers are supported by this package.In direct access mode, all records have the same, fixed size. This record size must be specified when opening the file. Records can be accessed in random order, by specifying the number of the record to be read/written in each READ or WRITE statement.  Currently it is assumed that records are stored in the file without any header or record marker.  This is compatible with the standard behaviour of gfortran and ifort."
},

{
    "location": "files/#FortranFiles.FortranFile",
    "page": "Files",
    "title": "FortranFiles.FortranFile",
    "category": "type",
    "text": "FortranFile(io::IO; kwargs...)\n\nWrap the given IO stream as a FortranFile containing Fortran \"unformatted\" (i.e. binary) data. The keyword arguments can be:\n\naccess for specifying the access mode; a String being one of\n\"sequential\": sequential access as in Fortran, where records have leading and trailing record markers. This is the default.\n\"direct\": direct access as in Fortran, where records have fixed length and can be accessed in random order. The \"recl\" keyword must be given to specify the record length. read and write operations on these files must use the rec keyword argument to specify which record to read/write.\nmarker: for specifying the type of record marker; one of\nRECMRK4B: 4-byte record markers (with support for subrecords) [default]\nRECMRK8B: 8-byte record markers\nThis is ignored for direct access files.\nrecl: for specifying the record length if access==\"direct\". The record length is counted in bytes and must be specified as an Integer.\nconvert: for specifying the byte-order of the file data; one of\n\"native\": use the host byte order [default]\n\"big-endian\": use big-endian byte-order\n\"little-endian\": use little-endian byte-order\n\nThe returned FortranFile can be used with Julia\'s read and write functions. See their documentation for more information.\n\n\n\n\n\nFortranFile(fn::String [, mode=\"r\" ]; kwargs...)\n\nOpen a file containing Fortran unformatted (i.e. binary) data for reading or writing, depending on mode which is used as in open. The keyword arguments are as in FortranFile(io::IO; kwargs...).\n\n\n\n\n\n"
},

{
    "location": "files/#Opening-files-1",
    "page": "Files",
    "title": "Opening files",
    "category": "section",
    "text": "To open a file which contains Fortran unformatted data, use one of the following methods:FortranFileSee Reading Data and Writing Data for how to read or write data to FortranFiles."
},

{
    "location": "files/#FortranFiles.rewind",
    "page": "Files",
    "title": "FortranFiles.rewind",
    "category": "function",
    "text": "Re-position a FortranFile at its beginning.\n\n\n\n\n\n"
},

{
    "location": "files/#Other-functions-on-FortranFiles-1",
    "page": "Files",
    "title": "Other functions on FortranFiles",
    "category": "section",
    "text": "To close the file, use the standard Julia close function.The following functions are provided to emulate certain Fortran I/O statements:rewind"
},

{
    "location": "files/#Examples-1",
    "page": "Files",
    "title": "Examples",
    "category": "section",
    "text": "The following examples show how to write Julia code that corresponds to certain Fortran OPEN statements."
},

{
    "location": "files/#Opening-a-file-read-only-1",
    "page": "Files",
    "title": "Opening a file read-only",
    "category": "section",
    "text": "f = FortranFile(\"data.bin\")corresponds tointeger::lun\nopen(newunit=lun, file=\"data.bin\", form=\"unformatted\", action=\"read\", status=\"old\")"
},

{
    "location": "files/#Opening-a-file-for-writing-1",
    "page": "Files",
    "title": "Opening a file for writing",
    "category": "section",
    "text": "f = FortranFile(\"data.bin\", \"w\")corresponds tointeger::lun\nopen(newunit=lun, file=\"data.bin\", form=\"unformatted\", action=\"write\", status=\"replace\")"
},

{
    "location": "files/#Opening-a-file-for-reading-and-writing-in-append-mode-1",
    "page": "Files",
    "title": "Opening a file for reading and writing in append mode",
    "category": "section",
    "text": "f = FortranFile(\"data.bin\", \"a+\")probably corresponds tointeger::lun\nopen(newunit=lun, file=\"data.bin\", form=\"unformatted\", action=\"readwrite\", position=\"append\", status=\"unknown\")"
},

{
    "location": "files/#Opening-a-file-read-only-in-direct-access-mode-1",
    "page": "Files",
    "title": "Opening a file read-only in direct access mode",
    "category": "section",
    "text": "f = FortranFile(\"data.bin\", \"r\", access=\"direct\", recl=640)for reading a file containing 640-byte records, and corresponds tointeger::lun\nopen(newunit=lun, file=\"data.bin\", form=\"unformatted\", action=\"read\", status=\"old\", access=\"direct\", recl=640)if compiled with gfortran; ifort measures recl not in bytes, but in 4-byte longwords, unless the compiler switch -assume byterecl is used."
},

{
    "location": "types/#",
    "page": "Datatypes",
    "title": "Datatypes",
    "category": "page",
    "text": ""
},

{
    "location": "types/#Datatypes-1",
    "page": "Datatypes",
    "title": "Datatypes",
    "category": "section",
    "text": "When reading files created by a Fortran program, you need to be aware of the exact datatypes that were used to write the data. It is essential to specify the correct corresponding Julia datatype when using the read function provided by this package. Especially, note that the default Fortran INTEGER datatype on most systems corresponds to Julia\'s Int32 datatype, which differs from Julia\'s default Int datatype on 64-bit systems.Likewise, when using this package to write Julia data into files which should be readable by a Fortran program, you need to define your data with the correct datatypes, or convert them appropriately before using them in the write function."
},

{
    "location": "types/#Type-Correspondence-1",
    "page": "Datatypes",
    "title": "Type Correspondence",
    "category": "section",
    "text": "The following table lists the Julia types which correspond to the standard Fortran types:Fortran type a.k.a. Julia type\nINTEGER(KIND=INT8) INTEGER*1 Int8\nINTEGER(KIND=INT16) INTEGER*2 Int16\nINTEGER(KIND=INT32) INTEGER*4 Int32\nINTEGER(KIND=INT64) INTEGER*8 Int64\nREAL(KIND=REAL32) REAL*4 Float32\nREAL(KIND=REAL64) REAL*8 Float64\nCOMPLEX(KIND=REAL32) COMPLEX*8 ComplexF32\nCOMPLEX(KIND=REAL64) COMPLEX*16 ComplexF64\nCHARACTER(LEN=N) CHARACTER*(N) FString{N}The first column lists the datatypes using the kind parameters according to the Fortran2008 standard. Most Fortran programs will likely use type declarations as in the second column, although these don\'t conform to the Fortran standard. If the Fortran program doesn\'t specify the kind, then the exact Fortran datatype also depends on the compiler options (which can influence the default kind of integers and reals).This package currently only supports one kind of CHARACTER data, namely ASCII characters with one byte of storage per character."
},

{
    "location": "types/#FortranFiles.FString",
    "page": "Datatypes",
    "title": "FortranFiles.FString",
    "category": "type",
    "text": "FString{L}\n\nDatatype for reading and writing character strings from FortranFiles. The type parameter L signifies the length of the string. This is the equivalent to the Fortran datatype CHARACTER(len=L).\n\n\n\n\n\n"
},

{
    "location": "types/#FortranFiles.FString-Tuple{Any,String}",
    "page": "Datatypes",
    "title": "FortranFiles.FString",
    "category": "method",
    "text": "FString(L, s::String)\n\nConvert the Julia String s to an FString{L}. s must contain only ASCII characters. As in Fortran, the string will be padded with spaces or truncated in order to reach the desired length.\n\n\n\n\n\n"
},

{
    "location": "types/#FortranFiles.trimstring",
    "page": "Datatypes",
    "title": "FortranFiles.trimstring",
    "category": "function",
    "text": "trimstring(s::FString)\n\nConvert the FString s into a Julia String, where trailing spaces are removed. Use String(s) to keep the spaces.\n\n\n\n\n\n"
},

{
    "location": "types/#FortranFiles.trimlen",
    "page": "Datatypes",
    "title": "FortranFiles.trimlen",
    "category": "function",
    "text": "trimlen(s::FString)\n\nReturns the length of the FString s with trailing spaces ignored.\n\n\n\n\n\n"
},

{
    "location": "types/#FortranFiles.trim",
    "page": "Datatypes",
    "title": "FortranFiles.trim",
    "category": "function",
    "text": "trim(s::FString)\n\nReturns a truncated copy of the FString s where all trailing spaces are removed.\n\n\n\n\n\n"
},

{
    "location": "types/#Strings-1",
    "page": "Datatypes",
    "title": "Strings",
    "category": "section",
    "text": "Fortran character strings possess an inherent length property. To support reading and writing such data, this package defines an FString datatype which takes the length as a type parameter:FString{L}\nFString(L, s::String)There is not much you can do with FStrings, except printing them and writeing them back to a FortranFile.  For conversion to a Julia String, use the following:trimstringTo make it easier to convert Fortran code into Julia, the following functions are provided for convenience:trimlen\ntrim"
},

{
    "location": "types/#Logicals-1",
    "page": "Datatypes",
    "title": "Logicals",
    "category": "section",
    "text": "It is currently undecided how best to support I/O of Fortran LOGICAL data, pending some design decisions.For the moment, such data can be read or written by treating them as integer data, where 0 corresponds to false and 1 or -1 corresponds to true (depending on the Fortran system). According to the Fortran standard, the storage size for the default LOGICAL kind must be the same as for the default INTEGER kind, therefore you probably want to use Int32 data in Julia."
},

{
    "location": "read/#",
    "page": "Reading Data",
    "title": "Reading Data",
    "category": "page",
    "text": ""
},

{
    "location": "read/#Base.read",
    "page": "Reading Data",
    "title": "Base.read",
    "category": "function",
    "text": "read(f::FortranFile [, spec [, spec [, ...]]])\nread(f::FortranFile, rec=N, [, spec [, spec [, ...]]])\n\nRead data from a FortranFile. Like the READ statement in Fortran, this reads a complete record, regardless of how man specs are given. Each spec can be:\n\na DataType for scalar values; e.g. Int32, Float64, FString{10}\na tuple of DataType and one or more integers, for reading arrays of the given size; e.g. (Int32,4,2) reads an Array{Int32} of size (4,2)\na tuple of DataType and a tuple of integers, as an alternative way of reading arrays; e.g. (Int32,(4,2)) does the same as the previous one\nan array, for reading into pre-allocated arrays; DataType and size of the array are implied through its Julia type.\n\nFor direct-access files, the number of the record to be read must be specified with the rec keyword (N=1 for the first record).\n\nReturn value:\n\nif no spec is given: nothing (the record is skipped over)\nif one spec is given: the scalar or array requested\nif more specs are given: a tuple of the scalars and arrays requested, in order\n\n\n\n\n\n"
},

{
    "location": "read/#FortranFiles.@fread",
    "page": "Reading Data",
    "title": "FortranFiles.@fread",
    "category": "macro",
    "text": "@fread f [ rec=N ] [ spec ... ]\n\nMacro interface for reading data from the FortranFile f. A single @fread call will process a single data record from the file. Each spec can be:\n\na var::T declaration, which will read data of the type T from the file, and assign it to the variable var. T can be one of the usual Fortran scalar datatypes.\na var::(T,dims...) declaration, where T is a scalar datatype and dims... is a series of integers. This reads an array of the specified datatype and dimensions, and assigns it to the variable var.\nvar::Array{T}(undef,dims...) as an explicit form for reading arrays\na variable name, which must refer to a pre-allocated array.\n\nNote that a spec can refer to variables assigned by previous specs. The rec keyword must be given iff f refers to a direct-access file, and specifies which record to read.\n\nExample:\n\n@fread f n::Int32 x::(Float64,n)\n\nThis reads a single Int32, assigns it to n, and then reads a Float64 array with n elements and assigns it to x. Such a record can not be processed by the function-based read interface. The equivalent call would be\n\nn, x = read(f, Int32, (Float64,n))\n\nbut this can\'t work because n is only assigned after the read statement is processed. The macro interface is provided to cover such cases.\n\n\n\n\n\n"
},

{
    "location": "read/#Reading-Data-1",
    "page": "Reading Data",
    "title": "Reading Data",
    "category": "section",
    "text": "read\n@fread"
},

{
    "location": "read/#Examples-1",
    "page": "Reading Data",
    "title": "Examples",
    "category": "section",
    "text": "The following examples show how to write Julia code that corresponds to certain Fortran READ statements. The Julia code assumes that f refers to an opened FortranFile in sequential access mode, while the Fortran code assumes that lun refers to a logical unit number for a connected file.For direct access mode, each read call additionally needs to specify the number of the record to read, by using the rec keyword argument. E.g. to read the first record, use read(f, rec=1, ...).The @fread macro can be used if the size of data to be read from a record depends on earlier data from the same record. See example below."
},

{
    "location": "read/#Reading-a-single-scalar-1",
    "page": "Reading Data",
    "title": "Reading a single scalar",
    "category": "section",
    "text": "x = read(f, Float64)corresponds toreal(kind=real64)::x\nread(lun) x"
},

{
    "location": "read/#Reading-a-1D-array-1",
    "page": "Reading Data",
    "title": "Reading a 1D array",
    "category": "section",
    "text": "vector = read(f, (Float64,10))       # read into a new array\nvector = zeros(10); read(f, vector)  # read into pre-existing arraycorresponds to (Modern Fortran style)real(kind=real64),dimension(10)::vector\nread(lun) vectorand to (Fortran77 style)integer::i\nreal(kind=real64),dimension(10)::vector\nread(lun) (vector(i), i=1,10)"
},

{
    "location": "read/#Reading-a-2D-array-1",
    "page": "Reading Data",
    "title": "Reading a 2D array",
    "category": "section",
    "text": "matrix = read(f, (Float64,10,10))      # read into a new array\nmatrix = read(f, (Float64,(10,10)))    # alternative syntax\nmatrix = zeros(10,10); read(f, matrix) # read into existing array\ncorresponds toreal(kind=real64),dimension(10,10)::matrix\nread(lun) matrix"
},

{
    "location": "read/#Reading-a-character-string-1",
    "page": "Reading Data",
    "title": "Reading a character string",
    "category": "section",
    "text": "fstr = read(f, FString{20})corresponds tocharacter(len=20)::fstr\nread(lun) fstr"
},

{
    "location": "read/#Reading-a-record-with-multiple-data-1",
    "page": "Reading Data",
    "title": "Reading a record with multiple data",
    "category": "section",
    "text": "i, strings, zmatrix = read(f, Int32, (Fstring{20},10), (ComplexF64,10,10))corresponds tointeger(kind=int32)::i\ncharacter(len=20),dimension(10)::strings\ncomplex(kind=real64),dimension(10,10)::zmatrix\nread(lun) i,strings,matrix"
},

{
    "location": "read/#Reading-a-record-where-the-size-is-not-known-ahead-1",
    "page": "Reading Data",
    "title": "Reading a record where the size is not known ahead",
    "category": "section",
    "text": "@fread f n::Int32 vector::(Float64,n)corresponds tointeger(kind=int32)::n,i\nread(kind=real64),dimension(*)::vector ! assume already allocated\nread(lun) n,(vector(i),i=1,n)"
},

{
    "location": "read/#Skipping-over-a-record-1",
    "page": "Reading Data",
    "title": "Skipping over a record",
    "category": "section",
    "text": "read(f)corresponds toread(lun)"
},

{
    "location": "write/#",
    "page": "Writing Data",
    "title": "Writing Data",
    "category": "page",
    "text": ""
},

{
    "location": "write/#Base.write",
    "page": "Writing Data",
    "title": "Base.write",
    "category": "function",
    "text": "write(f::FortranFile, items...)\nwrite(f::FortranFile, rec=N, items...)\n\nWrite a data record to a FortranFile. Each item should be a scalar of a Fortran-compatible datatype (e.g. Int32, Float64, FString{10}), or an array of such scalars. If no items are given, an empty record is written. Returns the number of bytes written, not including the space taken up by the record markers.\n\nFor direct-access files, the number of the record to be written must be specified with the rec keyword (N=1 for the first record).\n\n\n\n\n\n"
},

{
    "location": "write/#Writing-Data-1",
    "page": "Writing Data",
    "title": "Writing Data",
    "category": "section",
    "text": "write"
},

{
    "location": "write/#Examples-1",
    "page": "Writing Data",
    "title": "Examples",
    "category": "section",
    "text": "The following examples show how to write Julia code that corresponds to certain Fortran WRITE statements. The Julia code assumes that f refers to an opened FortranFile in sequential access mode, while the Fortran code assumes that lun refers to a logical unit number for a connected file.For direct access mode, each write call additionally needs to specify the number of the record to write, by using the rec keyword argument. E.g. to write the first record, use write(f, rec=1, ...)."
},

{
    "location": "write/#Writing-scalars-1",
    "page": "Writing Data",
    "title": "Writing scalars",
    "category": "section",
    "text": "i = Int32(1)\nwrite(f, i)corresponds tointeger(kind=int32)::i\ni = 1\nwrite(lun) iSee Datatypes for the Julia equivalents of the Fortran datatypes."
},

{
    "location": "write/#Writing-arrays-1",
    "page": "Writing Data",
    "title": "Writing arrays",
    "category": "section",
    "text": "A = zeros(Float32, 10, 20)\nwrite(f, A)corresponds toreal(kind=real32),dimension(10,20)::A\nA = 0.0\nwrite(lun) A                          ! modern Fortran\nwrite(lun) ((A(i,j), i=1,10), j=1,20) ! Fortran77"
},

{
    "location": "write/#Writing-strings-1",
    "page": "Writing Data",
    "title": "Writing strings",
    "category": "section",
    "text": "s = FString(20, \"blabla\")\nwrite(f, s)corresponds tocharacter(len=20)::s\ns = \"blabla\"\nwrite(lun) s"
},

{
    "location": "write/#Writing-a-record-with-multiple-data-1",
    "page": "Writing Data",
    "title": "Writing a record with multiple data",
    "category": "section",
    "text": "Combining the above into a single record,i = Int32(1)\nA = zeros(Float32, 10, 20)\ns = FString(20, \"blabla\")\nwrite(f, i, A, s)corresponds tointeger(kind=int32)::i\nreal(kind=real32),dimension(10,20)::A\ncharacter(len=20)::s\ni = 1\nA = 0.0\ns = \"blabla\"\nwrite(lun) i,A,s"
},

{
    "location": "exceptions/#",
    "page": "Exceptions",
    "title": "Exceptions",
    "category": "page",
    "text": ""
},

{
    "location": "exceptions/#FortranFiles.FortranFilesError",
    "page": "Exceptions",
    "title": "FortranFiles.FortranFilesError",
    "category": "type",
    "text": "FortranFilesError(msg)\n\nException thrown if an operation on a FortranFile fails or cannot be performed. Argument msg is a description of the failure mode.\n\n\n\n\n\n"
},

{
    "location": "exceptions/#Exceptions-1",
    "page": "Exceptions",
    "title": "Exceptions",
    "category": "section",
    "text": "The following exception type is used to signal errors when handling FortranFiles.FortranFilesErrorThe errors could be:using unsupported features, or invalid combinations of features\nI/O errors related to the Fortran layer, e.g. non-matching record markers. I/O errors on the underlying IO, e.g. read/write failure, will show up as one of the Julia built-in exceptions."
},

{
    "location": "tests/#",
    "page": "Package Tests",
    "title": "Package Tests",
    "category": "page",
    "text": ""
},

{
    "location": "tests/#Package-Tests-1",
    "page": "Package Tests",
    "title": "Package Tests",
    "category": "section",
    "text": "This package can be tested in the usual Julia way:Pkg.test(\"FortranFiles\")However, in order to test whether files written by a Fortran program are properly read, this first needs to generate some Fortran output. Therefore the following external dependencies are required to run the tests:gfortran (a reasonably recent version, which understands the -std=f2008 flag)\nGNU make\nPerlThe tests perform the following steps:Create the Fortran source code, and compile it.\nCreate the Julia source code for reading the Fortran data, and for writing it out again.\nRun the Fortran program. This produces the input test data.\nUse the Julia code to read in the test data. Datatype and storage size of the read items are checked against their expected values.\nUse the Julia code to read parts of the test data, i.e. records are skipped or read incompletely.\nUse the Julia code to write the data to an output file.\nCheck that the input and output file are identical.This sequence of steps is performed for each of the tested record types (variable-length records with various types of record markers, and fixed-length records for direct access mode), and each of the supported byte orders, using the appropriate gfortran compiler options to adjust the Fortran output."
},

{
    "location": "theindex/#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "theindex/#Index-1",
    "page": "Index",
    "title": "Index",
    "category": "section",
    "text": "CurrentModule = FortranFilesPages = [\n   \"files.md\",\n   \"types.md\",\n   \"read.md\",\n   \"write.md\",\n   \"exceptions.md\",\n   \"tests.md\"\n]"
},

]}
