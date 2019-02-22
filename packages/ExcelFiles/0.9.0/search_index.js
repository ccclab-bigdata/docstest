var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ExcelFiles-1",
    "page": "Readme",
    "title": "ExcelFiles",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: ExcelFiles) (Image: codecov.io)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package provides load support for Excel files under the FileIO.jl package."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Use Pkgadd(ExcelFiles) in Julia to install ExcelFiles and its dependencies."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Load-an-Excel-file-1",
    "page": "Readme",
    "title": "Load an Excel file",
    "category": "section",
    "text": "To read a Excel file into a DataFrame, use the following julia code:using ExcelFiles, DataFrames\n\ndf = DataFrame(load(\"data.xlsx\", \"Sheet1\"))The call to load returns a struct that is an IterableTable.jl, so it can be passed to any function that can handle iterable tables, i.e. all the sinks in IterableTable.jl. Here are some examples of materializing an Excel file into data structures that are not a DataFrame:using ExcelFiles, DataTables, IndexedTables, TimeSeries, Temporal, Gadfly\n\n# Load into a DataTable\ndt = DataTable(load(\"data.xlsx\", \"Sheet1\"))\n\n# Load into an IndexedTable\nit = IndexedTable(load(\"data.xlsx\", \"Sheet1\"))\n\n# Load into a TimeArray\nta = TimeArray(load(\"data.xlsx\", \"Sheet1\"))\n\n# Load into a TS\nts = TS(load(\"data.xlsx\", \"Sheet1\"))\n\n# Plot directly with Gadfly\nplot(load(\"data.xlsx\", \"Sheet1\"), x=:a, y=:b, Geom.line)The load function also takes a number of parameters:function load(f::FileIO.File{FileIO.format\"Excel\"}, range; keywords...)"
},

{
    "location": "#Arguments:-1",
    "page": "Readme",
    "title": "Arguments:",
    "category": "section",
    "text": "range: either the name of the sheet in the Excel file to read, or a full Excel range specification (i.e. \"Sheetname!A1:B2\").\nThe keywords arguments are the same as in ExcelReaders.jl (which is used under the hood to read Excel files). When range is a sheet name, the keyword arguments for the readxlsheet function from ExcelReaders.jl apply, if range is a range specification, the keyword arguments for the readxl function apply."
},

{
    "location": "#Save-an-Excel-file-1",
    "page": "Readme",
    "title": "Save an Excel file",
    "category": "section",
    "text": "The following code saves any iterable table as a feather file:using ExcelFiles\n\nsave(\"output.xlsx\", it)This will work as long as it is any of the types supported as sources in IterableTables.jl."
},

{
    "location": "#Using-the-pipe-syntax-1",
    "page": "Readme",
    "title": "Using the pipe syntax",
    "category": "section",
    "text": "load also support the pipe syntax. For example, to load an Excel file into a DataFrame, one can use the following code:using ExcelFiles, DataFrame\n\ndf = load(\"data.xlsx\", \"Sheet1\") |> DataFrameTo save an iterable table, one can use the following form:using ExcelFiles, DataFrame\n\ndf = # Aquire a DataFrame somehow\n\ndf |> save(\"output.xlsx\")The pipe syntax is especially useful when combining it with Query.jl queries, for example one can easily load an Excel file, pipe it into a query, then pipe it to the save function to store the results in a new file."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ExcelFiles.@format_strExcelFiles.ExcelFileExcelFiles.ExcelFilesExcelFiles.FileExcelFiles._readxlExcelFiles.evalExcelFiles.fileio_loadExcelFiles.fileio_saveExcelFiles.gennamesExcelFiles.includeExcelFiles.loadExcelFiles.save"
},

]}
