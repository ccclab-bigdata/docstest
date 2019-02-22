var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Languages.jl-1",
    "page": "Readme",
    "title": "Languages.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Languages) (Image: Languages)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Languages.jl is a Julia package for working with human languages. It provides:Lists of words from each language for basic categories:* Articles\n	* Indefinite Articles\n	* Definite Articles\n* Prepositions\n* Pronouns\n* Stopwords\n\nThese methods are supported only for English and German currently.\n\nThis package also detects the script and language for written text in a wide variety of languages."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using Languages\n\narticles(Languages.English())\nstopwords(Languages.English())All word lists are returned as vectors of UTF-8 strings."
},

{
    "location": "#Script-detection-1",
    "page": "Readme",
    "title": "Script detection",
    "category": "section",
    "text": "Script detection model works by checking the unicode character ranges present within the input textLanguages.detect_script(\"To be or not to be\") # => Languages.LatinScript()"
},

{
    "location": "#Language-Detection-1",
    "page": "Readme",
    "title": "Language Detection",
    "category": "section",
    "text": "A trigram based model is used to detect the language for the text. The model is filtered based on the detected script.We detect 84 of the most common languages spoken around the world. This usually covers most languages with more than 10 million native speakers.detector = LanguageDetector() 	detector(\"To be or not to be\")"
},

{
    "location": "#(Languages.English(),-Languages.LatinScript(),-1.0)-1",
    "page": "Readme",
    "title": "(Languages.English(), Languages.LatinScript(), 1.0)",
    "category": "section",
    "text": "The LanguageDetector model returns the language, the script, and the confidence when applied to a string.The language and script detection code in this package is heavily inspired from  the rust package whatlang-rs. That package is in turn derived from franc. See LICENSE.whatlang-rs for details."
},

{
    "location": "#Deprecations-1",
    "page": "Readme",
    "title": "Deprecations",
    "category": "section",
    "text": "The API of this package has been refurbished recently. If you have used this package earlier, please be aware of these changes.The language names have been shortened. So English instead of EnglishLanguage. However, the language names are no longer exported. So they should be referred to with the package name: Languages.English* Every language is a type. However all functions now accept and return instances of these types, rather than the types themselves."
},

]}
