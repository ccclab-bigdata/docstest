var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "ImageFiltering.jl",
    "title": "ImageFiltering.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageFiltering.jl-1",
    "page": "ImageFiltering.jl",
    "title": "ImageFiltering.jl",
    "category": "section",
    "text": "ImageFiltering supports linear and nonlinear filtering operations on arrays, with an emphasis on the kinds of operations used in image processing. The core function is imfilter, and common kernels (filters) are organized in the Kernel and KernelFactors modules."
},

{
    "location": "#Demonstration-1",
    "page": "ImageFiltering.jl",
    "title": "Demonstration",
    "category": "section",
    "text": "Let\'s start with a simple example of linear filtering:julia> using ImageFiltering, TestImages\n\njulia> img = testimage(\"mandrill\");\n\njulia> imgg = imfilter(img, Kernel.gaussian(3));\n\njulia> imgl = imfilter(img, Kernel.Laplacian());When displayed, these three images look like this:(Image: filterintro)The most commonly used function for filtering is imfilter."
},

{
    "location": "#Linear-filtering:-noteworthy-features-1",
    "page": "ImageFiltering.jl",
    "title": "Linear filtering: noteworthy features",
    "category": "section",
    "text": "DocTestSetup = quote\n    using Colors, ImageFiltering, TestImages\n    img = testimage(\"mandrill\")\nend"
},

{
    "location": "#Correlation,-not-convolution-1",
    "page": "ImageFiltering.jl",
    "title": "Correlation, not convolution",
    "category": "section",
    "text": "ImageFiltering uses the following formula to calculate the filtered image F from an input image A and kernel K:FI = sum_J AI+J KJConsequently, the resulting image is the correlation, not convolution, of the input and the kernel. If you want the convolution, first call reflect on the kernel."
},

{
    "location": "#Kernel-indices-1",
    "page": "ImageFiltering.jl",
    "title": "Kernel indices",
    "category": "section",
    "text": "ImageFiltering exploits a feature introduced into Julia 0.5, the ability to define arrays whose indices span an arbitrary range:julia> Kernel.gaussian(1)\nOffsetArrays.OffsetArray{Float64,2,Array{Float64,2}} with indices -2:2×-2:2:\n 0.00296902  0.0133062  0.0219382  0.0133062  0.00296902\n 0.0133062   0.0596343  0.0983203  0.0596343  0.0133062\n 0.0219382   0.0983203  0.162103   0.0983203  0.0219382\n 0.0133062   0.0596343  0.0983203  0.0596343  0.0133062\n 0.00296902  0.0133062  0.0219382  0.0133062  0.00296902The indices of this array span the range -2:2 along each axis, and the center of the gaussian is at position [0,0].  As a consequence, this filter \"blurs\" but does not \"shift\" the image; were the center instead at, say, [3,3], the filtered image would be shifted by 3 pixels downward and to the right compared to the original.The centered function is a handy utility for converting an ordinary array to one that has coordinates [0,0,...] at its center position:julia> centered([1 0 1; 0 1 0; 1 0 1])\nOffsetArrays.OffsetArray{Int64,2,Array{Int64,2}} with indices -1:1×-1:1:\n 1  0  1\n 0  1  0\n 1  0  1See OffsetArrays for more information."
},

{
    "location": "#Factored-kernels-1",
    "page": "ImageFiltering.jl",
    "title": "Factored kernels",
    "category": "section",
    "text": "A key feature of Gaussian kernels–-along with many other commonly-used kernels–-is that they are separable, meaning that K[j_1,j_2,...] can be written as K_1j_1 K_2j_2 cdots. As a consequence, the correlationFi_1i_2 = sum_j_1j_2 Ai_1+j_1i_2+j_2 Kj_1j_2can be writtenFi_1i_2 = sum_j_2 left(sum_j_1 Ai_1+j_1i_2+j_2 K_1j_1right) K_2j_2If the kernel is of size m×n, then the upper version line requires mn operations for each point of filtered, whereas the lower version requires m+n operations. Especially when m and n are larger, this can result in a substantial savings.To enable efficient computation for separable kernels, imfilter accepts a tuple of kernels, filtering the image by each sequentially. You can either supply m×1 and 1×n filters directly, or (somewhat more efficiently) call kernelfactors on a tuple-of-vectors:julia> kern1 = centered([1/3, 1/3, 1/3])\nOffsetArrays.OffsetArray{Float64,1,Array{Float64,1}} with indices -1:1:\n 0.333333\n 0.333333\n 0.333333\n\njulia> kernf = kernelfactors((kern1, kern1))\n(ImageFiltering.KernelFactors.ReshapedOneD{Float64,2,0,OffsetArrays.OffsetArray{Float64,1,Array{Float64,1}}}([0.333333,0.333333,0.333333]),ImageFiltering.KernelFactors.ReshapedOneD{Float64,2,1,OffsetArrays.OffsetArray{Float64,1,Array{Float64,1}}}([0.333333,0.333333,0.333333]))\n\njulia> kernp = broadcast(*, kernf...)\nOffsetArrays.OffsetArray{Float64,2,Array{Float64,2}} with indices -1:1×-1:1:\n 0.111111  0.111111  0.111111\n 0.111111  0.111111  0.111111\n 0.111111  0.111111  0.111111\n\njulia> imfilter(img, kernf) ≈ imfilter(img, kernp)\ntrueIf the kernel is a two dimensional array, imfilter will attempt to factor it; if successful, it will use the separable algorithm. You can prevent this automatic factorization by passing the kernel as a tuple, e.g., as (kernp,)."
},

{
    "location": "#Popular-kernels-in-Kernel-and-KernelFactors-modules-1",
    "page": "ImageFiltering.jl",
    "title": "Popular kernels in Kernel and KernelFactors modules",
    "category": "section",
    "text": "The two modules Kernel and KernelFactors implement popular kernels in \"dense\" and \"factored\" forms, respectively. Type ?Kernel or ?KernelFactors at the REPL to see which kernels are supported.A common task in image processing and computer vision is computing image gradients (derivatives), for which there is the dedicated function imgradients."
},

{
    "location": "#Automatic-choice-of-FIR-or-FFT-1",
    "page": "ImageFiltering.jl",
    "title": "Automatic choice of FIR or FFT",
    "category": "section",
    "text": "For linear filtering with a finite-impulse response filtering, one can either choose a direct algorithm or one based on the fast Fourier transform (FFT).  By default, this choice is made based on kernel size. You can manually specify the algorithm using Algorithm.FFT() or Algorithm.FIR()."
},

{
    "location": "#Multithreading-1",
    "page": "ImageFiltering.jl",
    "title": "Multithreading",
    "category": "section",
    "text": "If you launch Julia with JULIA_NUM_THREADS=n (where n > 1), then FIR filtering will by default use multiple threads.  You can control the algorithm by specifying a resource as defined by ComputationalResources. For example, imfilter(CPU1(Algorithm.FIR()), img, ...) would force the computation to be single-threaded."
},

{
    "location": "#Arbitrary-operations-over-sliding-windows-1",
    "page": "ImageFiltering.jl",
    "title": "Arbitrary operations over sliding windows",
    "category": "section",
    "text": "This package also exports mapwindow, which allows you to pass an arbitrary function to operate on the values within a sliding window.mapwindow has optimized implementations for some functions (currently, extrema)."
},

{
    "location": "function_reference/#",
    "page": "Function reference",
    "title": "Function reference",
    "category": "page",
    "text": ""
},

