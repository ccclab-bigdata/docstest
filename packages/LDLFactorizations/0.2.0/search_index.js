var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LDLFactorizations:-Factorization-of-Symmetric-Matrices-1",
    "page": "Readme",
    "title": "LDLFactorizations: Factorization of Symmetric Matrices",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)A translation of Tim Davis\'s Concise LDL Factorization, part of SuiteSparse.This package is appropriate for matrices A that possess a factorization of the form LDLᵀ without pivoting, where L is unit lower triangular and D is diagonal (indefinite in general), including definite and quasi-definite matrices.LDLFactorizations.jl should not be expected to be as fast, as robust or as accurate as factorization packages such as HSL.jl, MUMPS.jl or Pardiso.jl. Those are multifrontal and/or implement various forms of parallelism, and employ sophisticated pivot strategies.The main advantages of LDLFactorizations.jl are thatit is very short and has a small footprint;\nit is in pure Julia, and so\n2.a. it does not require external compiled dependencies;\n2.b. it will work with multiple input data types.Whereas MUMPS.jl, HSL.jl and Pardiso.jl only work with single and double precision reals and complex data types, LDLFactorizations.jl accepts any numerical data type."
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "julia> Pkg.add(\"LDLFactorizations\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The only exported function is ldl(). Calling ldl() with a dense array converts it to a sparse matrix. Only the lower triangle of the matrix is accessed, thus ldl(A) is always the same as ldl(A - triu(A, 1) + tril(A, -1)\'). A permutation ordering can be supplied: ldl(A, p) where p is an Int array representing a permutation of the integers between 1 and the order of A. If no permutation is supplied, one is automatically computed using AMD.jl.ldl returns a factorization in the form of a LDLFactorization object. The \\ method is implemented for objects of type LDLFactorization so that solving a linear system is as easy asjulia> LDLT = ldl(A)\njulia> x = LDLT \\ b  # solves Ax=bThe factorization can of course be reused to solve for multiple right-hand sides."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Timothy A. Davis. 2005. Algorithm 849: A concise sparse Cholesky factorization package. ACM Trans. Math. Softw. 31, 4 (December 2005), 587-591. DOI 10.1145/1114268.1114277.Like the original LDL, this package is distributed under the LGPL.(Image: GPLv3)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LDLFactorizations.LDLFactorizationLDLFactorizations.LDLFactorizationsLDLFactorizations.SQDExceptionLDLFactorizations.\\LDLFactorizations.evalLDLFactorizations.includeLDLFactorizations.ldlLDLFactorizations.ldl_dsolve!LDLFactorizations.ldl_lsolve!LDLFactorizations.ldl_ltsolve!LDLFactorizations.ldl_numeric!LDLFactorizations.ldl_solveLDLFactorizations.ldl_symbolic!"
},

]}
