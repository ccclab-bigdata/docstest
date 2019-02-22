var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Coverage.jl-1",
    "page": "Readme",
    "title": "Coverage.jl",
    "category": "section",
    "text": "Release version:(Image: Coverage) (Image: Coverage)Development version:(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov)\"Take Julia code coverage and memory allocation results, do useful things with them\"Code coverage: Julia can track how many times, if any, each line of your code is run. This is useful for measuring how much of your code base your tests actually test, and can reveal the parts of your code that are not tested and might be hiding a bug. You can use Coverage.jl to summarize the results of this tracking, or to send them to a service like Coveralls.io or Codecov.io.Memory allocation: Julia can track how much memory is allocated by each line of your code. This can reveal problems like type instability, or operations that you might have thought were cheap (in terms of memory allocated) but aren\'t (i.e. accidental copying)."
},

{
    "location": "#Working-locally-1",
    "page": "Readme",
    "title": "Working locally",
    "category": "section",
    "text": ""
},

{
    "location": "#Code-coverage-1",
    "page": "Readme",
    "title": "Code coverage",
    "category": "section",
    "text": "Step 1: Navigate to your test directory, and start julia like this:julia --code-coverage=useror, if you\'re running Julia 0.4 or higher,julia --code-coverage=user --inline=no(Turning off inlining gives substantially more accurate results, but may slow down your tests.)Step 2: Run your tests (e.g., include(\"runtests.jl\")) and quit Julia.Step 3: Navigate to the top-level directory of your package, restart Julia (with no special flags) and analyze your code coverage:using Coverage\n# defaults to src/; alternatively, supply the folder name as argument\ncoverage = process_folder()\n# Get total coverage for all Julia files\ncovered_lines, total_lines = get_summary(coverage)\n# Or process a single file\n@show get_summary(process_file(\"src/MyPkg.jl\"))The fraction of total coverage is equal to covered_lines/total_lines.To discover which functions lack testing, browse through the *.cov files in your src/ directory and look for lines starting with - or 0 - those lines were never executed. Numbers larger than 0 are counts of the number of times the respective line was executed."
},

{
    "location": "#Memory-allocation-1",
    "page": "Readme",
    "title": "Memory allocation",
    "category": "section",
    "text": "Start julia withjulia --track-allocation=userThen:Run whatever commands you wish to test. This first run is to ensure that everything is compiled (because compilation allocates memory).\nCall clear_malloc_data() (or, if running julia 0.4 or higher, Profile.clear_malloc_data())\nRun your commands again\nQuit juliaFinally, navigate to the directory holding your source code. Start julia (without command-line flags), and analyze the results usingusing Coverage\nanalyze_malloc(dirnames)  # could be \".\" for the current directory, or \"src\", etc.This will return a vector of MallocInfo objects, specifying the number of bytes allocated, the file name, and the line number. These are sorted in increasing order of allocation size."
},

{
    "location": "#LCOV-export-1",
    "page": "Readme",
    "title": "LCOV export",
    "category": "section",
    "text": "There are many tools to work with LCOV info-format files as generated by the geninfo tool. Coverage.jl can generate these files:coverage = process_folder()\nLCOV.writefile(\"coverage/lcov.info\", coverage)"
},

{
    "location": "#Cleaning-up-.cov-files-1",
    "page": "Readme",
    "title": "Cleaning up .cov files",
    "category": "section",
    "text": "When using Coverage.jl locally, over time a lot of .cov files can accumulate. Coverage.jl provides the clean_folder and clean_file methods to either clean up all .cov files in a directory (and subdirectories) or only clean the .cov files associated with a specific source file."
},

{
    "location": "#Tracking-Coverage-with-[Codecov.io](https://codecov.io)-1",
    "page": "Readme",
    "title": "Tracking Coverage with Codecov.io",
    "category": "section",
    "text": "Codecov.io is a test coverage tracking tool that integrates with your continuous integration servers (e.g. TravisCI) or with HTTP POSTs from your very own computer at home.Enable Codecov.io for your repository.If it is public on GitHub and you are using using Travis, CircleCI or Appveyor, this is all you need to do. You can sign into Codecov using your Github identity.\nOtherwise you will need to define a CODECOV_TOKEN environment variable with the Repository Upload Token available under the Codecov settings.Use the command line option when you run your testsEither with something like julia --code-coverage test/runtests.jl, or\nwith something like  julia -e \'Pkg.test(\"MyPkg\", coverage=true)\'Add the following to the end of your .travis.yml or .appveyor.yml file. This line downloads this package, collects the per-file coverage data, then bundles it up and submits to Codecov. Coverage.jl assumes that the working directory is the package directory, so it changes to that first (so don\'t forget to replace MyPkg with your package\'s name!On Travis CI:  after_success:\n  - julia -e \'cd(Pkg.dir(\"MyPkg\")); Pkg.add(\"Coverage\"); using Coverage; Codecov.submit(process_folder())\'\n  ```\n  * On AppVeyor:\n  ```yml\n  after_test:\n  - C:\\projects\\julia\\bin\\julia -e \"cd(Pkg.dir(\\\"MyPkg\\\")); Pkg.add(\\\"Coverage\\\"); using Coverage; Codecov.submit(process_folder())\"\n  ```\nIf you\'re running coverage on your own machine and want to upload results to Codecov, make a bash script like the following:bash #!/bin/bash CODECOVTOKEN=YOURTOKENHERE julia -e \'cd(Pkg.dir(\"MyPkg\")); using Coverage; Codecov.submitlocal(process_folder())\' ```"
},