{
    "location": "function_reference/#ImageFiltering.imfilter",
    "page": "Function reference",
    "title": "ImageFiltering.imfilter",
    "category": "function",
    "text": "imfilter([T], img, kernel, [border=\"replicate\"], [alg]) --> imgfilt\nimfilter([r], img, kernel, [border=\"replicate\"], [alg]) --> imgfilt\nimfilter(r, T, img, kernel, [border=\"replicate\"], [alg]) --> imgfilt\n\nFilter a one, two or multidimensional array img with a kernel by computing their correlation.\n\nDetails\n\nThe term filtering emerges in the context of a Fourier transformation of an image, which maps an image from its canonical spatial domain to its concomitant frequency domain. Manipulating an image in the frequency domain amounts to retaining or discarding particular frequency components—a process analogous to sifting or filtering [1].  Because the Fourier transform establishes a link between the spatial and frequency representation of an image, one can interpret various image manipulations in the spatial domain as filtering operations which accept or reject specific frequencies.\n\nThe phrase spatial filtering is often used to emphasise that an operation is, at least conceptually, devised in the context of the spatial domain of an image. One further distinguishes between linear and non-linear spatial filtering. A filter is called linear if the operation performed on the pixels is linear, and is labeled non-linear otherwise.\n\nAn image filter can be represented by a function\n\n w sin mathbbZ mid -k_1 le s le k_1   times  t in mathbbZ mid -k_2 le t le k_2     rightarrow mathbbR\n\nwhere k_i  in mathbbN (i = 1,2). It is common to define k_1 = 2a+1 and k_2 = 2b + 1, where a and b are integers, which ensures that the filter dimensions are of odd size. Typically, k_1 equals k_2 and so, dropping the subscripts, one speaks of a k times k filter. Since the domain of the filter represents a grid of spatial coordinates, the filter is often called a mask and is visualized as a grid. For example, a 3 times 3 mask can be potrayed as follows:\n\nscriptsize\nbeginmatrix\nboxed\nbeginmatrix\nphantomw(-9-9) \nw(-1-1) \nphantomw(-9-9) \nendmatrix\n\n\n\n\nboxed\nbeginmatrix\nphantomw(-9-9) \nw(-10) \nphantomw(-9-9) \nendmatrix\n\n \nboxed\nbeginmatrix\nphantomw(-9-9) \nw(-11) \nphantomw(-9-9) \nendmatrix\n\n\n\nboxed\nbeginmatrix\nphantomw(-9-9) \nw(0-1) \nphantomw(-9-9) \nendmatrix\n\n\n\n\nboxed\nbeginmatrix\nphantomw(-9-9) \nw(00) \nphantomw(-9-9) \nendmatrix\n\n \nboxed\nbeginmatrix\nphantomw(-9-9) \nw(01) \nphantomw(-9-9) \nendmatrix\n\n\n\nboxed\nbeginmatrix\nphantomw(-9-9) \nw(1-1) \nphantomw(-9-9) \nendmatrix\n\n\n\n\nboxed\nbeginmatrix\nphantomw(-9-9) \nw(10) \nphantomw(-9-9) \nendmatrix\n\n \nboxed\nbeginmatrix\nphantomw(-9-9) \nw(11) \nphantomw(-9-9) \nendmatrix\n\nendmatrix\n\nThe values of w(st) are referred to as filter coefficients.\n\nDiscrete convolution versus correlation\n\nThere are two fundamental and closely related operations that one regularly performs on an image with a filter. The operations are called discrete correlation and convolution.\n\nThe correlation operation, denoted by the symbol star,  is given in two dimensions by the expression\n\nbeginaligned\ng(xy) = w(xy) star f(xy) = sum_s = -a^a sum_t=-b^b w(st) f(x+s y+t)\nendaligned\n\nwhereas the comparable convolution operation, denoted by the symbol ast, is given in two dimensions by\n\nbeginaligned\nh(xy) = w(xy) ast f(xy) = sum_s = -a^a sum_t=-b^b w(st) f(x-s y-t)\nendaligned\n\nSince a digital image is of finite extent, both of these operations are undefined at the borders of the image. In particular, for an image of size M times N, the function f(x pm s y pm t) is only defined for 1 le x pm s le N and 1 le y pm t le M. In practice one addresses this problem by artificially expanding the domain of the image. For example, one can pad the image with zeros. Other padding strategies are possible, and they are discussed in more detail in the Options section of this documentation.\n\nOne-dimensional illustration\n\nThe difference between correlation and convolution is best understood with recourse to a one-dimensional example  adapted from [1]. Suppose that a filter w-101rightarrow mathbbR has coefficients\n\nbeginmatrix\nboxed1  boxed2  boxed3\nendmatrix\n\nConsider a discrete unit impulse function f x in mathbbZ mid 1 le x le 7   rightarrow 01  that has been padded with zeros. The function can be visualised as an image\n\nboxed\nbeginmatrix\n0  boxed0  boxed0  boxed0  boxed1  boxed0  boxed0  boxed0  0\nendmatrix\n\nThe correlation operation can be interpreted as sliding w along the image and computing the sum of products at each location. For example,\n\nbeginmatrix\n0  0  0  0  1  0  0  0  0 \n1  2  3         \n 1  2  3         \n  1  2  3        \n   1  2  3       \n    1  2  3      \n     1  2  3    \n      1  2  3\nendmatrix\n\nyields the output g x in mathbbZ mid 1 le x le 7   rightarrow mathbbR, which when visualized as a digital image, is equal to\n\nboxed\nbeginmatrix\nboxed0  boxed0  boxed3  boxed2  boxed1  boxed0  boxed0\nendmatrix\n\nThe interpretation of the convolution operation is analogous to correlation, except that the filter w has been rotated by 180 degrees. In particular,\n\nbeginmatrix\n0  0  0  0  1  0  0  0  0 \n3  2  1         \n 3  2  1         \n  3  2  1        \n   3  2  1       \n    3  2  1      \n     3  2  1    \n      3  2  1\nendmatrix\n\nyields the output h x in mathbbZ mid 1 le x le 7   rightarrow mathbbR equal to\n\nboxed\nbeginmatrix\nboxed0  boxed0  boxed1  boxed2  boxed3  boxed0  boxed0\nendmatrix\n\nInstead of rotating the filter mask, one could instead rotate f and still obtained the same convolution result. In fact, the conventional notation for convolution indicates that f is flipped and not w. If w is symmetric, then convolution and correlation give the same outcome.\n\nTwo-dimensional illustration\n\nFor a two-dimensional example, suppose the filter w-1 0 1 times  -101 rightarrow mathbbR  has coefficients\n\n beginmatrix\n boxed1  boxed2  boxed3  \n boxed4  boxed5  boxed6  \n boxed7  boxed8  boxed9\n endmatrix\n\nand consider a two-dimensional discrete unit impulse function\n\n fx in mathbbZ mid 1 le x le 7   times  y in mathbbZ mid 1 le y le 7  rightarrow  01\n\nthat has been padded with zeros:\n\n boxed\n beginmatrix\n   0         0          0          0           0          0     0   \n   0  boxed0  boxed0  boxed0   boxed0  boxed0    0   \n   0  boxed0  boxed0  boxed0   boxed0  boxed0    0  \n   0  boxed0  boxed0  boxed1   boxed0  boxed0    0  \n   0  boxed0  boxed0  boxed0   boxed0  boxed0    0  \n   0  boxed0  boxed0  boxed0   boxed0  boxed0    0  \n   0         0          0          0           0          0     0\n endmatrix\n\nThe correlation operation w(xy) star f(xy)  yields the output\n\n boxed\n beginmatrix\n boxed0  boxed0   boxed0  boxed0  boxed0  \n boxed0   boxed9  boxed8  boxed7  boxed0  \n boxed0   boxed6  boxed5  boxed4  boxed0  \n boxed0   boxed3  boxed2  boxed1  boxed0  \n boxed0  boxed0   boxed0  boxed0  boxed0\n endmatrix\n\nwhereas the convolution operation w(xy) ast f(xy) produces\n\n boxed\n beginmatrix\n boxed0  boxed0  boxed0  boxed0  boxed0  \n boxed0  boxed1  boxed2  boxed3  boxed0 \n boxed0  boxed4  boxed5  boxed6  boxed0  \n boxed0  boxed7  boxed8  boxed9  boxed0  \n boxed0  boxed0  boxed0  boxed0  boxed0\n endmatrix\n\nDiscrete convolution and correlation as matrix multiplication\n\nDiscrete convolution and correlation operations can also be formulated as a matrix multiplication, where one of the inputs is converted to a Toeplitz matrix, and the other is represented as a column vector. For example, consider a function fx in mathbbN mid 1 le x le M  rightarrow mathbbR and a filter w s in mathbbN mid  -k_1 le s le k_1   rightarrow mathbbR. Then the matrix multiplication\n\nbeginbmatrix\nw(-k_1) 	  0	     ldots	 0		    0			\nvdots 	 w(-k_1) 	 ldots	 vdots   0	        \nw(k_1) 	     vdots    ldots	 0		    vdots    \n0 	    	 w(k_1)	 ldots    w(-k_1)   0		    \n0 	         0		     ldots	 vdots   w(-k_1)	\nvdots      vdots	 ldots	 w(k_1)    vdots	\n0            0          0			 0		    w(k_1)\nendbmatrix\nbeginbmatrix\nf(1) \nf(2) \nf(3) \nvdots \nf(M)\nendbmatrix\n\nis equivalent to the convolution w(s) ast f(x) assuming that the border of f(x) has been padded with zeros.\n\nTo represent multidimensional convolution as matrix multiplication one reshapes the multidimensional arrays into column vectors and proceeds in an analogous manner. Naturally, the result of the matrix multiplication will need to be reshaped into an appropriate multidimensional array.\n\nOptions\n\nThe following subsections describe valid options for the function arguments in more detail.\n\nChoices for r\n\nYou can dispatch to different implementations by passing in a resource r as defined by the ComputationalResources package. For example,\n\n    imfilter(ArrayFireLibs(), img, kernel)\n\nwould request that the computation be performed on the GPU using the ArrayFire libraries.\n\nChoices for T\n\nOptionally, you can control the element type of the output image by passing in a type T as the first argument.\n\nChoices for img\n\nYou can specify a one, two or multidimensional array defining your image.\n\nChoices for kernel\n\nThe kernel[0,0,..] parameter corresponds to the origin (zero displacement) of the kernel; you can use centered to place the origin at the array center, or use the OffsetArrays package to set kernel\'s indices manually. For example, to filter with a random centered 3x3 kernel, you could use either of the following:\n\nkernel = centered(rand(3,3))\nkernel = OffsetArray(rand(3,3), -1:1, -1:1)\n\nThe kernel parameter can be specified as an array or as a \"factored kernel\", a tuple (filt1, filt2, ...) of filters to apply along each axis of the image. In cases where you know your kernel is separable, this format can speed processing. Each of these should have the same dimensionality as the image itself, and be shaped in a manner that indicates the filtering axis, e.g., a 3x1 filter for filtering the first dimension and a 1x3 filter for filtering the second dimension. In two dimensions, any kernel passed as a single matrix is checked for separability; if you want to eliminate that check, pass the kernel as a single-element tuple, (kernel,).\n\nChoices for border\n\nAt the image edge, border is used to specify the padding which will be used to extrapolate the image beyond its original bounds. As an indicative example of each option the results of the padding are illustrated on an image consisting of a row of six pixels which are specified alphabetically: boxeda  b  c  d  e  f. We show the effects of padding only on the left and right border, but analogous consequences hold for the top and bottom border.\n\n\"replicate\" (default)\n\nThe border pixels extend beyond the image boundaries.\n\nboxed\nbeginarraylcr\n  a a a a    a  b  c  d  e  f  f  f  f  f\nendarray\n\n\nSee also: Pad, padarray, Inner, NA  and NoPad\n\n\"circular\"\n\nThe border pixels wrap around. For instance, indexing beyond the left border returns values starting from the right border.\n\nboxed\nbeginarraylcr\n  c d e f    a  b  c  d  e  f  a  b  c  d\nendarray\n\n\nSee also: Pad, padarray, Inner, NA  and NoPad\n\n\"symmetric\"\n\nThe border pixels reflect relative to a position between pixels. That is, the border pixel is omitted when mirroring.\n\nboxed\nbeginarraylcr\n  e d c b    a  b  c  d  e  f  e  d  c  b\nendarray\n\n\nSee also: Pad, padarray, Inner, NA  and NoPad\n\n\"reflect\"\n\nThe border pixels reflect relative to the edge itself.\n\nboxed\nbeginarraylcr\n  d c b a    a  b  c  d  e  f  f  e  d  c\nendarray\n\n\nSee also: Pad, padarray, Inner, NA  and NoPad\n\nFill(m)\n\nThe border pixels are filled with a specified value m.\n\nboxed\nbeginarraylcr\n  m m m m    a  b  c  d  e  f  m  m  m  m\nendarray\n\n\nSee also: Pad, padarray, Inner, NA  and NoPad\n\nInner()\n\nIndicate that edges are to be discarded in filtering, only the interior of the result is to be returned.\n\nSee also: Pad, padarray, Inner, NA  and NoPad\n\nNA()\n\nChoose filtering using \"NA\" (Not Available) boundary conditions. This is most appropriate for filters that have only positive weights, such as blurring filters.\n\nSee also: Pad, padarray, Inner, NA  and NoPad\n\nChoices for alg\n\nThe alg parameter allows you to choose the particular algorithm: FIR() (finite impulse response, aka traditional digital filtering) or FFT() (Fourier-based filtering). If no choice is specified, one will be chosen based on the size of the image and kernel in a way that strives to deliver good performance. Alternatively you can use a custom filter type, like KernelFactors.IIRGaussian.\n\nExamples\n\nThe following subsections highlight some common use cases.\n\nConvolution versus correlation\n\n\n# Create a two-dimensional discrete unit impulse function.\nf = fill(0,(9,9));\nf[5,5] = 1;\n\n# Specify a filter coefficient mask and set the center of the mask as the origin.\nw = centered([1 2 3; 4 5 6 ; 7 8 9]);\n\n#=\n The default operation of `imfilter` is correlation.  By reflecting `w` we\n compute the convolution of `f` and `w`.  `Fill(0,w)` indicates that we wish to\n pad the border of `f` with zeros. The amount of padding is automatically\n determined by considering the length of w.\n=#\ncorrelation = imfilter(f,w,Fill(0,w))\nconvolution = imfilter(f,reflect(w),Fill(0,w))\n\n\nMiscellaneous border padding options\n\n# Example function values f, and filter coefficients w.\nf = reshape(1.0:81.0,9,9)\nw = centered(reshape(1.0:9.0,3,3))\n\n# You can designate the type of padding by specifying an appropriate string.\nimfilter(f,w,\"replicate\")\nimfilter(f,w,\"circular\")\nimfilter(f,w,\"symmetric\")\nimfilter(f,w,\"reflect\")\n\n# Alternatively, you can explicitly use the Pad type to designate the padding style.\nimfilter(f,w,Pad(:replicate))\nimfilter(f,w,Pad(:circular))\nimfilter(f,w,Pad(:symmetric))\nimfilter(f,w,Pad(:reflect))\n\n# If you want to pad with a specific value then use the Fill type.\nimfilter(f,w,Fill(0,w))\nimfilter(f,w,Fill(1,w))\nimfilter(f,w,Fill(-1,w))\n\n#=\n  Specify \'Inner()\' if you want to retrieve the interior sub-array of f for which\n  the filtering operation is defined without padding.\n=#\nimfilter(f,w,Inner())\n\nReferences\n\nR. C. Gonzalez and R. E. Woods. Digital Image Processing (3rd Edition).  Upper Saddle River, NJ, USA: Prentice-Hall,  2006.\n\nSee also: imfilter!, centered, padarray, Pad, Fill, Inner, KernelFactors.IIRGaussian.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.imfilter!",
    "page": "Function reference",
    "title": "ImageFiltering.imfilter!",
    "category": "function",
    "text": "imfilter!(imgfilt, img, kernel, [border=\"replicate\"], [alg])\nimfilter!(r, imgfilt, img, kernel, border, [inds])\nimfilter!(r, imgfilt, img, kernel, border::NoPad, [inds=axes(imgfilt)])\n\nFilter an array img with kernel kernel by computing their correlation, storing the result in imgfilt.\n\nThe indices of imgfilt determine the region over which the filtered image is computed–-you can use this fact to select just a specific region of interest, although be aware that the input img might still get padded.  Alteratively, explicitly provide the indices inds of imgfilt that you want to calculate, and use NoPad boundary conditions. In such cases, you are responsible for supplying appropriate padding: img must be indexable for all of the locations needed for calculating the output. This syntax is best-supported for FIR filtering; in particular, that that IIR filtering can lead to results that are inconsistent with respect to filtering the entire array.\n\nSee also: imfilter.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.imgradients",
    "page": "Function reference",
    "title": "ImageFiltering.imgradients",
    "category": "function",
    "text": "    imgradients(img, kernelfun=KernelFactors.ando3, border=\"replicate\") -> gimg1, gimg2, ...\n\nEstimate the gradient of img in the direction of the first and second dimension at all points of the image, using a kernel specified by kernelfun.\n\nOutput\n\nThe gradient is returned as a tuple-of-arrays, one for each dimension of the input; gimg1 corresponds to the derivative with respect to the first dimension, gimg2 to the second, and so on.\n\nDetails\n\nTo appreciate the difference between various gradient estimation methods it is helpful to distinguish between: (1) a continuous scalar-valued analogue image f_textrmA(x_1x_2), where x_1x_2 in mathbbR, and (2) its discrete digital realization f_textrmD(x_1x_2), where x_1x_2 in mathbbN, 1 le x_1 le M and 1 le x_2 le N.\n\nAnalogue image\n\nThe gradient of a continuous analogue image f_textrmA(x_1x_2) at location (x_1x_2) is defined as the vector\n\nnabla mathbff_textrmA(x_1x_2) = fracpartial\nf_textrmA(x_1x_2)partial x_1 mathbfe_1 +\nfracpartial f_textrmA(x_1x_2)partial x_2 mathbfe_2\n\nwhere mathbfe_d (d = 12) is the unit vector in the x_d-direction. The gradient points in the direction of maximum rate of change of f_textrmA at the coordinates (x_1x_2). The gradient can be used to compute the derivative of a function in an arbitrary direction. In particular, the derivative of f_textrmA in the direction of a unit vector mathbfu is given by nabla_mathbfuf_textrmA(x_1x_2) = nabla mathbff_textrmA(x_1x_2) cdot mathbfu, where cdot denotes the dot product.\n\nDigital image\n\nIn practice, we acquire a digital image f_textrmD(x_1x_2) where the light intensity is known only at a discrete set of locations. This means that the required partial derivatives are undefined and need to be approximated using discrete difference formulae [1].\n\nA straightforward way to approximate the partial derivatives is to use central-difference formulae\n\n fracpartial f_textrmD(x_1x_2)partial x_1  approx\n        fracf_textrmD(x_1+1x_2) - f_textrmD(x_1-1x_2) 2\n\nand\n\n fracpartial f_textrmD(x_1x_2)partial x_2   approx\n         fracf_textrmD(x_1x_2+1) - f_textrmD(x_1x_2+1)2\n\nHowever, the central-difference formulae are very sensitive to noise. When working with noisy image data, one can obtain a better approximation of the partial derivatives by using a suitable weighted combination of the neighboring image intensities. The weighted combination can be represented as a discrete convolution operation between the image and a kernel which characterizes the requisite weights. In particular, if h_x_d (d = 12) represents a 2r+1 times 2r+1 kernel, then\n\n fracpartial f_textrmD(x_1x_2)partial x_d  approx\nsum_i = -r^r sum_j = -r^r\nf_textrmD(x_1-ix_2-j)\n  h_x_d(ij)\n\nThe kernel is frequently also called a mask or convolution matrix.\n\nWeighting schemes and approximation error\n\nThe choice of weights determines the magnitude of the approximation error and whether the finite-difference scheme is isotropic. A finite-difference scheme is isotropic if the approximation error does not depend on the orientation of the coordinate system and anisotropic if the approximation error has a directional bias [2]. With a continuous analogue image the magnitude of the gradient would be invariant upon rotation of the coordinate system, but in practice one cannot obtain perfect isotropy with a finite set of discrete points. Hence a finite-difference scheme is typically considered isotropic if the leading error term in the approximation does not have preferred directions.\n\nMost finite-difference schemes that are used in image processing are based on 3 times 3 kernels, and as noted by [7], many can also be parametrized by a single parameter alpha as follows:\n\nmathbfH_x_1 =\nfrac14 + 2alpha\nbeginbmatrix\n-1  -alpha  -1 \n0  0  0 \n 1  alpha  1\nendbmatrix\nquad\ntextand\nquad\nmathbfH_x_2 =\nfrac12 + 4alpha\nbeginbmatrix\n-1  0  1 \n-alpha  0  alpha \n -1  0  1\nendbmatrix\n\nwhere\n\nalpha =\nbegincases\n0   textSimple Finite Difference \n1   textPrewitt \n2   textSobel \n24351   textAndo \nfrac103   textScharr \n4   textBickley\nendcases\n\nSeparable kernel\n\nA kernel is called separable if it can be expressed as the convolution of two one-dimensional filters. With a matrix representation of the kernel, separability means that the kernel matrix can be written as an outer product of two vectors. Separable kernels offer computational advantages since instead of performing a two-dimensional convolution one can perform a sequence of one-dimensional convolutions.\n\nOptions\n\nYou can specify your choice of the finite-difference scheme via the kernelfun parameter. You can also indicate how to deal with the pixels on the border of the image with the border parameter.\n\nChoices for kernelfun\n\nIn general kernelfun can be any function which satisfies the following interface:\n\n    kernelfun(extended::NTuple{N,Bool}, d) -> kern_d,\n\nwhere kern_d is the kernel for producing the derivative with respect to the dth dimension of an N-dimensional array. The parameter extended[i] is true if the image is of size > 1 along dimension i. The parameter kern_d may be provided as a dense or factored kernel, with factored representations recommended when the kernel is separable.\n\nSome valid kernelfun options are described below.\n\nKernelFactors.prewitt\n\nWith the prewit option [3] the computation of the gradient is based on the kernels\n\nbeginaligned\nmathbfH_x_1  = frac16\n    beginbmatrix\n    -1  -1  -1 \n    0  0  0 \n    1  1  1\n    endbmatrix\n\nmathbfH_x_2  =  frac16\n    beginbmatrix\n    -1  0  1 \n    -1  0  1 \n    -1  0  1\n    endbmatrix \n = frac16\n    beginbmatrix\n    1 \n    1  \n    1\n    endbmatrix\n    beginbmatrix\n    -1  0  1\n    endbmatrix\n\n = frac16\n    beginbmatrix\n    -1 \n    0  \n    1\n    endbmatrix\n    beginbmatrix\n    1  1  1\n    endbmatrix\nendaligned\n\nSee also: KernelFactors.prewitt and Kernel.prewitt\n\nKernelFactors.sobel\n\nThe sobel option [4] designates the kernels\n\nbeginaligned\nmathbfH_x_1  = frac18\n    beginbmatrix\n    -1  -2  -1 \n     0  0  0 \n     1  2  1\n    endbmatrix\n\nmathbfH_x_2  = frac18\n    beginbmatrix\n    -1  0  1 \n    -2  0  2 \n    -1  0  1\n    endbmatrix \n = frac18\n    beginbmatrix\n    -1 \n    0  \n    1\n    endbmatrix\n    beginbmatrix\n    1  2  1\n    endbmatrix\n\n = frac18\n    beginbmatrix\n    1 \n    2  \n    1\n    endbmatrix\n    beginbmatrix\n    -1  0  1\n    endbmatrix\nendaligned\n\nSee also:  KernelFactors.sobel and Kernel.sobel\n\nKernelFactors.ando3\n\nThe ando3 option [5] specifies the kernels\n\nbeginaligned\nmathbfH_x_1   =\n    beginbmatrix\n    -0112737  -0274526  -0112737 \n     0  0  0 \n     0112737  0274526  0112737\n    endbmatrix\n\nmathbfH_x_2   =\n    beginbmatrix\n    -0112737  0  0112737 \n    -0274526  0  0274526 \n    -0112737  0  0112737\n    endbmatrix \n  = beginbmatrix\n    -1 \n    0  \n    1\n    endbmatrix\n    beginbmatrix\n    0112737  0274526  0112737\n    endbmatrix\n\n  = beginbmatrix\n    0112737 \n    0274526  \n    0112737\n    endbmatrix\n    beginbmatrix\n    -1  0  1\n    endbmatrix\nendaligned\n\nSee also:  KernelFactors.ando3, and Kernel.ando3;  KernelFactors.ando4, and Kernel.ando4; KernelFactors.ando5, and Kernel.ando5\n\nKernelFactors.scharr\n\nThe scharr option [6] designates the kernels\n\nbeginaligned\nmathbfH_x_1  =\nfrac132\nbeginbmatrix\n-3  -10  -3 \n0  0  0 \n 3  10  3\nendbmatrix\n\nmathbfH_x_2  =\nfrac132\nbeginbmatrix\n-3  0  3 \n-10  0  10\n-3  0  3\nendbmatrix \n = frac132\nbeginbmatrix\n    -1 \n    0  \n    1\nendbmatrix\nbeginbmatrix\n    3  10  3\nendbmatrix\n\n = frac132\nbeginbmatrix\n    3 \n    10  \n    3\nendbmatrix\nbeginbmatrix\n    -1  0  1\nendbmatrix\nendaligned\n\nSee also:  KernelFactors.scharr and Kernel.scharr\n\nKernelFactors.bickley\n\nThe bickley option [7,8] designates the kernels\n\nbeginaligned\nmathbfH_x_1  = frac18\n    beginbmatrix\n        -1  -4  -1 \n         0  0  0 \n         1  4  1\n    endbmatrix\n\nmathbfH_x_2  = frac18\n    beginbmatrix\n        -1  0  1 \n        -4  0  4 \n        -1  0  1\n    endbmatrix \n = frac18\n    beginbmatrix\n        -1 \n        0  \n        1\n    endbmatrix\n    beginbmatrix\n        1  4  1\n    endbmatrix\n\n  = frac18\n   beginbmatrix\n        1 \n        4  \n        1\n   endbmatrix\n   beginbmatrix\n        -1  0  1\n   endbmatrix\nendaligned\n\nSee also:  KernelFactors.bickley and Kernel.bickley\n\nChoices for border\n\nAt the image edge, border is used to specify the padding which will be used to extrapolate the image beyond its original bounds. As an indicative example of each option the results of the padding are illustrated on an image consisting of a row of six pixels which are specified alphabetically: boxeda  b  c  d  e  f. We show the effects of padding only on the left and right border, but analogous consequences hold for the top and bottom border.\n\n\"replicate\"\n\nThe border pixels extend beyond the image boundaries.\n\nboxed\nbeginarraylcr\n  a a a a    a  b  c  d  e  f  f  f  f  f\nendarray\n\n\nSee also: Pad, padarray, Inner and NoPad\n\n\"circular\"\n\nThe border pixels wrap around. For instance, indexing beyond the left border returns values starting from the right border.\n\nboxed\nbeginarraylcr\n  c d e f    a  b  c  d  e  f  a  b  c  d\nendarray\n\n\nSee also: Pad, padarray, Inner and NoPad\n\n\"symmetric\"\n\nThe border pixels reflect relative to a position between pixels. That is, the border pixel is omitted when mirroring.\n\nboxed\nbeginarraylcr\n  e d c b    a  b  c  d  e  f  e  d  c  b\nendarray\n\n\nSee also: Pad, padarray, Inner and NoPad\n\n\"reflect\"\n\nThe border pixels reflect relative to the edge itself.\n\nboxed\nbeginarraylcr\n  d c b a    a  b  c  d  e  f  f  e  d  c\nendarray\n\n\nSee also: Pad, padarray, Inner and NoPad\n\nExample\n\nThis example compares the quality of the gradient estimation methods in terms of the accuracy with which the orientation of the gradient is estimated.\n\nusing Images\n\nvalues = linspace(-1,1,128);\nw = 1.6*pi;\n\n# Define a function of a sinusoidal grating, f(x,y) = sin( (w*x)^2 + (w*y)^2 ),\n# together with its exact partial derivatives.\nI = [sin( (w*x)^2 + (w*y)^2 ) for y in values, x in values];\nIx = [2*w*x*cos( (w*x)^2 + (w*y)^2 ) for y in values, x in values];\nIy = [2*w*y*cos( (w*x)^2 + (w*y)^2 ) for y in values, x in values];\n\n# Determine the exact orientation of the gradients.\ndirection_true = atan.(Iy./Ix);\n\nfor kernelfunc in (KernelFactors.prewitt, KernelFactors.sobel,\n                   KernelFactors.ando3, KernelFactors.scharr,\n                   KernelFactors.bickley)\n\n    # Estimate the gradients and their orientations.\n    Gy, Gx = imgradients(I,kernelfunc, \"replicate\");\n    direction_estimated = atan.(Gy./Gx);\n\n    # Determine the mean absolute deviation between the estimated and true\n    # orientation. Ignore the values at the border since we expect them to be\n    # erroneous.\n    error = mean(abs.(direction_true[2:end-1,2:end-1] -\n                     direction_estimated[2:end-1,2:end-1]));\n\n    error = round(error,5);\n    println(\"Using $kernelfunc results in a mean absolute deviation of $error\")\nend\n\n# output\n\nUsing ImageFiltering.KernelFactors.prewitt results in a mean absolute deviation of 0.01069\nUsing ImageFiltering.KernelFactors.sobel results in a mean absolute deviation of 0.00522\nUsing ImageFiltering.KernelFactors.ando3 results in a mean absolute deviation of 0.00365\nUsing ImageFiltering.KernelFactors.scharr results in a mean absolute deviation of 0.00126\nUsing ImageFiltering.KernelFactors.bickley results in a mean absolute deviation of 0.00038\n\nReferences\n\nB. Jahne, Digital Image Processing (5th ed.). Springer Publishing Company, Incorporated, 2005. 10.1007/3-540-27563-0\nM. Patra  and  M. Karttunen, \"Stencils with isotropic discretization error for differential operators,\" Numer. Methods Partial Differential Eq., vol. 22, pp. 936–953, 2006. doi:10.1002/num.20129\nJ. M. Prewitt, \"Object enhancement and extraction,\" Picture processing and Psychopictorics, vol. 10, no. 1, pp. 15–19, 1970.\nP.-E. Danielsson and O. Seger, \"Generalized and separable sobel operators,\" in  Machine Vision for Three-Dimensional Scenes,  H. Freeman, Ed.  Academic Press, 1990,  pp. 347–379. doi:10.1016/b978-0-12-266722-0.50016-6\nS. Ando, \"Consistent gradient operators,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no.3, pp. 252–265, 2000. doi:10.1109/34.841757\nH. Scharr and  J. Weickert, \"An anisotropic diffusion algorithm with optimized rotation invariance,\" Mustererkennung 2000, pp. 460–467, 2000. doi:10.1007/978-3-642-59802-9_58\nA. Belyaev, \"Implicit image differentiation and filtering with applications to image sharpening,\" SIAM Journal on Imaging Sciences, vol. 6, no. 1, pp. 660–679, 2013. doi:10.1137/12087092x\nW. G. Bickley, \"Finite difference formulae for the square lattice,\" The Quarterly Journal of Mechanics and Applied Mathematics, vol. 1, no. 1, pp. 35–42, 1948.  doi:10.1093/qjmam/1.1.35\n\n\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.MapWindow.mapwindow",
    "page": "Function reference",
    "title": "ImageFiltering.MapWindow.mapwindow",
    "category": "function",
    "text": "mapwindow(f, img, window; [border=\"replicate\"], [indices=axes(img)]) -> imgf\n\nApply f to sliding windows of img, with window size or axes specified by window. For example, mapwindow(median!, img, window) returns an Array of values similar to img (median-filtered, of course), whereas mapwindow(extrema, img, window) returns an Array of (min,max) tuples over a window of size window centered on each point of img.\n\nThe function f receives a buffer buf for the window of data surrounding the current point. If window is specified as a Dims-tuple (tuple-of-integers), then all the integers must be odd and the window is centered around the current image point. For example, if window=(3,3), then f will receive an Array buf corresponding to offsets (-1:1, -1:1) from the imgf[i,j] for which this is currently being computed. Alternatively, window can be a tuple of AbstractUnitRanges, in which case the specified ranges are used for buf; this allows you to use asymmetric windows if needed.\n\nborder specifies how the edges of img should be handled; see imfilter for details.\n\nFinally indices allows to omit unnecessary computations, if you want to do things like mapwindow on a subimage, or a strided variant of mapwindow. It works as follows:\n\nmapwindow(f, img, window, indices=(2:5, 1:2:7)) == mapwindow(f,img,window)[2:5, 1:2:7]\n\nExcept more efficiently because it omits computation of the unused values.\n\nFor functions that can only take AbstractVector inputs, you might have to first specialize default_shape:\n\nf = v->quantile(v, 0.75)\nImageFiltering.MapWindow.default_shape(::typeof(f)) = vec\n\nand then mapwindow(f, img, (m,n)) should filter at the 75th quantile.\n\nSee also: imfilter.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.MapWindow.mapwindow!",
    "page": "Function reference",
    "title": "ImageFiltering.MapWindow.mapwindow!",
    "category": "function",
    "text": "mapwindow!(f, out, img, window; border=\"replicate\", indices=axes(img))\n\nVariant of mapwindow, with preallocated output. If out and img have overlapping memory regions, behaviour is undefined.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#Filtering-functions-1",
    "page": "Function reference",
    "title": "Filtering functions",
    "category": "section",
    "text": "imfilter\nimfilter!\nimgradients\nmapwindow\nmapwindow!"
},

