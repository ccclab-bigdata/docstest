var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#UAParser-1",
    "page": "Readme",
    "title": "UAParser",
    "category": "section",
    "text": "(Image: Build Status) </br> (Image: Coverage Status)UAParser is a Julia port of ua-parser, which itself is a multi-language port of BrowserScope\'s user agent string parser. Per the README file of the main project:\"The crux of the original parser–the data collected by Steve Souders over the years–has been extracted into a separate YAML file so as to be reusable as is by implementations in other programming languages.\"UAParser is a limited Julia implementation heavily influenced by the Python code from the ua-parser library.New regexes have were retrieved from here on 2018-12-19."
},

{
    "location": "#UAParser-API-1",
    "page": "Readme",
    "title": "UAParser API",
    "category": "section",
    "text": "The API for UAParser revolves around three functions: parsedevice, parseos and parseuseragent. Each function takes one argument, user_agent_string::AbstractString and returns a custom Julia type: DeviceResult, OSResult, or UAResult. The structure of each type is as follows:  DeviceResult: family, brand, model\n\n  UAResult: family, major, minor, patch\n\n  OSResult: family, major, minor, patch, patch_minor"
},

{
    "location": "#Code-examples-1",
    "page": "Readme",
    "title": "Code examples",
    "category": "section",
    "text": "  using UAParser\n\n  #Example user-agent string\n  user_agent_string = \"Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B179 Safari/7534.48.3\"\n\n  #Get device from user-agent string\n  parsedevice(user_agent_string) #> DeviceResult(\"iPhone\", \"Apple\", \"iPhone\")\n\n  #Get browser information from user-agent string\n  parseuseragent(user_agent_string) #> UAResult(\"Mobile Safari\",\"5\",\"1\",missing)\n\n  #Get os information\n  parseos(user_agent_string) #> OSResult(\"iOS\",\"5\",\"1\",missing,missing)\nYou can index into the results of these functions like any other Julia composite type.  #Get just browser information, no version information\n  x1 = parseuseragent(user_agent_string)\n  x1.family #> \"Mobile Safari\"\n\n  #Get the os, no version information\n  x2 = parseos(user_agent_string)\n  x2.family #> \"iOS\""
},

{
    "location": "#A-Note-On-Parser-Accuracy-1",
    "page": "Readme",
    "title": "A Note On Parser Accuracy",
    "category": "section",
    "text": "When this library was created, it became very obvious that it would be hard to replicate the Python parser code with 100% accuracy. The authors decided that a reasonably accurate implementation was more useful than spending the time to achieve 100% accuracy.The tests in this library test against the accuracy of the parser. As of v0.6 of this package, here are the accuracy statistics against the files provided by the main ua-core project:parse_device: 15144/16017 (94.6%)\nparse_os: 1517/1528 (99.3%)\nparse_ua: 204/205 (99.5%)Of course, if someone would like to achieve 100% accuracy, PRs will absolutely be reviewed."
},

{
    "location": "#Licensing-1",
    "page": "Readme",
    "title": "Licensing",
    "category": "section",
    "text": "The licensing of the UAParser Julia module is under the default MIT Expat license. The data contained in regexes.yaml is Copyright 2009 Google Inc. and available under the Apache License, Version 2.0."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "UAParser.DEVICE_PARSERSUAParser.DataFrameUAParser.DeviceParserUAParser.DeviceResultUAParser.OSParserUAParser.OSResultUAParser.OS_PARSERSUAParser.REGEXESUAParser.UAParserUAParser.UAResultUAParser.USER_AGENT_PARSERSUAParser.UserAgentParserUAParser._check_missing_stringUAParser._inner_replaceUAParser._multireplaceUAParser.evalUAParser.includeUAParser.loaddeviceUAParser.loadosUAParser.loaduaUAParser.parsedeviceUAParser.parseosUAParser.parseuseragent"
},

]}
