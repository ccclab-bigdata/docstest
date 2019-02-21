var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#AbstractOperators.jl-1",
    "page": "Home",
    "title": "AbstractOperators.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Description-1",
    "page": "Home",
    "title": "Description",
    "category": "section",
    "text": "Abstract operators extend the syntax typically used for matrices to linear mappings of arbitrary dimensions and nonlinear functions. Unlike matrices however, abstract operators apply the mappings with specific efficient algorithms that minimize memory requirements.  This is particularly useful in iterative algorithms and in first order large-scale optimization algorithms."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, hit ] from the Julia command line to enter the package manager, thenpkg> add AbstractOperators"
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "With using AbstractOperators the package imports several methods like multiplication *  and adjoint transposition \' (and their in-place methods mul!).For example, one can create a 2-D Discrete Fourier Transform as follows:julia> A = DFT(3,4)\nℱ  ℝ^(3, 4) -> ℂ^(3, 4)Here, it can be seen that A has a domain of dimensions size(A,2) = (3,4) and of type domainType(A) = Float64 and a codomain of dimensions size(A,1) = (3,4) and type codomainType(A) = Complex{Float64}.This linear transformation can be evaluated as follows: julia> x = randn(3,4); #input matrix\n\njulia> y = A*x\n3×4 Array{Complex{Float64},2}:\n  -1.11412+0.0im       3.58654-0.724452im  -9.10125+0.0im       3.58654+0.724452im\n -0.905575+1.98446im  0.441199-0.913338im  0.315788+3.29666im  0.174273+0.318065im\n -0.905575-1.98446im  0.174273-0.318065im  0.315788-3.29666im  0.441199+0.913338im\n\njulia> mul!(y, A, x) == A*x #in-place evaluation\ntrue\n\njulia> all(A\'*y - *(size(x)...)*x .< 1e-12) \ntrue\n\njulia> mul!(x, A\',y) #in-place evaluation\n3×4 Array{Float64,2}:\n  -2.99091   9.45611  -19.799     1.6327 \n -11.1841   11.2365   -26.3614   11.7261 \n   5.04815   7.61552   -6.00498   6.25586\nNotice that inputs and outputs are not necessarily Vectors.It is also possible to combine multiple AbstractOperators using different calculus rules. For example AbstractOperators can be concatenated horizontally: julia> B = Eye(Complex{Float64},(3,4))\nI  ℂ^(3, 4) -> ℂ^(3, 4)\n\njulia> H = [A B]\n[ℱ,I]  ℝ^(3, 4)  ℂ^(3, 4) -> ℂ^(3, 4)In this case H has a domain of dimensions size(H,2) = ((3, 4), (3, 4)) and type domainType(H) = (Float64, Complex{Float64}).When an AbstractOperators have multiple domains, this must be multiplied using a Tuples of AbstractArrays with corresponding size(H,2) and domainType(H), for example: julia> H*(x, complex(x))\n3×4 Array{Complex{Float64},2}:\n -16.3603+0.0im      52.4946-8.69342im  -129.014+0.0im      44.6712+8.69342im\n  -22.051+23.8135im  16.5309-10.9601im  -22.5719+39.5599im  13.8174+3.81678im\n -5.81874-23.8135im  9.70679-3.81678im  -2.21552-39.5599im  11.5502+10.9601imSimilarly, when an AbstractOperators have multiple codomains, this will return a Tuple of AbstractArrays with corresponding size(H,1) and codomainType(H), for example: julia> V = VCAT(Eye(3,3),FiniteDiff((3,3)))\n[I;δx]  ℝ^(3, 3) -> ℝ^(3, 3)  ℝ^(2, 3)\n\njulia> V*ones(3,3)\n([1.0 1.0 1.0; 1.0 1.0 1.0; 1.0 1.0 1.0], [0.0 0.0 0.0; 0.0 0.0 0.0])\nA list of the available AbstractOperators and calculus rules can be found in the documentation."
},

{
    "location": "#Related-packages-1",
    "page": "Home",
    "title": "Related packages",
    "category": "section",
    "text": "ProximalOperators.jl\nProximalAlgorithms.jl\nStructuredOptimization.jl"
},

{
    "location": "#Credits-1",
    "page": "Home",
    "title": "Credits",
    "category": "section",
    "text": "AbstractOperators.jl is developed by Niccolò Antonello and Lorenzo Stella at KU Leuven, ESAT/Stadius,"
},

{
    "location": "operators/#",
    "page": "Abstract Operators",
    "title": "Abstract Operators",
    "category": "page",
    "text": ""
},

{
    "location": "operators/#Abstract-Operators-1",
    "page": "Abstract Operators",
    "title": "Abstract Operators",
    "category": "section",
    "text": ""
},

{
    "location": "operators/#Linear-operators-1",
    "page": "Abstract Operators",
    "title": "Linear operators",
    "category": "section",
    "text": ""
},

