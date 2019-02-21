var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AMD-1",
    "page": "Readme",
    "title": "AMD",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)Given a square sparse matrix, compute an approximate minimum degree ordering. This package is an interface to the AMD library of Amestoy, Davis and Duff."
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "Pkg.add(\"AMD\")\nPkg.test(\"AMD\")"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "In the simplest case:julia> using AMD\njulia> A = sprand(10, 10, .5);\njulia> p = amd(A);If statistics on the permutation are of interest and/or for changing the default control parameters:julia> meta = Amd{Clong}();  # because A\'s index type is Int64 on my platform\njulia> # optionally change meta.control: ?Amd\njulia> p = amd(A, meta)\njulia> print(meta)\nControl:\n  dense row parameter: 10.0\n  aggressive absorption: 1.0\nInfo:\n  status: ok\n  matrix size: 10.0\n  number of nonzeros: 54.0\n  pattern symmetry: 0.5\n  number of nonzeros on diagonal: 6.0\n  number of nonzeros in A + A\': 72.0\n  number of dense columns: 0.0\n  memory used: 1408.0\n  number of garbage collections: 0.0\n  approx number of nonzers in factor: 38.0\n  number of float divides: 38.0\n  number of float * or - for LDL: 114.0\n  number of float * or - for LU: 190.0\n  max nonzeros in any column of factor: 8.0AMD computes a fill-reducing permutation based on the sparsity pattern of A + Aᵀ. The input pattern can be anything: diagonal entries will be ignored and the rest will be used to implicitly work on the pattern of A + Aᵀ. Thus if A is symmetric, it is sufficient to supply the strict lower or upper triangle only."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "P. R. Amestoy, T. A. Davis and I. S. Duff. An Approximate Minimum Degree Ordering Algorithm. SIAM Journal on Matrix Analysis and Applications, 17(4), pp. 886&ndash;905, 1996. Doi 10.1137/S0895479894278952\nP. R. Amestoy, T. A. Davis, and I. S. Duff. Algorithm 837: An approximate minimum degree ordering algorithm. ACM Transactions on Mathematical Software, 30(3), pp. 381&ndash;388, 2004. Doi 10.1145/1024074.1024081"
},

{
    "location": "autodocs/#AMD.Amd",
    "page": "Docstrings",
    "title": "AMD.Amd",
    "category": "type",
    "text": "Base type to hold control and information related to a call to AMD. control is a vector of C doubles with components:\n\nd = control[AMD_DENSE]: rows with more than max(d√n, 16) entries are\n\nconsidered \"dense\" and appear last in the permutation. If d < 0 no row will be treated as dense.\n\ncontrol[AMD_AGGRESSIVE]: triggers aggressive absorption if nonzero.\n\ninfo is a vector of C doubles that contains statistics on the ordering.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AMD.amd",
    "page": "Docstrings",
    "title": "AMD.amd",
    "category": "function",
    "text": "amd(A, meta)\n\nor\n\namd(A)\n\nGiven a sparse matrix A and an Amd structure meta, p = amd(A, meta) computes the approximate minimum degree ordering of A + A\'. The ordering is represented as a permutation vector p. Factorizations of A[p,p] tend to be sparser than those of A.\n\nThe matrix A must be square and the sparsity pattern of A + A\' is implicit. Thus it is convenient to represent symmetric matrices using one triangle only. The diagonal of A may be present but will be ignored.\n\nThe ordering may be influenced by changing meta.control[AMD_DENSE] and meta.control[AMD_AGGRESSIVE].\n\nStatistics on the ordering appear in meta.info.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AMD.AMDAMD.AMD_AGGRESSIVEAMD.AMD_CONTROLAMD.AMD_DENSEAMD.AMD_DMAXAMD.AMD_INFOAMD.AMD_INVALIDAMD.AMD_LNZAMD.AMD_MEMORYAMD.AMD_NAMD.AMD_NCMPAAMD.AMD_NDENSEAMD.AMD_NDIVAMD.AMD_NMULTSUBS_LDLAMD.AMD_NMULTSUBS_LUAMD.AMD_NZAMD.AMD_NZDIAGAMD.AMD_NZ_A_PLUS_ATAMD.AMD_OKAMD.AMD_OK_BUT_JUMBLEDAMD.AMD_OUT_OF_MEMORYAMD.AMD_STATUSAMD.AMD_SYMMETRYAMD.AmdAMD._ClongAMD.__init__AMD._amd_defaultsAMD._amd_l_defaultsAMD._amd_l_orderAMD._amd_l_validAMD._amd_orderAMD._amd_validAMD._libamdAMD.amdAMD.amd_validAMD.evalAMD.includeAMD.statuses"
},

]}
