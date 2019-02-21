using Documenter, AbstractOperators

makedocs(
  modules = [AbstractOperators],
  format = :html,
  sitename = "AbstractOperators.jl",
  authors = "Niccolò Antonello and Lorenzo Stella",
  pages = Any[
  "Home"               => "index.md",
  "Abstract Operators" => "operators.md",
  "Calculus rules"     => "calculus.md",
  "Properties"         => "properties.md",
  ],
)

deploydocs(
  repo   = "github.com/kul-forbes/AbstractOperators.jl.git",
  julia  = "0.6",
  osname = "linux",
  target = "build",
  deps = nothing,
  make = nothing,
)
