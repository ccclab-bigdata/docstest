var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This module provides support for reading and writing ZIP archives in Julia.(Image: Build Status)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install via the Julia package manager, Pkg.add(\"InfoZIP\").Depends on the Info ZIP zip and uzip tools. If these are not installed the ZipFile.jl library is used instead."
},

{
    "location": "#unzip-1",
    "page": "Readme",
    "title": "unzip",
    "category": "section",
    "text": "InfoZIP.unzip(archive, [outputdir]) extracts an archive to files in \"outputdir\" (or in the current directory by default).InfoZIP.unzip(\"foo.zip\", \"/tmp/\")\n\nInfoZIP.unzip(http_get(\"http://foo.com/foo.zip\", \"/tmp/\"))"
},

{
    "location": "#High-level-interface-1",
    "page": "Readme",
    "title": "High level interface",
    "category": "section",
    "text": "Use open_zip open a ZIP Archive for read and/or write.Use create_zip to create a new ZIP Archive in one step.A ZIP Archive can be either a .ZIP file or an Array{UInt8,1}."
},

{
    "location": "#open_zip-1",
    "page": "Readme",
    "title": "open_zip",
    "category": "section",
    "text": "The result of open_zip(archive) is iterable and can be accessed as an Associative collection.# Print size of each file in \"foo.zip\"...\nfor (filename, data) in open_zip(\"foo.zip\")\n    println(\"$filename has $(length(data)) bytes\")\nend\n\n\n# Read contents of \"bar.csv\" from \"foo.zip\"...\ndata = open_zip(\"foo.zip\")[\"foo/bar.csv\"]\n\n\n# Read \"foo.zip\" from in-memory ZIP archive...\nzip_data = http_get(\"http://foo.com/foo.zip\")\ncsv_data = open_zip(zip_data)[\"bar.csv\"]\n\n\n# Create a Dict from a ZIP archive...\nDict(open_zip(\"foo.zip\"))\nDict{AbstractString,Any} with 2 entries:\n  \"hello.txt\"    => \"Hello!\\n\"\n  \"foo/text.txt\" => \"text\\n\"\n\n\n# Create \"foo.zip\" with two files...\nopen_zip(\"foo.zip\", \"w\") do z\n    z[\"hello.txt\"] = \"Hello!\\n\"\n    z[\"bar.csv\"] = \"1,2,3\\n\"\nend\n\n\n# Create in-memory ZIP archive in \"buf\"...\nbuf = UInt8[]\nopen_zip(buf) do z\n    z[\"hello.txt\"] = \"Hello!\\n\"\n    z[\"bar.csv\"] = \"1,2,3\\n\"\nend\nhttp_put(\"http://foo.com/foo.zip\", buf)\n\n\n# Add a new file to an existing archive\"...\nopen_zip(\"foo.zip\", \"r+\") do z\n    z[\"newfile.csv\"] = \"1,2,3\\n\"\nend\n\n\n# Update an existing file in an archive\"...\nopen_zip(\"foo.zip\", \"r+\") do z\n    z[\"newfile.csv\"] = lowercase(z[\"newfile.csv\"])\nend\n"
},

{
    "location": "#create_zip-1",
    "page": "Readme",
    "title": "create_zip",
    "category": "section",
    "text": "create_zip([destination], content) creates a ZIP archive from \"content\' in a single step. If \"destination\" is omitted the archive is returned as Array{UInt8}.\n# Create archive from Dict...\ncreate_zip(\"foo.zip\", Dict(\"hello.txt\" => \"Hello!\\n\",\n                           \"bar.csv\" => \"1,2,3\\n\"))\n\n\n# Create archive from Pairs...\ncreate_zip(\"foo.zip\", \"hello.txt\" => \"Hello!\\n\",\n                      \"bar.csv\" => \"1,2,3\\n\"))\n\n\n# Create archive from Tuples...\nzip_data = create_zip([(\"hello.txt\", \"Hello!\\n\"),\n                       (\"bar.csv\" => \"1,2,3\\n\")])\n\n\n# Create archive from filenames array and data array...\nzip_data = create_zip([\"hello.txt\", \"bar.csv\"],\n                      [\"Hello!\\n\",  \"1,2,3\\n\"])\n\n# Create archive from names of files in the current directory...\ncreate_zip(\"foo.zip\", [\"hello.txt\", \"bar.csv\"])\nor\nzip_data = create_zip([\"hello.txt\", \"bar.csv\"])Based on fhs/ZipFile.jl#16, thanks @timholy"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "InfoZIP.ArchiveInfoZIP.FileOrBytesInfoZIP.InfoZIPInfoZIP.create_zipInfoZIP.evalInfoZIP.have_infozipInfoZIP.includeInfoZIP.open_zipInfoZIP.rm_archiveInfoZIP.unzipInfoZIP.with_close"
},

]}
