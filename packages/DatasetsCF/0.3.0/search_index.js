var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DatasetsCF.jl-Collection-of-Collaborative-Datasets-1",
    "page": "Readme",
    "title": "DatasetsCF.jl - Collection of Collaborative Datasets",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Installation: at the Julia REPL, Pkg.add(\"DatasetsCF\")Reporting Issues and Contributing: See CONTRIBUTING.md"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using DatasetsCF\n\njulia> dataset = DatasetsCF.MovieLens();\n\njulia> using Persa\n\njulia> using Statistic\n\njulia> μ = mean(dataset)\n3.52986"
},

{
    "location": "#Datasets-1",
    "page": "Readme",
    "title": "Datasets",
    "category": "section",
    "text": "List of package datasets:Dataset Title\nMovieLens 100k This is a set of 100,000 ratings given by a set of users to a set of movies.\nMovieLens 1M This is a set of 10,000,000 ratings given by a set of users to a set of movies."
},

{
    "location": "autodocs/#DatasetsCF.MovieLens",
    "page": "Docstrings",
    "title": "DatasetsCF.MovieLens",
    "category": "function",
    "text": "MovieLens()::Persa.Dataset\n\nReturn MovieLens 100k dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DatasetsCF.MovieLens1M",
    "page": "Docstrings",
    "title": "DatasetsCF.MovieLens1M",
    "category": "function",
    "text": "MovieLens1M()::Persa.Dataset\n\nReturn MovieLens 1M dataset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DatasetsCF.DatasetsCFDatasetsCF.MovieLensDatasetsCF.MovieLens1MDatasetsCF.defdirDatasetsCF.evalDatasetsCF.getmovielensdataDatasetsCF.getmovielensdata1mDatasetsCF.include"
},

]}
