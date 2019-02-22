var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CORBITS-1",
    "page": "Readme",
    "title": "CORBITS",
    "category": "section",
    "text": "CORBITS is the Computed Occurrence of Revolving Bodies for the Investigation of Transiting Systems by Joshua Brakensiek and Darin Ragozzine."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "To start using CORBITS, clone the repository.git clone https://github.com/jbrakensiek/CORBITS.gitYou can build the CORBITS library and usage examples by typing make.  To only build the CORBITS library, type make lib."
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "To use the base of CORBITS (the library and CLI), only a reasonably modern version of g++ is necessary. To fully utilize some of the examples, there are additional requirements.Python 2.x with the packages NumPy, SciPy, and matplotlib.\nR with the packages ADGofTest and psych."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The following usage examples are available for CORBITS. kepler-11: Reproduces the data making the golden curve in Figure 4 of Lissauer, et. al., 2011.  See here.\nkepler-90: Same as kepler-11, except run on the Kepler 90 dataset.\nperiod-dist: Produces a period-ratio distribution of the Kepler Candidates (KOIs) which is geometrically debiased.  It utilizes the most recent data from the NASA Exoplanet Archive.  Summary histograms using matplotlib can be made with make period-hist.\nmhs-dist: Same as period-dist except computing the mutual hill spheres instead of period-ratios.\n`case-trans\': Computes the mutual inclinations of the \"phase transitions\" of the transiting geometry (see the Brakensiek & Ragozzine for more details).\nsolar-system: Calculates the transit probabilities of the Solar System from the perspective of a distant external observer.\n`koi-table\': Generates the LaTeX table in Brakensiek & Ragozzine of observation probabilities of various KOI systems.To build an example, type make name-of-example.  To run it, type make run-name-of-example (or run the binary file).If you find CORBITS useful, please cite (Brakensiek & Ragozzine, in prep.)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "CORBITS.CORBITSCORBITS.LIB_CORBITSCORBITS.evalCORBITS.includeCORBITS.prob_of_transits_approx"
},

]}
