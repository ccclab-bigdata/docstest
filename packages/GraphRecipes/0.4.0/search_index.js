var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GraphRecipes-1",
    "page": "Readme",
    "title": "GraphRecipes",
    "category": "section",
    "text": "The repository formerly know as PlotRecipes(Image: Build Status)"
},

{
    "location": "#Primary-author:-Thomas-Breloff-(@tbreloff)-1",
    "page": "Readme",
    "title": "Primary author: Thomas Breloff (@tbreloff)",
    "category": "section",
    "text": "This repo maintains a collection of recipes for graph analysis, and is a reduced and refactored version of the previous PlotRecipes. It uses the powerful machinery of Plots and RecipesBase to turn simple transformations into flexible visualizations."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Spectral-1",
    "page": "Readme",
    "title": "Spectral",
    "category": "section",
    "text": "using GraphRecipes\nusing Plots\n\nconst n = 15\nconst A = Float64[ rand() < 0.5 ? 0 : rand() for i=1:n, j=1:n]\nfor i=1:n\n    A[i, 1:i-1] = A[1:i-1, i]\nend\n\ngraphplot(A,\n          node_weights = 1:n,\n          marker = (:YlOrRd, :rect),\n          marker_z = 1:n,\n          markersize = 3,\n          names = 1:n,\n          linecolor = :darkgrey,\n       )\n(Image: graph_one)graphplot(A,\n           node_weights = 1:n,\n           markercolor = :darkgray,\n           dim = 3,\n           markersize = 5,\n           linecolor = :darkgrey,\n           linealpha = 0.5\n       )\n(Image: graph_two)"
},

{
    "location": "#Arc-and-chord-diagrams-1",
    "page": "Readme",
    "title": "Arc and chord diagrams",
    "category": "section",
    "text": "using LinearAlgebra\nusing SparseArrays\nusing GraphRecipes\nusing Plots\n\nadjmat = Symmetric(sparse(rand(0:1,8,8)));\n\nplot(\n    graphplot(adjmat,\n              method=:chorddiagram,\n              names=[text(string(i), 8) for i in 1:8],\n              linecolor=:black,\n              fillcolor=:lightgray),\n\n    graphplot(adjmat,\n              method=:arcdiagram,\n              markersize=3,\n              linecolor=:black,\n              markercolor=:black)\n    )\n(Image: graph_three)"
},

{
    "location": "#Julia-code-–-AST-1",
    "page": "Readme",
    "title": "Julia code – AST",
    "category": "section",
    "text": "using GraphRecipes\nusing Plots\npyplot(ma=0.8,lc=:white,mc=:white,size=(800,600))\ntheme(:dark)\n\ncode = :(\nfunction mysum(list)\n    out = 0\n    for value in list\n        out += value\n    end\n    out\nend\n)\n\nplot(code, fontsize=5, shorten=0.2, axis_buffer=0.05)\n(Image: graph_four)"
},

{
    "location": "#Julia-Type-Trees-1",
    "page": "Readme",
    "title": "Julia Type Trees",
    "category": "section",
    "text": "using GraphRecipes\nusing Plots\n\npyplot(size=(800,600))\ntheme(:dark)\n\nplot(Integer, method=:tree, fontsize=4)\n(Image: graph_five)"
},

{
    "location": "autodocs/#GraphRecipes.directed_curve",
    "page": "Docstrings",
    "title": "GraphRecipes.directed_curve",
    "category": "function",
    "text": "This function builds a BezierCurve which leaves point p vertically upwards and arrives point q vertically upwards. It may create a loop if necessary. It assumes the view is [0,1]. That can be modified using the xview and yview keyword arguments (default: 0:1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphRecipes.partialcircle",
    "page": "Docstrings",
    "title": "GraphRecipes.partialcircle",
    "category": "function",
    "text": "get an array of tuples of points on a circle with radius r\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphRecipes.random_control_point",
    "page": "Docstrings",
    "title": "GraphRecipes.random_control_point",
    "category": "function",
    "text": "Randomly pick a point to be the center control point of a bezier curve, which is both equidistant between the endpoints and normally distributed around the midpoint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GraphRecipes.GraphPlotGraphRecipes.GraphRecipesGraphRecipes._graph_funcsGraphRecipes._graph_inputsGraphRecipes.add_astGraphRecipes.add_subs!GraphRecipes.adjlist_and_degreesGraphRecipes.arc_diagramGraphRecipes.arcdiagram_limitsGraphRecipes.arcshapeGraphRecipes.buchheim_graphGraphRecipes.by_axis_local_stress_graphGraphRecipes.chord_diagramGraphRecipes.compute_laplacianGraphRecipes.compute_tree_layersGraphRecipes.compute_tree_layers2GraphRecipes.directed_curveGraphRecipes.estimate_distanceGraphRecipes.evalGraphRecipes.get_adjacency_listGraphRecipes.get_adjacency_matrixGraphRecipes.get_source_destiny_weightGraphRecipes.graphplotGraphRecipes.graphplot!GraphRecipes.includeGraphRecipes.isnothingGraphRecipes.make_symmetricGraphRecipes.norm_ijGraphRecipes.partialcircleGraphRecipes.prepare_graph_inputsGraphRecipes.random_control_pointGraphRecipes.shift_children!GraphRecipes.shorten_segmentGraphRecipes.spectral_graphGraphRecipes.stressGraphRecipes.tree_graph"
},

]}
