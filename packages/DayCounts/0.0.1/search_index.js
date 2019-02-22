var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DayCounts.jl-1",
    "page": "Readme",
    "title": "DayCounts.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url]"
},

{
    "location": "#Summary-1",
    "page": "Readme",
    "title": "Summary",
    "category": "section",
    "text": "Pricing fixed-income securities involves estimating year fractions between dates. However, the fraction of a year between two dates depends on factors such as leap years and there are various conventions for dealing with this.In this package, we collect various day count conventions and provide a method yearfrac for computing the year fraction between dates."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using DayCounts, Dates\n\njulia> basis = [Thirty360, Actual360, Actual365, ActualActual];\n\njulia> println(\"\\nYear fraction between Jan 1 and April 1:\\n\")\n       for y in 2019:2020\n       println(y,isleapyear(y) ? \" (Leap Year)\" : \" (No Leap Year)\")\n       for b in basis\n       yf = yearfrac(Date(y,1,1),Date(y,4,1),b)\n       println(b,\": \",yf)\n       end\n       println(\"\")\n       end\n\nYear fraction between Jan 1 and April 1:\n\n2019 (No Leap Year)\nThirty360: 0.25\nActual360: 0.25\nActual365: 0.2465753424657534\nActualActual: 0.2465753424657534\n\n2020 (Leap Year)\nThirty360: 0.25\nActual360: 0.25277777777777777\nActual365: 0.2493150684931507\nActualActual: 0.24863387978142076"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "We used the following sources:https://en.wikipedia.org/wiki/Day_count_convention\nhttps://business.nasdaq.com/media/day-count-fractions_tcm5044-53854.pdf\nhttps://www.isda.org/2008/12/22/30-360-day-count-conventions[travis-img]: https://travis-ci.org/JuliaFinance/DayCounts.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaFinance/DayCounts.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/2rlf3g68ocvmc71q/branch/master?svg=true [appveyor-url]: https://ci.appveyor.com/project/EricForgy/daycounts-jl"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DayCounts.Actual360DayCounts.Actual365DayCounts.ActualActualDayCounts.DayCountDayCounts.DayCountsDayCounts.Thirty360DayCounts.Thirty360EDayCounts.Thirty360ISDADayCounts.evalDayCounts.includeDayCounts.yearfrac"
},

]}
