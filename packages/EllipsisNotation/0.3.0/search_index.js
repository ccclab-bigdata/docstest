var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EllipsisNotation.jl-1",
    "page": "Readme",
    "title": "EllipsisNotation.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)This implements the notation .. for indexing arrays. It\'s similar to the Python ... in that it means \"all of the columns before (or after)\"."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"EllipsisNotation\")\nusing EllipsisNotation"
},

{
    "location": "#Example-Usage-1",
    "page": "Readme",
    "title": "Example Usage",
    "category": "section",
    "text": "A = Array{Int}(2,4,2)\n\nA[..,1] = [2 1 4 5\n           2 2 3 6]\n\nA[..,2] = [3 2 6 5\n          3 2 6 6]\n\nA[:,:,1] == [2 1 4 5\n             2 2 3 6] #true\n\nA[1,..] = reshape([3 4\n                  5 6\n                  4 5\n                  6 7],1,4,2) #v0.4 doesn\'t drop singleton dimension, v0.5 does\n\nB = [3 4\n    5 6\n    4 5\n    6 7]\n\nB == reshape(A[1,..],4,2) #true\n\nA[..,1,2] # Can do as many integers as you want on the end!"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "I would like to acknowledge M. Schauer for the .. notation implementation. He had the original idea, I just extended it and put it into a package because of how useful it has been to me."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EllipsisNotation...EllipsisNotation.EllipsisNotationEllipsisNotation.evalEllipsisNotation.fillcolonsEllipsisNotation.include"
},

]}
