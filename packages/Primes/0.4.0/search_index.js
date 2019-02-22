var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Primes.jl-1",
    "page": "Home",
    "title": "Primes.jl",
    "category": "section",
    "text": "This package provides functions for computing prime numbers in Julia."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "The package is available for Julia versions 0.4 and up, but if you are not using Julia version 0.7 or higher, please read the documentation for the appropriate realease.To install it, runPkg.add(\"Primes\")from the Julia REPL."
},

{
    "location": "api/#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "api/#Prime-number-functions-1",
    "page": "Functions",
    "title": "Prime number functions",
    "category": "section",
    "text": ""
},

{
    "location": "api/#Primes.factor",
    "page": "Functions",
    "title": "Primes.factor",
    "category": "function",
    "text": "factor(n::Integer) -> Primes.Factorization\n\nCompute the prime factorization of an integer n. The returned object, of type Factorization, is an associative container whose keys correspond to the factors, in sorted order. The value associated with each key indicates the multiplicity (i.e. the number of times the factor appears in the factorization).\n\njulia> factor(100)\n2^2 ⋅ 5^2\n\nFor convenience, a negative number n is factored as -1*(-n) (i.e. -1 is considered to be a factor), and 0 is factored as 0^1:\n\njulia> factor(-9)\n-1 ⋅ 3^2\n\njulia> factor(0)\n0\n\njulia> collect(factor(0))\n1-element Array{Pair{Int64,Int64},1}:\n 0=>1\n\n\n\n\n\nfactor(ContainerType, n::Integer) -> ContainerType\n\nReturn the factorization of n stored in a ContainerType, which must be a subtype of AbstractDict or AbstractArray, a Set, or an BitSet.\n\njulia> factor(DataStructures.SortedDict, 100)\nDataStructures.SortedDict{Int64,Int64,Base.Order.ForwardOrdering} with 2 entries:\n  2 => 2\n  5 => 2\n\nWhen ContainerType <: AbstractArray, this returns the list of all prime factors of n with multiplicities, in sorted order.\n\njulia> factor(Vector, 100)\n4-element Array{Int64,1}:\n 2\n 2\n 5\n 5\n\njulia> prod(factor(Vector, 100)) == 100\ntrue\n\nWhen ContainerType == Set, this returns the distinct prime factors as a set.\n\njulia> factor(Set, 100)\nSet([2,5])\n\n\n\n\n\n"
},

{
    "location": "api/#Primes.prodfactors",
    "page": "Functions",
    "title": "Primes.prodfactors",
    "category": "function",
    "text": "prodfactors(factors)\n\nCompute n (or the radical of n when factors is of type Set or BitSet) where factors is interpreted as the result of factor(typeof(factors), n). Note that if factors is of type AbstractArray or Primes.Factorization, then prodfactors is equivalent to Base.prod.\n\njulia> prodfactors(factor(100))\n100\n\n\n\n\n\n"
},

{
    "location": "api/#Primes.radical",
    "page": "Functions",
    "title": "Primes.radical",
    "category": "function",
    "text": "radical(n::Integer)\n\nCompute the radical of n, i.e. the largest square-free divisor of n. This is equal to the product of the distinct prime numbers dividing n.\n\njulia> radical(2*2*3)\n6\n\n\n\n\n\n"
},

{
    "location": "api/#Prime-factorization-1",
    "page": "Functions",
    "title": "Prime factorization",
    "category": "section",
    "text": "Primes.factor\nPrimes.prodfactors\nPrimes.radical"
},

{
    "location": "api/#Primes.primes",
    "page": "Functions",
    "title": "Primes.primes",
    "category": "function",
    "text": "primes([lo,] hi)\n\nReturns a collection of the prime numbers (from lo, if specified) up to hi.\n\n\n\n\n\n"
},

