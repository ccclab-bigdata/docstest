var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DefaultApplication.jl-1",
    "page": "Readme",
    "title": "DefaultApplication.jl",
    "category": "section",
    "text": "(Image: Lifecycle) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Julia library for opening a file with the default application determined by the OS."
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "Many packages implement variations on the same short code snippet. This package maintains a version that can be shared or tested.This package intends to be very lightweight, and has no dependencies. Nevertheless, if you still don\'t want to use this as a dependency, you can of course also copy the code of DefaultApplication.open() to another package, but then you will have to repeat this to keep up with bugfixes and developments."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "import DefaultApplication\nDefaultApplication.open(\"/some/file.png\")open is not exported from the package, because it would clash with Base.open."
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "OS version status\nLinux Ubuntu 18.04 works\nLinux Debian 8.0 works\nLinux Ubuntu 16.04 works (CI)\nWindows 10 works\nOS X Darwin 17.7 worksIf your OS/version is missing, please test as described below and open an issue with the information so that this table can be extended."
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "Currently there are only partial unit tests, since the functionality of this package is difficult to test without a desktop environment. Testing, bug reports, feature requests and PRs are welcome.There is a utility function DefaultApplication.test() for testing, which prints information for bug reports:julia> import DefaultApplication\n\njulia> DefaultApplication.test()\n┌ Info: opening text file with the default application\n└   path = \"/tmp/juliaT2oWTX.txt\"\n┌ Info: If the file was not opened, please copy the output and open an issue at\n└ https://github.com/tpapp/DefaultApplication.jl/issues\nJulia Version 0.7.0-beta2.26\nCommit 299300a409* (2018-07-17 04:35 UTC)\nPlatform Info:\n  OS: Linux (x86_64-linux-gnu)\n  CPU: Intel(R) Core(TM) i7-6560U CPU @ 2.20GHz\n  WORD_SIZE: 64\n  LIBM: libopenlibm\n  LLVM: libLLVM-6.0.0 (ORCJIT, skylake)\nEnvironment:\n  JULIA_NIGHTLY_PARENT = ~/src\n  JULIA_NIGHTLY_SYMLINK = ~/bin/julia-latest\nProcess(`xdg-open /tmp/juliaT2oWTX.txt`, ProcessRunning)"
},

{
    "location": "#Related-documentation-1",
    "page": "Readme",
    "title": "Related documentation",
    "category": "section",
    "text": "COMSPEC (Windows)\nxdg-open (Linux)\nopen (OS X)"
},

{
    "location": "autodocs/#DefaultApplication.open",
    "page": "Docstrings",
    "title": "DefaultApplication.open",
    "category": "function",
    "text": "DefaultApplication.open(filename; wait = false)\n\nOpen a file with the default application determined by the OS.\n\nThe argument wait is passed to run.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DefaultApplication.test",
    "page": "Docstrings",
    "title": "DefaultApplication.test",
    "category": "function",
    "text": "DefaultApplication.test()\n\nHelper function that creates text file, attempts to open it with the OS-specific default application, and prints information that helps with debugging.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DefaultApplication.DefaultApplicationDefaultApplication.evalDefaultApplication.includeDefaultApplication.openDefaultApplication.test"
},

]}
