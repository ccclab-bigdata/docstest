var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BenchmarkProfiles-1",
    "page": "Readme",
    "title": "BenchmarkProfiles",
    "category": "section",
    "text": "A simple Julia package to plot performance and data profiles.(Image: Build Status) (Image: Build status)This package contains Julia translations of original scripts by Elizabeth Dolan, Jorge Moré and Stefan Wild. See http://www.mcs.anl.gov/~wild/dfo/benchmarking.The original code was not accompanied by an open-source license. Jorge Moré and Stefan Wild have kindly provided their consent in writing to allow distribution of this Julia translation. See the consent folder for a full transcription."
},

{
    "location": "#How-to-Install-1",
    "page": "Readme",
    "title": "How to Install",
    "category": "section",
    "text": "julia> Pkg.add(\"BenchmarkProfiles\")Plotting is handled by Plots.jl so the user can choose among several available plotting backends.Watch out for the pitfalls of profiles!"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using BenchmarkProfiles\njulia> T = 10 * rand(25,3);  # 25 problems, 3 solvers\njulia> performance_profile(T, [\"Solver 1\", \"Solver 2\", \"Solver 3\"], title=\"Celebrity Deathmatch\")(Image: Performance Profile)"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "E. Dolan and J. Moré, Benchmarking Optimization Software with Performance Profiles, Mathematical Programming 91, pages 201–213, 2002. DOI 10.1007/s101070100263.J. J. Moré and S. M. Wild, Benchmarking Derivative-Free Optimization Algorithms, SIAM Journal on Optimization, 20(1), pages 172–191, 2009. DOI 10.1137/080724083."
},

{
    "location": "autodocs/#BenchmarkProfiles.data_profile",
    "page": "Docstrings",
    "title": "BenchmarkProfiles.data_profile",
    "category": "function",
    "text": "Produce a data profile.\n\nThe 3-dimensional array H gives the performance data for each solver and each problem (smaller is better). H[k,p,s] is the k-th costly operation (e.g., function evaluation) for problem p and solver s. Failures on a given problem are represented by a negative value, an infinite value, or NaN.\n\nThe vector N gives a scaling associated to each problem. If the number of simplex gradients is being measured, N[p] should be n(p) + 1 where n(p) is the number of variables of problem p.\n\nThe threshold τ determines the tolerance in the convergence criterion\n\nf(x) ≤ fL + τ (f0 - fL),\n\nwhere for each problem f(x) is a measure recorded (e.g., the objective value), f0 is the measure at the initial point, and fL is the best measure obtained by any solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BenchmarkProfiles.data_ratios",
    "page": "Docstrings",
    "title": "BenchmarkProfiles.data_ratios",
    "category": "function",
    "text": "Compute data ratios used to produce a data profile.\n\nThere is normally no need to call this function directly. See the documentation of data_profile() for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BenchmarkProfiles.performance_profile",
    "page": "Docstrings",
    "title": "BenchmarkProfiles.performance_profile",
    "category": "function",
    "text": "Produce a performance profile.\n\nEach column of the matrix T defines the performance data for a solver (smaller is better). Failures on a given problem are represented by a negative value, an infinite value, or NaN. The optional argument logscale is used to produce a logarithmic (base 2) performance plot.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BenchmarkProfiles.performance_ratios",
    "page": "Docstrings",
    "title": "BenchmarkProfiles.performance_ratios",
    "category": "function",
    "text": "Compute performance ratios used to produce a performance profile.\n\nThere is normally no need to call this function directly. See the documentation of performance_profile() for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BenchmarkProfiles.BenchmarkProfilesBenchmarkProfiles.data_profileBenchmarkProfiles.data_ratiosBenchmarkProfiles.evalBenchmarkProfiles.includeBenchmarkProfiles.performance_profileBenchmarkProfiles.performance_ratios"
},

]}