{
    "location": "api/#Primes.nextprime",
    "page": "Functions",
    "title": "Primes.nextprime",
    "category": "function",
    "text": "nextprime(n::Integer, i::Integer=1)\n\nThe i-th smallest prime not less than n (in particular, nextprime(p) == p if p is prime). If i < 0, this is equivalent to prevprime(n, -i). Note that for n::BigInt, the returned number is only a pseudo-prime (the function isprime is used internally). See also prevprime.\n\njulia> nextprime(4)\n5\n\njulia> nextprime(5)\n5\n\njulia> nextprime(4, 2)\n7\n\njulia> nextprime(5, 2)\n7\n\n\n\n\n\n"
},

{
    "location": "api/#Primes.prevprime",
    "page": "Functions",
    "title": "Primes.prevprime",
    "category": "function",
    "text": "prevprime(n::Integer, i::Integer=1)\n\nThe i-th largest prime not greater than n (in particular prevprime(p) == p if p is prime). If i < 0, this is equivalent to nextprime(n, -i). Note that for n::BigInt, the returned number is only a pseudo-prime (the function isprime is used internally). See also nextprime.\n\njulia> prevprime(4)\n3\n\njulia> prevprime(5)\n5\n\njulia> prevprime(5, 2)\n3\n\n\n\n\n\n"
},

{
    "location": "api/#Primes.prime",
    "page": "Functions",
    "title": "Primes.prime",
    "category": "function",
    "text": "prime(::Type{<:Integer}=Int, i::Integer)\n\nThe i-th prime number.\n\njulia> prime(1)\n2\n\njulia> prime(3)\n5\n\n\n\n\n\n\n"
},

{
    "location": "api/#Generating-prime-numbers-1",
    "page": "Functions",
    "title": "Generating prime numbers",
    "category": "section",
    "text": "Primes.primes\nPrimes.nextprime\nPrimes.prevprime\nPrimes.prime"
},

{
    "location": "api/#Primes.isprime",
    "page": "Functions",
    "title": "Primes.isprime",
    "category": "function",
    "text": "isprime(n::Integer) -> Bool\n\nReturns true if n is prime, and false otherwise.\n\njulia> isprime(3)\ntrue\n\n\n\n\n\nisprime(x::BigInt, [reps = 25]) -> Bool\n\nProbabilistic primality test. Returns true if x is prime with high probability (pseudoprime); and false if x is composite (not prime). The false positive rate is about 0.25^reps. reps = 25 is considered safe for cryptographic applications (Knuth, Seminumerical Algorithms).\n\njulia> isprime(big(3))\ntrue\n\n\n\n\n\n"
},

{
    "location": "api/#Primes.ismersenneprime",
    "page": "Functions",
    "title": "Primes.ismersenneprime",
    "category": "function",
    "text": "ismersenneprime(M::Integer; [check::Bool = true]) -> Bool\n\nLucas-Lehmer deterministic test for Mersenne primes. M must be a Mersenne number, i.e. of the form M = 2^p - 1, where p is a prime number. Use the keyword argument check to enable/disable checking whether M is a valid Mersenne number; to be used with caution. Return true if the given Mersenne number is prime, and false otherwise.\n\njulia> ismersenneprime(2^11 - 1)\nfalse\n\njulia> ismersenneprime(2^13 - 1)\ntrue\n\n\n\n\n\n"
},

{
    "location": "api/#Primes.primesmask",
    "page": "Functions",
    "title": "Primes.primesmask",
    "category": "function",
    "text": "primesmask([lo,] hi)\n\nReturns a prime sieve, as a BitArray, of the positive integers (from lo, if specified) up to hi. Useful when working with either primes or composite numbers.\n\n\n\n\n\n"
},

{
    "location": "api/#Identifying-prime-numbers-1",
    "page": "Functions",
    "title": "Identifying prime numbers",
    "category": "section",
    "text": "Primes.isprime\nPrimes.ismersenneprime\nPrimes.primesmask"
},

]}
