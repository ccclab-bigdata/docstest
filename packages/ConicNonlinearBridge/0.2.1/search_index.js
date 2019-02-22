var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ConicNonlinearBridge-1",
    "page": "Readme",
    "title": "ConicNonlinearBridge",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)This package implements a wrapper to allow derivative-based nonlinear solvers to function as conic solvers for problems involving linear, (rotated) second-order, and exponential cones. For example:# min -2y -1z\n#  st  x == 1,\n#      x >= norm(y, z)\nusing MathProgBase, ConicNonlinearBridge, Ipopt\nsolver = ConicNLPWrapper(nlp_solver=IpoptSolver())\nm = MathProgBase.ConicModel(solver)\nMathProgBase.loadproblem!(m, [0, -2, -1], [1 0 0], [1], [(:Zero, 1)], [(:SOC, 1:3)])  \nMathProgBase.optimize!(m)\nMathProgBase.status(m) # :Optimal\nMathProgBase.getsolution(m) # [1.0, 0.894427, 0.447214]\nMathProgBase.getobjval(m) # -2.236067\nMathProgBase.freemodel!(m)You may replace IpoptSolver above with any NLP solver (e.g. Knitro) accessible through MathProgBase, and you may pass valid options to the NLP solver directly (e.g. IpoptSolver(print_level=1).This wrapper is experimental. If you are experiencing convergence troubles with existing conic solvers, this wrapper may be helpful. In general, however, specialized conic solvers are more reliable than derivative-based nonlinear solvers, especially for detection of infeasibility and unboundedness. If you find this wrapper useful, please let us know."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ConicNonlinearBridge.ConicNLPWrapperConicNonlinearBridge.ConicNonlinearBridgeConicNonlinearBridge.NonlinearToConicBridgeConicNonlinearBridge.evalConicNonlinearBridge.include"
},

]}
