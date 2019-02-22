var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#KernelDensityEstimatePlotting.jl-1",
    "page": "Readme",
    "title": "KernelDensityEstimatePlotting.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)(Image: KernelDensityEstimatePlotting) (Image: KernelDensityEstimatePlotting) (Image: KernelDensityEstimatePlotting)This package provides the plotting functionality for the KernelDensityEstimate.jl package, and currently only supports the Gadfly back-end.This package is also used extensively by the RoMEPlotting.jl package."
},

{
    "location": "#Install-1",
    "page": "Readme",
    "title": "Install",
    "category": "section",
    "text": "This package can be installed with:julia> ] # to activate package manager\npkg> add KernelDensityEstimatePlotting"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Basic-Examples-1",
    "page": "Readme",
    "title": "Basic Examples",
    "category": "section",
    "text": "using KernelDensityEstimate, KernelDensityEstimatePlotting\n\np = kde!(randn(3,100))\nplot(marginal(p, [1]))\nplot(marginal(p, [2,3]))\nplot(p)"
},

{
    "location": "#More-Examples-1",
    "page": "Readme",
    "title": "More Examples",
    "category": "section",
    "text": "Please see examples on KernelDensityEstimate.jl."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "KernelDensityEstimatePlotting.@ifundKernelDensityEstimatePlotting.DOYTICKSKernelDensityEstimatePlotting.KernelDensityEstimatePlottingKernelDensityEstimatePlotting.NothingUnionKernelDensityEstimatePlotting.draw1D!KernelDensityEstimatePlotting.drawAllPairsKernelDensityEstimatePlotting.drawHorDensKernelDensityEstimatePlotting.drawPairKernelDensityEstimatePlotting.evalKernelDensityEstimatePlotting.includeKernelDensityEstimatePlotting.plotKernelDensityEstimatePlotting.plotKDEKernelDensityEstimatePlotting.plotKDEContourKernelDensityEstimatePlotting.stackMarginalsKernelDensityEstimatePlotting.stackingKernelDensityEstimatePlotting.toggleYTicksKernelDensityEstimatePlotting.vstackedPlots"
},

]}
