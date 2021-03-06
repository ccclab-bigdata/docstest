var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#PolynomialFactors-1",
    "page": "Readme",
    "title": "PolynomialFactors",
    "category": "section",
    "text": "A package for factoring polynomials with integer or rational coefficients over the integers.(Image: PolynomialFactors)Linux: (Image: Build Status) &nbsp; Windows: (Image: Build St 0.1.1atus)For polynomials over the integers or rational numbers, this package providesa factor command to factor into irreducible factors over the integers;\na rational_roots function to return the rational roots;a powermod function to factor the polynomial over Z/pZ.The implementation is based on the Cantor-Zassenhaus approach, as detailed in Chapters 14 and 15 of the excellent text Modern Computer Algebra by von zer Gathen and Gerhard and a paper by Beauzamy, Trevisan, and Wang.The factoring solutions in SymPy.jl or Nemo.jl would be preferred, in general, especially for larger problems (degree 30 or more, say) where the performance here is not good. However, this package requires no additional external libraries. (PRs improving performance are most welcome.)Examples:julia> using AbstractAlgebra, PolynomialFactors;\n\njulia> R, x = ZZ[\"x\"];\n\njulia> p = prod(x .-[1,1,3,3,3,3,5,5,5,5,5,5])\nx^12-44*x^11+874*x^10-10348*x^9+81191*x^8-443800*x^7+1728556*x^6-4818680*x^5+9505375*x^4-12877500*x^3+11306250*x^2-5737500*x+1265625\n\njulia> poly_factor(p)\nDict{AbstractAlgebra.Generic.Poly{BigInt},Int64} with 3 entries:\n  x-5 => 6\n  x-1 => 2\n  x-3 => 4As can be seen factor returns a dictionary whose keys are irreducible factors of the polynomial p as Polynomial objects, the values being their multiplicity. If the polynomial is non-monic, a degree 0 polynomial is there so that the original polynomial can be recovered as the product  prod(k^v for (k,v) in poly_factor(p)).Here we construct the polynomial in terms of a variable x:julia> poly_factor((x-1)^2 * (x-3)^4 * (x-5)^6)\nDict{AbstractAlgebra.Generic.Poly{BigInt},Int64} with 3 entries:\n  x-5 => 6\n  x-1 => 2\n  x-3 => 4Factoring over the rationals is really done over the integers, The first step is to find a common denominator for the coefficients. The constant polynomial term reflects this.julia> R, x = QQ[\"x\"]\n(Univariate Polynomial Ring in x over Rationals, x)\n\njulia> poly_factor( (1//2 - x)^2 * (1//3 - 1//4 * x)^5 )\nDict{AbstractAlgebra.Generic.Poly{Rational{BigInt}},Int64} with 3 entries:\n  2//1*x-1//1 => 2\n  3//1*x-4//1 => 5\n  -1//995328  => 1For some problems big integers are necessary to express the problem:julia> p = prod(x .- collect(1:20))\nx^20-210*x^19+20615*x^18-1256850*x^17+53327946*x^16-1672280820*x^15+40171771630*x^14-756111184500*x^13+11310276995381*x^12-135585182899530*x^11+1307535010540395*x^10-10142299865511450*x^9+63030812099294896*x^8-311333643161390640*x^7+1206647803780373360*x^6-3599979517947607200*x^5+8037811822645051776*x^4-12870931245150988800*x^3+13803759753640704000*x^2-8752948036761600000*x+2432902008176640000\n\njulia> poly_factor(p)\nDict{AbstractAlgebra.Generic.Poly{BigInt},Int64} with 20 entries:\n  x-15 => 1\n  x-18 => 1\n  x-17 => 1\n  x-9  => 1\n  x-5  => 1\n  x-14 => 1\n  x-7  => 1\n  x-13 => 1\n  x-11 => 1\n  x-2  => 1\n  x-12 => 1\n  x-1  => 1\n  x-3  => 1\n  x-8  => 1\n  x-10 => 1\n  x-4  => 1\n  x-19 => 1\n  x-16 => 1\n  x-6  => 1\n  x-20 => 1julia> poly_factor(x^2 - big(2)^256)\nDict{AbstractAlgebra.Generic.Poly{BigInt},Int64} with 2 entries:\n  x+340282366920938463463374607431768211456 => 1\n  x-340282366920938463463374607431768211456 => 1Factoring polynomials over a finite field of coefficients, Z_p[x] with p a prime, is also provided by factormod:julia> factormod(x^4 + 1, 2)\nDict{AbstractAlgebra.Generic.Poly{AbstractAlgebra.gfelem{BigInt}},Int64} with 1 entry:\n  x+1 => 4\n\njulia> factormod(x^4 + 1, 5)\nDict{AbstractAlgebra.Generic.Poly{AbstractAlgebra.gfelem{BigInt}},Int64} with 2 entries:\n  x^2+3 => 1\n  x^2+2 => 1\n\njulia> factormod(x^4 + 1, 3)\nDict{AbstractAlgebra.Generic.Poly{AbstractAlgebra.gfelem{BigInt}},Int64} with 2 entries:\n  x^2+x+2   => 1\n  x^2+2*x+2 => 1\n\njulia> factormod(x^4 + 1, 7)\nDict{AbstractAlgebra.Generic.Poly{AbstractAlgebra.gfelem{BigInt}},Int64} with 2 entries:\n  x^2+3*x+1 => 1\n  x^2+4*x+1 => 1The keys are polynomials a finite group, not over the integers."
},

