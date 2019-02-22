var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#JuliaFEM.jl-documentation-1",
    "page": "Home",
    "title": "JuliaFEM.jl documentation",
    "category": "section",
    "text": "Pages = [\"index.md\", \"api.md\"]The JuliaFEM project develops open-source software for reliable, scalable, distributed Finite Element Method.The JuliaFEM software library is a framework that allows for the distributed processing of large Finite Element Models across clusters of computers using simple programming models. It is designed to scale up from single servers to thousands of machines, each offering local computation and storage. The basic design principle is: everything is nonlinear. All physics models are nonlinear from which the linearization are made as a special cases. "
},

{
    "location": "#Installing-and-testing-package-1",
    "page": "Home",
    "title": "Installing and testing package",
    "category": "section",
    "text": "Installing package goes same way like other packages in julia, i.e.julia> Pkg.add(\"JuliaFEM\")Testing package can be done using Pkg.test, i.e.julia> Pkg.test(\"JuliaFEM\")"
},

{
    "location": "#Contributing-1",
    "page": "Home",
    "title": "Contributing",
    "category": "section",
    "text": "Have a new great idea and want to share it with the open source community? From here and here you can look for coding style. Here is explained how to contribute to open source project, in general."
},

{
    "location": "examples/2d_hertz_contact/#",
    "page": "2D Hertz contact problem",
    "title": "2D Hertz contact problem",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\"License is MIT: see https://github.com/JuliaFEM/JuliaFEM.jl/blob/master/LICENSE.md"
},

{
    "location": "examples/2d_hertz_contact/#D-Hertz-contact-problem-1",
    "page": "2D Hertz contact problem",
    "title": "2D Hertz contact problem",
    "category": "section",
    "text": "(Image: ) In the example, a cylinder is pressed agains block with a force of 35 kN. A similar example can be found from NAFEMS report FENET D3613 (advanced finite element contact benchmarks). Solution for maximum pressure p_0 and contact radius a is  p_0 = sqrtfracFE2pi R \n  a     = sqrtfrac8FRpi Ewhere  E = frac2E_1E_2E_2left(1-nu_1^2right)+E_1left(1-nu_2^2right)Substituting values, one gets accurate solution to be p_0 = 3585 mathrmMPa and a = 621 mathrmmm.using JuliaFEMSimulation starts by reading the mesh. Model is constructed and meshed using SALOME, thus mesh format is .med. Mesh type is quite simple structure, containing things like mesh.nodes, mesh.elements and so on. Keep on mind, that Mesh contains only standard Julia types and we think it as a structure helping us to construct elements needed in simulation. In principle, we don\'t need to use Mesh in simulation anyway if we figure some other way to define the geometry for elements.datadir = Pkg.dir(\"JuliaFEM\", \"examples\", \"2d_hertz_contact\")\nmeshfile = joinpath(datadir, \"hertz_2d_full.med\")\nmesh = aster_read_mesh(meshfile)\nfor (elset_name, element_ids) in mesh.element_sets\n    nel = length(element_ids)\n    println(\"Element set $elset_name contains $nel elements.\")\nend\nfor (nset_name, node_ids) in mesh.node_sets\n    nno = length(node_ids)\n    println(\"Node set $nset_name contains $nno nodes.\")\nend\nnnodes = length(mesh.nodes)\nprintln(\"Total number of nodes in mesh: $nnodes\")\nnelements = length(mesh.elements)\nprintln(\"Total number of elements in mesh: $nelements\")Next, define two bodies. Technically, we could have only one problem and add elements from both bodies to the same problem, but defining two different problems is recommended for clarity. Plain strain assumption is used. To make clear what is happening here: we first create a set of elements (elements are in vector called upper_elements), then we define new problem which type is Elasticity, give it some meaningful name (this time cylinder), and last value 2 means that problems does have two degrees of freedom per node.upper_elements = create_elements(mesh, \"CYLINDER\")\nupdate!(upper_elements, \"youngs modulus\", 70.0e3)\nupdate!(upper_elements, \"poissons ratio\", 0.3)\nupper = Problem(Elasticity, \"cylinder\", 2)\nupper.properties.formulation = :plane_strain\nadd_elements!(upper, upper_elements)\nlower_elements = create_elements(mesh, \"BLOCK\")\nupdate!(lower_elements, \"youngs modulus\", 210.0e3)\nupdate!(lower_elements, \"poissons ratio\", 0.3)\nlower = Problem(Elasticity, \"block\", 2)\nlower.properties.formulation = :plane_strain\nadd_elements!(lower, lower_elements)Next we define some boundary conditions: creating \"boundary\" problems goes in the same way than defining \"field\" problems, the only difference is that we add extra argument giving what field are we tring to fix. This time, we have 2 dofs / node and we fix displacement in direction 2.bc_fixed_elements = create_elements(mesh, \"FIXED\")\nupdate!(bc_fixed_elements, \"displacement 2\", 0.0)\nbc_fixed = Problem(Dirichlet, \"fixed\", 2, \"displacement\")\nadd_elements!(bc_fixed, bc_fixed_elements)Defining symmetry boundary condition goes with the same ideabc_sym_23_elements = create_elements(mesh, \"SYM23\")\nupdate!(bc_sym_23_elements, \"displacement 1\", 0.0)\nbc_sym_23 = Problem(Dirichlet, \"symmetry line 23\", 2, \"displacement\")\nadd_elements!(bc_sym_23, bc_sym_23_elements)Next we define point load. To define that, we first need to find some node near the top of cylinder, using function find_nearest_node. Then we create a new problem, again of type Elasticity. Like told already, we don\'t need to use Mesh if we have some other procedure to define the geometry of the element (and it\'s connectivity, of course). So we can directly create an element of type Poi1, meaning 1-node point element, update it\'s geometry and apply 35.0e3 kN load in negative y-direction:nid = find_nearest_node(mesh, [0.0, 100.0])\nload = Problem(Elasticity, \"point load\", 2)\nload.properties.formulation = :plane_strain\nload.elements = [Element(Poi1, [nid])]\nupdate!(load.elements, \"geometry\", mesh.nodes)\nupdate!(load.elements, \"displacement traction force 2\", -35.0e3)Next, we define another boudary problem, this time the type of problem is Contact2D, which is a mortar contact formulation for two dimensions. Elements are added using add_slave_elements! and add_master_elements!. Problems, in general, can have some properties defined, like the formulation in Elasticity (we also have :plane_stress). For contact, we need to swap normal direction for meshes created by SALOME because in Code Aster, element orientation is defined opposite to what is used in ABAQUS, and in JuliaFEM in general we follow the same conventions what are used in ABAQUS.contact = Problem(Contact2D, \"contact\", 2, \"displacement\")\ncontact.properties.rotate_normals = true\ncontact_slave_elements = create_elements(mesh, \"BLOCK_TO_CYLINDER\")\ncontact_master_elements = create_elements(mesh, \"CYLINDER_TO_BLOCK\")\nadd_master_elements!(contact, contact_master_elements)\nadd_slave_elements!(contact, contact_slave_elements)After all problems are defined, we define some Analysis, which can be e.g. static analysis, dynamic analysis, modal analysis, linear perturbation analysis and so on. Here, the analysis type is Nonlinear, which is nonlinear quasistatic analysis. In the same manner as we do add_elements! to add elements to Problem, we use add_problems! to add problems to analysis. Because we are not restricted to some particular input and output formats, we \"connect\" a ResultsWriter to our analysis, this time we want to visualize results using ParaView, thus we write our results to Xdmf format, which uses well defined standards XML and HDF to store model data.analysis = Analysis(Nonlinear)\nadd_problems!(analysis, upper, lower, bc_fixed, bc_sym_23, load, contact)\nxdmf = Xdmf(\"2d_hertz_results\"; overwrite=true)\nadd_results_writer!(analysis, xdmf)In last part, we run the analysis.run!(analysis)\nclose(xdmf)"
},

{
    "location": "examples/2d_hertz_contact/#Results-1",
    "page": "2D Hertz contact problem",
    "title": "Results",
    "category": "section",
    "text": "Results are stored in 2d_hertz_results.xmf and 2d_hertz_results.h5 for visual inspection. We can also postprocess results programmatically because we are inside a real scripting / programming environment all the time.  For example, we can integrate the resultant force in normal and tangential direction in contact surface to validate our result.Rn = 0.0\nRt = 0.0\ntime = 0.0\nfor sel in contact_slave_elements\n    for ip in get_integration_points(sel)\n        w = ip.weight*sel(ip, time, Val{:detJ})\n        n = sel(\"normal\", ip, time)\n        t = sel(\"tangent\", ip, time)\n        la = sel(\"lambda\", ip, time)\n        Rn += w*dot(n, la)\n        Rt += w*dot(t, la)\n    end\nend\nprintln(\"2d hertz contact resultant forces: Rn = $Rn, Rt = $Rt\")\nusing Test\n@test isapprox(Rn, 35.0e3)\n@test isapprox(Rt, 0.0)Visualization of the results can be done using ParaView: (Image: ) For optimization loops, we want to programmatically find, for example, maximum contact pressure. We can, for example, get all the values in nodes:lambda = contact(\"lambda\", time)\nnormal = contact(\"normal\", time)\np0 = 0.0\np0_acc = 3585.0\nfor (nid, n) in normal\n    lan = dot(n, lambda[nid])\n    println(\"$nid => $lan\")\n    p0 = max(p0, lan)\nend\np0 = round(p0, 2)\nrtol = round(norm(p0-p0_acc)/max(p0,p0_acc)*100, 2)\nprintln(\"Maximum contact pressure p0 = $p0, p0_acc = $p0_acc, rtol = $rtol %\")To get rough approximation where does the contact open, we can find the element from slave contact surface, where contact pressure is zero in the other node and something nonzero in the other node.a_rad = 0.0\nfor element in contact_slave_elements\n    la1, la2 = element(\"lambda\", time)\n    p1, p2 = norm(la1), norm(la2)\n    a, b = isapprox(p1, 0.0), isapprox(p2, 0.0)\n    if (a && !b) || (b && !a)\n        X1, X2 = element(\"geometry\", time)\n        println(\"Contact opening element geometry: X1 = $X1, X2 = $X2\")\n        println(\"Contact opening element lambda: la1 = $la1, la2 = $la2\")\n        x11, y11 = X1\n        x12, y12 = X2\n        a_rad = 1/2*abs(x11+x12)\n        break\n    end\nend\nprintln(\"Contact radius: $a_rad\")This example briefly described some of the core features of JuliaFEM.#- This page was generated using Literate.jl."
},