{
    "location": "function_reference/#ImageFiltering.Kernel",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel",
    "category": "module",
    "text": "Kernel is a module implementing filtering kernels of full dimensionality. The following kernels are supported:\n\nsobel\nprewitt\nando3, ando4, and ando5\nscharr\nbickley\ngaussian\nDoG (Difference-of-Gaussian)\nLoG (Laplacian-of-Gaussian)\nLaplacian\ngabor\n\nSee also: KernelFactors.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.sobel",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.sobel",
    "category": "function",
    "text": "    diff1, diff2 = sobel()\n\nReturn 3 times 3 kernels for two-dimensional gradient compution using the Sobel operator. The diff1 kernel computes the gradient along the y-axis (first dimension), and the diff2 kernel computes the gradient along the x-axis (second dimension).\n\nCitation\n\nP.-E. Danielsson and O. Seger, \"Generalized and separable sobel operators,\" in  Machine Vision for Three-Dimensional Scenes,  H. Freeman, Ed.  Academic Press, 1990,  pp. 347–379. doi:10.1016/b978-0-12-266722-0.50016-6\n\nSee also: KernelFactors.sobel, Kernel.prewitt, Kernel.ando3, Kernel.scharr, Kernel.bickley and imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.prewitt",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.prewitt",
    "category": "function",
    "text": "    diff1, diff2 = prewitt()\n\nReturn 3 times 3 kernels for two-dimensional gradient compution using the Prewitt operator.  The diff1 kernel computes the gradient along the y-axis (first dimension), and the diff2 kernel computes the gradient along the x-axis (second dimension).\n\nCitation\n\nJ. M. Prewitt, \"Object enhancement and extraction,\" Picture processing and Psychopictorics, vol. 10, no. 1, pp. 15–19, 1970.\n\nSee also: KernelFactors.prewitt, Kernel.sobel, Kernel.ando3, Kernel.scharr,Kernel.bickley and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.ando3",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.ando3",
    "category": "function",
    "text": "    diff1, diff2 = ando3()\n\nReturn 3 times 3 for two-dimensional gradient compution using  Ando\'s \"optimal\" filters. The diff1 kernel computes the gradient along the y-axis (first dimension), and the diff2 kernel computes the gradient along the x-axis (second dimension).\n\nCitation\n\nS. Ando, \"Consistent gradient operators,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no.3, pp. 252–265, 2000. doi:10.1109/34.841757\n\nSee also: KernelFactors.ando3, Kernel.ando4, Kernel.ando5 and  ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.ando4",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.ando4",
    "category": "function",
    "text": "    diff1, diff2 = ando4()\n\nReturn 4 times 4 kernels for two-dimensional gradient compution using Ando\'s \"optimal\" filters.  The diff1 kernel computes the gradient along the y-axis (first dimension), and  the diff2 kernel computes the gradient along the x-axis (second dimension).\n\nCitation\n\nS. Ando, \"Consistent gradient operators,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no.3, pp. 252–265, 2000. doi:10.1109/34.841757\n\nSee also: KernelFactors.ando4, Kernel.ando3, Kernel.ando5 and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.ando5",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.ando5",
    "category": "function",
    "text": "    diff1, diff2 = ando5()\n\nReturn 5 times 5 kernels for two-dimensional gradient compution using Ando\'s \"optimal\" filters. The diff1 kernel computes the gradient along the y-axis (first dimension), and the diff2 kernel computes the gradient along the x-axis (second dimension).\n\nCitation\n\nS. Ando, \"Consistent gradient operators,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no.3, pp. 252–265, 2000. doi:10.1109/34.841757\n\nSee also: KernelFactors.ando5, Kernel.ando3, Kernel.ando4 and  ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.bickley",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.bickley",
    "category": "function",
    "text": "    diff1, diff2 = bickley()\n\nReturn 3 times 3 kernels for two-dimensional gradient compution using the Bickley operator. The diff1 kernel computes the gradient along the y-axis (first dimension), and the diff2 kernel computes the gradient along the x-axis (second dimension).\n\nCitation\n\nW. G. Bickley, \"Finite difference formulae for the square lattice,\" The Quarterly Journal of Mechanics and Applied Mathematics, vol. 1, no. 1, pp. 35–42, 1948.  doi:10.1093/qjmam/1.1.35\n\nSee also: KernelFactors.bickley, Kernel.prewitt, Kernel.ando3,  Kernel.scharr and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.scharr",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.scharr",
    "category": "function",
    "text": "    diff1, diff2 = scharr()\n\nReturn 3 times 3 kernels for two-dimensional gradient compution using the Scharr operator. The diff1 kernel computes the gradient along the y-axis (first dimension), and the diff2 kernel  computes the gradient along the x-axis (second dimension).\n\nCitation\n\nH. Scharr and  J. Weickert, \"An anisotropic diffusion algorithm with optimized rotation invariance,\" Mustererkennung 2000, pp. 460–467, 2000. doi:10.1007/978-3-642-59802-9_58\n\nSee also: KernelFactors.scharr, Kernel.prewitt, Kernel.ando3, Kernel.bickley and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.gaussian",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.gaussian",
    "category": "function",
    "text": "gaussian((σ1, σ2, ...), [(l1, l2, ...)]) -> g\ngaussian(σ)                  -> g\n\nConstruct a multidimensional gaussian filter, with standard deviation σd along dimension d. Optionally provide the kernel length l, which must be a tuple of the same length.\n\nIf σ is supplied as a single number, a symmetric 2d kernel is constructed.\n\nSee also: KernelFactors.gaussian.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.DoG",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.DoG",
    "category": "function",
    "text": "DoG((σp1, σp2, ...), (σm1, σm2, ...), [l1, l2, ...]) -> k\nDoG((σ1, σ2, ...))                                   -> k\nDoG(σ::Real)                                         -> k\n\nConstruct a multidimensional difference-of-gaussian kernel k, equal to gaussian(σp, l)-gaussian(σm, l).  When only a single σ is supplied, the default is to choose σp = σ, σm = √2 σ. Optionally provide the kernel length l; the default is to extend by two max(σp,σm) in each direction from the center. l must be odd.\n\nIf σ is provided as a single number, a symmetric 2d DoG kernel is returned.\n\nSee also: KernelFactors.IIRGaussian.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.LoG",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.LoG",
    "category": "function",
    "text": "LoG((σ1, σ2, ...)) -> k\nLoG(σ)             -> k\n\nConstruct a Laplacian-of-Gaussian kernel k. σd is the gaussian width along dimension d.  If σ is supplied as a single number, a symmetric 2d kernel is returned.\n\nSee also: KernelFactors.IIRGaussian and Kernel.Laplacian.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.Laplacian",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.Laplacian",
    "category": "type",
    "text": "Laplacian((true,true,false,...))\nLaplacian(dims, N)\nLaplacian()\n\nLaplacian kernel in N dimensions, taking derivatives along the directions marked as true in the supplied tuple. Alternatively, one can pass dims, a listing of the dimensions for differentiation. (However, this variant is not inferrable.)\n\nLaplacian() is the 2d laplacian, equivalent to Laplacian((true,true)).\n\nThe kernel is represented as an opaque type, but you can use convert(AbstractArray, L) to convert it into array format.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#Kernel-1",
    "page": "Function reference",
    "title": "Kernel",
    "category": "section",
    "text": "Kernel\nKernel.sobel\nKernel.prewitt\nKernel.ando3\nKernel.ando4\nKernel.ando5\nKernel.bickley\nKernel.scharr\nKernel.gaussian\nKernel.DoG\nKernel.LoG\nKernel.Laplacian"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors",
    "category": "module",
    "text": "KernelFactors is a module implementing separable filtering kernels, each stored in terms of their factors. The following kernels are supported:\n\nsobel\nprewitt\nando3, ando4, and ando5 (the latter in 2d only)\nscharr\nbickley\ngaussian\nIIRGaussian (approximate gaussian filtering, fast even for large σ)\n\nSee also: Kernel.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.sobel",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.sobel",
    "category": "function",
    "text": "    kern1, kern2 = sobel()\n\nReturn factored  Sobel filters for dimensions 1 and 2 of a two-dimensional image. Each is a 2-tuple of one-dimensional filters.\n\nCitation\n\nP.-E. Danielsson and O. Seger, \"Generalized and separable sobel operators,\" in  Machine Vision for Three-Dimensional Scenes,  H. Freeman, Ed.  Academic Press, 1990,  pp. 347–379. doi:10.1016/b978-0-12-266722-0.50016-6\n\nSee also: Kernel.sobel  and ImageFiltering.imgradients.\n\n\n\n\n\n    kern = sobel(extended::NTuple{N,Bool}, d)\n\nReturn a factored Sobel filter for computing the gradient in N dimensions along axis d. If extended[dim] is false, kern will have size 1 along that dimension.\n\nSee also: Kernel.sobel and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.prewitt",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.prewitt",
    "category": "function",
    "text": "    kern1, kern2 = prewitt()\n\nReturn factored Prewitt filters for dimensions 1 and 2 of your image. Each is a 2-tuple of one-dimensional filters.\n\nCitation\n\nJ. M. Prewitt, \"Object enhancement and extraction,\" Picture processing and Psychopictorics, vol. 10, no. 1, pp. 15–19, 1970.\n\nSee also: Kernel.prewitt and ImageFiltering.imgradients.\n\n\n\n\n\n    kern = prewitt(extended::NTuple{N,Bool}, d)\n\nReturn a factored Prewitt filter for computing the gradient in N dimensions along axis d. If extended[dim] is false, kern will have size 1 along that dimension.\n\nSee also: Kernel.prewitt and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.bickley",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.bickley",
    "category": "function",
    "text": "    kern1, kern2 = bickley()\n\nReturn factored Bickley filters for dimensions 1 and 2 of your image.  Each is a 2-tuple of one-dimensional filters.\n\nCitation\n\nW. G. Bickley, \"Finite difference formulae for the square lattice,\" The Quarterly Journal of Mechanics and Applied Mathematics, vol. 1, no. 1, pp. 35–42, 1948.  doi:10.1093/qjmam/1.1.35\n\nSee also: Kernel.bickley and ImageFiltering.imgradients.\n\n\n\n\n\n    kern = bickley(extended::NTuple{N,Bool}, d)\n\nReturn a factored Bickley filter for computing the gradient in N dimensions along axis d. If extended[dim] is false, kern will have size 1 along that dimension.\n\nSee also: Kernel.bickley and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.scharr",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.scharr",
    "category": "function",
    "text": "    kern1, kern2 = scharr()\n\nReturn factored Scharr filters for dimensions 1 and 2 of your image.  Each is a 2-tuple of one-dimensional filters.\n\nCitation\n\nH. Scharr and  J. Weickert, \"An anisotropic diffusion algorithm with optimized rotation invariance,\" Mustererkennung 2000, pp. 460–467, 2000. doi:10.1007/978-3-642-59802-9_58\n\nSee also: Kernel.scharr and ImageFiltering.imgradients.\n\n\n\n\n\n    kern = scharr(extended::NTuple{N,Bool}, d)\n\nReturn a factored Scharr filter for computing the gradient in N dimensions along axis d. If extended[dim] is false, kern will have size 1 along that dimension.\n\nSee also: Kernel.scharr and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.ando3",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.ando3",
    "category": "function",
    "text": "    kern1, kern2 = ando3()\n\nReturn a factored form of Ando\'s \"optimal\" 3 times 3 gradient filters for dimensions 1 and 2 of your image.\n\nCitation\n\nS. Ando, \"Consistent gradient operators,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no.3, pp. 252–265, 2000. doi:10.1109/34.841757\n\nSee also: Kernel.ando3,KernelFactors.ando4, KernelFactors.ando5 and ImageFiltering.imgradients.\n\n\n\n\n\n    kern = ando3(extended::NTuple{N,Bool}, d)\n\nReturn a factored Ando filter (size 3) for computing the gradient in N dimensions along axis d.  If extended[dim] is false, kern will have size 1 along that dimension.\n\nSee also: KernelFactors.ando4, KernelFactors.ando5 and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.ando4",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.ando4",
    "category": "function",
    "text": "    kern1, kern2 = ando4()\n\nReturn separable approximations of Ando\'s \"optimal\" 4x4 filters for dimensions 1 and 2 of your image.\n\nCitation\n\nS. Ando, \"Consistent gradient operators,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no.3, pp. 252–265, 2000. doi:10.1109/34.841757\n\nSee also: Kernel.ando4 and ImageFiltering.imgradients.\n\n\n\n\n\n    kern = ando4(extended::NTuple{N,Bool}, d)\n\nReturn a factored Ando filter (size 4) for computing the gradient in N dimensions along axis d.  If extended[dim] is false, kern will have size 1 along that dimension.\n\nCitation\n\nS. Ando, \"Consistent gradient operators,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no.3, pp. 252–265, 2000. doi:10.1109/34.841757\n\nSee also: Kernel.ando4 and ImageFiltering.imgradients.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.ando5",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.ando5",
    "category": "function",
    "text": "    kern1, kern2 = ando5()\n\nReturn a separable approximations of Ando\'s \"optimal\" 5x5 gradient filters for dimensions 1 and 2 of your image.\n\nCitation\n\nS. Ando, \"Consistent gradient operators,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no.3, pp. 252–265, 2000. doi:10.1109/34.841757\n\nSee also: Kernel.ando5 and ImageFiltering.imgradients.\n\n\n\n\n\n    kern = ando5(extended::NTuple{N,Bool}, d)\n\nReturn a factored Ando filter (size 5) for computing the gradient in N dimensions along axis d.  If extended[dim] is false, kern will have size 1 along that dimension.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.gaussian",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.gaussian",
    "category": "function",
    "text": "gaussian(σ::Real, [l]) -> g\n\nConstruct a 1d gaussian kernel g with standard deviation σ, optionally providing the kernel length l. The default is to extend by two σ in each direction from the center. l must be odd.\n\n\n\n\n\ngaussian((σ1, σ2, ...), [l]) -> (g1, g2, ...)\n\nConstruct a multidimensional gaussian filter as a product of single-dimension factors, with standard deviation σd along dimension d. Optionally provide the kernel length l, which must be a tuple of the same length.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.IIRGaussian",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.IIRGaussian",
    "category": "function",
    "text": "IIRGaussian([T], σ; emit_warning::Bool=true)\n\nConstruct an infinite impulse response (IIR) approximation to a Gaussian of standard deviation σ. σ may either be a single real number or a tuple of numbers; in the latter case, a tuple of such filters will be created, each for filtering a different dimension of an array.\n\nOptionally specify the type T for the filter coefficients; if not supplied, it will match σ (unless σ is not floating-point, in which case Float64 will be chosen).\n\nCitation\n\nI. T. Young, L. J. van Vliet, and M. van Ginkel, \"Recursive Gabor Filtering\". IEEE Trans. Sig. Proc., 50: 2798-2805 (2002).\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.TriggsSdika",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.TriggsSdika",
    "category": "type",
    "text": "TriggsSdika(a, b, scale, M)\n\nDefines a kernel for one-dimensional infinite impulse response (IIR) filtering. a is a \"forward\" filter, b a \"backward\" filter, M is a matrix for matching boundary conditions at the right edge, and scale is a constant scaling applied to each element at the conclusion of filtering.\n\nCitation\n\nB. Triggs and M. Sdika, \"Boundary conditions for Young-van Vliet recursive filtering\". IEEE Trans. on Sig. Proc. 54: 2365-2367 (2006).\n\n\n\n\n\nTriggsSdika(ab, scale)\n\nCreate a symmetric Triggs-Sdika filter (with a = b = ab). M is calculated for you. Only length 3 filters are currently supported.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#KernelFactors-1",
    "page": "Function reference",
    "title": "KernelFactors",
    "category": "section",
    "text": "KernelFactors\nKernelFactors.sobel\nKernelFactors.prewitt\nKernelFactors.bickley\nKernelFactors.scharr\nKernelFactors.ando3\nKernelFactors.ando4\nKernelFactors.ando5\nKernelFactors.gaussian\nKernelFactors.IIRGaussian\nKernelFactors.TriggsSdika"
},