{
    "location": "operators/#AbstractOperators.Eye",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Eye",
    "category": "type",
    "text": "Eye([domainType=Float64::Type,] dim_in::Tuple)\n\nEye([domainType=Float64::Type,] dims...)\n\nCreate the identity operator.\n\njulia> op = Eye(Float64,(4,))\nI  ℝ^4 -> ℝ^4\n\njulia> op = Eye(2,3,4)\nI  ℝ^(2, 3, 4) -> ℝ^(2, 3, 4)\n\njulia> op*ones(2,3,4) == ones(2,3,4)\ntrue\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Zeros",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Zeros",
    "category": "type",
    "text": "Zeros(domainType::Type, dim_in::Tuple, [codomainType::Type,] dim_out::Tuple)\n\nCreate a LinearOperator which, when multiplied with an array x of size dim_in, returns an array y of size dim_out filled with zeros.\n\nFor convenience Zeros can be constructed from any AbstractOperator.\n\njulia> Zeros(Eye(10,20))\n0  ℝ^(10, 20) -> ℝ^(10, 20)\n\njulia> Zeros([Eye(10,20) Eye(10,20)])\n[0,0]  ℝ^(10, 20)  ℝ^(10, 20) -> ℝ^(10, 20)\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.DiagOp",
    "page": "Abstract Operators",
    "title": "AbstractOperators.DiagOp",
    "category": "type",
    "text": "DiagOp(domainType::Type, dim_in::Tuple, d::AbstractArray)\n\nDiagOp(d::AbstractArray)\n\nCreates a LinearOperator which, when multiplied with an array x, returns the elementwise product d.*x.\n\njulia> D = DiagOp(Float64, (2, 2,), [1. 2.; 3. 4.])\n╲  ℝ^(2, 2) -> ℝ^(2, 2)\n\njulia> D*ones(2,2)\n2×2 Array{Float64,2}:\n 1.0  2.0\n 3.0  4.0\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.GetIndex",
    "page": "Abstract Operators",
    "title": "AbstractOperators.GetIndex",
    "category": "type",
    "text": "GetIndex([domainType=Float64::Type,] dim_in::Tuple, idx...)\n\nGetIndex(x::AbstractArray, idx::Tuple)\n\nCreates a LinearOperator which, when multiplied with x, returns x[idx].\n\njulia> x = collect(linspace(1,10,10));\n\njulia> G = GetIndex(Float64,(10,), 1:3)\n↓  ℝ^10 -> ℝ^3 \n\njulia> G*x\n3-element Array{Float64,1}:\n 1.0\n 2.0\n 3.0\n\njulia> GetIndex(randn(10,20,30),(1:2,1:4))\n↓  ℝ^(10, 20, 30) -> ℝ^(2, 4)\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.MatrixOp",
    "page": "Abstract Operators",
    "title": "AbstractOperators.MatrixOp",
    "category": "type",
    "text": "MatrixOp(domainType=Float64::Type, dim_in::Tuple, A::AbstractMatrix)\n\nMatrixOp(A::AbstractMatrix)\n\nMatrixOp(A::AbstractMatrix, n_colons)\n\nCreates a LinearOperator which, when multiplied with a vector x::AbstractVector, returns the product A*x.\n\nThe input x can be also a matrix: the number of columns must be given either in the second entry of dim_in::Tuple or using the constructor MatrixOp(A::AbstractMatrix, n_colons).\n\njulia> MatrixOp(Float64,(10,),randn(20,10))\n▒  ℝ^10 -> ℝ^20 \n\njulia> MatrixOp(randn(20,10))\n▒  ℝ^10 -> ℝ^20\n\njulia> MatrixOp(Float64,(10,20),randn(20,10))\n▒  ℝ^(10, 20) -> ℝ^(20, 20)\n\njulia> MatrixOp(randn(20,10),4)\n▒  ℝ^(10, 4) -> ℝ^(20, 4)\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.LMatrixOp",
    "page": "Abstract Operators",
    "title": "AbstractOperators.LMatrixOp",
    "category": "type",
    "text": "LMatrixOp(domainType=Float64::Type, dim_in::Tuple, b::Union{AbstractVector,AbstractMatrix})\n\nLMatrixOp(b::AbstractVector, number_of_rows::Int)\n\nCreates a LinearOperator which, when multiplied with a matrix X::AbstractMatrix, returns the product X*b.\n\njulia> op = LMatrixOp(Float64,(3,4),ones(4))\n(⋅)b  ℝ^(3, 4) -> ℝ^3 \n\njulia> op = LMatrixOp(ones(4),3)\n(⋅)b  ℝ^(3, 4) -> ℝ^3\n\njulia> op*ones(3,4)\n3-element Array{Float64,1}:\n 4.0\n 4.0\n 4.0\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.MyLinOp",
    "page": "Abstract Operators",
    "title": "AbstractOperators.MyLinOp",
    "category": "type",
    "text": "MyLinOp(domainType::Type, dim_in::Tuple, [domainType::Type,] dim_out::Tuple, Fwd!::Function, Adj!::Function)\n\nConstruct a user defined LinearOperator by specifing its linear mapping Fwd! and its adjoint Adj!. The functions Fwd! and Adj must be in-place functions consistent with the given dimensions dim_in and dim_out and the domain and codomain types.\n\njulia> n,m = 5,4;\n\njulia> A = randn(n,m);\n\njulia> op = MyLinOp(Float64, (m,),(n,), (y,x) -> mul!(y,A,x), (y,x) -> mul!(y,A\',x))\nA  ℝ^4 -> ℝ^5\n\njulia> op = MyLinOp(Float64, (m,), Float64, (n,), (y,x) -> mul!(y,A,x), (y,x) -> mul!(y,A\',x))\nA  ℝ^4 -> ℝ^5\n\n\n\n\n\n\n"
},