{
    "location": "examples/3d_frame/#",
    "page": "Natural frequency analysis of 3d frame structure",
    "title": "Natural frequency analysis of 3d frame structure",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\"License is MIT: see https://github.com/JuliaFEM/JuliaFEM.jl/blob/master/LICENSE.md"
},

{
    "location": "examples/3d_frame/#Natural-frequency-analysis-of-3d-frame-structure-1",
    "page": "Natural frequency analysis of 3d frame structure",
    "title": "Natural frequency analysis of 3d frame structure",
    "category": "section",
    "text": "For general information about Euler-Bernoulli beam theory, see this wikipedia page. The model is a 3d frame, shown in picture. (Image: )using JuliaFEM, LinearAlgebraReading meshdatadir = Pkg.dir(\"JuliaFEM\", \"examples\", \"3d_frame\")\nmesh = aster_read_mesh(joinpath(datadir, \"model.med\"))\nprintln(\"Number of nodes in a model: \", length(mesh.nodes))Create beam elements. For 3d model, we need to define at least Young\'s modulus, shear modulus, density cross-section area, moment of inertia in local coordinate system and polar moment of inertia.beam_elements = create_elements(mesh, \"FRAME\")\n@info(\"Number of elements: \", length(beam_elements))\nupdate!(beam_elements, \"youngs modulus\", 210.0e6)\nupdate!(beam_elements, \"shear modulus\", 84.0e6)\nupdate!(beam_elements, \"density\", 7850.0e-3)\nupdate!(beam_elements, \"cross-section area\", 20.0e-2)\nupdate!(beam_elements, \"torsional moment of inertia 1\", 10.0e-5)\nupdate!(beam_elements, \"torsional moment of inertia 2\", 10.0e-5)\nupdate!(beam_elements, \"polar moment of inertia\", 30.0e-5)The direction of beam is defined in same way than in ABAQUS. That is, we have a tangent direction and one normal direction. The third direction is then cross product of tangent and normal. Because the second area moment is same in both directions, we can choose normal direction freely.for element in beam_elements\n    X1, X2 = element(\"geometry\", 0.0)\n    t = (X2-X1)/norm(X2-X1)\n    I = [1.0 0.0 0.0; 0.0 1.0 0.0; 0.0 0.0 1.0]\n    k = indmax([norm(cross(t, I[:,k])) for k in 1:3])\n    n = cross(t, I[:,k])/norm(cross(t, I[:,k]))\n    update!(element, \"normal\", n)\nendCreate boundary conditions: fix all degrees of freedom for nodes in a set FIXED. Here we first create elements of type Poi1 for each node j in set FIXED, update geometry field and then create new fields fixed displacmeent 1, fixed displacement 2, and so on, where the displacement / rotation is prescribed.bc_elements = [Element(Poi1, [j]) for j in mesh.node_sets[:FIXED]]\nupdate!(bc_elements, \"geometry\", mesh.nodes)\nfor i=1:3\n    update!(bc_elements, \"fixed displacement $i\", 0.0)\n    update!(bc_elements, \"fixed rotation $i\", 0.0)\nendCreate a problem, containing beam elements and boundary conditions:frame = Problem(Beam, \"3d frame\", 6)\nadd_elements!(frame, beam_elements)\nadd_elements!(frame, bc_elements)Perform modal analysisanalysis = Analysis(Modal)\nxdmf = Xdmf(joinpath(datadir, \"3d_frame_results\"); overwrite=true)\nadd_results_writer!(analysis, xdmf)\nadd_problems!(analysis, frame)\nrun!(analysis)\nclose(xdmf)Each Analysis can have properties, e.g. time, maximum number of iterations, convergence tolerance and so on. Eigenvalues of calculation are stored as a properties of analysis:freqs = sqrt.(step.properties.eigvals) / (2*pi)\nprintln(\"Natural frequencies [Hz]: $(round.(freqs, 2))\")(Image: mode5)#- This page was generated using Literate.jl."
},

{
    "location": "examples/generate_stiffness_matrices/#",
    "page": "Generating local matrices for problems",
    "title": "Generating local matrices for problems",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\"License is MIT: see https://github.com/JuliaFEM/JuliaFEM.jl/blob/master/LICENSE.md"
},

{
    "location": "examples/generate_stiffness_matrices/#Generating-local-matrices-for-problems-1",
    "page": "Generating local matrices for problems",
    "title": "Generating local matrices for problems",
    "category": "section",
    "text": "using JuliaFEMPlane stress Quad4 element with linear material model:X = Dict(1 => [0.0, 0.0], 2 => [2.0, 0.0], 3 => [2.0, 2.0], 4 => [0.0, 2.0])\nelement = Element(Quad4, [1, 2, 3, 4])\nupdate!(element, \"geometry\", X)\nupdate!(element, \"youngs modulus\", 288.0)\nupdate!(element, \"poissons ratio\", 1/3)\nproblem = Problem(Elasticity, \"test problem\", 2)\nproblem.properties.formulation = :plane_stress\nadd_elements!(problem, [element])\nassemble!(problem, 0.0)\nK = round.(Matrix(problem.assembly.K), 5)#-This page was generated using Literate.jl."
},

{
    "location": "examples/linear_static/#",
    "page": "JuliaFEM Linear Static Example",
    "title": "JuliaFEM Linear Static Example",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\"This file is a part of JuliaFEM. License is MIT: see https://github.com/JuliaFEM/JuliaFEM.jl/blob/master/LICENSE.md"
},

{
    "location": "examples/linear_static/#JuliaFEM-Linear-Static-Example-1",
    "page": "JuliaFEM Linear Static Example",
    "title": "JuliaFEM Linear Static Example",
    "category": "section",
    "text": "(Image: )"
},

{
    "location": "examples/linear_static/#Preprocessing-1",
    "page": "JuliaFEM Linear Static Example",
    "title": "Preprocessing",
    "category": "section",
    "text": "using JuliaFEMFirst we will read in the mesh. Geometry and mesh are greated with FreeCAD, where med format is selected for exporting. Mesh file consist also edge and surface mesh, which we will need to neglect later.datadir = Pkg.dir(\"JuliaFEM\", \"examples\", \"linear_static\")\nmeshfile = joinpath(datadir, \"JuliaFEMSMP18.med\")\nmesh = aster_read_mesh(meshfile)Next we will create the model and define Elasticity. Also elements are added to the model.model = Problem(Elasticity, \"OTHER\", 3)\nmodel_elements = create_elements(mesh, \"OTHER\")Elements need material properties and they are defined nextupdate!(model_elements, \"youngs modulus\", 208.0E3)\nupdate!(model_elements, \"poissons ratio\", 0.30)\nupdate!(model_elements, \"density\", 7.80E-9)\nadd_elements!(model, model_elements)We can ignore Seg3 and Tri6 elements using filter with a special function returning true if element is something else than Seg3 or Tri6:function is_not_Seg3_or_Tri6(element)\n    return !isa(element, Union{Element{Seg3}, Element{Tri6}})\nend\n\nfilter!(is_not_Seg3_or_Tri6, model.elements)The whole idea of the JuliaFEM input is to be a normal Julia script, where the user can freely define any functions needed to perform the task. Here we define a function, which finds nodes on the given plane yz, xz or xy from the given height.function add_nodes_at_certain_plane_to_node_set!(mesh, name, vector_id, distance,\n                                                 radius=6.0)\n    for (node, coords) in mesh.nodes\n        if isapprox(coords[vector_id], distance, atol=radius)\n            add_node_to_node_set!(mesh, name, node)\n        end\n    end\n    return nothing\nendWe will find nodes from the xz-plane going through point (0,50,0) or actually we previously defined the radius to be 6.0, which means (0,[44,56],0). In other words we will select each node, which second coordinate value is between 44 and 56. This function will edit mesh object and add node set called :mid_fixed to it.add_nodes_at_certain_plane_to_node_set!(mesh, :mid_fixed, 2, 50.0)We need to somehow handle the i\'s dot. I looked the rough coordinates of the dot in FreeCAD and now we can search three closest nodes to these coordinates. Those will be added to the same set :mid_fixed.ipoint = find_nearest_nodes(mesh, [165.0, 88.0, 10],3)\nfor poi in ipoint\n    add_node_to_node_set!(mesh, :mid_fixed, poi)\nendThe fixed boundary conditions are defined next.fixed = Problem(Dirichlet, \"fixed\", 3, \"displacement\")\nfixed_elements = create_nodal_elements(mesh, \"mid_fixed\")\nadd_elements!(fixed, fixed_elements)\nupdate!(fixed_elements, \"displacement 1\", 0.0)\nupdate!(fixed_elements, \"displacement 2\", 0.0)\nupdate!(fixed_elements, \"displacement 3\", 0.0)Let\'s use simple acceleration load.update!(model_elements, \"displacement load 1\", 1.0)Finally the ´Analysis` couples everything togeter.analysis = Analysis(Linear, model, fixed)Let\'s write resuls to Xdmf filexdmf = Xdmf(\"model_results\"; overwrite=true)\nadd_results_writer!(analysis, xdmf)This is how the stresses are requestedpush!(model.postprocess_fields, \"stress\")Now we have all we need to run the analysis.run!(analysis)"
},

{
    "location": "examples/linear_static/#Postprocessing-1",
    "page": "JuliaFEM Linear Static Example",
    "title": "Postprocessing",
    "category": "section",
    "text": "In order to look the results, we will need to close the xdmf that it is actually written to the file from buffer.close(xdmf)Finally when we open the model in ParaView and set some settings we have this end result.(Image: )"
},

{
    "location": "examples/linear_static/#Testing-1",
    "page": "JuliaFEM Linear Static Example",
    "title": "Testing",
    "category": "section",
    "text": "First let\'s test that we have the output files writen to the diskif VERSION < v\"1.0.0\"\n    using Base.Test\nelse\n    using Test\nend\n\n@test isfile(\"model_results.xmf\")\n@test isfile(\"model_results.h5\")Secondly let\'s test that we have the same maximum displacement each time. This is also an usefull example how to access the displacements values.time = 0.0\nu = analysis(\"displacement\", time)\nu_norms = Dict(i => norm(j) for (i, j) in u)\n@test isapprox(maximum(values(u_norms)),2.4052929896922337)\r#-This page was generated using Literate.jl."
},

{
    "location": "packages/FEMBase/mesh/#",
    "page": "Mesh",
    "title": "Mesh",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/mesh/#Mesh-1",
    "page": "Mesh",
    "title": "Mesh",
    "category": "section",
    "text": "CurrentModule = FEMBase\nDocTestSetup = quote\n    using FEMBase\nend"
},

