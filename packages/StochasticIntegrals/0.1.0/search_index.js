var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#StochasticIntegrals.jl-1",
    "page": "Readme",
    "title": "StochasticIntegrals.jl",
    "category": "section",
    "text": "(Image: Build Status)This generates covariance matrices and Cholesky decompositions for a set of stochastic integrals. At the moment it only supports Ito integrals. Users specify the UnivariateFunction that is the integrand of the ito integral and a covariance matrix will be made of all such Ito integrals.There are a large number of convenience functions. This includes finding the variance and instantaneous volatility of an ito integral; for extracting the terminal correlation & covariance of a pair of stochastic integrals over a period of time; for generation of random draws from the set of Ito integrals (either pseudorandom or quasirandom). Given a draw of stochastic integrals, it is also possible to find the density of the multivariate normal distribution at this point. See the testing files for code examples."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Consider that we have three different stochastic integrals. These are:$\\int t^2 dZ $$\\int 5t dZ $$\\int e^{5 - t} dW $Where Z and W are Brownian Motions.We first write the integrands as univariate functions:using StochasticIntegrals\nusing UnivariateFunctions\nA_integrand = PE_Function(1.0,0.0,0.0,2)\nB_integrand = PE_Function(5.0,0.0,0.0,1)\nC_integrand = PE_Function(1.0,-1.0,5.0,0)Then we get the correlation matrix of the two Brownian motions that we have. For simplicity lets consider the case that they are uncorrelated. We also specify the labels for these Brownian motions. In this case they will identify that the first row/column of the correlation matrix is for the \"Z\" process and the second is for the \"W\" process.using LinearAlgebra\nbrownian_correlation_matrix = Symmetric(diagm(0 => ones(2)))\nbrownian_ids = [\"Z\", \"W\"]Now we package the integrands of our stochastic integrals together with their corresponding Brownian motion ids to represent an Ito integral. We must also specify a new id for the stochastic integral to ensure that we know what row/column of the covariance matrix we create represents which integral.A  = ito_integral(\"Z\", \"A\", A_integrand)\nB  = ito_integral(\"Z\", \"B\", B_integrand)\nC  = ito_integral(\"W\", \"C\", C_integrand)\nito_integrals = [A, B, C]Now we can place the ito integrals together with the brownian motion correlation matrix to make an \"ito_set\"ItoSet = ito_set(brownian_correlation_matrix, brownian_ids, ito_integrals)In this format we can access the volatility of any of the ito integrals at any point. We would usually be more interested in the statistical properties of the ito integrals at a point forward in time. This can be done by generating a covarianceatdate object. We must first specify the start and end limits on each integral. Below we look at the integrals  between 0.0 and 2.0. More generally time can be specified in Dates format. See testing files for examples.covar = covariance_at_date(ito_set_, 0.0, 2.0)All of the hard work is done inside the above constructor. In particular a covariance matrix is generated as well as its inverse, cholesky decomposition and determinant. These can be accessed directly in the normal way. Alternatively there are methods that can be called on a covar object to extract a correlation, covariance, variance or volatility using the stochastic integral ids. For instance to get the covariance between integrals A and B:covariance_of_A_and_B = get_covariance(covar, \"A\", \"B\")It is also possible to generate random numbers using either the getnormaldraws or getsobolnormal_draws functions. For instance to get 10 pseudorandom realisations of these integrals:draws = get_normal_draws(covar, 10)For ascertaining the probability of the integrals jointing reaching some set of values there are the pdf and log_likelihood methods. For instance to find the log likelihood of the first draw we obtained above:log_likelihood(covar, draws[1])See the testing files for more code examples."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "StochasticIntegrals.StochasticIntegralsStochasticIntegrals.brownians_in_useStochasticIntegrals.covariance_at_dateStochasticIntegrals.evalStochasticIntegrals.flat_itoStochasticIntegrals.get_correlationStochasticIntegrals.get_covarianceStochasticIntegrals.get_ito_integral_idsStochasticIntegrals.get_normal_drawsStochasticIntegrals.get_sobol_normal_drawsStochasticIntegrals.get_varianceStochasticIntegrals.get_volatilityStochasticIntegrals.get_zero_drawsStochasticIntegrals.includeStochasticIntegrals.ito_integralStochasticIntegrals.ito_setStochasticIntegrals.log_likelihoodStochasticIntegrals.make_covarianceStochasticIntegrals.make_covariance_matrixStochasticIntegrals.pdfStochasticIntegrals.tol"
},

]}