{
    "location": "operators/#Basic-Operators-1",
    "page": "Abstract Operators",
    "title": "Basic Operators",
    "category": "section",
    "text": "Eye\nZeros\nDiagOp\nGetIndex\nMatrixOp\nLMatrixOp\nMyLinOp"
},

{
    "location": "operators/#DSP-1",
    "page": "Abstract Operators",
    "title": "DSP",
    "category": "section",
    "text": ""
},

{
    "location": "operators/#AbstractOperators.DFT",
    "page": "Abstract Operators",
    "title": "AbstractOperators.DFT",
    "category": "type",
    "text": "DFT([domainType=Float64::Type,] dim_in::Tuple)\n\nDFT(dim_in...)\n\nDFT(x::AbstractArray)\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractArray{N}, returns the N-dimensional Discrete Fourier Transform of x. \n\njulia> DFT(Complex{Float64},(10,10))\nℱ  ℂ^(10, 10) -> ℂ^(10, 10) \n\njulia> DFT(10,10)\nℱ  ℝ^(10, 10) -> ℂ^(10, 10) \n\njulia> A = DFT(ones(3))\nℱ  ℝ^3 -> ℂ^3\n\njulia> A*ones(3)\n3-element Array{Complex{Float64},1}:\n 3.0+0.0im\n 0.0+0.0im\n 0.0+0.0im\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.IDFT",
    "page": "Abstract Operators",
    "title": "AbstractOperators.IDFT",
    "category": "type",
    "text": "IDFT([domainType=Float64::Type,] dim_in::Tuple)\n\nIDFT(dim_in...)\n\nIDFT(x::AbstractArray)\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractArray{N}, returns the N-dimensional Inverse Discrete Fourier Transform of x. \n\njulia> IDFT(Complex{Float64},(10,10))\nℱ⁻¹  ℂ^(10, 10) -> ℂ^(10, 10) \n\njulia> IDFT(10,10)\nℱ⁻¹ ℝ^(10, 10) -> ℂ^(10, 10) \n\njulia> A = IDFT(ones(3))\nℱ⁻¹  ℝ^3 -> ℂ^3\n\njulia> A*ones(3)\n3-element Array{Complex{Float64},1}:\n 1.0+0.0im\n 0.0+0.0im\n 0.0+0.0im\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.RDFT",
    "page": "Abstract Operators",
    "title": "AbstractOperators.RDFT",
    "category": "type",
    "text": "RDFT([domainType=Float64::Type,] dim_in::Tuple [,dims=1])\n\nRDFT(dim_in...)\n\nRDFT(x::AbstractArray [,dims=1])\n\nCreates a LinearOperator which, when multiplied with a real array x, returns the DFT over the dimension dims, exploiting Hermitian symmetry. \n\njulia> RDFT(Float64,(10,10))\nℱ  ℝ^(10, 10) -> ℂ^(6, 10)\n\njulia> RDFT((10,10,10),2)\nℱ  ℝ^(10, 10, 10) -> ℂ^(10, 6, 10)\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.IRDFT",
    "page": "Abstract Operators",
    "title": "AbstractOperators.IRDFT",
    "category": "type",
    "text": "IRDFT([domainType=Float64::Type,] dim_in::Tuple, d::Int, [,dims=1])\n\nIRDFT(x::AbstractArray, d::Int, [,dims=1])\n\nCreates a LinearOperator which, when multiplied with a complex array x, returns the IDFT over the dimension dims, exploiting Hermitian symmetry. Like in the function BASE.irfft, d must satisfy div(d,2)+1 == size(x,dims).\n\njulia> A = IRDFT(Complex{Float64},(10,),19)\nℱ⁻¹  ℂ^10 -> ℝ^19 \n\njulia> A = IRDFT((5,10,8),19,2)\nℱ⁻¹  ℂ^(5, 10, 8) -> ℝ^(5, 19, 8)\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.DCT",
    "page": "Abstract Operators",
    "title": "AbstractOperators.DCT",
    "category": "type",
    "text": "DCT([domainType=Float64::Type,] dim_in::Tuple)\n\nDCT(dim_in...)\n\nDCT(x::AbstractArray)\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractArray{N}, returns the N-dimensional Inverse Discrete Cosine Transform of x. \n\njulia> DCT(Complex{Float64},(10,10))\nℱc  ℂ^(10, 10) -> ℂ^(10, 10) \n\njulia> DCT(10,10)\nℱc  ℝ^(10, 10) -> ℂ^(10, 10) \n\njulia> A = DCT(ones(3))\nℱc  ℝ^3 -> ℝ^3\n\njulia> A*ones(3)\n3-element Array{Float64,1}:\n 1.73205\n 0.0\n 0.0\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.IDCT",
    "page": "Abstract Operators",
    "title": "AbstractOperators.IDCT",
    "category": "type",
    "text": "IDCT([domainType=Float64::Type,] dim_in::Tuple)\n\nIDCT(dim_in...)\n\nIDCT(x::AbstractArray)\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractArray{N}, returns the N-dimensional Discrete Cosine Transform of x. \n\njulia> IDCT(Complex{Float64},(10,10))\nℱc⁻¹  ℂ^(10, 10) -> ℂ^(10, 10) \n\njulia> IDCT(10,10)\nℱc⁻¹  ℝ^(10, 10) -> ℂ^(10, 10) \n\njulia> A = IDCT(ones(3))\nℱc⁻¹  ℝ^3 -> ℝ^3\n\njulia> A*[1.;0.;0.]\n3-element Array{Float64,1}:\n 0.57735\n 0.57735\n 0.57735\n\n\n\n\n\n\n"
},