{
    "location": "packages/FEMBase/mesh/#Mesh-structure-1",
    "page": "Mesh",
    "title": "Mesh structure",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/mesh/#Modifying-mesh-1",
    "page": "Mesh",
    "title": "Modifying mesh",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/mesh/#Defining-new-mesh-parsers-1",
    "page": "Mesh",
    "title": "Defining new mesh parsers",
    "category": "section",
    "text": "Whould work somehow like this:mutable struct DemoReader <: AbstractMeshReader\n    handle :: String\nend\n\nfunction read_mesh!(m::Mesh, r::DemoReader)\n    # parse file and insert results to `m`.\nend\n\nmesh = Mesh()\nreader = DemoReader(\"file.inp\")\nread_mesh!(mesh, reader)"
},

{
    "location": "packages/FEMBase/fields/#",
    "page": "Fields",
    "title": "Fields",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/fields/#Fields-1",
    "page": "Fields",
    "title": "Fields",
    "category": "section",
    "text": "using FEMBaseFrom the beginning of a project we had a clear concept in our mind: \"everything is a field\". That is, everything can vary temporally and spatially. We think that constant is just a special case of field which does not vary in temporal nor spatial direction. Fields can vary in spatial direction, i.e. can be either constant or variable, and in temporal direction, i.e. can be time variant or time invariant. From this pondering we can think that there exists four kind of (discrete) fields:discrete, constant, time invariant (DCTI)\ndiscrete, variable, time invariant (DVTI)\ndiscrete, constant, time variant (DCTV)\ndiscrete, variable, time variant (DVTV)Discrete, in this context, means that field is defined in point-wise in 1 ldots n locations, from where it is then interpolated to whole domain using some interpolation polynomials, i.e. \\begin{equation}     u(\\xi, t) = \\sum{i} ui[t] N{i}(\\xi,t), \\end{equation} where     N{i}(\\xi, t)$ is the basis function or interpolation polymial corresponding to i^{th} discrete value and      u_i is the discrete value.Then we have continuous fields, which are defined in whole domain, or at least not point-wise. By following the already used abbreviations, we have four more fields:continuous, constant, time invariant (CCTI)\ncontinuous, variable, time invariant (CVTI)\ncontinuous, constant, time variant (DCTV)\ncontinuous, variable, time variant (CVTV)Continuous, again in this context, does not mean that field has to be defined everywhere. It\'s enough that it\'s defined in function of spatial and/or temporal coordinates, i.e. we have u equiv u(xi t), without a some spesific basis needed to interpolate from discrete values. Field itself can be in principle anything. However, usually either scalar, vector or tensor (matrix). Time does not to have be real, it can be for example angle of some rotating machine or even complex value. From these starting points, we assume that the mentioned field system can describe all imaginable situations."
},

{
    "location": "packages/FEMBase/fields/#Creating-new-fields-1",
    "page": "Fields",
    "title": "Creating new fields",
    "category": "section",
    "text": "For discrete fields that are varying in spatial direction, value for each discrete point is defined using NTuple. The order of points is implicitly assumed to be same than node ordering in ABAQUS. That is, first corner nodes in anti-clockwise direction and after that middle nodes.For example, (1, 2, 3, 4) is a scalar field having length of 4 and ([1,2],[2,3],[3,4],[4,5]) is a vector field having length of 4.For fields that are varying in temporal direction, time => value syntax is used. The first item in pair is time (or similar) and second item is value  assigned to that time. For example, 0.0 => 1.0 is a time-dependent scalar field having value 1.0 at time 0.0.The most simple field is a field that is constant in both time and spatial direction. Discrete, constant, time invariant DCTI:a = DCTI(1.0)Then we have discrete, variable, time invariant fields DVTI. Notice the use of Tuple when defining field.b = DVTI( (1.0, 2.0) )Discrete, constant, time variant field DCTV is constant in spatial direction partial upartial x = 0 but can vary in temporal direction, partial upartial tneq 0. Here, => syntax is used. New values can be added to field using function update!. If there already exists a value for that particular time, it will be overridden. It is assumed that content of field in time direction is monotonically increasing, i.e. \\begin{equation}     t{i-1} < ti < t_{i+1}. \\end{equation}For the sake of clarity let\'s also mention that update! works for time invariant fields as well if content needs to be updated.c = DCTV(0.0 => 1.0, 1.0 => 2.0)\nupdate!(c, 2.0 => 3.0)Discrete, variable, time variant DVTV field is the most general one, allowing values of field to vary in both spatial and time direction.d = DVTV(0.0 => (1.0, 2.0), 1.0 => (2.0, 3.0))\nupdate!(d, 2.0 => (3.0, 4.0))In examples above, all fields defined was scalar fields. Defining vector or tensor fields goes in the same way. The only difference is that now we define vectors and tensors instead of a single scalar value. They can vary in spatial and time direction in the same way than scalar fields. Here is example of defining the abovementioned vector fields:a = DCTI([1.0, 2.0])\nb = DVTI(([1.0, 2.0], [2.0, 3.0]))\nc = DCTV(0.0 => [1.0, 2.0], 1.0 => [2.0, 3.0])\nd = DVTV(0.0 => ([1.0, 2.0], [2.0, 3.0]), 1.0 => ([2.0, 3.0], [3.0, 4.0]))"
},

{
    "location": "packages/FEMBase/fields/#Accessing-fields-1",
    "page": "Fields",
    "title": "Accessing fields",
    "category": "section",
    "text": "Accessing fields in time direction is done using a function interpolate. For example, if we have (constant) 12 at time t=00 and 34 at time t=10, linear interpolation in time direction yieldsc = DCTV(0.0 => [1.0,2.0], 1.0 => [3.0,4.0])\ninterpolate(c, 0.5)If field is spatially varying, a Tuple will be returned, having one value for each \"node\". This can then be interpolated in spatial direction, typically using basis functions defined on element, i.e. u = N_i u_i:d = DVTV(0.0 => (1.0,2.0), 1.0 => (3.0,4.0))\ninterpolate(d, 0.5)Although the two fields above looks quite same, the key difference is that in DCTV field we have a constant vectorial value (defined using square brackets []) and in latter DVTV field we have a scalar value (defined using round brackets) changing in spatial direction from 1.0 to 2.0 at time t=00 and changing from 3.0 to 4.0 at time t=10.If a field is time invariant, interpolation in time direction returns a trivial solution:interpolate(DCTI(1.0), 0.5)\ninterpolate(DVTI((1.0,2.0)), 0.5)For spatially varying fields, one can access to ith element using getindex:a = DVTI((1.0,2.0))\ngetindex(a, 1)For field varying both temporally and spatially, one has first to interpolate in time direction to get iterable tuple:d = DVTV(0.0 => (1.0,2.0), 1.0 => (3.0,4.0))\nresult = interpolate(d, 0.5)\ngetindex(result, 1)Internally, each field is a subtype of AbstractField having a field data, which be accessed directly for hacking purposes.d.data"
},

{
    "location": "packages/FEMBase/fields/#Continuous-fields-1",
    "page": "Fields",
    "title": "Continuous fields",
    "category": "section",
    "text": "Continuous fields may be useful when defining analytical boundary conditions. For that we have CVTV, where \"C\" stands for continuous.f(xi,t) = xi[1]*xi[2]*t\ng = CVTV(f)\ng((1.0,2.0), 3.0)"
},

{
    "location": "packages/FEMBase/fields/#Dictionary-fields-1",
    "page": "Fields",
    "title": "Dictionary fields",
    "category": "section",
    "text": "Usually it is assumed that size of length of discrete field matches to the number of basis functions of a single element, typically something small like 1-10.However, there might be cases where it is more practical to define field in a sense that indexing is not continuous or starting from 1. For example, we might want to define field common for a set of elements. In that case it\'s natural to think that each index in field corresponds to the certain id-number of node. For example, if we have a triangle element connecting nodes 1, 1000 and 100000, we still want to access that field naturally using getindex, e.g. f[1], f[1000] and f[100000]. In that case, more appropriate internal structure for field is based on a dictionary, not tuple.It only makes sense to define dictionary fields for spatially varying fields. Two new fields are introduced: DVTId and DVTVd, where the last character \"d\" stands for \"dictionary\".Keep on mind, that this type of field has one restriction. If and when this field is typically defined on nodes of several elements, field must be continuous between elements. That is, if field value in node 1000 is for example 1.0, then it\'s 1.0 in all elements connecting to that node. To define jumps on field, one must define field element-wise. Define eg. \"geometry\" for nodes 1,1000,100000:X = Dict(1=>[0.0,0.0], 1000=>[1.0,0.0], 100000=>[1.0,1.0])\nG = DVTId(X)\nG[1], G[1000], G[100000]Interpolation in time directions works in a same way than with other fields depends from time.Y = Dict(1=>[1.0,1.0], 1000=>[2.0,1.0], 100000=>[2.0,2.0])\nF = DVTVd(0.0 => X, 1.0 => Y)\ninterpolate(F,0.5)[100000]"
},

{
    "location": "packages/FEMBase/fields/#Using-common-constructor-field-1",
    "page": "Fields",
    "title": "Using common constructor field",
    "category": "section",
    "text": "Now we have introduced total of 7 fields: DCTI, DCTV, DVTI, DVTV, CVTV, DVTId, DVTVd. A good question arises that how to remember all this stuff and is it even necessary? Luckily not, because one can use a single constructor called field to create all kind of fields. Type of field is inspected from data type. It\'s not necessary to remember all this technical stuff, just declare new field using more of less intuitive syntax and field-function.f1 = field(1)\nf2 = field(1, 2)\nf3 = field(0.0 => 1)\nf4 = field(0.0 => (1, 2), 1.0 => (2, 3))\nf5 = field((xi,t) -> xi[1]*t)\nf6 = field(1 => 1, 2 => 2)\nf7 = field(0.0 => (1=>1, 10=>2), 1.0 => (1=>2,10=>3))"
},

{
    "location": "packages/FEMBase/fields/#Developing-new-fields-1",
    "page": "Fields",
    "title": "Developing new fields",
    "category": "section",
    "text": "If the FEMBase ones are not enough, it\'s always possible to define new ones. Minimum requirements is that field is a subtype of AbstractField and interpolate, getindex, has been defined to it. Field can, for example fetch data from random.org or market stocks, read data from hard drive or add some stochastics behavior to it."
},

{
    "location": "packages/FEMBase/fields/#Functions-and-types-related-to-fields-1",
    "page": "Fields",
    "title": "Functions and types related to fields",
    "category": "section",
    "text": "CurrentModule = FEMBase\nDocTestSetup = quote\n    using FEMBase\nend"
},

{
    "location": "packages/FEMBase/fields/#Types-1",
    "page": "Fields",
    "title": "Types",
    "category": "section",
    "text": "AbstractField\nDCTI\nDVTI\nDCTV\nDVTV\nCVTV\nDVTId\nDVTVd"
},

