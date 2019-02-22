var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BedgraphFiles.jl-1",
    "page": "Readme",
    "title": "BedgraphFiles.jl",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: BedgraphFiles) (Image: codecov.io) (Image: Coverage Status)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides load and save support for Bedgraph files under the FileIO.jl package.This package is largely – if not completely – inspired by the work of David Anthoff."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install BedgraphFiles from the Julia REPL:using Pkg\nadd(\"BedgraphFiles\")\n#Pkg.add(\"BedgraphFiles\") for julia prior to v 0.7"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Load-a-Bedgraph-file-1",
    "page": "Readme",
    "title": "Load a Bedgraph file",
    "category": "section",
    "text": "To read a Bedgraph file into a DataFrame, use the following Julia code:using FileIO, BedgraphFiles, DataFrames\n\ndf = DataFrame(load(\"data.bedgraph\"))The call to load returns a struct that is an IterableTable.jl, so it can be passed to any function that can handle iterable tables, i.e. all the sinks in IterableTable.jl. Here are some examples of materialising a Bedgraph file into data structures that are not a DataFrame:using FileIO, BedgraphFiles, DataTables, IndexedTables, Gadfly\n\n# Load into a DataTable\ndt = DataTable(load(\"data.bedgraph\"))\n\n# Load into an IndexedTable\nit = IndexedTable(load(\"data.bedgraph\"))\n\n# Plot directly with Gadfly\nplot(load(\"data.bedgraph\"), x=:a, y=:b, Geom.line)"
},

{
    "location": "#Save-a-Bedgraph-file-1",
    "page": "Readme",
    "title": "Save a Bedgraph file",
    "category": "section",
    "text": "Note: saving on top of an existing file will overwrite metadata/header information with a minimal working header.The following code saves any iterable table as a Bedgraph file:using FileIO, BedgraphFiles\n\nsave(\"output.bedgraph\", it)This will work as long as it is any of the types supported as sources in IterableTables.jl."
},

{
    "location": "#Using-the-pipe-syntax-1",
    "page": "Readme",
    "title": "Using the pipe syntax",
    "category": "section",
    "text": "Both load and save also support the pipe syntax. For example, to load a Bedgraph file into a DataFrame, one can use the following code:using FileIO, BedgraphFiles, DataFrame\n\ndf = load(\"data.bedgraph\") |> DataFrameTo save an iterable table, one can use the following form:using FileIO, BedgraphFiles, DataFrame\n\ndf = # Aquire a DataFrame somehow\n\ndf |> save(\"output.bedgraph\")The pipe syntax is especially useful when combining it with Query.jl queries, for example one can easily load a Bedgraph file, pipe it into a query, then pipe it to the save function to store the results in a new file."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BedgraphFiles.BedgraphFileBedgraphFiles.BedgraphFileFormatBedgraphFiles.BedgraphFilesBedgraphFiles._loaddataBedgraphFiles.evalBedgraphFiles.fileio_loadBedgraphFiles.fileio_saveBedgraphFiles.includeBedgraphFiles.loadBedgraphFiles.save"
},

]}
