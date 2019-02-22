var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LassoPlot-1",
    "page": "Readme",
    "title": "LassoPlot",
    "category": "section",
    "text": "Linux/MacOS Windows Code\n[![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] [![][coveralls-img]][coveralls-url]LassoPlot.jl is a companion package to Lasso.jl which plots regularization paths in a similar fashion to the glmnet and gamlr R packages."
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "Install the LassoPlot package.First fit a Lasso pathusing Lasso, LassoPath\npath = fit(LassoPath, X, y, dist, link)then plot itplot(path)Use x=:segment, :λ, or :logλ to change the x-axis, as in:plot(path; x=:logλ)LassoPlot uses Plots.jl, so you can choose from several plotting backends.See documentation of the provided plot function for optional arguments (type ?plot in the REPL):help?> plot[travis-img]: https://travis-ci.org/AsafManela/LassoPlot.jl.svg?branch=master [travis-url]: https://travis-ci.org/AsafManela/LassoPlot.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/AsafManela/LassoPlot.jl?svg=true [appveyor-url]: https://ci.appveyor.com/project/AsafManela/lassoplot-jl[coveralls-img]: https://coveralls.io/repos/AsafManela/LassoPlot.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/r/AsafManela/LassoPlot.jl?branch=master[pkg-0.6-img]: http://pkg.julialang.org/badges/LassoPlot0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=LassoPlot&ver=0.6 [pkg-0.7-img]: http://pkg.julialang.org/badges/LassoPlot0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=LassoPlot&ver=0.7"
},

{
    "location": "autodocs/#RecipesBase.plot",
    "page": "Docstrings",
    "title": "RecipesBase.plot",
    "category": "function",
    "text": "plot(path::RegularizationPath, args...; <keyword arguments>)\n\nPlots a RegularizationPath fitted with the Lasso package.\n\nThe minimum AICc segment is represented by a solid vertical line and the CVmin and CV1se cross-validation selected segments by dashed vertical lines.\n\nBy default it shows nonzero coefficients at the AICc in color and the rest grayed out.\n\nLassoPlot uses Plots.jl, so you can set any supported backend before plotting, and add any features of the plot afterwards.\n\nExample:\n\n    using Lasso, LassoPath, Plots\n    path = fit(LassoPath, X, y, dist, link)\n    plot(path)\n\nArguments\n\nargs... additional arguments passed to Plots.plot()\n\nKeywords\n\nx=:segment one of (:segment, :λ, :logλ)\nvarnames=nothing specify variable names\nselect=:AICc Selection criteria in (:AIC, :CVmin, :CV1se) for which coefficients   will be shown in color. The rest are grayed out.\nshowselectors=[:AICc,:CVmin,:CV1se] shown vertical lines\nselectedvars=[] Subset of the variables to present, or empty vector for all\nkwargs... additional keyword arguments passed along to fit(GammaLassoPath,...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LassoPlot.LassoPlotLassoPlot.evalLassoPlot.includeLassoPlot.plot"
},

]}