{
    "location": "packages/FEMBase/fields/#Functions-(internal)-1",
    "page": "Fields",
    "title": "Functions (internal)",
    "category": "section",
    "text": "These functions needs to be defined when developing new fields:new_field\nupdate_field!\ninterpolate_field"
},

{
    "location": "packages/FEMBase/fields/#Functions-(public)-1",
    "page": "Fields",
    "title": "Functions (public)",
    "category": "section",
    "text": "field(x)\nupdate!(field::F, data) where {F<:AbstractField}\ninterpolate(field::F, time) where {F<:AbstractField}"
},

{
    "location": "packages/FEMBase/basis/#",
    "page": "Basis functions",
    "title": "Basis functions",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/basis/#Basis-functions-1",
    "page": "Basis functions",
    "title": "Basis functions",
    "category": "section",
    "text": "using FEMBase\nusing FEMBase.FEMBasis: eval_dbasis!, jacobian, grad, interpolate,\n                        get_reference_element_coordinates, create_basis\nusing FEMBasisShape functions, also known as basis functions, interpolation polynomials and so on. Typically unknown field variable is interpolated from element nodal values using continuous functions. That is, \\begin{equation} u(\\xi,t) = \\sum{i} N(\\xi,t) u{i}[t] \\end{equation}Standard Lagrange shape functions are implemented.Linear shape functions:Seg2 (2-node segment)\nTri3 (3-node triangle)\nQuad4 (4-node quadrangle)\nTet4 (4-node tetrahedron)\nPyr5 (5-node pyramid)\nWedge6 (6-node wedge)\nHex8 (8-node hexahedra)Quadratic and biquadratic shape functions:Seg3\nTri6, Tri7\nQuad8, Quad9\nTet10\nWedge15\nHex20, Hex27NURBS shape functions:NSeg\nNSurf\nNSolidCreating new basis is done simply by calling that constructor, without any arguments:Seg2()\nTri3()\nQuad4()The dimensions of basis functions can be determined by size and length. In JuliaFEM, we have a convention that arrays grow on right according to number of nodes and down according to the spatial index. So if we have a column vector boldsymbol N and a row vector boldsymbol u, interpolation goes u = boldsymbol N boldsymbol u:N = [1 2 3] # evaluated basis functions\nu = [1, 2, 3] # field value at discrete points\nN*uFor example, Quad4 is defined in two dimensions and it has 4 nodes, soB = Quad4()\nsize(B)\nlength(B)Evaluating basis functions and they partial derivatives with respect to some xi is done efficiently using eval_basis! and eval_dbasis!. For these commands one needs to allocate array outside of the hot loops to get speed.N = zeros(1, length(B))\ndN = zeros(size(B)...)\nxi = (0.0, 0.0)\neval_basis!(B, N, xi)\neval_dbasis!(B, dN, xi)For Langrange interpolation polynomials, by definition, on each node shape function corresponding to that node gets value of 1 and the rest is zero. Node ordering follows the same defined in e.g. in ABAQUS and in many other FEM softwares. The actual shape of domain can be inspected using command get_reference_element_coordinates:get_reference_element_coordinates(Quad4)for xi in get_reference_element_coordinates(Quad4)\n    eval_basis!(B, N, xi)\n    println(\"$N at $xi\")\nend"
},

{
    "location": "packages/FEMBase/basis/#Mathematics-1",
    "page": "Basis functions",
    "title": "Mathematics",
    "category": "section",
    "text": "Without knowing anything about the shape of the real domain (after all, basis is usually defined on dimensionless, reference domain), eval_dbasis! is calculating gradient with respect to dimensionless coordinates xi_i, i.e.\\begin{equation} \\left(\\frac{\\partial\\boldsymbol{N}}{\\partial\\boldsymbol{\\xi}}\\right){ij}=\\frac{\\partial N{j}}{\\partial\\xi_{i}} \\end{equation}Usually this is not wanted, but instead gradient of basis functions is calculated with respect to natural coordinates X_i,\\begin{equation} \\left(\\frac{\\partial\\boldsymbol{N}}{\\partial\\boldsymbol{X}}\\right){ij}=\\frac{\\partial N{j}}{\\partial X_{i}} \\end{equation}Without going into the mathematical details, to transform partial derivatives from reference element to natural coordinates, inverse of Jacobian matrix is needed.X = ([0.0, 0.0], [1.0, 0.0], [1.0, 1.0], [0.0, 1.0])\nxi = (0.0, 0.0)\nJ = jacobian(B, X, xi)\ninv(J) * dNOr directly, using grad:dNdX = grad(B, X, xi)If interpolation domain is a manifold, i.e. space having lower dimension than the actual space (read: surface in 3d), Jacobian is not square and inverse cannot be taken.X2 = ([0.0,0.0,0.0], [1.0, 0.0,1.0], [1.0,1.0,1.0], [0.0,1.0,0.0])\nxi = (0.0, 0.0)\nJ = jacobian(B, X2, xi)One can use Jacobian to calculate surface integral:\\begin{equation} \\iint{S}f\\,\\mathrm{d}\\Sigma=\\iint{T}f\\left(\\boldsymbol{x}\\left(s,t\\right)\\right)\\left\\Vert \\frac{\\partial\\boldsymbol{x}}{\\partial s}\\times\\frac{\\partial\\boldsymbol{x}}{\\partial t}\\right\\Vert \\,\\mathrm{d}s\\mathrm{d}t \\end{equation}4*norm(cross(J[1,:], J[2,:])), sqrt(2) # area of manifoldGradient of e.g. displacement field or temperature field can be also evaluated, with the same grad function, by adding field u:u = ([0.0, 0.0], [1.0, -1.0], [2.0, 3.0], [0.0, 0.0])\nT = (1.0, 2.0, 3.0, 4.0)\ngrad(B, u, X, xi)\ngrad(B, T, X, xi)One can interpolate fields using basis, i.e. calculate u = boldsymbolNboldsymbolu as described before:interpolate(B, u, xi)\ninterpolate(B, T, xi)In \"hot loops\", it\'s absolutely necessary that no unnecessary memory allcations happen as it is reducing the performance dramatically from C speed. To avoid unnecessary memory allocations, a struct BasisInfo is introduced, containing workspace for calculations.bi = BasisInfo(Quad4)\neval_basis!(bi, X, xi)\nbi.J       # Jacobian\nbi.N       # shape functions\nbi.dN      # shape function derivatives, with respect to xi\nbi.detJ    # determinant of Jacobian\nbi.grad    # shape function derivatives, with respect to X\nbi.invJ    # inverse of JacobianCalculating gradient of some field u can be done memory efficiently using this BasisInfo structure:gradu = zeros(2, 2)\ngrad!(bi, gradu, u)"
},

{
    "location": "packages/FEMBase/basis/#Defining-custom-shape-functions-1",
    "page": "Basis functions",
    "title": "Defining custom shape functions",
    "category": "section",
    "text": "Depending from the type of shape functions, they can be created more or less automatic way. An ultimate goal is to create all kind of shape functions just by defining the general principles and let computer handle the all boring things and create shape functions automatically using metaprogramming to get efficient code.For Lagrange type interpolation, ones needs only to define polynomial and corner points for domain. For example, if domain is 01^2, one can use create_basis, and give polynomial with degree matching to the number of point to interpolate.code = create_basis(\n    :MyQuad,\n    \"My special domain\",\n    (\n        (0.0, 0.0),\n        (1.0, 0.0),\n        (1.0, 1.0),\n        (0.0, 1.0),\n    ),\n    \"1 + u + v + u*v\"\n);\n\neval(code)What we have defined is a interpolation polynomial and \"corner points\". As a result, we have a new basis MyQuad, working just like expected. All Lagrange polynomials are done like this.B = MyQuad()\nxi = (0.5, 0.5)\neval_basis!(B, N, xi)In this case, and considering domain, partial derivatives of shape functions are with respect to X, because interpolation polynomials are calculated against real domain and not \"reference domain\". That is, partial derivatives should match to what already calcualated.eval_dbasis!(B, dN, xi)Jacobian should be identity matrix:J = jacobian(B, X, xi)And taking gradient with respect to X should return also same result than before:u = ([0.0, 0.0], [1.0, -1.0], [2.0, 3.0], [0.0, 0.0])\ngrad(B, u, X, xi)Shape functions can be defined manually and calculate partial derivatives automatically. For example, for pyramid elements typical ansatz approach is not applicable. Some other degenerated elements exists in fracture mechanics.For example, C1-continuous Hermite shape functions ready to approximate Euler-Bernoulli beam equations can be defined as:code = create_basis(\n    :C1Hermite,\n    \"C1-continuous Hermite shape functions\",\n    (\n        (0.0,),\n        (0.0,),\n        (1.0,),\n        (1.0,)\n    ),\n    (\n        \"2*u^3 - 3*u^2 + 1\",\n        \"u^3 - 2*u^2 + u\",\n        \"-2*u^3 + 3*u^2\",\n        \"u^3 - u^2\"\n    )\n);\neval(code)Again, we should have 1.0 in corresponding nodal point or it\'s derivative, according to that order we have u(0) u(0) u(1) u(1), soB = C1Hermite()\nN = zeros(1, 4)\ndN = zeros(1, 4)\neval_basis!(B, N, (0.0,))\neval_dbasis!(B, dN, (0.0,))\neval_basis!(B, N, (1.0,))\neval_dbasis!(B, dN, (1.0,))The last option is to build everything from scratch. For that, one must import and define following functions:Base.size\nBase.length\nFEMBase.getreferenceelement_coordinates\nFEMBase.eval_basis!\nFEMBase.eval_dbasis!As an examples, a simple implementation of P-hierarchical 1d-basis would then be the following:import Base: size, length\nimport FEMBase: get_reference_element_coordinates,\n                eval_basis!, eval_dbasis!,\n                AbstractBasis\n\ntype PSeg <: AbstractBasis\n    order :: Int\nend\n\nfunction PSeg()\n    return PSeg(1)\nend\n\nfunction length(basis::PSeg)\n    return basis.order+1\nend\n\nfunction size(basis::PSeg)\n    return (1, basis.order+1)\nend\n\nfunction get_reference_element_coordinates(basis::PSeg)\n    return ((-1.0,), (1.0,))\nend\n\nnothing # hideNext, define Legengre polynomials:\"\"\"\n    get_legendre_polynomial(n)\n\nReturn Legendgre polynomial of order `n` to inverval ξ ∈ [1, 1].\n\nImplementation uses Bonnet\'s recursion formula. See\nhttps://en.wikipedia.org/wiki/Legendre_polynomials\n\"\"\"\nfunction get_legendre_polynomial(n)\n    n == 0 && return xi -> 1.0\n    n == 1 && return xi -> xi\n    Pm1 = get_legendre_polynomial(n-1)\n    Pm2 = get_legendre_polynomial(n-2)\n    A(xi) = (2.0*n-1.0)*xi*Pm1(xi)\n    B(xi) = (n-1.0)*Pm2(xi)\n    return xi -> (A(xi)-B(xi))/n\nend\n\n\"\"\"\n    get_legendre_polynomial_derivative(n)\n\nReturn derivative of Legendgre polynomial of order `n` to\ninverval ξ ∈  [-1, 1]\n\"\"\"\nfunction get_legendre_polynomial_derivative(n)\n    n == 0 && return xi -> 0.0\n    n == 1 && return xi -> 1.0\n    Pm1 = get_legendre_polynomial_derivative(n-1)\n    Pm2 = get_legendre_polynomial_derivative(n-2)\n    A(xi) = (2.0*(n-1.0)+1.0)*xi*Pm1(xi)\n    B(xi) = (n+1.0-1.0)*Pm2(xi)\n    return xi -> (A(xi)-B(xi))/(n-1.0)\nend\n\nnothing # hideAnd finally implement eval_basis! and eval_dbasis! functions:function eval_basis!{T}(basis::PSeg, N::Matrix{T}, xi::Tuple{T})\n    n = length(basis)\n    t = xi[1]\n    N[1] = 0.5*(1-t)\n    N[2] = 0.5*(1+t)\n    n < 3 && return N\n    for i=3:n\n        j = i-1\n        P1 = get_legendre_polynomial(j)\n        P2 = get_legendre_polynomial(j-2)\n        N[i] = 1.0/sqrt(2.0*(2.0*j-1.0))*(P1(t)-P2(t))\n    end\n    return N\nend\n\nfunction eval_dbasis!{T}(basis::PSeg, dN::Matrix{T}, xi::Tuple{T})\n    n = length(basis)\n    t = xi[1]\n    dN[1] = -0.5\n    dN[2] = 0.5\n    n < 3 && return N\n    for i=3:n\n        j = i-1\n        P1 = get_legendre_polynomial_derivative(j)\n        P2 = get_legendre_polynomial_derivative(j-2)\n        dN[i] = 1.0/sqrt(2.0*(2.0*j-1.0))*(P1(t)-P2(t))\n    end\n    return dN\nend\n\nnothing # hideLet\'s try it:B = PSeg()\nN = zeros(1, length(B))\neval_basis!(B, N, (0.0,))\nB.order = 2\nN = zeros(1, length(B))\neval_basis!(B, N, (0.0,))(Image: Hierarchical shape functions up to order 6)"
},

