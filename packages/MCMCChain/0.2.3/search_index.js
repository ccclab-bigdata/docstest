var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MCMCChain.jl-1",
    "page": "Readme",
    "title": "MCMCChain.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)Implementation of Julia types for summarizing MCMC simulations and utility functions for diagnostics and visualizations."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "The following simple example illustrates how to use Chain to visually summarize a MCMC simulation:using MCMCChain\nusing StatPlots\n\ntheme(:ggplot2);\n\n# Define the experiment\nn_iter = 500;\nn_name = 3;\nn_chain = 2;\n\n# experiment results\nval = randn(n_iter, n_name, n_chain) .+ [1, 2, 3]\';\nval = hcat(val, rand(1:2, n_iter, 1, n_chain));\n\n# construct a Chains object\nchn = Chains(val);\n\n# visualize the MCMC simulation results\np1 = plot(chn)\np2 = plot(chn, colordim = :parameter)\n\n# save to a png file\nsavefig(p1, \"demo-plot-parameters.png\")\nsavefig(p2, \"demo-plot-chains.png\")\nThis code results in the visualizations shown below. Note that the plot function takes the additional arguments described in the Plots.jl package.Summarize parameters Summarize chains\nplot(chn; colordim = :chain) plot(chn; colordim = :parameter)\n(Image: p1) (Image: p2)"
},

{
    "location": "#Manual-1",
    "page": "Readme",
    "title": "Manual",
    "category": "section",
    "text": ""
},

{
    "location": "#Chains-type-1",
    "page": "Readme",
    "title": "Chains type",
    "category": "section",
    "text": "# construction of a Chains object\nChains(iterations::Int, params::Int;\n    start = 1, thin = 1, chains = 1,\n    names = String[])\n\n# construction of a Chains object using an\n# iteration * params * chains\n# array (values).\nChains(values::Array{T, 3};\n    start = 1, thin = 1, chains = 1,\n    names = String[])\n\n# Indexing a Chains object\nchn = Chains(...)\nchn_param1 = chn[:,2,:] # returns a new Chains object for parameter 2\nchn[:,2,:] = ... # set values for parameter 2"
},

{
    "location": "#Convergence-Diagnostics-functions-1",
    "page": "Readme",
    "title": "Convergence Diagnostics functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Discrete-Diagnostic-1",
    "page": "Readme",
    "title": "Discrete Diagnostic",
    "category": "section",
    "text": "Options for method are  [:weiss, :hangartner, :DARBOOT, MCBOOT, :billinsgley, :billingsleyBOOT]discretediag(c::AbstractChains; frac=0.3, method=:weiss, nsim=1000)"
},

{
    "location": "#Gelman,-Rubin,-and-Brooks-Diagnostics-1",
    "page": "Readme",
    "title": "Gelman, Rubin, and Brooks Diagnostics",
    "category": "section",
    "text": "gelmandiag(c::AbstractChains; alpha=0.05, mpsrf=false, transform=false)"
},

{
    "location": "#Geweke-Diagnostic-1",
    "page": "Readme",
    "title": "Geweke Diagnostic",
    "category": "section",
    "text": "gewekediag(c::AbstractChains; first=0.1, last=0.5, etype=:imse)"
},

{
    "location": "#Heidelberger-and-Welch-Diagnostics-1",
    "page": "Readme",
    "title": "Heidelberger and Welch Diagnostics",
    "category": "section",
    "text": "heideldiag(c::AbstractChains; alpha=0.05, eps=0.1, etype=:imse)"
},

{
    "location": "#Raftery-and-Lewis-Diagnostic-1",
    "page": "Readme",
    "title": "Raftery and Lewis Diagnostic",
    "category": "section",
    "text": "rafterydiag(c::AbstractChains; q=0.025, r=0.005, s=0.95, eps=0.001)"
},

