var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#AbstractFFTs.jl-1",
    "page": "Home",
    "title": "AbstractFFTs.jl",
    "category": "section",
    "text": "This package provides a generic framework for defining fast Fourier transform (FFT) implementations in Julia. The code herein was part of Julia\'s Base library for Julia versions 0.6 and lower."
},

{
    "location": "#Contents-1",
    "page": "Home",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"api.md\", \"implementations.md\"]"
},

{
    "location": "api/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api/#AbstractFFTs.fft",
    "page": "API",
    "title": "AbstractFFTs.fft",
    "category": "function",
    "text": "fft(A [, dims])\n\nPerforms a multidimensional FFT of the array A. The optional dims argument specifies an iterable subset of dimensions (e.g. an integer, range, tuple, or array) to transform along. Most efficient if the size of A along the transformed dimensions is a product of small primes; see Base.nextprod. See also plan_fft() for even greater efficiency.\n\nA one-dimensional FFT computes the one-dimensional discrete Fourier transform (DFT) as defined by\n\noperatornameDFT(A)k =\n  sum_n=1^operatornamelength(A)\n  expleft(-ifrac2pi\n  (n-1)(k-1)operatornamelength(A) right) An\n\nA multidimensional FFT simply performs this operation along each transformed dimension of A.\n\nnote: Note\nThis performs a multidimensional FFT by default. FFT libraries in other languages such as Python and Octave perform a one-dimensional FFT along the first non-singleton dimension of the array. This is worth noting while performing comparisons.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.fft!",
    "page": "API",
    "title": "AbstractFFTs.fft!",
    "category": "function",
    "text": "fft!(A [, dims])\n\nSame as fft, but operates in-place on A, which must be an array of complex floating-point numbers.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.ifft",
    "page": "API",
    "title": "AbstractFFTs.ifft",
    "category": "function",
    "text": "ifft(A [, dims])\n\nMultidimensional inverse FFT.\n\nA one-dimensional inverse FFT computes\n\noperatornameIDFT(A)k = frac1operatornamelength(A)\nsum_n=1^operatornamelength(A) expleft(+ifrac2pi (n-1)(k-1)\noperatornamelength(A) right) An\n\nA multidimensional inverse FFT simply performs this operation along each transformed dimension of A.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.ifft!",
    "page": "API",
    "title": "AbstractFFTs.ifft!",
    "category": "function",
    "text": "ifft!(A [, dims])\n\nSame as ifft, but operates in-place on A.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.bfft",
    "page": "API",
    "title": "AbstractFFTs.bfft",
    "category": "function",
    "text": "bfft(A [, dims])\n\nSimilar to ifft, but computes an unnormalized inverse (backward) transform, which must be divided by the product of the sizes of the transformed dimensions in order to obtain the inverse. (This is slightly more efficient than ifft because it omits a scaling step, which in some applications can be combined with other computational steps elsewhere.)\n\noperatornameBDFT(A)k = operatornamelength(A) operatornameIDFT(A)k\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.bfft!",
    "page": "API",
    "title": "AbstractFFTs.bfft!",
    "category": "function",
    "text": "bfft!(A [, dims])\n\nSame as bfft, but operates in-place on A.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_fft",
    "page": "API",
    "title": "AbstractFFTs.plan_fft",
    "category": "function",
    "text": "plan_fft(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nPre-plan an optimized FFT along given dimensions (dims) of arrays matching the shape and type of A.  (The first two arguments have the same meaning as for fft.) Returns an object P which represents the linear operator computed by the FFT, and which contains all of the information needed to compute fft(A, dims) quickly.\n\nTo apply P to an array A, use P * A; in general, the syntax for applying plans is much like that of matrices.  (A plan can only be applied to arrays of the same size as the A for which the plan was created.)  You can also apply a plan with a preallocated output array Â by calling mul!(Â, plan, A).  (For mul!, however, the input array A must be a complex floating-point array like the output Â.) You can compute the inverse-transform plan by inv(P) and apply the inverse plan with P \\ Â (the inverse plan is cached and reused for subsequent calls to inv or \\), and apply the inverse plan to a pre-allocated output array A with ldiv!(A, P, Â).\n\nThe flags argument is a bitwise-or of FFTW planner flags, defaulting to FFTW.ESTIMATE. e.g. passing FFTW.MEASURE or FFTW.PATIENT will instead spend several seconds (or more) benchmarking different possible FFT algorithms and picking the fastest one; see the FFTW manual for more information on planner flags.  The optional timelimit argument specifies a rough upper bound on the allowed planning time, in seconds. Passing FFTW.MEASURE or FFTW.PATIENT may cause the input array A to be overwritten with zeros during plan creation.\n\nplan_fft! is the same as plan_fft but creates a plan that operates in-place on its argument (which must be an array of complex floating-point numbers). plan_ifft and so on are similar but produce plans that perform the equivalent of the inverse transforms ifft and so on.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_ifft",
    "page": "API",
    "title": "AbstractFFTs.plan_ifft",
    "category": "function",
    "text": "plan_ifft(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_fft, but produces a plan that performs inverse transforms ifft.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_bfft",
    "page": "API",
    "title": "AbstractFFTs.plan_bfft",
    "category": "function",
    "text": "plan_bfft(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_fft, but produces a plan that performs an unnormalized backwards transform bfft.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_fft!",
    "page": "API",
    "title": "AbstractFFTs.plan_fft!",
    "category": "function",
    "text": "plan_fft!(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_fft, but operates in-place on A.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_ifft!",
    "page": "API",
    "title": "AbstractFFTs.plan_ifft!",
    "category": "function",
    "text": "plan_ifft!(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_ifft, but operates in-place on A.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_bfft!",
    "page": "API",
    "title": "AbstractFFTs.plan_bfft!",
    "category": "function",
    "text": "plan_bfft!(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nSame as plan_bfft, but operates in-place on A.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.rfft",
    "page": "API",
    "title": "AbstractFFTs.rfft",
    "category": "function",
    "text": "rfft(A [, dims])\n\nMultidimensional FFT of a real array A, exploiting the fact that the transform has conjugate symmetry in order to save roughly half the computational time and storage costs compared with fft. If A has size (n_1, ..., n_d), the result has size (div(n_1,2)+1, ..., n_d).\n\nThe optional dims argument specifies an iterable subset of one or more dimensions of A to transform, similar to fft. Instead of (roughly) halving the first dimension of A in the result, the dims[1] dimension is (roughly) halved in the same way.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.irfft",
    "page": "API",
    "title": "AbstractFFTs.irfft",
    "category": "function",
    "text": "irfft(A, d [, dims])\n\nInverse of rfft: for a complex array A, gives the corresponding real array whose FFT yields A in the first half. As for rfft, dims is an optional subset of dimensions to transform, defaulting to 1:ndims(A).\n\nd is the length of the transformed real array along the dims[1] dimension, which must satisfy div(d,2)+1 == size(A,dims[1]). (This parameter cannot be inferred from size(A) since both 2*size(A,dims[1])-2 as well as 2*size(A,dims[1])-1 are valid sizes for the transformed real array.)\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.brfft",
    "page": "API",
    "title": "AbstractFFTs.brfft",
    "category": "function",
    "text": "brfft(A, d [, dims])\n\nSimilar to irfft but computes an unnormalized inverse transform (similar to bfft), which must be divided by the product of the sizes of the transformed dimensions (of the real output array) in order to obtain the inverse transform.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_rfft",
    "page": "API",
    "title": "AbstractFFTs.plan_rfft",
    "category": "function",
    "text": "plan_rfft(A [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nPre-plan an optimized real-input FFT, similar to plan_fft except for rfft instead of fft. The first two arguments, and the size of the transformed result, are the same as for rfft.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_brfft",
    "page": "API",
    "title": "AbstractFFTs.plan_brfft",
    "category": "function",
    "text": "plan_brfft(A, d [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nPre-plan an optimized real-input unnormalized transform, similar to plan_rfft except for brfft instead of rfft. The first two arguments and the size of the transformed result, are the same as for brfft.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.plan_irfft",
    "page": "API",
    "title": "AbstractFFTs.plan_irfft",
    "category": "function",
    "text": "plan_irfft(A, d [, dims]; flags=FFTW.ESTIMATE, timelimit=Inf)\n\nPre-plan an optimized inverse real-input FFT, similar to plan_rfft except for irfft and brfft, respectively. The first three arguments have the same meaning as for irfft.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.fftshift-Tuple{Any}",
    "page": "API",
    "title": "AbstractFFTs.fftshift",
    "category": "method",
    "text": "fftshift(x)\n\nSwap the first and second halves of each dimension of x.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.fftshift-Tuple{Any,Any}",
    "page": "API",
    "title": "AbstractFFTs.fftshift",
    "category": "method",
    "text": "fftshift(x,dim)\n\nSwap the first and second halves of the given dimension or iterable of dimensions of array x.\n\n\n\n\n\n"
},

