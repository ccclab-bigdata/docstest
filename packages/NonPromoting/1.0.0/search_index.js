var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#[NonPromoting](https://github.com/eschnett/NonPromoting)-1",
    "page": "Readme",
    "title": "NonPromoting",
    "category": "section",
    "text": "A Julia library for non-promoting type wrappers, i.e. for arithmetic types that do not get automatically promoted to other types. This can help prevent subtle type errors(Image: Build Status (Travis)) (Image: Build status (Appveyor)) (Image: Coverage Status (Coveralls))"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "Sometimes, Julia\'s automatic type promotion gets things subtly wrong. This is especially a problem if you want a precision higher than Float64, since Float64 is often the default go-to type when a floating point number is generated from non-floating-point numbers.Here is an example. Of course, this code is so simple that one can spot the problem right away. If multiple modules are involved, then spotting this isn\'t that easy any more.function pi_plus_tenth_bad()\n    x = big(pi)   # highly accurate\n    y = 1/10      # unintentionally inaccurate\n    x + y\nendThe problem here is that the expression 1/10 has type Float64, which is much less accurate than BigFloat. The error is difficult to spot since the type Float64 is not mentioned explicitly. Float64 just happens to be the default type that Julia chooses when dividing two integers.This version of the code does not have a problem:function pi_plus_tenth()\n    x = big(pi)   # highly accurate\n    y = 1//10     # infinitely accurate\n    x + y\nendThis uses a rational number to represent the fraction 1/10, which is arbitrarily accurate when converted to BigFloat.One way to avoid such surprises is by avoiding automatic type promotion. If the compiler refuses the expression +(::BigFloat, ::Float64), then the error is quickly detected."
},

{
    "location": "#Design-1",
    "page": "Readme",
    "title": "Design",
    "category": "section",
    "text": "The module NonPromoting defines a wrapper type NP{T}. T is expected to be a subtype of AbstractFloat such as Float64, BigFloat, etc. This type supports all operations that T supports, except that the automatic promotion rules to and from T are disabled. Julia is very efficient for this kind of setup, and there is zero run-time overhead.To make a value non-promotable, call the constructor NP{T}. To extract the value, convert it back to T with convert(T, x). The usual arithmetic operations (add, subtract, multiply, square root, trigonometric functions, ...) are supported directly on the NP{T} type.The first (inaccurate) code looks like this:using NonPromoting\nfunction pi_plus_tenth_bad()\n    x = NP(big(pi))   # highly accurate\n    y = NP(1/10)      # unintentionally inaccurate\n    x + y             # ERROR REPORTED HERE\nendThis code will now produce an error, because the addition +(::NP{BigFloat}, NP{Float64}) is not defined, and Julia will not promote NP{Float64} to NP{BigFloat}.This version is explicit about types and works correctly (i.e. accurately):using NonPromoting\nfunction pi_plus_tenth()\n    x = NP{BigFloat}(pi)      # highly accurate\n    y = NP{BigFloat}(1//10)   # also highly accurate\n    x + y\nendThe basic design idea is that one uses the type NP{T} instead of T everywhere, except to interface with other modules who do not know about NonPromoting."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "NonPromoting.NPNonPromoting.NonPromotingNonPromoting.evalNonPromoting.include"
},

]}
