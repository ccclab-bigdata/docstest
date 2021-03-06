var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Lasso-1",
    "page": "Readme",
    "title": "Lasso",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Lasso.jl is a pure Julia implementation of the glmnet coordinate descent algorithm for fitting linear and generalized linear Lasso and Elastic Net models, as described in:Friedman, J., Hastie, T., & Tibshirani, R. (2010). Regularization paths for generalized linear models via coordinate descent. Journal of Statistical Software, 33(1), 1. http://www.jstatsoft.org/v33/i01/Lasso.jl also includes an implementation of the O(n) fused Lasso implementation described in:Johnson, N. A. (2013). A dynamic programming algorithm for the fused lasso and L0-segmentation. Journal of Computational and Graphical Statistics, 22(2), 246–260. doi:10.1080/10618600.2012.681238As well as an implementation of polynomial trend filtering based on:Ramdas, A., & Tibshirani, R. J. (2014). Fast and flexible ADMM algorithms for trend filtering. arXiv Preprint arXiv:1406.2082. Retrieved from http://arxiv.org/abs/1406.2082Also implements the Gamma Lasso, a concave regularization path glmnet variant: Taddy, M. (2017) One-Step Estimator Paths for Concave Regularization Journal of Computational and Graphical Statistics, 26:3, 525-536 http://dx.doi.org/10.1080/10618600.2016.1211532"
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "To fit a Lasso path with default parameters:fit(LassoPath, X, y, dist, link)dist is any distribution supported by GLM.jl and link defaults to the canonical link for that distribution.To fit a fused Lasso model:fit(FusedLasso, y, λ)To fit a polynomial trend filtering model:fit(TrendFilter, y, order, λ)To fit a Gamma Lasso path:fit(GammaLassoPath, X, y, dist, link; γ=1.0)It supports the same parameters as fit(LassoPath...), plus γ which controls the concavity of the regularization path. γ=0.0 is the Lasso. Higher values tend to result in sparser coefficient estimates.More documentation is available at ReadTheDocs."
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "User-specified weights are untested\nMaybe integrate LARS.jl"
},

{
    "location": "#See-also-1",
    "page": "Readme",
    "title": "See also",
    "category": "section",
    "text": "GLMNet.jl, a wrapper for the glmnet Fortran code.\nLARS.jl, an implementation of least angle regression for fitting entire linear (but not generalized linear) Lasso and Elastic Net coordinate paths."
},

]}
