var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FeatherLib-1",
    "page": "Readme",
    "title": "FeatherLib",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: FeatherLib) (Image: codecov)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This is a low level package to read feather files. It is not meant to be used by end users, but rather as a building block for other packages that expose user friendly APIs for file IO.End users are encouraged to use either FeatherFiles.jl or Feather.jl to interact with feather files."
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "The package exports two functions: featherread and featherwrite.Use the featherread function to read a feather file:data = featherread(\"testfile.feather\")data will then be of type ResultSet. The field columns is a vector of vectors and holds the actual data columns. The field names returns the names of the columns. The description and metadata fields return additional data from the feather file.Use the featherwrite function to write a feather file:featherwrite(\"testfile.feather\", column_data, column_names)columns should be a vector of vectors that holds the data to be written. column_names should be a vector of Symbols with the column names."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Douglas Bates, ExpandingMan and Jacob Quinn deserve most of the credit for the code in this package: their code in the Feather.jl package was the starting point for this package here. They are of course not responsible for any errors introduced by myself in this package here."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FeatherLib.FEATHER_MAGIC_BYTESFeatherLib.FEATHER_VERSIONFeatherLib.FeatherLibFeatherLib.JULIA_TIME_DICTFeatherLib.JULIA_TYPE_DICTFeatherLib.METADATA_TIME_DICTFeatherLib.METADATA_TYPE_DICTFeatherLib.MIN_FILE_LENGTHFeatherLib.MetadataFeatherLib.NON_PRIMITIVE_TYPESFeatherLib.ResultSetFeatherLib._first_col_convert_passFeatherLib.bitmasklengthFeatherLib.constructcolumnFeatherLib.evalFeatherLib.featherreadFeatherLib.feathertypeFeatherLib.featherwriteFeatherLib.getctableFeatherLib.getmetadataFeatherLib.getoutputlengthFeatherLib.includeFeatherLib.isprimitivetypeFeatherLib.juliatypeFeatherLib.loadfileFeatherLib.metalengthFeatherLib.metapositionFeatherLib.offsetslengthFeatherLib.offsetslocFeatherLib.rootpositionFeatherLib.startlocFeatherLib.validatefileFeatherLib.valueslengthFeatherLib.writecolumnFeatherLib.writecontentsFeatherLib.writemetadata"
},

]}
