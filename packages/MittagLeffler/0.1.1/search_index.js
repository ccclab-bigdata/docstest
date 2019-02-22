var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MittagLeffler-1",
    "page": "Readme",
    "title": "MittagLeffler",
    "category": "section",
    "text": "Mittag-Leffler function,(Image: Build Status) &nbsp; Windows: (Image: Build Status) &nbsp; &nbsp; &nbsp; (Image: Coverage Status) (Image: codecov.io)mittlefferr(α,β,z,ρ)   # evaluate Mittag-Leffler function with tolerance ρ\nmittlefferr(α,z,ρ)     # mittlefferr(α,1,z,ρ)\n\nmittleff(α,β,z)   # evaluate Mittag-Leffler function with tolerance eps()\nmittleff(α,z)     # mittleff(α,1,z)Arguments must satisfy α > 0, β real, z real or complex, ρ>0.For α<1 and/or abs(z)<1, accurate, series-only method are used. The series-only methods work with BigFloat precision for corresponding input types. Some other parameter ranges also use series or asymptotic methods.For some arguments, integrals are evaluated with quadgk, with no control on errors. Some results are accurate, others are not.mittleffderiv(α,β,z)   # evaluate derivative of Mittag-Leffler function\nmittleffderiv(α,z)     # mittleffderiv(α,1,z)"
},

{
    "location": "#Bugs-1",
    "page": "Readme",
    "title": "Bugs",
    "category": "section",
    "text": "mittleff fails for some arguments. In particular, some of those that evaluate integrals."
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "Rudolfo Gorenflo, Joulia Loutchko and Yuri Loutchko, Computation of the Mittag-Leffler function and its derivative,  Fract. Calc. Appl. Anal, (2002)"
},

{
    "location": "autodocs/#MittagLeffler.mittleff",
    "page": "Docstrings",
    "title": "MittagLeffler.mittleff",
    "category": "function",
    "text": "mittleff(α,β,z)\n\nCompute the Mittag-Leffler function at z for parameters α,β.\n\n\n\n\n\nmittleff(α,z)\n\nCompute mittleff(α,1,z).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MittagLeffler.mittleffderiv",
    "page": "Docstrings",
    "title": "MittagLeffler.mittleffderiv",
    "category": "function",
    "text": "mittleffderiv(α,β,z)\n\nCompute the derivative of the Mittag-Leffler function at z for parameters α,β.\n\n\n\n\n\nmittleffderiv(α,z)\n\nCompute mittleffderiv(α,1,z)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MittagLeffler.mittlefferr",
    "page": "Docstrings",
    "title": "MittagLeffler.mittlefferr",
    "category": "function",
    "text": "mittlefferr(α,z,ρ)\n\nCompute mittlefferr(α,1,z,ρ).\n\n\n\n\n\nmittlefferr(α,β,z,ρ)\n\nCompute the Mittag-Leffler function at z for parameters α,β with accuracy ρ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MittagLeffler.@brMittagLeffler.KMittagLeffler.KintMittagLeffler.MittagLefflerMittagLeffler.PMittagLeffler.PintMittagLeffler._mittleffMittagLeffler._mittlefferrMittagLeffler.choosesumMittagLeffler.evalMittagLeffler.includeMittagLeffler.mittleffMittagLeffler.mittleffderivMittagLeffler.mittlefferrMittagLeffler.mittleffintsMittagLeffler.mittleffsumMittagLeffler.mittleffsum2MittagLeffler.mpowMittagLeffler.myepsMittagLeffler.ourquadgkMittagLeffler.sum2MittagLeffler.sum2_negMittagLeffler.sum2_pos"
},

]}
