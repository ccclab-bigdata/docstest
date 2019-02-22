var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MolecularBoxes.jl-1",
    "page": "Readme",
    "title": "MolecularBoxes.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)MolecularBoxes is a Julia package providing tools for dealing with periodic  boundary conditions when analysing molecular simulations.For example, to create a rectangular box with periodic boundary conditions in  x, y and z start a Julia REPL and enter:julia> using MolecularBoxes\n\njulia> using StaticArrays\n\njulia> box_edge_length = SVector(3.0,4.0,5.0)\n3-element SArray{Tuple{3},Float64,1,3}:\n 3.0\n 4.0\n 5.0\n\njulia> box = Box(box_edge_length)\nBox{SArray{Tuple{3},Float64,1,3},3,(true, true, true)}(([3.0, 0.0, 0.0], [0.0, 4.0, 0.0], [0.0, 0.0, 5.0]), [3.0, 4.0, 5.0])To get the vector separating two points according to the nearest image  convention:julia> v1 = SVector(0.1, 0.2, 0.3)\n3-element SArray{Tuple{3},Float64,1,3}:\n 0.1\n 0.2\n 0.3\n\njulia> v2 = SVector(2.9, 3.9, 4.9)\n3-element SArray{Tuple{3},Float64,1,3}:\n 2.9\n 3.9\n 4.9\n\njulia> separation(v1, v2, box)\n3-element SArray{Tuple{3},Float64,1,3}:\n 0.20000000000000018\n 0.30000000000000027\n 0.39999999999999947separation(v1, v2, box) should be read as \"the separation of v1 from v2  in box\".A box can also be defined with one or more fixed (ie non-periodic) boundaries  in order to avoid applying the minimum image convention in that direction.julia> box_fpf = Box(box_edge_length, periodic=(false, true, false))\nBox{SArray{Tuple{3},Float64,1,3},3,(false, true, false)}(([3.0, 0.0, 0.0], [0.0, 4.0, 0.0], [0.0, 0.0, 5.0]), [3.0, 4.0, 5.0])\n\njulia> separation(v1, v2, box_fpf)\n3-element SArray{Tuple{3},Float64,1,3}:\n -2.8\n  0.30000000000000027\n -4.6000000000000005Finally, the center of mass of a collection of particles in a fully-periodic  system can be calculated:julia> center_of_mass([v1, v2], box) # assuming all particles have the same mass\n3-element SArray{Tuple{3},Float64,1,3}:\n 3.0\n 0.04999999999999972\n 0.10000000000000014\n\njulia> center_of_mass([v1, v2], box, weights=[1.0, 2.0])\n3-element SArray{Tuple{3},Float64,1,3}:\n 2.9662270109017728\n 3.999162045790778\n 0.03205882409647218"
},

{
    "location": "autodocs/#MolecularBoxes.MolecularBox",
    "page": "Docstrings",
    "title": "MolecularBoxes.MolecularBox",
    "category": "type",
    "text": "MolecularBox has three type parameters:     * V: An immutable vector such as those implemented in the StaticArrays         package     * N: The number of dimensions     * P: A tuple of booleans indicating which dimensions are periodic\n\nConcrete types inheriting from MolecularBox must implement 2 fields: vectors and lengths  si(::Box)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MolecularBoxes.BoxMolecularBoxes.MolecularBoxMolecularBoxes.MolecularBoxesMolecularBoxes._separationMolecularBoxes.center_of_massMolecularBoxes.evalMolecularBoxes.includeMolecularBoxes.isperiodicMolecularBoxes.separation"
},

]}