{
    "location": "packages/FEMBase/integration/#",
    "page": "Integration",
    "title": "Integration",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/integration/#Integration-1",
    "page": "Integration",
    "title": "Integration",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/elements/#",
    "page": "Elements",
    "title": "Elements",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/elements/#Elements-1",
    "page": "Elements",
    "title": "Elements",
    "category": "section",
    "text": "In JuliaFEM, elements can be considered as \"containers\", combining fields and basis functions described above. Among that, element has information about topology (connectivity) and numerical integration rule. These fundamentals forms a finite element, the backbone of finite element method.using FEMBaseNew elements are constructed by passing basis type (e.g. Seg2, Quad4, Tet10, ...) to Element and list of id numbers to where element is topologically connected.el = Element(Quad4, [1, 2, 3, 4])Setting fields to element is done using a command update!, which either creates a new field if field with that name does not already exist, or updates the old one. Typically, at least field called geometry needs to be defined to element as it\'s used to calculate Jacobian of element. Fields can be discrete, continuous, time invariant or variant, variable or constant, or anything else that is subclassed from AbstractField.X = Dict(1 => [0.0,0.0], 2=>[1.0,0.0], 3=>[1.0,1.0], 4=>[0.0,1.0])\nupdate!(el, \"geometry\", X)Internally, fields are stored in a Dict:el.fieldsThe command update! is automatically inspecting field type based in input. For example, to define temporal field varying spatially:u0 = ([0.0,0.0], [0.0,0.0], [0.0,0.0], [0.0,0.0])\nu1 = ([0.0,0.0], [0.0,0.0], [0.5,0.0], [0.0,0.0])\nupdate!(el, \"displacement\", 0.0 => u0)\nupdate!(el, \"displacement\", 1.0 => u1)\nel.fieldsInterpolating of fields can be done using syntax Element(field_name, xi, time). For example, position of material particle X in initial configuration and deformed configuration in the middle of the element at time t=1 can be found asxi = (0.0, 0.0)\ntime = 1.0\nX = el(\"geometry\", xi, time)\nu = el(\"displacement\", xi, time)\nx = X+uJacobian, determinant of Jacobian and gradient of field can be calculated adding extra argument Val{:Jacobian}, Val{:detJ}, Val{:Grad} to the above command and not passing field name, i.e.el(xi, time, Val{:Jacobian})\nel(xi, time, Val{:detJ})\nel(xi, time, Val{:Grad})Usually what is needed when calculating local stiffness matrices is a gradient of some field. For example, displacement gradient and temperature gradient can be obtained following way:gradu = el(\"displacement\", xi, time, Val{:Grad})\nupdate!(el, \"temperature\", (1.0, 2.0, 3.0, 4.0))\ngradT = el(\"temperature\", xi, time, Val{:Grad})Accessing integration points of element is done using function get_integration_points. Combining interpolation and integration one can already calculate local matrices of a single element or, for example area and strain energy:update!(el, \"lambda\", 96.0)\nupdate!(el, \"mu\", 48.0)\n\nA = 0.0\nW = 0.0\nfor ip in get_integration_points(el)\n    detJ = el(ip, time, Val{:detJ})\n    A += ip.weight * detJ\n    ∇u = el(\"displacement\", ip, time, Val{:Grad})\n    E = 1/2*(∇u + ∇u\')\n    λ = el(\"lambda\", ip, time)\n    μ = el(\"mu\", ip, time)\n    W += ip.weight * ( λ/2*trace(E*E\') + μ*trace(E)^2) * detJ\nend\n\nprintln(\"Area: $A\")\nprintln(\"Strain energy: $W\")To calculate local stiffness matrix for Poisson problem:K = zeros(4,4)\nupdate!(el, \"coefficient\", 36.0)\nfor ip in get_integration_points(el)\n    dN = el(ip, time, Val{:Grad})\n    detJ = el(ip, time, Val{:detJ})\n    c = el(\"coefficient\", ip, time)\n    K += ip.weight * c*dN\'*dN * detJ\nend\nKFor more memory efficient code it\'s a good idea to use BasisInfo and element_info! which allocates working memory to calculate all \"basic stuff\" for a single integration point, like Jacobian, determinant of Jacobian, basis and it\'s partial derivatives with respect to reference configuration X.bi = BasisInfo(Quad4)\nfill!(K, 0.0)\nfor ip in get_integration_points(el)\n    J, detJ, N, dN = element_info!(bi, el, ip, time)\n    c = el(\"coefficient\", ip, time)\n    K += ip.weight * c*dN\'*dN * detJ\nend\nK"
},

{
    "location": "packages/FEMBase/elements/#Using-analytical-fields-1",
    "page": "Elements",
    "title": "Using analytical fields",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/elements/#Creating-fields-depending-from-other-fields-1",
    "page": "Elements",
    "title": "Creating fields depending from other fields",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/problems/#",
    "page": "Problems",
    "title": "Problems",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/problems/#Problems-1",
    "page": "Problems",
    "title": "Problems",
    "category": "section",
    "text": "The role of problems in JuliaFEM is to work as a container for a set of elements. They contain elements and an information how the elements are assembled to the global assembly. The key point is that thanks to multiple dispatch, each problem defines also the physics behind discretization and all problems are assembled using a command assemble_elements!. As an example, a heat equation in two dimensions is discretized. Mathematically known also as Poisson problem. Strong form of the problem is nabla cdot (-nabla u ) = f    text in  Omega \n                         u = u_0  text on  Gamma_mathrmD \n      fracupartial n = g    text on  Gamma_mathrmNand corresponding variational problem is to find uinmathcalU such that for all vinmathcalVint_Omegaknabla ucdotnabla vmathrmdx=int_Omegafvmathrmdx+int_Gamma_mathrmNgvmathrmdsLet\'s call k thermal conductivity, f heat source and g heat flux.using FEMBase\nimport FEMBase: assemble_elements!, get_unknown_field_nameEach new problem must be a subtype of FieldProblem or BoundaryProblem. The main difference between these two are that FieldProblem is assembling local matrices for domain Omega whereas BoundaryProblem is creating (in general) constraint matrices for boundary Gamma_mathrmD. The general structure to solve in JuliaFEM is currently described by four different matrices and two vectors, i.e.beginbmatrix\nboldsymbolK  boldsymbolC_1\nboldsymbolC_2  boldsymbolD\nendbmatrix\nbeginbmatrix\nboldsymbolu\nboldsymbollambda\nendbmatrix =\nbeginbmatrix\nboldsymbolf\nboldsymbolg\nendbmatrixWe believe that this construction is general enough to describe all possible situations in future. Quite often boldsymbolC_1 = boldsymbolC_2^mathrmT and boldsymbolD = boldsymbol0 so that we have a typical saddle point problembeginbmatrixboldsymbolK  boldsymbolC^mathrmT\nboldsymbolC  boldsymbol0\nendbmatrixbeginbmatrixboldsymbolu\nboldsymbollambda\nendbmatrix=beginbmatrixboldsymbolf\nboldsymbolg\nendbmatrixwhich is equivalent to minimization problemmin_boldsymbolCboldsymbolu = boldsymbolg\nfrac12 boldsymbolu^mathrmT boldsymbolK boldsymbolu -\nboldsymbolu^mathrmT boldsymbolf"
},