{
    "location": "operators/#Transformations-1",
    "page": "Abstract Operators",
    "title": "Transformations",
    "category": "section",
    "text": "DFT\nIDFT\nRDFT\nIRDFT\nDCT\nIDCT"
},

{
    "location": "operators/#AbstractOperators.Conv",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Conv",
    "category": "type",
    "text": "Conv([domainType=Float64::Type,] dim_in::Tuple, h::AbstractVector)\n\nConv(x::AbstractVector, h::AbstractVector)\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractVector, returns the convolution between x and h. Uses conv and hence FFT algorithm. \n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Xcorr",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Xcorr",
    "category": "type",
    "text": "Xcorr([domainType=Float64::Type,] dim_in::Tuple, h::AbstractVector)\n\nXcorr(x::AbstractVector, h::AbstractVector)\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractVector, returns the cross correlation between x and h. Uses xcross. \n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Filt",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Filt",
    "category": "type",
    "text": "Filt([domainType=Float64::Type,] dim_in::Tuple, b::AbstractVector, [a::AbstractVector,])\n\nFilt(x::AbstractVector, b::AbstractVector, [a::AbstractVector,])\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractVector, returns a vector y filtered by an IIR filter of coefficients b and a. If only b is provided a FIR is used to comute y instead. \n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.MIMOFilt",
    "page": "Abstract Operators",
    "title": "AbstractOperators.MIMOFilt",
    "category": "type",
    "text": "MIMOFilt([domainType=Float64::Type,] dim_in::Tuple, B::Vector{AbstractVector}, [A::Vector{AbstractVector},])\n\nMIMOFilt(x::AbstractMatrix, b::Vector{AbstractVector}, [a::Vector{AbstractVector},])\n\nCreates a LinearOperator which, when multiplied with a matrix X, returns a matrix Y. Here a Multiple Input Multiple Output system is evaluated: the columns of X and Y represent the input signals and output signals respectively. \n\nmathbfy_i = sum_j = 1^M mathbfh_ij * mathbfx_j \n\nwhere mathbfy_i and mathbfx_j are the i-th and j-th columns of the output Y and input X matrices respectively.\n\nThe filters mathbfh_ij can be represented either by providing coefficients B and A (IIR) or B alone (FIR). These coefficients must be given in a Vector of Vectors. \n\nFor example for a 3 by 2 MIMO system (i.e. size(X,2) == 3 inputs and size(Y,2) == 2 outputs) B must be:\n\nB = [b11, b12, b13, b21, b22, b23]\n\nwhere bij are vector containing the filter coeffients of h_{i,j}.\n\njulia> m,n = 10,3; #time samples, number of inputs\n\njulia> B  = [[1.;0.;1.],[1.;0.;1.],[1.;0.;1.],[1.;0.;1.],[1.;0.;1.],[1.;0.;1.], ];\n      #B = [   b11   ,     b12   ,    b13   ,   b21    ,   b22,       b23    , ]\n\njulia> A  = [[1.;1.;1.],[2.;2.;2.],[      3.],[      4.],[      5.],[      6.], ];\n      #A = [   a11   ,     a12   ,    a13   ,   a21    ,   a22,       a23    , ]\n\njulia> op = MIMOFilt(Float64, (m,n), B, A)\n※  ℝ^(10, 3) -> ℝ^(10, 2) \n\njulia> X = randn(m,n); #input signals\n\njulia> Y = op*X;       #output signals\n\njulia> Y[:,1] ≈ filt(B[1],A[1],X[:,1])+filt(B[2],A[2],X[:,2])+filt(B[3],A[3],X[:,3])\ntrue\n\njulia> Y[:,2] ≈ filt(B[4],A[4],X[:,1])+filt(B[5],A[5],X[:,2])+filt(B[6],A[6],X[:,3])\ntrue\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.ZeroPad",
    "page": "Abstract Operators",
    "title": "AbstractOperators.ZeroPad",
    "category": "type",
    "text": "ZeroPad([domainType::Type,] dim_in::Tuple, zp::Tuple)\n\nZeroPad(x::AbstractArray, zp::Tuple)\n\nCreate a LinearOperator which, when multiplied to an array x of size dim_in, returns an expanded array y of size dim_in .+ zp where y[1:dim_in[1], 1:dim_in[2] ... ] = x and zero elsewhere.  \n\njulia> Z = ZeroPad((2,2),(0,2))\n[I;0]  ℝ^(2, 2) -> ℝ^(2, 4)\n\njulia> Z*ones(2,2)\n2×4 Array{Float64,2}:\n 1.0  1.0  0.0  0.0\n 1.0  1.0  0.0  0.0\n\n\n\n\n\n\n"
},

{
    "location": "operators/#Convolution-1",
    "page": "Abstract Operators",
    "title": "Convolution",
    "category": "section",
    "text": "Conv\nXcorr\nFilt\nMIMOFilt\nZeroPad"
},

