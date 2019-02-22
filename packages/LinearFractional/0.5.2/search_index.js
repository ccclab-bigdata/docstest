var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LinearFractional-1",
    "page": "Readme",
    "title": "LinearFractional",
    "category": "section",
    "text": "<!– (Image: Coverage Status) –> (Image: Travis Build Status) (Image: License)LinearFractional is an extension for JuMP to optimize linear programs with fractional objectives.  LinearFractional implements the Charnes-Cooper transformation behind-the-scenes so that the user only needs to specify the problem as any ordinary JuMP problem, but specifying a numerator and denominator instead of a single objective function."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the latest development version, run the following command:using Pkg\nPkg.add(\"LinearFractional\")Then you can run the built-in unit tests withPkg.test(\"LinearFractional\")to verify that everything is functioning properly on your machine."
},

{
    "location": "#Basic-Example-1",
    "page": "Readme",
    "title": "Basic Example",
    "category": "section",
    "text": "This toy example refers to the reference problem in http://www.ams.jhu.edu/~castello/625.414/Handouts/FractionalProg.pdf.using LinearFractional\nusing JuMP\nusing Clp\n\nlfp = LinearFractionalModel(solver=ClpSolver())\nx1 = @variable(lfp, basename=\"x1\", lowerbound=0)\nx2 = @variable(lfp, basename=\"x2\", lowerbound=0, upperbound=6)\n@constraint(lfp, -x1 + x2 <= 4)\n@constraint(lfp, 2x1 + x2 <= 14)\n@constraint(lfp, x2 <= 6)\n@numerator(lfp,  :Min, -2x1 + x2 + 2)\n@denominator(lfp,  x1 + 3x2 + 4)\nsolve(lfp)\ngetobjectivevalue(lfp)\ngetvalue(x1)\ngetvalue(x2)"
},

]}