{
    "location": "#Tracking-Coverage-with-[Coveralls.io](https://coveralls.io)-1",
    "page": "Readme",
    "title": "Tracking Coverage with Coveralls.io",
    "category": "section",
    "text": "Coveralls.io is a test coverage tracking tool that integrates with your continuous integration solution (e.g. TravisCI).Enable Coveralls.io for your repository. If it is public on GitHub and you are using TravisCI, this is all you need to do. If you are using AppVeyor, you need to add a secure environment variable called COVERALLS_TOKEN to your .appveyor.yml (see here). Your repo token can be found in your Coveralls repo settings. If neither of these are true, please submit an issue, and we can work on adding additional functionality for your use case.\nYou must be using Julia 0.3 or higher, which added the --code-coverage command line argument.\nUse the command line option when you run your testsEither with something like julia --code-coverage test/runtests.jl, or\nwith something like  julia -e \'Pkg.test(\"MyPkg\", coverage=true)\'Add the following to the end of your .travis.yml or .appveyor.yml file. This line downloads this package, collects the per-file coverage data, then bundles it up and submits to Coveralls. Coverage.jl assumes that the working directory is the package directory, so it changes to that first (so don\'t forget to replace MyPkg with your package\'s name!On Travis CI:```yml   after_success:julia -e \'cd(Pkg.dir(\"MyPkg\")); Pkg.add(\"Coverage\"); using Coverage; Coveralls.submit(process_folder())\'```On AppVeyor:```yml   after_test:C:\\projects\\julia\\bin\\julia -e \"cd(Pkg.dir(\\\"MyPkg\\\")); Pkg.add(\\\"Coverage\\\"); using Coverage; Coveralls.submit(process_folder())\"```"
},

{
    "location": "#Julia-packages-using-Coverage.jl-1",
    "page": "Readme",
    "title": "Julia packages using Coverage.jl",
    "category": "section",
    "text": "Pull requests to add your package welcome (or open an issue)ArgParse.jl\nAstroLib.jl\nAudioIO.jl\nAugur.jl\nBootstrap.jl\nCAIRS.jl\nClimateTools.jl\nDASSL.jl\nDataFrames.jl\nDecimals.jl\nDistributions.jl\nDSP.jl\nExtractMacro.jl\nFastaIO.jl\nFiniteStateMachine.jl\nFourierFlows.jl\nGadfly.jl\nGeometricalPredicates.jl\nGlob.jl\nGradientBoost.jl\nGraphCentrality.jl\nGraphLayout.jl\nHomebrew.jl\nHttpParser.jl\nIntervalTrees.jl\nIPNets.jl\nJointMoments.jl\nJuMP.jl\nLibGit2.jl\nLightGraphs.jl\nLinearExpressions.jl\nOrchestra.jl\nODE.jl\nOnlineStats.jl\nOpenCL.jl\nOpenStreetMap.jl\nPValueAdjust.jl\nQuantEcon.jl\nQuantileRegression.jl\nRationalSimplex.jl\nRDF.jl\nRequests.jl\nRestful.jl\nRobotics.jl\nRouletteWheels.jl\nSASLib.jl\nSimJulia.jl\nSIUnits.jl\nStatsBase.jl\nTaylorIntegration.jl\nTaylorSeries.jl\nTextWrap.jl\nTimeData.jl\nTypeCheck.jl\nUnitful.jl\nURIParser.jl\nURITemplate.jl\nVoting.jl\nWAV.jl\nWeave.jl\nWeightedStats.jl\nYAML.jl"
},

