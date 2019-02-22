var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)(Image: Build status)"
},

{
    "location": "#MathPhysicalConstants-1",
    "page": "Readme",
    "title": "MathPhysicalConstants",
    "category": "section",
    "text": "MathPhysicalConstants is a Julia package which has the values of a range of mathematical and physical constants updated with most recent available dataset from BIPM in 2018. Currently MKS and CGS units and International System of Units SI are supported."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package can be installed directly from its github repository:Pkg.clone(\"https://github.com/LaGuer/MathPhysicalConstants.jl\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Usage is pretty straightforward. Start off by loading the package.julia> using MathPhysicalConstantsQuery and retrieve the Planck Constant using the most updated International System of Units (SI)    julia> MathPhysicalConstants.SI.PlanckConstantH\n6.62607015e-34\n\njulia> big(MathPhysicalConstants.SI.PlanckConstantH)\n6.62606895999999960651234296395253273824527450725424150396117674176417443843193e-34Now let\'s have a look at ƛe ≡ ħ/m_e.c the reduced electron radius formula. Try it with BigFloat and Measurementjulia> big(MathPhysicalConstants.SI.PlanckConstantH)/(big(MathPhysicalConstants.SI.MassElectron)*big(MathPhysicalConstants.SI.SpeedOfLight))\n2.42631027637202010003687587191357482878156204816578736228540160944126721996979e-12Let\'s switch to Earth\'s gravitational acceleration in MKS units.julia> PhysicalConstants.MKS.GravAccel\n9.80665Or in CGS units.julia> MathPhysicalConstants.CGS.GravAccel\n980.665last but not least in International System of Units (SI)julia> MathPhysicalConstants.SI.GravAccel\n9.80665"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MathPhysicalConstants.CGSMathPhysicalConstants.MKSMathPhysicalConstants.MathPhysicalConstantsMathPhysicalConstants.SIMathPhysicalConstants.evalMathPhysicalConstants.include"
},

]}
