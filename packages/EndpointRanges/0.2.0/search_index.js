var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EndpointRanges-1",
    "page": "Readme",
    "title": "EndpointRanges",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This Julia package makes it easier to index \"unconventional\" arrays (ones for which indexing does not necessarily start at 1), by defining constants ibegin and iend that stand for the beginning and end, respectively, of the indices range along any given dimension."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using EndpointRanges\n\na = 1:20\na[ibegin:iend] == a\na[ibegin+3:iend-2] == a[4:18]\na[1:(ibegin+iend)÷2] == a[1:10]Note that, unlike 3:end you can also pass such indices as arguments to a function:view(a, ibegin+2:iend-3) == view(a, 3:17)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EndpointRanges.EndpointEndpointRanges.EndpointRangeEndpointRanges.EndpointRangesEndpointRanges.EndpointStepRangeEndpointRanges.EndpointUnitRangeEndpointRanges.IBeginEndpointRanges.IEndEndpointRanges.IndexFunctionEndpointRanges.evalEndpointRanges.ibeginEndpointRanges.iendEndpointRanges.includeEndpointRanges.newindexEndpointRanges.newindices"
},

]}
