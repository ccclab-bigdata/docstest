var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: DualNumbers) (Image: DualNumbers)"
},

{
    "location": "#Scope-of-DualNumbers.jl-1",
    "page": "Readme",
    "title": "Scope of DualNumbers.jl",
    "category": "section",
    "text": "The DualNumbers Julia package defines the Dual type to represent dual numbers, and supports standard mathematical operations on them. Conversions and promotions are defined to allow performing operations on combinations of dual numbers with predefined Julia numeric types.Dual numbers extend the real numbers, similar to complex numbers. They adjoin a new element ɛ such that ɛ*ɛ=0, in a similar way that complex numbers adjoin the imaginary unit i with the property i*i=-1. So the typical representation of a dual number takes the form x+y*ɛ, where x and y are real numbers. Duality can further extend complex numbers by adjoining one new element to each of the real and imaginary parts.Apart from their mathematical role in algebraic and differential geometry (they are mainly interpreted as angles between lines), they also find applications in physics (the real part of a dual represents the bosonic direction, while the epsilon part represents the fermionic direction), in screw theory, in motor and spatial vector algebra, and in computer science due to its relation with the forward mode of automatic differentiation.For the purpose of forward-mode automatic differentiation, this package is superseded by ForwardDiff.DualNumbers does not have an active maintainer."
},

{
    "location": "#Supported-functions-1",
    "page": "Readme",
    "title": "Supported functions",
    "category": "section",
    "text": "We aim for complete support for Dual types for numerical functions within Julia\'s Base. Currently, basic mathematical operations and trigonometric functions are supported.The following functions are specific to dual numbers:dual,\nrealpart,\ndualpart,\nepsilon,\nisdual,\ndual_show,\nconjdual,\nabsdual,\nabs2dual.The dual number f(a+bɛ) is defined by the limit:f(a+bɛ) := f(a) + lim_{h→0} (f(a + bɛh) - f(a))/h .For complex differentiable functions, this is equivalent to differentiation:f(a+bɛ) := f(a) + b f\'(a) ɛ.For functions that are not complex differentiable, the dual part returns the limit and can be identified with a directional derivative in R².In some cases the mathematical definition of functions of Dual numbers is in conflict with their use as a drop-in replacement for calculating numerical derivatives, for example, conj, abs and abs2. The mathematical definitions are available using the functions with the suffix dual. Similarly, comparison operators , , and == are overloaded to compare only value components."
},

{
    "location": "#A-walk-through-example-1",
    "page": "Readme",
    "title": "A walk-through example",
    "category": "section",
    "text": "The example below demonstrates basic usage of dual numbers by employing them to perform automatic differentiation. The code for this example can be found in test/automatic_differentiation_test.jl.First install the package by using the Julia package manager:Pkg.update()\nPkg.add(\"DualNumbers\")Then make the package available viausing DualNumbersUse the Dual() constructor to define the dual number 2+1*ɛ:x = Dual(2, 1)Define a function that will be differentiated, sayf(x) = x^3Perform automatic differentiation by passing the dual number x as argument to f:y = f(x)Use the functions realpart and dualpart to get the concrete and dual parts of x, respectively:println(\"f(x) = x^3\")\nprintln(\"f(2) = \", realpart(y))\nprintln(\"f\'(2) = \", dualpart(y))"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DualNumbers.DualDualNumbers.Dual128DualNumbers.Dual32DualNumbers.Dual64DualNumbers.DualComplex128DualNumbers.DualComplex256DualNumbers.DualComplex64DualNumbers.DualNumbersDualNumbers.ReCompDualNumbers.abs2dualDualNumbers.absdualDualNumbers.conjdualDualNumbers.dualDualNumbers.dual_showDualNumbers.dualpartDualNumbers.epsilonDualNumbers.evalDualNumbers.imεDualNumbers.includeDualNumbers.isdualDualNumbers.printtimesDualNumbers.realpartDualNumbers.to_nanmathDualNumbers.valueDualNumbers.ε"
},

]}
