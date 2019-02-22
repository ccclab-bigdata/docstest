var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MCMCDiagnostics-1",
    "page": "Readme",
    "title": "MCMCDiagnostics",
    "category": "section",
    "text": "Markov Chain Monte Carlo convergence diagnostics in Julia.(Image: Lifecycle) (Image: Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package contains two very useful diagnostics for Markov Chain Monte Carlo:potential_scale_reduction(chains...), which estimates the potential scale reduction factor, also known as Rhat, for multiple scalar chains,\neffective_sample_size(chain), which calculates the effective sample size for scalar chains.These are intended as building blocks, to be used by other libraries, and were organized into a separate library for testing and DRY."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered. You can install it withPkg.add(\"MCMCDiagnostics\")"
},

{
    "location": "#Related-1",
    "page": "Readme",
    "title": "Related",
    "category": "section",
    "text": "You may find my other packages for MCMC interesting. See the documentation of DynamicHMC.jl for details."
},

{
    "location": "#Bibliography-1",
    "page": "Readme",
    "title": "Bibliography",
    "category": "section",
    "text": "Gelman, A., & Rubin, D. B. (1992). Inference from iterative simulation using multiple sequences. Statistical science, 457-472.Gelman, A., Carlin, J. B., Stern, H. S., & Rubin, D. B. (2013). Bayesian data analysis (3rd edition). Chapman & Hall/CRC.Stan Development Team. (2017). Stan Modeling Language Users Guide and Reference Manual, Version 2.15.0. http://mc-stan.org"
},

{
    "location": "autodocs/#MCMCDiagnostics.autocorrelation",
    "page": "Docstrings",
    "title": "MCMCDiagnostics.autocorrelation",
    "category": "function",
    "text": "autocorrelation(x, k, v = var(x))\n\nEstimate of lag-k autocorrelation of x from a variogram. v is the variance of x, used when supplied.\n\nSee Gelman et al (2013), section 11.4.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MCMCDiagnostics.effective_sample_size",
    "page": "Docstrings",
    "title": "MCMCDiagnostics.effective_sample_size",
    "category": "function",
    "text": "effective_sample_size(x, v = var(x))\n\nEffective sample size of vector x.\n\nEstimated from autocorrelations. See Gelman et al (2013), section 11.4.\n\nWhen the variance v is supplied, it saves some calculation time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MCMCDiagnostics.ess_factor_estimate",
    "page": "Docstrings",
    "title": "MCMCDiagnostics.ess_factor_estimate",
    "category": "function",
    "text": "ess_factor_estimate(x, v = var(x))\n\nEstimate for effective sample size factor.\n\nReturn τ, K where τ is estimated effective sample size / sample size, and K is the last lag used for autocorrelation estimation.\n\nNotes\n\nSee Gelman et al (2013), section 11.4.\n\nτ is capped at 1, this is relevant when the sample has large negative autocorrelation (happens with HMC/NUTS).\n\nSome implementations (eg Stan) use FFT for autocorrelations, which yields the whole spectrum. In practice, a <50-100 lags are usually sufficient for reasonable samplers, so the “naive” version may be more efficient.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MCMCDiagnostics.potential_scale_reduction",
    "page": "Docstrings",
    "title": "MCMCDiagnostics.potential_scale_reduction",
    "category": "function",
    "text": "potential_scale_reduction(chains...)\n\nPotential scale reduction factor (for possibly ragged chains).\n\nAlso known as R̂. Always ≥ 1 by construction, but values much larger than 1 (say 1.05) indicate poor mixing.\n\nUses formula from Stan Development Team (2017), section 28.3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MCMCDiagnostics.MCMCDiagnosticsMCMCDiagnostics.autocorrelationMCMCDiagnostics.effective_sample_sizeMCMCDiagnostics.ess_factor_estimateMCMCDiagnostics.evalMCMCDiagnostics.includeMCMCDiagnostics.potential_scale_reduction"
},

]}
