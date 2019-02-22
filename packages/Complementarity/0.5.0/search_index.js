var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Complementarity.jl-1",
    "page": "Readme",
    "title": "Complementarity.jl",
    "category": "section",
    "text": "(Image: Complementarity) (Image: Complementarity) (Image: Complementarity)(Image: Build Status) (Image: Build status) (Image: Coverage Status)This package provides modeling language for (1) mixed complementarity problems (MCP) and (2) mathematical programs with equilibrium problems (MPEC).NOTE @complmentarity for MCP and @complements for MPEC."
},

{
    "location": "#Mixed-Complementarity-Problems-(MCP)-1",
    "page": "Readme",
    "title": "Mixed Complementarity Problems (MCP)",
    "category": "section",
    "text": "***MCP Documentation***This package provides a modeling and computational interface for solving Mixed Complementarity Problems (MCP): modeling by JuMP.jl and computing by PATHSolver.jl and NLsolve.jl. See the documentation.F(x) ⟂ lb ≤ x ≤ ubA very simple example:(x+2) x = 0,  x ≥ 0,   x+2 ≥ 0using Complementarity, JuMP\nm = MCPModel()\n@variable(m, x >= 0)\n@mapping(m, F, x+2)\n@complementarity(m, F, x)\nstatus = solveMCP(m)\n@show getvalue(x)"
},

{
    "location": "#Mathematical-Programs-with-Equilibrium-Constraints-(MPEC)-1",
    "page": "Readme",
    "title": "Mathematical Programs with Equilibrium Constraints (MPEC)",
    "category": "section",
    "text": "***MPEC Documentation***For solving mathematical programs with equilibrium constraints (MPEC), this package provides an extension to JuMP.jl by providing a macro that accepts complementarity conditions as constraints.  Then it reformulates the complementarity conditions as a set of equality and inequality constraints so that a nonlinear optimization solver such as Ipopt.jl can solve the problem. See the documentation.min  f(x)\ns.t. g(x) ≤ 0\n     F(x) ⟂ lb ≤ x ≤ ubA very simple example:min  x^3\ns.t. (x+2) x = 0,  x ≥ 0,   x+2 ≥ 0using JuMP, Ipopt, Complementarity\nm = Model(solver=IpoptSolver())\n@variable(m, x>=0)\n@NLobjective(m, Min, x^3)\n@complements(m, 0 <= x+2,   x >= 0)\nsolve(m)\n@show getvalue(x)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Complementarity\")This will also install a few other packages."
},

]}
