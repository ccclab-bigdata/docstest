var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ExpmV-1",
    "page": "Readme",
    "title": "ExpmV",
    "category": "section",
    "text": "(Image: Build Status)This is a fork from https://github.com/marcusps/ExpmV.jl, implementing the evaluation for multiple values of the parameter t.This is a Julia translation of the MATLAB implementation of Al-Mohy and Higham\'s function for computing expm(t*A)*v when A is sparse, without explicitly computing expm(A).If t is a StepRangeLen object (i. e. a linspace), use an optimized algorithm to output the result for all t.The original code can be found at (https://github.com/higham/expmv), and the theory is explained in the following article:Computing the Action of the Matrix Exponential, with an Application to Exponential Integrators, Awad H. Al-Mohy and Nicholas J. Higham, SIAM Journal on Scientific Computing 2011 33:2, 488-511. (preprint)The fast 1-norm estimation that is crucial for the speed of this algorithm is adapted from code available in Julia\'s Base module. This function (norm1est) is licensed under the MIT license."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install into Julia using the package manager:Pkg.add(\"ExpmV\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "expmv(t, A, v)Eg. t = 1., or t = linspace(0, 1, 100)."
},

{
    "location": "#Benchmarks-1",
    "page": "Readme",
    "title": "Benchmarks",
    "category": "section",
    "text": "This benchmark shows the performance of ExpmV compared to Expokit.jl and the builtin dense expm of Julia, for complex, non-Hermitian matrices. The benchmark is done using BenchmarkTools.jl on a Macbook Pro 2016 with 2,9 GHz Intel Core i5 and 16 GB RAM. The script is in benchmark/compare.jl."
},

{
    "location": "#Matrix-density-0.01-1",
    "page": "Readme",
    "title": "Matrix density 0.01",
    "category": "section",
    "text": "Matrix rows Expm Expokit Expmv\n32 158.495 μs 30.100 μs 53.609 μs\n64 856.923 μs 52.036 μs 58.536 μs\n128 7.805 ms 537.083 μs 80.650 μs\n256 40.027 ms 2.993 ms 112.047 μs\n512 277.680 ms 3.195 ms 218.490 μs\n1024 1.902 s 4.267 ms 571.590 μs"
},

{
    "location": "#Matrix-density-0.001-1",
    "page": "Readme",
    "title": "Matrix density 0.001",
    "category": "section",
    "text": "Matrix rows Expm Expokit Expmv\n32 31.147 μs 12.144 μs 55.103 μs\n64 471.424 μs 15.816 μs 53.599 μs\n128 7.368 ms 34.339 μs 60.320 μs\n256 27.817 ms 61.137 μs 76.773 μs\n512 325.282 ms 182.016 μs 142.402 μs\n1024 1.568 s 2.137 ms 306.293 μs"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Released under the BSD 2-clause license used in Al-Mohy and  Higham\'s original code."
},

{
    "location": "autodocs/#ExpmV.expmv",
    "page": "Docstrings",
    "title": "ExpmV.expmv",
    "category": "function",
    "text": "expmv(t, A, b; <keyword arguments>)\n\nReturns the matrix-vector product exp(t A) b where A is a n  n sparse real or complex matrix, b is a vector of n real or complex elements and t is a parameter (or a StepRangeLen object representing a range of values).\n\nArguments\n\nt: Number or StepRangeLen object\nA: a n × n real or complex sparse matrix\nb: an n-vector\nM = []: manually set the degree of the Taylor expansion\nprecision = \"double\": can be \"double\", \"single\" or \"half\".\nshift = false: set to true to apply a shift in order to reduce the norm of A       (see Sec. 3.1 of the paper)\nfull_term = false: set to true to evaluate the full Taylor expansion instead       of truncating when reaching the required precision\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ExpmV.A_pow_n_B!ExpmV.At_pow_n_B!ExpmV.ExpmVExpmV.degree_selectorExpmV.evalExpmV.expmvExpmV.includeExpmV.norm1estExpmV.normAmExpmV.select_taylor_degreeExpmV.theta_doubleExpmV.theta_halfExpmV.theta_singleExpmV.zero_to_inf"
},

]}