{
    "location": "api/#AbstractFFTs.ifftshift",
    "page": "API",
    "title": "AbstractFFTs.ifftshift",
    "category": "function",
    "text": "ifftshift(x, [dim])\n\nUndoes the effect of fftshift.\n\n\n\n\n\n"
},

{
    "location": "api/#Public-Interface-1",
    "page": "API",
    "title": "Public Interface",
    "category": "section",
    "text": "AbstractFFTs.fft\nAbstractFFTs.fft!\nAbstractFFTs.ifft\nAbstractFFTs.ifft!\nAbstractFFTs.bfft\nAbstractFFTs.bfft!\nAbstractFFTs.plan_fft\nAbstractFFTs.plan_ifft\nAbstractFFTs.plan_bfft\nAbstractFFTs.plan_fft!\nAbstractFFTs.plan_ifft!\nAbstractFFTs.plan_bfft!\nAbstractFFTs.rfft\nAbstractFFTs.irfft\nAbstractFFTs.brfft\nAbstractFFTs.plan_rfft\nAbstractFFTs.plan_brfft\nAbstractFFTs.plan_irfft\nAbstractFFTs.fftshift(::Any)\nAbstractFFTs.fftshift(::Any, ::Any)\nAbstractFFTs.ifftshift"
},

{
    "location": "implementations/#",
    "page": "Implementations",
    "title": "Implementations",
    "category": "page",
    "text": ""
},

