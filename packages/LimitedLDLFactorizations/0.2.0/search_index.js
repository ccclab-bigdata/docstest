var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Limited-Memory-LDL\'-Factorization-1",
    "page": "Readme",
    "title": "Limited-Memory LDL\' Factorization",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)A Port of LLDL to Julia See https://github.com/optimizers/lldl.LimitedLDLFactorizations is a limited-memory LDL\' factorization for symmetric matrices. Given a symmetric matrix A, we search for a unit lower triangular L, a diagonal D and a diagonal ∆ such that LDL\' is an incomplete factorization of A+∆. The elements of the diagonal matrix ∆ have the form ±α, where α ≥ 0 is a shift."
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "julia> Pkg.add(\"LimitedLDLFactorizations\")"
},

{
    "location": "#Brief-Description-1",
    "page": "Readme",
    "title": "Brief Description",
    "category": "section",
    "text": "The only function exported is lldl(). Supply a dense array or sparse matrix. Dense arrays will be converted to sparse. The strict lower triangle and diagonal of sparse matrices will be extracted.Optionally, supplya memory parameter to allow more fill in the L factor;\na drop tolerance to discard small elements in the L factor;\nan initial shift to speed up the process in case the factorization does not exist without shift.Currently, ordering is not implicitly supported. The input matrix A must be ordered explicitly before calling lldl(). For example:julia> using AMD\njulia> p = amd(A)\njulia> PAP = A[p, p]\njulia> L, d, α = lldl(A)Using a memory parameter larger than or equal to the size of A will yield an exact factorization provided one exists without pivoting. That is the case of symmetric quasi-definite matrices. However, it is probably not the most efficient way to compute such a factorization."
},

{
    "location": "#More-Examples-1",
    "page": "Readme",
    "title": "More Examples",
    "category": "section",
    "text": "See examples/example.jl and tests/runtest.jl."
},

{
    "location": "#Complete-Description-1",
    "page": "Readme",
    "title": "Complete Description",
    "category": "section",
    "text": "[1] C.-J. Lin and J. J. Moré. Incomplete Cholesky factorizations with limited     memory. SIAM Journal on Scientific Computing, 21(1):24–45, 1999.     DOI https://doi.org/10.1137/S1064827597327334. <br> [2] http://www.mcs.anl.gov/~more/icfs <br> [3] D. Orban. Limited-Memory LDLT Factorization of Symmetric Quasi-Definite     Matrices with Application to Constrained Optimization. Numerical Algorithms     70(1):9–41, 2015. DOI https://doi.org/10.1007/s11075-014-9933-x. <br> [4] https://github.com/optimizers/lldl"
},

{
    "location": "autodocs/#LimitedLDLFactorizations.LimitedLDLFactorizations",
    "page": "Docstrings",
    "title": "LimitedLDLFactorizations.LimitedLDLFactorizations",
    "category": "module",
    "text": "A Pure Julia Version of LLDL. A left-looking implementation of the sparse LDL factorization of a symmetric matrix with the possibility to compute a limited-memory incomplete factorization.\n\nDominique Orban <dominique.orban@gmail.com> Montreal, April 2015, December 2015, July 2017.\n\nThis code is strongly inspired by Lin and Moré\'s ICFS [1,2]. The modified version is described in [3,4].\n\nReferences\n\n[1] C.-J. Lin and J. J. Moré. Incomplete Cholesky factorizations with limited     memory. SIAM Journal on Scientific Computing, 21(1):24–45, 1999. [2] http://www.mcs.anl.gov/~more/icfs [3] D. Orban. Limited-Memory LDLT Factorization of Symmetric Quasi-Definite     Matrices with Application to Constrained Optimization. Numerical Algorithms     70(1):9–41, 2015. DOI 10.1007/s11075-014-9933-x [4] https://github.com/optimizers/lldl\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LimitedLDLFactorizations.abspermute!",
    "page": "Docstrings",
    "title": "LimitedLDLFactorizations.abspermute!",
    "category": "function",
    "text": "Permute the elements of keys in place so that\n\nabs(x[keys[i]]) ≤ abs(x[keys[k]])  for i = 1, ..., k\nabs(x[keys[k]]) ≤ abs(x[keys[i]])  for i = k, ..., n,\n\nwhere n is the length of keys. The length of x should be at least n. Only keys is modified.\n\nFrom the MINPACK2 function dsel2 by Kastak, Lin and Moré.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LimitedLDLFactorizations.lldl",
    "page": "Docstrings",
    "title": "LimitedLDLFactorizations.lldl",
    "category": "function",
    "text": "lldl(A)\n\nCompute the limited-memory LDLᵀ factorization of A without pivoting.\n\nArguments\n\nA::SparseMatrixCSC{Tv,Ti}: matrix to factorize (its strict lower triangle and                              diagonal will be extracted)\n\nKeyword arguments\n\nmemory::Int=0: extra amount of memory to allocate for the incomplete factor L.                  The total memory allocated is nnz(T) + n * memory, where                  T is the strict lower triangle of A and n is the size of A.\nα::Tv=Tv(0): initial value of the shift in case the incomplete LDLᵀ                factorization of A is found to not exist. The shift will be                gradually increased from this initial value until success.\ndroptol::Tv=Tv(0): to further sparsify L, all elements with magnitude smaller                      than droptol are dropped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LimitedLDLFactorizations.LimitedLDLFactorizationsLimitedLDLFactorizations.abspermute!LimitedLDLFactorizations.attempt_lldl!LimitedLDLFactorizations.evalLimitedLDLFactorizations.includeLimitedLDLFactorizations.lldl"
},

]}