{
    "location": "operators/#AbstractOperators.FiniteDiff",
    "page": "Abstract Operators",
    "title": "AbstractOperators.FiniteDiff",
    "category": "type",
    "text": "FiniteDiff([domainType=Float64::Type,] dim_in::Tuple, direction = 1)\n\nFiniteDiff(x::AbstractArray, direction = 1)\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractArray{N}, returns the discretized gradient over the specified direction obtained using forward finite differences. \n\njulia> FiniteDiff(Float64,(3,))\nδx  ℝ^3 -> ℝ^2\n\njulia> FiniteDiff((3,4),2)\nδy  ℝ^(3, 4) -> ℝ^(3, 3)\n\njulia> all(FiniteDiff(ones(2,2,2,3),1)*ones(2,2,2,3) .== 0)\ntrue\n\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Variation",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Variation",
    "category": "type",
    "text": "Variation([domainType=Float64::Type,] dim_in::Tuple)\n\nVariation(dims...)\n\nVariation(x::AbstractArray)\n\nCreates a LinearOperator which, when multiplied with an array x::AbstractArray{N}, returns a matrix with its ith column consisting of the vectorized discretized gradient over the ith `direction obtained using forward finite differences. \n\njulia> Variation(Float64,(10,2))\nƲ  ℝ^(10, 2) -> ℝ^(20, 2)\n\njulia> Variation(2,2,2)\nƲ  ℝ^(2, 2, 2) -> ℝ^(8, 3)\n\njulia> Variation(ones(2,2))*[1. 2.; 1. 2.]\n4×2 Array{Float64,2}:\n 0.0  1.0\n 0.0  1.0\n 0.0  1.0\n 0.0  1.0\n\n\n\n\n\n\n"
},

{
    "location": "operators/#Finite-Differences-1",
    "page": "Abstract Operators",
    "title": "Finite Differences",
    "category": "section",
    "text": "FiniteDiff\nVariation"
},

{
    "location": "operators/#AbstractOperators.LBFGS",
    "page": "Abstract Operators",
    "title": "AbstractOperators.LBFGS",
    "category": "type",
    "text": "LBFGS(domainType::Type,dim_in::Tuple, M::Integer)\n\nLBFGS(dim_in::Tuple, M::Integer)\n\nLBFGS(x::AbstractArray, M::Integer)\n\nConstruct a Limited-Memory BFGS LinearOperator with memory M. The memory of LBFGS can be updated using the function update!, where the current iteration variable and gradient (x, grad) and the previous ones (x_prev and grad_prev) are needed:\n\njulia> L = LBFGS(Float64,(4,),5)\nLBFGS  ℝ^4 -> ℝ^4\n\njulia> update!(L,x,x_prev,grad,grad_prev); # update memory\n\njulia> d = L*grad; # compute new direction\n\n\nUse  reset!(L) to cancel the memory of the operator.\n\n\n\n\n\n"
},

{
    "location": "operators/#Optimization-1",
    "page": "Abstract Operators",
    "title": "Optimization",
    "category": "section",
    "text": "LBFGS"
},

{
    "location": "operators/#Nonlinear-operators-1",
    "page": "Abstract Operators",
    "title": "Nonlinear operators",
    "category": "section",
    "text": ""
},

{
    "location": "operators/#AbstractOperators.Exp",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Exp",
    "category": "type",
    "text": "Exp([domainType=Float64::Type,] dim_in::Tuple)\n\nCreates the exponential non-linear operator with input dimensions dim_in:\n\ne^ mathbfx \n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Pow",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Pow",
    "category": "type",
    "text": "Pow([domainType=Float64::Type,] dim_in::Tuple)\n\nElementwise power p non-linear operator with input dimensions dim_in.\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Cos",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Cos",
    "category": "type",
    "text": "Cos([domainType=Float64::Type,] dim_in::Tuple)\n\nCreates a cosine non-linear operator with input dimensions dim_in:\n\ncos (mathbfx )\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Sin",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Sin",
    "category": "type",
    "text": "Sin([domainType=Float64::Type,] dim_in::Tuple)\n\nCreates a sinusoid non-linear operator with input dimensions dim_in:\n\nsin( mathbfx )\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Atan",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Atan",
    "category": "type",
    "text": "Atan([domainType=Float64::Type,] dim_in::Tuple)\n\nCreates an inverse tangent non-linear operator with input dimensions dim_in:\n\ntextatan ( mathbfx )\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.Tanh",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Tanh",
    "category": "type",
    "text": "Tanh([domainType=Float64::Type,] dim_in::Tuple)\n\nCreates an hyperbolic tangent non-linear operator with input dimensions dim_in:\n\ntexttanh ( mathbfx )\n\n\n\n\n\n"
},

{
    "location": "operators/#Basic-1",
    "page": "Abstract Operators",
    "title": "Basic",
    "category": "section",
    "text": "Exp\nPow\nCos\nSin\nAtan\nTanh"
},

{
    "location": "operators/#AbstractOperators.Sigmoid",
    "page": "Abstract Operators",
    "title": "AbstractOperators.Sigmoid",
    "category": "type",
    "text": "Sigmoid([domainType=Float64::Type,] dim_in::Tuple, γ = 1.)\n\nCreates the sigmoid non-linear operator with input dimensions dim_in.\n\nsigma(mathbfx) = frac11+e^-gamma mathbfx  \n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.SoftPlus",
    "page": "Abstract Operators",
    "title": "AbstractOperators.SoftPlus",
    "category": "type",
    "text": "SoftPlus([domainType=Float64::Type,] dim_in::Tuple)\n\nCreates the softplus non-linear operator with input dimensions dim_in.\n\nsigma(mathbfx) = log (1 + e^x )\n\n\n\n\n\n"
},

