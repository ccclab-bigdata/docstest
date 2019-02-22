var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "InverseLaplace",
    "title": "InverseLaplace",
    "category": "page",
    "text": ""
},

{
    "location": "#InverseLaplace-1",
    "page": "InverseLaplace",
    "title": "InverseLaplace",
    "category": "section",
    "text": "Numerical inverse Laplace transformThe source repository is https://github.com/jlapeyre/InverseLaplace.jl.This package provides three algorithms for numerically inverting Laplace transforms. InverseLaplace v0.1.0 is the last version that supports Julia v0.6. Optimization of the Weeks method is temporarily disabled for Julia v0.7."
},

{
    "location": "#Contents-1",
    "page": "InverseLaplace",
    "title": "Contents",
    "category": "section",
    "text": ""
},

{
    "location": "#Index-1",
    "page": "InverseLaplace",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "#InverseLaplace.Talbot",
    "page": "InverseLaplace",
    "title": "InverseLaplace.Talbot",
    "category": "type",
    "text": "ft::Talbot = Talbot(func::Function, Nterms::Integer=32)\n\nReturn ft, which estimates the inverse Laplace transform of func with the fixed Talbot algorithm. ft(t) evaluates the transform at t.  You may want to tune Nterms together with setprecision(BigFloat, x).\n\nExample\n\nCompute the inverse transform of the transform of cos at argument pi/2.\n\njulia> ft = Talbot(s -> s / (s^2 + 1), 80);\n\njulia> ft(pi / 2)\n-3.5366510684573195e-5\n\nNote that given Float64 input, the precision of the returned value may not be satisfactory.\n\njulia> Float64(ft(big(pi) / 2))\n2.114425886215604e-49\n\nnote: Note\nThis function uses the fixed Talbot method. It evaluates the Laplace transform function for complex arguments. The GWR method is, in general, less accurate and less stable, but does not evaluate the Laplace transform function for complex arguments.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.ILT",
    "page": "InverseLaplace",
    "title": "InverseLaplace.ILT",
    "category": "function",
    "text": "ILT(function, Nterms=32)\n\nThis is an alias for the default Talbot() method.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.GWR",
    "page": "InverseLaplace",
    "title": "InverseLaplace.GWR",
    "category": "type",
    "text": "ft::GWR = GWR(func::Function, Nterms::Integer=16)\n\nReturn ft, which estimates the inverse Laplace transform of func with the GWR algorithm. ft(t) evaluates the transform at t.\n\nExample\n\nCompute the inverse transform of the transform of cos at argument pi / 2.\n\njulia> ft = GWR(s -> s / (s^2 + 1), 16);\n\njulia> ft(pi / 2)\n-0.001\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.Weeks",
    "page": "InverseLaplace",
    "title": "InverseLaplace.Weeks",
    "category": "type",
    "text": "w::Weeks{datatype} = Weeks(func::Function, Nterms::Integer=64, sigma=1.0, b=1.0; datatype=Float64)\n\nReturn w, which estimates the inverse Laplace transform of func with the Weeks algorithm. w(t) evaluates the transform at t. The accuracy depends on the choice of sigma and b, with the optimal choices depending on t. datatype should agree with the DataType returned by func. For convenience, datatype=Complex is equivalent to datatype=Complex{Float64}\n\nThe call to Weeks that creates w is expensive relative to evaluation via w(t).\n\nExample\n\nCompute the inverse transform of the transform of cos at argument pi/2.\n\njulia> ft = Weeks(s -> s/(s^2+1), 80);\n\njulia> ft(pi/2)\n0.0\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.WeeksErr",
    "page": "InverseLaplace",
    "title": "InverseLaplace.WeeksErr",
    "category": "type",
    "text": "w::WeeksErr{datatype} = WeeksErr(func::Function, Nterms::Integer=64, sigma=1.0, b=1.0; datatype=Float64)\n\nReturn w, which estimates the inverse Laplace transform of func via the Weeks algorithm. w(t) returns a tuple containing the inverse transform at t and an error estimate. The accuracy of the inversion depends on the choice of sigma and b. See the documentation for Weeks for a description of the parameter datatype.\n\nExample\n\nCompute the inverse transform of the transform of cos, and an error estimate, at argument pi/2 using 80 terms.\n\njulia> ft = WeeksErr(s -> s/(s^2+1), 80);\n\njulia> ft(pi/2)\n(0.0,3.0872097665938698e-15)\n\nThis estimate is more accurate than cos(pi/2).\n\njulia> ft(pi/2)[1] - cos(pi/2)\n-6.123233995736766e-17\n\njulia> ft(pi/2)[1] - 0.0         # exact value\n0.0\n\njulia> ft(pi/2)[1] - cospi(1/2)  # cospi is more accurate\n0.0\n\n\n\n\n\n"
},

