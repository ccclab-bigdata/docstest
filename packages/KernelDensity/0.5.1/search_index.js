var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#KernelDensity.jl-1",
    "page": "Readme",
    "title": "KernelDensity.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: KernelDensity)Kernel density estimators for Julia."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Univariate-1",
    "page": "Readme",
    "title": "Univariate",
    "category": "section",
    "text": "The main accessor function is kde:kde(data)will construct a UnivariateKDE object from the real vector data. The optional keyword arguments areboundary: the lower and upper limits of the kde as a tuple. Due to the fourier transforms used internally, there should be sufficient spacing to prevent wrap-around at the boundaries.\nnpoints: the number of interpolation points to use. The function uses fast Fourier transforms (FFTs) internally, so for optimal efficiency this should be a power of 2 (default = 2048).\nkernel: the distributional family from Distributions.jl to use as the kernel (default = Normal). To add your own kernel, extend the internal kernel_dist function.\nbandwidth: the bandwidth of the kernel. Default is to use Silverman\'s rule.A related functionkde_lscv(data)will construct a UnivariateKDE object, with the bandwidth selected by least-squares cross validation. It accepts the above keyword arguments, except bandwidth.There are also some slightly more advanced interfaces:kde(data, midpoints::R) where R<:AbstractRangeallows specifying the internal grid to use. Optional keyword arguments are kernel and bandwidth.kde(data, dist::Distribution)allows specifying the exact distribution to use as the kernel. Optional keyword arguments are boundary and npoints.kde(data, midpoints::R, dist::Distribution) where R<:AbstractRangeallows specifying both the distribution and grid."
},

{
    "location": "#Bivariate-1",
    "page": "Readme",
    "title": "Bivariate",
    "category": "section",
    "text": "The usage mirrors that of the univariate case, except that data is now either a tuple of vectorskde((xdata, ydata))or a matrix with two columnskde(datamatrix)Similarly, the optional arguments all now take tuple arguments: e.g. boundary now takes a tuple of tuples ((xlo,xhi),(ylo,yhi))."
},

{
    "location": "#Interpolation-1",
    "page": "Readme",
    "title": "Interpolation",
    "category": "section",
    "text": "The KDE objects are stored as gridded density values, with attached coordinates. These are typically sufficient for plotting (see below), but intermediate values can be interpolated using the Interpolations.jl package via the pdf method (extended from Distributions.jl).pdf(k::UnivariateKDE, x)\npdf(k::BivariateKDE, x, y)where x and y are real numbers or arrays.If you are making multiple calls to pdf, it will be more efficient to construct an intermediate InterpKDE to store the interpolation structure:ik = InterpKDE(k)\npdf(ik, x)InterpKDE will pass any extra arguments to interpolate."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "KernelDensity.AbstractKDEKernelDensity.BivariateDistributionKernelDensity.BivariateKDEKernelDensity.DataTypeOrUnionAllKernelDensity.InterpKDEKernelDensity.KernelDensityKernelDensity.LocationScaleKernelDensity.UniformWeightsKernelDensity.UnivariateKDEKernelDensity.WeightsKernelDensity.convKernelDensity.default_bandwidthKernelDensity.default_weightsKernelDensity.evalKernelDensity.includeKernelDensity.kdeKernelDensity.kde_boundaryKernelDensity.kde_lscvKernelDensity.kde_rangeKernelDensity.kernel_distKernelDensity.pdfKernelDensity.tabulate"
},

]}
