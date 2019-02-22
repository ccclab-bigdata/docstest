var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LeapSeconds-1",
    "page": "Readme",
    "title": "LeapSeconds",
    "category": "section",
    "text": "Leap seconds in Julia(Image: Build Status) (Image: Windows Build Status) (Image: codecov.io)A new minor version of this package will be published everytime a new leap second is issued be the IERS and dependent packages will need to be updated!"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add LeapSeconds"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The package exports a single function offset_tai_utc which returns the offset between International Atomic Time (TAI) and Coordinated Universal Time (UTC) for a given date. For dates after 1972-01-01, this is the number of leap seconds.using LeapSeconds\nusing Dates\n\ndt = DateTime(2017, 1, 1)\n\n# Pass a `DateTime` instance...\noffset_tai_utc(dt)\n\n# ...or a Julian Date\noffset_tai_utc(datetime2julian(dt))"
},

{
    "location": "autodocs/#LeapSeconds.offset_tai_utc",
    "page": "Docstrings",
    "title": "LeapSeconds.offset_tai_utc",
    "category": "function",
    "text": "offset_tai_utc(jd)\n\nReturns the offset between International Atomic Time (TAI) and Coordinated Universal Time (UTC) for a given Julian Date jd. For dates after 1972-01-01, this is the number of leap seconds.\n\n\n\n\n\noffset_tai_utc(dt::DateTime)\n\nReturns the offset between International Atomic Time (TAI) and Coordinated Universal Time (UTC) for a given DateTime. For dates after 1972-01-01, this is the number of leap seconds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LeapSeconds.DRIFT_EPOCHSLeapSeconds.DRIFT_RATESLeapSeconds.EPOCHSLeapSeconds.LEAP_SECONDSLeapSeconds.LS_EPOCHSLeapSeconds.LeapSecondsLeapSeconds.MJD_EPOCHLeapSeconds.OFFSETSLeapSeconds.evalLeapSeconds.includeLeapSeconds.offset_tai_utc"
},

]}
