var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BHAtp-1",
    "page": "Readme",
    "title": "BHAtp",
    "category": "section",
    "text": "(Image: Project Status: WIP - Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.)Linux/OSX: (Image: Build Status)Windows: (Image: Build status)Coverage: (Image: Coverage Status)Codecov: (Image: codecov.io)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "Part of the BottomHoleAssemblyAnalysis Github organizatioin.BHAtp.jl computes the theoretical performance (tp) of a bottom hole assembly inside a bore hole in terms of its tendency to \'build\' or \'drop\'.This Github organization will contain a set of packages/projects related to the analysis of Bottom Hole Assemblies (BHA)."
},

{
    "location": "autodocs/#BHAtp.p44_1",
    "page": "Docstrings",
    "title": "BHAtp.p44_1",
    "category": "function",
    "text": "p44_1\n\nAnalysis of elastic rigid-jointed frames using a 2-node Frame structural element and Line finite elements in 2 or 3 dimensions.\n\nConstructors\n\np44_1(data)\n\nArguments\n\n* `data::Dict{Symbol, Any}` : Dictionary containing all input data\n\nDictionary keys\n\n* struc_el::StructuralElement                          : Type of  structural fin_el\n* support::Array{Tuple{Int,Array{Int,1}},1}        : Fixed-displacements vector\n* loaded_nodes::Array{Tuple{Int,Array{Float64,1}},1} : Node load vector\n* properties::Vector{Float64}                          : Material properties\n* x_coords::FloatRange{Float64}                        : x coordinate vector\n* y_coords::FloatRange{Float64}                        : y coordinate vector\n* g_num::Array{Int,2}                                : Element node connections\n* fixed_freedoms::Array{Tuple{Vector{Int}}           : Fixed freedoms\n\nOptional additional dictionary keys\n\n* etype::Vector{Int}                                 : Element material vector\n* penalty::Float64                                     : Penalty for fixed freedoms\n* z_coords::FloatRange{Float64}                        : z coordinate vector\n* eq_nodal_forces_and_moments                          : Equivalent nodal loads\n\nReturn values\n\n* (jfem, dis_df, fm_df)        : Tuple of jFem, dis_df and fm_df\n                                 where:\n                                    jfem::jFem    : Computational result type\n                                    dis_df        : Displacement data table\n                                    fm_df         : Forces and moments data table\n\nRelated help\n\n?StructuralElement  : Help on structural elements\n?Beam               : Help on a Beam structural fin_el\n?FiniteElement      : Help on finite element types\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "BHAtp.BHAtpBHAtp.BeamBHAtp.FEMBHAtp.FiniteElementBHAtp.FrameBHAtp.GenericSolidBHAtp.HexahedronBHAtp.LineBHAtp.OffsetArrayBHAtp.PlaneBHAtp.PtFEMBHAtp.QuadrilateralBHAtp.RodBHAtp.SolidBHAtp.StructuralElementBHAtp.TetrahedronBHAtp.TriangleBHAtp.evalBHAtp.fsparvBHAtp.includeBHAtp.jFEMBHAtp.meshBHAtp.p41BHAtp.p42BHAtp.p43BHAtp.p44BHAtp.p44_1BHAtp.p45BHAtp.p46BHAtp.p47BHAtp.p51BHAtp.p51_skylineBHAtp.p52BHAtp.p53BHAtp.p54BHAtp.p55BHAtp.p56BHAtp.p56_skylineBHAtp.p61BHAtp.p62BHAtp.p62aBHAtp.p63BHAtp.p63_skylineBHAtp.pp62BHAtp.sparin"
},

]}
