var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CMakeWrapper-1",
    "page": "Readme",
    "title": "CMakeWrapper",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This package provides a BinDeps.jl-compatible CMakeProcess class for automatically building CMake dependencies.A modern version of CMake is installed using the CMake.jl package; you can use that package instead if you just want to run cmake by itself without using BinDeps."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.add(\"CMakeWrapper\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "You can declare a CMakeProcess similarly to the way you would use the Autotools provider in BinDeps.jl. In your deps/build.jl file, this would look like:provides(Sources,\n    URI(source_url),\n    dependency_name)\n\nprovides(BuildProcess, CMakeProcess(),\n         dependency_name)where source_url and dependency_name are set elsewhere in your build.jl.You can also pass raw cmake options directly with the cmake_args flag:provides(BuildProcess, CMakeProcess(cmake_args=[\"-DCMAKE_BUILD_TYPE=Debug\"]),\n         dependency_name)If the high-level provider doesn\'t work for you, you can also use the lower-level CMakeBuild, analogous to the AutotoolsDependency in BinDeps.jl:CMakeBuild(srcdir=source_dir,  # where the CMakeLists.txt resides in your source\n           builddir=build_dir,  # where the cmake build outputs should go\n           prefix=install_prefix,  # desired install prefix\n           libtarget=[library_name],  # name of the library being built\n           installed_libpath=[path_to_intalled_library],  # expected installed library path\n           cmake_args=[],  # additional cmake arguments\n           targetname=\"install\")  # build target to run (default: \"install\")"
},

]}