{
    "location": "autodocs/#Coverage.Codecov",
    "page": "Docstrings",
    "title": "Coverage.Codecov",
    "category": "module",
    "text": "Coverage.Codecov Module\n\nThis module provides functionality to push coverage information to the CodeCov.io web service. It exports the submit and submit_local methods.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.Coveralls",
    "page": "Docstrings",
    "title": "Coverage.Coveralls",
    "category": "module",
    "text": "Coverage.Coveralls Module\n\nThis module provides functionality to push coverage information to the Coveralls web service. It exports the submit and submit_local methods.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.FileCoverage",
    "page": "Docstrings",
    "title": "Coverage.FileCoverage",
    "category": "type",
    "text": "FileCoverage\n\nRepresents coverage info about a file, including the filename, the source code itself, and a Vector of run counts for each line. If the line was expected to be run the count will be an Int >= 0. Other lines such as comments will have a count of nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.LCOV",
    "page": "Docstrings",
    "title": "Coverage.LCOV",
    "category": "module",
    "text": "Coverage.LCOV Module\n\nThis module provides functionality to generate LCOV info format files from Julia coverage data. It exports the writefile function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.amend_coverage_from_src!",
    "page": "Docstrings",
    "title": "Coverage.amend_coverage_from_src!",
    "category": "function",
    "text": "amend_coverage_from_src!(coverage::Vector{CovCount}, srcname)\n\nThe code coverage functionality in Julia can miss code lines, which will be incorrectly recorded as nothing but should instead be 0 This function takes a coverage count vector and a the filename for a Julia code file, and updates the coverage vector in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.analyze_malloc_files",
    "page": "Docstrings",
    "title": "Coverage.analyze_malloc_files",
    "category": "function",
    "text": "analyze_malloc_files(files) -> Vector{MallocInfo}\n\nIterates through the given list of filenames and return a Vector of MallocInfos with allocation information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.clean_file",
    "page": "Docstrings",
    "title": "Coverage.clean_file",
    "category": "function",
    "text": "clean_file(filename::AbstractString)\n\nCleans up all .cov files associated with a given source file. This only looks in the directory of the given file, i.e. the .cov files should be siblings of the source file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.clean_folder",
    "page": "Docstrings",
    "title": "Coverage.clean_folder",
    "category": "function",
    "text": "clean_folder(folder::AbstractString)\n\nCleans up all the .cov files in the given directory and subdirectories. Unlike process_folder this does not include a default value for the root folder, requiring the calling code to be more explicit about which files will be deleted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.get_summary",
    "page": "Docstrings",
    "title": "Coverage.get_summary",
    "category": "function",
    "text": "get_summary(fcs)\n\nSummarize results from a single FileCoverage instance or a Vector of them, returning a 2-tuple with the covered lines and total lines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.merge_coverage_counts",
    "page": "Docstrings",
    "title": "Coverage.merge_coverage_counts",
    "category": "function",
    "text": "merge_coverage_counts(a1::Vector{CovCount}, a2::Vector{CovCount})\n\nGiven two vectors of line coverage counts, take the pairwise maximum of both vectors, preseving null counts if both are null.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.process_cov",
    "page": "Docstrings",
    "title": "Coverage.process_cov",
    "category": "function",
    "text": "process_cov(filename, folder)\n\nGiven a filename for a Julia source file, produce an array of line coverage counts by reading in all matching .{pid}.cov files. On Julia 0.3 there was just a .cov file, but this code works fine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.process_file",
    "page": "Docstrings",
    "title": "Coverage.process_file",
    "category": "function",
    "text": "process_file(filename[, folder]) -> FileCoverage\n\nGiven a .jl file and its containing folder, produce a corresponding FileCoverage instance from the source and matching coverage files. If the folder is not given it is extracted from the filename.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Coverage.process_folder",
    "page": "Docstrings",
    "title": "Coverage.process_folder",
    "category": "function",
    "text": "process_folder(folder=\"src\") -> Vector{FileCoverage}\n\nProcess the contents of a folder of Julia source code to collect coverage statistics for all the files contained within. Will recursively traverse child folders. Default folder is \"src\", which is useful for the primary case where Coverage is called from the root directory of a package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Coverage.CodecovCoverage.CovCountCoverage.CoverageCoverage.CoverallsCoverage.FileCoverageCoverage.LCOVCoverage.MallocInfoCoverage.amend_coverage_from_src!Coverage.analyze_mallocCoverage.analyze_malloc_filesCoverage.clean_fileCoverage.clean_folderCoverage.evalCoverage.find_malloc_filesCoverage.function_body_linesCoverage.function_body_lines!Coverage.get_summaryCoverage.includeCoverage.iscovfileCoverage.isevaldefCoverage.isfuncexprCoverage.merge_coverage_countsCoverage.process_covCoverage.process_fileCoverage.process_folderCoverage.sortbybytes"
},

]}
