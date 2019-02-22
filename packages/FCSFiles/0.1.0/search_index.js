var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FCSFiles-1",
    "page": "Readme",
    "title": "FCSFiles",
    "category": "section",
    "text": "Add FileIO.jl integration for FCS files(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using FileIO\n\njulia> flowrun = load(\"example.fcs\")\nFCS.FlowSample{Float32}\n    Machine: LSRFortessa\n    Begin Time: 14:12:03\n    End Time: 14:12:25\n    Date: 17-MAR-2017\n    File: Specimen_001_Tube_002_002.fcs\n    Axes:\n        FSC-A\n        FSC-H\n        FSC-W\n        SSC-A\n        SSC-H\n        SSC-W\n        B_530-30-A\n        Time\n\njulia> using Gadfly\n\njulia> p = plot(x=flowrun[\"FSC-A\"], y=flowrun[\"SSC-A\"], Geom.histogram2d,\nGuide.xlabel(\"FSC-A\"), Guide.ylabel(\"SSC-A\"), Coord.cartesian(xmin=0, ymin=0))\n\njulia> draw(PNG(\"example.png\", 10cm, 7cm, dpi=300), p)\n(Image: )"
},

{
    "location": "autodocs/#FCSFiles.grab_word",
    "page": "Docstrings",
    "title": "FCSFiles.grab_word",
    "category": "function",
    "text": "grab_word(iter, state, delimiter) -> word, state\n\nGrabs the next word from the iterator iter. Takes care to handle escaped delimiters specified by delimiter. Returns a string containing the word and the state of the iterator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FCSFiles.verify_text",
    "page": "Docstrings",
    "title": "FCSFiles.verify_text",
    "category": "function",
    "text": "verify_text(text_mappings) -> Void\n\nChecks that all required keywords are present in the textmapping dictionary returned by `parsetext`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FCSFiles.FCSFilesFCSFiles.FlowSampleFCSFiles.evalFCSFiles.get_endian_funcFCSFiles.grab_wordFCSFiles.includeFCSFiles.loadFCSFiles.opt_paramsFCSFiles.parse_dataFCSFiles.parse_headerFCSFiles.parse_textFCSFiles.required_keywordsFCSFiles.verify_text"
},

]}
