var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CommunityDetection-1",
    "page": "Readme",
    "title": "CommunityDetection",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#CommunityDetection.jl-1",
    "page": "Readme",
    "title": "CommunityDetection.jl",
    "category": "section",
    "text": "Implements community detection for LightGraphs.jl. Both Nonbacktracking and Bethe Hessian detection are supported."
},

{
    "location": "autodocs/#CommunityDetection.community_detection_bethe",
    "page": "Docstrings",
    "title": "CommunityDetection.community_detection_bethe",
    "category": "function",
    "text": "community_detection_bethe(g::AbstractGraph, k=-1; kmax=15)\n\nPerform detection for k communities using the spectral properties of the  Bethe Hessian matrix associated to g. If k is omitted or less than 1, the optimal number of communities will be automatically selected. In this case the maximum number of detectable communities is given by kmax. Return a vector containing the vertex assignments.\n\nReferences\n\nSaade et al.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CommunityDetection.community_detection_nback",
    "page": "Docstrings",
    "title": "CommunityDetection.community_detection_nback",
    "category": "function",
    "text": "community_detection_nback(g::AbstractGraph, k::Int)\n\nReturn an array, indexed by vertex, containing commmunity assignments for graph g detecting k communities. Community detection is performed using the spectral properties of the  non-backtracking matrix of g.\n\nReferences\n\nKrzakala et al.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CommunityDetection.nonbacktrack_embedding",
    "page": "Docstrings",
    "title": "CommunityDetection.nonbacktrack_embedding",
    "category": "function",
    "text": "nonbacktrack_embedding(g::AbstractGraph, k::Int)\n\nPerform spectral embedding of the non-backtracking matrix of g. Return a matrix ϕ where ϕ[:,i] are the coordinates for vertex i.\n\nImplementation Notes\n\nDoes not explicitly construct the non_backtracking_matrix. See Nonbacktracking for details.\n\nReferences\n\nKrzakala et al..\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CommunityDetection.CommunityDetectionCommunityDetection.community_detection_betheCommunityDetection.community_detection_nbackCommunityDetection.community_detection_thresholdCommunityDetection.evalCommunityDetection.includeCommunityDetection.nonbacktrack_embedding"
},

]}
