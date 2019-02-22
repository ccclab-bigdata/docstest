var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AssetRegistry-1",
    "page": "Readme",
    "title": "AssetRegistry",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)AssetRegistry allows you to serve arbitrary files and  folders, using a global registry. Now packages like Mux and  IJulia can  look up this registry and serve these files while  packages like WebIO  and InteractBase  can register assets to be served to implement web-based UIs. "
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "You can register an asset with the package by doing:key = AssetRegistry.register(\"path/to/asset\")This key is the unique URL where the asset  can be accessed. For example:julia> key = AssetRegistry.register(\"/Users/ranjan/.julia/v0.6/Tachyons/assets/tachyons.min.css\")\n\"/assetserver/97a47bdda5bd9274ad1a9cd10a0337f3b033a790-tachyons.min.css\""
},

{
    "location": "autodocs/#AssetRegistry.register",
    "page": "Docstrings",
    "title": "AssetRegistry.register",
    "category": "function",
    "text": "register(\"path/to/asset\")\n\nRegister an asset. Returns a unique key which is\n\nthe unique URL where the asset can be accessed. For example:\n\njulia> key = AssetRegistry.register(\"/Users/ranjan/.julia/v0.6/Tachyons/assets/tachyons.min.css\")\n\"/assetserver/97a47bdda5bd9274ad1a9cd10a0337f3b033a790-tachyons.min.css\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AssetRegistry.AssetRegistryAssetRegistry.__init__AssetRegistry.baseurlAssetRegistry.deregisterAssetRegistry.evalAssetRegistry.filekeyAssetRegistry.getkeyAssetRegistry.includeAssetRegistry.isregisteredAssetRegistry.registerAssetRegistry.registryAssetRegistry.withlock"
},

]}
