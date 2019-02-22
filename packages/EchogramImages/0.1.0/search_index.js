var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EchogramImages-1",
    "page": "Readme",
    "title": "EchogramImages",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Simple echogram images of arbitrary matrices in Julia.Works in IJulia or any Julia development environment.A bit like EchogramPlots.jl but generates Images instead of graphs.A bit like imagesc in MATLAB."
},

{
    "location": "#Simple-example-1",
    "page": "Readme",
    "title": "Simple example",
    "category": "section",
    "text": "using EchogramImages\nimagesc(rand(100,100))"
},

{
    "location": "#EK60-example-1",
    "page": "Readme",
    "title": "EK60 example",
    "category": "section",
    "text": "A useful companion to the SimradEK60.jl package.using EchogramImages\nusing SimradEK60TestData\nusing SimradEK60\nps =collect(pings(EK60_SAMPLE));\nps38 = [p for p in ps if p.frequency == 38000];\nSv38 = Sv(ps38);\nimg = imagesc(Sv38,vmin=-95,vmax=-50)\nYou can also use other color schemesusing ColorSchemes\nimg = imagesc(Sv38,color=ColorSchemes.plasma)"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "My thanks to Tim Holy for sample code."
},

{
    "location": "autodocs/#EchogramImages.imagesc",
    "page": "Docstrings",
    "title": "EchogramImages.imagesc",
    "category": "function",
    "text": "imagesc(A;\n         vmin = nothing,\n         vmax = nothing,\n         color=EK500_COLOURS,\n         size=(480,640))\n\nA is any numeric array\n\ncolor can be a list of Color or come from ColorSchemes.jl or PerceptualColourMaps.\n\nSet size = nothing for full resolution.\n\nvmin and vmax are minimum and maximum values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EchogramImages.EK500_COLOURSEchogramImages.EchogramImagesEchogramImages.evalEchogramImages.imagescEchogramImages.include"
},

]}
