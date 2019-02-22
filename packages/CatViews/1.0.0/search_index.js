var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CatViews-1",
    "page": "Readme",
    "title": "CatViews",
    "category": "section",
    "text": "(Image: Build Status) (Image: License)<img src=\"http://i.imgur.com/OHtZ2HZ.jpg\" width=\"300px\">In optimization and machine learning, model parameters can be distributed across multiple arrays and can interact in complex ways. However, it can be useful to abstract away these details (e.g. when computing gradients) and collect all the parameters into a single vector. This is a lightweight package that enables you to switch between these two perspectives seemlessly.CatViews exports two main things:CatView - An array that can represent a sequence of preallocated arrays within a vector. \nsplitview - A function that produces a sequence of new arrays as views into a vector.Both of these functions make use of array views so that ***copying is not required!***In general, you should use splitview when you know the array shapes beforehand, and only use CatView when you don\'t have access to this information. Iterating through the parameter vector should be faster if you use splitview."
},

{
    "location": "#splitview-documentation-1",
    "page": "Readme",
    "title": "splitview documentation",
    "category": "section",
    "text": "In the following example, we create two matrices A and B that are linked to a parameter vector x.x, (A, B) = splitview((2, 3), (3, 2))\n\n# mutating x updates A and B\nx[1:6] = 1:6\nx[7:12] = -6:-1\n\n@show A  # prints [1 3 5; 2 4 6]\n@show B  # prints [-6 -3; -5 -2; -4 -1]Under the hood, A and B are reshaped views into x. Reshaping a view does not causing copying in Julia as of v0.5You can also get a list of the indices in x that represent the start and end of the arrays:using Random: randn!\nx, (A, B, C), s, e = splitview((3, 3), (3, 3), (3, 3, 3))\nfor X in (A, B, C)\n  randn!(X)\nend\nx[s[1]:e[1]] .== vec(A)\nx[s[2]:e[2]] .== vec(B)\nx[s[3]:e[3]] .== vec(C)"
},

{
    "location": "#Use-vecidx-to-get-the-index-into-the-parent-array-1",
    "page": "Readme",
    "title": "Use vecidx to get the index into the parent array",
    "category": "section",
    "text": "CatViews also exports a simple function that allows you to match indices between the parameter vector and the reshaped matrices:x, (A, B) = splitview((2, 3), (3, 2))\n\n# fill x with random numbers\nrandn!(x)\n\ni = vecidx(A, 2, 1) # i == 2\nx[i] == A[2, 1]\n\nj = vecidx(B,(3, 2)) # j == 12\nx[j] == B[3, 2]"
},

{
    "location": "#CatView-documentation-1",
    "page": "Readme",
    "title": "CatView documentation",
    "category": "section",
    "text": "Suppose we have A and B already preallocated, and we want to represent them as a parameter vector x:A = randn(10, 10);   # imagine this is a large matrix so copying is really undesirable\nB = randn(10, 10);   # imagine this is also large so copying totally sucks\na = view(A, :);      # vector view of A, no copying\nb = view(B, :);      # vector view of B, no copying\nx = vcat(a, b);      # ACK!! causes copying!!\ntypeof(x)            # returns Array, rather than SubArrayFurthermore, if you mutate x in this example, the chances aren\'t automatically reflected in A and B.A = randn(10, 10);\nB = randn(10, 10);\na = view(A, :);      # no copying\nb = view(B, :);      # no copying\nx = CatView(a, b);   # no copying!!!You can treat x as you would any other vector in Julia! Like splitview, mutating x will also update A and B:x[1:3] = 999\n@show A[1:4, 1:4]4×4 Array{Float64,2}:\n 999.0       0.0188983  -0.720472   1.01939  \n 999.0       2.4073     -2.52788   -0.0497283\n 999.0      -1.9217     -0.256222   0.642362 \n 1.52075  -0.173562    0.604112  -0.574269 Did I mention that this happens without copying? That\'s kind of the whole point."
},

{
    "location": "#Why-is-this-useful?-1",
    "page": "Readme",
    "title": "Why is this useful?",
    "category": "section",
    "text": "See examples/pca.jl for a self-contained use case of CatViews. In this optimization problem, there are two matrices (corresponding to the principal components and loadings) of optimization variables. Concatenating these variables into a single vector would provide a way to link this model to many generic optimization solvers. A CatView is a very simple way to do this. It avoids unnecessary copy operations (a potential performance enhancement) and also simplifies the code to implement this."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CatViews.CatViewCatViews.CatViewsCatViews.FastContiguousSubArrayCatViews.evalCatViews.includeCatViews.parentindexCatViews.splitviewCatViews.vecidx"
},

]}