{
    "location": "function_reference/#ImageFiltering.centered",
    "page": "Function reference",
    "title": "ImageFiltering.centered",
    "category": "function",
    "text": "centered(kernel) -> shiftedkernel\n\nShift the origin-of-coordinates to the center of kernel. The center-element of kernel will be accessed by shiftedkernel[0, 0, ...].\n\nThis function makes it easy to supply kernels using regular Arrays, and provides compatibility with other languages that do not support arbitrary axes.\n\nSee also: imfilter.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.kernelfactors",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.kernelfactors",
    "category": "function",
    "text": "kernelfactors(factors::Tuple)\n\nPrepare a factored kernel for filtering. If passed a 2-tuple of vectors of lengths m and n, this will return a 2-tuple of ReshapedVectors that are effectively of sizes m×1 and 1×n. In general, each successive factor will be reshaped to extend along the corresponding dimension.\n\nIf passed a tuple of general arrays, it is assumed that each is shaped appropriately along its \"leading\" dimensions; the dimensionality of each is \"extended\" to N = length(factors), appending 1s to the size as needed.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Kernel.reflect",
    "page": "Function reference",
    "title": "ImageFiltering.Kernel.reflect",
    "category": "function",
    "text": "reflect(kernel) --> reflectedkernel\n\nCompute the pointwise reflection around 0, 0, ... of the kernel kernel.  Using imfilter with a reflectedkernel performs convolution, rather than correlation, with respect to the original kernel.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#Kernel-utilities-1",
    "page": "Function reference",
    "title": "Kernel utilities",
    "category": "section",
    "text": "centered\nkernelfactors\nreflect"
},

