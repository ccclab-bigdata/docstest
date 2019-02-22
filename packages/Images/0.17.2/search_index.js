var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Images.jl-1",
    "page": "Readme",
    "title": "Images.jl",
    "category": "section",
    "text": "An image processing library for Julia."
},

{
    "location": "#Project-Status-1",
    "page": "Readme",
    "title": "Project Status",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov) (Image: Join the chat at https://gitter.im/JuliaImages/Images.jl)"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Full documentation is found at JuliaImages."
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "Elements of this package descend from \"image.jl\" that once lived in Julia\'s extras/ directory. That file had several authors, of which the primary were Jeff Bezanson, Stefan Kroboth, Tim Holy, Mike Nolta, and Stefan Karpinski. This repository has been quite heavily reworked; the current package maintainer is Tim Holy, and important contributions have been made by Ron Rock, Anchit Navelkar, Kevin Squire, Lucas Beyer, Tony Kelman, Isaiah Norton, Elliot Saba, Cody Greer, Daniel Perry, Waldir Pimenta, Tobias Knopp, Jason Merrill, Sean Garborg, romainFr, Dahua Lin, and several others."
},

{
    "location": "autodocs/#Images.BlobLoG",
    "page": "Docstrings",
    "title": "Images.BlobLoG",
    "category": "type",
    "text": "BlobLoG stores information about the location of peaks as discovered by blob_LoG. It has fields:\n\nlocation: the location of a peak in the filtered image (a CartesianIndex)\nσ: the value of σ which lead to the largest -LoG-filtered amplitude at this location\namplitude: the value of the -LoG(σ)-filtered image at the peak\n\nNote that the radius is equal to σ√2.\n\nSee also: blob_LoG.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.ColorizedArray",
    "page": "Docstrings",
    "title": "Images.ColorizedArray",
    "category": "type",
    "text": "ColorizedArray(intensity, label::IndirectArray) -> A\n\nCreate an array, combining a label array (where each pixel is assigned one of a list of discrete colors) and an intensity array (where each pixel has a scalar value). A satisfies\n\nA[i,j,...] = intensity[i,j,...] * label[i,j,...]\n\nThe label array \"tinges\" the grayscale intensity with the color associated with that point\'s label.\n\nThis computation is performed lazily, as to be suitable even for large arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.HomogeneousPoint",
    "page": "Docstrings",
    "title": "Images.HomogeneousPoint",
    "category": "type",
    "text": "HomogeneousPoint(x::NTuple{N, T})\n\nIn projective geometry homogeneous coordinates are the natural coordinates for describing points and lines.\n\nFor instance, the homogeneous coordinates for a planar point are a triplet of real numbers (u v w), with w neq 0. This triple can be associated with a point P = (xy) in Cartesian coordinates, where x = fracuw and y = fracvw (more details).\n\nIn particular, the HomogeneousPoint((10.0,5.0,1.0)) is the standardised projective representation of the Cartesian point (10.0,5.0).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.Images",
    "page": "Docstrings",
    "title": "Images.Images",
    "category": "module",
    "text": "Constructors, conversions, and traits:\n\n- Construction: use constructors of specialized packages, e.g., `AxisArray`, `ImageMeta`, etc.\n- \"Conversion\": `colorview`, `channelview`, `rawview`, `normedview`, `permuteddimsview`\n- Traits: `pixelspacing`, `sdims`, `timeaxis`, `timedim`, `spacedirections`\n\nContrast/coloration:\n\n- `clamp01`, `clamp01nan`, `scaleminmax`, `colorsigned`, `scalesigned`\n\nAlgorithms:\n\n- Reductions: `maxfinite`, `maxabsfinite`, `minfinite`, `meanfinite`, `sad`, `ssd`, `integral_image`, `boxdiff`, `gaussian_pyramid`\n- Resizing: `restrict`, `imresize` (not yet exported)\n- Filtering: `imfilter`, `imfilter!`, `mapwindow`, `imROF`, `padarray`\n- Filtering kernels: `Kernel.` or `KernelFactors.`, followed by `ando[345]`, `guassian2d`, `imaverage`, `imdog`, `imlaplacian`, `prewitt`, `sobel`\n- Exposure : `imhist`, `histeq`, `adjust_gamma`, `histmatch`, `imadjustintensity`, `imstretch`, `imcomplement`, `clahe`, `cliphist`\n- Gradients: `backdiffx`, `backdiffy`, `forwarddiffx`, `forwarddiffy`, `imgradients`\n- Edge detection: `imedge`, `imgradients`, `thin_edges`, `magnitude`, `phase`, `magnitudephase`, `orientation`, `canny`\n- Corner detection: `imcorner`,`imcorner_subpixel`, `harris`, `shi_tomasi`, `kitchen_rosenfeld`, `meancovs`, `gammacovs`, `fastcorners`\n- Blob detection: `blob_LoG`, `findlocalmaxima`, `findlocalminima`\n- Morphological operations: `dilate`, `erode`, `closing`, `opening`, `tophat`, `bothat`, `morphogradient`, `morpholaplace`, `feature_transform`, `distance_transform`, `convexhull`\n- Connected components: `label_components`, `component_boxes`, `component_lengths`, `component_indices`, `component_subscripts`, `component_centroids`\n- Interpolation: `bilinear_interpolation`\n\nTest images and phantoms (see also TestImages.jl):\n\n- `shepp_logan`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.Percentile",
    "page": "Docstrings",
    "title": "Images.Percentile",
    "category": "type",
    "text": "Percentile(x)\n\nIndicate that x should be interpreted as a percentile rather than an absolute value. For example,\n\ncanny(img, 1.4, (80, 20)) uses absolute thresholds on the edge magnitude image\ncanny(img, 1.4, (Percentile(80), Percentile(20))) uses percentiles of the edge magnitude image as threshold\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.adjust_gamma",
    "page": "Docstrings",
    "title": "Images.adjust_gamma",
    "category": "function",
    "text": "gamma_corrected_img = adjust_gamma(img, gamma)\n\nReturns a gamma corrected image.\n\nDetails\n\nGamma correction is a non-linear  transformation given by the relation\n\nf(x) = x^gamma quad textfor  x in mathbbR gamma  0\n\nIt is called a power law transformation because one quantity varies as a power of another quantity.\n\nGamma correction has historically been used to preprocess an image to compensate for the fact that the intensity of light generated by a physical device is not usually a linear function of the applied signal but instead follows a power law [1]. For example, for many Cathode Ray Tubes (CRTs) the emitted light intensity on the display is approximately equal to the voltage raised to the power of γ, where γ ∈ [1.8, 2.8]. Hence preprocessing a raw image with an exponent of 1/γ  would have ensured a linear response to brightness.\n\nResearch in psychophysics has also established an empirical  power law   between light intensity and perceptual brightness. Hence, gamma correction often serves as a useful image enhancement tool.\n\nOptions\n\nVarious options for the parameters of this function are described in more detail below.\n\nChoices for img\n\nThe adjust_gamma function can handle a variety of input types. The returned image depends on the input type. If the input is an Image then the resulting image is of the same type and has the same properties.\n\nFor coloured images, the input is converted to YIQ type and the Y channel is gamma corrected. This is the combined with the I and Q channels and the resulting image converted to the same type as the input.\n\nChoice for gamma\n\nThe gamma value must be a non-zero positive number.\n\nExample\n\nusing Images, ImageView\n\n# Create an example image consisting of a linear ramp of intensities.\nn = 32\nintensities = 0.0:(1.0/n):1.0\nimg = repeat(intensities, inner=(20,20))\'\n\n# Brighten the dark tones.\nimgadj = adjust_gamma(img,1/2)\n\n# Display the original and adjusted image.\nimshow(img)\nimshow(imgadj)\n\nReferences\n\nW. Burger and M. J. Burge. Digital Image Processing. Texts in Computer Science, 2016. doi:10.1007/978-1-4471-6684-9\n\nSee also: histmatch,clahe, and imhist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.adjust_histogram",
    "page": "Docstrings",
    "title": "Images.adjust_histogram",
    "category": "function",
    "text": "adjust_histogram(Equalization(),img, nbins)\nadjust_histogram(Equalization(),img, nbins, minval, maxval)\n\nReturns a histogram equalised image with a granularity of nbins number of bins.\n\nDetails\n\nHistogram equalisation was initially conceived to  improve the contrast in a single-channel grayscale image. The method transforms the distribution of the intensities in an image so that they are as uniform as possible [1]. The natural justification for uniformity is that the image has better contrast  if the intensity levels of an image span a wide range on the intensity scale. As it turns out, the necessary transformation is a mapping based on the cumulative histogram.\n\nOne can consider an L-bit single-channel I times J image with gray values in the set 01ldotsL-1 , as a collection of independent and identically distributed random variables. Specifically, let the sample space Omega be the set of all IJ-tuples omega =(omega_11omega_12ldotsomega_1Jomega_21omega_22ldotsomega_2Jomega_I1omega_I2ldotsomega_IJ), where each omega_ij in 01ldots L-1 . Furthermore, impose a probability measure on Omega such that the functions Omega ni omega to omega_ij in 01ldotsL-1 are independent and identically distributed.\n\nOne can then regard an image as a matrix of random variables mathbfG = G_ij(omega), where each function G_ij Omega to mathbbR is defined by\n\nG_ij(omega) = fracomega_ijL-1\n\nand each G_ij is distributed according to some unknown density f_G. While f_G is unknown, one can approximate it with a normalised histogram of gray levels,\n\nhatf_G(v)= fracn_vIJ\n\nwhere\n\nn_v = left  left(ij)   G_ij(omega)  = v right  right \n\nrepresents the number of times a gray level with intensity v occurs in mathbfG. To transforming the distribution of the intensities so that they are as uniform as possible one needs to find a mapping T(cdot) such that T(G_ij) thicksim U. The required mapping turns out to be the cumulative distribution function (CDF) of the empirical density hatf_G,\n\n T(G_ij) = int_0^G_ijhatf_G(w)mathrmd w\n\nOptions\n\nVarious options for the parameters of this function are described in more detail below.\n\nChoices for img\n\nThe adjust_histogram(Equalization(),...) function can handle a variety of input types.  The type of the returned image matches the input type.\n\nFor coloured images, the input is converted to YIQ type and the Y channel is equalised. This is the combined with the I and Q channels and the resulting image converted to the same type as the input.\n\nChoices for nbins\n\nYou can specify the total number of bins in the histogram.\n\nChoices for minval and maxval\n\nIf minval and maxval are specified then intensities are equalized to the range [minval, maxval]. The default values are 0 and 1.\n\nExample\n\n\nusing TestImages, FileIO, ImageView\n\nimg =  testimage(\"mandril_gray\");\nimgeq = adjust_histogram(Equalization(),img,256,0,1);\n\nimshow(img)\nimshow(imgeq)\n\nReferences\n\nR. C. Gonzalez and R. E. Woods. Digital Image Processing (3rd Edition).  Upper Saddle River, NJ, USA: Prentice-Hall,  2006.\n\nSee also:\n\nHistogram Equalization Histogram Matching Histogram Construction\nadjust_histogram! adjust_histogram build_histogram\n adjust_histogram! \n\n\n\n\n\nadjust_histogram(Matching(),img, targetimg, nbins)\nadjust_histogram(Matching(),img, targetimg, edges)\n\nReturns a histogram matched image with a granularity of nbins number of bins. The first argument img is the image to be matched, and the second argument targetimg is the image having the desired histogram to be matched to.\n\nDetails\n\nThe purpose of histogram matching is to transform the intensities in a source image so that the intensities distribute according to the histogram of a specified target image. If one interprets histograms as piecewise-constant models of probability density functions (see build_histogram), then the histogram matching task can be modelled as the problem of transforming one probability distribution into another [1]. It turns out that the solution to this transformation problem involves the cumulative and inverse cumulative distribution functions of the source and target probability density functions.\n\nIn particular, let the random variables x thicksim p_x and z thicksim p_z  represent an intensity in the source and target image respectively, and let\n\n S(x) = int_0^xp_x(w)mathrmd w quad textand quad\n T(z) = int_0^zp_z(w)mathrmd w\n\nrepresent their concomitant cumulative disitribution functions. Then the sought-after mapping Q(cdot) such that Q(x) thicksim p_z is given by\n\nQ(x) =  T^-1left( S(x) right)\n\nwhere T^-1(y) = operatornamemin  x in mathbbR  y leq T(x)  is the inverse cumulative distribution function of T(x).\n\nThe mapping suggests that one can conceptualise histogram matching as performing histogram equalisation on the source and target image and relating the two equalised histograms. Refer to adjust_histogram for more details on histogram equalisation.\n\nOptions\n\nVarious options for the parameters of this function are described in more detail below.\n\nChoices for img and targetimg\n\nThe adjust_histogram(Matching(),...) function can handle a variety of input types. The type of the returned image matches the input type.\n\nFor colored images, the inputs are converted to YIQ  type and the distributions of the Y channels are matched. The modified Y channel is then combined with the I and Q channels and the resulting image converted to the same type as the input.\n\nChoices for nbins\n\nYou can specify the total number of bins in the histogram. If you do not specify the number of bins then a default value of 256 bins is utilised.\n\nChoices for edges\n\nIf you do not designate the number of bins, then you have the option to directly stipulate how the intervals will be divided by specifying a range type.\n\nExample\n\nusing Images, TestImages, ImageView\n\nimg_source = testimage(\"mandril_gray\")\nimg_target = adjust_gamma(img_source,1/2)\nimg_transformed = adjust_histogram(Matching(),img_source, img_target)\n#=\n    A visual inspection confirms that img_transformed resembles img_target\n    much more closely than img_source.\n=#\nimshow(img_source)\nimshow(img_target)\nimshow(img_transformed)\n\nReferences\n\nW. Burger and M. J. Burge. Digital Image Processing. Texts in Computer Science, 2016. doi:10.1007/978-1-4471-6684-9\n\nSee also:\n\nHistogram Equalization Histogram Matching Histogram Construction\nadjust_histogram adjust_histogram! build_histogram\nadjust_histogram!  \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.adjust_histogram!",
    "page": "Docstrings",
    "title": "Images.adjust_histogram!",
    "category": "function",
    "text": "adjust_histogram!(Equalization(),img, nbins)\nadjust_histogram!(Equalization(),img, nbins, minval, maxval)\n\nSame as adjust_histogram except that it modifies the image that was passed as an argument.\n\n\n\n\n\nadjust_histogram!(Matching(),img, targetimg, nbins)\nadjust_histogram!(Matching(),img, targetimg, edges)\n\nSame as  adjust_histogram  except that it modifies the image that was passed as an argument.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.bilinear_interpolation",
    "page": "Docstrings",
    "title": "Images.bilinear_interpolation",
    "category": "function",
    "text": "P = bilinear_interpolation(img, r, c)\n\nBilinear Interpolation is used to interpolate functions of two variables on a rectilinear 2D grid.\n\nThe interpolation is done in one direction first and then the values obtained are used to do the interpolation in the second direction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.blob_LoG",
    "page": "Docstrings",
    "title": "Images.blob_LoG",
    "category": "function",
    "text": "blob_LoG(img, σscales, [edges], [σshape]) -> Vector{BlobLoG}\n\nFind \"blobs\" in an N-D image using the negative Lapacian of Gaussians with the specifed vector or tuple of σ values. The algorithm searches for places where the filtered image (for a particular σ) is at a peak compared to all spatially- and σ-adjacent voxels, where σ is σscales[i] * σshape for some i. By default, σshape is an ntuple of 1s.\n\nThe optional edges argument controls whether peaks on the edges are included. edges can be true or false, or a N+1-tuple in which the first entry controls whether edge-σ values are eligible to serve as peaks, and the remaining N entries control each of the N dimensions of img.\n\nCitation:\n\nLindeberg T (1998), \"Feature Detection with Automatic Scale Selection\", International Journal of Computer Vision, 30(2), 79–116.\n\nSee also: BlobLoG.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.blue",
    "page": "Docstrings",
    "title": "ColorTypes.blue",
    "category": "function",
    "text": "b = blue(img) extracts the blue channel from an RGB image img\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.boxdiff",
    "page": "Docstrings",
    "title": "Images.boxdiff",
    "category": "function",
    "text": "sum = boxdiff(integral_image, ytop:ybot, xtop:xbot)\nsum = boxdiff(integral_image, CartesianIndex(tl_y, tl_x), CartesianIndex(br_y, br_x))\nsum = boxdiff(integral_image, tl_y, tl_x, br_y, br_x)\n\nAn integral image is a data structure which helps in efficient calculation of sum of pixels in a rectangular subset of an image. It stores at each pixel the sum of all pixels above it and to its left. The sum of a window in an image can be directly calculated using four array references of the integral image, irrespective of the size of the window, given the yrange and xrange of the window. Given an integral image -\n\n    A - - - - - - B -\n    - * * * * * * * -\n    - * * * * * * * -\n    - * * * * * * * -\n    - * * * * * * * -\n    - * * * * * * * -\n    C * * * * * * D -\n    - - - - - - - - -\n\nThe sum of pixels in the area denoted by * is given by S = D + A - B - C.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.build_histogram",
    "page": "Docstrings",
    "title": "Images.build_histogram",
    "category": "function",
    "text": "edges, count = build_histogram(img, nbins)\nedges, count = build_histogram(img, nbins, minval, maxval)\nedges, count = build_histogram(img, edges)\n\nGenerates a histogram for the image over nbins spread between [minval, maxval]. Color images are automatically converted to grayscale.\n\nOutput\n\nReturns edges which is a range type that specifies how the  interval [minval, maxval] is divided into bins, and an array count which records the concomitant bin frequencies. In particular, count has the following properties:\n\ncount[0] is the number satisfying x < edges[1]\ncount[i] is the number of values x that satisfy edges[i] <= x < edges[i+1]\ncount[end] is the number satisfying x >= edges[end].\nlength(count) == length(edges)+1.\n\nDetails\n\nOne can consider a histogram as a piecewise-constant model of a probability density function f [1]. Suppose that f has support on some interval I = ab.  Let m be an integer and a = a_1  a_2  ldots  a_m  a_m+1 = b a sequence of real numbers. Construct a sequence of intervals\n\nI_1 = a_1a_2 I_2 = (a_2 a_3 ldots I_m = (a_ma_m+1\n\nwhich partition I into subsets I_j (j = 1 ldots m) on which f is constant. These subsets satisfy I_i cap I_j = emptyset forall i neq j, and are commonly referred to as bins. Together they encompass the entire range of data values such that sum_j I_j  =  I . Each bin has width w_j = I_j = a_j+1 - a_j and height h_j which is the constant probability density over the region of the bin. Integrating the constant probability density over the width of the bin w_j yields a probability mass of pi_j = h_j w_j for the bin.\n\nFor a sample x_1 x_2 ldots x_N, let\n\nn_j = sum_n = 1^Nmathbf1_(I_j)(x_n)\nquad textwhere quad\nmathbf1_(I_j)(x) =\nbegincases\n 1  textif x in I_j\n 0  textotherwise\nendcases\n\nrepresents the number of samples falling into the interval I_j. An estimate for the probability mass of the jth bin is given by the relative frequency hatpi = fracn_jN, and the histogram estimator of the probability density function is defined as\n\nbeginaligned\nhatf_n(x)   = sum_j = 1^mfracn_jNw_j mathbf1_(I_j)(x) \n = sum_j = 1^mfrachatpi_jw_j mathbf1_(I_j)(x) \n = sum_j = 1^mhath_j mathbf1_(I_j)(x)\nendaligned\n\nThe function hatf_n(x) is a genuine density estimator because hatf_n(x)  ge 0 and\n\nbeginaligned\nint_-infty^inftyhatf_n(x) operatornamedx  = sum_j=1^m fracn_jNw_j w_j \n = 1\nendaligned\n\nOptions\n\nVarious options for the parameters of this function are described in more detail below.\n\nChoices for nbins\n\nYou can specify the number of discrete bins for the histogram. When specifying the number of bins consider the maximum number of greylevels that your image type supports. For example, with an image of type N0f8 there is a maximum of 256 possible graylevels. Hence, if you request more than 256 bins for that type of image you should expect to obtain zero counts for numerous bins.\n\nChoices for minval\n\nYou have the option to specify the lower bound of the interval over which the histogram will be computed.  If minval is not specified then the minimum value present in the image is taken as the lower bound.\n\nChoices for maxval\n\nYou have the option to specify the upper bound of the interval over which the histogram will be computed.  If maxval is not specified then the maximum value present in the image is taken as the upper bound.\n\nChoices for edges\n\nIf you do not designate the number of bins, nor the lower or upper bound of the interval, then you have the option to directly stipulate how the intervals will be divided by specifying a range type.\n\nExample\n\nCompute the histogram of a grayscale image.\n\n\nusing TestImages, FileIO, ImageView\n\nimg =  testimage(\"mandril_gray\");\nedges, counts  = build_histogram(img,256,0,1)\n\nGiven a color image, compute the histogram of the red channel.\n\nimg = testimage(\"mandrill\")\nr = red.(img)\nedges, counts  = build_histogram(r,256,0,1)\n\nReferences\n\n[1] E. Herrholz, \"Parsimonious Histograms,\" Ph.D. dissertation, Inst. of Math. and Comp. Sci., University of Greifswald, Greifswald, Germany, 2011.\n\nSee also:\n\nHistogram Equalization Histogram Matching\nadjust_histogram adjust_histogram\nadjust_histogram! adjust_histogram!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.canny",
    "page": "Docstrings",
    "title": "Images.canny",
    "category": "function",
    "text": "canny_edges = canny(img, (upper, lower), sigma=1.4)\n\nPerforms Canny Edge Detection on the input image.\n\nParameters :\n\n(upper, lower) :  Bounds for hysteresis thresholding   sigma :           Specifies the standard deviation of the gaussian filter\n\nExample\n\nimgedg = canny(img, (Percentile(80), Percentile(20)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.clahe",
    "page": "Docstrings",
    "title": "Images.clahe",
    "category": "function",
    "text": "hist_equalised_img = clahe(img, nbins, xblocks = 8, yblocks = 8, clip = 3)\n\n\nPerforms Contrast Limited Adaptive Histogram Equalisation (CLAHE) on the input image. It differs from ordinary histogram equalization in the respect that the adaptive method computes several histograms, each corresponding to a distinct section of the image, and uses them to redistribute the lightness values of the image. It is therefore suitable for improving the local contrast and enhancing the definitions of edges in each region of an image.\n\nDetails\n\nHistogram equalisation was initially conceived to  improve the contrast in a single-channel grayscale image. The method transforms the distribution of the intensities in an image so that they are as uniform as possible [1]. The natural justification for uniformity is that the image has better contrast  if the intensity levels of an image span a wide range on the intensity scale. As it turns out, the necessary transformation is a mapping based on the cumulative histogram–-see histeq for more details.\n\nA natural extension of histogram equalisation is to apply the contrast enhancement locally rather than globally [2]. Conceptually, one can imagine that the process involves partitioning the image into a grid of rectangular regions and applying histogram equalisation based on the local CDF of each contextual region. However, to smooth the transition of the pixels from one contextual region to another,  the mapping of a pixel is not done soley based on the local CDF of its contextual region. Rather, the mapping of a pixel is a bilinear blend based on the CDF of its contextual region, and the CDFs of the immediate neighbouring regions.\n\nIn adaptive histogram equalisation the image mathbfG is partitioned into P times Q equisized submatrices,\n\nmathbfG =  beginbmatrix\nmathbfG_11  mathbfG_12  ldots  mathbfG_1C \nmathbfG_21  mathbfG_22  ldots  mathbfG_2C \nvdots  vdots  ldots  vdots \nmathbfG_R1  mathbfG_R2  ldots  mathbfG_RC \nendbmatrix\n\nFor each submatrix mathbfG_rc, one computes a concomitant CDF, which we shall denote by T_rc(G_ij). In order to determine which CDFs will be used in the bilinear interpolation step, it is useful to  introduce the function\n\nPhi(mathbfG_rc) = left(  phi_rc  phi_rcright) triangleq left(fracrP2 fraccQ2 right)\n\nand to form the sequences  left(phi_11 phi_21 ldots phi_R1 right) and left(phi_11 phi_12 ldots phi_1C right). For a given pixel G_ij(omega), values of r and c are implicitly defined by the solution to the inequalities\n\nphi_r1 le i le phi_(r+1)1  quad textand  quad  phi_1c le j le phi_1(c+1)\n\nWith r and c appropriately defined, the requisite CDFs are given by\n\nbeginaligned\nT_1(v)   triangleq  T_rc(G_ij) \nT_2(v)   triangleq  T_(r+1)c(G_ij) \nT_3(v)   triangleq  T_(r+1)(c+1)(G_ij) \nT_4(v)   triangleq  T_r(c+1)(G_ij)\nendaligned\n\nFinally, with\n\nbeginaligned\nt   triangleq  fraci - phi_r1phi_(r+1)1 - phi_r1  \nu   triangleq  fracj - phi_1cphi_1(c+1) - phi_1c \nendaligned\n\nthe bilinear interpolated transformation that maps an intensity v at location (ij) in the image to an intensity v is given by [3]\n\nv triangleq barT(v)  = (1-t) (1-u)T_1(G_ij) + t(1-u)T_2(G_ij) + tuT_3(G_ij) +(1-t)uT_4(G_ij)\n\nAn unfortunate side-effect of contrast enhancement is that it has a tendency to amplify the level of noise in an image, especially when the magnitude of the contrast enhancement is very high. The magnitude of contrast enhancement is associated with the gradient of T(cdot), because the  gradient determines the extent to which consecutive input intensities are stretched across the grey-level spectrum. One can diminish the level of noise amplification by limiting the magnitude of the contrast enhancement, that is, by limiting the magnitude of the gradient.\n\nSince the derivative of T(cdot) is the empirical density hatf_G, the slope of the mapping function at any input intensity is proportional to the height of the histogram  hatf_G at that intensity.  Therefore, limiting the slope of the local mapping function is equivalent to clipping the height of the histogram. A detailed description of the  implementation  details of the clipping process can be found in [2].\n\nOptions\n\nVarious options for the parameters of this function are described in more detail below.\n\nChoices for img\n\nThe clahe function can handle a variety of input types. The returned image depends on the input type. If the input is an Image then the resulting image is of the same type and has the same properties.\n\nFor coloured images, the input is converted to YIQ type and the Y channel is equalised. This is the combined with the I and Q channels and the resulting image converted to the same type as the input.\n\nChoices for nbins\n\nYou can specify the total number of bins in the histogram of each local region.\n\nChoices for xblocks and yblocks\n\nThe xblocks and yblocks specify the number of blocks to divide the input image into in each direction. By default both values are set to eight.\n\nChoices for clip\n\nThe clip parameter specifies the value at which the histogram is clipped.  The default value is three. The excess in the histogram bins with value exceeding clip is redistributed among the other bins.\n\nExample\n\n\nusing Images, TestImages, ImageView\n\nimg =  testimage(\"mandril_gray\")\nimgeq = clahe(img,256, xblocks = 50, yblocks = 50)\n\nimshow(img)\nimshow(imgeq)\n\nReferences\n\nR. C. Gonzalez and R. E. Woods. Digital Image Processing (3rd Edition).  Upper Saddle River, NJ, USA: Prentice-Hall,  2006.\nS. M. Pizer, E. P. Amburn, J. D. Austin, R. Cromartie, A. Geselowitz, T. Greer, B. ter Haar Romeny, J. B. Zimmerman and K. Zuiderveld “Adaptive histogram equalization and its variations,” Computer Vision, Graphics, and Image Processing, vol. 38, no. 1, p. 99, Apr. 1987. 10.1016/S0734-189X(87)80186-X\nW. H. Press, S. A. Teukolsky, W. T. Vetterling, and B. P. Flannery.  Numerical Recipes: The Art of Scientific Computing (3rd Edition). New York, NY, USA: Cambridge University Press, 2007.\n\nSee also: histmatch,histeq, imhist and  adjust_gamma.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.clearborder",
    "page": "Docstrings",
    "title": "Images.clearborder",
    "category": "function",
    "text": "cleared_img = clearborder(img)\ncleared_img = clearborder(img, width)\ncleared_img = clearborder(img, width, background)\n\nReturns a copy of the original image after clearing objects connected to the border of the image.\n\nParameters:\n\nimg          = Binary/Grayscale input image\nwidth        = Width of the border examined (Default value is 1)\nbackground   = Value to be given to pixels/elements that are cleared (Default value is 0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.cliphist",
    "page": "Docstrings",
    "title": "Images.cliphist",
    "category": "function",
    "text": "clipped_hist = cliphist(hist, clip)\n\nClips the histogram above a certain value clip. The excess left in the bins exceeding clip is redistributed among the remaining bins.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.complement",
    "page": "Docstrings",
    "title": "Images.complement",
    "category": "function",
    "text": "y = complement(x)\n\nTake the complement 1-x of x.  If x is a color with an alpha channel, the alpha channel is left untouched. Don\'t forget to add a dot when x is an array: complement.(x)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.component_boxes",
    "page": "Docstrings",
    "title": "Images.component_boxes",
    "category": "function",
    "text": "component_boxes(labeled_array) -> an array of bounding boxes for each label, including the background label 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.component_centroids",
    "page": "Docstrings",
    "title": "Images.component_centroids",
    "category": "function",
    "text": "component_centroids(labeled_array) -> an array of centroids for each label, including the background label 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.component_indices",
    "page": "Docstrings",
    "title": "Images.component_indices",
    "category": "function",
    "text": "component_indices(labeled_array) -> an array of pixels for each label, including the background label 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.component_lengths",
    "page": "Docstrings",
    "title": "Images.component_lengths",
    "category": "function",
    "text": "component_lengths(labeled_array) -> an array of areas (2D), volumes (3D), etc. for each label, including the background label 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.component_subscripts",
    "page": "Docstrings",
    "title": "Images.component_subscripts",
    "category": "function",
    "text": "component_subscripts(labeled_array) -> an array of pixels for each label, including the background label 0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.convexhull",
    "page": "Docstrings",
    "title": "Images.convexhull",
    "category": "function",
    "text": "chull = convexhull(img)\n\nComputes the convex hull of a binary image and returns the vertices of convex hull as a CartesianIndex array.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.corner2subpixel",
    "page": "Docstrings",
    "title": "Images.corner2subpixel",
    "category": "function",
    "text": "corners = corner2subpixel(responses::AbstractMatrix,corner_indicator::AbstractMatrix{Bool})\n        -> Vector{HomogeneousPoint{Float64,3}}\n\nRefines integer corner coordinates to sub-pixel precision.\n\nThe function takes as input a matrix representing corner responses and a boolean indicator matrix denoting the integer coordinates of a corner in the image. The output is a vector of type HomogeneousPoint storing the sub-pixel coordinates of the corners.\n\nThe algorithm computes a correction factor which is added to the original integer coordinates. In particular, a univariate quadratic polynomial is fit separately to the x-coordinates and y-coordinates of a corner and its immediate east/west, and north/south neighbours. The fit is achieved using a local coordinate system for each corner, where the origin of the coordinate system is a given corner, and its immediate neighbours are assigned coordinates of  minus one and plus one.\n\nThe corner and its two neighbours form a system of three equations. For example, let  x_1 = -1,  x_2 = 0 and  x_3 = 1 denote the local x coordinates of the west, center and east pixels and let the vector mathbfb = r_1 r_2 r_3 denote the corresponding corner response values. With\n\n    mathbfA =\n        beginbmatrix\n            x_1^2  x_1   1  \n            x_2^2  x_2   1 \n            x_3^2  x_3   1 \n        endbmatrix\n\nthe coefficients of the quadratic polynomial can be found by solving the system of equations mathbfb = mathbfAmathbfx. The result is given by x = mathbfA^-1mathbfb.\n\nThe vertex of the quadratic polynomial yields a sub-pixel estimate of the true corner position. For example, for a univariate quadratic polynomial px^2 + qx + r, the x-coordinate of the vertex is frac-q2p. Hence, the refined sub-pixel coordinate is equal to:  c +  frac-q2p, where c is the integer coordinate.\n\nnote: Note\nCorners on the boundary of the image are not refined to sub-pixel precision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.FeatureTransform.distance_transform",
    "page": "Docstrings",
    "title": "Images.FeatureTransform.distance_transform",
    "category": "function",
    "text": "distance_transform(F::AbstractArray{CartesianIndex}, [w=nothing]) -> D\n\nCompute the distance transform of F, where each element F[i] represents a \"target\" or \"feature\" location assigned to i. Specifically, D[i] is the distance between i and F[i]. Optionally specify the weight w assigned to each coordinate; the default value of nothing is equivalent to w=(1,1,...).\n\nSee also: feature_transform.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.entropy",
    "page": "Docstrings",
    "title": "Images.entropy",
    "category": "function",
    "text": "entropy(logᵦ, img)\nentropy(img; [kind=:shannon])\n\nCompute the entropy of a grayscale image defined as -sum(p.*logᵦ(p)). The base β of the logarithm (a.k.a. entropy unit) is one of the following:\n\n:shannon (log base 2, default), or use logᵦ = log2\n:nat (log base e), or use logᵦ = log\n:hartley (log base 10), or use logᵦ = log10\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.fastcorners",
    "page": "Docstrings",
    "title": "Images.fastcorners",
    "category": "function",
    "text": "fastcorners(img, n, threshold) -> corners\n\nPerforms FAST Corner Detection. n is the number of contiguous pixels which need to be greater (lesser) than intensity + threshold (intensity - threshold) for a pixel to be marked as a corner. The default value for n is 12.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.FeatureTransform.feature_transform",
    "page": "Docstrings",
    "title": "Images.FeatureTransform.feature_transform",
    "category": "function",
    "text": "feature_transform(I::AbstractArray{Bool, N}, [w=nothing]) -> F\n\nCompute the feature transform of a binary image I, finding the closest \"feature\" (positions where I is true) for each location in I.  Specifically, F[i] is a CartesianIndex encoding the position closest to i for which I[F[i]] is true.  In cases where two or more features in I have the same distance from i, an arbitrary feature is chosen. If I has no true values, then all locations are mapped to an index where each coordinate is typemin(Int).\n\nOptionally specify the weight w assigned to each coordinate.  For example, if I corresponds to an image where voxels are anisotropic, w could be the voxel spacing along each coordinate axis. The default value of nothing is equivalent to w=(1,1,...).\n\nSee also: distance_transform.\n\nCitation\n\n\'A Linear Time Algorithm for Computing Exact Euclidean Distance Transforms of Binary Images in Arbitrary Dimensions\' Maurer et al., 2003\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.findlocalmaxima",
    "page": "Docstrings",
    "title": "Images.findlocalmaxima",
    "category": "function",
    "text": "findlocalmaxima(img, [region, edges]) -> Vector{CartesianIndex}\n\nReturns the coordinates of elements whose value is larger than all of their immediate neighbors.  region is a list of dimensions to consider.  edges is a boolean specifying whether to include the first and last elements of each dimension, or a tuple-of-Bool specifying edge behavior for each dimension separately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.findlocalminima",
    "page": "Docstrings",
    "title": "Images.findlocalminima",
    "category": "function",
    "text": "Like findlocalmaxima, but returns the coordinates of the smallest elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.gaussian_pyramid",
    "page": "Docstrings",
    "title": "Images.gaussian_pyramid",
    "category": "function",
    "text": "pyramid = gaussian_pyramid(img, n_scales, downsample, sigma)\n\nReturns a  gaussian pyramid of scales n_scales, each downsampled by a factor downsample > 1 and sigma for the gaussian kernel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.green",
    "page": "Docstrings",
    "title": "ColorTypes.green",
    "category": "function",
    "text": "g = green(img) extracts the green channel from an RGB image img\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.harris",
    "page": "Docstrings",
    "title": "Images.harris",
    "category": "function",
    "text": "harris_response = harris(img; [k], [border], [weights])\n\nPerforms Harris corner detection. The covariances can be taken using either a mean weighted filter or a gamma kernel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.histeq",
    "page": "Docstrings",
    "title": "Images.histeq",
    "category": "function",
    "text": "hist_equalised_img = histeq(img, nbins)\nhist_equalised_img = histeq(img, nbins, minval, maxval)\n\nReturns a histogram equalised image with a granularity of approximately nbins number of bins.\n\nDetails\n\nHistogram equalisation was initially conceived to  improve the contrast in a single-channel grayscale image. The method transforms the distribution of the intensities in an image so that they are as uniform as possible [1]. The natural justification for uniformity is that the image has better contrast  if the intensity levels of an image span a wide range on the intensity scale. As it turns out, the necessary transformation is a mapping based on the cumulative histogram.\n\nOne can consider an L-bit single-channel I times J image with gray values in the set 01ldotsL-1 , as a collection of independent and identically distributed random variables. Specifically, let the sample space Omega be the set of all IJ-tuples omega =(omega_11omega_12ldotsomega_1Jomega_21omega_22ldotsomega_2Jomega_I1omega_I2ldotsomega_IJ), where each omega_ij in 01ldots L-1 . Furthermore, impose a probability measure on Omega such that the functions Omega ni omega to omega_ij in 01ldotsL-1 are independent and identically distributed.\n\nOne can then regard an image as a matrix of random variables mathbfG = G_ij(omega), where each function G_ij Omega to mathbbR is defined by\n\nG_ij(omega) = fracomega_ijL-1\n\nand each G_ij is distributed according to some unknown density f_G. While f_G is unknown, one can approximate it with a normalised histogram of gray levels,\n\nhatf_G(v)= fracn_vIJ\n\nwhere\n\nn_v = left  left(ij)   G_ij(omega)  = v right  right \n\nrepresents the number of times a gray level with intensity v occurs in mathbfG. To transforming the distribution of the intensities so that they are as uniform as possible one needs to find a mapping T(cdot) such that T(G_ij) thicksim U. The required mapping turns out to be the cumulative distribution function (CDF) of the empirical density hatf_G,\n\n T(G_ij) = int_0^G_ijhatf_G(w)mathrmd w\n\nOptions\n\nVarious options for the parameters of this function are described in more detail below.\n\nChoices for img\n\nThe histeq function can handle a variety of input types. The returned image depends on the input type. If the input is an Image then the resulting image is of the same type and has the same properties.\n\nFor coloured images, the input is converted to YIQ type and the Y channel is equalised. This is the combined with the I and Q channels and the resulting image converted to the same type as the input.\n\nChoices for nbins\n\nYou can specify the total number of bins in the histogram.\n\nChoices for minval and maxval\n\nIf minval and maxval are specified then intensities are equalized to the range (minval, maxval). The default values are 0 and 1.\n\nExample\n\n\nusing TestImages, FileIO, ImageView\n\nimg =  testimage(\"mandril_gray\");\nimgeq = histeq(img,256);\n\nimshow(img)\nimshow(imgeq)\n\nReferences\n\nR. C. Gonzalez and R. E. Woods. Digital Image Processing (3rd Edition).  Upper Saddle River, NJ, USA: Prentice-Hall,  2006.\n\nSee also: histmatch,clahe, imhist and  adjust_gamma.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.histmatch",
    "page": "Docstrings",
    "title": "Images.histmatch",
    "category": "function",
    "text": "hist_matched_img = histmatch(img, oimg, nbins)\n\nReturns a histogram matched image with a granularity of nbins number of bins. The first argument img is the image to be matched, and the second argument oimg is the image having the desired histogram to be matched to.\n\nDetails\n\nThe purpose of histogram matching is to transform the intensities in a source image so that the intensities distribute according to the histogram of a specified target image. If one interprets histograms as piecewise-constant models of probability density functions (see imhist), then the histogram matching task can be modelled as the problem of transforming one probability distribution into another [1].  It turns out that the solution to this transformation problem involves the cumulative and inverse cumulative distribution functions of the source and target probability density functions.\n\nIn particular, let the random variables x thicksim p_x and z thicksim p_z  represent an intensity in the source and target image respectively, and let\n\n S(x) = int_0^xp_x(w)mathrmd w quad textand quad\n T(z) = int_0^zp_z(w)mathrmd w\n\nrepresent their concomitant cumulative disitribution functions. Then the sought-after mapping Q(cdot) such that Q(x) thicksim p_z is given by\n\nQ(x) =  T^-1left( S(x) right)\n\nwhere T^-1(y) = operatornamemin  x in mathbbR  y leq T(x)  is the inverse cumulative distribution function of T(x).\n\nThe mapping suggests that one can conceptualise histogram matching as performing histogram equalisation on the source and target image and relating the two equalised histograms. Refer to histeq for more details on histogram equalisation.\n\nOptions\n\nVarious options for the parameters of this function are described in more detail below.\n\nChoices for img and oimg\n\nThe histmatch function can handle a variety of input types. The returned image depends on the input type. If the input is an Image then the resulting image is of the same type and has the same properties.\n\nFor coloured images, the input is converted to YIQ  type and the Y channel is gamma corrected. This is then combined with the I and Q channels and the resulting image converted to the same type as the input.\n\nChoices for nbins\n\nYou can specify the total number of bins in the histogram.\n\nExample\n\nusing Images, TestImages, ImageView\n\nimg_source = testimage(\"mandril_gray\")\nimg_target = adjust_gamma(img_source,1/2)\nimg_transformed = histmatch(img_source, img_target)\n#=\n    A visual inspection confirms that img_transformed resembles img_target\n    much more closely than img_source.\n=#\nimshow(img_source)\nimshow(img_target)\nimshow(img_transformed)\n\nReferences\n\nW. Burger and M. J. Burge. Digital Image Processing. Texts in Computer Science, 2016. doi:10.1007/978-1-4471-6684-9\n\nSee also: histeq,clahe, and imhist.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.imROF",
    "page": "Docstrings",
    "title": "Images.imROF",
    "category": "function",
    "text": "imgr = imROF(img, λ, iterations)\n\nPerform Rudin-Osher-Fatemi (ROF) filtering, more commonly known as Total Variation (TV) denoising or TV regularization. λ is the regularization coefficient for the derivative, and iterations is the number of relaxation iterations taken. 2d only.\n\nSee https://en.wikipedia.org/wiki/Totalvariationdenoising and Chambolle, A. (2004). \"An algorithm for total variation minimization and applications\".     Journal of Mathematical Imaging and Vision. 20: 89–97\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.imadjustintensity",
    "page": "Docstrings",
    "title": "Images.imadjustintensity",
    "category": "function",
    "text": "imadjustintensity(img [, (minval,maxval)]) -> Image\n\nMap intensities over the interval (minval,maxval) to the interval    [0,1]. This is equivalent to map(ScaleMinMax(eltype(img), minval,    maxval), img).  (minval,maxval) defaults to extrema(img).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.imaverage",
    "page": "Docstrings",
    "title": "Images.imaverage",
    "category": "function",
    "text": "kern = imaverage(filtersize) constructs a boxcar-filter of the specified size.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.imcorner",
    "page": "Docstrings",
    "title": "Images.imcorner",
    "category": "function",
    "text": "corners = imcorner(img; [method])\ncorners = imcorner(img, threshold, percentile; [method])\n\nPerforms corner detection using one of the following methods -\n\n1. harris\n2. shi_tomasi\n3. kitchen_rosenfeld\n\nThe parameters of the individual methods are described in their documentation. The maxima values of the resultant responses are taken as corners. If a threshold is specified, the values of the responses are thresholded to give the corner pixels. The threshold is assumed to be a percentile value unless percentile is set to false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.imcorner_subpixel",
    "page": "Docstrings",
    "title": "Images.imcorner_subpixel",
    "category": "function",
    "text": "corners = imcorner_subpixel(img; [method])\n         -> Vector{HomogeneousPoint{Float64,3}}\ncorners = imcorner_subpixel(img, threshold, percentile; [method])\n         -> Vector{HomogeneousPoint{Float64,3}}\n\nSame as imcorner, but estimates corners to sub-pixel precision.\n\nSub-pixel precision is achieved by interpolating the corner response values using the 4-connected neighbourhood of a maximum response value. See corner2subpixel for more details of the interpolation scheme.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.imedge",
    "page": "Docstrings",
    "title": "Images.imedge",
    "category": "function",
    "text": "grad_y, grad_x, mag, orient = imedge(img, kernelfun=KernelFactors.ando3, border=\"replicate\")\n\nEdge-detection filtering. kernelfun is a valid kernel function for imgradients, defaulting to KernelFactors.ando3. border is any of the boundary conditions specified in padarray.\n\nReturns a tuple (grad_y, grad_x, mag, orient), which are the horizontal gradient, vertical gradient, and the magnitude and orientation of the strongest edge, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.imhist",
    "page": "Docstrings",
    "title": "Images.imhist",
    "category": "function",
    "text": "edges, count = imhist(img, nbins)\nedges, count = imhist(img, nbins, minval, maxval)\nedges, count = imhist(img, edges)\n\nGenerates a histogram for the image over nbins spread between (minval, maxval]. Color images are automatically converted to grayscale.\n\nOutput\n\nReturns edges which is a range type that specifies how the  interval (minval, maxval] is divided into bins, and an array count which records the concomitant bin frequencies. In particular, count has the following properties:\n\ncount[i+1] is the number of values x that satisfy edges[i] <= x < edges[i+1].\ncount[1] is the number satisfying x < edges[1], and\ncount[end] is the number satisfying x >= edges[end].\nlength(count) == length(edges)+1.\n\nDetails\n\nOne can consider a histogram as a piecewise-constant model of a probability density function f [1]. Suppose that f has support on some interval I = ab.  Let m be an integer and a = a_1  a_2  ldots  a_m  a_m+1 = b a sequence of real numbers. Construct a sequence of intervals\n\nI_1 = a_1a_2 I_2 = (a_2 a_3 ldots I_m = (a_ma_m+1\n\nwhich partition I into subsets I_j (j = 1 ldots m) on which f is constant. These subsets satisfy I_i cap I_j = emptyset forall i neq j, and are commonly referred to as bins. Together they encompass the entire range of data values such that sum_j I_j  =  I . Each bin has width w_j = I_j = a_j+1 - a_j and height h_j which is the constant probability density over the region of the bin. Integrating the constant probability density over the width of the bin w_j yields a probability mass of pi_j = h_j w_j for the bin.\n\nFor a sample x_1 x_2 ldots x_N, let\n\nn_j = sum_n = 1^Nmathbf1_(I_j)(x_n)\nquad textwhere quad\nmathbf1_(I_j)(x) =\nbegincases\n 1  textif x in I_j\n 0  textotherwise\nendcases\n\nrepresents the number of samples falling into the interval I_j. An estimate for the probability mass of the jth bin is given by the relative frequency hatpi = fracn_jN, and the histogram estimator of the probability density function is defined as\n\nbeginaligned\nhatf_n(x)   = sum_j = 1^mfracn_jNw_j mathbf1_(I_j)(x) \n = sum_j = 1^mfrachatpi_jw_j mathbf1_(I_j)(x) \n = sum_j = 1^mhath_j mathbf1_(I_j)(x)\nendaligned\n\nThe function hatf_n(x) is a genuine density estimator because hatf_n(x)  ge 0 and\n\nbeginaligned\nint_-infty^inftyhatf_n(x) operatornamedx  = sum_j=1^m fracn_jNw_j w_j \n = 1\nendaligned\n\nOptions\n\nVarious options for the parameters of this function are described in more detail below.\n\nChoices for nbins\n\nYou can specify the number of discrete bins for the histogram.\n\nChoices for minval\n\nYou have the option to specify the lower bound of the interval over which the histogram will be computed.  If minval is not specified then the minimum value present in the image is taken as the lower bound.\n\nChoices for maxval\n\nYou have the option to specify the upper bound of the interval over which the histogram will be computed.  If maxval is not specified then the maximum value present in the image is taken as the upper bound.\n\nChoices for edges\n\nIf you do not designate the number of bins, nor the lower or upper bound of the interval, then you have the option to directly stipulate how the intervals will be divided by specifying a range type.\n\nExample\n\nCompute the histogram of a grayscale image.\n\n\nusing TestImages, FileIO, ImageView\n\nimg =  testimage(\"mandril_gray\");\nedges, counts  = imhist(img,256);\n\nGiven a color image, compute the hisogram of the red channel.\n\nimg = testimage(\"mandrill\")\nr = red(img)\nedges, counts  = imhist(r,256);\n\nReferences\n\n[1] E. Herrholz, \"Parsimonious Histograms,\" Ph.D. dissertation, Inst. of Math. and Comp. Sci., University of Greifswald, Greifswald, Germany, 2011.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.imstretch",
    "page": "Docstrings",
    "title": "Images.imstretch",
    "category": "function",
    "text": "imgs = imstretch(img, m, slope) enhances or reduces (for slope > 1 or < 1, respectively) the contrast near saturation (0 and 1). This is essentially a symmetric gamma-correction. For a pixel of brightness p, the new intensity is 1/(1+(m/(p+eps))^slope).\n\nThis assumes the input img has intensities between 0 and 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.integral_image",
    "page": "Docstrings",
    "title": "Images.integral_image",
    "category": "function",
    "text": "integral_img = integral_image(img)\n\nReturns the integral image of an image. The integral image is calculated by assigning to each pixel the sum of all pixels above it and to its left, i.e. the rectangle from (1, 1) to the pixel. An integral image is a data structure which helps in efficient calculation of sum of pixels in a rectangular subset of an image. See boxdiff for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.kitchen_rosenfeld",
    "page": "Docstrings",
    "title": "Images.kitchen_rosenfeld",
    "category": "function",
    "text": "kitchen_rosenfeld_response = kitchen_rosenfeld(img; [border])\n\nPerforms Kitchen Rosenfeld corner detection. The covariances can be taken using either a mean weighted filter or a gamma kernel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.label_components",
    "page": "Docstrings",
    "title": "Images.label_components",
    "category": "function",
    "text": "label = label_components(tf, [connectivity])\nlabel = label_components(tf, [region])\n\nFind the connected components in a binary array tf. There are two forms that connectivity can take:\n\nIt can be a boolean array of the same dimensionality as tf, of size 1 or 3\n\nalong each dimension. Each entry in the array determines whether a given neighbor is used for connectivity analyses. For example, connectivity = trues(3,3) would use 8-connectivity and test all pixels that touch the current one, even the corners.\n\nYou can provide a list indicating which dimensions are used to\n\ndetermine connectivity. For example, region = [1,3] would not test neighbors along dimension 2 for connectivity. This corresponds to just the nearest neighbors, i.e., 4-connectivity in 2d and 6-connectivity in 3d.\n\nThe default is region = 1:ndims(A).\n\nThe output label is an integer array, where 0 is used for background pixels, and each connected region gets a different integer index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.magnitude",
    "page": "Docstrings",
    "title": "Images.magnitude",
    "category": "function",
    "text": "m = magnitude(grad_x, grad_y)\n\nCalculates the magnitude of the gradient images given by grad_x and grad_y. Equivalent to sqrt(grad_x.^2 + grad_y.^2).\n\nReturns a magnitude image the same size as grad_x and grad_y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.magnitude_phase",
    "page": "Docstrings",
    "title": "Images.magnitude_phase",
    "category": "function",
    "text": "magnitude_phase(grad_x, grad_y) -> m, p\n\nConvenience function for calculating the magnitude and phase of the gradient images given in grad_x and grad_y.  Returns a tuple containing the magnitude and phase images.  See magnitude and phase for details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.maxabsfinite",
    "page": "Docstrings",
    "title": "Images.maxabsfinite",
    "category": "function",
    "text": "m = maxabsfinite(A) calculates the maximum absolute value in A, ignoring any values that are not finite (Inf or NaN).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.maxfinite",
    "page": "Docstrings",
    "title": "Images.maxfinite",
    "category": "function",
    "text": "m = maxfinite(A) calculates the maximum value in A, ignoring any values that are not finite (Inf or NaN).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.meanfinite",
    "page": "Docstrings",
    "title": "Images.meanfinite",
    "category": "function",
    "text": "M = meanfinite(img, region) calculates the mean value along the dimensions listed in region, ignoring any non-finite values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.minfinite",
    "page": "Docstrings",
    "title": "Images.minfinite",
    "category": "function",
    "text": "m = minfinite(A) calculates the minimum value in A, ignoring any values that are not finite (Inf or NaN).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.ncc",
    "page": "Docstrings",
    "title": "Images.ncc",
    "category": "function",
    "text": "C = ncc(A, B) computes the normalized cross-correlation of A and B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.orientation",
    "page": "Docstrings",
    "title": "Images.orientation",
    "category": "function",
    "text": "orientation(grad_x, grad_y) -> orient\n\nCalculate the orientation angle of the strongest edge from gradient images given by grad_x and grad_y.  Equivalent to atan(grad_x, grad_y).  When both grad_x and grad_y are effectively zero, the corresponding angle is set to zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.otsu_threshold",
    "page": "Docstrings",
    "title": "Images.otsu_threshold",
    "category": "function",
    "text": "thres = otsu_threshold(img)\nthres = otsu_threshold(img, bins)\n\nComputes threshold for grayscale image using Otsu\'s method.\n\nParameters:\n\nimg         = Grayscale input image\nbins        = Number of bins used to compute the histogram. Needed for floating-point images.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.phase",
    "page": "Docstrings",
    "title": "Images.phase",
    "category": "function",
    "text": "phase(grad_x, grad_y) -> p\n\nCalculate the rotation angle of the gradient given by grad_x and grad_y. Equivalent to atan(-grad_y, grad_x), except that when both grad_x and grad_y are effectively zero, the corresponding angle is set to zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.red",
    "page": "Docstrings",
    "title": "ColorTypes.red",
    "category": "function",
    "text": "r = red(img) extracts the red channel from an RGB image img\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.sad",
    "page": "Docstrings",
    "title": "Images.sad",
    "category": "function",
    "text": "s = sad(A, B) computes the sum-of-absolute differences over arrays/images A and B\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.sadn",
    "page": "Docstrings",
    "title": "Images.sadn",
    "category": "function",
    "text": "s = sadn(A, B) computes the sum-of-absolute differences over arrays/images A and B, normalized by array size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.shepp_logan",
    "page": "Docstrings",
    "title": "Images.shepp_logan",
    "category": "function",
    "text": "phantom = shepp_logan(N,[M]; highContrast=true)\n\noutput the NxM Shepp-Logan phantom, which is a standard test image usually used for comparing image reconstruction algorithms in the field of computed tomography (CT) and magnetic resonance imaging (MRI). If the argument M is omitted, the phantom is of size NxN. When setting the keyword argument highConstrast to false, the CT version of the phantom is created. Otherwise, the high contrast MRI version is calculated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.shi_tomasi",
    "page": "Docstrings",
    "title": "Images.shi_tomasi",
    "category": "function",
    "text": "shi_tomasi_response = shi_tomasi(img; [border], [weights])\n\nPerforms Shi Tomasi corner detection. The covariances can be taken using either a mean weighted filter or a gamma kernel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.ssd",
    "page": "Docstrings",
    "title": "Images.ssd",
    "category": "function",
    "text": "s = ssd(A, B) computes the sum-of-squared differences over arrays/images A and B\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.ssdn",
    "page": "Docstrings",
    "title": "Images.ssdn",
    "category": "function",
    "text": "s = ssdn(A, B) computes the sum-of-squared differences over arrays/images A and B, normalized by array size\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.sumfinite!",
    "page": "Docstrings",
    "title": "Images.sumfinite!",
    "category": "function",
    "text": "sumfinite!(S, K, A)\n\nCompute the sum S and number of contributing pixels K for reductions of the array A over dimensions. S and K must have identical indices, and either match A or have singleton-dimensions for the dimensions that are being summed over. Only pixels with finite value are included in the tallies of S and K.\n\nNote that the pixel mean is just S./K.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.thin_edges",
    "page": "Docstrings",
    "title": "Images.thin_edges",
    "category": "function",
    "text": "thinned = thin_edges(img, gradientangle, [border])\nthinned, subpix = thin_edges_subpix(img, gradientangle, [border])\nthinned, subpix = thin_edges_nonmaxsup(img, gradientangle, [border]; [radius::Float64=1.35], [theta=pi/180])\nthinned, subpix = thin_edges_nonmaxsup_subpix(img, gradientangle, [border]; [radius::Float64=1.35], [theta=pi/180])\n\nEdge thinning for 2D edge images.  Currently the only algorithm available is non-maximal suppression, which takes an edge image and its gradient angle, and checks each edge point for local maximality in the direction of the gradient. The returned image is non-zero only at maximal edge locations.\n\nborder is any of the boundary conditions specified in padarray.\n\nIn addition to the maximal edge image, the _subpix versions of these functions also return an estimate of the subpixel location of each local maxima, as a 2D array or image of Graphics.Point objects.  Additionally, each local maxima is adjusted to the estimated value at the subpixel location.\n\nCurrently, the _nonmaxsup functions are identical to the first two function calls, except that they also accept additional keyword arguments.  radius indicates the step size to use when searching in the direction of the gradient; values between 1.2 and 1.5 are suggested (default 1.35).  theta indicates the step size to use when discretizing angles in the gradientangle image, in radians (default: 1 degree in radians = pi/180).\n\nExample:\n\ng = rgb2gray(rgb_image)\ngx, gy = imgradients(g)\nmag, grad_angle = magnitude_phase(gx,gy)\nmag[mag .< 0.5] = 0.0  # Threshold magnitude image\nthinned, subpix =  thin_edges_subpix(mag, grad_angle)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.unsafe_neighbourhood_4",
    "page": "Docstrings",
    "title": "Images.unsafe_neighbourhood_4",
    "category": "function",
    "text": "unsafe_neighbourhood_4(matrix::AbstractMatrix,r::Int,c::Int)\n\nReturns the value of a matrix at given coordinates together with the values of the north, south, east and west neighbours.\n\nThis function does not perform bounds checking. It is up to the user to ensure that the function is not called with indices that are on the boundary of the matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Images.yen_threshold",
    "page": "Docstrings",
    "title": "Images.yen_threshold",
    "category": "function",
    "text": "thres = yen_threshold(img)\nthres = yen_threshold(img, bins)\n\nComputes threshold for grayscale image using Yen\'s maximum correlation criterion for bilevel thresholding\n\nParameters:\n\nimg         = Grayscale input image\nbins        = Number of bins used to compute the histogram. Needed for floating-point images.\n\n#Citation Yen J.C., Chang F.J., and Chang S. (1995) “A New Criterion for Automatic Multilevel Thresholding” IEEE Trans. on Image Processing, 4(3): 370-378. DOI:10.1109/83.366472\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Images.@colorant_strImages.@test_approx_eq_sigma_epsImages.ABGRImages.ADIN99Images.ADIN99dImages.ADIN99oImages.AGrayImages.AGray32Images.AHSIImages.AHSLImages.AHSVImages.ALCHabImages.ALCHuvImages.ALMSImages.ALabImages.ALuvImages.ARGBImages.ARGB32Images.AXYZImages.AYCbCrImages.AYIQImages.AbstractGrayImages.AbstractHistogramOperationImages.AbstractRGBImages.AlgorithmImages.AlphaColorImages.AxisImages.AxisArrayImages.AxyYImages.BGRImages.BGRAImages.BlobLoGImages.CIE1931JV_CMFImages.CIE1931J_CMFImages.CIE1931_CMFImages.CIE1964_CMFImages.CIEDE2000Images.ColorImages.Color3Images.ColorAlphaImages.ColorTypesImages.ColorViewImages.ColorantImages.ColorantNormedImages.ColorizedArrayImages.ColorsImages.CoordOffsetImages.DE_2000Images.DE_94Images.DE_ABImages.DE_BFDImages.DE_CMCImages.DE_DIN99Images.DE_DIN99dImages.DE_DIN99oImages.DE_JPC79Images.DIN99Images.DIN99AImages.DIN99dImages.DIN99dAImages.DIN99oImages.DIN99oAImages.DisjointMinSetsImages.EqualizationImages.FeatureTransformImages.FillImages.FixedImages.FixedPointImages.FixedPointNumbersImages.FractionalImages.GrayImages.Gray24Images.GrayAImages.GuoAlgoImages.HSBImages.HSIImages.HSIAImages.HSLImages.HSLAImages.HSVImages.HSVAImages.HasTimeAxisImages.HausdorffImages.HomogeneousPointImages.ImageAxesImages.ImageCoreImages.ImageDistancesImages.ImageFilteringImages.ImageMetaImages.ImageMetadataImages.ImageMetricImages.ImageMorphologyImages.ImagePreMetricImages.ImageSemiMetricImages.ImageTransformationsImages.ImagesImages.IndexAnyImages.IndexIncrementalImages.InnerImages.InvWarpedViewImages.KernelImages.KernelFactorsImages.LCHabImages.LCHabAImages.LCHuvImages.LCHuvAImages.LMSImages.LMSAImages.LabImages.LabAImages.LuvImages.LuvAImages.MSCImages.MatchingImages.ModifiedHausdorffImages.N0f16Images.N0f32Images.N0f64Images.N0f8Images.N10f22Images.N10f54Images.N10f6Images.N11f21Images.N11f5Images.N11f53Images.N12f20Images.N12f4Images.N12f52Images.N13f19Images.N13f3Images.N13f51Images.N14f18Images.N14f2Images.N14f50Images.N15f1Images.N15f17Images.N15f49Images.N16f0Images.N16f16Images.N16f48Images.N17f15Images.N17f47Images.N18f14Images.N18f46Images.N19f13Images.N19f45Images.N1f15Images.N1f31Images.N1f63Images.N1f7Images.N20f12Images.N20f44Images.N21f11Images.N21f43Images.N22f10Images.N22f42Images.N23f41Images.N23f9Images.N24f40Images.N24f8Images.N25f39Images.N25f7Images.N26f38Images.N26f6Images.N27f37Images.N27f5Images.N28f36Images.N28f4Images.N29f3Images.N29f35Images.N2f14Images.N2f30Images.N2f6Images.N2f62Images.N30f2Images.N30f34Images.N31f1Images.N31f33Images.N32f0Images.N32f32Images.N33f31Images.N34f30Images.N35f29Images.N36f28Images.N37f27Images.N38f26Images.N39f25Images.N3f13Images.N3f29Images.N3f5Images.N3f61Images.N40f24Images.N41f23Images.N42f22Images.N43f21Images.N44f20Images.N45f19Images.N46f18Images.N47f17Images.N48f16Images.N49f15Images.N4f12Images.N4f28Images.N4f4Images.N4f60Images.N50f14Images.N51f13Images.N52f12Images.N53f11Images.N54f10Images.N55f9Images.N56f8Images.N57f7Images.N58f6Images.N59f5Images.N5f11Images.N5f27Images.N5f3Images.N5f59Images.N60f4Images.N61f3Images.N62f2Images.N63f1Images.N64f0Images.N6f10Images.N6f2Images.N6f26Images.N6f58Images.N7f1Images.N7f25Images.N7f57Images.N7f9Images.N8f0Images.N8f24Images.N8f56Images.N8f8Images.N9f23Images.N9f55Images.N9f7Images.NAImages.NoPadImages.NormedImages.NumberLikeImages.PadImages.PercentileImages.Q0f15Images.Q0f31Images.Q0f63Images.Q0f7Images.Q10f21Images.Q10f5Images.Q10f53Images.Q11f20Images.Q11f4Images.Q11f52Images.Q12f19Images.Q12f3Images.Q12f51Images.Q13f18Images.Q13f2Images.Q13f50Images.Q14f1Images.Q14f17Images.Q14f49Images.Q15f0Images.Q15f16Images.Q15f48Images.Q16f15Images.Q16f47Images.Q17f14Images.Q17f46Images.Q18f13Images.Q18f45Images.Q19f12Images.Q19f44Images.Q1f14Images.Q1f30Images.Q1f6Images.Q1f62Images.Q20f11Images.Q20f43Images.Q21f10Images.Q21f42Images.Q22f41Images.Q22f9Images.Q23f40Images.Q23f8Images.Q24f39Images.Q24f7Images.Q25f38Images.Q25f6Images.Q26f37Images.Q26f5Images.Q27f36Images.Q27f4Images.Q28f3Images.Q28f35Images.Q29f2Images.Q29f34Images.Q2f13Images.Q2f29Images.Q2f5Images.Q2f61Images.Q30f1Images.Q30f33Images.Q31f0Images.Q31f32Images.Q32f31Images.Q33f30Images.Q34f29Images.Q35f28Images.Q36f27Images.Q37f26Images.Q38f25Images.Q39f24Images.Q3f12Images.Q3f28Images.Q3f4Images.Q3f60Images.Q40f23Images.Q41f22Images.Q42f21Images.Q43f20Images.Q44f19Images.Q45f18Images.Q46f17Images.Q47f16Images.Q48f15Images.Q49f14Images.Q4f11Images.Q4f27Images.Q4f3Images.Q4f59Images.Q50f13Images.Q51f12Images.Q52f11Images.Q53f10Images.Q54f9Images.Q55f8Images.Q56f7Images.Q57f6Images.Q58f5Images.Q59f4Images.Q5f10Images.Q5f2Images.Q5f26Images.Q5f58Images.Q60f3Images.Q61f2Images.Q62f1Images.Q63f0Images.Q6f1Images.Q6f25Images.Q6f57Images.Q6f9Images.Q7f0Images.Q7f24Images.Q7f56Images.Q7f8Images.Q8f23Images.Q8f55Images.Q8f7Images.Q9f22Images.Q9f54Images.Q9f6Images.RGBImages.RGB1Images.RGB24Images.RGB4Images.RGBAImages.RealLikeImages.StackedViewImages.StreamIndexStyleImages.StreamingContainerImages.TimeAxisImages.Transparent3Images.TransparentColorImages.TransparentGrayImages.TransparentRGBImages.WarpedViewImages.XYZImages.XYZAImages.YCbCrImages.YCbCrAImages.YIQImages.YIQAImages._adjust_gammaImages._calc_discrete_offsetsImages._claheImages._clahe_pixel_rescaleImages._clippedindsImages._discretize_angleImages._fillImages._gamma_pixel_rescaleImages._hist_match_pixelImages._histeq_pixel_rescaleImages._histmatchImages._imstretchImages._interp_offsetImages._lengthImages._logImages._meanfiniteImages._newindexerImages._replace_axisImages._sentinel_maxImages._sentinel_minImages.accumImages.adjust_gammaImages.adjust_histogramImages.adjust_histogram!Images.alphaImages.alphacolorImages.assert_timedim_lastImages.atindexImages.atvalueImages.axisdimImages.axisnamesImages.axisvaluesImages.axnametypeImages.backdiffxImages.backdiffyImages.base_color_typeImages.base_colorant_typeImages.bilinear_interpolationImages.blob_LoGImages.blueImages.bothatImages.boxdiffImages.build_histogramImages.cannyImages.ccolorImages.centerImages.centeredImages.channelviewImages.chkboundsImages.cie_color_matchImages.ciede2000Images.claheImages.clamp01Images.clamp01nanImages.clearborderImages.cliphistImages.closingImages.collapseImages.colorImages.color_typeImages.coloralphaImages.colordiffImages.colordimImages.colormapImages.colormatchImages.colorsignedImages.colorviewImages.comp1Images.comp2Images.comp3Images.complementImages.component_boxesImages.component_centroidsImages.component_indicesImages.component_lengthsImages.component_subscriptsImages.construct_pdfsImages.convexhullImages.coords_spatialImages.copypropertiesImages.corner2subpixelImages.dataImages.deuteranopicImages.difftypeImages.dilateImages.distance_transformImages.distinguishable_colorsImages.divImages.diverging_paletteImages.entropyImages.erodeImages.evalImages.fastcornersImages.feature_transformImages.find_root!Images.find_root_unsafe!Images.findlocalextremaImages.findlocalmaximaImages.findlocalminimaImages.float32Images.float64Images.forwarddiffxImages.forwarddiffyImages.gammacovsImages.gamutmaxImages.gamutminImages.gaussian_pyramidImages.getindex!Images.gradcovsImages.grayImages.graytypeImages.greenImages.harrisImages.hausdorffImages.heightImages.hexImages.histeqImages.histmatchImages.homogeneous_point_to_indicesImages.hysteresis_thresholdingImages.imROFImages.imadjustintensityImages.imaverageImages.imcornerImages.imcorner_subpixelImages.imedgeImages.imfilterImages.imfilter!Images.imgaussiannoiseImages.imgradientsImages.imhistImages.imlaplacianImages.imlineardiffusionImages.imresizeImages.imrotateImages.imstretchImages.includeImages.indices_spatialImages.integral_imageImages.intensitytypeImages.invwarpedviewImages.is_little_endianImages.istimeaxisImages.kernelfactorsImages.kitchen_rosenfeldImages.krImages.label_componentsImages.label_components!Images.labeltypeImages.loadImages.lookup_icdfImages.magnitudeImages.magnitude_phaseImages.mapcImages.mapreducecImages.mapwindowImages.mapwindow!Images.match_pdf!Images.maxabsfiniteImages.maxfiniteImages.maxfinite_scalarImages.meancovsImages.meanfiniteImages.minfiniteImages.minfinite_scalarImages.minlabelImages.modaxImages.modified_hausdorffImages.morphogradientImages.morpholaplaceImages.n0f16Images.n0f8Images.n2f14Images.n4f12Images.n6f10Images.nccImages.nimagesImages.normedviewImages.ofaxesImages.openingImages.orientationImages.otsu_thresholdImages.padarrayImages.paddedviewsImages.padindexesImages.partition_intervalImages.permuteddimsviewImages.phaseImages.pixelspacingImages.propertiesImages.protanopicImages.pyramid_scaleImages.rawviewImages.redImages.reducecImages.reflectImages.reinterpretcImages.replace_axisImages.restrictImages.sadImages.sadnImages.saveImages.scaledualImages.scaleminmaxImages.scalesignedImages.sdimsImages.sentinel_maxImages.sentinel_minImages.sequential_paletteImages.sharepropertiesImages.shepp_loganImages.shi_tomasiImages.size_spatialImages.spacedirectionsImages.spatialorderImages.spatialpropertiesImages.ssdImages.ssdnImages.sumdiffImages.sumfinite!Images.takemapImages.test_approx_eq_sigma_epsImages.thin_edgesImages.thin_edges_nonmaxsupImages.thin_edges_nonmaxsup!Images.thin_edges_nonmaxsup_core!Images.thin_edges_nonmaxsup_subpixImages.thin_edges_nonmaxsup_subpix!Images.thin_edges_subpixImages.thinningImages.timeaxisImages.timedimImages.tophatImages.transform_density!Images.tritanopicImages.union!Images.unsafe_neighbourhood_4Images.vecsumImages.warpImages.warpedviewImages.weighted_color_meanImages.whitebalanceImages.widthImages.widthheightImages.xyYImages.xyYAImages.yen_thresholdImages.zeroarray"
},

]}
