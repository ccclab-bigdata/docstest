var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Parquet-1",
    "page": "Readme",
    "title": "Parquet",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)Load a parquet file. Only metadata is read initially, data is loaded in chunks on demand.julia> using Parquet\n\njulia> parfile = \"customer.impala.parquet\"\n\njulia> p = ParFile(parfile)\nParquet file: /home/tan/Work/julia/packages/Parquet/test/parquet-compatibility/parquet-testdata/impala/1.1.1-SNAPPY/customer.impala.parquet\n    version: 1\n    nrows: 150000\n    created by: impala version 1.2-INTERNAL (build a462ec42e550c75fccbff98c720f37f3ee9d55a3)\n    cached: 0 column chunksExamine the schema.julia> nrows(p)\n150000\n\njulia> ncols(p)\n8\n\njulia> colnames(p)\n8-element Array{AbstractString,1}:\n \"c_acctbal\"   \n \"c_mktsegment\"\n \"c_nationkey\" \n \"c_name\"      \n \"c_address\"   \n \"c_custkey\"   \n \"c_phone\"     \n \"c_comment\"   \n\njulia> schema(p)\nSchema:\n    schema {\n      optional INT64 c_custkey\n      optional BYTE_ARRAY c_name\n      optional BYTE_ARRAY c_address\n      optional INT32 c_nationkey\n      optional BYTE_ARRAY c_phone\n      optional DOUBLE c_acctbal\n      optional BYTE_ARRAY c_mktsegment\n      optional BYTE_ARRAY c_comment\n    }Can convert the parquet schema to different forms:julia> schema(JuliaConverter(STDOUT), p, :Customer)\ntype Customer\n    Customer() = new()\n    c_custkey::Int64\n    c_name::Vector{UInt8}\n    c_address::Vector{UInt8}\n    c_nationkey::Int32\n    c_phone::Vector{UInt8}\n    c_acctbal::Float64\n    c_mktsegment::Vector{UInt8}\n    c_comment::Vector{UInt8}\nend\n\njulia> schema(ThriftConverter(STDOUT), p, :Customer)\nstruct Customer {\n     optional i64 c_custkey\n     optional binary c_name\n     optional binary c_address\n     optional i32 c_nationkey\n     optional binary c_phone\n     optional double c_acctbal\n     optional binary c_mktsegment\n     optional binary c_comment\n}\n\njulia> schema(ProtoConverter(STDOUT), p, :Customer)\nmessage Customer {\n    optional sint64 c_custkey;\n    optional bytes c_name;\n    optional bytes c_address;\n    optional sint32 c_nationkey;\n    optional bytes c_phone;\n    optional double c_acctbal;\n    optional bytes c_mktsegment;\n    optional bytes c_comment;\n}Can inject the type dynamically to a module to have further methods working directly on the Julia type.julia> schema(JuliaConverter(Main), p, :Customer)\n\njulia> Base.show(io::IO, cust::Customer) = println(io, String(copy(cust.c_name)), \" Phone#:\", String(copy(cust.c_phone)))Create cursor to iterate over records. In parallel mode, multiple remote cursors can be created and iterated on in parallel.julia> rc = RecCursor(p, 1:5, colnames(p), JuliaBuilder(p, Customer))\nRecord Cursor on /home/tan/Work/julia/packages/Parquet/test/parquet-compatibility/parquet-testdata/impala/1.1.1-SNAPPY/customer.impala.parquet\n    rows: 1:5\n    cols: c_acctbal.c_mktsegment.c_nationkey.c_name.c_address.c_custkey.c_phone.c_comment\n\n\njulia> i = start(rc);\n\njulia> while !done(rc, i)\n        v,i = next(rc, i)\n        show(v)\n       end\nCustomer#000000033 Phone#:27-375-391-1280\nCustomer#000000065 Phone#:33-733-623-5267\nCustomer#000000001 Phone#:25-989-741-2988\nCustomer#000000642 Phone#:32-925-597-9911\nCustomer#000000161 Phone#:17-805-718-2449\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Parquet.AbstractBuilderParquet.ColCursorParquet.JuliaBuilderParquet.JuliaConverterParquet.MASK3Parquet.MASK7Parquet.MASK8Parquet.MASKNParquet.MSBParquet.PAR2Parquet.PAR_MAGICParquet.PLAIN_JTYPESParquet.PLAIN_PROTOBUF_TYPESParquet.PLAIN_THRIFT_TYPESParquet.PageParquet.PageLRUParquet.ParFileParquet.ParquetParquet.ProtoConverterParquet.RecCursorParquet.RowCursorParquet.SZ_FOOTERParquet.SZ_PAR_MAGICParquet.SZ_VALID_PARParquet.SchemaParquet.SchemaConverterParquet.ThriftConverterParquet._doneParquet._nextParquet._pagevecParquet._read_fixedParquet._read_varintParquet._sch_to_juliaParquet._sch_to_protoParquet._sch_to_thriftParquet._startParquet.bit2bytewidthParquet.bit_or_byte_lengthParquet.bitwidthParquet.byt2itypeParquet.byt2uitypeParquet.byt2uitype_smallParquet.bytesParquet.bytewidthParquet.cachegetParquet.colnameParquet.colnamesParquet.coltypeParquet.columnsParquet.default_initParquet.elemParquet.end_offsetParquet.evalParquet.includeParquet.initParquet.is_par_fileParquet.isrepeatedParquet.isrequiredParquet.istoplevelParquet.leafnameParquet.map_dict_valsParquet.max_definition_levelParquet.max_repetition_levelParquet.metadataParquet.metadata_lengthParquet.ncolsParquet.nrowsParquet.page_encodingsParquet.page_num_valuesParquet.page_offsetParquet.page_sizeParquet.pagesParquet.parentnameParquet.print_indentParquet.read_bitpacked_runParquet.read_bitpacked_run_oldParquet.read_fixedParquet.read_hybridParquet.read_levelsParquet.read_levels_and_valuesParquet.read_plainParquet.read_plain_valuesParquet.read_rle_dictParquet.read_rle_runParquet.read_thriftParquet.read_valuesParquet.rowgroup_offsetParquet.rowgroupsParquet.schemaParquet.schema_to_julia_typesParquet.schema_to_proto_schemaParquet.schema_to_thrift_schemaParquet.setrowParquet.showParquet.show_encodingsParquet.stateParquet.updateParquet.values"
},

]}