{
    "location": "#Plotting-1",
    "page": "Readme",
    "title": "Plotting",
    "category": "section",
    "text": "# construct a plot\nplot(c::AbstractChains, seriestype = (:traceplot, :mixeddensity))\n\n# construct trace plots\nplot(c::AbstractChains, seriestype = :traceplot)\n# or for all seriestypes use the alternative shorthand syntax\ntraceplot(c::AbstractChains)\n\n# construct running average plots\nmeanplot(c::AbstractChains)\n\n# construct density plots\ndensity(c::AbstractChains)\n\n# construct histogram plots\nhistogram(c::AbstractChains)\n\n# construct mixed density plots\nmixeddensity(c::AbstractChains)\n\n# construct autocorrelation plots\nautocorplot(c::AbstractChains)\n\n# make a cornerplot (requires StatPlots) of parameters in a Chain:\ncorner(c::AbstractChains, [:A, :B])"
},

{
    "location": "#License-Notice-1",
    "page": "Readme",
    "title": "License Notice",
    "category": "section",
    "text": "Note that this package heavily uses and adapts code from the Mamba.jl package licensed under MIT License, see License.md."
},

{
    "location": "autodocs/#MCMCChain.Chains",
    "page": "Docstrings",
    "title": "MCMCChain.Chains",
    "category": "type",
    "text": "Chains type\n\nParameters:\n\nvalue: iterations × variables × chains Data array\nrange: Range describing the iterations (considering thinning)\nnames: List of variable names (strings)\nchains: List of chain ids\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MCMCChain.weiss",
    "page": "Docstrings",
    "title": "MCMCChain.weiss",
    "category": "function",
    "text": "weiss(X::AbstractMatrix) -> (statistic, m_tot, pvalue, ca)\n\nThe weiss procedure to assess convergence in MCMC output computes X^2/c and evaluates a p-value from the X^2 distribution with (|R| − 1)(s − 1) degrees of freedom.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MCMCChain.AbstractChainsMCMCChain.ChainSummaryMCMCChain.ChainsMCMCChain.CornerMCMCChain.MCMCChainMCMCChain._AutocorPlotMCMCChain._DensityPlotMCMCChain._HistogramPlotMCMCChain._MeanPlotMCMCChain._TracePlotMCMCChain.autcorplotMCMCChain.autocorplotMCMCChain.autocorplot!MCMCChain.bd_innerMCMCChain.billingsley_subMCMCChain.cat1MCMCChain.cat2MCMCChain.cat3MCMCChain.changerateMCMCChain.combineMCMCChain.corMCMCChain.cornerMCMCChain.corner!MCMCChain.cummeanMCMCChain.densityplotMCMCChain.describeMCMCChain.diag_allMCMCChain.discretediagMCMCChain.discretediag_subMCMCChain.evalMCMCChain.gelmandiagMCMCChain.getindexMCMCChain.gewekediagMCMCChain.hangartner_innerMCMCChain.headerMCMCChain.heideldiagMCMCChain.histogramplotMCMCChain.hpdMCMCChain.includeMCMCChain.indiscretesupportMCMCChain.iters2indsMCMCChain.linkMCMCChain.mapitersMCMCChain.mcseMCMCChain.mcse_bmMCMCChain.mcse_imseMCMCChain.mcse_ipseMCMCChain.meanplotMCMCChain.meanplot!MCMCChain.mixeddensityMCMCChain.mixeddensity!MCMCChain.mixeddensityplotMCMCChain.names2indsMCMCChain.pcramerMCMCChain.plotMCMCChain.rafterydiagMCMCChain.readcodaMCMCChain.setindex!MCMCChain.simulate_MCMCMCChain.simulate_NDARMAMCMCChain.supportedplotsMCMCChain.traceplotMCMCChain.traceplot!MCMCChain.translationdictMCMCChain.update_billingsley_temp_vars!MCMCChain.update_hangartner_temp_vars!MCMCChain.weissMCMCChain.weiss_subMCMCChain.window2indsMCMCChain.wrtsp"
},

]}