{
    "location": "implementations/#FFT-Implementations-1",
    "page": "Implementations",
    "title": "FFT Implementations",
    "category": "section",
    "text": ""
},

{
    "location": "implementations/#Existing-packages-1",
    "page": "Implementations",
    "title": "Existing packages",
    "category": "section",
    "text": "The following packages extend the functionality provided by AbstractFFTs:FFTW.jl: Bindings for the FFTW library. This also used to be part of Base Julia."
},

{
    "location": "implementations/#Defining-a-new-implementation-1",
    "page": "Implementations",
    "title": "Defining a new implementation",
    "category": "section",
    "text": "Implementations should implement LinearAlgebra.mul!(Y, plan, X) (or A_mul_B!(y, p::MyPlan, x) on Julia prior to 0.7.0-DEV.3204) so as to support pre-allocated output arrays. We don\'t define * in terms of mul! generically here, however, because of subtleties for in-place and real FFT plans.To support inv, \\, and ldiv!(y, plan, x), we require Plan subtypes to have a pinv::Plan field, which caches the inverse plan, and which should be initially undefined. They should also implement plan_inv(p) to construct the inverse of a plan p.Implementations only need to provide the unnormalized backwards FFT, similar to FFTW, and we do the scaling generically to get the inverse FFT."
},

]}
