var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ConicBenchmarkUtilities-1",
    "page": "Readme",
    "title": "ConicBenchmarkUtilities",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)Utitilies to convert between CBF and MathProgBase conic format."
},

{
    "location": "#How-to-read-and-solve-a-CBF-instance:-1",
    "page": "Readme",
    "title": "How to read and solve a CBF instance:",
    "category": "section",
    "text": "dat = readcbfdata(\"/path/to/instance.cbf\") # .cbf.gz extension also accepted\n\n# In MathProgBase format:\nc, A, b, con_cones, var_cones, vartypes, sense, objoffset = cbftompb(dat)\n# Note: The sense in MathProgBase form is always minimization, and the objective offset is zero.\n# If sense == :Max, you should flip the sign of c before handing off to a solver.\n\n# Given the data in MathProgBase format, you can solve it using any corresponding solver which supports the cones present in the problem.\n# To use ECOS, for example,\nusing ECOS\nsolver = ECOSSolver()\n# Now load and solve\nm = MathProgBase.ConicModel(ECOSSolver(verbose=0))\nMathProgBase.loadproblem!(m, c, A, b, con_cones, var_cones)\n# Continuous solvers need not implement setvartype!\nif !all(vartypes .== :Cont)\n    MathProgBase.setvartype!(m, vartypes)\nend\nMathProgBase.optimize!(m)\n# Solution accessible through:\nx_sol = MathProgBase.getsolution(m)\nobjval = MathProgBase.getobjval(m)\n# If PSD vars are present, you can use the following utility to extract the solution in CBF form:\nscalar_solution, psdvar_solution = ConicBenchmarkUtilities.mpb_sol_to_cbf(dat,x_sol)"
},

{
    "location": "#How-to-write-a-CBF-instance:-1",
    "page": "Readme",
    "title": "How to write a CBF instance:",
    "category": "section",
    "text": "newdat = mpbtocbf(\"example\", c, A, b, con_cones, var_cones, vartypes, sense)\nwritecbfdata(\"example.cbf\",newdat,\"# Comment for the CBF header\")Note that because MathProgBase conic format is more general than CBF in specifying the mapping between variables and cones, the order of the variables in the CBF file may not match the original order. No reordering takes place if var_cones is trivial, i.e., (Free1N) where N is the total number of variables."
},

{
    "location": "#How-to-write-a-JuMP-model-to-CBF-form:-1",
    "page": "Readme",
    "title": "How to write a JuMP model to CBF form:",
    "category": "section",
    "text": "m = JuMP.Model()\n@variable(m, x[1:2])\n@variable(m, t)\n@constraint(m, norm(x) <= t)\nConicBenchmarkUtilities.jump_to_cbf(m, \"soctest\", \"soctest.cbf\")"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ConicBenchmarkUtilities.CBFDataConicBenchmarkUtilities.ConicBenchmarkUtilitiesConicBenchmarkUtilities.cbfcones_to_mpbconesConicBenchmarkUtilities.cbftompbConicBenchmarkUtilities.conedualConicBenchmarkUtilities.conemapConicBenchmarkUtilities.conemap_revConicBenchmarkUtilities.convex_to_cbfConicBenchmarkUtilities.dualizeConicBenchmarkUtilities.evalConicBenchmarkUtilities.idx_to_offsetConicBenchmarkUtilities.includeConicBenchmarkUtilities.jump_to_cbfConicBenchmarkUtilities.make_smat!ConicBenchmarkUtilities.mpb_sol_to_cbfConicBenchmarkUtilities.mpbtocbfConicBenchmarkUtilities.parse_matblockConicBenchmarkUtilities.psd_lenConicBenchmarkUtilities.readcbfdataConicBenchmarkUtilities.remove_ints_in_nonlinear_conesConicBenchmarkUtilities.remove_zero_varconesConicBenchmarkUtilities.socrotated_to_socConicBenchmarkUtilities.unzipConicBenchmarkUtilities.writecbfdata"
},

]}