{
    "location": "operators/#AbstractOperators.SoftMax",
    "page": "Abstract Operators",
    "title": "AbstractOperators.SoftMax",
    "category": "type",
    "text": "SoftMax([domainType=Float64::Type,] dim_in::Tuple)\n\nCreates the softmax non-linear operator with input dimensions dim_in.\n\nsigma(mathbfx) = frace^mathbfx  sum e^mathbfx  \n\n\n\n\n\n"
},

{
    "location": "operators/#Sigmoids-1",
    "page": "Abstract Operators",
    "title": "Sigmoids",
    "category": "section",
    "text": "Sigmoid\nSoftPlus\nSoftMax"
},

{
    "location": "calculus/#",
    "page": "Calculus rules",
    "title": "Calculus rules",
    "category": "page",
    "text": ""
},

{
    "location": "calculus/#Calculus-rules-1",
    "page": "Calculus rules",
    "title": "Calculus rules",
    "category": "section",
    "text": ""
},

{
    "location": "calculus/#AbstractOperators.VCAT",
    "page": "Calculus rules",
    "title": "AbstractOperators.VCAT",
    "category": "type",
    "text": "VCAT(A::AbstractOperator...)\n\nShorthand constructors: \n\n[A1; A2 ...] \n\nvcat(A...) \n\nVertically concatenate AbstractOperators. Notice that all the operators must share the same domain dimensions and type, e.g. size(A1,2) == size(A2,2) and domainType(A1) == domainType(A2).\n\njulia> VCAT(DFT(4,4),Variation((4,4)))\n[ℱ;Ʋ]  ℝ^(4, 4) -> ℂ^(4, 4)  ℝ^(16, 2)\n\njulia> V = [Eye(3); DiagOp(2*ones(3))]\n[I;╲]  ℝ^3 -> ℝ^3  ℝ^3\n\n\njulia> vcat(V,FiniteDiff((3,)))\nVCAT  ℝ^3 -> ℝ^3  ℝ^3  ℝ^2\n\nWhen multiplying a VCAT with an array of the proper size, the result will be a Tuple containing arrays with the VCAT\'s codomain type and size.\n\njulia> V*ones(3)\n([1.0, 1.0, 1.0], [2.0, 2.0, 2.0])\n\n\n\n\n\n\n"
},

{
    "location": "calculus/#AbstractOperators.HCAT",
    "page": "Calculus rules",
    "title": "AbstractOperators.HCAT",
    "category": "type",
    "text": "HCAT(A::AbstractOperator...)\n\nShorthand constructors: \n\n[A1 A2 ...] \n\nhcat(A...) \n\nHorizontally concatenate AbstractOperators. Notice that all the operators must share the same codomain dimensions and type, e.g. size(A1,1) == size(A2,1) and codomainType(A1) == codomainType(A2).\n\njulia> HCAT(DFT(10),DCT(Complex{Float64},20)[1:10])\n[ℱ,↓*ℱc]  ℝ^10  ℂ^20 -> ℂ^10\n\njulia> H = [Eye(3) DiagOp(2*ones(3))]\n[I,╲]  ℝ^3  ℝ^3 -> ℝ^3\n\njulia> hcat(H,DCT(10))\nHCAT  ℝ^10  ℝ^10  ℝ^10 -> ℝ^10\n\nTo evaluate HCAT operators multiply them with a Tuple of AbstractArray of the correct dimensions and type. \n\njulia> H*(ones(3),ones(3))\n3-element Array{Float64,1}:\n 3.0\n 3.0\n 3.0\n\n\n\n\n\n\n\n"
},

{
    "location": "calculus/#AbstractOperators.DCAT",
    "page": "Calculus rules",
    "title": "AbstractOperators.DCAT",
    "category": "type",
    "text": "DCAT(A::AbstractOperator...)\n\nBlock-diagonally concatenate AbstractOperators.\n\njulia> D = DCAT(HCAT(Eye(2),Eye(2)),DFT(3))\n[[I,I],0;0,ℱ]  ℝ^2  ℝ^2  ℝ^4 -> ℝ^2  ℂ^3\n\njulia> DCAT(Eye(10),Eye(10),FiniteDiff((4,4)))\nDCAT  ℝ^10  ℝ^10  ℝ^(4, 4) -> ℝ^10  ℝ^10  ℝ^(3, 4)\n\nTo evaluate DCAT operators multiply them with a Tuple of AbstractArray of the correct domain size and type. The output will consist as well of a Tuple with the codomain type and size of the DCAT.\n\njulia> D*(ones(2),ones(2),ones(3))\n([2.0, 2.0], Complex{Float64}[3.0+0.0im, 0.0+0.0im, 0.0+0.0im])\n\n\n\n\n\n\n"
},

{
    "location": "calculus/#Concatenation-1",
    "page": "Calculus rules",
    "title": "Concatenation",
    "category": "section",
    "text": "VCAT\nHCAT\nDCAT"
},

