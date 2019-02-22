var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MolecularTopologies.jl-1",
    "page": "Readme",
    "title": "MolecularTopologies.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)A Julia package for representing system topologies for molecular simulations.The package currently only supporting reading atom names, residues names, and residue indices from a GROMACS-format .gro file. Other formats may be  supported in the future."
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "julia> using MolecularTopologies\n\njulia> gro_path = joinpath(dirname(pathof(MolecularTopologies)), \"../test/test.gro\")\n\"/some/directories/MolecularTopologies.jl/src/../test/test.gro\"\n\njulia> topology = open(gro_topology, gro_path)\nGroTopology([\"CG1\", \"CG2\", \"CG3\", \"N\", \"CB\", \"CA\", \"OA\", \"P\", \"OP1\", \"OP2\"  …  \"HW2\", \"OW\", \"HW1\", \"HW2\", \"OW\", \"HW1\", \"HW2\", \"OW\", \"HW1\", \"HW2\"], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1  …  17141, 17142, 17142, 17142, 17143, 17143, 17143, 17144, 17144, 17144], [\"DLPC\", \"DLPC\", \"DLPC\", \"DLPC\", \"DLPC\", \"DLPC\", \"DLPC\", \"DLPC\", \"DLPC\", \"DLPC\"  …  \"SOL\", \"SOL\", \"SOL\", \"SOL\", \"SOL\", \"SOL\", \"SOL\", \"SOL\", \"SOL\", \"SOL\"])\n\njulia> topology.atom_names[60]\n\"C2C\"\n\njulia> topology.residue_names[60]\n\"DLPC\"\n\njulia> topology.residue_indices[60]\n2\n\njulia> topology.atom_names[topology.residue_indices .== 10000]\n3-element Array{String,1}:\n \"OW\"\n \"HW1\"\n \"HW2\""
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MolecularTopologies.AbstractToplogyMolecularTopologies.GroTopologyMolecularTopologies.MolecularTopologiesMolecularTopologies.evalMolecularTopologies.gro_topologyMolecularTopologies.include"
},

]}