{
    "location": "packages/FEMBase/problems/#Discretizing-field-problem-1",
    "page": "Problems",
    "title": "Discretizing field problem",
    "category": "section",
    "text": "So, first we must define a new type, e.g. Heat, which is a subclass of FieldProblem. Problem-wide parameters can be defined into struct if needed.type Heat <: FieldProblem\nendIn principle it\'s possible to assemble one element at a time, but way more memory efficient is to assemble all elements with same kind (basis) at same time and preallocate memory only one time before looping through element list. Implementation for assembling local stiffness matrix isfunction assemble_elements!{B}(problem::Problem{Heat}, assembly::Assembly,\n                               elements::Vector{Element{B}}, time::Float64)\n\n    println(\"Assembling elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    Ke = zeros(ndofs, ndofs)\n\n    for element in elements\n        fill!(Ke, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            k = element(\"thermal conductivity\", ip, time)\n            Ke += ip.weight * k*dN\'*dN * detJ\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.K, gdofs, gdofs, Ke)\n    end\n\nend\n\nnothing # hideHere, first some memory is allocated to calculate Jacobian, gradients etc. to BasisInfo. Ke is used to store local stiffness matrix. Then iterate over all elements and integration points, evaluate basis and add contribution to local stiffness matrix. Finally, get global degrees of freedom for element by using command get_gdofs and finally add contribution to global stiffness matrix K.From performance point of view, it\'s important that memory allocations inside at least the innermost loop is minimized, although assembling global stiffness matrix can be parallelized (at least almost) perfectly and is not considered as a bottleneck when models get big enough. It\'s anyway a good idea to pay attention to the memory allocations."
},

{
    "location": "packages/FEMBase/problems/#Setting-and-getting-global-degrees-of-freedom-for-element-1",
    "page": "Problems",
    "title": "Setting and getting global degrees of freedom for element",
    "category": "section",
    "text": "get_gdofs is returning the global degrees of freedom for element. They can be set manually using set_gdofs(problem, element, dofs). Otherwise they are calculated automatically based on the problem dimension using formula g(i,j,d) = d*(i-1)+j, where i is local node number, j is the number of degree of freedom and d is the maximum number of degrees of freedom for node. With this formula dofs are ordered so that first comes all dofs for node 1, then for node 2 and so on. For 3 dofs/node we get (u_11 u_12 u_13 u_21 u_22 u_23 ldots u_N1 u_N2 u_N3), where the first index is node number and second index is dof number.Let\'s create some test problem and test our implementation:el1 = Element(Quad4, [1, 2, 3, 4])\nX = Dict(1 => [0.0,0.0], 2 => [1.0,0.0], 3 => [1.0,1.0], 4 => [0.0,1.0])\nupdate!(el1, \"geometry\", X)\nupdate!(el1, \"thermal conductivity\", 6.0)\nelements = [el1]\nassembly = Assembly()\nproblem = Problem(Heat, \"test problem\", 1)\nnothing # hideNow the struct Heat is empty. If we need to store some problem-wide settings to that struct, they can be found from problem.properties. When creating a new Problem, the syntax is Problem(type, name, field_dimension), where two first arguments are self descriptive. The third one is the information, how many degrees of freedom is in this problem. As Poisson problem is scalar equation, there is only 1 degrees of freedom per node. For example in continuum mechanics, where the unknown field is displacement, there is usually 2-6 degrees of freedom per node, depending on problem type. Next we do the actual assembling of elements into global stiffness matrix:time = 0.0\nassemble_elements!(problem, assembly, elements, time)full(assembly.K)There is actually one Assembly inside Problem and elements are defined to problem using add_elements!, so a more realistic use case to create global assembly would be to use assemble!(problem, time) as shown below:el2 = Element(Tri3, [3, 2, 5])\nX[5] = [2.0, 1.0]\nelements = [el1, el2]\nupdate!(elements, \"geometry\", X)\nupdate!(elements, \"thermal conductivity\", 6.0)\nproblem = Problem(Heat, \"test problem\", 1)\nadd_elements!(problem, elements)\nassemble!(problem, time)full(problem.assembly.K)Now, function defined above is actually executed two times, first for elements using Tri3 basis and after that for Quad4. That is, assemble!(problem, time) is grouping elements by their type and calling function for each element type separately. It also does some initializations and gives possibility to mangle matrices before and after assembly. These hacks may be useful if one needs to add some discrete values to the matrices after assembly or e.g. save matrices to disk for later diagnoses.We also need to deal with the integrals on the right hand side. The first integral is done over the domain and can be included to the same assemble_elements!-function than stiffness matrix. Boundary term can be handled in different ways. One option is to define it yet in same function and search for fields like surface traction S1, where S1 is one side of the element. This is how it is done in ABAQUS. Another way is to use lower dimensional \"boundary element\" in assembly and add surface term to that element. This is how it is done in Code Aster.assembly_elements!-function defined above can be overridden by restricting the type of elements list, elements::Vector{Element{B}} to a some spesific elements. This allows, for example, to optimize assembly for some certain element type what is commonly used. Another use case is to define different assembly function for boundary elements. In 2d setting, voluminal elements like Tet3, Tet6, Quad4, Quad8, Quad9 are integrated over volume and they one dimensional counterparts Seg2, Seg3 can be used to assign boundary fluxes.The updated assemble_elements!-function, which can also handle volume load from right hand side of the equation, i.e. int fvmathrmdxlooks like following:function assemble_elements!{B}(problem::Problem{Heat}, assembly::Assembly,\n                               elements::Vector{Element{B}}, time::Float64)\n\n    println(\"Assembling volume elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    Ke = zeros(ndofs, ndofs)\n    fe = zeros(ndofs)\n\n    for element in elements\n        fill!(Ke, 0.0)\n        fill!(fe, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            k = element(\"thermal conductivity\", ip, time)\n            Ke += ip.weight * k*dN\'*dN * detJ\n            if haskey(element, \"heat source\")\n                f = element(\"heat source\", ip, time)\n                fe += ip.weight * N\'*f * detJ\n            end\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.K, gdofs, gdofs, Ke)\n        add!(assembly.f, gdofs, fe)\n    end\n\nend\n\nnothing # hideAt last, implement boundary elements to handle heat flux. To choose what elements should use this assembly function, elements::Vector{Element{B}} must be restricted only to group where B<:Union{Seg2, Seg}.function assemble_elements!{B<:Union{Seg2,Seg3}}(problem::Problem{Heat},\n                                                 assembly::Assembly,\n                                                 elements::Vector{Element{B}},\n                                                 time::Float64)\n\n    println(\"Assembling boundary elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    fe = zeros(ndofs)\n\n    for element in elements\n        haskey(element, \"heat flux\") || continue\n        fill!(fe, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            g = element(\"heat flux\", ip, time)\n            fe += ip.weight * N\'*g * detJ\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.f, gdofs, fe)\n    end\n\nend\n\nnothing # hideTo test everything implemented, create some small test problem:el1 = Element(Quad4, [1, 2, 3, 4])\nel2 = Element(Tri3, [3, 2, 5])\nel3 = Element(Seg2, [3, 5])\nX = Dict(1 => [0.0, 0.0],\n         2 => [1.0, 0.0],\n         3 => [1.0, 1.0],\n         4 => [0.0, 1.0],\n         5 => [2.0, 1.0])\nelements = [el1, el2, el3]\nupdate!(elements, \"geometry\", X)\nupdate!(elements, \"thermal conductivity\", 6.0)\nupdate!(el3, \"heat flux\", 264.0)\nupdate!(el1, \"heat source\", 132.0)\nproblem = Problem(Heat, \"test problem\", 1)\nadd_elements!(problem, elements)\nassemble!(problem, time)Global stiffness matrix boldsymbolK and force vector boldsymbolf areK = full(problem.assembly.K)\nf = full(problem.assembly.f)To get unique solution, some essential boundary condition must be given, e.g. set dofs 1 and 4 fixed, u_1 = u_4 = 0.u = zeros(5)\nall_dofs = collect(1:5)\nfixed_dofs = [1, 4]\nfree_dofs = setdiff(all_dofs, fixed_dofs)\nu[free_dofs] = K[free_dofs,free_dofs] \\ f[free_dofs]\nu"
},

{
    "location": "packages/FEMBase/problems/#Discretizing-boundary-problem-1",
    "page": "Problems",
    "title": "Discretizing boundary problem",
    "category": "section",
    "text": "Can be e.g. Dirichlet boundary, contact / mesh tie problem between two domains, BEM formulation, kinematic coupling (MPC) and so on.A good question is to determine how to map element local degrees of freedom with global ones. As the plan is to develop a multiphysical FEM platform, it\'s a hard question how to create this kind of mapping in a dynamic way. Yet another question is how to set boundary conditions for different type of physics. For now, these questions are answered by defining the name of unknown field using function get_unknown_field_name and giving the dimension of unknown field when creating a problem, so that change of information between two problem is possible. This solution has already identified shortcomings and can be expected to change in future.function get_unknown_field_name(::Problem{Heat})\n    return \"temperature\"\nend\n\nnothing # hidetype DirichletBC <: BoundaryProblem\nendOur implementation to handle boundary condition u = u_0 looks following:function assemble_elements!{E}(problem::Problem{DirichletBC},\n                               assembly::Assembly,\n                               elements::Vector{Element{E}},\n                               time::Float64)\n\n    name = get_parent_field_name(problem)\n    dim = get_unknown_field_dimension(problem)\n\n    println(\"Assembling Dirichlet boundary condition\")\n    println(\"Field name = $name, dofs/node = $dim\")\n\n    data = Dict{Int64,Float64}()\n    for element in elements\n        for i=1:dim\n            haskey(element, \"$name $dim\") || continue\n            gdofs = get_gdofs(problem, element)\n            ldofs = gdofs[i:dim:end]\n            xis = get_reference_element_coordinates(E)\n            for (ldof, xi) in zip(ldofs, xis)\n                data[ldof] = interpolate(element, \"$name $dim\", xi, time)\n            end\n        end\n    end\n\n    for (dof, val) in data\n        add!(assembly.C1, dof, dof, 1.0)\n        add!(assembly.C2, dof, dof, 1.0)\n        add!(assembly.g, dof, val)\n    end\n\nendTo fix dofs 1 and 4 like before:bel1 = Element(Seg2, [1, 4])\nupdate!(bel1, \"geometry\", X)\nupdate!(bel1, \"temperature 1\", 0.0)\nbc = Problem(DirichletBC, \"fixed\", 1, \"temperature\")\nadd_elements!(bc, [bel1])\nassemble!(bc, time)Now we have all matrices needed:C1 = full(bc.assembly.C1, 5, 5)\nC2 = full(bc.assembly.C2, 5, 5)\nD = full(bc.assembly.D, 5, 5)\ng = full(bc.assembly.g, 5, 1)Together with already calculated matrices, we can now form saddle point problem boldsymbolAboldsymbolx = boldsymbolb:A = [K C1; C2 D]\nb = [f; g]Solution:nz = [1, 2, 3, 4, 5, 6, 9]\nx = zeros(10)\nx[nz] = A[nz,nz] \\ b[nz]As a result we have found boldsymbolu and boldsymbollambda:u = x[1:5]\nla = x[6:10]\nu\' * laBoth field problem and boundary problems can of course have all four matrices and two vectors. For example, in finite sliding contact algorithms all four matrices are used as algorithms are contributing to stiffness matrix also when linearized properly."
},

