var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Linear-Fractional-Transformations-1",
    "page": "Readme",
    "title": "Linear Fractional Transformations",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)This module defines a LFT data type to represent a complex linear fractional transformation. This is a function on the extended complex numbers (include complex infinity) defined byf(z) = (a*z + b) / (c*z + d)where a,b,c,d are (finite) complex numbers and a*d-b*c != 0.These are also known as Möbius transformations."
},

{
    "location": "#Constructors-1",
    "page": "Readme",
    "title": "Constructors",
    "category": "section",
    "text": "The basic constructor takes four values:julia> using LinearFractionalTransformations\n\njulia> julia> f = LFT(1,2,3,4)\nLFT( 1.0 + 0.0im , 2.0 + 0.0im , 3.0 + 0.0im , 4.0 + 0.0im )Notice that the LFT is represented by a 2-by-2 complex matrix. A LFT can also be defined by specifying a matrix.julia> A = [1 2; 3 4];\n\njulia> g = LFT(A)\nLFT( 1.0 + 0.0im , 2.0 + 0.0im , 3.0 + 0.0im , 4.0 + 0.0im )The identity LFT is constructed by LFT():julia> LFT()\nLFT( 1.0 + 0.0im , 0.0 + 0.0im , 0.0 + 0.0im , 1.0 + 0.0im )Given (complex) numbers a,b,c (including Inf) we can construct a LFT that maps a to 0, b to 1, and c to infinity.julia> f = LFT(2,5,-1)\nLFT( 6.0 + 0.0im , -12.0 + 0.0im , 3.0 + 0.0im , 3.0 + 0.0im )\n\njulia> f[2]\n0.0 + 0.0im\n\njulia> f[5]\n1.0 + 0.0im\n\njulia> f[-1]\nInf + Inf*imFinally, we provide a constructor for mapping a given triple of values (a,b,c) to another triple (aa,bb,cc). The syntax is LFT(a,aa,b,bb,c,cc). Here\'s an example:julia> f = LFT(1,2+im, 3,Inf, 4,1-im)\nLFT( 5.0 + 1.0im , -17.0 - 7.0im , 3.0 + 0.0im , -9.0 + 0.0im )\n\njulia> f[1]\n2.0 + 1.0im\n\njulia> f[3]\nInf + Inf*im\n\njulia> f[4]\n1.0 - 1.0im"
},

{
    "location": "#Under-the-hood-1",
    "page": "Readme",
    "title": "Under the hood",
    "category": "section",
    "text": "The matrix representing a LFT object is held in a field named :M.julia> f = LFT(1,2,3)\nLFT( -1.0 + 0.0im , 1.0 + 0.0im , 1.0 + 0.0im , -3.0 + 0.0im )\n\njulia> f.M\n2x2 Array{Complex{Float64},2}:\n -1.0+0.0im   1.0+0.0im\n  1.0+0.0im  -3.0+0.0im"
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": ""
},

{
    "location": "#Function-application-1",
    "page": "Readme",
    "title": "Function application",
    "category": "section",
    "text": "Since a LFT is a function, the most basic operation we may wish to perform is applying that function of a complex number. That\'s done with f[x] notation (or with f(x)):julia> f = LFT(3,2,1,1)\nLFT( 3.0 + 0.0im , 2.0 + 0.0im , 1.0 + 0.0im , 1.0 + 0.0im )\n\njulia> f[1]\n2.5 + 0.0im\n\njulia> f[0]\n2.0 + 0.0im\n\njulia> f[-1]\nInf + Inf*im\n\njulia> f[Inf]\n3.0 + 0.0im\n\njulia> f[1+2im]\n2.75 + 0.25imNote: Staring in Julia 0.4, I plan to replace f[x] with f(x) by defining call."
},

{
    "location": "#Composition-and-inverse-1",
    "page": "Readme",
    "title": "Composition and inverse",
    "category": "section",
    "text": "The * operation is used for function composition.julia> f = LFT(3,2,1,1);\n\njulia> g = LFT(0,1,-1,2);\n\njulia> f*g\nLFT( -2.0 + 0.0im , 7.0 + 0.0im , -1.0 + 0.0im , 3.0 + 0.0im )\n\njulia> g*f\nLFT( 1.0 + 0.0im , 1.0 + 0.0im , -1.0 + 0.0im , 0.0 + 0.0im )The inverse of a LFT is computed with inv:julia> f = LFT(1,2,3,4);\n\njulia> g = inv(f)\nLFT( 4.0 + 0.0im , -2.0 - 0.0im , -3.0 - 0.0im , 1.0 + 0.0im )\n\njulia> f*g\nLFT( -2.0 + 0.0im , 0.0 + 0.0im , 0.0 + 0.0im , -2.0 + 0.0im )Notice that the matrix representing f*g is a scaled version of the identity matrix."
},

{
    "location": "#Equality-checking-1",
    "page": "Readme",
    "title": "Equality checking",
    "category": "section",
    "text": "We can use == or isequal to check if two LFT objects are equal. Note that there is no unique matrix representation for a LFT object and we might have that f and g are equal, but f.M and g.M are different.julia> f = LFT(1,2,3,4);\n\njulia> g = LFT(-2,-4,-6,-8);\n\njulia> f==g\ntrue\n\njulia> f.M == g.M\nfalse"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LinearFractionalTransformations.LFTLinearFractionalTransformations.LinearFractionalTransformationsLinearFractionalTransformations.callLinearFractionalTransformations.complex_infinityLinearFractionalTransformations.evalLinearFractionalTransformations.includeLinearFractionalTransformations.isequal"
},

]}