{
    "location": "function_reference/#ImageFiltering.padarray",
    "page": "Function reference",
    "title": "ImageFiltering.padarray",
    "category": "function",
    "text": "    padarray([T], img, border) --> imgpadded\n\nGenerate a padded image from an array img and a specification border of the boundary conditions and amount of padding to add.\n\nOutput\n\nAn expansion of the input image in which additional pixels are derived from the border of the input image using the extrapolation scheme specified by border.\n\nDetails\n\nThe function supports one, two or multi-dimensional images. You can specify the element type T of the output image.\n\nOptions\n\nValid border options are described below.\n\nPad\n\nThe type Pad designates the form of padding which should be used to extrapolate pixels beyond the boundary of an image. Instances must set style, a Symbol specifying the boundary conditions of the image.\n\nSymbol must be on one of:\n\n:replicate (repeat edge values to infinity),\n:circular (image edges \"wrap around\"),\n:symmetric (the image reflects relative to a position between pixels),\n:reflect (the image reflects relative to the edge itself).\n\nRefer to the documentation of Pad for more details and examples for each option.\n\nFill\n\nThe type Fill designates a particular value which will be used to extrapolate pixels beyond the boundary of an image. Refer to the documentation of Fill for more details and illustrations.\n\n2D Examples\n\nEach example is based on the input array\n\nmathbfA =\nboxed\nbeginmatrix\n 1   2    3    4  5   6 \n 2   4    6    8  10  12 \n 3   6    9   12  15  18 \n 4   8   12   16  20  24 \n 5   10  15   20  25  30 \n 6   12  18   24  30  36\n endmatrix\n\nExamples with Pad\n\nThe command padarray(A, Pad(:replicate,4,4)) yields\n\nboxed\nbeginarrayccccccccccccc\n1  1  1  1          1             2             3             4             5             6     6    6    6    6 \n1  1  1  1          1             2             3             4             5             6     6    6    6    6 \n1  1  1  1          1             2             3             4             5             6     6    6    6    6 \n1  1  1  1          1             2             3             4             5             6     6    6    6    6 \n1  1  1  1   boxed1     boxed2     boxed3     boxed4     boxed5     boxed6    6    6    6    6 \n2  2  2  2   boxed2     boxed4     boxed6     boxed8    boxed10    boxed12   12   12   12   12 \n3  3  3  3   boxed3     boxed6     boxed9    boxed12    boxed15    boxed18   18   18   18   18 \n4  4  4  4   boxed4     boxed8    boxed12    boxed16    boxed20    boxed24   24   24   24   24 \n5  5  5  5   boxed5    boxed10    boxed15    boxed20    boxed25    boxed30   30   30   30   30 \n6  6  6  6   boxed6    boxed12    boxed18    boxed24    boxed30    boxed36   36   36   36   36 \n6  6  6  6          6            12            18            24            30            36    36   36   36   36 \n6  6  6  6          6            12            18            24            30            36    36   36   36   36 \n6  6  6  6          6            12            18            24            30            36    36   36   36   36 \n6  6  6  6          6            12            18            24            30            36    36   36   36   36\n endarray\n\n\nThe command padarray(A, Pad(:circular,4,4)) yields\n\nboxed\nbeginarrayccccccccccccc\n9   12  15  18          3           6            9            12            15           18   3   6   9  12 \n12  16  20  24          4           8           12            16            20           24   4   8  12  16 \n15  20  25  30          5          10           15            20            25           30   5  10  15  20 \n18  24  30  36          6          12           18            24            30           36   6  12  18  24 \n3    4   5   6   boxed1   boxed2    boxed3    boxed4    boxed5     boxed6   1   2   3   4 \n6    8  10  12   boxed2   boxed4    boxed6    boxed8    boxed10    boxed12  2   4   6   8 \n9   12  15  18   boxed3   boxed6    boxed9    boxed12   boxed15    boxed18  3   6   9  12 \n12  16  20  24   boxed4   boxed8    boxed12   boxed16   boxed20    boxed24  4   8  12  16 \n15  20  25  30   boxed5   boxed10   boxed15   boxed20   boxed25    boxed30  5  10  15  20 \n18  24  30  36   boxed6   boxed12   boxed18   boxed24   boxed30    boxed36  6  12  18  24 \n3    4   5   6          1            2            3            4             5            6   1   2   3   4 \n6    8  10  12          2            4            6            8            10           12   2   4   6   8 \n9   12  15  18          3            6            9           12            15           18   3   6   9  12 \n12  16  20  24          4            8           12           16            20           24   4   8  12  16\nendarray\n\n\nThe command padarray(A, Pad(:symmetric,4,4)) yields\n\nboxed\nbeginarrayccccccccccccc\n16  12   8  4          4            8           12            16           20          24   24  20  16  12 \n12   9   6  3          3            6           9             12           15          18   18  15  12   9 \n 8   6   4  2          2            4           6             8            10          12   12  10   8   6 \n 4   3   2  1          1            2           3             4            5           6     6   5   4   3 \n 4   3   2  1   boxed1    boxed2   boxed3     boxed4   boxed5    boxed6    6   5   4   3 \n 8   6   4  2   boxed2    boxed4   boxed6     boxed8   boxed10   boxed12  12  10   8   6 \n12   9   6  3   boxed3    boxed6   boxed9    boxed12   boxed15   boxed18  18  15  12   9 \n16  12   8  4   boxed4    boxed8   boxed12   boxed16   boxed20   boxed24  24  20  16  12 \n20  15  10  5   boxed5   boxed10   boxed15   boxed20   boxed25   boxed30  30  25  20  15 \n24  18  12  6   boxed6   boxed12   boxed18   boxed24   boxed30   boxed36  36  30  24  18 \n24  18  12  6          6           12           18           24           30           36   36  30  24  18 \n20  15  10  5          5           10           15           20           25           30   30  25  20  15 \n16  12   8  4          4            8           12           16           20           24   24  20  16  12 \n12   9   6  3          3            6            9           12           15           18   18  15  12   9\nendarray\n\n\nThe command padarray(A, Pad(:reflect,4,4)) yields\n\nboxed\nbeginarrayccccccccccccc\n25  20  15  10          5           10           15            20            25           30   25  20  15  10 \n20  16  12   8          4           8            12            16            20           24   20  16  12   8 \n15  12   9   6          3           6             9            12            15           18   15  12   9   6 \n10   8   6   4          2           4             6            8             10           12   10   8   6   4 \n5    4   3   2   boxed1   boxed2     boxed3    boxed4     boxed5    boxed6    5   4   3   2 \n10   8   6   4   boxed2   boxed4     boxed6    boxed8     boxed10   boxed12  10   8   6   4 \n15  12   9   6   boxed3   boxed6     boxed9    boxed12    boxed15   boxed18  15  12   9   6 \n20  16  12   8   boxed4   boxed8     boxed12   boxed16    boxed20   boxed24  20  16  12   8 \n25  20  15  10   boxed5   boxed10    boxed15   boxed20    boxed25   boxed30  25  20  15  10 \n30  24  18  12   boxed6   boxed12    boxed18   boxed24    boxed30   boxed36  30  24  18  12 \n25  20  15  10          5           10            15           20            25           30   25  20  15  10 \n20  16  12   8          4           8             12           16            20           24   20  16  12   8 \n15  12   9   6          3           6              9           12            15           18   15  12   9   6 \n10   8   6   4          2           4              6            8            10           12   10   8   6   4\nendarray\n\n\nExamples with Fill\n\nThe command padarray(A, Fill(0,(4,4),(4,4))) yields\n\nboxed\nbeginarrayccccccccccccc\n0  0  0  0          0           0            0            0            0             0    0  0  0  0 \n0  0  0  0          0           0            0            0            0             0    0  0  0  0 \n0  0  0  0          0           0            0            0            0             0    0  0  0  0 \n0  0  0  0          0           0            0            0            0             0    0  0  0  0 \n0  0  0  0   boxed1   boxed2    boxed3    boxed4    boxed5     boxed6   0  0  0  0 \n0  0  0  0   boxed2   boxed4    boxed6    boxed8    boxed10    boxed12  0  0  0  0 \n0  0  0  0   boxed3   boxed6    boxed9    boxed12   boxed15    boxed18  0  0  0  0 \n0  0  0  0   boxed4   boxed8    boxed12   boxed16   boxed20    boxed24  0  0  0  0 \n0  0  0  0   boxed5   boxed10   boxed15   boxed20   boxed25    boxed30  0  0  0  0 \n0  0  0  0   boxed6   boxed12   boxed18   boxed24   boxed30    boxed36  0  0  0  0 \n0  0  0  0          0           0            0            0            0             0    0  0  0  0 \n0  0  0  0          0           0            0            0            0             0    0  0  0  0 \n0  0  0  0          0           0            0            0            0             0    0  0  0  0 \n0  0  0  0          0           0            0            0            0             0    0  0  0  0\nendarray\n\n\n3D Examples\n\nEach example is based on a multi-dimensional array mathsfA inmathbbR^2 times 2 times 2 given by\n\nmathsfA(1) =\nboxed\nbeginarraycc\n1  2 \n3  4\nendarray\nquad\ntextand\nquad\nmathsfA(2) =\nboxed\nbeginarraycc\n5  6 \n7  8\nendarray\n\nNote that each example will yield a new multi-dimensional array mathsfA in mathbbR^4 times 4 times 4 of type OffsetArray, where prepended dimensions may be negative or start from zero.\n\nExamples with Pad\n\nThe command padarray(A,Pad(:replicate,1,1,1)) yields\n\nbeginaligned\nmathsfA(0)  =\nboxed\nbeginarraycccc\n1  1  2  2 \n1  1  2  2 \n3  3  4  4 \n3  3  4  4\nendarray\n\nmathsfA(1)  =\nboxed\nbeginarraycccc\n1          1           2   2 \n1   boxed1   boxed2  2 \n3   boxed3   boxed4  4 \n3          3           4   4\nendarray \nmathsfA(2)  =\nboxed\nbeginarraycccc\n5          5           6   6 \n5   boxed5   boxed6  6 \n7   boxed7   boxed8  8 \n7          7           8   8\nendarray\n\nmathsfA(3)  =\nboxed\nbeginarraycccc\n5  5  6  6 \n5  5  6  6 \n7  7  8  8 \n7  7  8  8\nendarray\nendaligned\n\n\nThe command padarray(A,Pad(:circular,1,1,1)) yields\n\nbeginaligned\nmathsfA(0)  =\nboxed\nbeginarraycccc\n8  7  8  7 \n6  5  6  5 \n8  7  8  7 \n6  5  6  5\nendarray\n\nmathsfA(1)  =\nboxed\nbeginarraycccc\n4          3           4   3 \n2   boxed1   boxed2  1 \n4   boxed3   boxed4  3 \n2          1           2   1\nendarray \nmathsfA(2)  =\nboxed\nbeginarraycccc\n8          7           8   7 \n6   boxed5   boxed6  5 \n8   boxed7   boxed8  7 \n6          5           6   5\nendarray\n\nmathsfA(3)  =\nboxed\nbeginarraycccc\n4  3  4  3 \n2  1  2  1 \n4  3  4  3 \n2  1  2  1\nendarray\nendaligned\n\n\nThe command padarray(A,Pad(:symmetric,1,1,1)) yields\n\nbeginaligned\nmathsfA(0)  =\nboxed\nbeginarraycccc\n1  1  2  2 \n1  1  2  2 \n3  3  4  4 \n3  3  4  4\nendarray\n\nmathsfA(1)  =\nboxed\nbeginarraycccc\n1          1           2   2 \n1   boxed1   boxed2  2 \n2   boxed3   boxed4  4 \n2          3           4   4\nendarray \nmathsfA(2)  =\nboxed\nbeginarraycccc\n5          5           6   6 \n5   boxed5   boxed6  6 \n7   boxed7   boxed8  8 \n7          7           8   8\nendarray\n\nmathsfA(3)  =\nboxed\nbeginarraycccc\n5  5  6  6 \n5  5  6  6 \n7  7  8  8 \n7  7  8  8\nendarray\nendaligned\n\n\nThe command padarray(A,Pad(:reflect,1,1,1)) yields\n\nbeginaligned\nmathsfA(0)  =\nboxed\nbeginarraycccc\n8  7  8  7 \n6  5  6  5 \n8  7  8  7 \n6  5  6  5\nendarray\n\nmathsfA(1)  =\nboxed\nbeginarraycccc\n4          3           4   3 \n2   boxed1   boxed2  1 \n4   boxed3   boxed4  3 \n2          1           2   1\nendarray \nmathsfA(2)  =\nboxed\nbeginarraycccc\n8          7           8   7 \n6   boxed5   boxed6  5 \n8   boxed7   boxed8  7 \n6          5           6   5\nendarray\n\nmathsfA(3)  =\nboxed\nbeginarraycccc\n4  3  4  3 \n2  1  2  1 \n4  3  4  3 \n2  1  2  1\nendarray\nendaligned\n\n\nExamples with Fill\n\nThe command padarray(A,Fill(0,(1,1,1))) yields\n\nbeginaligned\nmathsfA(0)  =\nboxed\nbeginarraycccc\n0  0  0  0 \n0  0  0  0 \n0  0  0  0 \n0  0  0  0\nendarray\n\nmathsfA(1)  =\nboxed\nbeginarraycccc\n0          0           0   0 \n0   boxed1   boxed2  0 \n0   boxed3   boxed4  0 \n0          0           0   0\nendarray \nmathsfA(2)  =\nboxed\nbeginarraycccc\n0          0           0   0 \n0   boxed5   boxed6  0 \n0   boxed7   boxed8  0 \n0          0           0   0\nendarray\n\nmathsfA(3)  =\nboxed\nbeginarraycccc\n0  0  0  0 \n0  0  0  0 \n0  0  0  0 \n0  0  0  0\nendarray\nendaligned\n\n\n\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Pad",
    "page": "Function reference",
    "title": "ImageFiltering.Pad",
    "category": "type",
    "text": "    struct Pad{N} <: AbstractBorder\n        style::Symbol\n        lo::Dims{N}    # number to extend by on the lower edge for each dimension\n        hi::Dims{N}    # number to extend by on the upper edge for each dimension\n    end\n\nPad is a type that designates the form of padding which should be used to extrapolate pixels beyond the boundary of an image. Instances must set style, a Symbol specifying the boundary conditions of the image.\n\nOutput\n\nThe type Pad specifying how the boundary of an image should be padded.\n\nDetails\n\nWhen representing a spatial two-dimensional image filtering operation as a discrete convolution between the image and a D times D filter, the results are undefined for pixels closer than D pixels from the border of the image. To define the operation near and at the border, one needs a scheme for extrapolating pixels beyond the edge. The Pad type allows one to specify the necessary extrapolation scheme.\n\nThe type facilitates the padding of one, two or multi-dimensional images.\n\nYou can specify a different amount of padding at the lower and upper borders of each dimension of the image (top, left, bottom and right in two dimensions).\n\nOptions\n\nSome valid style options are described below. As an indicative example of each option the results of the padding are illustrated on an image consisting of a row of six pixels which are specified alphabetically: boxeda  b  c d  e  f. We show the effects of padding only on the left and right border, but analogous consequences hold for the top and bottom border.\n\n:replicate (Default)\n\nThe border pixels extend beyond the image boundaries.\n\nboxed\nbeginarraylcr\n  a a a a    a  b  c  d  e  f  f  f  f  f\nendarray\n\n\nSee also: Fill, padarray, Inner and NoPad\n\n:circular\n\nThe border pixels wrap around. For instance, indexing beyond the left border returns values starting from the right border.\n\nboxed\nbeginarraylcr\n  c d e f    a  b  c  d  e  f  a  b  c  d\nendarray\n\n\nSee also: Fill, padarray, Inner and NoPad\n\n:symmetric\n\nThe border pixels reflect relative to a position between pixels. That is, the border pixel is omitted when mirroring.\n\nboxed\nbeginarraylcr\n  e d c b    a  b  c  d  e  f  e  d  c  b\nendarray\n\n\nSee also: Fill,padarray, Inner and NoPad\n\n:reflect\n\nThe border pixels reflect relative to the edge itself.\n\nboxed\nbeginarraylcr\n  d c b a    a  b  c  d  e  f  f  e  d  c\nendarray\n\n\nSee also: Fill,padarray, Inner and NoPad\n\n\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Fill",
    "page": "Function reference",
    "title": "ImageFiltering.Fill",
    "category": "type",
    "text": "    struct Fill{T,N} <: AbstractBorder\n        value::T\n        lo::Dims{N}\n        hi::Dims{N}\n    end\n\nFill is a type that designates a particular value which will be used to extrapolate pixels beyond the boundary of an image.\n\nOutput\n\nThe type Fill specifying the value with which the boundary of the image should be padded.\n\nDetails\n\nWhen representing a two-dimensional spatial image filtering operation as a discrete convolution between an image and a D times D filter, the results are undefined for pixels closer than D pixels from the border of the image. To define the operation near and at the border, one needs a scheme for extrapolating pixels beyond the edge. The Fill type allows one to specify a particular value which will be used in the extrapolation. For more elaborate extrapolation schemes refer to the documentation of  Pad.\n\nThe type facilitates the padding of one, two or multi-dimensional images.\n\nYou can specify a different amount of padding at the lower and upper borders of each dimension of the image (top, left, bottom and right in two dimensions).\n\nExample\n\nAs an indicative illustration consider an image consisting of a row of six pixels which are specified alphabetically: boxeda  b  c  d  e  f. We show the effects of padding with a constant value m only on the left and right border, but analogous consequences hold for the top and bottom border.\n\nboxed\nbeginarraylcr\n  m m m m    a  b  c  d  e  f  m  m  m  m\nendarray\n\n\nSee also: Pad, padarray, Inner and NoPad\n\n\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Inner",
    "page": "Function reference",
    "title": "ImageFiltering.Inner",
    "category": "type",
    "text": "Inner()\nInner(lo, hi)\n\nIndicate that edges are to be discarded in filtering, only the interior of the result is to be returned.\n\nExample:\n\nimfilter(img, kernel, Inner())\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.NA",
    "page": "Function reference",
    "title": "ImageFiltering.NA",
    "category": "type",
    "text": "NA()\nNA(lo, hi)\n\nChoose filtering using \"NA\" (Not Available) boundary conditions. This is most appropriate for filters that have only positive weights, such as blurring filters. Effectively, the output pixel value is normalized in the following way:\n\n          filtered img with Fill(0) boundary conditions\noutput =  ---------------------------------------------\n          filtered 1   with Fill(0) boundary conditions\n\nAs a consequence, filtering has the same behavior as nanmean. Indeed, invalid pixels in img can be marked as NaN and then they are effectively omitted from the filtered result.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.NoPad",
    "page": "Function reference",
    "title": "ImageFiltering.NoPad",
    "category": "type",
    "text": "NoPad()\nNoPad(border)\n\nIndicates that no padding should be applied to the input array, or that you have already pre-padded the input image. Passing a border object allows you to preserve \"memory\" of a border choice; it can be retrieved by indexing with [].\n\nExample\n\nThe commands\n\nnp = NoPad(Pad(:replicate))\nimfilter!(out, img, kernel, np)\n\nrun filtering directly, skipping any padding steps.  Every entry of out must be computable using in-bounds operations on img and kernel.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#Boundaries-and-padding-1",
    "page": "Function reference",
    "title": "Boundaries and padding",
    "category": "section",
    "text": "padarray\nPad\nFill\nInner\nNA\nNoPad"
},

