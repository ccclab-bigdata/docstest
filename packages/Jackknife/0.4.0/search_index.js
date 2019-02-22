var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Jackknife.jl-1",
    "page": "Readme",
    "title": "Jackknife.jl",
    "category": "section",
    "text": "(Image: 0.6) (Image: Travis) (Image: Coveralls)This package provides jackknife resampling and estimation functions for Julia."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "None of the functions here are exported, so you\'ll have to call them with the prefix Jackknife. or explicitly import them.Each function takes the following two arguments:A point estimator, given as a Function. The function must return a scalar when passed a vector.\nA real-valued vector of length > 1."
},

{
    "location": "#Resampling-1",
    "page": "Readme",
    "title": "Resampling",
    "category": "section",
    "text": "leaveoneout(estimator, x)Compute a vector of point estimates based on systematic subsamples of x wherein each index is omitted one at a time. These are the \"leave-one-out\" estimates. The resulting vector will have length length(x) - 1."
},

{
    "location": "#Estimation-1",
    "page": "Readme",
    "title": "Estimation",
    "category": "section",
    "text": "variance(estimator, x)The variance of the estimator computed using the jackknife technique.bias(estimator, x)The bias of the estimator computed using the jackknife technique.estimate(estimator, x)The bias-corrected jackknife estimate of the parameter."
},

{
    "location": "autodocs/#Jackknife.Reducer",
    "page": "Docstrings",
    "title": "Jackknife.Reducer",
    "category": "type",
    "text": "Reducer(f)\n\nType that holds a function and enforces at runtime that the function returns either a Real value or missing. This is used internally to sanity check the input for functions which accept a function argument.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jackknife.bias",
    "page": "Docstrings",
    "title": "Jackknife.bias",
    "category": "function",
    "text": "Jackknife.bias(estimator::Function, x)\n\nCompute the jackknife estimate of the bias of estimator, which is given as a function that computes a point estimate when passed a real-valued vector x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jackknife.estimate",
    "page": "Docstrings",
    "title": "Jackknife.estimate",
    "category": "function",
    "text": "Jackknife.estimate(estimator::Function, x)\n\nCompute the bias-corrected jackknife estimate of the parameter estimator(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jackknife.leaveoneout",
    "page": "Docstrings",
    "title": "Jackknife.leaveoneout",
    "category": "function",
    "text": "Jackknife.leaveoneout(estimator::Function, x::AbstractVector{<:Real})\n\nEstimate the parameter hattheta using the estimating function estimator for each subsample of x, systematically omitting each index one at a time. The result is a vector of length length(x)-1 of parameter estimates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Jackknife.variance",
    "page": "Docstrings",
    "title": "Jackknife.variance",
    "category": "function",
    "text": "Jackknife.variance(estimator::Function, x)\n\nCompute the jackknife estimate of the variance of estimator, which is given as a function that computes a point estimate when passed a real-valued vector x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Jackknife.FuncOrReducerJackknife.JackknifeJackknife.ReducerJackknife.biasJackknife.estimateJackknife.evalJackknife.includeJackknife.leaveoneoutJackknife.variance"
},

]}
