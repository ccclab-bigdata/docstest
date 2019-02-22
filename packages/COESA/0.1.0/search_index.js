var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#COESA-1",
    "page": "Readme",
    "title": "COESA",
    "category": "section",
    "text": "Build Status Code Coverage\n(Image: Build Status) (Image: Build status) (Image: codecov.io)The U.S. Committee on Extension to the Standard Atmosphere (COESA) atmosphere model, also known as the U.S. Standard Atmosphere, 1976."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The main function is atmosphere(z), which returns the atmospheric state at geometric altitude z, where z has units of m.The atmospheric state object that is returned has the following accessors:density, which returns the density in units of kg/m²\npressure, which returns the pressure in units of Pa\ntemperature, which returns the temperature in units of K\nspeed_of_sound, which returns the speed of sound in units of m/s\nmean_molecular_weight, which returns the mean molecular weight in units of kg/kmolusing COESA\natmos = atmosphere(123.0)\nrho = density(atmos)\nT = temperature(atmos)\nP = pressure(atmos)\nc = speed_of_sound(atmos)\nM = mean_molecular_weight(atmos)"
},

{
    "location": "#Implementation-1",
    "page": "Readme",
    "title": "Implementation",
    "category": "section",
    "text": "For altitudes below 86km, the equations from the original report are used.  The published tables have a discontinuity in the mean molecular weight and temperature at 86km.  The report outlines how to blend out the discontinuity. We implement this blending here.  In this region, the model output matches the published tables nearly perfectly.  Only a few of the tested altitudes show differences.  It is only in the pressure values, and in these cases we only miss the least significant digit.For the region above 86km, the temperature is computed using the equations from the original report, but the equations for the mean molecular weight and pressure are much more complex.  Instead, we adapt the method from Regan\'s Re-Entry Vehicle Dynamics to interpolate the tabulated mean molecular weight and pressure.  We use a quadratic interpolation on the mean molecular weight and the natural log of the pressure.  Because we are using interpolation, the computed pressure and density occasionally don\'t match the published values. The values are very small, and we still have at least 2 significant digits.The density is computed as outlined by the original report.The speed of sound is computed as outlined by the original report for altitudes below 86km.  For altitudes above 86km, the speed of sound at 86km is used."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "U.S. Standard Atmosphere, 1976. Stock No. 003-017-00323-0.http://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19770009539.pdf.Regan, F.J., Re-Entry Vehicle Dynamics, AIAA Press, New York, 1984."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "COESA.COESACOESA.HbCOESA.LmbCOESA.M0COESA.MratiotableCOESA.MtableupperCOESA.PbCOESA.PtableupperCOESA.RstarCOESA.StateCOESA.TmCOESA.TmbCOESA.ZtableCOESA.ZtableupperCOESA.atmosphereCOESA.check_altitudeCOESA.densityCOESA.evalCOESA.findbCOESA.g0COESA.geopotential_altitudeCOESA.includeCOESA.interpolation_indexCOESA.interpolation_scale_factorsCOESA.logPtableupperCOESA.mean_molecular_weightCOESA.mean_molecular_weight_lowerCOESA.mean_molecular_weight_ratio_lowerCOESA.mean_molecular_weight_upperCOESA.pressureCOESA.pressure_lowerCOESA.pressure_upperCOESA.r0COESA.speed_of_soundCOESA.speed_of_sound_86kmCOESA.speed_of_sound_lowerCOESA.temperatureCOESA.temperature_lowerCOESA.temperature_upperCOESA.γ"
},

]}