{
    "location": "calculus/#AbstractOperators.Compose",
    "page": "Calculus rules",
    "title": "AbstractOperators.Compose",
    "category": "type",
    "text": "Compose(A::AbstractOperator,B::AbstractOperator)\n\nShorthand constructor: \n\nA*B \n\nCompose different AbstractOperators. Notice that the domain and codomain of the operators A and B must match, i.e. size(A,2) == size(B,1) and domainType(A) == codomainType(B).\n\njulia> Compose(DFT(16,2),Variation((4,4)))\nℱc*Ʋ  ℝ^(4, 4) -> ℝ^(16, 2)\n\njulia> MatrixOp(randn(20,10))*DCT(10)\n▒*ℱc  ℝ^10 -> ℝ^20\n\n\n\n\n\n\n"
},

{
    "location": "calculus/#AbstractOperators.NonLinearCompose",
    "page": "Calculus rules",
    "title": "AbstractOperators.NonLinearCompose",
    "category": "type",
    "text": "NonLinearCompose(A::AbstractOperator,B::AbstractOperator)\n\nCompose opeators in such fashion:\n\nA(⋅)*B(⋅)\n\nExample: Matrix multiplication\n\njulia> n1,m1,n2,m2 = 3,4,4,6 \n\njulia> x = (randn(n1,m1),randn(n2,m2)); #inputs\n\njulia> C = NonLinearCompose( Eye(n1,n2), Eye(m1,m2) )\n# i.e. `I(⋅)*I(⋅)`\n\njulia> Y = x[1]*x[2]\n\njulia> C*x ≈ Y\ntrue\n\n\n\n\n\n\n"
},

{
    "location": "calculus/#AbstractOperators.Hadamard",
    "page": "Calculus rules",
    "title": "AbstractOperators.Hadamard",
    "category": "type",
    "text": "Hadamard(A::AbstractOperator,B::AbstractOperator)\n\nCompose opeators such that their output is multiplied elementwise:\n\nA(⋅).*B(⋅)\n\nExample\n\njulia> n,m = 5,10\n\njulia> x = (randn(n),randn(m)); #inputs\n\njulia> A = randn(m,n); #A matrix\n\njulia> C = Hadamard( MatrixOp(A), Eye(m) )\n# i.e. `A(⋅).*I(⋅)`\n\njulia> Y = (A*x[1]).*x[2]\n\njulia> C*x ≈ Y\ntrue\n\n\n\n\n\n\n"
},

{
    "location": "calculus/#Composition-1",
    "page": "Calculus rules",
    "title": "Composition",
    "category": "section",
    "text": "Compose\nNonLinearCompose\nHadamard"
},

{
    "location": "calculus/#Transformations-1",
    "page": "Calculus rules",
    "title": "Transformations",
    "category": "section",
    "text": "Scale\nTranspose\nAffineAdd\nBroadCast\nReshape\nJacobian"
},

{
    "location": "properties/#",
    "page": "Properties",
    "title": "Properties",
    "category": "page",
    "text": ""
},

{
    "location": "properties/#Properties-1",
    "page": "Properties",
    "title": "Properties",
    "category": "section",
    "text": ""
},

{
    "location": "properties/#Base.size",
    "page": "Properties",
    "title": "Base.size",
    "category": "function",
    "text": "size(A::AbstractOperator, [dom,])\n\nReturns the size of an AbstractOperator. Type size(A,1) for the size of the codomain and size(A,2) for the size of the codomain. \n\n\n\n\n\n"
},

{
    "location": "properties/#Base.ndims",
    "page": "Properties",
    "title": "Base.ndims",
    "category": "function",
    "text": "ndims(A::AbstractOperator, [dom,])\n\nReturns a Tuple with the number of dimensions of the codomain and domain of an AbstractOperator.  Type ndims(A,1) for the number of dimensions of the codomain and ndims(A,2) for the number of dimensions of the codomain.\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.ndoms",
    "page": "Properties",
    "title": "AbstractOperators.ndoms",
    "category": "function",
    "text": "ndoms(L::AbstractOperator, [dom::Int]) -> (number of codomains, number of domains)\n\nReturns the number of codomains and domains  of a AbstractOperator. Optionally you can specify the codomain (with dom = 1) or the domain (with dom = 2)\n\njulia > ndoms(DFT(10,10))\n(1,1)\n\njulia> ndoms(hcat(DFT(10,10),DFT(10,10)))\n(1, 2)\n\njulia> ndoms(hcat(DFT(10,10),DFT(10,10)),2)\n2\n\njulia> ndoms(DCAT(DFT(10,10),DFT(10,10)))\n(2,2)\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.domainType",
    "page": "Properties",
    "title": "AbstractOperators.domainType",
    "category": "function",
    "text": "domainType(A::AbstractOperator)\n\nReturns the type of the domain.\n\njulia> domainType(DFT(10))\nFloat64\n\njulia> domainType(hcat(Eye(Complex{Float64},(10,)),DFT(Complex{Float64},10)))\n(Complex{Float64}, Complex{Float64})\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.codomainType",
    "page": "Properties",
    "title": "AbstractOperators.codomainType",
    "category": "function",
    "text": "codomainType(A::AbstractOperator)\n\nReturns the type of the codomain.\n\njulia> codomainType(DFT(10))\nComplex{Float64}\n\njulia> codomainType(vcat(Eye(Complex{Float64},(10,)),DFT(Complex{Float64},10)))\n(Complex{Float64}, Complex{Float64})\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.displacement",
    "page": "Properties",
    "title": "AbstractOperators.displacement",
    "category": "function",
    "text": "displacement(A::AbstractOperator)\n\nReturns the displacement of the operator.\n\njulia> A = AffineAdd(Eye(4),[1.;2.;3.;4.])\nI+d  ℝ^4 -> ℝ^4\n\njulia> displacement(A)\n4-element Array{Float64,1}:\n 1.0\n 2.0\n 3.0\n 4.0\n\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.remove_displacement",
    "page": "Properties",
    "title": "AbstractOperators.remove_displacement",
    "category": "function",
    "text": "remove_displacement(A::AbstractOperator)\n\nRemoves the displacement of the operator.\n\n\n\n\n\n"
},

