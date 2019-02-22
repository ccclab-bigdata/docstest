var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MolecularTrajectories.jl-1",
    "page": "Readme",
    "title": "MolecularTrajectories.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)A Julia package for reading molecular dynamics simulation trajectories.Currently supports iteration over a series of GROMACS-format .gro files.GROMACS-format .xtc files will be supported in a future release."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using MolecularTrajectories\n\njulia> gro_path = joinpath(dirname(pathof(MolecularTrajectories)), \"../test/test.gro\")\n\njulia> gro_paths = [gro_path, gro_path]\n\njulia> trajectory = GroTrajectory(gro_paths, dt=1.0)\n\njulia> for frame in trajectory\n    @show frame.time\n    @show frame.box\n    @show frame.positions\nendNote that trajectory objects are iterable but not indexable. They do not support the AbstractArray interface."
},

{
    "location": "autodocs/#MolecularTrajectories.Frame",
    "page": "Docstrings",
    "title": "MolecularTrajectories.Frame",
    "category": "type",
    "text": "Holds one frame of a trajectory, including atom positions,  box dimensions, and time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MolecularTrajectories.AbstractFrameMolecularTrajectories.AbstractTrajectoryMolecularTrajectories.FrameMolecularTrajectories.GroTrajectoryMolecularTrajectories.MolecularTrajectoriesMolecularTrajectories.TrajectoryMolecularTrajectories.XTCMolecularTrajectories.Xtc_JBMolecularTrajectories.evalMolecularTrajectories.get_num_atomsMolecularTrajectories.gro_frameMolecularTrajectories.includeMolecularTrajectories.xjb"
},

]}