{
    "location": "#Inverse-Laplace-transform-algorithms-1",
    "page": "InverseLaplace",
    "title": "Inverse Laplace transform algorithms",
    "category": "section",
    "text": "Constructing these Julia types, corresponding to different numerical algorithms, returns a callable object that evaluates the inverse Laplace transform at specified points.Talbot\nILT\nGWR\nWeeks\nWeeksErr"
},

{
    "location": "#InverseLaplace.setNterms",
    "page": "InverseLaplace",
    "title": "InverseLaplace.setNterms",
    "category": "function",
    "text": "setNterms(ailt::AbstractILt, Nterms::Integer)\n\nset the number of terms used in the inverse Laplace tranform ailt. If ailt stores internal data, it will be recomputed, so that subsequent calls ailt(t) reflect the new value of Nterms.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.optimize",
    "page": "InverseLaplace",
    "title": "InverseLaplace.optimize",
    "category": "function",
    "text": "optimize(w::AbstractWeeks, t, Nterms)\n\nOptimize the parameters of the inverse Laplace transform w at the argument t. If Nterms is ommitted, the current value of w.Nterms is retained.\n\nThe accuracy of the Weeks algorithm depends strongly on t. For some ranges of t, the accuracy is relatively insensitive to the parameters. For other values of t, even using optimized parameters results in estimates of the inverse transform that are extremely inaccurate.\n\noptimize is expensive in CPU time and allocation, it performs nested single-parameter optimization over two parameterss.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.opteval",
    "page": "InverseLaplace",
    "title": "InverseLaplace.opteval",
    "category": "function",
    "text": "opteval(w::AbstractWeeks, t, Nterms)\n\nestimate an inverse Laplace transform at argument t using w after optimizing the parameters for t. If Nterms is omitted, then the current value of w.Nterms is used.\n\nUse Weeks or WeeksErr to create w.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.setparameters",
    "page": "InverseLaplace",
    "title": "InverseLaplace.setparameters",
    "category": "function",
    "text": "setparameters(w::AbstractWeeks, sigma, b, Nterms)\n\nSet the parameters for the inverse Laplace transform object w and recompute the internal data. Subsequent calls w(t) will use these parameters. If Nterms or both Nterms and b are omitted, then their current values are retained.\n\n\n\n\n\n"
},

{
    "location": "#Setting-parameters-1",
    "page": "InverseLaplace",
    "title": "Setting parameters",
    "category": "section",
    "text": "The inverse Laplace tranform routines should not be treated as black boxes. They are prone to instability and can give inaccurate or wrong results. There are some parameters you can set to try to minimize these problems.InverseLaplace.setNterms\nInverseLaplace.optimize\nInverseLaplace.opteval\nInverseLaplace.setparameters"
},

{
    "location": "#InverseLaplace.ILtPair",
    "page": "InverseLaplace",
    "title": "InverseLaplace.ILtPair",
    "category": "type",
    "text": "ILtPair(ilt::AbstractILt, ft::Function)\n\nreturn an object of type ILtPair that associates ilt the inverse Laplace transform of a function with it \"exact\" numerical inverse ft. Calling abserr(p, t) returns the absolute error between the inverse transform and the exact value.\n\nExample\n\nThis example compares the inversion using the Weeks algorithm of the Laplace transform of cos(t) to its exact value at t=1.0.\n\njulia> p = ILtPair(Weeks(s -> s/(1+s^2)), cos);\njulia> abserr(p, 1.0)\n\n0.0\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.abserr",
    "page": "InverseLaplace",
    "title": "InverseLaplace.abserr",
    "category": "function",
    "text": "abserr(p::ILtPair, t)\n\nCompute the absolute error between the estimated inverse Laplace transform and \"exact\" numerical solution contained in p at the point t. See ILtPair.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.iltpair_power",
    "page": "InverseLaplace",
    "title": "InverseLaplace.iltpair_power",
    "category": "function",
    "text": "iltpair_power(n)\n\nReturn a TransformPair for the power function x^n. This can be used to construct an ILTPair.\n\njulia> p  = Talbot(iltpair_power(3));\n\njulia> Float64(abserr(p, 1)) # test Talbot method for Laplace transform of x^3, evaluated at 1\n2.0820366247539812e-26\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.TransformPair",
    "page": "InverseLaplace",
    "title": "InverseLaplace.TransformPair",
    "category": "type",
    "text": "TransformPair{T,V}\n\nA pair of functions for analyzing an inverse Laplace transform method. Field ft is the real-space function. Field fs is the Laplace-space function.\n\n\n\n\n\n"
},

