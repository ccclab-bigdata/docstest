var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#SpectralGaussianSimulation.jl-1",
    "page": "Readme",
    "title": "SpectralGaussianSimulation.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][codecov-img]][codecov-url]This package provides an implementation of spectral Gaussian simulation as described in Gutjahr 1997. In this method, the covariance function is perturbed in the frequency domain after a fast Fourier transform. White noise is added to the phase of the spectrum, and a realization is produced by an inverse Fourier transform.The method is limited to simulations on regular grids, and care must be taken to make sure that the correlation length is small enough compared to the grid size. As a general rule of thumb, avoid correlation lengths greater than 1/3 of the grid. The method is extremely fast, and can be used to generate large 3D realizations."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:] add SpectralGaussianSimulation"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This package is part of the GeoStats.jl framework.For a simple example of usage, please check this notebook."
},

{
    "location": "#Asking-for-help-1",
    "page": "Readme",
    "title": "Asking for help",
    "category": "section",
    "text": "If you have any questions, please open an issue.[travis-img]: https://travis-ci.org/juliohm/SpectralGaussianSimulation.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/SpectralGaussianSimulation.jl[codecov-img]: https://codecov.io/gh/juliohm/SpectralGaussianSimulation.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/SpectralGaussianSimulation.jl"
},

{
    "location": "autodocs/#SpectralGaussianSimulation.SpecGaussSim",
    "page": "Docstrings",
    "title": "SpectralGaussianSimulation.SpecGaussSim",
    "category": "type",
    "text": "SpecGaussSim(var₁=>param₁, var₂=>param₂, ...)\n\nSpectral Gaussian simulation (a.k.a. FFT simulation).\n\nParameters\n\nvariogram - theoretical variogram (default to GaussianVariogram())\nmean      - mean of Gaussian field (default to 0)\n\nGlobal parameters\n\nthreads - number of threads in FFT (default to all physical cores)\n\nReferences\n\nGutjahr 1997. General joint conditional simulations using a fast Fourier transform method.\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SpectralGaussianSimulation.SpecGaussSimParam",
    "page": "Docstrings",
    "title": "SpectralGaussianSimulation.SpecGaussSimParam",
    "category": "type",
    "text": "SpecGaussSim(var₁=>param₁, var₂=>param₂, ...)\n\nSpectral Gaussian simulation (a.k.a. FFT simulation).\n\nParameters\n\nvariogram - theoretical variogram (default to GaussianVariogram())\nmean      - mean of Gaussian field (default to 0)\n\nGlobal parameters\n\nthreads - number of threads in FFT (default to all physical cores)\n\nReferences\n\nGutjahr 1997. General joint conditional simulations using a fast Fourier transform method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SpectralGaussianSimulation.@pack_SpecGaussSimParamSpectralGaussianSimulation.@pack_SpecGaussSimParam!SpectralGaussianSimulation.@unpack_SpecGaussSimParamSpectralGaussianSimulation.SpecGaussSimSpectralGaussianSimulation.SpecGaussSimParamSpectralGaussianSimulation.SpectralGaussianSimulationSpectralGaussianSimulation.evalSpectralGaussianSimulation.include"
},

]}