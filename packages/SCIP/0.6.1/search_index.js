var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SCIP.jl-1",
    "page": "Readme",
    "title": "SCIP.jl",
    "category": "section",
    "text": "Julia interface to SCIP solver.(Image: Build Status) (Image: Coverage Status) (Image: codecov)"
},

{
    "location": "#Related-Projects-1",
    "page": "Readme",
    "title": "Related Projects",
    "category": "section",
    "text": "SCIP: actual solver (implemented in C) that is wrapped for Julia.\nCSIP: restricted and simplified C interface to SCIP which our wrapper is based on.\nSCIP.jl: previous attempt to interface SCIP from Julia, using autogenerated wrapper code for all public functions.\nMathProgBase: We aim to implement MPB\'s abstract solver interfaces, so that one can use SCIP.jl through JuMP. For now, the LinearQuadraticModel interface is implemented, supporting lazy constraint and heuristic callbacks."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Note: These instructions are meant for and only tested with GNU/Linux. OS X used to work,  but there is an issue (#46) since the update to SCIP 4.0.0.Follow the steps below to get SCIP.jl working. Unfortunately, these steps can not be automated as part of Pkg.build(\"SCIP\"), because the academic license of SCIP does not allow distribution of the source code without tracking the download metadata. See the license for details.1.The SCIP.jl package requires SCIP to be installed in a recent version (e.g. 6.0.0). Download the SCIP Optimization Suite.tar xzf scipoptsuite-6.0.0.tgz2.Choose an installation path and set the environment variable SCIPOPTDIR to point there.export SCIPOPTDIR=`my/install/dir`3.Build and install the shared library withmkdir build\ncd build\ncmake -DCMAKE_INSTALL_PREFIX=$SCIPOPTDIR ..\nmake\nmake install4.This package is registered in METADATA.jl and can be installed in Julia withPkg.add(\"SCIP\")"
},

{
    "location": "#Setting-Parameters-1",
    "page": "Readme",
    "title": "Setting Parameters",
    "category": "section",
    "text": "SCIP has a long list of parameters that can all be set through SCIP.jl, by passing them to the constructor of SCIPSolver. To set a value val to a parameter name, pass the two parameters (name, val). For example, let\'s set two parameters, to disable output and increase the gap limit to 0.05:solver = SCIPSolver(\"display/verblevel\", 0, \"limits/gap\", 0.05)"
},

]}