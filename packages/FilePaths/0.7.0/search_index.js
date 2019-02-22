var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FilePaths.jl-1",
    "page": "Readme",
    "title": "FilePaths.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)FilePaths.jl provides a type based approach to working with filesystem paths in julia."
},

{
    "location": "#Intallation:-1",
    "page": "Readme",
    "title": "Intallation:",
    "category": "section",
    "text": "FilePaths.jl is registered, so you can to use Pkg.add to install it.julia> Pkg.add(\"FilePaths\")"
},

{
    "location": "#Usage:-1",
    "page": "Readme",
    "title": "Usage:",
    "category": "section",
    "text": "julia> using FilePathsThe first important difference about working with paths in FilePaths.jl is that a path is an immutable list (Tuple) of strings, rather than simple a string.Path creation:julia> Path(\"~/repos/FilePaths.jl/\")\nPaths.PosixPath((\"~\",\"repos\",\"FilePaths.jl\",\"\"))orjulia> p\"~/repos/FilePaths.jl/\"\nPaths.PosixPath((\"~\",\"repos\",\"FilePaths.jl\",\"\"))Human readable file status info:julia> stat(p\"README.md\")\nStatus(\n  device = 16777220,\n  inode = 48428965,\n  mode = -rw-r--r--,\n  nlink = 1,\n  uid = 501,\n  gid = 20,\n  rdev = 0,\n  size = 1880 (1.8K),\n  blksize = 4096 (4.0K),\n  blocks = 8,\n  mtime = 2016-02-16T00:49:27,\n  ctime = 2016-02-16T00:49:27,\n)Working with permissions:julia> m = mode(p\"README.md\")\n-rw-r--r--\n\njulia> m - readable(:ALL)\n--w-------\n\njulia> m + executable(:ALL)\n-rwxr-xr-x\n\njulia> chmod(p\"README.md\", \"+x\")\n\njulia> mode(p\"README.md\")\n-rwxr-xr-x\n\njulia> chmod(p\"README.md\", m)\n\njulia> m = mode(p\"README.md\")\n-rw-r--r--\n\njulia> chmod(p\"README.md\", user=(READ+WRITE+EXEC), group=(READ+WRITE), other=READ)\n\njulia> mode(p\"README.md\")\n-rwxrw-r--\nReading and writing directly to file paths:julia> write(p\"testfile\", \"foobar\")\n6\n\njulia> read(p\"testfile\")\n\"foobar\"All the standard methods for working with paths in base julia exist in the FilePaths.jl. The following describes the rough mapping of method names. Use ? at the REPL to get the documentation and arguments as they may be different than the base implementations.Base FilePaths.jl\npwd() cwd()\nhomedir() home()\ncd() cd()\njoinpath() joinpath()\nbasename() basename()\nsplitext(basename())[1] filename\nsplitext(basename())[2] extension\nN/A extensions\nispath exists\nrealpath real\nnormpath norm\nabspath abs\nrelpath relative\nstat stat\nlstat lstat\nfilemode mode\nmtime modified\nctime created\nisdir isdir\nisfile isfile\nislink islink\nissocket issocket\nisfifo isfifo\nischardev ischardev\nisblockdev isblockdev\nisexecutable (deprecated) isexecutable\niswritable (deprecated) iswritable\nisreadable (deprecated) isreadable\nismount ismount\nisabspath isabs\nsplitdrive()[1] drive\nN/A root\nexpanduser expanduser\nmkdir mkdir\nmkpath N/A (use mkdir)\nsymlink symlink\ncp copy\nmv move\nrm remove\ntouch touch\ntempname tmpname\ntempdir tmpdir\nmktemp mktmp\nmktempdir mktmpdir\nchmod chmod (recursive unix-only)\nchown (unix only) chown (unix only)\nN/A read\nN/A write"
},

{
    "location": "#TODO:-1",
    "page": "Readme",
    "title": "TODO:",
    "category": "section",
    "text": "cross platform chmod and chown"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FilePaths.@__FILEPATH__FilePaths.@__PATH__FilePaths.@p_strFilePaths.AbstractPathFilePaths.EXECFilePaths.FilePathsFilePaths.FilePathsBaseFilePaths.ModeFilePaths.PathFilePaths.PosixPathFilePaths.READFilePaths.StatusFilePaths.WRITEFilePaths.WindowsPathFilePaths.abspathFilePaths.anchorFilePaths.chownFilePaths.createdFilePaths.cwdFilePaths.dirnameFilePaths.driveFilePaths.evalFilePaths.executableFilePaths.existsFilePaths.extensionFilePaths.extensionsFilePaths.filemodeFilePaths.filenameFilePaths.hasparentFilePaths.homeFilePaths.includeFilePaths.isabsFilePaths.isabspathFilePaths.isexecutableFilePaths.ispathFilePaths.mkpathFilePaths.mktmpFilePaths.mktmpdirFilePaths.modeFilePaths.modifiedFilePaths.moveFilePaths.mvFilePaths.normpathFilePaths.parentsFilePaths.partsFilePaths.rawFilePaths.readableFilePaths.realpathFilePaths.relativeFilePaths.relpathFilePaths.removeFilePaths.rmFilePaths.rootFilePaths.tmpdirFilePaths.tmpnameFilePaths.writable"
},

]}