{
    "location": "autodocs/#PolynomialFactors.exact_divrem",
    "page": "Docstrings",
    "title": "PolynomialFactors.exact_divrem",
    "category": "function",
    "text": "Division algorithm for Z[x]\n\nreturns q,r with\n\na = q*b + r\ndegree(r) < degree(b)\n\nIf no such q and r can be found, then both q and r are 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialFactors.hensel_lift",
    "page": "Docstrings",
    "title": "PolynomialFactors.hensel_lift",
    "category": "function",
    "text": "Algo 15.17 multifactor Hensel lifting\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PolynomialFactors.identify_factors_lll",
    "page": "Docstrings",
    "title": "PolynomialFactors.identify_factors_lll",
    "category": "function",
    "text": "Use LLL basis reduction to identify factors of square free f from its factors over Zp\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "PolynomialFactors.AbstractFactorTreePolynomialFactors.FactorTreePolynomialFactors.FactorTree_over_ZpPolynomialFactors.LLL_basis_reduction!PolynomialFactors.PolynomialFactorsPolynomialFactors._equal_degree_splittingPolynomialFactors._factor_combinationsPolynomialFactors._modpPolynomialFactors._powermodPolynomialFactors._reducePolynomialFactors.all_childrenPolynomialFactors.as_polyPolynomialFactors.as_poly_ZpPolynomialFactors.as_poly_modpPolynomialFactors.deflatePolynomialFactors.distinct_degree_factorizationPolynomialFactors.equal_degree_factorizationPolynomialFactors.equal_degree_splittingPolynomialFactors.evalPolynomialFactors.exact_divremPolynomialFactors.factor_ZpPolynomialFactors.factor_Zp_squarefreePolynomialFactors.factor_Zx_big_prime_squarefreePolynomialFactors.factor_Zx_prime_power_squarefreePolynomialFactors.factormodPolynomialFactors.has_childrenPolynomialFactors.hensel_liftPolynomialFactors.hensel_stepPolynomialFactors.hensel_step_update_factor_tree!PolynomialFactors.identify_factorPolynomialFactors.identify_factors_lllPolynomialFactors.includePolynomialFactors.make_factor_tree_over_ZpPolynomialFactors.maxnormPolynomialFactors.muPolynomialFactors.onenormPolynomialFactors.poly_coeffsPolynomialFactors.poly_factorPolynomialFactors.short_vectorPolynomialFactors.square_freePolynomialFactors.swaprows!PolynomialFactors.tuplejoinPolynomialFactors.valuePolynomialFactors.variable"
},

]}
