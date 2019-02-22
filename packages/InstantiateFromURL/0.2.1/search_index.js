var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InstantiateFromURL-1",
    "page": "Readme",
    "title": "InstantiateFromURL",
    "category": "section",
    "text": "A way to bind dependency information to Julia assets without the need to pass around TOML filesWill download, unpack, and activate a tarball of the resources in pwd/.projectsBased on Valentin Churavy\'s idea in https://github.com/JuliaLang/IJulia.jl/issues/673#issuecomment-425306944"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "GitHub repositories are expected to include a Project.toml and Manifest.toml file in the root directory, and all other files are ignored. For ex: QuantEcon/QuantEconLecturePackagesAll of the following are valid calls:activate_github(\"QuantEcon/QuantEconLecturePackages\"), which saves to .projects/QuantEconLecturePackages-master\nactivate_github(\"QuantEcon/QuantEconLecturePackages\", tag = \"master\"), which gives us the same thing. \nactivate_github(\"QuantEcon/QuantEconLecturePackages\", tag = \"v0.9.5\"), which saves that version to .projects/QuantEconLecturePackages-v0.9.5\nactivate_github(\"QuantEcon/QuantEconLecturePackages\", sha = \"0c2985\"), which saves that commit to .projects/QuantEconLecturePackages-0c2985You can also call any of the above with ; force = true, which will force a re-download of the source resources. There\'s also a non-exported copy_env(reponame, oldprefix, newprefix) which will let you:activate_github(\"QuantEcon/QuantEconLecturePackages\")\ncopy_env(\"QuantEcon/QuantEconLecturePackages\", \"master\", \"mymaster\")\nactivate_github(\"QuantEcon/QuantEconLecturePackages\", tag = \"mymaster\") # Protected from future updates. No GitHub API calls are consumed, so rate-limiting is not an issue "
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "InstantiateFromURL.InstantiateFromURLInstantiateFromURL.activate_githubInstantiateFromURL.copy_envInstantiateFromURL.evalInstantiateFromURL.include"
},

]}
