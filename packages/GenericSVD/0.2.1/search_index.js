var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GenericSVD.jl-1",
    "page": "Readme",
    "title": "GenericSVD.jl",
    "category": "section",
    "text": "(Image: Travis Build Status) (Image: AppVeyor Build status)Implements Singular Value Decomposition for generic number types, such as BigFloat, Complex{BigFloat} or Quaternions. It internally overloads several Base functions such that existing methods (svd, svdfact and svdvals) should work directly.It uses a Golub-Kahan 2-stage algorithm of bidiagonalization with Householder reflections, followed by an implicit QR with shift."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Based on initial code by Andreas Noack."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Golub, G. H. and Van Loan, C. F. (2013), \"§8.6.3 The SVD Algorithm\", Matrix Computations (4th ed.), Johns Hopkins University Press, Baltimore, MD, USA."
},

{
    "location": "autodocs/#GenericSVD.PackedUVt",
    "page": "Docstrings",
    "title": "GenericSVD.PackedUVt",
    "category": "type",
    "text": "PackedUVt <: Factorization{T}\n\nPacked storage of bidiagonalizing QR reflectors U and V\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSVD.bidiagonalize_tall!",
    "page": "Docstrings",
    "title": "GenericSVD.bidiagonalize_tall!",
    "category": "function",
    "text": "bidiagonalize_tall!{T}(A::Matrix{T},B::Bidiagonal)\n\nBidiagonalize a tall matrix A into B. Both arguments are overwritten.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSVD.is_offdiag_approx_zero!",
    "page": "Docstrings",
    "title": "GenericSVD.is_offdiag_approx_zero!",
    "category": "function",
    "text": "is_offdiag_approx_zero!(B::Bidiagonal,i,ɛ)\n\nTests if the element B[i-1,i] is approximately zero, using the criteria\n\n    B_i-1i  ɛ*(B_i-1i-1 + B_ii)\n\nIf true, sets the element to exact zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSVD.svd_bidiag!",
    "page": "Docstrings",
    "title": "GenericSVD.svd_bidiag!",
    "category": "function",
    "text": "svd_bidiag!(B::Bidiagonal [, U, Vt [, ϵ]])\n\nCompute the SVD of a bidiagonal matrix B, via an implicit QR algorithm with shift (known as a Golub-Kahan iterations).\n\nOptional arguments:\n\nU and Vt: orthogonal matrices which pre- and post-multiply B, for computing the SVD of a full matrix X = U*B*Vt from its bidiagonalized form.\nϵ: the tolerance for testing zeros of the offdiagonal elements of B (see below).\n\nAlgorithm:\n\nThis proceeds by iteratively finding the lowest strictly-bidiagonal submatrix, i.e. n₁, n₂ such that\n\n     [ d ?           ]\n     [   d 0         ]\n  n₁ [     d e       ]\n     [       d e     ]\n  n₂ [         d 0   ]\n     [           d 0 ]\n\nthen applying a Golub-Kahan QR iteration.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSVD.svd_gk!",
    "page": "Docstrings",
    "title": "GenericSVD.svd_gk!",
    "category": "function",
    "text": "svd_gk!(B::Bidiagonal{T},U,Vt,n₁,n₂,shift) where T <: Real\n\nApplies a Golub-Kahan SVD step (an implicit QR with shift) to the submatrix B[n₁:n₂,n₁:n₂], applying the inverse transformations to U and Vt (preserving U*B*Vt).\n\nA Givens rotation is applied to the top 2x2 matrix, and the resulting \"bulge\" is \"chased\" down the diagonal to the bottom of the matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSVD.svd_zerodiag_col!",
    "page": "Docstrings",
    "title": "GenericSVD.svd_zerodiag_col!",
    "category": "function",
    "text": "svd_zerodiag_col!(B::Bidiagonal,Vt,n₁,n₂)\n\nSets B[n₂,n₂] to zero, then zeros out column n₂ by applying sequential column (right) Givens rotations up to n₁, and the corresponding inverse rotations to Vt (preserving B*Vt).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSVD.svd_zerodiag_row!",
    "page": "Docstrings",
    "title": "GenericSVD.svd_zerodiag_row!",
    "category": "function",
    "text": "svd_zerodiag_row!(U,B,n₁,n₂)\n\nSets B[n₁,n₁] to zero, then zeros out row n₁ by applying sequential row (left) Givens rotations up to n₂, and the corresponding inverse rotations to U (preserveing U*B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenericSVD.svdvals2x2",
    "page": "Docstrings",
    "title": "GenericSVD.svdvals2x2",
    "category": "function",
    "text": "svdvals2x2(f, h, g)\n\nThe singular values of the matrix\n\nB = [ f g ;\n      0 h ]\n\n(i.e. the sqrt-eigenvalues of B\'*B).\n\nThis is a direct translation of LAPACK DLAS2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GenericSVD.GenericSVDGenericSVD.PackedUVtGenericSVD.bidiagonalize_tall!GenericSVD.evalGenericSVD.generic_svdfact!GenericSVD.generic_svdvals!GenericSVD.includeGenericSVD.is_offdiag_approx_zero!GenericSVD.svd_bidiag!GenericSVD.svd_gk!GenericSVD.svd_zerodiag_col!GenericSVD.svd_zerodiag_row!GenericSVD.svdvals2x2GenericSVD.unpack"
},

]}
