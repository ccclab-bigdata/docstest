var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MatrixMarket-1",
    "page": "Readme",
    "title": "MatrixMarket",
    "category": "section",
    "text": "(Image: Build Status)Package to read matrices from files in the Matrix Market native exchange format.The Matrix Market is a NIST repository of \"test data for use in comparative studies of algorithms for numerical linear algebra, featuring nearly 500 sparse matrices from a variety of applications, as well as matrix generation tools and services.\" Over time, the Matrix Market\'s native exchange format has become one of the de facto standard file formats for exchanging matrix data."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using MatrixMarket\nM = MatrixMarket.mmread(\"myfile.mtx\")M will be a sparse or dense matrix depending on whether the file contains a matrix in coordinate format or array format. The specific type of M may be Symmetric or Hermitian depending on the symmetry information contained in the file header.MatrixMarket.mmread(\"myfile.mtx\", true)Returns raw data from the file header. Does not read in the actual matrix elements"
},

{
    "location": "autodocs/#MatrixMarket.mmread",
    "page": "Docstrings",
    "title": "MatrixMarket.mmread",
    "category": "function",
    "text": "mmread(filename, infoonly::Bool=false, retcoord::Bool=false)\n\nRead the contents of the Matrix Market file \'filename\' into a matrix, which will be either sparse or dense, depending on the Matrix Market format indicated by \'coordinate\' (coordinate sparse storage), or \'array\' (dense array storage).\n\nIf infoonly is true (default: false), only information on the size and structure is returned from reading the header. The actual data for the matrix elements are not parsed.\n\nIf retcoord is true (default: false), the rows, column and value vectors are returned, if it is a sparse matrix, along with the header information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MatrixMarket.mmwrite",
    "page": "Docstrings",
    "title": "MatrixMarket.mmwrite",
    "category": "function",
    "text": "mmwrite(filename, matrix::SparseMatrixCSC)\n\nWrite a sparse matrix to file \'filename\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MatrixMarket.MatrixMarketMatrixMarket.ParseErrorMatrixMarket._parseintMatrixMarket.evalMatrixMarket.find_splitsMatrixMarket.hermitian!MatrixMarket.includeMatrixMarket.mmreadMatrixMarket.mmwriteMatrixMarket.skewsymmetric!MatrixMarket.symmetric!"
},

]}
