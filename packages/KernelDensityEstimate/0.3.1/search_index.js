var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#KernelDensityEstimate.jl-1",
    "page": "Readme",
    "title": "KernelDensityEstimate.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)(Image: KernelDensityEstimate) (Image: KernelDensityEstimate) (Image: KernelDensityEstimate)Kernel Density Estimation with product approximation using multiscale Gibbs sampling.All code is implemented in native Julia, including plotting which uses Gadfly. The main focus of this module is the ability to take the product between multiple KDEs, and makes this module unique from other KDE implementations. This package also supports n-dimensional KDEs. Please see examples below for details. The implementation is already fairly optimized from a symbolic standpoint and is based on work by:Sudderth, Erik B.; Ihler, Alexander, et al. \"Nonparametric belief propagation.\" Communications of the ACM 53.10 (2010): 95-103.The package has built in plotting functionality, using Gadfly. This package is heavily used by IncrementalInference. Comments welcome."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"KernelDensityEstimate\")Newest stuff:Pkg.checkout(\"KernelDensityEstimate\")"
},

{
    "location": "#Plotting-Functions-1",
    "page": "Readme",
    "title": "Plotting Functions",
    "category": "section",
    "text": "The plotting fucntions for this library have been separated into KernelDensityEstimatePlotting.jl."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Bring the module into the workspaceusing KernelDensityEstimate\n# Basic one dimensional examples\n# using leave-one-out likelihood cross validation for bandwidth estimation\np100 = kde!([randn(50);10.0+2*randn(50)])\np2 = kde!([0.0;10.0],[1.0]) # multibandwidth still to be added\np75 = resample(p2,75)\n\n# bring in the plotting functions\nusing KernelDensityEstimatePlotting\nplot([p100;p2;p75],c=[\"red\";\"green\";\"blue\"]) # using Gadfly under the hood(Image: alt tag)Multidimensional examplepd2 = kde!(randn(3,100));\n@time pd2 = kde!(randn(3,100)); # defaults to loocv\npm12 = marginal(pd2,[1;2]);\npm2 = marginal(pm12,[2]);\nplot(pm2);Multiscale Gibbs product approximation examplep = kde!(randn(2,100))\nq = kde!(2.0+randn(2,100))\ndummy = kde!(rand(2,100),[1.0]);\nmcmciters = 5\npGM, = prodAppxMSGibbsS(dummy, [p;q], Union{}, Union{}, mcmciters)\npq = kde!(pGM)\npq1 = marginal(pq,[1])\nPl1 = plot([marginal(p,[1]);marginal(q,[1]);marginal(pq,[1])],c=[\"red\";\"green\";\"black\"])Direct histogram of points from the productusing Gadfly\nPl2 = Gadfly.plot(x=pGM[1,:],y=pGM[2,:],Geom.histogram2d);\ndraw(PDF(\"product.pdf\",15cm,8cm),hstack(Pl1,Pl2))(Image: alt tag)KDE product between non-gaussian distributionsusing Distributions\np = kde!(rand(Beta(1.0,0.45),300));\nq = kde!(rand(Rayleigh(0.5),100)-0.5);\ndummy = kde!(rand(1,100),[1.0]);\npGM, = prodAppxMSGibbsS(dummy, [p;q], Union{}, Union{}, 5)\npq = kde!(pGM)\nplot([p;q;pq],c=[\"red\";\"green\";\"black\"])(Image: alt tag)Draw multidimensional distributions as marginalized 2D contour plotsaxis=[[-5.0;5]\';[-2.0;2.0]\';[-10.0;10]\';[-5.0;5]\']\ndraw(PDF(\"test.pdf\",30cm,20cm),\n plot( kde!(randn(4,200)) ) )\n\nN=200;\npts = [2*randn(1,N)+3;\n [2*randn(1,round(Int,N/2))\'+3.0;2*randn(1,round(Int,N/2))\'-3.0]\';\n 2*randn(2,N)+3];\np, q = kde!(randn(4,100)), kde!(pts);\ndraw(PNG(\"MultidimPlot.png\",15cm,10cm),\n plot( [p*q;p;q],c=[\"red\";\"black\";\"blue\"], axis=axis, dims=2:4,dimLbls=[\"w\";\"x\";\"y\";\"z\"], levels=4) )(Image: alt tag)# or draw product natively\ndraw(PNG(\"MultidimPlotProd.png\",10cm,7cm),\n plot( p*q, axis=axis, dims=[2;4],dimLbls=[\"w\";\"x\";\"y\";\"z\"]) )(Image: alt tag)"
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "The original C++ kde package was written by Alex Ihler and Mike Mandel in 2003, and has be rewritten in Julia and continuously modified by Dehann Fourie since.  Thank you to contributors and users alike, comments and improvements welcome according to JuliaLang and JuliaRobotics standards."
},

]}
