var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MDCT-module-for-Julia-1",
    "page": "Readme",
    "title": "MDCT module for Julia",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)(Image: MDCT) (Image: MDCT) (Image: MDCT) (Image: MDCT)This module computes the modified discrete cosine transform (MDCT) in the Julia language and the inverse transform (IMDCT), using the fast type-IV discrete cosine tranform (DCT-IV) functions in the FFTW.jl package.Definitions of the MDCT and IMDCT can be found, for example in the Wikipedia MDCT article. The MDCT is a linear transformation that takes 2N inputs and produces N outputs, which is designed to be applied to a sequence of 50%-overlapping blocks of a longer sequence (e.g. audio samples). Because this is non-square (fewer outputs than inputs), the IMDCT is not an \"inverse\" transformation in the usual sense; it only recovers the original data when IMDCTs of overlapping blocks are added (by \"time-domain aliasing cancellation\")."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, just use the package manager to run Pkg.add(\"MDCT\") to install the files."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To use the MDCT functions, simply dousing MDCT\nY = mdct(X)\nZ = imdct(Y)where X is any numeric AbstractVector (1d array).  Currently, the length of X must be a multiple of 4.For example, suppose we make a random vector X of length 1000 and consider 50%-overlapping blocks of length 100 (X[1:100], X[51:150], X[101:200], and so on).  If we perform the MDCT of two such blocks, then the IMDCT, and then add the overlapping halves of the IMDCT outputs, we recover that portion of the original data:X = rand(1000)\nY1 = mdct(X[1:100])\nY2 = mdct(X[51:150])\nZ1 = imdct(Y1)\nZ2 = imdct(Y2)\nnorm(Z1[51:100] + Z2[1:50] - X[51:100])where the last line computes the difference between the overlapped IMDCT sum and the original data, and should be around 10<sup>&minus;15</sup> (floating-point roundoff error)."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "This module was written by Steven G. Johnson."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MDCT.MDCTMDCT.evalMDCT.fftwsimilarMDCT.imdctMDCT.includeMDCT.mdct"
},

]}
