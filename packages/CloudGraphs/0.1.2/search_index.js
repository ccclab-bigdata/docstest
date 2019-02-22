var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: GitHub Logo)"
},

{
    "location": "#CloudGraphs.jl-1",
    "page": "Readme",
    "title": "CloudGraphs.jl",
    "category": "section",
    "text": "[![Build Status][build-img]][build-url] [![CloudGraphs][cg-badge-v0.7]][cg-pkg-v0.7] [![CloudGraphs][cg-badge-v1.0]][cg-pkg-v1.0] [![codecov.io][cov-img]][cov-url]Repository for the CloudGraphs project, an ongoing project on http://semisortedblog.wordpress.com."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package is written for the Julia language (and JuliaPro), and can be cloned via:Pkg.clone(\"https://github.com/GearsAD/CloudGraphs.jl.git\")We are in the process of registering the package for easier install.Please note that this package requires MongoDB version 3 or higher for local DB usage."
},

{
    "location": "#Users-1",
    "page": "Readme",
    "title": "Users",
    "category": "section",
    "text": "This package is extensively used by the Caesar.jl package."
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "GearsAD\nDehann"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1]  Fourie, D., Claassens, S., Pillai, S., Mata, R., Leonard, J.: \"SLAMinDB: Centralized graph\n     databases for mobile robotics\" IEEE International Conference on Robotics and Automation (ICRA),\n     Singapore, 2017.[cov-img]: https://codecov.io/github/GearsAD/CloudGraphs.jl/coverage.svg?branch=master [cov-url]: https://codecov.io/github/GearsAD/CloudGraphs.jl?branch=master [build-img]: https://travis-ci.org/GearsAD/CloudGraphs.jl.svg?branch=master [build-url]: https://travis-ci.org/GearsAD/CloudGraphs.jl[cg-badge-v0.7]: http://pkg.julialang.org/badges/CloudGraphs0.7.svg [cg-pkg-v0.7]: http://pkg.julialang.org/?pkg=CloudGraphs&ver=0.7 [cg-badge-v1.0]: http://pkg.julialang.org/badges/CloudGraphs1.0.svg [cg-pkg-v1.0]: http://pkg.julialang.org/?pkg=CloudGraphs&ver=1.0"
},

{
    "location": "autodocs/#CloudGraphs._saveBigDataElement!",
    "page": "Docstrings",
    "title": "CloudGraphs._saveBigDataElement!",
    "category": "function",
    "text": "_saveBigDataElement!(cg, vertex, bDE)\n\nInsert or update the actual data payload into Mongo as required. Does not update Neo4j.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CloudGraphs.update_NeoBigDataEntries!",
    "page": "Docstrings",
    "title": "CloudGraphs.update_NeoBigDataEntries!",
    "category": "function",
    "text": "update_NeoBigDataEntries!(cg, vertex)\n\nUpdate the bigData dictionary elements in Neo4j. Does not insert or read from Mongo.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CloudGraphs.BIGDATA_CURVERSIONCloudGraphs.BigDataCloudGraphs.BigDataElementCloudGraphs.BigDataRawTypeCloudGraphs.CloudEdgeCloudGraphs.CloudGraphCloudGraphs.CloudGraphConfigurationCloudGraphs.CloudGraphsCloudGraphs.CloudVertexCloudGraphs.MongoDbInstanceCloudGraphs.Neo4jInstanceCloudGraphs.PackedTypeCloudGraphs._mongoDefaultCollectionCloudGraphs._mongoDefaultDbCloudGraphs._saveBigDataElement!CloudGraphs.add_edge!CloudGraphs.add_vertex!CloudGraphs.cloudVertex2ExVertexCloudGraphs.cloudVertex2NeoPropsCloudGraphs.connectCloudGraphs.delete_BigData!CloudGraphs.delete_MongoDataCloudGraphs.delete_edge!CloudGraphs.delete_vertex!CloudGraphs.disconnectCloudGraphs.evalCloudGraphs.exVertex2CloudVertexCloudGraphs.get_edgeCloudGraphs.get_neighborsCloudGraphs.get_vertexCloudGraphs.includeCloudGraphs.neoNode2CloudVertexCloudGraphs.read_BigData!CloudGraphs.read_MongoDataCloudGraphs.registerPackedType!CloudGraphs.save_BigData!CloudGraphs.unpackNeoNodeData2UsrTypeCloudGraphs.update_NeoBigDataEntries!CloudGraphs.update_vertex!"
},

]}