{
    "location": "packages/FEMBase/problems/#Assembling-mass-matrices-1",
    "page": "Problems",
    "title": "Assembling mass matrices",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/problems/#Using-problem-wide-fields-1",
    "page": "Problems",
    "title": "Using problem-wide fields",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/problems/#Discretizing-mixed-problems-1",
    "page": "Problems",
    "title": "Discretizing mixed problems",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/problems/#Using-automatic-differentiation-to-linearize-non-linear-problem-1",
    "page": "Problems",
    "title": "Using automatic differentiation to linearize non-linear problem",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/solvers/#",
    "page": "Analyses and solvers",
    "title": "Analyses and solvers",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/solvers/#Analyses-and-solvers-1",
    "page": "Analyses and solvers",
    "title": "Analyses and solvers",
    "category": "section",
    "text": "After a global assembly for each problem is ready, they must somehow put together, usually construct a linear system boldsymbolAboldsymbolx = boldsymbolb , solve system of equations and potentially update solution back to problems / elements.For this task we have Analysis. Just like problems are \"containers\" for a set of some elements, analyses are containers for a set of problems, performing some spesific task. This task usually (but not always) involves solving big systems of equations.For example, typical nonlinear quasistatic analysis isinitialize problems (if needed)\nassemble problems\ncombine assemblies to construct a linear system boldsymbolAboldsymbolx = boldsymbolb\nsolve linear system, as effectively as possible\nupdate solution back to problems or elements\npostprocess fields\nwrite requested results to file\ncheck convergence, if not converged, go back to 2."
},

{
    "location": "packages/FEMBase/solvers/#Implementing-solver-for-LinearSystem-1",
    "page": "Analyses and solvers",
    "title": "Implementing solver for LinearSystem",
    "category": "section",
    "text": "When models gets big enough, step 4 is dominating in a solution process. For that reason we have abstract type AbstractLinearSystemSolver which can be subclassed to construct own solution strategy. This strategy can be, for example to use Julia\'s build-in solvers, MUMPS, iterative solvers and so on. And to make this as standard as possible, we have LinearSystem containing all the relevant matrices, i.e.beginbmatrix\nboldsymbolK  boldsymbolC_1\nboldsymbolC_2  boldsymbolD\nendbmatrix\nbeginbmatrix\nboldsymbolu\nboldsymbollambda\nendbmatrix =\nbeginbmatrix\nboldsymbolf\nboldsymbolg\nendbmatrixusing FEMBase\nusing FEMBase: LinearSystem, AbstractLinearSystemSolver,\n               AbstractAnalysis, Analysis, Element, Problem,\n               Quad4, get_problems\nimport FEMBase: assemble_elements!, run!, can_solve, solve!\n\ntype Heat <: FieldProblem\nend\n\nfunction get_unknown_field_name(::Problem{Heat})\n    return \"temperature\"\nend\n\nfunction assemble_elements!{B}(problem::Problem{Heat}, assembly::Assembly,\n                               elements::Vector{Element{B}}, time::Float64)\n\n    println(\"Assembling volume elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    Ke = zeros(ndofs, ndofs)\n    fe = zeros(ndofs)\n\n    for element in elements\n        fill!(Ke, 0.0)\n        fill!(fe, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            k = element(\"thermal conductivity\", ip, time)\n            Ke += ip.weight * k*dN\'*dN * detJ\n            if haskey(element, \"heat source\")\n                f = element(\"heat source\", ip, time)\n                fe += ip.weight * N\'*f * detJ\n            end\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.K, gdofs, gdofs, Ke)\n        add!(assembly.f, gdofs, fe)\n    end\n\nend\n\nfunction assemble_elements!{B<:Union{Seg2,Seg3}}(problem::Problem{Heat},\n                                                 assembly::Assembly,\n                                                 elements::Vector{Element{B}},\n                                                 time::Float64)\n\n    println(\"Assembling boundary elements of kind $B\")\n    bi = BasisInfo(B)\n    ndofs = length(B)\n    fe = zeros(ndofs)\n\n    for element in elements\n        haskey(element, \"heat flux\") || continue\n        fill!(fe, 0.0)\n        for ip in get_integration_points(element)\n            J, detJ, N, dN = element_info!(bi, element, ip, time)\n            g = element(\"heat flux\", ip, time)\n            fe += ip.weight * N\'*g * detJ\n        end\n        gdofs = get_gdofs(problem, element)\n        add!(assembly.f, gdofs, fe)\n    end\n\nend\n\ntype DirichletBC <: BoundaryProblem\nend\n\nfunction assemble_elements!{E}(problem::Problem{DirichletBC},\n                               assembly::Assembly,\n                               elements::Vector{Element{E}},\n                               time::Float64)\n\n    name = get_parent_field_name(problem)\n    dim = get_unknown_field_dimension(problem)\n\n    println(\"Assembling Dirichlet boundary condition\")\n    println(\"Field name = $name, dofs/node = $dim\")\n\n    data = Dict{Int64,Float64}()\n    for element in elements\n        for i=1:dim\n            haskey(element, \"$name $dim\") || continue\n            gdofs = get_gdofs(problem, element)\n            ldofs = gdofs[i:dim:end]\n            xis = get_reference_element_coordinates(E)\n            for (ldof, xi) in zip(ldofs, xis)\n                data[ldof] = interpolate(element, \"$name $dim\", xi, time)\n            end\n        end\n    end\n\n    for (dof, val) in data\n        add!(assembly.C1, dof, dof, 1.0)\n        add!(assembly.C2, dof, dof, 1.0)\n        add!(assembly.g, dof, val)\n    end\n\nend\nFirst setup linear system, we take matrices introduced in the context of [Problems]:ls = LinearSystem(5)\nls.K = sparse([  4.0  -1.0  -2.0  -1.0   0.0\n                -1.0   7.0  -4.0  -2.0   0.0\n                -2.0  -4.0  10.0  -1.0  -3.0\n                -1.0  -2.0  -1.0   4.0   0.0\n                 0.0   0.0  -3.0   0.0   3.0])\nls.C1 = sparse([ 1.0  0.0  0.0  0.0  0.0\n	         0.0  0.0  0.0  0.0  0.0\n	         0.0  0.0  0.0  0.0  0.0\n	         0.0  0.0  0.0  1.0  0.0\n	         0.0  0.0  0.0  0.0  0.0])\nls.C2 = ls.C1\nls.f = sparsevec([33.0, 33.0, 165.0, 33.0, 132.0])\nnothing # hideFor example, a simple solver for small problems would be to use lufact from UMFPACK:\ntype LUSolver <: AbstractLinearSystemSolver\n    # may contain some solver-spesific settings\nend\n\n\"\"\"\n    solve!(ls::LinearSystem, solver::LUSolver)\n\nSolve linear system using LU factorization. If final system has zero rows,\nadd 1 to diagonal to make matrix non-singular.\n\"\"\"\nfunction solve!(ls::LinearSystem, solver::LUSolver)\n\n    println(\"Solving system using LUSolver\")\n\n    A = [ls.K ls.C1; ls.C2 ls.D]\n    b = [ls.f; ls.g]\n\n    # add 1.0 to diagonal for any zero rows in system\n    p = ones(2*ls.dim)\n    p[unique(rowvals(A))] = 0.0\n    A += spdiagm(p)\n\n    # solve A*x = b using LU factorization and update solution vectors\n    x = lufact(A) \\ full(b)\n    ls.u = x[1:ls.dim]\n    ls.la = x[ls.dim+1:end]\n\n    return nothing\nend\n\nnothing # hideTo test it:solver = LUSolver()\nsolve!(ls, solver)\nfull(ls.u)\nfull(ls.la)We try to be clever with solvers, because solution of linear system is taking the most of the time in analysis for big models. It\'s possible to build a list of solvers which are then run in order, so if first one cannot solve the system, then we can try the next one and so on. For example, direct solvers are very robust but they need quite lot of memory for factorization. If computer / cluster has enough of memory, we can prefer direct solver over iterative ones. If stiffness matrix is symmetric, and problem is positive definite, Cholesky decomposition is preferred over LU decomposition and so on. Before starting the actual solution, one can study matrix structure using can_solve:type FakeSolver <: AbstractLinearSystemSolver\nend\n\nfunction can_solve(ls::LinearSystem, solver::FakeSolver)\n    if issymmetric(ls.K)\n        return (true, \"OK\")\n    else\n        return (false, \"stiffness matrix not symmetric\")\n    end\nend\n\nnothing # hidesolvers = [FakeSolver(), LUSolver()]\nls.K[1,2] += 1\nsolve!(ls, solvers)"
},

{
    "location": "packages/FEMBase/solvers/#Implementing-new-analyses-1",
    "page": "Analyses and solvers",
    "title": "Implementing new analyses",
    "category": "section",
    "text": "Like said, Analysis is a type containing all problems and is performing some sort of operation with them. Typically this can be a solution of static or dynamic equilibrium, eigenvalue analysis, linear perturbation analysis or doing some postprocessing for already done analysis, like fatigue analysis, calculating critical stresses and so on.In industrial computing, a bigger workflow typically contains several different analyses. Compared to some commerfial FEM softwares, e.g. ABAQUS, Analysis can be consided as STEP, but in a more general sense. Because Julia is a real programming language, one can then create, for example, an optimization loop, combining several different analyses to optimize model against some design goal.There\'s not so much rules about how to define new analysis. It must be a subtype of AbstractAnalysis and implement run!-function. As a minimal working example, implementation for static analysis would then be:type Static <: AbstractAnalysis\n    time :: Float64\nend\n\nfunction Static()\n    return Static(0.0)\nend\n\nfunction run!(analysis::Analysis{Static})\n\n    time = analysis.properties.time\n    problems = get_problems(analysis)\n\n    # assemble matrices for all problems\n    N = 0 # size of resulting matrix\n    for problem in problems\n        assemble!(problem, time)\n        N = max(N, size(problem.assembly.K, 2))\n    end\n\n    # create new LinearSystem and add assemblies to that\n    ls = LinearSystem(N)\n\n    for problem in problems\n        ls.K += sparse(problem.assembly.K, N, N)\n        ls.f += sparse(problem.assembly.f, N, 1)\n        ls.C1 += sparse(problem.assembly.C1, N, N)\n        ls.C2 += sparse(problem.assembly.C2, N, N)\n        ls.D += sparse(problem.assembly.D, N, N)\n        ls.g += sparse(problem.assembly.g, N, 1)\n    end\n\n    # solve linear system using e.g. LUSolver\n    solve!(ls, LUSolver())\n\n    # update solution back to problems\n    u = Dict(i=>j for (i,j) in enumerate(ls.u))\n    for problem in problems\n        is_field_problem(problem) || continue\n        field_name = get_unknown_field_name(problem)\n        elements = get_elements(problem)\n        update!(elements, field_name, time => u)\n    end\nend\n\nnothing # hideTo put everything together, typical solution process of time-intependent variational problem looks the following:X = Dict(1 => [0.0, 0.0],\n         2 => [1.0, 0.0],\n         3 => [1.0, 1.0],\n         4 => [0.0, 1.0],\n         5 => [2.0, 1.0])\n\nel1 = Element(Quad4, [1, 2, 3, 4])\nel2 = Element(Tri3, [3, 2, 5])\nel3 = Element(Seg2, [3, 5])\nelements = [el1, el2, el3]\nupdate!(elements, \"geometry\", X)\nupdate!(elements, \"thermal conductivity\", 6.0)\nupdate!(el3, \"heat flux\", 264.0)\nupdate!(el1, \"heat source\", 132.0)\nproblem = Problem(Heat, \"test problem\", 1)\nadd_elements!(problem, elements)\n\nbel1 = Element(Seg2, [1, 4])\nupdate!(bel1, \"geometry\", X)\nupdate!(bel1, \"temperature 1\", 0.0)\nbc = Problem(DirichletBC, \"fixed\", 1, \"temperature\")\nadd_elements!(bc, [bel1])\n\nanalysis = Analysis(Static, \"static analysis of test problem\")\nadd_problems!(analysis, [problem, bc])\nrun!(analysis)After analysis is ready, temperature is updated to elements:el1(\"temperature\", 0.0)\nel2(\"temperature\", 0.0)\nel3(\"temperature\", 0.0)"
},