{
    "location": "properties/#Size-and-Domains-1",
    "page": "Properties",
    "title": "Size and Domains",
    "category": "section",
    "text": "size\nndims\nndoms\ndomainType\ncodomainType\ndisplacement\nremove_displacement"
},

{
    "location": "properties/#AbstractOperators.is_linear",
    "page": "Properties",
    "title": "AbstractOperators.is_linear",
    "category": "function",
    "text": "is_linear(A::AbstractOperator)\n\nTest whether A is a LinearOperator\n\njulia> is_linear(Eye(2))\ntrue\n\njulia> is_linear(Sigmoid(Float64,(2,)))\nfalse\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_eye",
    "page": "Properties",
    "title": "AbstractOperators.is_eye",
    "category": "function",
    "text": "is_eye(A::AbstractOperator)\n\nTest whether A is an Identity operator\n\njulia> is_eye(Eye(10))\ntrue\n\njulia> is_eye(Zeros(Float64,(10,),(10,)))\nfalse\n\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_null",
    "page": "Properties",
    "title": "AbstractOperators.is_null",
    "category": "function",
    "text": "is_null(A::AbstractOperator)\n\nTest whether A is null.\n\njulia> is_null(Zeros(Float64,(10,),(10,)))\ntrue\n\njulia> is_null(Eye(10))\nfalse\n\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_diagonal",
    "page": "Properties",
    "title": "AbstractOperators.is_diagonal",
    "category": "function",
    "text": "is_diagonal(A::AbstractOperator)\n\nTest whether A is diagonal.\n\njulia> is_diagonal(Eye(10))\ntrue\n\njulia> is_diagonal(FiniteDiff((10,)))\nfalse\n\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_AcA_diagonal",
    "page": "Properties",
    "title": "AbstractOperators.is_AcA_diagonal",
    "category": "function",
    "text": "is_AcA_diagonal(A::AbstractOperator)\n\nTest whether A\'*A is diagonal.\n\njulia> is_AcA_diagonal(Eye(10))\ntrue\n\njulia> is_AcA_diagonal(GetIndex((10,),1:3))\nfalse\n\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_AAc_diagonal",
    "page": "Properties",
    "title": "AbstractOperators.is_AAc_diagonal",
    "category": "function",
    "text": "is_AAc_diagonal(A::AbstractOperator)\n\nTest whether A*A\' is diagonal.\n\njulia> is_AAc_diagonal(Eye(10))\ntrue\n\njulia> is_AAc_diagonal(GetIndex((10,),1:3))\nfalse\n\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_orthogonal",
    "page": "Properties",
    "title": "AbstractOperators.is_orthogonal",
    "category": "function",
    "text": "is_orthogonal(A::AbstractOperator)\n\nTest whether A is orthogonal.\n\njulia> is_orthogonal(DCT(10))\ntrue\n\njulia> is_orthogonal(MatrixOp(randn(3,4)))\nfalse\n\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_invertible",
    "page": "Properties",
    "title": "AbstractOperators.is_invertible",
    "category": "function",
    "text": "is_invertable(A::AbstractOperator)\n\nTest whether A is easily invertable.\n\njulia> is_invertible(DFT(10))\ntrue\n\njulia> is_invertable(MatrixOp(randn(3,4)))\nfalse\n\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_full_row_rank",
    "page": "Properties",
    "title": "AbstractOperators.is_full_row_rank",
    "category": "function",
    "text": "is_full_row_rank(A::AbstractOperator)\n\nTest whether A is easily invertable.\n\njulia> is_full_row_rank(MatrixOp(randn(3,4)))\ntrue\n\njulia> is_full_row_rank(MatrixOp(randn(4,3)))\nfalse\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_full_column_rank",
    "page": "Properties",
    "title": "AbstractOperators.is_full_column_rank",
    "category": "function",
    "text": "is_full_row_rank(A::AbstractOperator)\n\nTest whether A is easily invertable.\n\njulia> is_full_column_rank(MatrixOp(randn(4,3)))\ntrue\n\njulia> is_full_column_rank(MatrixOp(randn(3,4)))\nfalse\n\n\n\n\n\n"
},

{
    "location": "properties/#AbstractOperators.is_sliced",
    "page": "Properties",
    "title": "AbstractOperators.is_sliced",
    "category": "function",
    "text": "is_sliced(A::AbstractOperator)\n\nTest whether A is a sliced operator.\n\njulia> is_sliced(GetIndex((10,), 1:5))\ntrue\n\n\n\n\n\n\n"
},

{
    "location": "properties/#Properties-2",
    "page": "Properties",
    "title": "Properties",
    "category": "section",
    "text": "is_linear\nis_eye\nis_null\nis_diagonal\nis_AcA_diagonal\nis_AAc_diagonal\nis_orthogonal\nis_invertible\nis_full_row_rank\nis_full_column_rank\nis_sliced"
},

]}
