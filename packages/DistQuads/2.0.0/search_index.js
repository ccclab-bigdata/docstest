var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DistQuads-1",
    "page": "Readme",
    "title": "DistQuads",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "#What-1",
    "page": "Readme",
    "title": "What",
    "category": "section",
    "text": "Evaluating the expected value of functions of random variables requires numerical integration. There are many ways to do this, but a very popular approach is to transform the integral evaluation into a weighed sum of function evaluations at N values, often called nodes, useing so-called Gaussian quadrature.This package builds on top of the Distributions.jl package, and it provides a simple interface to generate Guassian quadrature weights and nodes for numerical integration as explained above.julia> using Distributions, DistQuads\n\njulia> bd = Beta(1.4, 5.4)\nDistributions.Beta{Float64}(α=1.4, β=5.4)\n\njulia> dq = DistQuad(bd)\nDistQuads.DistQuad([0.00185197,0.00773162,0.017613,0.0314164,0.0490303,0.0703119,0.095089,0.123161,0.1543,0.188255  …  0.740476,0.779219,0.815718,0.849678,0.880826,0.90891,0.933707,0.955022,0.972705,0.986694],[0.00387997,0.013685,0.0273551,0.0429761,0.0586422,0.0726105,0.0834732,0.0902888,0.0926473,0.0906605  …  0.00117028,0.000555584,0.000239261,9.17104e-5,3.04716e-5,8.44413e-6,1.83878e-6,2.84652e-7,2.58301e-8,8.47448e-10],Distributions.Beta{Float64}(α=1.4, β=5.4))\n\njulia> mean(dq)\n0.20588235294117635\n\njulia> mean(bd)\n0.20588235294117643\n\njulia> var(dq)\n0.020960873036997594\n\njulia> var(bd)\n0.020960873036997597\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DistQuads.+DistQuads.-DistQuads.AbstractMixtureModelDistQuads.AbstractMvNormalDistQuads.ArcsineDistQuads.BernoulliDistQuads.BetaDistQuads.BetaBinomialDistQuads.BetaPrimeDistQuads.BinomialDistQuads.BiweightDistQuads.CategoricalDistQuads.CauchyDistQuads.ChiDistQuads.ChisqDistQuads.ContinuousDistQuads.ContinuousDistributionDistQuads.ContinuousMatrixDistributionDistQuads.ContinuousMultivariateDistributionDistQuads.ContinuousUnivariateDistributionDistQuads.CosineDistQuads.DiagNormalDistQuads.DiagNormalCanonDistQuads.DirichletDistQuads.DirichletMultinomialDistQuads.DiscreteDistQuads.DiscreteDistributionDistQuads.DiscreteMatrixDistributionDistQuads.DiscreteMultivariateDistributionDistQuads.DiscreteUniformDistQuads.DiscreteUnivariateDistributionDistQuads.DistQuadDistQuads.DistQuadsDistQuads.DistributionDistQuads.DistributionsDistQuads.DoubleExponentialDistQuads.EDistQuads.EdgeworthMeanDistQuads.EdgeworthSumDistQuads.EdgeworthZDistQuads.EmpiricalUnivariateDistributionDistQuads.EpanechnikovDistQuads.ErlangDistQuads.EstimatorDistQuads.ExponentialDistQuads.FDistDistQuads.FisherNoncentralHypergeometricDistQuads.FrechetDistQuads.FullNormalDistQuads.FullNormalCanonDistQuads.GammaDistQuads.GeneralizedExtremeValueDistQuads.GeneralizedParetoDistQuads.GeometricDistQuads.GumbelDistQuads.HypergeometricDistQuads.InverseGammaDistQuads.InverseGaussianDistQuads.InverseWishartDistQuads.IsoNormalDistQuads.IsoNormalCanonDistQuads.KSDistDistQuads.KSOneSidedDistQuads.KolmogorovDistQuads.LaplaceDistQuads.LevyDistQuads.LocationScaleDistQuads.LogNormalDistQuads.LogisticDistQuads.MLEstimatorDistQuads.MatrixDistributionDistQuads.MatrixvariateDistQuads.MixtureModelDistQuads.MultinomialDistQuads.MultivariateDistQuads.MultivariateDistributionDistQuads.MultivariateMixtureDistQuads.MultivariateNormalDistQuads.MvLogNormalDistQuads.MvNormalDistQuads.MvNormalCanonDistQuads.MvNormalKnownCovDistQuads.MvTDistDistQuads.NegativeBinomialDistQuads.NonMatrixDistributionDistQuads.NoncentralBetaDistQuads.NoncentralChisqDistQuads.NoncentralFDistQuads.NoncentralHypergeometricDistQuads.NoncentralTDistQuads.NormalDistQuads.NormalCanonDistQuads.NormalInverseGaussianDistQuads.ParetoDistQuads.PoissonDistQuads.PoissonBinomialDistQuads.QQPairDistQuads.RayleighDistQuads.RealIntervalDistQuads.SampleableDistQuads.SemicircleDistQuads.SkellamDistQuads.SufficientStatsDistQuads.SymTriangularDistDistQuads.TDistDistQuads.TriangularDistDistQuads.TriweightDistQuads.TruncatedDistQuads.TruncatedNormalDistQuads.UniformDistQuads.UnivariateDistQuads.UnivariateDistributionDistQuads.UnivariateGMMDistQuads.UnivariateMixtureDistQuads.ValueSupportDistQuads.VariateFormDistQuads.VonMisesDistQuads.VonMisesFisherDistQuads.WalleniusNoncentralHypergeometricDistQuads.WeibullDistQuads.WishartDistQuads.ZeroMeanDiagNormalDistQuads.ZeroMeanDiagNormalCanonDistQuads.ZeroMeanFullNormalDistQuads.ZeroMeanFullNormalCanonDistQuads.ZeroMeanIsoNormalDistQuads.ZeroMeanIsoNormalCanonDistQuads._DistQuad_Normal_kernelDistQuads.binaryentropyDistQuads.canonformDistQuads.ccdfDistQuads.cdfDistQuads.cfDistQuads.cgfDistQuads.circvarDistQuads.componentDistQuads.componentsDistQuads.componentwise_logpdfDistQuads.componentwise_pdfDistQuads.concentrationDistQuads.corDistQuads.covDistQuads.cquantileDistQuads.cumulantDistQuads.dimDistQuads.distributionDistQuads.dofDistQuads.entropyDistQuads.estimateDistQuads.evalDistQuads.expected_logdetDistQuads.failprobDistQuads.fitDistQuads.fit_mapDistQuads.fit_map!DistQuads.fit_mleDistQuads.fit_mle!DistQuads.freecumulantDistQuads.gradlogpdfDistQuads.hasfinitesupportDistQuads.includeDistQuads.insupportDistQuads.invcovDistQuads.invlogccdfDistQuads.invlogcdfDistQuads.invscaleDistQuads.isboundedDistQuads.isleptokurticDistQuads.islowerboundedDistQuads.ismesokurticDistQuads.isplatykurticDistQuads.isprobvecDistQuads.isupperboundedDistQuads.kdeDistQuads.kurtosisDistQuads.locationDistQuads.location!DistQuads.logccdfDistQuads.logcdfDistQuads.logdetcovDistQuads.loglikelihoodDistQuads.logpdfDistQuads.logpdf!DistQuads.meanDistQuads.meandirDistQuads.meanformDistQuads.meanlogxDistQuads.medianDistQuads.mgfDistQuads.modeDistQuads.modesDistQuads.momentDistQuads.ncategoriesDistQuads.ncomponentsDistQuads.nodesDistQuads.nsamplesDistQuads.ntrialsDistQuads.paramsDistQuads.params!DistQuads.partypeDistQuads.pdfDistQuads.probsDistQuads.probvalDistQuads.qqbuildDistQuads.quantileDistQuads.rateDistQuads.sampleDistQuads.sample!DistQuads.samplerDistQuads.scaleDistQuads.scale!DistQuads.shapeDistQuads.skewnessDistQuads.spanDistQuads.sqmahalDistQuads.sqmahal!DistQuads.stdDistQuads.stdlogxDistQuads.succprobDistQuads.suffstatsDistQuads.supportDistQuads.test_distrDistQuads.test_samplesDistQuads.varDistQuads.varlogxDistQuads.weightsDistQuads.wsampleDistQuads.wsample!"
},

]}
