var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GeoStatsImages.jl-1",
    "page": "Readme",
    "title": "GeoStatsImages.jl",
    "category": "section",
    "text": "Training images for geostastical simulation in Julia.[![][travis-img]][travis-url] [![][julia-pkg-img]][julia-pkg-url] [![][codecov-img]][codecov-url]This package converts famous training images from the geostatistcs literature to a standard format for quick experimentation in Julia. It is part of the GeoStats.jl framework and can be used in conjunction with multiple-point simulation solvers.The author does not hold any copyright on the data. Please give credit to the sources in the table."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"GeoStatsImages\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "TI = training_image(identifier::AbstractString)where identifier can be any of the strings listed with the command GeoStatsImages.available()"
},

{
    "location": "#Preview-1",
    "page": "Readme",
    "title": "Preview",
    "category": "section",
    "text": "Identifier Preview Type Data source\nWalkerLake (Image: WalkerLakePreview) Continuous [Mariethoz & Caers, 2014][TI-book-url]\nWalkerLakeTruth (Image: WalkerLakeTruthPreview) Continuous [Mariethoz & Caers, 2014][TI-book-url]\nStoneWall (Image: StoneWallPreview) Continuous [Mariethoz & Caers 2014][TI-book-url]\nHerten (Image: HertenPreview) Continuous [Mariethoz & Caers 2014][TI-book-url]\nLena (Image: LenaPreview) Continuous [Mariethoz & Caers 2014][TI-book-url]\nStanfordV (Image: StanfordVPreview) Continuous [Mao & Journel 2014][StanfordV-url]\nStrebelle (Image: StrebellePreview) Categorical [Strebelle 2002][SNESIM-url]\nEllipsoids (Image: EllipsoidsPreview) Categorical [Mariethoz & Caers 2014][TI-book-url]\nWestCoastAfrica (Image: WestCoastAfricaPreview) Categorical [Mariethoz & Caers 2014][TI-book-url]\nFlumy (Image: FlumyPreview) Categorical [Hoffimann et al 2017][IQSIM-url]\nFluvsim (Image: FluvsimPreview) Categorical [Mariethoz & Caers, 2014][TI-book-url]\nKetton (Image: Ketton) Categorical [Imperial College Pore-Scale Modelling Group][Imperial-college]"
},

{
    "location": "#Collections-1",
    "page": "Readme",
    "title": "Collections",
    "category": "section",
    "text": "St. Anthony Falls Laboratory"
},

{
    "location": "#FlumeContinuous{01,02,...,13}-1",
    "page": "Readme",
    "title": "FlumeContinuous{01,02,...,13}",
    "category": "section",
    "text": "(Image: FlumeContinuousPreview)"
},

{
    "location": "#FlumeBinary{01,02,...,13}-1",
    "page": "Readme",
    "title": "FlumeBinary{01,02,...,13}",
    "category": "section",
    "text": "(Image: FlumeBinaryPreview)"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Contributions are very welcome, as are feature requests and suggestions.If you have any questions, please contact our community on the gitter channel.[TI-book-url]: http://trainingimages.org [StanfordV-url]: http://pangea.stanford.edu/departments/ere/dropbox/scrf/documents/reports/12/SCRF1999Report12/SCRF1999shuguang/stanford4.ps.zip [SNESIM-url]: https://link.springer.com/article/10.1023/A%3A1014009426274 [IQSIM-url]: http://www.sciencedirect.com/science/article/pii/S0098300417301139 [Imperial-college]: http://www.imperial.ac.uk/earth-science/research/research-groups/perm/research/pore-scale-modelling/micro-ct-images-and-networks[travis-img]: https://travis-ci.org/juliohm/GeoStatsImages.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/GeoStatsImages.jl[julia-pkg-img]: http://pkg.julialang.org/badges/GeoStatsImages_0.7.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=GeoStatsImages[codecov-img]: https://codecov.io/gh/juliohm/GeoStatsImages.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/GeoStatsImages.jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GeoStatsImages.GeoStatsImagesGeoStatsImages.availableGeoStatsImages.databaseGeoStatsImages.datadirGeoStatsImages.datafilesGeoStatsImages.evalGeoStatsImages.identifiersGeoStatsImages.includeGeoStatsImages.training_image"
},

]}
