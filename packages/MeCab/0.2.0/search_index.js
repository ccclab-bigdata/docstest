var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MeCab.jl-1",
    "page": "Readme",
    "title": "MeCab.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: MeCab) (Image: MeCab)Julia bindings for Japanese morphological analyzer MeCab"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using MeCab\n\n# Create MeCab tagger\nmecab = Mecab()\n\n# You can give MeCab option like \"-o wakati\"\n# mecab = Mecab(\"-o wakati\")\n\n# Parse text\n# It returns Array of MecabNode type\nresults = parse(mecab, \"すももももももももものうち\")\n\n# Access each result.\n# It returns Array of String\nfor result in results\n  println(result.surface, \":\", result.feature)\nend\n\n# Parse surface\nresults = parse_surface(mecab, \"すももももももももものうち\")\n\n# Access each result\n# It returns Array of Array of MecabNode\nfor result in results\n  println(result)\nend\n\n# Parse nbest result\nnbest_results = parse_nbest(mecab, 3, \"すももももももももものうち\")\nfor nbest_result in nbest_results\n  for result in nbest_result\n    println(result.surface, \":\", result.feature)\n  end\n  println()\nend\n"
},

{
    "location": "#Requirement-1",
    "page": "Readme",
    "title": "Requirement",
    "category": "section",
    "text": "mecab\ndictionary for mecab (such as mecab-ipadic, mecab-naist-jdic, and so on)If you don\'t install mecab and libmecab yet, MeCab.jl will install mecab, libmecab and mecab-ipadic that are confirmed to work with MeCab.jl under unix-like environment.Note that by default, MeCab.jl will try to find system-installed libmecab (e.g. /usr/lib/libmecab.dylib). If you have already libmecab installed, this might cause library or dictionary incompatibility that MeCab.jl assumes. If you have any problem with system-installed ones, please try to ignore them and rebuild MeCab.jl by:julia> ENV[\"MECABJL_LIBRARY_IGNORE_PATH\"] = \"/usr/lib:/usr/local/lib\" # depends on your environment\njulia> Pkg.build(\"MeCab\")The libmecab library path will be stored in MeCab.libmecab after loading MeCab.jl. The library path should look like for example:julia> using MeCab\njulia> MeCab.libmecab\n\"$your_home_dir_path/.julia/v0.4/MeCab/deps/usr/lib/libmecab.dylib\""
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "MeCab.jl is created by Michiaki ArigaOriginal MeCab is created by Taku Kudo"
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "@r9y9\n@snthot\n@tkelman"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MeCab.@checked_libMeCab.MeCabMeCab.MecabMeCab.MecabNodeMeCab.MecabRawNodeMeCab.create_mecab_resultsMeCab.create_nodeMeCab.create_nodesMeCab.create_surfaceMeCab.create_surfacesMeCab.depsMeCab.evalMeCab.includeMeCab.libmecabMeCab.mecab_resultMeCab.mecab_sparse_tonodeMeCab.nbest_initMeCab.nbest_next_tostrMeCab.nbest_sparse_tostrMeCab.parse_nbestMeCab.parse_surfaceMeCab.parse_surface2MeCab.parse_tonodeMeCab.sparse_tostr"
},

]}