{
    "location": "packages/FEMBase/postprocessing/#",
    "page": "Postprocessing",
    "title": "Postprocessing",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/postprocessing/#Postprocessing-1",
    "page": "Postprocessing",
    "title": "Postprocessing",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/results/#",
    "page": "Results",
    "title": "Results",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/results/#Results-1",
    "page": "Results",
    "title": "Results",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/materials/#",
    "page": "Materials",
    "title": "Materials",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/materials/#Materials-1",
    "page": "Materials",
    "title": "Materials",
    "category": "section",
    "text": ""
},

{
    "location": "packages/FEMBase/#",
    "page": "FEMBase.jl",
    "title": "FEMBase.jl",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBase/#FEMBase.jl-1",
    "page": "FEMBase.jl",
    "title": "FEMBase.jl",
    "category": "section",
    "text": "FEMBase.jl is a JuliaFEM base package. It includes all basic data structures so that one can start programming own finite element models."
},

{
    "location": "packages/AsterReader/#",
    "page": "AsterReader.jl",
    "title": "AsterReader.jl",
    "category": "page",
    "text": ""
},

{
    "location": "packages/AsterReader/#AsterReader.jl-1",
    "page": "AsterReader.jl",
    "title": "AsterReader.jl",
    "category": "section",
    "text": "Pages = [\"index.md\", \"api.md\"]Package can be used to read Code Aster .med and .rmed file formats. To read Code Aster .med file (exported using SALOME), one has to writeaster_read_mesh(fn)where fn is the name of the mesh file. Result is a simple dictionary.In case of several mesh exists in a single file, one must provide also mesh name, e.g.aster_read_mesh(fn, mesh_name=\"my_mesh\")Package can also be used to read results from .rmed files. This is still highly experimental feature and can be used mainly to compare calculation results done using Code Aster to results produced by own FE code."
},

{
    "location": "packages/AbaqusReader/#",
    "page": "AbaqusReader.jl documentation",
    "title": "AbaqusReader.jl documentation",
    "category": "page",
    "text": ""
},

{
    "location": "packages/AbaqusReader/#AbaqusReader.jl-documentation-1",
    "page": "AbaqusReader.jl documentation",
    "title": "AbaqusReader.jl documentation",
    "category": "section",
    "text": "DocTestSetup = quote\n    using AbaqusReader\nend"
},

{
    "location": "packages/AbaqusReader/#Exported-functions-1",
    "page": "AbaqusReader.jl documentation",
    "title": "Exported functions",
    "category": "section",
    "text": "AbaqusReader.abaqus_download\nAbaqusReader.abaqus_read_mesh\nAbaqusReader.abaqus_read_model\nAbaqusReader.create_surface_elements"
},

{
    "location": "packages/AbaqusReader/#Internal-functions-1",
    "page": "AbaqusReader.jl documentation",
    "title": "Internal functions",
    "category": "section",
    "text": "AbaqusReader.parse_definition(definition)\nAbaqusReader.parse_section\nAbaqusReader.regex_match\nAbaqusReader.add_set!\nAbaqusReader.consumeList\nAbaqusReader.parse_numbers\nAbaqusReader.register_abaqus_keyword\nAbaqusReader.is_abaqus_keyword_registered\nAbaqusReader.element_mapping\nAbaqusReader.find_keywords\nAbaqusReader.matchset\nAbaqusReader.empty_or_comment_line\nAbaqusReader.create_surface_element\nAbaqusReader.parse_abaqus"
},

{
    "location": "packages/AbaqusReader/#Index-1",
    "page": "AbaqusReader.jl documentation",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "packages/HeatTransfer/#",
    "page": "HeatTransfer.jl",
    "title": "HeatTransfer.jl",
    "category": "page",
    "text": ""
},

{
    "location": "packages/HeatTransfer/#HeatTransfer.jl-1",
    "page": "HeatTransfer.jl",
    "title": "HeatTransfer.jl",
    "category": "section",
    "text": "HeatTransfer.jl extends JuliaFEM functionalities to solve heat transfer problems."
},

{
    "location": "packages/HeatTransfer/#Theory-1",
    "page": "HeatTransfer.jl",
    "title": "Theory",
    "category": "section",
    "text": "The heat equation is a parabolic partial differential equation that describes the distribution of heat (or variation in temperature) in a given region over time. The state equation, given by the first law of thermodynamics (i.e. conservation of energy), is written in the following form (assuming no mass transfer or radiation). This form is more general and particularly useful to recognize which property (e.g. c_p or rho) influences which term. State equations isrho c_pfracpartial Tpartial t-nablacdotleft(knabla Tright)=dotq_Vwhere dotq_V is the volumetric heat source."
},

{
    "location": "packages/HeatTransfer/#Features-1",
    "page": "HeatTransfer.jl",
    "title": "Features",
    "category": "section",
    "text": "PlaneHeat. Thermal conductivity k can be set using field thermal conductivity. Volumetric heat source dotq_V can be set using field heat source. Heat flux for boundary can be set using field heat flux. "
},

{
    "location": "packages/HeatTransfer/#References-1",
    "page": "HeatTransfer.jl",
    "title": "References",
    "category": "section",
    "text": "Heat equation. (2018, January 5). In Wikipedia, The Free Encyclopedia. Retrieved 00:49, January 30, 2018, from https://en.wikipedia.org/w/index.php?title=Heat_equation&oldid=818847673\nHeat transfer. (2018, January 26). In Wikipedia, The Free Encyclopedia. Retrieved 00:48, January 30, 2018, from https://en.wikipedia.org/w/index.php?title=Heat_transfer&oldid=822415173"
},

{
    "location": "packages/FEMBeam/#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "packages/FEMBeam/#Introduction-1",
    "page": "Introduction",
    "title": "Introduction",
    "category": "section",
    "text": "Package contains beam formulations for JuliaFEM."
},

{
    "location": "packages/FEMBeam/#Theory-1",
    "page": "Introduction",
    "title": "Theory",
    "category": "section",
    "text": "Theory of beam formulations comes here."
},

{
    "location": "packages/FEMBeam/#Examples-1",
    "page": "Introduction",
    "title": "Examples",
    "category": "section",
    "text": "DocTestSetup = quote\n    using FEMBase\n    using FEMBeam\nendSimple calculation examples here."
},

{
    "location": "packages/MortarContact2D/#",
    "page": "MortarContact2D.jl",
    "title": "MortarContact2D.jl",
    "category": "page",
    "text": ""
},

{
    "location": "packages/MortarContact2D/#MortarContact2D.jl-1",
    "page": "MortarContact2D.jl",
    "title": "MortarContact2D.jl",
    "category": "section",
    "text": "MortarContact2D.jl extends JuliaFEM functionalities to solve plane solid mechanics problems including contacts. Module is partially build on top of earlier module Mortar2D.jl."
},

{
    "location": "packages/MortarContact2D/#Theory-1",
    "page": "MortarContact2D.jl",
    "title": "Theory",
    "category": "section",
    "text": ""
},

{
    "location": "packages/MortarContact2D/#Features-1",
    "page": "MortarContact2D.jl",
    "title": "Features",
    "category": "section",
    "text": ""
},

{
    "location": "packages/MortarContact2D/#References-1",
    "page": "MortarContact2D.jl",
    "title": "References",
    "category": "section",
    "text": ""
},

{
    "location": "packages/MortarContact2DAD/#",
    "page": "MortarContact2DAD.jl",
    "title": "MortarContact2DAD.jl",
    "category": "page",
    "text": ""
},

{
    "location": "packages/MortarContact2DAD/#MortarContact2DAD.jl-1",
    "page": "MortarContact2DAD.jl",
    "title": "MortarContact2DAD.jl",
    "category": "section",
    "text": ""
},

{
    "location": "packages/MortarContact2DAD/#Theory-1",
    "page": "MortarContact2DAD.jl",
    "title": "Theory",
    "category": "section",
    "text": ""
},

{
    "location": "packages/MortarContact2DAD/#Features-1",
    "page": "MortarContact2DAD.jl",
    "title": "Features",
    "category": "section",
    "text": ""
},

{
    "location": "packages/MortarContact2DAD/#References-1",
    "page": "MortarContact2DAD.jl",
    "title": "References",
    "category": "section",
    "text": ""
},

{
    "location": "api/#",
    "page": "API documentation",
    "title": "API documentation",
    "category": "page",
    "text": ""
},

{
    "location": "api/#API-documentation-1",
    "page": "API documentation",
    "title": "API documentation",
    "category": "section",
    "text": ""
},

{
    "location": "api/#Index-1",
    "page": "API documentation",
    "title": "Index",
    "category": "section",
    "text": "DocTestSetup = quote\n    using JuliaFEM\nend"
},

{
    "location": "api/#Types-1",
    "page": "API documentation",
    "title": "Types",
    "category": "section",
    "text": "JuliaFEM.Element\nJuliaFEM.Problem\nJuliaFEM.Elasticity"
},

{
    "location": "api/#Functions-1",
    "page": "API documentation",
    "title": "Functions",
    "category": "section",
    "text": "JuliaFEM.update!"
},

]}
