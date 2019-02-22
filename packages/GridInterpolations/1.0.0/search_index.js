var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GridInterpolations-1",
    "page": "Readme",
    "title": "GridInterpolations",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)This package performs multivariate interpolation on a rectilinear grid. At the moment, it provides implementations of multilinear and simplex interpolation. As of benchmarks in December 2016, multilinear interpolation performs fastest and with the most accuracy.The following image visualizes grid-based interpolation in two dimensions, with shape of interpolater for (−0.3,0.8) inscribed. The small dots reﬂect the interpolation\'s estimate for sin(x)+2cos(y)+sin(5xy), which is the underlying reward function approximated by the large dot lattice.(Image: Illustration of performance of multilinear and simplex interpolation methods)For a description of multilinear and simplex interpolation see: Scott Davies, Multidimensional Triangulation and Interpolation for Reinforcement Learning, Advances in Neural Information Processing Systems, Cambridge, MA: MIT Press, 1997. pdfThere are some related packages, such as Grid.jl and Interpolations.jl.  "
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Start Julia and run the following command:Pkg.add(\"GridInterpolations\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To use the GridInterpolations module, begin your code withusing GridInterpolations"
},

{
    "location": "#Interpolation-1",
    "page": "Readme",
    "title": "Interpolation",
    "category": "section",
    "text": "Create two-dimensional interpolation grids, a data array, and a point of interest:grid = RectangleGrid([0., 0.5, 1.],[0., 0.5, 1.])  	# rectangular grid\nsGrid = SimplexGrid([0., 0.5, 1.],[0., 0.5, 1.])	# simplex grid\ngridData = [8., 1., 6., 3., 5., 7., 4., 9., 2.]   	# vector of value data at each cut\nx = [0.25, 0.75]  									# point at which to perform interpolationPerform interpolation on the rectangular grid:julia> interpolate(grid,gridData,x)\n5.25Or interpolate on the simplex grid:julia> interpolate(sGrid,gridData,x)\n6.0Compute interpolants for the grids:julia> sGrid = SimplexGrid([0., 0.5, 1.],[0., 0.5, 1.])\n[[0.0,0.5,1.0],[0.0,0.5,1.0]]\n\njulia> interpolants(sGrid, x)\n([4,5,8],[0.5,0.0,0.5])Convert an index to a Grid coordinate:julia> ind2x(grid, 3)\n2-element Array{Float64,1}:\n 1.0\n 0.0Number of vertices in the grid:julia> length(grid)\n9Number of dimensions:julia> dimensions(grid)\n2"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Contributors to this package include Maxim Egorov, Eric Mueller, and Mykel Kochenderfer."
},

{
    "location": "autodocs/#GridInterpolations.vertices",
    "page": "Docstrings",
    "title": "GridInterpolations.vertices",
    "category": "function",
    "text": "Return a vector of SVectors where the ith vector represents the vertex corresponding to the ith index of grid data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GridInterpolations.AbstractGridGridInterpolations.DEFAULT_UNSTABLEGridInterpolations.GridInterpolationsGridInterpolations.RectangleGridGridInterpolations.SimplexGridGridInterpolations.dimensionsGridInterpolations.evalGridInterpolations.includeGridInterpolations.ind2xGridInterpolations.ind2x!GridInterpolations.interpolantsGridInterpolations.interpolateGridInterpolations.labelGridInterpolations.lengthGridInterpolations.maskedInterpolateGridInterpolations.sortperm!GridInterpolations.vertices"
},

]}
