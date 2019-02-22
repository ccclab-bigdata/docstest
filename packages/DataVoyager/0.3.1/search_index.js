var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataVoyager-1",
    "page": "Readme",
    "title": "DataVoyager",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: DataVoyager) (Image: codecov.io)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides julia integration for the Voyager data exploration tool."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "DataVoyager.jl can be used for data exploration. It can help you visualize and understand any data that is in a tabular format.You can install the package via the julia package manager:Pkg.add(\"DataVoyager\")You create a new voyager window by calling Voyager:using DataVoyager\n\nv = Voyager()By itself this is not very useful, the next step is to load some data into voyager. Lets assume your data is in a DataFrame:using DataFrames, DataVoyager\n\ndata = DataFrame(a=[rand(100), randn(100)])\n\nv = Voyager(data)You can also use the pipe to load data into voyager:using DataFrames, DataVoyager\n\ndata = DataFrame(a=[rand(100), randn(100)])\n\nv = data |> Voyager()You can load any IterableTables.jl source into voyager, i.e. not just DataFrames. For example, you can load some data from a CSV file with CSVFiles.jl, filter them with Query.jl and then visualize the result with voyager:using FileIO, CSVFiles, Query, DataVoyager\n\nload(\"data.csv\") |> @filter(_.age>30) |> Voyager()In this example the data is streamed directly into voyager and at no point is any DataFrame allocated."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DataVoyager.DataVoyagerDataVoyager.VoyagerDataVoyager.appDataVoyager.evalDataVoyager.include"
},

]}