{
    "location": "#Analzying-accuracy-1",
    "page": "InverseLaplace",
    "title": "Analzying accuracy",
    "category": "section",
    "text": "ILtPair\nabserr\niltpair_power\nTransformPair"
},

{
    "location": "#InverseLaplace.ilt",
    "page": "InverseLaplace",
    "title": "InverseLaplace.ilt",
    "category": "function",
    "text": "ilt(func::Function, t::AbstractFloat, M::Integer=32)\n\nilt is an alias for the default inverse Laplace transform method talbot.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.talbot",
    "page": "InverseLaplace",
    "title": "InverseLaplace.talbot",
    "category": "function",
    "text": "talbot(func::Function, t::AbstractFloat, M::Integer=talbot_default_num_terms)\n\nEvaluate the inverse Laplace transform of func at the point t. Use M terms in the algorithm. For typeof(t) is Float64, the default for M is 32. For BigFloat the default is 64.\n\nIf BigFloat precision is larger than default, try increasing M.\n\nExample\n\njulia> InverseLaplace.talbot(s -> 1 / s^3, 3)\n4.50000000000153\n\nnote: Note\nThis function uses the fixed Talbot method. It evaluates func for complex arguments.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.gwr",
    "page": "InverseLaplace",
    "title": "InverseLaplace.gwr",
    "category": "function",
    "text": "gwr(func::Function, t::AbstractFloat, M::Integer=gwr_default_num_terms)\n\nEvaluate the inverse Laplace transform of func at the point t. Use M terms in the algorithm. For typeof(t) is Float64, the default for M is 16. For BigFloat the default is 64.\n\nIf BigFloat precision is larger than default, try increasing M.\n\nExample\n\njulia> InverseLaplace.gwr( s -> 1/s^3, 3.0)\n4.499985907607361\n\nnote: Note\nThis function uses the Gaver-Wynn rho method. It evaluates func only for real arguments.\n\n\n\n\n\n"
},

{
    "location": "#InverseLaplace.talbotarr",
    "page": "InverseLaplace",
    "title": "InverseLaplace.talbotarr",
    "category": "function",
    "text": "talbotarr(func, ta::AbstractArray, M)\n\nCompute the inverse Laplace transform for each element in ta. Each evaluation of func(s) is used for all elements of ta. This may be faster than a broadcast application of talbot (i.e. talbot.(...) , but is in general, less accurate.  talbotarr uses the \"fixed\" Talbot method.\n\n\n\n\n\n"
},

{
    "location": "#Lower-level-interface-1",
    "page": "InverseLaplace",
    "title": "Lower-level interface",
    "category": "section",
    "text": "Some of the lower-level routines can be called directly, without constructing types defined in InverseLaplace.ilt\ntalbot\ngwr\nInverseLaplace.talbotarr"
},

{
    "location": "#References-1",
    "page": "InverseLaplace",
    "title": "References",
    "category": "section",
    "text": "J.A.C Weideman, Algorithms for Parameter Selection in the Weeks Method for Inverting the Laplace Transform, SIAM Journal on Scientific Computing, Vol. 21, pp. 111-128 (1999)Abate, J. and Valkó, P.P., Multi-precision Laplace transform inversion International Journal for Numerical Methods in Engineering, Vol. 60 (Iss. 5-7) pp 979–993 (2004)Valkó, P.P. and Abate, J., Comparison of Sequence Accelerators for the Gaver Method of Numerical Laplace Transform Inversion, Computers and Mathematics with Application,  Vol. 48 (Iss.3-40) pp. 629-636 (2004)"
},

]}
