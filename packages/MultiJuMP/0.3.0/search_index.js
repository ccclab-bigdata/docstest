var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MultiJuMP-1",
    "page": "Readme",
    "title": "MultiJuMP",
    "category": "section",
    "text": "(Image: Build Status) (Image: DOI)MultiJuMP enables the user to easily run multiobjective optimisation problems and generate Pareto fronts. The code is built as an extension of JuMP. We have implemented three ways to trace out the Pareto front:Normal Boundary Intersection (solve(m, method = :NBI))\nWeighted sums (solve(m, method = :WS))\nConstraint methods (solve(m, method = :EPS))\nThis method only works for biobjective optimisation as of nowDisclaimer: MultiJuMP is not developed or maintained by the JuMP developers.  "
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In Julia, call Pkg.add(\"MultiJuMP\") to install MultiJuMP."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Have a look in the examples/ directory for different use cases, including tri-objective Pareto fronts.MultiJuMP supports linear problems using the linear=true keyword when calling MultiModel(linear=true). Currently, only the :EPS and :WS methods are supported for linear problems.  using MultiJuMP, JuMP\nusing Clp: ClpSolver\n\nconst mmodel = MultiModel(solver = ClpSolver(), linear = true)\nconst y = @variable(mmodel, 0 <= y <= 10.0)\nconst z = @variable(mmodel, 0 <= z <= 10.0)\n@constraint(mmodel, y + z <= 15.0)\n\n# objectives\nconst exp_obj1 = @expression(mmodel, -y +0.05 * z)\nconst exp_obj2 = @expression(mmodel, 0.05 * y - z)\nconst obj1 = SingleObjective(exp_obj1)\nconst obj2 = SingleObjective(exp_obj2)\n\n# # setting objectives in the data\nconst multim = getMultiData(mmodel)\nmultim.objectives = [obj1, obj2]\n\nsolve(mmodel, method = :WS)\n\nusing Plots: plot, title!\nplot(multim)\ntitle!(\"Extrema of the Pareto front\")(Image: Linear pareto front)As a non-linear usage example, we implement the test from Das and Dennis, 1998: Normal-boundary intersection: A new method for generating the Pareto surface in nonlinear multicriteria optimization problems:using MultiJuMP, JuMP\nusing Ipopt\n\nm = MultiModel(solver = IpoptSolver())\n@variable(m, x[i=1:5])\n@NLexpression(m, f1, sum(x[i]^2 for i=1:5))\n@NLexpression(m, f2, 3x[1]+2x[2]-x[3]/3+0.01*(x[4]-x[5])^3)\n@NLconstraint(m, x[1]+2x[2]-x[3]-0.5x[4]+x[5]==2)\n@NLconstraint(m, 4x[1]-2x[2]+0.8x[3]+0.6x[4]+0.5x[5]^2 == 0)\n@NLconstraint(m, sum(x[i]^2 for i=1:5) <= 10)\n\niv1 = [0.3, 0.5, -0.26, -0.13, 0.28] # Initial guess\nobj1 = SingleObjective(f1, sense = :Min,\n                       iv = Dict{Symbol,Any}(:x => iv1))\nobj2 = SingleObjective(f2, sense = :Min)\n\nmd = getMultiData(m)\nmd.objectives = [obj1, obj2]\nmd.pointsperdim = 20\nsolve(m, method = :NBI) # method = :WS or method = :EPSPlotting with Plots.jl is supported via recipes:using Plots\npltnbi = plot(md)<!– Github bug (Image: Pareto front example) –> (Image: Pareto front example)"
},

]}
