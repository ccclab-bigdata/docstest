var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Coulter-1",
    "page": "Readme",
    "title": "Coulter",
    "category": "section",
    "text": "(Image: Build Status)  (Image: codecov.io)Interfacing with Beckman-Coulter Multisizer/Z2 Coulter Counter files (.#=Z2, etc) in Julia"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Run the following in the Julia REPLPkg.clone(\"https://github.com/tlnagy/Coulter.jl.git\")To use the package do the followingusing Coulter\nloadZ2(\"path to file here.#=Z2\", \"sample name\")"
},

{
    "location": "autodocs/#Coulter.CoulterCounterRun",
    "page": "Docstrings",
    "title": "Coulter.CoulterCounterRun",
    "category": "type",
    "text": "A simplified representation of a coulter counter run\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coulter._find_peaks",
    "page": "Docstrings",
    "title": "Coulter._find_peaks",
    "category": "function",
    "text": "_find_peaks(xs, ys; minx, miny)\n\nFinds prominent peaks in ys and returns the values from xs corresponding to the location of these peaks. minx and miny can be used to exclude peaks that are too small in x or y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coulter.diameter",
    "page": "Docstrings",
    "title": "Coulter.diameter",
    "category": "function",
    "text": "diameter(volume)\n\nGiven the volume of a sphere, compute its diameter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coulter.extract_peak_interval",
    "page": "Docstrings",
    "title": "Coulter.extract_peak_interval",
    "category": "function",
    "text": "extract_peak_interval(run; α, n)\n\nTakes a CoulterCounterRun run and fits a kernel density estimate to smooth out binning effects by the machine and then finds the largest peak. It returns the diameter corresponding to the location of this peak as well as the max and min diameters of the confidence interval defined by α. This interval is generated on the empirically by bootstrapping the data n times.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coulter.loadZ2",
    "page": "Docstrings",
    "title": "Coulter.loadZ2",
    "category": "function",
    "text": "loadZ2(filename::String, sample::String)\n\nLoads filename and assigns it a sample, returns a CoulterCounterRun object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coulter.load_folder",
    "page": "Docstrings",
    "title": "Coulter.load_folder",
    "category": "function",
    "text": "load_folder(folder)\n\nLoads all coulter runs in a folder into a dictionary where the keys are the first parts of the filenames separated by an underscore.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coulter.repvec",
    "page": "Docstrings",
    "title": "Coulter.repvec",
    "category": "function",
    "text": "repvec(orig, reps)\n\nRepeats the items in the first vector by the corresponding number of times in the second vector. Essentially the inverse operation of hist\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coulter.volume",
    "page": "Docstrings",
    "title": "Coulter.volume",
    "category": "function",
    "text": "volume(diameter)\n\nGiven the diameter of a sphere, return its volume\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Coulter.-Coulter.CoulterCoulter.CoulterCounterRunCoulter._find_peaksCoulter.diameterCoulter.evalCoulter.extract_peakCoulter.extract_peak!Coulter.extract_peak_intervalCoulter.includeCoulter.loadZ2Coulter.load_folderCoulter.repvecCoulter.themeCoulter.volume"
},

]}
