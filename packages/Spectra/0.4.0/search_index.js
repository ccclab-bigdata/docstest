var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Spectra.jl-1",
    "page": "Readme",
    "title": "Spectra.jl",
    "category": "section",
    "text": "Copyright (c) 2016-2019 Dr. Charles Le Losqemail: charles.lelosq@anu.edu.au(Image: DOI)Licence MIT: see LICENCE.mdSpectra.jl is a package aimed at helping spectroscopic (Raman, Infrared, Nuclear Magnetic Resonance, XAS...) data treatment under Julia. Spectra.jl aim is to provide the simplest way to perform actions like baseline fitting and removal, or peak fitting for instance, while respecting the freedom offered by data treatment through using a computer code instead of a Graphic User Interface.IMPORTANT NOTE FOLLIWING JULIA 1.0 UPGRADE - This upgrade of Julia introduced many breaking changes. In fact, I add to re-write most of the code of Spectra.jl... I thus decided that simple functions that do not require speed, like baseline() or smooth(), will be wrappers of those provided by rampy. This will be transparent to the user and will greatly simplify code debugging and syntax homogeneity.Package is under construction, any help welcome!"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "For old versions of Spectra <= 0.3.1, please see the documentation http://spectrajl.readthedocs.io/en/v0.3.1/ and earlier related versions.Full documentation for the stable and latest versions is now available at(Image: ) (Image: )"
},

{
    "location": "#News-1",
    "page": "Readme",
    "title": "News",
    "category": "section",
    "text": "BREAKING CHANGES: Since Julia jumping from 0.6 to 1.0 last August 2018, many things have changed. BREAKING CHANGE BETWEEN 0.3.x and 0.4 ARE PRESENT.I decided that functions that duplicate those of the rampy Python library will actually be wrapper of those. Spectra.jl thus offer the same functionalities than rampy, but in Julia. I also removed some functions that are more \"custom\" and probably not used by people. They are in the /old_codes folder. Similarly, I strongly encourage using rampy for the rameau function.See the NEWS.md file for following the evolution of Spectra.jl."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In Julia 0.6 or earlier, use Pkg.add(\"Spectra\").In Julia 0.7 and later, use the pkg environment (key ]), then directly run add git@github.com:charlesll/Spectra.jl.git for the bleeding-edge version or \'add Spectra\' for the registered one."
},

{
    "location": "#Quick-Usage-Examples-1",
    "page": "Readme",
    "title": "Quick Usage Examples",
    "category": "section",
    "text": "A common problem is baseline subtraction and peak fitting when dealing with spectra. After calling the libraries and importing a spectrum like:using JuMP, PyPlot, Spectra, DelimitedFiles\n\ndata = readdlm(\"./examples/data/LS4.txt\", \'\\t\', Float64) # we import the spectra\nx = data[:,1]\ny = data[:,2]We can remove a baseline with the Spectra function \"baseline\" in two lines:roi = [860.0 870.0; 1300.0 1400.0] # the frequencies of the region where we want to fit the baseline\ny_corr, y_bas = baseline(x,y,roi,\"poly\",polynomial_order=2)Further functions are available, for treating profiles of spectra for instance!See the examples notebook for futher ideas!Last modified February 2019"
},

]}
