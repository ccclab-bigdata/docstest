var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Hilbert-Schmidt-Independence-Criterion-(HSIC)-1",
    "page": "Readme",
    "title": "Hilbert-Schmidt Independence Criterion (HSIC)",
    "category": "section",
    "text": "This package provides basic implementations of the Hilbert-Schmidt Independence Criterion (HSIC) for Julia 1.0."
},

{
    "location": "#What-is-implemented-1",
    "page": "Readme",
    "title": "What is implemented",
    "category": "section",
    "text": "The package currently contains the following implementations:Gamma HSIC (HSIC with Gamma approximation) [1]"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "The gamma HSIC can be run using:X = randn(1, 100) # rows are samples\nY = randn(1, 100) * 0.2 # rows are samples\np = 0.1 # p-value (level of test)\n(value, threshold) = gammaHSIC(X, Y, α = p)\nindependent = value < threshold"
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "[1] Gretton, Arthur, et al. \"A kernel statistical test of independence.\" Advances in Neural Information Processing Systems. 2007."
},

{
    "location": "autodocs/#HilbertSchmidtIndependenceCriterion.estimateKernelSize",
    "page": "Docstrings",
    "title": "HilbertSchmidtIndependenceCriterion.estimateKernelSize",
    "category": "function",
    "text": "estimateKernelSize{T <: Real}(X::Array{T, 2}; sampleSize = 100)\n\nEstimate kernel size by taking median distance between points.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HilbertSchmidtIndependenceCriterion.gammaHSIC",
    "page": "Docstrings",
    "title": "HilbertSchmidtIndependenceCriterion.gammaHSIC",
    "category": "function",
    "text": "gammaHSIC(X::Array{T, 2}, Y::Array{T, 2})\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HilbertSchmidtIndependenceCriterion.rbfDotProduct",
    "page": "Docstrings",
    "title": "HilbertSchmidtIndependenceCriterion.rbfDotProduct",
    "category": "function",
    "text": "rbfDotProduct(X::Array{T, 2}, X::Array{T, 2}, kernelSize::Float64)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "HilbertSchmidtIndependenceCriterion.HilbertSchmidtIndependenceCriterionHilbertSchmidtIndependenceCriterion.estimateKernelSizeHilbertSchmidtIndependenceCriterion.evalHilbertSchmidtIndependenceCriterion.eyeHilbertSchmidtIndependenceCriterion.gammaHSICHilbertSchmidtIndependenceCriterion.includeHilbertSchmidtIndependenceCriterion.rbfDotProduct"
},

]}
