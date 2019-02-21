var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Analysis-of-Variance-in-Julia-1",
    "page": "Readme",
    "title": "Analysis of Variance in Julia",
    "category": "section",
    "text": "(Image: Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.) (Image: Build Status) (Image: Coverage Status)Calculate ANOVA tables for linear models. If no anovatype argument is provided, a type II ANOVA will be calculated. Type I and II are also supported for compatibility. Support for mixed models and a more convenient way to create ANOVAs (similar to the ez package in R) is planned.Important: Make sure to use EffectsCoding on all your predictors, or results won\'t be meaningful.Minimal Example:using ANOVA\nusing GLM\nusing RDatasets\n\ndata = dataset(\"datasets\", \"ToothGrowth\")\ndata[:Dose] = categorical(data[:Dose])\n\nmodel = fit(LinearModel,\n            @formula(Len ~  Supp + Dose), \n            data, \n            contrasts = Dict(:Supp => EffectsCoding(),:Dose => EffectsCoding()))\nanova(model)\n ```\n Output\n ```\nANOVA table for linear model\n3×6 DataFrames.DataFrame\n│ Row │ Source    │ DF   │ SS      │ MSS     │ F       │ p           │\n├─────┼───────────┼──────┼─────────┼─────────┼─────────┼─────────────┤\n│ 1   │ Supp      │ 1.0  │ 205.35  │ 205.35  │ 14.0166 │ 0.000429279 │\n│ 2   │ Dose      │ 2.0  │ 2426.43 │ 1213.22 │ 82.8109 │ 1.87116e-17 │\n│ 3   │ Residuals │ 56.0 │ 820.425 │ 14.6504 │ -1.0    │ -1.0        │"
},

{
    "location": "autodocs/#ANOVA.anova",
    "page": "Docstrings",
    "title": "ANOVA.anova",
    "category": "function",
    "text": "anova(mod, mf, mm[, anovatype = 3])\n\nCompute an ANOVA table for the given linear model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "ANOVA.ANOVAANOVA.AnovaDataFrameRegressionModelANOVA.AnovaObjectANOVA.AnovaOptionsANOVA.anovaANOVA.droptermbymaskANOVA.effectsANOVA.evalANOVA.includeANOVA.merge_bool_array"
},

]}
