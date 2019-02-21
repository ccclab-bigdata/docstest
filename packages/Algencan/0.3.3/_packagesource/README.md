# Algencan.jl

**Algencan.jl** is a [JuMP / MathProgBase](https://www.juliaopt.org/) interface
to the [Algencan](https://www.ime.usp.br/~egbirgin/tango/codes.php)
nonlinear solver.

Algencan is a high performance and large scale Augmented Lagrangian solver
written by Ernesto Birgin and Mario Martínez. It has many special features like
being able to use HSL library functions to speed up linear algebra with sparse
matrices and some smart acceleration strategies.

## Status

At this point this is alpha software. From verision v0.2.0 on the code will work
with Julia 1.0 or later only. If you need to run Algencan.jl with the old Julia
0.6, please install the version v0.1.x.

## Installation

There are three main modes of installation, depending on how you want to compile
Algencan.

### The preferred mode: using HSL

Obs: We only give support for MA57 at this point.

The preferred way to use Algencan is to link it against a HSL function to solve
sparse linear systems. To do this you need to grab your copy of MA57 from
[HSL](http://www.hsl.rl.ac.uk/catalogue/hsl_ma57.html). It has a free academic
license. You should receive a file named `hsl_ma57-5.2.0.tar.gz`.

All you need to do is to create an environment variable named
`MA57_SOURCE` pointing to this file *before* installing Algencan.jl. For
example, if the file is located at the `/tmp` folder, in bash you would do
```bash
export MA57_SOURCE=/tmp/hsl_ma57-5.2.0.tar.gz
```

After that just install Algencan.jl from Julia's REPL and import it to force
precompilation.

```julia
(v1.0) pkg> add Algencan
julia> using Algencan
```

### The easy mode

Just type
```julia
(v1.0) pkg> add Algencan
```
in package mode in Julia's REPL.

This will download Algencan's code, compile it and make it available to the
Algencan.jl package. **However there is a major caveat here. At this point I am
compiling Algencan without any HSL support. This has major influence on Algencan
behavior and performance. You should use HSL whenever you have access to it.**

### Pre-compiled `libalgencan.so`

If you have your own copy of `libalgencan.so` (note that you need a shared
library), you can use it. Just create an environment variable like belo *before*
using Algencan.jl for the first time.

```bash
export ALGENCAN_LIB_DIR=/tmp/libalgencan.so
```

You can then proceed to install Algencan.jl from the REPL
```julia
(v1.0) pkg> add Algencan
julia> using Algencan
```

## Hints to self compilation of Algencan with HSL libraries

This [wiki
page](https://github.com/pjssilva/Algencan.jl/wiki/Compiling-HSL-Libraries-for-use-with-Algencan.jl)
documents the steps I use to compile myself a version of documents the steps I
use to compile myself a version of `libalgencan.so`.
