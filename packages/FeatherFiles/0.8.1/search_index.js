var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FeatherFiles-1",
    "page": "Readme",
    "title": "FeatherFiles",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: FeatherFiles) (Image: codecov.io)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides load and save support for Feather files under the FileIO.jl package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Use Pkg.add(\"FeatherFiles\") in Julia to install FeatherFiles and its dependencies."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Load-a-feather-file-1",
    "page": "Readme",
    "title": "Load a feather file",
    "category": "section",
    "text": "To read a feather file into a DataFrame, use the following julia code:using FeatherFiles, DataFrames\n\ndf = DataFrame(load(\"data.feather\"))The call to load returns a struct that is an IterableTable.jl, so it can be passed to any function that can handle iterable tables, i.e. all the sinks in IterableTable.jl. Here are some examples of materializing a feather file into data structures that are not a DataFrame:using FeatherFiles, DataTables, IndexedTables, TimeSeries, Temporal, Gadfly\n\n# Load into a DataTable\ndt = DataTable(load(\"data.feather\"))\n\n# Load into an IndexedTable\nit = IndexedTable(load(\"data.feather\"))\n\n# Load into a TimeArray\nta = TimeArray(load(\"data.feather\"))\n\n# Load into a TS\nts = TS(load(\"data.feather\"))\n\n# Plot directly with Gadfly\nplot(load(\"data.feather\"), x=:a, y=:b, Geom.line)"
},

{
    "location": "#Save-a-feather-file-1",
    "page": "Readme",
    "title": "Save a feather file",
    "category": "section",
    "text": "The following code saves any iterable table as a feather file:using FeatherFiles\n\nsave(\"output.feather\", it)This will work as long as it is any of the types supported as sources in IterableTables.jl."
},

{
    "location": "#Using-the-pipe-syntax-1",
    "page": "Readme",
    "title": "Using the pipe syntax",
    "category": "section",
    "text": "Both load and save also support the pipe syntax. For example, to load a feather file into a DataFrame, one can use the following code:using FeatherFiles, DataFrame\n\ndf = load(\"data.feather\") |> DataFrameTo save an iterable table, one can use the following form:using FeatherFiles, DataFrame\n\ndf = # Aquire a DataFrame somehow\n\ndf |> save(\"output.feather\")The pipe syntax is especially useful when combining it with Query.jl queries, for example one can easily load a feather file, pipe it into a query, then pipe it to the save function to store the results in a new file."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FeatherFiles.@format_strFeatherFiles.DataValueArrowVectorFeatherFiles.FeatherFileFeatherFiles.FeatherFilesFeatherFiles.FileFeatherFiles.MissingDataValueVectorFeatherFiles.evalFeatherFiles.fileio_loadFeatherFiles.fileio_saveFeatherFiles.includeFeatherFiles.loadFeatherFiles.save"
},

]}