{
    "location": "function_reference/#ImageFiltering.Algorithm.FIR",
    "page": "Function reference",
    "title": "ImageFiltering.Algorithm.FIR",
    "category": "type",
    "text": "Filter using a direct algorithm\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Algorithm.FFT",
    "page": "Function reference",
    "title": "ImageFiltering.Algorithm.FFT",
    "category": "type",
    "text": "Filter using the Fast Fourier Transform\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Algorithm.IIR",
    "page": "Function reference",
    "title": "ImageFiltering.Algorithm.IIR",
    "category": "type",
    "text": "Filter with an Infinite Impulse Response filter\n\n\n\n\n\n"
},

{
    "location": "function_reference/#ImageFiltering.Algorithm.Mixed",
    "page": "Function reference",
    "title": "ImageFiltering.Algorithm.Mixed",
    "category": "type",
    "text": "Filter with a cascade of mixed types (IIR, FIR)\n\n\n\n\n\n"
},

{
    "location": "function_reference/#Algorithms-1",
    "page": "Function reference",
    "title": "Algorithms",
    "category": "section",
    "text": "Algorithm.FIR\nAlgorithm.FFT\nAlgorithm.IIR\nAlgorithm.Mixed"
},

{
    "location": "function_reference/#ImageFiltering.KernelFactors.ReshapedOneD",
    "page": "Function reference",
    "title": "ImageFiltering.KernelFactors.ReshapedOneD",
    "category": "type",
    "text": "ReshapedOneD{N,Npre}(data)\n\nReturn an object of dimensionality N, where data must have dimensionality 1. The axes are 0:0 for the first Npre dimensions, have the axes of data for dimension Npre+1, and are 0:0 for the remaining dimensions.\n\ndata must support eltype and ndims, but does not have to be an AbstractArray.\n\nReshapedOneDs allow one to specify a \"filtering dimension\" for a 1-dimensional filter.\n\n\n\n\n\n"
},

{
    "location": "function_reference/#Internal-machinery-1",
    "page": "Function reference",
    "title": "Internal machinery",
    "category": "section",
    "text": "KernelFactors.ReshapedOneD"
},

]}
