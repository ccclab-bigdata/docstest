var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BlossomV.jl-1",
    "page": "Readme",
    "title": "BlossomV.jl",
    "category": "section",
    "text": "(Image: Build Status)This package provides a julia wrapper to the Blossom V software package which provides an implementation of a minimum cost perfect matching algorithm.Blossom V is available under http://pub.ist.ac.at/~vnk/software.htmlThe algorithm is described inBlossom V: A new implementation of a minimum cost perfect matching algorithm.\nVladimir Kolmogorov.\nIn Mathematical Programming Computation (MPC), July 2009, 1(1):43-67.The Wrapper provided in this package is very simplistic, a nicer interface will be provided in future versions.  There are several things you can do that will cause it to segfault – often causing julia to segfault."
},

{
    "location": "#Building-1",
    "page": "Readme",
    "title": "Building",
    "category": "section",
    "text": "You can install the package with the usual ]add BlossomV.A common thing that goes wrong is not having current enough version of C++ and its stdlibs. Currently the minimum requirements are a compiler supporting the C++11 standard (e.g. gcc-4.6 on ubuntu 12.04, or newer, should be recent enough)."
},

{
    "location": "#LICENSE-1",
    "page": "Readme",
    "title": "LICENSE",
    "category": "section",
    "text": "This wrapper library is provided under the terms given in the license.Be aware that the code of the actual BlossomV library itself underlies a different license. It is up to you to check, whether or not that license is acceptable for your usage."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BlossomV.@checked_libBlossomV.BlossomVBlossomV.CostTBlossomV.MatchingBlossomV.PerfectMatchingCtxBlossomV._jl_blossom5float64BlossomV._jl_blossom5int32BlossomV.add_edgeBlossomV.dense_num_edgesBlossomV.destroyBlossomV.evalBlossomV.get_all_matchesBlossomV.get_matchBlossomV.includeBlossomV.solveBlossomV.verbose"
},

]}
