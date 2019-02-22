var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ElasticPDMats-1",
    "page": "Readme",
    "title": "ElasticPDMats",
    "category": "section",
    "text": "Efficient growing and shrinking of positive definite matrices thanks to preallocated memory.(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "In addition to the functions defined in the common PDMats interface, ElasticPDMat <: AbstractPDMat can grow with append!a = rand(10, 10); m = a\'a; \ne = ElasticPDMat(m[1:8, 1:8))\nappend!(e, m[:, 9:10])and shrink with deleteat!deleteat!(e, [3, 8, 7])Growing and shrinking is usually efficient, because no entries are recomputed and (basically no) new memory needs to be allocated.  ElasticMat(capacity = 10^3, stepsize = 10^3) allocates capacity x capacity matrices and creates (initially 0-dimensional) views to represent positive definite matrices. Whenever the current capacity is reached, e.g. due to several append! operations, the capacity increases to capacity += stepsize. Caution: increasing the capacity involves allocating new memory and copying old values, which is slow. For optimal performance, the capacity and the stepsize should be chosen wisely. For an already initialized e = ElasticPDMat() they can be set with the helper functions setcapacity!(e, 100) and setstepsize!(e, 100).Additionally to ElasticPDMat this package exports view based elastic arrays of any dimension AllElasticArray, ElasticSymmetricMatrix, ElasticCholesky and the helper functions setcapacity!, setstepsize! and setdimension!."
},

{
    "location": "autodocs/#ElasticPDMats.ElasticPDMat",
    "page": "Docstrings",
    "title": "ElasticPDMats.ElasticPDMat",
    "category": "type",
    "text": "ElasticPDMat([m [, chol]]; capacity = 10^3, stepsize = 10^3)\n\nCreates an elastic positive definite matrix with initial capacity = 10^3 and  stepsize = 10^3. The optional argument m is a positive definite, symmetric  matrix and chol its cholesky decomposition. Use append! and deleteat! to change an ElasticPDMat.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ElasticPDMats.@forwardElasticPDMats.AllElasticArrayElasticPDMats.ElasticCholeskyElasticPDMats.ElasticPDMatElasticPDMats.ElasticPDMatsElasticPDMats.ElasticSymmetricMatrixElasticPDMats.evalElasticPDMats.grow!ElasticPDMats.includeElasticPDMats.resize!ElasticPDMats.setcapacity!ElasticPDMats.setdimension!ElasticPDMats.setnewdata!ElasticPDMats.setstepsize!"
},

]}
