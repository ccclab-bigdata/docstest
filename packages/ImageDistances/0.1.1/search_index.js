var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageDistances.jl-1",
    "page": "Readme",
    "title": "ImageDistances.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: ImageDistances) (Image: codecov.io)Distances between images following the Distances.jl API."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:Pkg.add(\"ImageDistances\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using Distances\nusing ImageDistances\n\nd = ModifiedHausdorff()\n\n# distance between two images\nevaluate(d, imgA, imgB)\n\n# two lists of images\nimgsA = [imgA, imgB, ...]\nimgsB = [imgB, imgA, ...]\n\n# distance between the \"columns\"\ncolwise(d, imgsA, imgsB)\n\n# distance between every pair of images\npairwise(d, imgsA, imgsB)\npairwise(d, imgsA)Like in Distances.jl, huge performance gains are obtained by calling the colwise and pairwise functions instead of naively looping over a collection of images and calling evaluate."
},

{
    "location": "#Distances-1",
    "page": "Readme",
    "title": "Distances",
    "category": "section",
    "text": "Distance type Convenient syntax References\nHausdorff and ModifiedHausdorff hausdorff(imgA,imgB) and modified_hausdorff(imgA,imgB) Dubuisson, M-P et al. 1994. A Modified Hausdorff Distance for Object-Matching.\nCIEDE2000 ciede2000(imgA,imgB) and ciede2000(imgA,imgB,ciede_metric) Sharma, G., Wu, W., and Dalal, E. N., 2005. The CIEDE2000 color‐difference formula."
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions.Please open an issue if you encounter any problems."
},

{
    "location": "autodocs/#ImageDistances.CIEDE2000",
    "page": "Docstrings",
    "title": "ImageDistances.CIEDE2000",
    "category": "type",
    "text": "CIEDE2000(metric)\n\nThe pixel-wise CIEDE2000 color-difference formula.\n\nReferences\n\nSharma, G., Wu, W., and Dalal, E. N., 2005. The CIEDE2000 color‐difference formula.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDistances.Hausdorff",
    "page": "Docstrings",
    "title": "ImageDistances.Hausdorff",
    "category": "type",
    "text": "Hausdorff(inner_op, outer_op)\n\nThe generalized Hausdorff distance with inner reduction inner_op and outer reduction outer_op.\n\nReferences\n\nDubuisson, M-P; Jain, A. K., 1994. A Modified Hausdorff Distance for Object-Matching.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageDistances.ReductionOperation",
    "page": "Docstrings",
    "title": "ImageDistances.ReductionOperation",
    "category": "type",
    "text": "ReductionOperation\n\nA reduction operation on a set of values (e.g. maximum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ImageDistances.CIEDE2000ImageDistances.ColorMetricImageDistances.HausdorffImageDistances.ImageDistancesImageDistances.ImageMetricImageDistances.ImagePreMetricImageDistances.ImageSemiMetricImageDistances.MaxReductionImageDistances.MeanReductionImageDistances.MinReductionImageDistances.ModifiedHausdorffImageDistances.ReductionOperationImageDistances.ciede2000ImageDistances.evalImageDistances.evaluate_psetImageDistances.hausdorffImageDistances.img2psetImageDistances.includeImageDistances.modified_hausdorffImageDistances.reduce"
},

]}
