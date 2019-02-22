var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#PowerModels.jl-Documentation-1",
    "page": "Home",
    "title": "PowerModels.jl Documentation",
    "category": "section",
    "text": "CurrentModule = PowerModels"
},

{
    "location": "#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "PowerModels.jl is a Julia/JuMP package for Steady-State Power Network Optimization. It provides utilities for parsing and modifying network data (see PowerModels Network Data Format for details), and is designed to enable computational evaluation of emerging power network formulations and algorithms in a common platform.The code is engineered to decouple Problem Specifications (e.g. Power Flow, Optimal Power Flow, ...) from Network Formulations (e.g. AC, DC-approximation, SOC-relaxation, ...). This enables the definition of a wide variety of power network formulations and their comparison on common problem specifications."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "The latest stable release of PowerModels can be installed using the Julia package manager withPkg.add(\"PowerModels\")For the current development version, \"checkout\" this package withPkg.checkout(\"PowerModels\")At least one solver is required for running PowerModels.  The open-source solver Ipopt is recommended, as it is extremely fast, and can be used to solve a wide variety of the problems and network formulations provided in PowerModels.  The Ipopt solver can be installed via the package manager withPkg.add(\"Ipopt\")Test that the package works by runningPkg.test(\"PowerModels\")"
},

{
    "location": "quickguide/#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "quickguide/#Quick-Start-Guide-1",
    "page": "Getting Started",
    "title": "Quick Start Guide",
    "category": "section",
    "text": "Once PowerModels is installed, Ipopt is installed, and a network data file (e.g. \"case3.m\" or \"case3.raw\") has been acquired, an AC Optimal Power Flow can be executed with,using PowerModels\nusing Ipopt\n\nrun_ac_opf(\"case3.m\", IpoptSolver())Similarly, a DC Optimal Power Flow can be executed withrun_dc_opf(\"case3.m\", IpoptSolver())PTI .raw files in the PSS(R)E v33 specification can be run similarly, e.g. in the case of an AC Optimal Power Flowrun_ac_opf(\"case3.raw\", IpoptSolver())"
},

{
    "location": "quickguide/#Getting-Results-1",
    "page": "Getting Started",
    "title": "Getting Results",
    "category": "section",
    "text": "The run commands in PowerModels return detailed results data in the form of a dictionary. Results dictionaries from either Matpower .m or PTI .raw files will be identical in format. This dictionary can be saved for further processing as follows,result = run_ac_opf(\"case3.m\", IpoptSolver())For example, the algorithm\'s runtime and final objective value can be accessed with,result[\"solve_time\"]\nresult[\"objective\"]The \"solution\" field contains detailed information about the solution produced by the run method. For example, the following dictionary comprehension can be used to inspect the bus voltage angles in the solution,Dict(name => data[\"va\"] for (name, data) in result[\"solution\"][\"bus\"])For more information about PowerModels result data see the PowerModels Result Data Format section."
},

{
    "location": "quickguide/#Accessing-Different-Formulations-1",
    "page": "Getting Started",
    "title": "Accessing Different Formulations",
    "category": "section",
    "text": "The function \"runacopf\" and \"rundcopf\" are shorthands for a more general formulation-independent OPF execution, \"runopf\". For example, `runac_opf` is equivalent to,run_opf(\"case3.m\", ACPPowerModel, IpoptSolver())where \"ACPPowerModel\" indicates an AC formulation in polar coordinates.  This more generic run_opf() allows one to solve an OPF problem with any power network formulation implemented in PowerModels.  For example, an SOC Optimal Power Flow can be run with,run_opf(\"case3.m\", SOCWRPowerModel, IpoptSolver())"
},

{
    "location": "quickguide/#Modifying-Network-Data-1",
    "page": "Getting Started",
    "title": "Modifying Network Data",
    "category": "section",
    "text": "The following example demonstrates one way to perform multiple PowerModels solves while modifing the network data in Julia,network_data = PowerModels.parse_file(\"case3.m\")\n\nrun_opf(network_data, ACPPowerModel, IpoptSolver())\n\nnetwork_data[\"load\"][\"3\"][\"pd\"] = 0.0\nnetwork_data[\"load\"][\"3\"][\"qd\"] = 0.0\n\nrun_opf(network_data, ACPPowerModel, IpoptSolver())Network data parsed from PTI .raw files supports data extensions, i.e. data fields that are within the PSS(R)E specification, but not used by PowerModels for calculation. This can be achieve bynetwork_data = PowerModels.parse_file(\"case3.raw\"; import_all=true)This network data can be modified in the same way as the previous Matpower .m file example. For additional details about the network data, see the PowerModels Network Data Format section."
},

{
    "location": "quickguide/#Inspecting-AC-and-DC-branch-flow-results-1",
    "page": "Getting Started",
    "title": "Inspecting AC and DC branch flow results",
    "category": "section",
    "text": "The flow AC and DC branch results are not written to the result by default. To inspect the flow results, pass a settings Dictresult = run_opf(\"case3_dc.m\", ACPPowerModel, IpoptSolver(), setting = Dict(\"output\" => Dict(\"branch_flows\" => true)))\nresult[\"solution\"][\"dcline\"][\"1\"]\nresult[\"solution\"][\"branch\"][\"2\"]The losses of an AC or DC branch can be derived:loss_ac =  Dict(name => data[\"pt\"]+data[\"pf\"] for (name, data) in result[\"solution\"][\"branch\"])\nloss_dc =  Dict(name => data[\"pt\"]+data[\"pf\"] for (name, data) in result[\"solution\"][\"dcline\"])"
},

{
    "location": "quickguide/#Inspecting-the-Formulation-1",
    "page": "Getting Started",
    "title": "Inspecting the Formulation",
    "category": "section",
    "text": "The following example demonstrates how to break a run_opf call into seperate model building and solving steps.  This allows inspection of the JuMP model created by PowerModels for the AC-OPF problem,pm = build_generic_model(\"case3.m\", ACPPowerModel, PowerModels.post_opf)\n\nprint(pm.model)\n\nsolve_generic_model(pm, IpoptSolver())"
},

{
    "location": "network-data/#",
    "page": "Network Data Format",
    "title": "Network Data Format",
    "category": "page",
    "text": ""
},

{
    "location": "network-data/#PowerModels-Network-Data-Format-1",
    "page": "Network Data Format",
    "title": "PowerModels Network Data Format",
    "category": "section",
    "text": ""
},

{
    "location": "network-data/#The-Network-Data-Dictionary-1",
    "page": "Network Data Format",
    "title": "The Network Data Dictionary",
    "category": "section",
    "text": "Internally PowerModels utilizes a dictionary to store network data. The dictionary uses strings as key values so it can be serialized to JSON for algorithmic data exchange.The data dictionary organization and key names are designed to be mostly consistent with the Matpower file format and should be familiar to power system researchers, with the notable exceptions that loads and shunts are now split into separate components (see example below), and in the case of \"multinetwork\" data, most often used for time series.The network data dictionary structure is roughly as follows:{\n\"name\":<string>,\n\"version\":\"2\",\n\"baseMVA\":<float>,\n\"source_type\":<string>,\n\"source_version\":<string>,\n\"bus\":{\n    \"1\":{\n        \"index\":<int>,\n        \"bus_type\":<int>,\n        \"va\":<float>,\n        \"vm\":<float>,\n        ...\n    },\n    \"2\":{...},\n    ...\n},\n\"load\":{\n    \"1\":{\n        \"index\":<int>,\n        \"load_bus\":<int>,\n        \"pd\":<float>,\n        \"qd\":<float>,\n        ...\n    },\n    \"2\":{...},\n    ...\n},\n\"shunt\":{\n    \"1\":{\n        \"index\":<int>,\n        \"shunt_bus\":<int>,\n        \"gs\":<float>,\n        \"bs\":<float>,\n        ...\n    },\n    \"2\":{...},\n    ...\n},\n\"gen\":{\n    \"1\":{\n        \"index\":<int>,\n        \"gen_bus\":<int>,\n        \"pg\":<float>,\n        \"qg\":<float>,\n        ...\n    },\n    \"2\":{...},\n    ...\n},\n\"storage\":{\n    \"1\":{\n        \"index\":<int>,\n        \"storage_bus\":<int>,\n        \"energy\":<float>,\n        \"energy_rating\":<float>,\n        ...\n    },\n    \"2\":{...},\n    ...\n},\n\"branch\":{\n    \"1\":{\n        \"index\":<int>,\n        \"f_bus\":<int>,\n        \"t_bus\":<int>,\n        \"br_r\":<float>,\n        \"g_fr\":<float>,\n        \"b_fr\":<float>,\n        ...\n    },\n    \"2\":{...},\n    ...\n},\n\"dcline\":{\n    \"1\":{\n        \"index\":<int>,\n        \"f_bus\":<int>,\n        \"t_bus\":<int>,\n        \"pf\":<float>,\n        \"qf\":<float>,\n        \"vf\":<float>,\n        \"loss0\":<float>,\n        ...\n    },\n    \"2\":{...},\n    ...\n},\n}The following commands can be used to explore the network data dictionary generated by a given PTI or Matpower (this example) data file,network_data = PowerModels.parse_file(\"case3.m\")\ndisplay(network_data) # raw dictionary\nPowerModels.print_summary(network_data) # quick table-like summary\nPowerModels.component_table(network_data, \"bus\", [\"vmin\", \"vmax\"]) # component data in matrix formThe print_summary function generates a table-like text summary of the network data, which is helpful in quickly assessing the values in a data or solution dictionary.  The component_table builds a matrix of data for a given component type where there is one row for each component and one column for each requested data field.  The first column of a component table is the component\'s identifier (i.e. the index).For a detailed list of all possible parameters refer to the specification document provided with Matpower. The exception to this is that \"load\" and \"shunt\", containing \"pd\", \"qd\" and \"gs\", \"bs\", respectively, have been added as additional fields. These values are contained in \"bus\" in the original specification."
},

{
    "location": "network-data/#Noteworthy-Differences-from-Matpower-Data-Files-1",
    "page": "Network Data Format",
    "title": "Noteworthy Differences from Matpower Data Files",
    "category": "section",
    "text": "The PowerModels network data dictionary differs from the Matpower format in the following ways,All PowerModels components have an index parameter, which can be used to uniquely identify that network element.\nAll network parameters are in per-unit and angles are in radians.\nAll non-transformer branches are given nominal transformer values (i.e. a tap of 1.0 and a shift of 0.0).\nAll branches have a transformer field indicating if they are a transformer or not.\nThermal limit (rate) and current (c_rating) ratings on branches are optional.\nWhen present, the gencost data is incorporated into the gen data, the column names remain the same.\nWhen present, the dclinecost data is incorporated into the dcline data, the column names remain the same.\nWhen present, the bus_names data is incorporated into the bus data under the property \"bus_name\".\nSpecial treatment is given to the optional ne_branch matrix to support the TNEP problem.\nLoad data are split off from bus data into load data under the same property names.\nShunt data are split off from bus data into shunt data under the same property names."
},

{
    "location": "network-data/#Working-with-the-Network-Data-Dictionary-1",
    "page": "Network Data Format",
    "title": "Working with the Network Data Dictionary",
    "category": "section",
    "text": "Data exchange via JSON files is ideal for building algorithms, however it is hard to for humans to read and process.  To that end PowerModels provides various helper functions for manipulating the network data dictionary.The first of these helper functions are make_per_unit and make_mixed_units, which convert the units of the data inside a network data dictionary.  The mixed units format follows the unit conventions from Matpower and other common power network formats where some of the values are in per unit and others are the true values.  These functions can be used as follows,network_data = PowerModels.parse_file(\"case3.m\")\nPowerModels.print_summary(network_data) # default per-unit form\nPowerModels.make_mixed_units(network_data)\nPowerModels.print_summary(network_data) # mixed units formAnother useful helper function is update_data, which takes two network data dictionaries and updates the values in the first dictionary with the values from the second dictionary.  This is particularly helpful when applying sparse updates to network data.  A good example is using the solution of one computation to update the data in preparation for a second computation, like so,data = PowerModels.parse_file(\"case3.m\")\nopf_result = run_ac_opf(data, IpoptSolver())\nPowerModels.print_summary(opf_result[\"solution\"])\n\nPowerModels.update_data(data, opf_result[\"solution\"])\npf_result = run_ac_pf(data, IpoptSolver())\nPowerModels.print_summary(pf_result[\"solution\"])A variety of helper functions are available for processing the topology of the network.  For example, connected_components will compute the collections of buses that are connected by branches (i.e. the network\'s islands).  By default PowerModels will attempt to solve all of the network components simultaneously.  The select_largest_component function can be used to only consider the largest component in the network.  Finally the propagate_topology_status can be used to explicitly deactivate components that are implicitly inactive due to the status of other components (e.g. deactivating branches based on the status of their connecting buses), like so,data = PowerModels.parse_file(\"case3.m\")\nPowerModels.propagate_topology_status(data)\nopf_result = run_ac_opf(data, IpoptSolver())The test/data/case7_tplgy.m case provides an example of the kind of component status deductions that can be made.  The propagate_topology_status function can be helpful in diagnosing network models that converge to an infeasible solution.For details on all of the network data helper functions see, src/core/data.jl."
},

{
    "location": "network-data/#Working-with-Matpower-Data-Files-1",
    "page": "Network Data Format",
    "title": "Working with Matpower Data Files",
    "category": "section",
    "text": "PowerModels has extensive support for parsing Matpower network files in the .m format.In addition to parsing the standard Matpower parameters, PowerModels also supports extending the standard Matpower format in a number of ways as illustrated by the following examples.  In these examples JSON document fragments are used to indicate the structure of the PowerModel dictionary.Note that for DC lines, the flow results are returned using the same convention as for the AC lines, i.e. positive values for p_from/q_fromand p_to/q_to indicating power flow from the \'to\' node or \'from\' node into the line. This means that w.r.t matpower the sign is identical for p_from, but opposite for q_from/p_to/q_to."
},

{
    "location": "network-data/#Single-Values-1",
    "page": "Network Data Format",
    "title": "Single Values",
    "category": "section",
    "text": "Single values are added to the root of the dictionary as follows,mpc.const_float = 4.56becomes{\n\"const_float\": 4.56\n}"
},

{
    "location": "network-data/#Nonstandard-Matrices-1",
    "page": "Network Data Format",
    "title": "Nonstandard Matrices",
    "category": "section",
    "text": "Nonstandard matrices can be added as follows,mpc.areas = [\n    1   1;\n    2   3;\n];becomes{\n\"areas\":{\n    \"1\":{\n        \"index\":1,\n        \"col_1\":1,\n        \"col_2\":1\n    },\n    \"2\":{\n        \"index\":1,\n        \"col_1\":2,\n        \"col_2\":3\n    }\n}\n}"
},

{
    "location": "network-data/#Column-Names-1",
    "page": "Network Data Format",
    "title": "Column Names",
    "category": "section",
    "text": "Column names can be given to nonstandard matrices using the following special comment,%column_names%  area    refbus\nmpc.areas_named = [\n    4   5;\n    5   6;\n];becomes{\n\"areas\":{\n    \"1\":{\n        \"index\":1,\n        \"area\":4,\n        \"refbus\":5\n    },\n    \"2\":{\n        \"index\":2,\n        \"area\":5,\n        \"refbus\":6\n    }\n}\n}"
},

{
    "location": "network-data/#Standard-Matrix-Extensions-1",
    "page": "Network Data Format",
    "title": "Standard Matrix Extensions",
    "category": "section",
    "text": "Finally, if a nonstandard matrix\'s name extends a current Matpower matrix name with an underscore, then its values will be merged with the original Matpower component data.  Note that this feature requires that the nonstandard matrix has column names and has the same number of rows as the original matrix (similar to the gencost matrix in the Matpower format).  For example,%column_names%  rate_i  rate_p\nmpc.branch_limit = [\n    50.2    45;\n    36  60.1;\n    12  30;\n];becomes{\n\"branch\":{\n    \"1\":{\n        \"index\":1,\n        ...(all pre existing fields)...\n        \"rate_i\":50.2,\n        \"rate_p\":45\n    },\n    \"2\":{\n        \"index\":2,\n        ...(all pre existing fields)...\n        \"rate_i\":36,\n        \"rate_p\":60.1\n    },\n    \"3\":{\n        \"index\":3,\n        ...(all pre existing fields)...\n        \"rate_i\":12,\n        \"rate_p\":30\n    }\n}\n}"
},

{
    "location": "network-data/#Working-with-PTI-Data-files-1",
    "page": "Network Data Format",
    "title": "Working with PTI Data files",
    "category": "section",
    "text": "PowerModels also has support for parsing PTI network files in the .raw format that follow the PSS(R)E v33 specification.  Currently PowerModels supports the following PTI components,Buses\nLoads (constant power)\nFixed Shunts\nSwitch Shunts (default configuration)\nGenerators\nBranches\nTransformers (two and three winding)\nTwo-Terminal HVDC Lines (approximate)\nVoltage Source Converter HVDC Lines (approximate)In addition to parsing the standard parameters required by PowerModels for calculations, PowerModels also supports parsing additional data fields that are defined by the PSS(R)E specification, but not used by PowerModels directly. This can be achieved via the import_all optional keyword argument in parse_file when loading a .raw file, e.g.PowerModels.parse_file(\"case3.raw\"; import_all=true)"
},

{
    "location": "result-data/#",
    "page": "Result Data Format",
    "title": "Result Data Format",
    "category": "page",
    "text": ""
},

{
    "location": "result-data/#PowerModels-Result-Data-Format-1",
    "page": "Result Data Format",
    "title": "PowerModels Result Data Format",
    "category": "section",
    "text": ""
},

{
    "location": "result-data/#The-Result-Data-Dictionary-1",
    "page": "Result Data Format",
    "title": "The Result Data Dictionary",
    "category": "section",
    "text": "PowerModels utilizes a dictionary to organize the results of a run command. The dictionary uses strings as key values so it can be serialized to JSON for algorithmic data exchange. The data dictionary organization is designed to be consistent with the PowerModels The Network Data Dictionary.At the top level the results data dictionary is structured as follows:{\n\"solver\":<string>,       # name of the Julia class used to solve the model\n\"status\":<julia symbol>, # solver status at termination\n\"solve_time\":<float>,    # reported solve time (seconds)\n\"objective\":<float>,     # the final evaluation of the objective function\n\"objective_lb\":<float>,  # the final lower bound of the objective function (if available)\n\"machine\":{...},         # computer hardware information (details below)\n\"data\":{...},            # test case information (details below)\n\"solution\":{...}         # complete solution information (details below)\n}"
},

{
    "location": "result-data/#Machine-Data-1",
    "page": "Result Data Format",
    "title": "Machine Data",
    "category": "section",
    "text": "This object provides basic information about the hardware that was used when the run command was called.{\n\"cpu\":<string>,    # CPU product name\n\"memory\":<string>  # the amount of system memory (units given)\n}"
},

{
    "location": "result-data/#Case-Data-1",
    "page": "Result Data Format",
    "title": "Case Data",
    "category": "section",
    "text": "This object provides basic information about the network cases that was used when the run command was called.{\n\"name\":<string>,      # the name from the network data structure\n\"bus_count\":<int>,    # the number of buses in the network data structure\n\"branch_count\":<int>  # the number of branches in the network data structure\n}"
},

{
    "location": "result-data/#Solution-Data-1",
    "page": "Result Data Format",
    "title": "Solution Data",
    "category": "section",
    "text": "The solution object provides detailed information about the solution produced by the run command.  The solution is organized similarly to The Network Data Dictionary with the same nested structure and parameter names, when available.  A network solution most often only includes a small subset of the data included in the network data.For example the data for a bus, data[\"bus\"][\"1\"] is structured as follows,{\n\"bus_i\": 1,\n\"bus_type\": 3,\n\"vm\":1.0,\n\"va\":0.0,\n...\n}A solution specifying a voltage magnitude and angle would for the same case, i.e. result[\"solution\"][\"bus\"][\"1\"], would result in,{\n\"vm\":1.12,\n\"va\":-3.59,\n}A table-like text summary of the solution data can be generated using the standard data summary function as follows,PowerModels.print_summary(result[\"solution\"])Because the data dictionary and the solution dictionary have the same structure PowerModels provides an update_data helper function which can be used to update a data dictionary with the values from a solution as follows,PowerModels.update_data(data, result[\"solution\"])"
},

{
    "location": "math-model/#",
    "page": "Mathematical Model",
    "title": "Mathematical Model",
    "category": "page",
    "text": ""
},

{
    "location": "math-model/#The-PowerModels-Mathematical-Model-1",
    "page": "Mathematical Model",
    "title": "The PowerModels Mathematical Model",
    "category": "section",
    "text": "As PowerModels implements a variety of power network optimization problems, the implementation is the best reference for precise mathematical formulations.  This section provides a complex number based mathematical specification for a prototypical AC Optimal Power Flow problem, to provide an overview of the typical mathematical models in PowerModels."
},

{
    "location": "math-model/#Sets-and-Parameters-1",
    "page": "Mathematical Model",
    "title": "Sets and Parameters",
    "category": "section",
    "text": "PowerModels implements a slightly generalized version of the AC Optimal Power Flow problem from Matpower.  These generalizations make it possible for PowerModels to more accurately capture industrial transmission network datasets.  The core generalizations are,Support for multiple load (S^d_k) and shunt (Y^s_k) components on each bus i\nLine charging that supports a conductance and asymmetrical values (Y^c_ij Y^c_ji)beginalign\n\nmboxsets  nonumber \n N mbox - busesnonumber \n R mbox - reference busesnonumber \n E E^R mbox - branches forward and reverse orientation nonumber \n G G_i mbox - generators and generators at bus i nonumber \n L L_i mbox - loads and loads at bus i nonumber \n S S_i mbox - shunts and shunts at bus i nonumber \n\nmboxdata  nonumber \n S^gl_k S^gu_k  forall k in G nonumber mbox - generator complex power bounds\n c_2k c_1k c_0k  forall k in G nonumber  mbox - generator cost components\n v^l_i v^u_i  forall i in N nonumber mbox - voltage bounds\n S^d_k  forall k in L nonumber mbox - load complex power consumption\n Y^s_k  forall k in S nonumber mbox - bus shunt admittance\n Y_ij Y^c_ij Y^c_ji  forall (ij) in E nonumber mbox - branch pi-section parameters\n T_ij  forall (ij) in E nonumber mbox - branch complex transformation ratio\n s^u_ij   forall (ij) in E nonumber mbox - branch apparent power limit\n i^u_ij   forall (ij) in E nonumber mbox - branch current limit\n theta^Delta l_ij theta^Delta u_ij  forall (ij) in E nonumber mbox - branch voltage angle difference bounds\n\nendalign"
},

{
    "location": "math-model/#AC-Optimal-Power-Flow-1",
    "page": "Mathematical Model",
    "title": "AC Optimal Power Flow",
    "category": "section",
    "text": "A complete mathematical model is as follows,beginalign\n\nmboxvariables    \n S^g_k  forall kin G mbox - generator complex power dispatch labelvar_generation\n V_i  forall iin N labelvar_voltage mbox - bus complex voltage\n S_ij  forall (ij) in E cup E^R  labelvar_complex_power mbox - branch complex power flow\n\nmboxminimize   sum_k in G c_2k (Re(S^g_k))^2 + c_1kRe(S^g_k) + c_0k labeleq_objective\n\nmboxsubject to   nonumber \n angle V_r = 0   forall r in R labeleq_ref_bus\n S^gl_k leq S^g_k leq S^gu_k  forall k in G  labeleq_gen_bounds\n v^l_i leq V_i leq v^u_i  forall i in N labeleq_voltage_bounds\n sum_substackk in G_i S^g_k - sum_substackk in L_i S^d_k - sum_substackk in S_i Y^s_k V_i^2 = sum_substack(ij)in E_i cup E_i^R S_ij  forall iin N labeleq_kcl_shunt \n S_ij = left( Y_ij + Y^c_ijright)^* fracV_i^2T_ij^2 - Y^*_ij fracV_i V^*_jT_ij  forall (ij)in E labeleq_power_from\n S_ji = left( Y_ij + Y^c_ji right)^* V_j^2 - Y^*_ij fracV^*_i V_jT^*_ij  forall (ij)in E labeleq_power_to\n S_ij leq s^u_ij  forall (ij) in E cup E^R labeleq_thermal_limit\n I_ij leq i^u_ij  forall (ij) in E cup E^R labeleq_current_limit\n theta^Delta l_ij leq angle (V_i V^*_j) leq theta^Delta u_ij  forall (ij) in E labeleq_angle_difference\n\nendalignNote that for clarity of this presentation some model variants that PowerModels supports have been omitted (e.g. piecewise linear cost functions and HVDC lines).  Details about these variants is available in the Matpower documentation."
},

{
    "location": "math-model/#Mapping-to-function-names-1",
    "page": "Mathematical Model",
    "title": "Mapping to function names",
    "category": "section",
    "text": "Eq. eqrefvar_generation - variable_generation in variable.jl\nEq. eqrefvar_voltage - variable_voltage in variable.jl\nEq. eqrefvar_complex_power - variable_branch_flow in variable.jl\nEq. eqrefeq_objective - objective_min_fuel_cost in objective.jl\nEq. eqrefeq_ref_bus - constraint_theta_ref in constraint_template.jl\nEq. eqrefeq_gen_bounds - bounds of variable_generation in variable.jl\nEq. eqrefeq_voltage_bounds - bounds of variable_voltage in variable.jl\nEq. eqrefeq_kcl_shunt - constraint_kcl_shunt in constraint_template.jl\nEq. eqrefeq_power_from - constraint_ohms_yt_from in constraint_template.jl\nEq. eqrefeq_power_to - constraint_ohms_yt_to in constraint_template.jl\nEq. eqrefeq_thermal_limit - constraint_thermal_limit_from and constraint_thermal_limit_to in constraint_template.jl\nEq. eqrefeq_current_limit - constraint_current_limit in constraint_template.jl\nEq. eqrefeq_angle_difference - constraint_voltage_angle_difference in constraint_template.jl"
},

{
    "location": "math-model/#AC-Optimal-Power-Flow-for-the-Branch-Flow-Model-1",
    "page": "Mathematical Model",
    "title": "AC Optimal Power Flow for the Branch Flow Model",
    "category": "section",
    "text": "The same assumptions apply as before. The series impedance is Z_ij=(Y_ij)^-1. In comparison  with the BIM, a new variable I^s_ij, representing the current in the direction i to j, through the series part of the pi-section, is introduced. A complete mathematical formulation for a Branch Flow Model is conceived as:beginalign\n\nmboxvariables   nonumber \n S^g_k  forall kin G nonumber \n V_i  forall iin N nonumber \n S_ij  forall (ij) in E cup E^R nonumber \n I^s_ij  forall (ij) in E cup E^R labelvar_branch_current  mbox - branch complex (series) current\n\nmboxminimize   sum_k in G c_2k (Re(S^g_k))^2 + c_1kRe(S^g_k) + c_0k nonumber\n\nmboxsubject to   nonumber \n angle V_r = 0   forall r in R nonumber \n S^gl_k leq S^g_k leq S^gu_k  forall k in G nonumber \n v^l_i leq V_i leq v^u_i  forall i in N nonumber\n sum_substackk in G_i S^g_k - sum_substackk in L_i S^d_k - sum_substackk in S_i Y^s_k V_i^2 = sum_substack(ij)in E_i cup E_i^R S_ij  forall iin N nonumber\n S_ij +  S_ji = left(Y^c_ijright)^* fracV_i^2T_ij^2 + Z_ij I^s_ij^2 +  left(Y^c_jiright)^* V_j^2   forall (ij)in E labeleq_line_losses \n S_ij = S^s_ij + left(Y^c_ijright)^* fracV_i^2T_ij^2   forall (ij)in E labeleq_series_power_flow \n S^s_ij = fracV_iT_ij (I^s_ij)^*   forall (ij)in E labeleq_complex_power_definition \n fracV_iT_ij = V_j + z_ij I^s_ij   forall (ij)in E labeleq_ohms_bfm \n S_ij leq s^u_ij  forall (ij) in E cup E^R nonumber\n I_ij leq i^u_ij  forall (ij) in E cup E^R nonumber\n theta^Delta l_ij leq angle (V_i V^*_j) leq theta^Delta u_ij  forall (ij) in E nonumber\n\nendalignNote that constraints eqrefeq_line_losses - eqrefeq_ohms_bfm replace eqrefeq_power_from - eqrefeq_power_to but the remainder of the problem formulation is identical. Furthermore, the problems have the same feasible set.  "
},

{
    "location": "math-model/#Mapping-to-function-names-2",
    "page": "Mathematical Model",
    "title": "Mapping to function names",
    "category": "section",
    "text": "Eq. eqrefvar_branch_current - variable_branch_current in variable.jl\nEq. eqrefeq_line_losses - constraint_flow_losses in constraint_template.jl\nEq. eqrefeq_series_power_flow - implicit, substituted out before implementation\nEq. eqrefeq_complex_power_definition - constraint_branch_current in constraint_template.jl\nEq. eqrefeq_ohms_bfm - constraint_voltage_magnitude_difference in constraint_template.jl"
},

{
    "location": "storage/#",
    "page": "Storage Model",
    "title": "Storage Model",
    "category": "page",
    "text": ""
},

{
    "location": "storage/#PowerModels\'-Storage-Component-1",
    "page": "Storage Model",
    "title": "PowerModels\' Storage Component",
    "category": "section",
    "text": "In addition to the standard transmission network components (e.g. bus, load, generator, branch, ...) PowerModels also includes a generic storage component, which can be configured to model a variety of storage devices.  This section provides a brief overview of the storage component\'s data and mathematical model."
},

{
    "location": "storage/#Storage-Data-Model-1",
    "page": "Storage Model",
    "title": "Storage Data Model",
    "category": "section",
    "text": "The data for the generic storage model is as follows,{\n  \"index\":<int>,\n  \"storage_bus\":<int>,\n  \"energy\":<float, MWh>,\n  \"energy_rating\":<float, MWh>,\n  \"charge_rating\":<float, MW>,\n  \"discharge_rating\":<float, MW>,\n  \"charge_efficiency\":<float>,\n  \"discharge_efficiency\":<float>,\n  (\"thermal_rating\":<float, MVA>,)\n  (\"current_rating\":<float, MA>,)\n  \"qmin\":<float, MVar>,\n  \"qmax\":<float, MVar>,\n  \"r\":<float, p.u.>,\n  \"x\":<float, p.u.>,\n  \"standby_loss\":<float, MW>,\n  \"status\":<int>,\n}All of these quantities should be positive except for qmin, which can be negative.  The efficiency parameters are unit-less scalars in the range of 1.0 and 0.0.  By default, all of these quantities are used in per unit inside PowerModels.  The units indicated here are only used by PowerModels\' mixed-unit representation and the extended Matpower network format.Note that the optional thermal_rating and current_rating parameters are applied at the point of coupling to the network while the other ratings are internal to the storage device.In addition to these component parameters, PowerModels also requires a global parameter time_elapsed (in hours) to specify how active power is converted into units of energy as the storage device is charged or discharged.PowerModels\' storage components can be added to Matpower data files as follows,% hours\nmpc.time_elapsed = 1.0\n\n%% storage data\n%   storage_bus  energy  energy_rating charge_rating  discharge_rating  charge_efficiency  discharge_efficiency  thermal_rating  qmin  qmax  r  x  standby_loss  status\nmpc.storage = [\n   3   20.0  100.0   50.0  70.0  0.8   0.9   100.0   -50.0   70.0  0.1   0.0   0.0   1;\n   10  30.0  100.0   50.0  70.0  0.9   0.8   100.0   -50.0   70.0  0.1   0.0   0.0   1;\n];Note that this Matpower-based format includes the optional thermal_rating parameter."
},

{
    "location": "storage/#Storage-Mathematical-Model-1",
    "page": "Storage Model",
    "title": "Storage Mathematical Model",
    "category": "section",
    "text": "Given the storage data model and two sequential time points s and t, the storage component\'s mathematical model is given by,beginalign\n\nmboxdata   nonumber \n e^u mbox - energy rating \n sc^u mbox - charge rating \n sd^u mbox - discharge rating \n eta^c mbox - charge efficiency \n eta^d mbox - discharge efficiency \n te mbox - time elapsed \n sl mbox - standing losses \n r mbox - injection resistance \n q^l q^u  mbox - reactive power injection limits \n s^u mbox - thermal injection limit \n i^u mbox - current injection limit \n\nmboxvariables   nonumber \n e_i in (0 e^u) mbox - storage energy at time i \n sc_i in (0 sc^u) mbox - charge amount at time i \n sd_i in (0 sd^u) mbox - discharge amount at time i \n S_i mbox - complex bus power injection at time i \n I_i mbox - complex bus current injection at time i \n\nmboxsubject to   nonumber \n e_t - e_s = te left(eta^c sc_t - fracsd_teta^d right) labeleq_strg_energy \n sc_t cdot sd_t = 0 labeleq_strg_compl \n Re(S_t) + (sd_t - sc_t) = sl + r I_t labeleq_strg_loss \n q^l leq Im(S_t) leq q^u labeleq_strg_q_limit \n S_t leq s^u labeleq_strg_thermal_limit \n I_t leq i^u labeleq_strg_current_limit\nendalign"
},

{
    "location": "utilities/#",
    "page": "Utilities",
    "title": "Utilities",
    "category": "page",
    "text": ""
},

{
    "location": "utilities/#PowerModels-Utility-Functions-1",
    "page": "Utilities",
    "title": "PowerModels Utility Functions",
    "category": "section",
    "text": "This section provides an overview of the some of the utility functions that are implemented as a part of the PowerModels julia package. "
},

{
    "location": "utilities/#Optimization-Based-Bound-Tightening-for-the-AC-Optimal-Power-Flow-Problem-1",
    "page": "Utilities",
    "title": "Optimization-Based Bound-Tightening for the AC Optimal Power Flow Problem",
    "category": "section",
    "text": "To improve the quality of the convex relaxations available in PowerModels and also to obtain tightened bounds on the voltage-magnitude and phase-angle difference variables, an optimization-based bound-tightening algorithm is made available as a function in PowerModels. The implementation of this function can be found in src/util/obbt.jl. The algorithm iteratively tightens the bounds on the voltage magnitude and phase-angle difference variables. The function can be invoked on any convex relaxation which explicitly has these variables. By default, the function uses the QC relaxation for performing bound-tightening. Interested readers are refered to the paper \"Strengthening Convex Relaxations with Bound Tightening for Power Network Optimization\" for an overview of the algorithm. The function can be invoked as follows:data, stats = run_obbt_opf(\"case3.m\", IpoptSolver());\n# data is a dictionary that contains the parsed network data with tightened bounds\n# stats is a dictionary that contains some useful information output by algorithm\nDict{String,Any} with 19 entries:\n  \"initial_relaxation_objective\" => 5817.91\n  \"vm_range_init\"                => 0.6\n  \"final_relaxation_objective\"   => 5901.96\n  \"avg_vm_range_init\"            => 0.2\n  \"final_rel_gap_from_ub\"        => NaN\n  \"run_time\"                     => 0.832232\n  \"model_constructor\"            => PowerModels.GenericPowerModel{...}\n  \"avg_td_range_final\"           => 0.436166\n  \"initial_rel_gap_from_ub\"      => Inf\n  \"sim_parallel_run_time\"        => 1.13342\n  \"upper_bound\"                  => Inf\n  \"vm_range_final\"               => 0.6\n  \"vad_sign_determined\"          => 2\n  \"avg_td_range_init\"            => 1.0472\n  \"avg_vm_range_final\"           => 0.2\n  \"iteration_count\"              => 5\n  \"td_range_init\"                => 3.14159\n  \"td_range_final\"               => 1.3085The optional keyword arguments are self-explantory and can also be found in the function\'s implementation. The keyword arguments with their defaults are as follows:model_constructor = QCWRTriPowerModel,\nmax_iter = 100, \ntime_limit = 3600.0,\nupper_bound = Inf,\nupper_bound_constraint = false, \nrel_gap_tol = Inf,\nmin_bound_width = 1e-2,\nimprovement_tol = 1e-3, \nprecision = 4,\ntermination = :avg,The keyword model_constructor specifies the relaxation to use for performing bound-tightening. Currently, it supports any relaxation that has explicit voltage magnitude and phase-angle difference variables. \nmax_iter is the keyword that limits the number of bound-tightening iterations to perform. \ntime_limit is the limit on the computation time of the bound-tightening algorithm in seconds.\nupper_bound is a keyword that can be used to specify a local feasible solution objective for the AC Optimal Power Flow problem. \nupper_bound_constraint is a boolean option that can be used to add an additional constraint to reduce the search space of each of the bound-tightening solves. This option cannot be set to true without specifying an upper bound. \nrel_gap_tol is a tolerance that is used to terminate the algorithm when the objective value of the relaxation is close to the upper bound specified using the upper_bound keyword. \nmin_bound_width, as the name suggests is the variable domain, beyond which point, bound-tightening is not performed for that variable.\nThe bound-tightening algorithm terminates if the improvement in the average or maximum bound improvement, specified using either the termination = :avg or the termination =:max option, is less than improvement_tol. \nFinally, precision is used to round the tightened bounds to that many decimal digits. "
},

{
    "location": "formulations/#",
    "page": "Network Formulations",
    "title": "Network Formulations",
    "category": "page",
    "text": ""
},

{
    "location": "formulations/#Network-Formulations-1",
    "page": "Network Formulations",
    "title": "Network Formulations",
    "category": "section",
    "text": ""
},

{
    "location": "formulations/#Type-Hierarchy-1",
    "page": "Network Formulations",
    "title": "Type Hierarchy",
    "category": "section",
    "text": "We begin with the top of the hierarchy, where we can distinguish between AC and DC power flow models.AbstractACPForm <: AbstractPowerFormulation\nAbstractDCPForm <: AbstractPowerFormulation\nAbstractWRForm <: AbstractPowerFormulation\nAbstractWForm <: AbstractPowerFormulationFrom there, different forms for ACP and DCP are possible:StandardACPForm <: AbstractACPForm\nAPIACPForm <: AbstractACPForm\n\nDCPlosslessForm <: AbstractDCPForm\n\nSOCWRForm <: AbstractWRForm\nQCWRForm <: AbstractWRForm\n\nSOCBFForm <: AbstractWForm"
},

{
    "location": "formulations/#Power-Models-1",
    "page": "Network Formulations",
    "title": "Power Models",
    "category": "section",
    "text": "Each of these forms can be used as the type parameter for a PowerModel:ACPPowerModel = GenericPowerModel{StandardACPForm}\nAPIACPPowerModel = GenericPowerModel{APIACPForm}\n\nDCPPowerModel = GenericPowerModel{DCPlosslessForm}\n\nSOCWRPowerModel = GenericPowerModel{SOCWRForm}\nQCWRPowerModel = GenericPowerModel{QCWRForm}\n\nSOCBFPowerModel = GenericPowerModel{SOCBFForm}For details on GenericPowerModel, see the section on Power Model."
},

{
    "location": "formulations/#User-Defined-Abstractions-1",
    "page": "Network Formulations",
    "title": "User-Defined Abstractions",
    "category": "section",
    "text": "Consider the class of conic formulations for power flow models. One way of modelling them in this package is through the following type hierarchy:AbstractConicPowerFormulation <: AbstractPowerFormulation\nAbstractWRMForm <: AbstractConicPowerFormulation\n\nSDPWRMForm <: AbstractWRMForm\nSDPWRMPowerModel = GenericPowerModel{SDPWRMForm}The user-defined abstractions do not have to begin from the root AbstractPowerFormulation abstract type, and can begin from an intermediate abstract type. For example, in the following snippet:AbstractDCPLLForm <: AbstractDCPForm\n\nStandardDCPLLForm <: AbstractDCPLLForm\nDCPLLPowerModel = GenericPowerModel{StandardDCPLLForm}"
},

{
    "location": "specifications/#",
    "page": "Problem Specifications",
    "title": "Problem Specifications",
    "category": "page",
    "text": ""
},

{
    "location": "specifications/#Problem-Specifications-1",
    "page": "Problem Specifications",
    "title": "Problem Specifications",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#Optimal-Power-Flow-(OPF)-1",
    "page": "Problem Specifications",
    "title": "Optimal Power Flow (OPF)",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#Objective-1",
    "page": "Problem Specifications",
    "title": "Objective",
    "category": "section",
    "text": "objective_min_fuel_cost(pm)"
},

{
    "location": "specifications/#Variables-1",
    "page": "Problem Specifications",
    "title": "Variables",
    "category": "section",
    "text": "variable_voltage(pm)\nvariable_active_generation(pm)\nvariable_reactive_generation(pm)\nvariable_branch_flow(pm)\nvariable_dcline_flow(pm)"
},

{
    "location": "specifications/#Constraints-1",
    "page": "Problem Specifications",
    "title": "Constraints",
    "category": "section",
    "text": "constraint_theta_ref(pm)\nconstraint_voltage(pm)\nfor (i,bus) in pm.ref[:bus]\n    constraint_kcl_shunt(pm, bus)\nend\nfor (i,branch) in pm.ref[:branch]\n    constraint_ohms_yt_from(pm, branch)\n    constraint_ohms_yt_to(pm, branch)\n\n    constraint_voltage_angle_difference(pm, branch)\n\n    constraint_thermal_limit_from(pm, branch)\n    constraint_thermal_limit_to(pm, branch)\nend\nfor (i,dcline) in pm.ref[:dcline]\n    constraint_dcline(pm, dcline)\nend"
},

{
    "location": "specifications/#Optimal-Power-Flow-(OPF)-using-the-Branch-Flow-Model-1",
    "page": "Problem Specifications",
    "title": "Optimal Power Flow (OPF) using the Branch Flow Model",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#Objective-2",
    "page": "Problem Specifications",
    "title": "Objective",
    "category": "section",
    "text": "objective_min_fuel_cost(pm)"
},

{
    "location": "specifications/#Variables-2",
    "page": "Problem Specifications",
    "title": "Variables",
    "category": "section",
    "text": "variable_voltage(pm)\nvariable_active_generation(pm)\nvariable_reactive_generation(pm)\nvariable_branch_flow(pm)\nvariable_branch_current(pm)\nvariable_dcline_flow(pm)"
},

{
    "location": "specifications/#Constraints-2",
    "page": "Problem Specifications",
    "title": "Constraints",
    "category": "section",
    "text": "constraint_theta_ref(pm)\nconstraint_voltage(pm)\nfor (i,bus) in pm.ref[:bus]\n    constraint_kcl_shunt(pm, bus)\nend\nfor (i,branch) in pm.ref[:branch]\n    constraint_flow_losses(pm, branch)\n    constraint_voltage_magnitude_difference(pm, branch)\n    constraint_branch_current(pm, branch)\n\n    constraint_voltage_angle_difference(pm, branch)\n\n    constraint_thermal_limit_from(pm, branch)\n    constraint_thermal_limit_to(pm, branch)\nend\nfor (i,dcline) in pm.ref[:dcline]\n    constraint_dcline(pm, dcline)\nend"
},

{
    "location": "specifications/#Optimal-Transmission-Switching-(OTS)-1",
    "page": "Problem Specifications",
    "title": "Optimal Transmission Switching (OTS)",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#General-Assumptions-1",
    "page": "Problem Specifications",
    "title": "General Assumptions",
    "category": "section",
    "text": "if the branch status is 0 in the input, it is out of service and forced to 0 in OTS\nthe network will be maintained as one connected component (i.e. at least n-1 edges)"
},

{
    "location": "specifications/#Variables-3",
    "page": "Problem Specifications",
    "title": "Variables",
    "category": "section",
    "text": "variable_branch_indicator(pm)\nvariable_voltage_on_off(pm)\nvariable_active_generation(pm)\nvariable_reactive_generation(pm)\nvariable_branch_flow(pm)\nvariable_dcline_flow(pm)"
},

{
    "location": "specifications/#Objective-3",
    "page": "Problem Specifications",
    "title": "Objective",
    "category": "section",
    "text": "objective_min_fuel_cost(pm)"
},

{
    "location": "specifications/#Constraints-3",
    "page": "Problem Specifications",
    "title": "Constraints",
    "category": "section",
    "text": "constraint_theta_ref(pm)\nconstraint_voltage_on_off(pm)\nfor (i,bus) in pm.ref[:bus]\n    constraint_kcl_shunt(pm, bus)\nend\nfor (i,branch) in pm.ref[:branch]\n    constraint_ohms_yt_from_on_off(pm, branch)\n    constraint_ohms_yt_to_on_off(pm, branch)\n\n    constraint_voltage_angle_difference_on_off(pm, branch)\n\n    constraint_thermal_limit_from_on_off(pm, branch)\n    constraint_thermal_limit_to_on_off(pm, branch)\nend\nfor (i,dcline) in pm.ref[:dcline]\n    constraint_dcline(pm, dcline)\nend"
},

{
    "location": "specifications/#Power-Flow-(PF)-1",
    "page": "Problem Specifications",
    "title": "Power Flow (PF)",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#Assumptions-1",
    "page": "Problem Specifications",
    "title": "Assumptions",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#Variables-4",
    "page": "Problem Specifications",
    "title": "Variables",
    "category": "section",
    "text": "variable_voltage(pm, bounded = false)\nvariable_active_generation(pm, bounded = false)\nvariable_reactive_generation(pm, bounded = false)\nvariable_branch_flow(pm, bounded = false)\nvariable_dcline_flow(pm, bounded = false)"
},

{
    "location": "specifications/#Constraints-4",
    "page": "Problem Specifications",
    "title": "Constraints",
    "category": "section",
    "text": "constraint_theta_ref(pm)\nconstraint_voltage_magnitude_setpoint(pm, pm.ref[:bus][pm.ref[:ref_bus]])\nconstraint_voltage(pm)\n\n\nfor (i,bus) in pm.ref[:bus]\n    constraint_kcl_shunt(pm, bus)\n\n    # PV Bus Constraints\n    if length(pm.ref[:bus_gens][i]) > 0 && i != pm.ref[:ref_bus]\n        # this assumes inactive generators are filtered out of bus_gens\n        @assert bus[\"bus_type\"] == 2\n\n        constraint_voltage_magnitude_setpoint(pm, bus)\n        for j in pm.ref[:bus_gens][i]\n            constraint_active_gen_setpoint(pm, pm.ref[:gen][j])\n        end\n    end\nend\n\nfor (i,branch) in pm.ref[:branch]\n    constraint_ohms_yt_from(pm, branch)\n    constraint_ohms_yt_to(pm, branch)\nend\nfor (i,dcline) in pm.ref[:dcline]\n    constraint_active_dcline_setpoint(pm, dcline)\nend"
},

{
    "location": "specifications/#Power-Flow-(PF)-using-the-Branch-Flow-Model-1",
    "page": "Problem Specifications",
    "title": "Power Flow (PF) using the Branch Flow Model",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#Assumptions-2",
    "page": "Problem Specifications",
    "title": "Assumptions",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#Variables-5",
    "page": "Problem Specifications",
    "title": "Variables",
    "category": "section",
    "text": "variable_voltage(pm, bounded = false)\nvariable_active_generation(pm, bounded = false)\nvariable_reactive_generation(pm, bounded = false)\nvariable_branch_flow(pm, bounded = false)\nconstraint_branch_current(pm, bounded = false)\nvariable_branch_current(pm, bounded = false)"
},

{
    "location": "specifications/#Constraints-5",
    "page": "Problem Specifications",
    "title": "Constraints",
    "category": "section",
    "text": "constraint_theta_ref(pm)\nconstraint_voltage_magnitude_setpoint(pm, pm.ref[:bus][pm.ref[:ref_bus]])\nconstraint_voltage(pm)\n\n\nfor (i,bus) in pm.ref[:bus]\n    constraint_kcl_shunt(pm, bus)\n\n    # PV Bus Constraints\n    if length(pm.ref[:bus_gens][i]) > 0 && i != pm.ref[:ref_bus]\n        # this assumes inactive generators are filtered out of bus_gens\n        @assert bus[\"bus_type\"] == 2\n\n        constraint_voltage_magnitude_setpoint(pm, bus)\n        for j in pm.ref[:bus_gens][i]\n            constraint_active_gen_setpoint(pm, pm.ref[:gen][j])\n        end\n    end\nend\n\nfor (i,branch) in pm.ref[:branch]\n    constraint_flow_losses(pm, branch)\n    constraint_voltage_magnitude_difference(pm, branch)\n    constraint_branch_current(pm, branch)\nend\nfor (i,dcline) in pm.ref[:dcline]\n    constraint_active_dcline_setpoint(pm, dcline)\nend"
},

{
    "location": "specifications/#Transmission-Network-Expansion-Planning-(TNEP)-1",
    "page": "Problem Specifications",
    "title": "Transmission Network Expansion Planning (TNEP)",
    "category": "section",
    "text": ""
},

{
    "location": "specifications/#Objective-4",
    "page": "Problem Specifications",
    "title": "Objective",
    "category": "section",
    "text": "objective_tnep_cost(pm)"
},

{
    "location": "specifications/#Variables-6",
    "page": "Problem Specifications",
    "title": "Variables",
    "category": "section",
    "text": "variable_branch_ne(pm)\nvariable_voltage(pm)\nvariable_voltage_ne(pm)\nvariable_active_generation(pm)\nvariable_reactive_generation(pm)\nvariable_branch_flow(pm)\nvariable_dcline_flow(pm)\nvariable_branch_flow_ne(pm)"
},

{
    "location": "specifications/#Constraints-6",
    "page": "Problem Specifications",
    "title": "Constraints",
    "category": "section",
    "text": "constraint_theta_ref(pm)\nconstraint_voltage(pm)\nconstraint_voltage_ne(pm)\n\nfor (i,bus) in pm.ref[:bus]\n    constraint_kcl_shunt_ne(pm, bus)\nend\n\nfor (i,branch) in pm.ref[:branch]\n    constraint_ohms_yt_from(pm, branch)\n    constraint_ohms_yt_to(pm, branch)\n\n    constraint_voltage_angle_difference(pm, branch)\n\n    constraint_thermal_limit_from(pm, branch)\n    constraint_thermal_limit_to(pm, branch)\nend\n\nfor (i,branch) in pm.ref[:ne_branch]\n    constraint_ohms_yt_from_ne(pm, branch)\n    constraint_ohms_yt_to_ne(pm, branch)\n\n    constraint_voltage_angle_difference_ne(pm, branch)\n\n    constraint_thermal_limit_from_ne(pm, branch)\n    constraint_thermal_limit_to_ne(pm, branch)\nend\nfor (i,dcline) in pm.ref[:dcline]\n    constraint_dcline(pm, dcline)\nend"
},

{
    "location": "model/#",
    "page": "PowerModel",
    "title": "PowerModel",
    "category": "page",
    "text": ""
},

{
    "location": "model/#PowerModels.GenericPowerModel",
    "page": "PowerModel",
    "title": "PowerModels.GenericPowerModel",
    "category": "type",
    "text": "type GenericPowerModel{T<:AbstractPowerFormulation}\n    model::JuMP.Model\n    data::Dict{String,Any}\n    setting::Dict{String,Any}\n    solution::Dict{String,Any}\n    var::Dict{Symbol,Any} # model variable lookup\n    ref::Dict{Symbol,Any} # reference data\n    ext::Dict{Symbol,Any} # user extentions\nend\n\nwhere\n\ndata is the original data, usually from reading in a .json or .m (patpower) file,\nsetting usually looks something like Dict(\"output\" => Dict(\"branch_flows\" => true)), and\nref is a place to store commonly used pre-computed data from of the data dictionary,   primarily for converting data-types, filtering out deactivated components, and storing   system-wide values that need to be computed globally. See build_ref(data) for further details.\n\nMethods on GenericPowerModel for defining variables and adding constraints should\n\nwork with the ref dict, rather than the original data dict,\nadd them to model::JuMP.Model, and\nfollow the conventions for variable and constraint names.\n\n\n\n\n\n"
},

{
    "location": "model/#PowerModels.build_ref",
    "page": "PowerModel",
    "title": "PowerModels.build_ref",
    "category": "function",
    "text": "Returns a dict that stores commonly used pre-computed data from of the data dictionary, primarily for converting data-types, filtering out deactivated components, and storing system-wide values that need to be computed globally.\n\nSome of the common keys include:\n\n:off_angmin and :off_angmax (see calc_theta_delta_bounds(data)),\n:bus – the set {(i, bus) in ref[:bus] : bus[\"bus_type\"] != 4},\n:gen – the set {(i, gen) in ref[:gen] : gen[\"gen_status\"] == 1 && gen[\"gen_bus\"] in keys(ref[:bus])},\n:branch – the set of branches that are active in the network (based on the component status values),\n:arcs_from – the set [(i,b[\"f_bus\"],b[\"t_bus\"]) for (i,b) in ref[:branch]],\n:arcs_to – the set [(i,b[\"t_bus\"],b[\"f_bus\"]) for (i,b) in ref[:branch]],\n:arcs – the set of arcs from both arcs_from and arcs_to,\n:bus_arcs – the mapping Dict(i => [(l,i,j) for (l,i,j) in ref[:arcs]]),\n:buspairs – (see buspair_parameters(ref[:arcs_from], ref[:branch], ref[:bus])),\n:bus_gens – the mapping Dict(i => [gen[\"gen_bus\"] for (i,gen) in ref[:gen]]).\n:bus_loads – the mapping Dict(i => [load[\"load_bus\"] for (i,load) in ref[:load]]).\n:bus_shunts – the mapping Dict(i => [shunt[\"shunt_bus\"] for (i,shunt) in ref[:shunt]]).\n:arcs_from_dc – the set [(i,b[\"f_bus\"],b[\"t_bus\"]) for (i,b) in ref[:dcline]],\n:arcs_to_dc – the set [(i,b[\"t_bus\"],b[\"f_bus\"]) for (i,b) in ref[:dcline]],\n:arcs_dc – the set of arcs from both arcs_from_dc and arcs_to_dc,\n:bus_arcs_dc – the mapping Dict(i => [(l,i,j) for (l,i,j) in ref[:arcs_dc]]), and\n:buspairs_dc – (see buspair_parameters(ref[:arcs_from_dc], ref[:dcline], ref[:bus])),\n\nIf :ne_branch exists, then the following keys are also available with similar semantics:\n\n:ne_branch, :ne_arcs_from, :ne_arcs_to, :ne_arcs, :ne_bus_arcs, :ne_buspairs.\n\n\n\n\n\n"
},

{
    "location": "model/#PowerModels.buspair_parameters",
    "page": "PowerModel",
    "title": "PowerModels.buspair_parameters",
    "category": "function",
    "text": "compute bus pair level structures\n\n\n\n\n\n"
},

{
    "location": "model/#Power-Model-1",
    "page": "PowerModel",
    "title": "Power Model",
    "category": "section",
    "text": "CurrentModule = PowerModelsAll methods for constructing powermodels should be defined on the following type:GenericPowerModelwhich utilizes the following (internal) functions:build_ref\nbuspair_parameters"
},

{
    "location": "objective/#",
    "page": "Objective",
    "title": "Objective",
    "category": "page",
    "text": ""
},

{
    "location": "objective/#PowerModels._objective_min_gen_polynomial_fuel_cost_linquad-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels._objective_min_gen_polynomial_fuel_cost_linquad",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels._objective_min_gen_polynomial_fuel_cost_nl-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels._objective_min_gen_polynomial_fuel_cost_nl",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels._objective_min_polynomial_fuel_cost_linquad-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels._objective_min_polynomial_fuel_cost_linquad",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels._objective_min_polynomial_fuel_cost_linquad-Union{Tuple{GenericPowerModel{T}}, Tuple{T}} where T<:Union{AbstractBFConicForm, AbstractConicPowerFormulation}",
    "page": "Objective",
    "title": "PowerModels._objective_min_polynomial_fuel_cost_linquad",
    "category": "method",
    "text": "Adds lifted variables to turn a quadatic objective into a linear one; needed for conic solvers that only support linear objectives\n\n\n\n\n\n"
},

{
    "location": "objective/#PowerModels._objective_min_polynomial_fuel_cost_nl-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels._objective_min_polynomial_fuel_cost_nl",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels.check_cost_models-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels.check_cost_models",
    "category": "method",
    "text": "Checks that all cost models are present and of the same type\n\n\n\n\n\n"
},

{
    "location": "objective/#PowerModels.get_lines-Tuple{Any}",
    "page": "Objective",
    "title": "PowerModels.get_lines",
    "category": "method",
    "text": "compute lines in m and b from from pwl cost models data is a list of components\n\n\n\n\n\n"
},

{
    "location": "objective/#PowerModels.objective_min_fuel_cost-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels.objective_min_fuel_cost",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels.objective_min_gen_fuel_cost-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels.objective_min_gen_fuel_cost",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels.objective_min_gen_polynomial_fuel_cost-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels.objective_min_gen_polynomial_fuel_cost",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels.objective_min_gen_pwl_fuel_cost-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels.objective_min_gen_pwl_fuel_cost",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels.objective_min_polynomial_fuel_cost-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels.objective_min_polynomial_fuel_cost",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels.objective_min_pwl_fuel_cost-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels.objective_min_pwl_fuel_cost",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "objective/#PowerModels.objective_tnep_cost-Tuple{GenericPowerModel}",
    "page": "Objective",
    "title": "PowerModels.objective_tnep_cost",
    "category": "method",
    "text": "Cost of building branches\n\n\n\n\n\n"
},

{
    "location": "objective/#PowerModels.slope_intercepts-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:Real",
    "page": "Objective",
    "title": "PowerModels.slope_intercepts",
    "category": "method",
    "text": "compute m and b from points pwl points\n\n\n\n\n\n"
},

{
    "location": "objective/#Objective-1",
    "page": "Objective",
    "title": "Objective",
    "category": "section",
    "text": "Modules = [PowerModels]\nPages   = [\"core/objective.jl\"]\nOrder   = [:function]\nPrivate  = true"
},

{
    "location": "variables/#",
    "page": "Variables",
    "title": "Variables",
    "category": "page",
    "text": ""
},

{
    "location": "variables/#PowerModels.variable_active_branch_flow-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_active_branch_flow",
    "category": "method",
    "text": "variable: p[l,i,j] for (l,i,j) in arcs\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_active_branch_flow_ne-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_active_branch_flow_ne",
    "category": "method",
    "text": "variable: -ne_branch[l][\"rate_a\"] <= p_ne[l,i,j] <= ne_branch[l][\"rate_a\"] for (l,i,j) in ne_arcs\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_active_dcline_flow-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_active_dcline_flow",
    "category": "method",
    "text": "variable: p_dc[l,i,j] for (l,i,j) in arcs_dc\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_active_generation-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_active_generation",
    "category": "method",
    "text": "variable: pg[j] for j in gen\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_active_storage-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_active_storage",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_branch_flow-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_branch_flow",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_branch_flow_ne-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_branch_flow_ne",
    "category": "method",
    "text": "generates variables for both active and reactive branch_flow_ne\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_branch_indicator-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_branch_indicator",
    "category": "method",
    "text": "variable: 0 <= branch_z[l] <= 1 for l in branches\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_branch_ne-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_branch_ne",
    "category": "method",
    "text": "variable: 0 <= branch_ne[l] <= 1 for l in branches\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_cosine-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_cosine",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_generation-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_generation",
    "category": "method",
    "text": "generates variables for both active and reactive generation\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_reactive_branch_flow-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_reactive_branch_flow",
    "category": "method",
    "text": "variable: q[l,i,j] for (l,i,j) in arcs\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_reactive_branch_flow_ne-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_reactive_branch_flow_ne",
    "category": "method",
    "text": "variable: -ne_branch[l][\"rate_a\"] <= q_ne[l,i,j] <= ne_branch[l][\"rate_a\"] for (l,i,j) in ne_arcs\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_reactive_dcline_flow-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_reactive_dcline_flow",
    "category": "method",
    "text": "variable: q_dc[l,i,j] for (l,i,j) in arcs_dc\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_reactive_generation-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_reactive_generation",
    "category": "method",
    "text": "variable: qq[j] for j in gen\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_reactive_storage-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_reactive_storage",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_sine-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_sine",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_storage-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_storage",
    "category": "method",
    "text": "variables for modeling storage units, includes grid injection and internal variables\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_storage_charge-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_storage_charge",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_storage_discharge-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_storage_discharge",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_storage_energy-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_storage_energy",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_angle-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_angle",
    "category": "method",
    "text": "variable: t[i] for i in buses\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_imaginary-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_imaginary",
    "category": "method",
    "text": "real part of the voltage variable i in buses\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_magnitude-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_magnitude",
    "category": "method",
    "text": "variable: v[i] for i in buses\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_magnitude_from_on_off-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_magnitude_from_on_off",
    "category": "method",
    "text": "variable: 0 <= vm_fr[l] <= buses[branches[l][\"f_bus\"]][\"vmax\"] for l in branches\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_magnitude_sqr-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_magnitude_sqr",
    "category": "method",
    "text": "variable: w[i] >= 0 for i in buses\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_magnitude_sqr_from_on_off-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_magnitude_sqr_from_on_off",
    "category": "method",
    "text": "variable: 0 <= w_fr[l] <= buses[branches[l][\"f_bus\"]][\"vmax\"]^2 for l in branches\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_magnitude_sqr_to_on_off-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_magnitude_sqr_to_on_off",
    "category": "method",
    "text": "variable: 0 <= w_to[l] <= buses[branches[l][\"t_bus\"]][\"vmax\"]^2 for l in branches\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_magnitude_to_on_off-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_magnitude_to_on_off",
    "category": "method",
    "text": "variable: 0 <= vm_to[l] <= buses[branches[l][\"t_bus\"]][\"vmax\"] for l in branches\n\n\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_product-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_product",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_product_on_off-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_product_on_off",
    "category": "method",
    "text": "\n\n\n\n"
},

{
    "location": "variables/#PowerModels.variable_voltage_real-Tuple{GenericPowerModel}",
    "page": "Variables",
    "title": "PowerModels.variable_voltage_real",
    "category": "method",
    "text": "real part of the voltage variable i in buses\n\n\n\n\n\n"
},

{
    "location": "variables/#Variables-1",
    "page": "Variables",
    "title": "Variables",
    "category": "section",
    "text": "We provide the following methods to provide a compositional approach for defining common variables used in power flow models. These methods should always be defined over \"GenericPowerModel\".Modules = [PowerModels]\nPages   = [\"core/variable.jl\"]\nOrder   = [:type, :function]\nPrivate  = true"
},

{
    "location": "constraints/#",
    "page": "Constraints",
    "title": "Constraints",
    "category": "page",
    "text": ""
},

{
    "location": "constraints/#Constraints-1",
    "page": "Constraints",
    "title": "Constraints",
    "category": "section",
    "text": "CurrentModule = PowerModels"
},

{
    "location": "constraints/#Constraint-Templates-1",
    "page": "Constraints",
    "title": "Constraint Templates",
    "category": "section",
    "text": "Constraint templates help simplify data wrangling across multiple Power Flow formulations by providing an abstraction layer between the network data and network constraint definitions. The constraint template\'s job is to extract the required parameters from a given network data structure and pass the data as named arguments to the Power Flow formulations.These templates should be defined over GenericPowerModel and should not refer to model variables. For more details, see the files: core/constraint_template.jl and core/constraint.jl."
},

{
    "location": "constraints/#PowerModels.constraint_active_gen_setpoint",
    "page": "Constraints",
    "title": "PowerModels.constraint_active_gen_setpoint",
    "category": "function",
    "text": "\n\n\n\npg[i] == pg\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_reactive_gen_setpoint",
    "page": "Constraints",
    "title": "PowerModels.constraint_reactive_gen_setpoint",
    "category": "function",
    "text": "\n\n\n\nqq[i] == qq\n\n\n\n\n\ndo nothing, apo models do not have reactive variables\n\n\n\n\n\n"
},

{
    "location": "constraints/#Generator-Constraints-1",
    "page": "Constraints",
    "title": "Generator Constraints",
    "category": "section",
    "text": "constraint_active_gen_setpoint\nconstraint_reactive_gen_setpoint"
},

{
    "location": "constraints/#Bus-Constraints-1",
    "page": "Constraints",
    "title": "Bus Constraints",
    "category": "section",
    "text": ""
},

{
    "location": "constraints/#PowerModels.constraint_theta_ref",
    "page": "Constraints",
    "title": "PowerModels.constraint_theta_ref",
    "category": "function",
    "text": "\n\n\n\nreference bus angle constraint\n\n\n\n\n\nt[ref_bus] == 0\n\n\n\n\n\nnothing to do, no voltage angle variables\n\n\n\n\n\nt[ref_bus] == 0\n\n\n\n\n\nt[ref_bus] == 0\n\n\n\n\n\nDo nothing, no way to represent this in these variables\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_voltage_magnitude_setpoint",
    "page": "Constraints",
    "title": "PowerModels.constraint_voltage_magnitude_setpoint",
    "category": "function",
    "text": "\n\n\n\nv[i] == vm\n\n\n\n\n\nv[i] == vm\n\n\n\n\n\ndo nothing, this model does not have voltage variables\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "constraints/#Setpoint-Constraints-1",
    "page": "Constraints",
    "title": "Setpoint Constraints",
    "category": "section",
    "text": "constraint_theta_ref\nconstraint_voltage_magnitude_setpoint"
},

{
    "location": "constraints/#PowerModels.constraint_kcl_shunt",
    "page": "Constraints",
    "title": "PowerModels.constraint_kcl_shunt",
    "category": "function",
    "text": "\n\n\n\nsum(p[a] for a in bus_arcs) + sum(p_dc[a_dc] for a_dc in bus_arcs_dc) == sum(pg[g] for g in bus_gens) - sum(pd[d] for d in bus_loads) - sum(gs[s] for s in bus_shunts)*v^2\nsum(q[a] for a in bus_arcs) + sum(q_dc[a_dc] for a_dc in bus_arcs_dc) == sum(qg[g] for g in bus_gens) - sum(qd[d] for d in bus_loads) + sum(bs[s] for s in bus_shunts)*v^2\n\n\n\n\n\n\n\n\n\n\n\n\n\nsum(p[a] for a in bus_arcs) + sum(p_dc[a_dc] for a_dc in bus_arcs_dc) == sum(pg[g] for g in bus_gens) - sum(pd[d] for d in bus_loads) - sum(gs[s] for d in bus_shunts)*w[i]\nsum(q[a] for a in bus_arcs) + sum(q_dc[a_dc] for a_dc in bus_arcs_dc) == sum(qg[g] for g in bus_gens) - sum(qd[d] for d in bus_loads) + sum(bs[s] for d in bus_shunts)*w[i]\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_kcl_shunt_ne",
    "page": "Constraints",
    "title": "PowerModels.constraint_kcl_shunt_ne",
    "category": "function",
    "text": "\n\n\n\nsum(p[a] for a in bus_arcs) + sum(p_dc[a_dc] for a_dc in bus_arcs_dc) + sum(p_ne[a] for a in bus_arcs_ne) == sum(pg[g] for g in bus_gens) - sum(pd[d] for d in bus_loads) - sum(gs[s] for s in bus_shunts)*vm^2\nsum(q[a] for a in bus_arcs) + sum(p_dc[a_dc] for a_dc in bus_arcs_dc) + sum(q_ne[a] for a in bus_arcs_ne) == sum(qg[g] for g in bus_gens) - sum(qd[d] for d in bus_loads) + sum(bs[s] for s in bus_shunts)*vm^2\n\n\n\n\n\n\n\n\n\nsum(p[a] for a in bus_arcs) + sum(p_ne[a] for a in bus_arcs_ne) + sum(p_dc[a_dc] for a_dc in bus_arcs_dc) == sum(pg[g] for g in bus_gens) - sum(pd[d] for d in bus_loads) - sum(gs[s] for s in bus_shunts)*w[i]\nsum(q[a] for a in bus_arcs) + sum(q_ne[a] for a in bus_arcs_ne) + sum(q_dc[a_dc] for a_dc in bus_arcs_dc) == sum(qg[g] for g in bus_gens) - sum(qd[d] for d in bus_loads) + sum(bs[s] for s in bus_shunts)*w[i]\n\n\n\n\n\n"
},

{
    "location": "constraints/#KCL-Constraints-1",
    "page": "Constraints",
    "title": "KCL Constraints",
    "category": "section",
    "text": "constraint_kcl_shunt\nconstraint_kcl_shunt_ne"
},

{
    "location": "constraints/#Branch-Constraints-1",
    "page": "Constraints",
    "title": "Branch Constraints",
    "category": "section",
    "text": ""
},

{
    "location": "constraints/#PowerModels.constraint_ohms_yt_from",
    "page": "Constraints",
    "title": "PowerModels.constraint_ohms_yt_from",
    "category": "function",
    "text": "\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\np[f_idx] ==  (g+g_fr)/tm*v[f_bus]^2 + (-g*tr+b*ti)/tm*(v[f_bus]*v[t_bus]*cos(t[f_bus]-t[t_bus])) + (-b*tr-g*ti)/tm*(v[f_bus]*v[t_bus]*sin(t[f_bus]-t[t_bus]))\nq[f_idx] == -(b+b_fr)/tm*v[f_bus]^2 - (-b*tr-g*ti)/tm*(v[f_bus]*v[t_bus]*cos(t[f_bus]-t[t_bus])) + (-g*tr+b*ti)/tm*(v[f_bus]*v[t_bus]*sin(t[f_bus]-t[t_bus]))\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\np[f_idx] == -b*(t[f_bus] - t[t_bus])\n\n\n\n\n\nnothing to do, no voltage angle variables\n\n\n\n\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_ohms_yt_to",
    "page": "Constraints",
    "title": "PowerModels.constraint_ohms_yt_to",
    "category": "function",
    "text": "\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\np[t_idx] ==  (g+g_to)*v[t_bus]^2 + (-g*tr-b*ti)/tm*(v[t_bus]*v[f_bus]*cos(t[t_bus]-t[f_bus])) + (-b*tr+g*ti)/tm*(v[t_bus]*v[f_bus]*sin(t[t_bus]-t[f_bus]))\nq[t_idx] == -(b+b_to)*v[t_bus]^2 - (-b*tr+g*ti)/tm*(v[t_bus]*v[f_bus]*cos(t[f_bus]-t[t_bus])) + (-g*tr-b*ti)/tm*(v[t_bus]*v[f_bus]*sin(t[t_bus]-t[f_bus]))\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\n\n\n\n\nnothing to do, this model is symetric\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\n\n\n\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_ohms_y_from",
    "page": "Constraints",
    "title": "PowerModels.constraint_ohms_y_from",
    "category": "function",
    "text": "\n\n\n\nCreates Ohms constraints for AC models (y post fix indicates that Y values are in rectangular form)\n\np[f_idx] ==  (g+g_fr)*(v[f_bus]/tr)^2 + -g*v[f_bus]/tr*v[t_bus]*cos(t[f_bus]-t[t_bus]-as) + -b*v[f_bus]/tr*v[t_bus]*sin(t[f_bus]-t[t_bus]-as)\nq[f_idx] == -(b+b_fr)*(v[f_bus]/tr)^2 + b*v[f_bus]/tr*v[t_bus]*cos(t[f_bus]-t[t_bus]-as) + -g*v[f_bus]/tr*v[t_bus]*sin(t[f_bus]-t[t_bus]-as)\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_ohms_y_to",
    "page": "Constraints",
    "title": "PowerModels.constraint_ohms_y_to",
    "category": "function",
    "text": "\n\n\n\nCreates Ohms constraints for AC models (y post fix indicates that Y values are in rectangular form)\n\np[t_idx] == (g+g_to)*v[t_bus]^2 + -g*v[t_bus]*v[f_bus]/tr*cos(t[t_bus]-t[f_bus]+as) + -b*v[t_bus]*v[f_bus]/tr*sin(t[t_bus]-t[f_bus]+as)\nq_to == -(b+b_to)*v[t_bus]^2 + b*v[t_bus]*v[f_bus]/tr*cos(t[f_bus]-t[t_bus]+as) + -g*v[t_bus]*v[f_bus]/tr*sin(t[t_bus]-t[f_bus]+as)\n\n\n\n\n\n"
},

{
    "location": "constraints/#Ohm\'s-Law-Constraints-1",
    "page": "Constraints",
    "title": "Ohm\'s Law Constraints",
    "category": "section",
    "text": "constraint_ohms_yt_from\nconstraint_ohms_yt_to\nconstraint_ohms_y_from\nconstraint_ohms_y_to"
},

{
    "location": "constraints/#PowerModels.constraint_ohms_yt_from_on_off",
    "page": "Constraints",
    "title": "PowerModels.constraint_ohms_yt_from_on_off",
    "category": "function",
    "text": "\n\n\n\np[f_idx] == z*(g/tm*v[f_bus]^2 + (-g*tr+b*ti)/tm*(v[f_bus]*v[t_bus]*cos(t[f_bus]-t[t_bus])) + (-b*tr-g*ti)/tm*(v[f_bus]*v[t_bus]*sin(t[f_bus]-t[t_bus])))\nq[f_idx] == z*(-(b+c/2)/tm*v[f_bus]^2 - (-b*tr-g*ti)/tm*(v[f_bus]*v[t_bus]*cos(t[f_bus]-t[t_bus])) + (-g*tr+b*ti)/tm*(v[f_bus]*v[t_bus]*sin(t[f_bus]-t[t_bus])))\n\n\n\n\n\n-b*(t[f_bus] - t[t_bus] + vad_min*(1-branch_z[i])) <= p[f_idx] <= -b*(t[f_bus] - t[t_bus] + vad_max*(1-branch_z[i]))\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\np[f_idx] ==        g/tm*w_fr[i] + (-g*tr+b*ti)/tm*(wr[i]) + (-b*tr-g*ti)/tm*(wi[i])\nq[f_idx] == -(b+c/2)/tm*w_fr[i] - (-b*tr-g*ti)/tm*(wr[i]) + (-g*tr+b*ti)/tm*(wi[i])\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_ohms_yt_to_on_off",
    "page": "Constraints",
    "title": "PowerModels.constraint_ohms_yt_to_on_off",
    "category": "function",
    "text": "\n\n\n\np[t_idx] == z*(g*v[t_bus]^2 + (-g*tr-b*ti)/tm*(v[t_bus]*v[f_bus]*cos(t[t_bus]-t[f_bus])) + (-b*tr+g*ti)/tm*(v[t_bus]*v[f_bus]*sin(t[t_bus]-t[f_bus])))\nq[t_idx] == z*(-(b+c/2)*v[t_bus]^2 - (-b*tr+g*ti)/tm*(v[t_bus]*v[f_bus]*cos(t[f_bus]-t[t_bus])) + (-g*tr-b*ti)/tm*(v[t_bus]*v[f_bus]*sin(t[t_bus]-t[f_bus])))\n\n\n\n\n\nnothing to do, this model is symetric\n\n\n\n\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\np[t_idx] ==        g*w_to[i] + (-g*tr-b*ti)/tm*(wr[i]) + (-b*tr+g*ti)/tm*(-wi[i])\nq[t_idx] == -(b+c/2)*w_to[i] - (-b*tr+g*ti)/tm*(wr[i]) + (-g*tr-b*ti)/tm*(-wi[i])\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_ohms_yt_from_ne",
    "page": "Constraints",
    "title": "PowerModels.constraint_ohms_yt_from_ne",
    "category": "function",
    "text": "\n\n\n\np_ne[f_idx] == z*(g/tm*v[f_bus]^2 + (-g*tr+b*ti)/tm*(v[f_bus]*v[t_bus]*cos(t[f_bus]-t[t_bus])) + (-b*tr-g*ti)/tm*(v[f_bus]*v[t_bus]*sin(t[f_bus]-t[t_bus])))\nq_ne[f_idx] == z*(-(b+c/2)/tm*v[f_bus]^2 - (-b*tr-g*ti)/tm*(v[f_bus]*v[t_bus]*cos(t[f_bus]-t[t_bus])) + (-g*tr+b*ti)/tm*(v[f_bus]*v[t_bus]*sin(t[f_bus]-t[t_bus])))\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\np[f_idx] == g/tm*w_fr_ne[i] + (-g*tr+b*ti)/tm*(wr_ne[i]) + (-b*tr-g*ti)/tm*(wi_ne[i])\nq[f_idx] == -(b+c/2)/tm*w_fr_ne[i] - (-b*tr-g*ti)/tm*(wr_ne[i]) + (-g*tr+b*ti)/tm*(wi_ne[i])\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_ohms_yt_to_ne",
    "page": "Constraints",
    "title": "PowerModels.constraint_ohms_yt_to_ne",
    "category": "function",
    "text": "\n\n\n\np_ne[t_idx] == z*(g*v[t_bus]^2 + (-g*tr-b*ti)/tm*(v[t_bus]*v[f_bus]*cos(t[t_bus]-t[f_bus])) + (-b*tr+g*ti)/tm*(v[t_bus]*v[f_bus]*sin(t[t_bus]-t[f_bus])))\nq_ne[t_idx] == z*(-(b+c/2)*v[t_bus]^2 - (-b*tr+g*ti)/tm*(v[t_bus]*v[f_bus]*cos(t[f_bus]-t[t_bus])) + (-g*tr-b*ti)/tm*(v[t_bus]*v[f_bus]*sin(t[t_bus]-t[f_bus])))\n\n\n\n\n\nnothing to do, this model is symetric\n\n\n\n\n\n\n\n\n\nCreates Ohms constraints (yt post fix indicates that Y and T values are in rectangular form)\n\np[t_idx] == g*w_to_ne[i] + (-g*tr-b*ti)/tm*(wr_ne[i]) + (-b*tr+g*ti)/tm*(-wi_ne[i])\nq[t_idx] == -(b+c/2)*w_to_ne[i] - (-b*tr+g*ti)/tm*(wr_ne[i]) + (-g*tr-b*ti)/tm*(-wi_ne[i])\n\n\n\n\n\n"
},

{
    "location": "constraints/#On/Off-Ohm\'s-Law-Constraints-1",
    "page": "Constraints",
    "title": "On/Off Ohm\'s Law Constraints",
    "category": "section",
    "text": "constraint_ohms_yt_from_on_off\nconstraint_ohms_yt_to_on_off\nconstraint_ohms_yt_from_ne\nconstraint_ohms_yt_to_ne"
},

{
    "location": "constraints/#PowerModels.constraint_power_magnitude_sqr",
    "page": "Constraints",
    "title": "PowerModels.constraint_power_magnitude_sqr",
    "category": "function",
    "text": "\n\n\n\np[f_idx]^2 + q[f_idx]^2 <= w[f_bus]/tm*cm[f_bus,t_bus]\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_power_magnitude_link",
    "page": "Constraints",
    "title": "PowerModels.constraint_power_magnitude_link",
    "category": "function",
    "text": "\n\n\n\ncm[f_bus,t_bus] == (g^2 + b^2)*(w[f_bus]/tm + w[t_bus] - 2*(tr*wr[f_bus,t_bus] + ti*wi[f_bus,t_bus])/tm) - c*q[f_idx] - ((c/2)/tm)^2*w[f_bus]\n\n\n\n\n\n"
},

{
    "location": "constraints/#Current-1",
    "page": "Constraints",
    "title": "Current",
    "category": "section",
    "text": "constraint_power_magnitude_sqr\nconstraint_power_magnitude_link"
},

{
    "location": "constraints/#PowerModels.constraint_thermal_limit_from",
    "page": "Constraints",
    "title": "PowerModels.constraint_thermal_limit_from",
    "category": "function",
    "text": "constraint_thermal_limit_from(pm::GenericPowerModel, n::Int, i::Int)\n\nAdds the (upper and lower) thermal limit constraints for the desired branch to the PowerModel.\n\n\n\n\n\np[f_idx]^2 + q[f_idx]^2 <= rate_a^2\n\n\n\n\n\nnorm([p[f_idx]; q[f_idx]]) <= rate_a\n\n\n\n\n\n-rate_a <= p[f_idx] <= rate_a\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_thermal_limit_to",
    "page": "Constraints",
    "title": "PowerModels.constraint_thermal_limit_to",
    "category": "function",
    "text": "\n\n\n\np[t_idx]^2 + q[t_idx]^2 <= rate_a^2\n\n\n\n\n\nnorm([p[t_idx]; q[t_idx]]) <= rate_a\n\n\n\n\n\n\n\n\n\nnothing to do, this model is symetric\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_thermal_limit_from_on_off",
    "page": "Constraints",
    "title": "PowerModels.constraint_thermal_limit_from_on_off",
    "category": "function",
    "text": "\n\n\n\np[f_idx]^2 + q[f_idx]^2 <= (rate_a * branch_z[i])^2\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_thermal_limit_to_on_off",
    "page": "Constraints",
    "title": "PowerModels.constraint_thermal_limit_to_on_off",
    "category": "function",
    "text": "\n\n\n\np[t_idx]^2 + q[t_idx]^2 <= (rate_a * branch_z[i])^2\n\n\n\n\n\n\n\n\n\nnothing to do, this model is symetric\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_thermal_limit_from_ne",
    "page": "Constraints",
    "title": "PowerModels.constraint_thermal_limit_from_ne",
    "category": "function",
    "text": "\n\n\n\np_ne[f_idx]^2 + q_ne[f_idx]^2 <= (rate_a * branch_ne[i])^2\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_thermal_limit_to_ne",
    "page": "Constraints",
    "title": "PowerModels.constraint_thermal_limit_to_ne",
    "category": "function",
    "text": "\n\n\n\np_ne[t_idx]^2 + q_ne[t_idx]^2 <= (rate_a * branch_ne[i])^2\n\n\n\n\n\n\n\n\n\nnothing to do, this model is symetric\n\n\n\n\n\n"
},

{
    "location": "constraints/#Thermal-Limit-Constraints-1",
    "page": "Constraints",
    "title": "Thermal Limit Constraints",
    "category": "section",
    "text": "constraint_thermal_limit_from\nconstraint_thermal_limit_to\nconstraint_thermal_limit_from_on_off\nconstraint_thermal_limit_to_on_off\nconstraint_thermal_limit_from_ne\nconstraint_thermal_limit_to_ne"
},

{
    "location": "constraints/#PowerModels.constraint_voltage_angle_difference",
    "page": "Constraints",
    "title": "PowerModels.constraint_voltage_angle_difference",
    "category": "function",
    "text": "\n\n\n\nbranch voltage angle difference bounds\n\n\n\n\n\nt[f_bus] - t[t_bus] <= angmax\nt[f_bus] - t[t_bus] >= angmin\n\n\n\n\n\nnothing to do, no voltage angle variables\n\n\n\n\n\n\n\n\n\nt[f_bus] - t[t_bus] <= angmax\nt[f_bus] - t[t_bus] >= angmin\n\n\n\n\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_voltage_angle_difference_on_off",
    "page": "Constraints",
    "title": "PowerModels.constraint_voltage_angle_difference_on_off",
    "category": "function",
    "text": "\n\n\n\nangmin <= branch_z[i]*(t[f_bus] - t[t_bus]) <= angmax\n\n\n\n\n\nangmin*branch_z[i] + vad_min*(1-branch_z[i]) <= t[f_bus] - t[t_bus] <= angmax*branch_z[i] + vad_max*(1-branch_z[i])\n\n\n\n\n\nangmin*wr[i] <= wi[i] <= angmax*wr[i]\n\n\n\n\n\n"
},

{
    "location": "constraints/#PowerModels.constraint_voltage_angle_difference_ne",
    "page": "Constraints",
    "title": "PowerModels.constraint_voltage_angle_difference_ne",
    "category": "function",
    "text": "\n\n\n\nangmin <= branch_ne[i]*(t[f_bus] - t[t_bus]) <= angmax\n\n\n\n\n\nangmin*branch_ne[i] + vad_min*(1-branch_ne[i]) <= t[f_bus] - t[t_bus] <= angmax*branch_ne[i] + vad_max*(1-branch_ne[i])\n\n\n\n\n\nangmin*wr_ne[i] <= wi_ne[i] <= angmax*wr_ne[i]\n\n\n\n\n\n"
},

{
    "location": "constraints/#Phase-Angle-Difference-Constraints-1",
    "page": "Constraints",
    "title": "Phase Angle Difference Constraints",
    "category": "section",
    "text": "constraint_voltage_angle_difference\nconstraint_voltage_angle_difference_on_off\nconstraint_voltage_angle_difference_ne"
},

{
    "location": "constraints/#PowerModels.constraint_loss_lb",
    "page": "Constraints",
    "title": "PowerModels.constraint_loss_lb",
    "category": "function",
    "text": "\n\n\n\np[f_idx] + p[t_idx] >= 0\nq[f_idx] + q[t_idx] >= -c/2*(v[f_bus]^2/tr^2 + v[t_bus]^2)\n\n\n\n\n\n"
},

{
    "location": "constraints/#Loss-Constraints-1",
    "page": "Constraints",
    "title": "Loss Constraints",
    "category": "section",
    "text": "constraint_loss_lb"
},

{
    "location": "constraints/#DC-Line-Constraints-1",
    "page": "Constraints",
    "title": "DC Line Constraints",
    "category": "section",
    "text": ""
},

{
    "location": "constraints/#PowerModels.constraint_dcline",
    "page": "Constraints",
    "title": "PowerModels.constraint_dcline",
    "category": "function",
    "text": "\n\n\n\nCreates Line Flow constraint for DC Lines (Matpower Formulation)\n\np_fr + p_to == loss0 + p_fr * loss1\n\n\n\n\n\n"
},

{
    "location": "constraints/#Network-Flow-Constraints-1",
    "page": "Constraints",
    "title": "Network Flow Constraints",
    "category": "section",
    "text": "constraint_dcline"
},

{
    "location": "constraints/#Commonly-Used-Constraints-1",
    "page": "Constraints",
    "title": "Commonly Used Constraints",
    "category": "section",
    "text": "The following methods generally assume that the model contains p and q values for branches line flows and bus flow conservation."
},

{
    "location": "constraints/#Generic-thermal-limit-constraint-1",
    "page": "Constraints",
    "title": "Generic thermal limit constraint",
    "category": "section",
    "text": "constraint_thermal_limit_from(pm::GenericPowerModel, f_idx, rate_a)\nconstraint_thermal_limit_to(pm::GenericPowerModel, t_idx, rate_a)"
},

{
    "location": "constraints/#Generic-on/off-thermal-limit-constraint-1",
    "page": "Constraints",
    "title": "Generic on/off thermal limit constraint",
    "category": "section",
    "text": "constraint_thermal_limit_from_on_off(pm::GenericPowerModel, i, f_idx, rate_a)\nconstraint_thermal_limit_to_on_off(pm::GenericPowerModel, i, t_idx, rate_a)\nconstraint_thermal_limit_from_ne(pm::GenericPowerModel, i, f_idx, rate_a)\nconstraint_thermal_limit_to_ne(pm::GenericPowerModel, i, t_idx, rate_a)\nconstraint_active_gen_setpoint(pm::GenericPowerModel, i, pg)\nconstraint_reactive_gen_setpoint(pm::GenericPowerModel, i, qg)"
},

{
    "location": "relaxations/#",
    "page": "Relaxation Schemes",
    "title": "Relaxation Schemes",
    "category": "page",
    "text": ""
},

{
    "location": "relaxations/#PowerModels.cut_complex_product_and_angle_difference-NTuple{7,Any}",
    "page": "Relaxation Schemes",
    "title": "PowerModels.cut_complex_product_and_angle_difference",
    "category": "method",
    "text": "In the literature this constraints are called the Lifted Nonlinear Cuts (LNCs)\n\n\n\n\n\n"
},

{
    "location": "relaxations/#PowerModels.relaxation_cos-Tuple{Any,Any,Any}",
    "page": "Relaxation Schemes",
    "title": "PowerModels.relaxation_cos",
    "category": "method",
    "text": "general relaxation of a cosine term, in -pi/2 to pi/2\n\n\n\n\n\n"
},

{
    "location": "relaxations/#PowerModels.relaxation_cos_on_off-NTuple{5,Any}",
    "page": "Relaxation Schemes",
    "title": "PowerModels.relaxation_cos_on_off",
    "category": "method",
    "text": "general relaxation of a cosine term, in -pi/2 to pi/2\n\n\n\n\n\n"
},

{
    "location": "relaxations/#PowerModels.relaxation_sin-Tuple{Any,Any,Any}",
    "page": "Relaxation Schemes",
    "title": "PowerModels.relaxation_sin",
    "category": "method",
    "text": "general relaxation of a sine term, in -pi/2 to pi/2\n\n\n\n\n\n"
},

{
    "location": "relaxations/#PowerModels.relaxation_sin_on_off-NTuple{5,Any}",
    "page": "Relaxation Schemes",
    "title": "PowerModels.relaxation_sin_on_off",
    "category": "method",
    "text": "general relaxation of a sine term, in -pi/2 to pi/2\n\n\n\n\n\n"
},

{
    "location": "relaxations/#Relaxation-Schemes-1",
    "page": "Relaxation Schemes",
    "title": "Relaxation Schemes",
    "category": "section",
    "text": "Modules = [PowerModels]\nPages   = [\"core/relaxation_scheme.jl\"]\nOrder   = [:function]\nPrivate  = true"
},

{
    "location": "parser/#",
    "page": "File IO",
    "title": "File IO",
    "category": "page",
    "text": ""
},

{
    "location": "parser/#File-IO-1",
    "page": "File IO",
    "title": "File IO",
    "category": "section",
    "text": "CurrentModule = PowerModels"
},

{
    "location": "parser/#PowerModels.parse_file",
    "page": "File IO",
    "title": "PowerModels.parse_file",
    "category": "function",
    "text": "parse_file(file; import_all)\n\nParses a Matpower .m file or PTI (PSS(R)E-v33) .raw file into a PowerModels data structure. All fields from PTI files will be imported if import_all is true (Default: false).\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.parse_json",
    "page": "File IO",
    "title": "PowerModels.parse_json",
    "category": "function",
    "text": "\n\n\n\n\n\n\n\n"
},

{
    "location": "parser/#General-Data-Formats-1",
    "page": "File IO",
    "title": "General Data Formats",
    "category": "section",
    "text": "parse_file\nparse_json"
},

{
    "location": "parser/#PowerModels.parse_matpower",
    "page": "File IO",
    "title": "PowerModels.parse_matpower",
    "category": "function",
    "text": "Parses the matpwer data from either a filename or an IO object\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.parse_matpower_file",
    "page": "File IO",
    "title": "PowerModels.parse_matpower_file",
    "category": "function",
    "text": "\n\n\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.parse_matpower_string",
    "page": "File IO",
    "title": "PowerModels.parse_matpower_string",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "parser/#PowerModels.matpower_to_powermodels",
    "page": "File IO",
    "title": "PowerModels.matpower_to_powermodels",
    "category": "function",
    "text": "Converts a Matpower dict into a PowerModels dict\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.mp_cost_data",
    "page": "File IO",
    "title": "PowerModels.mp_cost_data",
    "category": "function",
    "text": "\n\n\n\n"
},

{
    "location": "parser/#PowerModels.split_loads_shunts",
    "page": "File IO",
    "title": "PowerModels.split_loads_shunts",
    "category": "function",
    "text": "split_loads_shunts(data)\n\nSeperates Loads and Shunts in data under separate \"load\" and \"shunt\" keys in the PowerModels data format. Includes references to originating bus via \"loadbus\" and \"shuntbus\" keys, respectively.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.standardize_cost_terms",
    "page": "File IO",
    "title": "PowerModels.standardize_cost_terms",
    "category": "function",
    "text": "ensures all polynomial costs functions have the same number of terms\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.merge_generator_cost_data",
    "page": "File IO",
    "title": "PowerModels.merge_generator_cost_data",
    "category": "function",
    "text": "merges generator cost functions into generator data, if costs exist\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.merge_bus_name_data",
    "page": "File IO",
    "title": "PowerModels.merge_bus_name_data",
    "category": "function",
    "text": "merges bus name data into buses, if names exist\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.merge_generic_data",
    "page": "File IO",
    "title": "PowerModels.merge_generic_data",
    "category": "function",
    "text": "merges Matpower tables based on the table extension syntax\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.mp2pm_branch",
    "page": "File IO",
    "title": "PowerModels.mp2pm_branch",
    "category": "function",
    "text": "sets all branch transformer taps to 1.0, to simplify branch models\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.mp2pm_dcline",
    "page": "File IO",
    "title": "PowerModels.mp2pm_dcline",
    "category": "function",
    "text": "adds pmin and pmax values at to and from buses\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.add_dcline_costs",
    "page": "File IO",
    "title": "PowerModels.add_dcline_costs",
    "category": "function",
    "text": "adds dcline costs, if gen costs exist\n\n\n\n\n\n"
},

{
    "location": "parser/#Matpower-Data-Files-1",
    "page": "File IO",
    "title": "Matpower Data Files",
    "category": "section",
    "text": "The following method is the main exported methods for parsing Matpower data files:parse_matpowerWe also provide the following (internal) helper methods:parse_matpower_file\nparse_matpower_string\nmatpower_to_powermodels\nmp_cost_data\nsplit_loads_shunts\nstandardize_cost_terms\nmerge_generator_cost_data\nmerge_bus_name_data\nmerge_generic_data\nmp2pm_branch\nmp2pm_dcline\nadd_dcline_costs"
},

{
    "location": "parser/#PowerModels.parse_psse",
    "page": "File IO",
    "title": "PowerModels.parse_psse",
    "category": "function",
    "text": "parse_psse(pti_data)\n\nConverts PSS(R)E-style data parsed from a PTI raw file, passed by pti_data into a format suitable for use internally in PowerModels. Imports all remaining data from the PTI file if import_all is true (Default: false).\n\n\n\n\n\nParses directly from file\n\n\n\n\n\nParses directly from iostream\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.parse_pti",
    "page": "File IO",
    "title": "PowerModels.parse_pti",
    "category": "function",
    "text": "parse_pti(filename::String)\n\nOpen PTI raw file given by filename, returning a Dict of the data parsed into the proper types.\n\n\n\n\n\nparse_pti(io::IO)\n\nReads PTI data in io::IO, returning a Dict of the data parsed into the proper types.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.parse_pti_data",
    "page": "File IO",
    "title": "PowerModels.parse_pti_data",
    "category": "function",
    "text": "parse_pti_data(data_string, sections)\n\nParse a PTI raw file into a Dict, given the data_string of the file and a list of the sections in the PTI file (typically given by default by get_pti_sections().\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.get_line_elements",
    "page": "File IO",
    "title": "PowerModels.get_line_elements",
    "category": "function",
    "text": "get_line_elements(line)\n\nUses regular expressions to extract all separate data elements from a line of a PTI file and populate them into an Array{String}. Comments, typically indicated at the end of a line with a \'/\' character, are also extracted separately, and Array{Array{String}, String} is returned.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.add_section_data!",
    "page": "File IO",
    "title": "PowerModels.add_section_data!",
    "category": "function",
    "text": "add_section_data!(pti_data, section_data, section)\n\nAdds section_data::Dict, which contains all parsed elements of a PTI file section given by section, into the parent pti_data::Dict\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.parse_line_element!",
    "page": "File IO",
    "title": "PowerModels.parse_line_element!",
    "category": "function",
    "text": "parse_line_element!(data, elements, section)\n\nParses a single \"line\" of data elements from a PTI file, as given by elements which is an array of the line, typically split at ,. Elements are parsed into data types given by section and saved into data::Dict\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.get_pti_dtypes",
    "page": "File IO",
    "title": "PowerModels.get_pti_dtypes",
    "category": "function",
    "text": "get_pti_dtypes(field_name)\n\nReturns OrderedDict of data types for PTI file section given by field_name, as enumerated by PSS/E Program Operation Manual\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.get_pti_sections",
    "page": "File IO",
    "title": "PowerModels.get_pti_sections",
    "category": "function",
    "text": "get_pti_sections()\n\nReturns Array of the names of the sections, in the order that they appear in a PTI file, v33+\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.psse2pm_dcline!",
    "page": "File IO",
    "title": "PowerModels.psse2pm_dcline!",
    "category": "function",
    "text": "psse2pm_dcline!(pm_data, pti_data)\n\nParses PSS(R)E-style Two-Terminal and VSC DC Lines data into a PowerModels compatible Dict structure by first converting them to a simple DC Line Model. For Two-Terminal DC lines, \"sourceid\" is given by [\"IPR\", \"IPI\", \"NAME\"] in the PSS(R)E Two-Terminal DC specification. For Voltage Source Converters, \"sourceid\" is given by [\"IBUS1\", \"IBUS2\", \"NAME\"], where \"IBUS1\" is \"IBUS\" of the first converter bus, and \"IBUS2\" is the \"IBUS\" of the second converter bus, in the PSS(R)E Voltage Source Converter specification.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.psse2pm_transformer!",
    "page": "File IO",
    "title": "PowerModels.psse2pm_transformer!",
    "category": "function",
    "text": "psse2pm_transformer!(pm_data, pti_data)\n\nParses PSS(R)E-style Transformer data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"J\", \"K\", \"CKT\", \"winding\"], where \"winding\" is 0 if transformer is two-winding, and 1, 2, or 3 for three-winding, and the remaining keys are defined in the PSS(R)E Transformer specification.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.psse2pm_shunt!",
    "page": "File IO",
    "title": "PowerModels.psse2pm_shunt!",
    "category": "function",
    "text": "psse2pm_shunt!(pm_data, pti_data)\n\nParses PSS(R)E-style Fixed and Switched Shunt data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] for Fixed Shunts, and [\"I\", \"SWREM\"] for Switched Shunts, as given by the PSS(R)E Fixed and Switched Shunts specifications.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.psse2pm_load!",
    "page": "File IO",
    "title": "PowerModels.psse2pm_load!",
    "category": "function",
    "text": "psse2pm_load!(pm_data, pti_data)\n\nParses PSS(R)E-style Load data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] in the PSS(R)E Load specification.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.psse2pm_bus!",
    "page": "File IO",
    "title": "PowerModels.psse2pm_bus!",
    "category": "function",
    "text": "psse2pm_bus!(pm_data, pti_data)\n\nParses PSS(R)E-style Bus data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"NAME\"] in PSS(R)E Bus specification.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.psse2pm_generator!",
    "page": "File IO",
    "title": "PowerModels.psse2pm_generator!",
    "category": "function",
    "text": "psse2pm_generator!(pm_data, pti_data)\n\nParses PSS(R)E-style Generator data in a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"ID\"] in PSS(R)E Generator specification.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.psse2pm_branch!",
    "page": "File IO",
    "title": "PowerModels.psse2pm_branch!",
    "category": "function",
    "text": "psse2pm_branch!(pm_data, pti_data)\n\nParses PSS(R)E-style Branch data into a PowerModels-style Dict. \"source_id\" is given by [\"I\", \"J\", \"CKT\"] in PSS(R)E Branch specification.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.import_remaining!",
    "page": "File IO",
    "title": "PowerModels.import_remaining!",
    "category": "function",
    "text": "Imports remaining keys from data_in into data_out, excluding keys in exclude\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.create_starbus_from_transformer",
    "page": "File IO",
    "title": "PowerModels.create_starbus_from_transformer",
    "category": "function",
    "text": "create_starbus(pm_data, transformer)\n\nCreates a starbus from a given three-winding transformer. \"sourceid\" is given by `[\"busi\", \"name\", \"I\", \"J\", \"K\", \"CKT\"]` where \"bus_i\" and \"name\" are the modified names for the starbus, and \"I\", \"J\", \"K\" and \"CKT\" come from the originating transformer, in the PSS(R)E transformer specification.\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.find_max_bus_id",
    "page": "File IO",
    "title": "PowerModels.find_max_bus_id",
    "category": "function",
    "text": "find_max_bus_id(pm_data)\n\nReturns the maximum bus id in pm_data\n\n\n\n\n\n"
},

{
    "location": "parser/#PowerModels.init_bus!",
    "page": "File IO",
    "title": "PowerModels.init_bus!",
    "category": "function",
    "text": "init_bus!(bus, id)\n\nInitializes a bus of id id with default values given in the PSS(R)E specification.\n\n\n\n\n\n"
},

{
    "location": "parser/#PTI-Data-Files-(PSS/E)-1",
    "page": "File IO",
    "title": "PTI Data Files (PSS/E)",
    "category": "section",
    "text": "Note: This feature supports the parsing and conversion of PTI files into a PowerModels format for the following power network components: buses, loads, shunts (fixed and approximation of switched), branches, two-winding and three-winding transformers (incl. magnetizing admittance), generators, two-terminal dc lines, and voltage source converter HVDC lines.The following method is the main exported method for parsing PSS(R)E v33 specified PTI data files:parse_psseThe following internal helper methods are also provided:parse_pti\nparse_pti_data\nget_line_elements\nadd_section_data!\nparse_line_element!\nget_pti_dtypes\nget_pti_sections\npsse2pm_dcline!\npsse2pm_transformer!\npsse2pm_shunt!\npsse2pm_load!\npsse2pm_bus!\npsse2pm_generator!\npsse2pm_branch!\nimport_remaining!\ncreate_starbus_from_transformer\nfind_max_bus_id\ninit_bus!"
},

{
    "location": "developer/#",
    "page": "Developer",
    "title": "Developer",
    "category": "page",
    "text": ""
},

{
    "location": "developer/#Developer-Documentation-1",
    "page": "Developer",
    "title": "Developer Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "developer/#Variable-and-parameter-naming-scheme-1",
    "page": "Developer",
    "title": "Variable and parameter naming scheme",
    "category": "section",
    "text": ""
},

{
    "location": "developer/#Suffixes-1",
    "page": "Developer",
    "title": "Suffixes",
    "category": "section",
    "text": "_fr: from-side (\'i\'-node)\n_to: to-side (\'j\'-node)"
},

{
    "location": "developer/#Power-1",
    "page": "Developer",
    "title": "Power",
    "category": "section",
    "text": "Defining power s = p + j cdot q and sm = ss: complex power (VA)\nsm: apparent power (VA)\np: active power (W)\nq: reactive power (var)"
},

{
    "location": "developer/#Voltage-1",
    "page": "Developer",
    "title": "Voltage",
    "category": "section",
    "text": "Defining voltage v = vm angle va = vr + j cdot vi:vm: magnitude of (complex) voltage (V)\nva: angle of complex voltage (rad)\nvr: real part of (complex) voltage (V)\nvi: imaginary part of complex voltage (V)"
},

{
    "location": "developer/#Current-1",
    "page": "Developer",
    "title": "Current",
    "category": "section",
    "text": "Defining current c = cm angle ca = cr + j cdot ci:cm: magnitude of (complex) current (A)\nca: angle of complex current (rad)\ncr: real part of (complex) current (A)\nci: imaginary part of complex current (A)"
},

{
    "location": "developer/#Voltage-products-1",
    "page": "Developer",
    "title": "Voltage products",
    "category": "section",
    "text": "Defining voltage product w = v_i cdot v_j then w = wm angle wa = wr + jcdot wi:wm (short for vvm): magnitude of (complex) voltage products (V^2)\nwa (short for vva): angle of complex voltage products (rad)\nwr (short for vvr): real part of (complex) voltage products (V^2)\nwi (short for vvi): imaginary part of complex voltage products (V^2)"
},

{
    "location": "developer/#Current-products-1",
    "page": "Developer",
    "title": "Current products",
    "category": "section",
    "text": "Defining current product cc = c_i cdot c_j then cc = ccm angle cca = ccr + jcdot cci:ccm: magnitude of (complex) current products (A^2)\ncca: angle of complex current products (rad)\nccr: real part of (complex) current products (A^2)\ncci: imaginary part of complex current products (A^2)"
},

{
    "location": "developer/#Transformer-ratio-1",
    "page": "Developer",
    "title": "Transformer ratio",
    "category": "section",
    "text": "Defining complex transformer ratio t = tm angle ta = tr + jcdot ti:tm: magnitude of (complex) transformer ratio (-)\nta: angle of complex transformer ratio (rad)\ntr: real part of (complex) transformer ratio (-)\nti: imaginary part of complex transformer ratio (-)"
},

{
    "location": "developer/#Impedance-1",
    "page": "Developer",
    "title": "Impedance",
    "category": "section",
    "text": "Defining impedance z = r + jcdot x:r: resistance (Omega)\nx: reactance (Omega)"
},

{
    "location": "developer/#Admittance-1",
    "page": "Developer",
    "title": "Admittance",
    "category": "section",
    "text": "Defining admittance y = g + jcdot b:g: conductance (S)\nb: susceptance (S)"
},

{
    "location": "developer/#Standard-Value-Names-1",
    "page": "Developer",
    "title": "Standard Value Names",
    "category": "section",
    "text": "network ids:network, nw, n\nconductors ids: conductor, cnd, c\nphase ids: phase, ph, h"
},

{
    "location": "developer/#DistFlow-derivation-1",
    "page": "Developer",
    "title": "DistFlow derivation",
    "category": "section",
    "text": ""
},

{
    "location": "developer/#For-an-asymmetric-pi-section-1",
    "page": "Developer",
    "title": "For an asymmetric pi section",
    "category": "section",
    "text": "Following notation of [1], but recognizing it derives the SOC BFM without shunts. In a pi-section, part of the total current $ I{lij}$ at the from side flows through the series impedance, I ^{s}{lij} part of it flows through the from side shunt admittance  I^sh_lij. Vice versa for the to-side. Indicated by superscripts \'s\' (series) and \'sh\' (shunt).Ohm\'s law: U^mag_j angle theta_j = U^mag_iangle theta_i  - z^s_lij cdot I^s_lij forall lij\nKCL at shunts: $ I{lij} = I^{s}{lij} + I^{sh}{lij}$, $ I{lji} = I^{s}{lji} + I^{sh}{lji} $\nObserving: I^s_lij = - I^s_lji, $ \\vert I^{s}{lij} \\vert = \\vert I^{s}{lji} \\vert $\nOhm\'s law times its own complex conjugate: (U^mag_j)^2 = (U^mag_iangle theta_i  - z^s_lij cdot I^s_lij)cdot (U^mag_iangle theta_i  - z^s_lij cdot I^s_lij)^*\nDefining S^s_lij = P^s_lij + jcdot Q^s_lij = (U^mag_iangle theta_i) cdot (I^s_lij)^*\nWorking it out (U^mag_j)^2 = (U^mag_i)^2 - 2 cdot(r^s_lij cdot P^s_lij + x^s_lij cdot Q^s_lij)  + ((r^s_lij)^2 + (x^s_lij)^2)vert I^s_lij vert^2Power flow balance w.r.t. branch total lossesActive power flow:   P_lij + $ P{lji} $ = $  g^{sh}{lij} \\cdot (U^{mag}{i})^2 + r^{s}{l} \\cdot \\vert I^{s}{lij} \\vert^2 +  g^{sh}{lji} \\cdot  (U^{mag}_{j})^2 $\nReactive power flow: Q_lij + $ Q{lji} $ = $ -b^{sh}{lij} \\cdot (U^{mag}{i})^2 + x^{s}{l} \\cdot \\vert I^{s}{lij} \\vert^2  - b^{sh}{lji} \\cdot  (U^{mag}_{j})^2 $\nCurrent definition: $ \\vert S^{s}{lij} \\vert^2  $ $=(U^{mag}{i})^2 \\cdot \\vert I^{s}_{lij} \\vert^2 $Substitution:Voltage from: (U^mag_i)^2 rightarrow w_i\nVoltage to: (U^mag_j)^2 rightarrow w_j\nSeries current : vert I^s_lij vert^2 rightarrow l^s_lNote that l^s_l represents squared magnitude of the series current, i.e. the current flow through the series impedance in the pi-model.Power flow balance w.r.t. branch total lossesActive power flow:   P_lij + $ P{lji} $ = $  g^{sh}{lij} \\cdot w{i} + r^{s}{l} \\cdot l^{s}{l} +  g^{sh}{lji} \\cdot  w_{j} $\nReactive power flow: Q_lij + $ Q{lji} $ = $ -b^{sh}{lij} \\cdot w{i} + x^{s}{l} \\cdot l^{s}{l}  - b^{sh}{lji} \\cdot  w_{j} $Power flow balance w.r.t. branch series losses:Series active power flow : P^s_lij + P^s_lji $ = r^{s}{l} \\cdot l^{s}{l} $\nSeries reactive power flow: Q^s_lij + Q^s_lji $ = x^{s}{l} \\cdot l^{s}{l} $Valid equality to link w_i l_lij P^s_lij Q^s_lij:Nonconvex current definition: (P^s_lij)^2 + (Q^s_lij)^2  $=w{i} \\cdot l{lij} $\nSOC current definition: (P^s_lij)^2 + (Q^s_lij)^2  leq $ w{i} \\cdot l{lij} $"
},

{
    "location": "developer/#Adding-an-ideal-transformer-1",
    "page": "Developer",
    "title": "Adding an ideal transformer",
    "category": "section",
    "text": "Adding an ideal transformer at the from side implicitly creates an internal branch voltage, between the transformer and the pi-section.new voltage: w^_l\nideal voltage magnitude transformer: w^_l = fracw_i(t^mag)^2W.r.t to the pi-section only formulation, we effectively perform the following substitution in all the equations above:$ w{i} \\rightarrow \\frac{w{i}}{(t^{mag})^2}$The branch\'s power balance isn\'t otherwise impacted by adding the ideal transformer, as such transformer is lossless."
},

{
    "location": "developer/#Adding-total-current-limits-1",
    "page": "Developer",
    "title": "Adding total current limits",
    "category": "section",
    "text": "Total current from: $ \\vert I{lij} \\vert \\leq I^{rated}{l}$\nTotal current to: $ \\vert I{lji} \\vert \\leq I^{rated}{l}$In squared voltage magnitude variables:Total current from: $ (P{lij})^2$ + $(Expr(:incomplete, \"incomplete: premature end of input\")){lij})^2  \\leq (I^{rated}{l})^2 \\cdot  w{i}$\nTotal current to: $ (P{lji})^2$ + $(Expr(:incomplete, \"incomplete: premature end of input\")){lji})^2  \\leq (I^{rated}{l})^2 \\cdot w{j}$[1] Gan, L., Li, N., Topcu, U., & Low, S. (2012). Branch flow model for radial networks: convex relaxation. 51st IEEE Conference on Decision and Control, 1–8. Retrieved from http://smart.caltech.edu/papers/ExactRelaxation.pdf"
},

{
    "location": "formulation-details/#",
    "page": "Formulation Details",
    "title": "Formulation Details",
    "category": "page",
    "text": ""
},

{
    "location": "formulation-details/#Formulation-Details-1",
    "page": "Formulation Details",
    "title": "Formulation Details",
    "category": "section",
    "text": "This section provides references to understand the formulations as provided by PowerModels. The list is not meant as a literature discussion, but to give the main starting points to understand the implementation of the formulations.Molzahn, D., & Hiskens, I. (forthcoming). A Survey of Relaxations and Approximations of the Power Flow Equations. Foundations and Trends in Electric Energy Systems\nCoffrin, C., & Roald, L. (2018). Convex relaxations in power system optimization: a brief introduction. [Math.OC], 1–5. Retrieved from http://arxiv.org/abs/1807.07227\nCoffrin, C., Hijazi, H., & Van Hentenryck, P. (2016). The QC relaxation: a theoretical and computational study on optimal power flow. IEEE Trans. Power Syst., 31(4), 3008–3018. https://doi.org/10.1109/TPWRS.2015.2463111"
},

{
    "location": "formulation-details/#Notes-on-the-mathematical-model-for-all-formulations-1",
    "page": "Formulation Details",
    "title": "Notes on the mathematical model for all formulations",
    "category": "section",
    "text": "PowerModels implements a slightly generalized version of the AC Optimal Power Flow problem from Matpower, as discussed in The PowerModels Mathematical Model and presented here.In the next subsections the differences between PowerModels\' bus and branch models and those commonly used in the literature are discussed. Consideration is given to these differences when implementing formulations from articles."
},

{
    "location": "formulation-details/#Standardized-branch-model-1",
    "page": "Formulation Details",
    "title": "Standardized branch model",
    "category": "section",
    "text": "The branch model is standardized as follows:An idealized (lossless) transformer at the from side of the branch (immediately on node i) with a fixed, complex-value voltage transformation (i.e. tap and shift)\nFollowed by a pi-section with complex-valued line shunt admittance, where the from and to side shunt can have different values\nA branch is uniquely defined by a tuple (lij) where l is the line index, i is the from node, and j is the to node.\nThermal limits are defined in apparent power, and are defined at both ends of a line\nEach branch has a phase angle difference constraintNevertheless, in the literature, the following can be observed:The to and from side line shunts are equal\nThe line shunt admittance is a pure susceptance (equivalent to shunt conductance set to 0)\nA branch in a grid without parallel lines is uniquely defined by a tuple (ij) where i is the from node, and j is the to node.\nThermal limits are defined in current (total or series), complex power limits are approximated as a regular polygon, ...\nThermal limits are defined only at the from (or to) side\nPhase angle difference constraints are not includedFurthermore, \"lifted nonlinear cuts\" are used to improve the accuracy of PAD constraints for all formulations in the lifted S-W variable space:Coffrin, C., Hijazi, H., & Van Hentenryck, P. (2017). Strengthening the SDP relaxation of ac power flows with convex envelopes, bound tightening, and valid inequalities. IEEE Trans. Power Syst., 32(5), 3549–3558. https://doi.org/10.1109/TPWRS.2016.2634586"
},

{
    "location": "formulation-details/#Standardized-bus-model-1",
    "page": "Formulation Details",
    "title": "Standardized bus model",
    "category": "section",
    "text": "The bus model is standardized as follows:A bus defines a complex power balance for all the sets lines, generators, loads, bus shunts connected to it, i.e. one can define multiple load  and shunt  components on each bus iNevertheless, in the literature, a simplified bus model is often used:Only a single (aggregated) load per bus is supported\nOnly a single (aggregated) bus shunt per bus is supported"
},

{
    "location": "formulation-details/#PowerModels.ACPPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.ACPPowerModel",
    "category": "type",
    "text": "AC power flow formulation with polar bus voltage variables.\n\nThe seminal reference of AC OPF:\n\n@article{carpentier1962contribution,\n  title={Contribution to the economic dispatch problem},\n  author={Carpentier, J},\n  journal={Bulletin de la Societe Francoise des Electriciens},\n  volume={3},\n  number={8},\n  pages={431--447},\n  year={1962}\n}\n\nHistory and discussion:\n\n@techreport{Cain2012,\n  author = {Cain, Mary B and {O\' Neill}, Richard P and Castillo, Anya},\n  title = {{History of optimal power flow and formulations}},\n  year = {2012}\n  pages = {1--36},\n  url = {https://www.ferc.gov/industries/electric/indus-act/market-planning/opf-papers/acopf-1-history-formulation-testing.pdf}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#ACPPowerModel-1",
    "page": "Formulation Details",
    "title": "ACPPowerModel",
    "category": "section",
    "text": "ACPPowerModel"
},

{
    "location": "formulation-details/#PowerModels.ACRPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.ACRPowerModel",
    "category": "type",
    "text": "AC power flow formulation with rectangular bus voltage variables.\n\n@techreport{Cain2012,\n  author = {Cain, Mary B and {O\' Neill}, Richard P and Castillo, Anya},\n  pages = {1--36},\n  title = {{History of optimal power flow and formulations}},\n  url = {https://www.ferc.gov/industries/electric/indus-act/market-planning/opf-papers/acopf-1-history-formulation-testing.pdf}\n  year = {2012}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#ACRPowerModel-1",
    "page": "Formulation Details",
    "title": "ACRPowerModel",
    "category": "section",
    "text": "ACRPowerModel"
},

{
    "location": "formulation-details/#PowerModels.ACTPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.ACTPowerModel",
    "category": "type",
    "text": "AC power flow formulation (nonconvex) with variables for voltage angle, voltage magnitude squared, and real and imaginary part of voltage crossproducts. A tangens constraint is added to represent meshed networks in an exact manner.\n\n@ARTICLE{4349090,\n  author={R. A. Jabr},\n  title={A Conic Quadratic Format for the Load Flow Equations of Meshed Networks},\n  journal={IEEE Transactions on Power Systems},\n  year={2007},\n  month={Nov},\n  volume={22},\n  number={4},\n  pages={2285-2286},\n  doi={10.1109/TPWRS.2007.907590},\n  ISSN={0885-8950}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#ACTPowerModel-1",
    "page": "Formulation Details",
    "title": "ACTPowerModel",
    "category": "section",
    "text": "ACTPowerModel"
},

{
    "location": "formulation-details/#PowerModels.DCPPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.DCPPowerModel",
    "category": "type",
    "text": "Linearized \'DC\' power flow formulation with polar voltage variables.\n\n@ARTICLE{4956966,\n  author={B. Stott and J. Jardim and O. Alsac},\n  journal={IEEE Transactions on Power Systems},\n  title={DC Power Flow Revisited},\n  year={2009},\n  month={Aug},\n  volume={24},\n  number={3},\n  pages={1290-1300},\n  doi={10.1109/TPWRS.2009.2021235},\n  ISSN={0885-8950}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#DCPPowerModel-1",
    "page": "Formulation Details",
    "title": "DCPPowerModel",
    "category": "section",
    "text": "DCPPowerModel"
},

{
    "location": "formulation-details/#PowerModels.LPACCPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.LPACCPowerModel",
    "category": "type",
    "text": "The LPAC Cold-Start AC Power Flow Approximation.\n\nNote that the LPAC Cold-Start model requires the least amount of information but is also the least accurate variant of the LPAC formulations.  If a nominal AC operating point is available, the LPAC Warm-Start model will provide improved accuracy.\n\nThe original publication suggests to use polyhedral outer approximations for the cosine and line thermal lit constraints.  Given the recent improvements in MIQCQP solvers, this implementation uses quadratic functions for those constraints.\n\n@article{doi:10.1287/ijoc.2014.0594,\n  author = {Coffrin, Carleton and Van Hentenryck, Pascal},\n  title = {A Linear-Programming Approximation of AC Power Flows},\n  journal = {INFORMS Journal on Computing},\n  volume = {26},\n  number = {4},\n  pages = {718-734},\n  year = {2014},\n  doi = {10.1287/ijoc.2014.0594},\n  eprint = {https://doi.org/10.1287/ijoc.2014.0594}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#LPACCPowerModel-1",
    "page": "Formulation Details",
    "title": "LPACCPowerModel",
    "category": "section",
    "text": "LPACCPowerModel"
},

{
    "location": "formulation-details/#PowerModels.SDPWRMPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.SDPWRMPowerModel",
    "category": "type",
    "text": "Semi-definite relaxation of AC OPF\n\nOriginally proposed by:\n\n@article{BAI2008383,\n  author = \"Xiaoqing Bai and Hua Wei and Katsuki Fujisawa and Yong Wang\",\n  title = \"Semidefinite programming for optimal power flow problems\",\n  journal = \"International Journal of Electrical Power & Energy Systems\",\n  volume = \"30\",\n  number = \"6\",\n  pages = \"383 - 392\",\n  year = \"2008\",\n  issn = \"0142-0615\",\n  doi = \"https://doi.org/10.1016/j.ijepes.2007.12.003\",\n  url = \"http://www.sciencedirect.com/science/article/pii/S0142061507001378\",\n}\n\nFirst paper to use \"W\" variables in the BIM of AC OPF:\n\n@INPROCEEDINGS{6345272,\n  author={S. Sojoudi and J. Lavaei},\n  title={Physics of power networks makes hard optimization problems easy to solve},\n  booktitle={2012 IEEE Power and Energy Society General Meeting},\n  year={2012},\n  month={July},\n  pages={1-8},\n  doi={10.1109/PESGM.2012.6345272},\n  ISSN={1932-5517}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#SDPWRMPowerModel-1",
    "page": "Formulation Details",
    "title": "SDPWRMPowerModel",
    "category": "section",
    "text": "SDPWRMPowerModel"
},

{
    "location": "formulation-details/#PowerModels.SparseSDPWRMPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.SparseSDPWRMPowerModel",
    "category": "type",
    "text": "Sparsity-exploiting semidefinite relaxation of AC OPF\n\nProposed in:\n\n@article{doi:10.1137/S1052623400366218,\n  author = {Fukuda, M. and Kojima, M. and Murota, K. and Nakata, K.},\n  title = {Exploiting Sparsity in Semidefinite Programming via Matrix Completion I: General Framework},\n  journal = {SIAM Journal on Optimization},\n  volume = {11},\n  number = {3},\n  pages = {647-674},\n  year = {2001},\n  doi = {10.1137/S1052623400366218},\n  URL = {https://doi.org/10.1137/S1052623400366218},\n  eprint = {https://doi.org/10.1137/S1052623400366218}\n}\n\nOriginal application to OPF by:\n\n@ARTICLE{6064917,\n  author={R. A. Jabr},\n  title={Exploiting Sparsity in SDP Relaxations of the OPF Problem},\n  journal={IEEE Transactions on Power Systems},\n  volume={27},\n  number={2},\n  pages={1138-1139},\n  year={2012},\n  month={May},\n  doi={10.1109/TPWRS.2011.2170772},\n  ISSN={0885-8950}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#SparseSDPWRMPowerModel-1",
    "page": "Formulation Details",
    "title": "SparseSDPWRMPowerModel",
    "category": "section",
    "text": "SparseSDPWRMPowerModel"
},

{
    "location": "formulation-details/#PowerModels.SOCWRPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.SOCWRPowerModel",
    "category": "type",
    "text": "Second-order cone relaxation of bus injection model of AC OPF.\n\nThe implementation casts this as a convex quadratically constrained problem.\n\n@article{1664986,\n  author={R. A. Jabr},\n  title={Radial distribution load flow using conic programming},\n  journal={IEEE Transactions on Power Systems},\n  year={2006},\n  month={Aug},\n  volume={21},\n  number={3},\n  pages={1458-1459},\n  doi={10.1109/TPWRS.2006.879234},\n  ISSN={0885-8950}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#SOCWRPowerModel-1",
    "page": "Formulation Details",
    "title": "SOCWRPowerModel",
    "category": "section",
    "text": "SOCWRPowerModel"
},

{
    "location": "formulation-details/#PowerModels.QCWRPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.QCWRPowerModel",
    "category": "type",
    "text": "\"Quadratic-Convex\" relaxation of AC OPF\n\n@Article{Hijazi2017,\n  author=\"Hijazi, Hassan and Coffrin, Carleton and Hentenryck, Pascal Van\",\n  title=\"Convex quadratic relaxations for mixed-integer nonlinear programs in power systems\",\n  journal=\"Mathematical Programming Computation\",\n  year=\"2017\",\n  month=\"Sep\",\n  volume=\"9\",\n  number=\"3\",\n  pages=\"321--367\",\n  issn=\"1867-2957\",\n  doi=\"10.1007/s12532-016-0112-z\",\n  url=\"https://doi.org/10.1007/s12532-016-0112-z\"\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#QCWRPowerModel-1",
    "page": "Formulation Details",
    "title": "QCWRPowerModel",
    "category": "section",
    "text": "QCWRPowerModel"
},

{
    "location": "formulation-details/#PowerModels.QCWRTriPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.QCWRTriPowerModel",
    "category": "type",
    "text": "\"Quadratic-Convex\" relaxation of AC OPF with convex hull of triple product\n\n@Article{Hijazi2017,\n  author=\"Hijazi, Hassan and Coffrin, Carleton and Hentenryck, Pascal Van\",\n  title=\"Convex quadratic relaxations for mixed-integer nonlinear programs in power systems\",\n  journal=\"Mathematical Programming Computation\",\n  year=\"2017\",\n  month=\"Sep\",\n  volume=\"9\",\n  number=\"3\",\n  pages=\"321--367\",\n  issn=\"1867-2957\",\n  doi=\"10.1007/s12532-016-0112-z\",\n  url=\"https://doi.org/10.1007/s12532-016-0112-z\"\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#QCWRTriPowerModel-1",
    "page": "Formulation Details",
    "title": "QCWRTriPowerModel",
    "category": "section",
    "text": "QCWRTriPowerModel"
},

{
    "location": "formulation-details/#PowerModels.SOCBFPowerModel",
    "page": "Formulation Details",
    "title": "PowerModels.SOCBFPowerModel",
    "category": "type",
    "text": "Second-order cone relaxation of branch flow model\n\nThe implementation casts this as a convex quadratically constrained problem.\n\n@INPROCEEDINGS{6425870,\n  author={M. Farivar and S. H. Low},\n  title={Branch flow model: Relaxations and convexification},\n  booktitle={2012 IEEE 51st IEEE Conference on Decision and Control (CDC)},\n  year={2012},\n  month={Dec},\n  pages={3672-3679},\n  doi={10.1109/CDC.2012.6425870},\n  ISSN={0191-2216}\n}\n\nExtended as discussed in:\n\n@misc{1506.04773,\n  author = {Carleton Coffrin and Hassan L. Hijazi and Pascal Van Hentenryck},\n  title = {DistFlow Extensions for AC Transmission Systems},\n  year = {2018},\n  eprint = {arXiv:1506.04773},\n  url = {https://arxiv.org/abs/1506.04773}\n}\n\n\n\n\n\n"
},

{
    "location": "formulation-details/#SOCBFPowerModel-1",
    "page": "Formulation Details",
    "title": "SOCBFPowerModel",
    "category": "section",
    "text": "SOCBFPowerModel"
},

{
    "location": "experiment-results/#",
    "page": "Experiment Results",
    "title": "Experiment Results",
    "category": "page",
    "text": ""
},

{
    "location": "experiment-results/#PowerModels-Experiment-Results-1",
    "page": "Experiment Results",
    "title": "PowerModels Experiment Results",
    "category": "section",
    "text": "This section presents results of running PowerModel.jl on  collections of established power network test cases from  NESTA. This provides validation of the  PowerModel.jl as well as a results baseline for these test cases. All models were solved using IPOPT."
},

{
    "location": "experiment-results/#Experiment-Design-1",
    "page": "Experiment Results",
    "title": "Experiment Design",
    "category": "section",
    "text": "This experiment consists of running the following PowerModels commands,result_ac  = run_opf(case, ACPPowerModel, IpoptSolver(tol=1e-6))\nresult_soc = run_opf(case, SOCWRPowerModel, IpoptSolver(tol=1e-6))\nresult_qc  = run_opf(case, QCWRPowerModel, IpoptSolver(tol=1e-6))for each case in the NESTA archive. If the value of result[\"status\"] is :LocalOptimal then the values of result[\"objective\"] and result[\"solve_time\"] are reported, otherwise an err. or -- is displayed.  A value of n.d. indicates that no data was available.   The optimality gap is defined as,soc_gap = 100*(result_ac[\"objective\"] - result_soc[\"objective\"])/result_ac[\"objective\"]It is important to note that the result[\"solve_time\"] value in this experiment does not include Julia\'s JIT time, about 2-5 seconds. The results were computed using the HSL ma57 solver in IPOPT. The default linear solver provided with Ipopt.jl will increase the runtime by 2-6x."
},

{
    "location": "experiment-results/#Software-Versions-1",
    "page": "Experiment Results",
    "title": "Software Versions",
    "category": "section",
    "text": "PowerModels.jl: v0.3.4-27-g115de85, 115de853fd4103b712d051e902540e7fa2b627beIpopt.jl: v0.2.6, 959b9c67e396a6e2307fc022d26b0d95692ee6a4NESTA: v0.7.0-1-gb10c1e1, b10c1e1ea0a4259f91a3efd50fbad72b22d2fb9fHardware: Dual Intel 2.10GHz CPUs, 128GB RAM"
},

{
    "location": "experiment-results/#Typical-Operating-Conditions-(TYP)-1",
    "page": "Experiment Results",
    "title": "Typical Operating Conditions (TYP)",
    "category": "section",
    "text": "Case Name Nodes Edges AC ($/h) QC Gap (%) SOC Gap (%) AC Time (sec.) QC Time (sec.) SOC Time (sec.)\nnestacase3lmbd 3 3 5.8126e+03 1.22 1.32 <1 <1 <1\nnestacase4gs 4 4 1.5643e+02 0.01 0.01 <1 <1 <1\nnestacase5pjm 5 6 1.7552e+04 14.55 14.55 <1 <1 <1\nnestacase6c 6 7 2.3206e+01 0.30 0.30 <1 <1 <1\nnestacase6ww 6 11 3.1440e+03 0.62 0.63 <1 <1 <1\nnestacase9wscc 9 9 5.2967e+03 0.01 0.01 <1 <1 <1\nnestacase14ieee 14 20 2.4405e+02 0.11 0.11 <1 <1 <1\nnestacase24ieee_rts 24 38 6.3352e+04 0.02 0.02 <1 <1 <1\nnestacase29edin 29 99 2.9895e+04 0.10 0.12 <1 <1 <1\nnestacase30as 30 41 8.0313e+02 0.06 0.06 <1 <1 <1\nnestacase30fsr 30 41 5.7577e+02 0.39 0.39 <1 <1 <1\nnestacase30ieee 30 41 2.0497e+02 15.65 15.89 <1 <1 <1\nnestacase39epri 39 46 9.6506e+04 0.05 0.05 <1 <1 <1\nnestacase57ieee 57 80 1.1433e+03 0.07 0.07 <1 <1 <1\nnestacase73ieee_rts 73 120 1.8976e+05 0.04 0.04 <1 <1 <1\nnestacase89pegase 89 210 5.8198e+03 0.17 0.17 <1 <1 <1\nnestacase118ieee 118 186 3.7186e+03 1.57 1.83 <1 <1 <1\nnestacase162ieee_dtc 162 284 4.2302e+03 3.96 4.03 <1 <1 <1\nnestacase189edin 189 206 8.4929e+02 0.22 0.22 <1 <1 <1\nnestacase240wecc 240 448 7.5136e+04 5.27 5.74 4 4 2\nnestacase300ieee 300 411 1.6891e+04 1.18 1.18 <1 <1 <1\nnestacase1354pegase 1354 1991 7.4069e+04 0.08 0.08 4 11 13\nnestacase1397speir 1418 1919 3.8890e+03 0.69 0.94 4 6 2\nnestacase1394sopeir 1418 1920 1.3668e+03 0.58 0.83 3 6 2\nnestacase1460wpeir 1481 1988 4.6402e+03 0.65 0.89 4 7 3\nnestacase1888rte 1888 2531 5.9805e+04 0.38 0.38 26 7 46\nnestacase1951rte 1951 2596 8.1738e+04 0.07 0.08 16 9 10\nnestacase2224edin 2224 3207 3.8128e+04 6.03 6.09 10 16 5\nnestacase2383wpmp 2383 2896 1.8685e+06 0.99 1.05 10 11 6\nnestacase2736spmp 2736 3504 1.3079e+06 0.29 0.30 8 12 5\nnestacase2737sopmp 2737 3506 7.7763e+05 0.25 0.26 7 10 4\nnestacase2746wopmp 2746 3514 1.2083e+06 0.36 0.37 7 11 4\nnestacase2746wpmp 2746 3514 1.6318e+06 0.32 0.33 8 11 5\nnestacase2848rte 2848 3776 5.3022e+04 0.08 0.08 61 10 48\nnestacase2868rte 2868 3808 7.9795e+04 0.07 0.07 31 13 9\nnestacase2869pegase 2869 4582 1.3400e+05 0.09 0.09 10 20 55\nnestacase3012wpmp 3012 3572 2.6008e+06 0.98 1.03 12 16 9\nnestacase3120spmp 3120 3693 2.1457e+06 0.54 0.55 12 17 6\nnestacase3375wpmp 3375 4161 7.4357e+06 0.50 0.52 15 496 26\nnestacase6468rte 6468 9000 8.6829e+04 0.23 0.23 99 64 464\nnestacase6470rte 6470 9005 9.8348e+04 0.17 0.18 80 56 39\nnestacase6495rte 6495 9019 1.0632e+05 0.49 0.49 55 53 37\nnestacase6515rte 6515 9037 1.0987e+05 0.43 0.43 55 45 321\nnestacase9241pegase 9241 16049 3.1591e+05 1.02 1.64 93 109 298\nnestacase13659pegase 13659 20467 3.8612e+05 0.94 1.43 288 157 375"
},

{
    "location": "experiment-results/#Congested-Operating-Conditions-(API)-1",
    "page": "Experiment Results",
    "title": "Congested Operating Conditions (API)",
    "category": "section",
    "text": "Case Name Nodes Edges AC ($/h) QC Gap (%) SOC Gap (%) AC Time (sec.) QC Time (sec.) SOC Time (sec.)\nnestacase3lmbd__api 3 3 3.6744e+02 1.79 3.26 <1 <1 <1\nnestacase4gs__api 4 4 7.6667e+02 0.64 0.64 <1 <1 <1\nnestacase5pjm__api 5 6 2.9963e+03 0.27 0.27 <1 <1 <1\nnestacase6c__api 6 7 8.1387e+02 0.34 0.34 <1 <1 <1\nnestacase9wscc__api 9 9 6.5623e+02 0.01 0.01 <1 <1 <1\nnestacase14ieee__api 14 20 3.2513e+02 1.27 1.27 <1 <1 <1\nnestacase24ieee_rts__api 24 38 6.4267e+03 11.88 20.70 <1 <1 <1\nnestacase29edin__api 29 99 2.9529e+05 0.41 0.41 <1 <1 <1\nnestacase30as__api 30 41 5.7008e+02 4.64 4.64 <1 <1 <1\nnestacase30fsr__api 30 41 3.6656e+02 45.20 45.20 <1 <1 <1\nnestacase30ieee__api 30 41 4.1499e+02 0.93 0.93 <1 <1 <1\nnestacase39epri__api 39 46 7.4604e+03 2.98 3.00 <1 <1 <1\nnestacase57ieee__api 57 80 1.4307e+03 0.21 0.21 <1 <1 <1\nnestacase73ieee_rts__api 73 120 1.9995e+04 10.98 14.20 <1 <1 <1\nnestacase89pegase__api 89 210 4.2554e+03 19.83 19.88 <1 <1 <1\nnestacase118ieee__api 118 186 1.0270e+04 43.50 43.70 <1 <1 <1\nnestacase162ieee_dtc__api 162 284 6.1069e+03 1.25 1.34 <1 <1 <1\nnestacase189edin__api 189 206 1.9141e+03 1.70 1.70 <1 <1 <1\nnestacase240wecc__api 240 448 1.4267e+05 0.58 0.70 4 6 2\nnestacase300ieee__api 300 411 1.9868e+04 0.64 0.71 <1 <1 <1\nnestacase1354pegase__api 1354 1991 5.2449e+04 0.36 0.36 6 9 4\nnestacase1397speir__api 1418 1919 6.6658e+03 1.07 1.29 5 5 3\nnestacase1394sopeir__api 1418 1920 3.3776e+03 0.37 0.39 6 6 3\nnestacase1460wpeir__api 1481 1988 6.4449e+03 1.54 1.69 4 7 3\nnestacase1888rte__api 1888 2531 5.8546e+04 0.71 0.71 9 14 6\nnestacase1951rte__api 1951 2596 7.5639e+04 0.13 0.14 11 12 41\nnestacase2224edin__api 2224 3207 4.4435e+04 2.41 2.42 11 15 5\nnestacase2383wpmp__api 2383 2896 2.3489e+04 0.74 0.75 7 9 4\nnestacase2736spmp__api 2736 3504 2.5884e+04 2.18 2.19 8 11 5\nnestacase2737sopmp__api 2737 3506 2.1675e+04 0.39 0.40 8 11 5\nnestacase2746wopmp__api 2746 3514 2.2803e+04 0.49 0.49 8 11 4\nnestacase2746wpmp__api 2746 3514 2.5964e+04 0.58 0.59 7 10 4\nnestacase2848rte__api 2848 3776 4.4032e+04 0.23 0.23 25 18 10\nnestacase2868rte__api 2868 3808 7.5506e+04 0.20 0.21 32 22 8\nnestacase2869pegase__api 2869 4582 9.8415e+04 0.59 0.60 15 22 9\nnestacase3012wpmp__api 3012 3572 2.8334e+04 1.04 1.07 9 12 6\nnestacase3120spmp__api 3120 3693 2.3715e+04 2.73 2.75 12 14 5\nnestacase3375wpmp__api 3375 4161 4.8939e+04 0.68 0.69 13 57 51\nnestacase6468rte__api 6468 9000 6.8149e+04 0.89 0.91 124 59 246\nnestacase6470rte__api 6470 9005 9.0583e+04 0.80 0.82 63 50 22\nnestacase6495rte__api 6495 9019 8.8944e+04 1.24 1.26 64 47 24\nnestacase6515rte__api 6515 9037 9.7217e+04 1.07 1.10 72 51 25\nnestacase9241pegase__api 9241 16049 2.3890e+05 1.67 2.45 88 108 42\nnestacase13659pegase__api 13659 20467 3.0285e+05 1.13 1.74 155 148 76"
},

{
    "location": "experiment-results/#Small-Angle-Difference-Conditions-(SAD)-1",
    "page": "Experiment Results",
    "title": "Small Angle Difference Conditions (SAD)",
    "category": "section",
    "text": "Case Name Nodes Edges AC ($/h) QC Gap (%) SOC Gap (%) AC Time (sec.) QC Time (sec.) SOC Time (sec.)\nnestacase3lmbd__sad 3 3 5.9593e+03 1.42 3.75 <1 <1 <1\nnestacase4gs__sad 4 4 3.1584e+02 1.53 4.53 <1 <1 <1\nnestacase5pjm__sad 5 6 2.6115e+04 0.99 3.62 <1 <1 <1\nnestacase6c__sad 6 7 2.4376e+01 0.43 1.32 <1 <1 <1\nnestacase6ww__sad 6 11 3.1463e+03 0.18 0.70 <1 <1 <1\nnestacase9wscc__sad 9 9 5.5283e+03 0.54 1.57 <1 <1 <1\nnestacase14ieee__sad 14 20 2.4405e+02 0.05 0.08 <1 <1 <1\nnestacase24ieee_rts__sad 24 38 7.6943e+04 2.93 9.56 <1 <1 <1\nnestacase29edin__sad 29 99 4.1258e+04 16.57 25.91 <1 <1 <1\nnestacase30as__sad 30 41 8.9749e+02 2.32 7.88 <1 <1 <1\nnestacase30fsr__sad 30 41 5.7679e+02 0.41 0.47 <1 <1 <1\nnestacase30ieee__sad 30 41 2.0497e+02 4.17 6.79 <1 <1 <1\nnestacase39epri__sad 39 46 9.6745e+04 0.05 0.08 <1 <1 <1\nnestacase57ieee__sad 57 80 1.1433e+03 0.05 0.07 <1 <1 <1\nnestacase73ieee_rts__sad 73 120 2.2775e+05 2.54 6.75 <1 <1 <1\nnestacase89pegase__sad 89 210 5.8198e+03 0.14 0.15 <1 <1 <1\nnestacase118ieee__sad 118 186 4.1067e+03 4.62 8.29 <1 <1 <1\nnestacase162ieee_dtc__sad 162 284 4.2535e+03 4.31 4.56 <1 <1 <1\nnestacase189edin__sad 189 206 8.6482e+02 0.99 0.99 <1 <1 <1\nnestacase240wecc__sad 240 448 7.6495e+04 5.29 7.41 4 4 2\nnestacase300ieee__sad 300 411 1.6894e+04 1.10 1.18 <1 <1 <1\nnestacase1354pegase__sad 1354 1991 7.4070e+04 0.07 0.08 4 7 6\nnestacase1397speir__sad 1418 1919 4.2378e+03 7.27 7.42 5 8 3\nnestacase1394sopeir__sad 1418 1920 1.4493e+03 3.33 4.34 4 5 3\nnestacase1460wpeir__sad 1481 1988 5.3370e+03 0.84 1.03 4 6 3\nnestacase1888rte__sad 1888 2531 5.9806e+04 0.37 0.38 28 8 101\nnestacase1951rte__sad 1951 2596 8.1786e+04 0.11 0.13 17 10 9\nnestacase2224edin__sad 2224 3207 3.8265e+04 5.52 6.10 11 15 5\nnestacase2383wpmp__sad 2383 2896 1.9165e+06 2.16 3.13 12 11 6\nnestacase2736spmp__sad 2736 3504 1.3294e+06 1.53 1.80 11 12 5\nnestacase2737sopmp__sad 2737 3506 7.9266e+05 1.92 2.10 10 11 4\nnestacase2746wopmp__sad 2746 3514 1.2344e+06 2.00 2.37 9 9 4\nnestacase2746wpmp__sad 2746 3514 1.6674e+06 1.68 2.21 9 11 6\nnestacase2848rte__sad 2848 3776 5.3031e+04 0.08 0.09 59 13 10\nnestacase2868rte__sad 2868 3808 7.9818e+04 0.08 0.10 42 13 10\nnestacase2869pegase__sad 2869 4582 1.3402e+05 0.09 0.10 11 25 19\nnestacase3012wpmp__sad 3012 3572 2.6213e+06 1.41 1.62 14 17 7\nnestacase3120spmp__sad 3120 3693 2.1755e+06 1.42 1.61 16 17 7\nnestacase3375wpmp__sad 3375 4161 7.4357e+06 0.47 0.52 16 30 43\nnestacase6468rte__sad 6468 9000 8.6829e+04 0.22 0.23 127 59 118\nnestacase6470rte__sad 6470 9005 9.8357e+04 0.16 0.18 74 42 38\nnestacase6495rte__sad 6495 9019 1.0632e+05 0.48 0.49 60 60 39\nnestacase6515rte__sad 6515 9037 1.0995e+05 0.49 0.51 52 46 36\nnestacase9241pegase__sad 9241 16049 3.1592e+05 0.80 0.82 87 100 649\nnestacase13659pegase__sad 13659 20467 3.8614e+05 0.70 0.71 193 127 139"
},

{
    "location": "experiment-results/#Radial-Topologies-(RAD)-1",
    "page": "Experiment Results",
    "title": "Radial Topologies (RAD)",
    "category": "section",
    "text": "Case Name Nodes Edges AC ($/h) QC Gap (%) SOC Gap (%) AC Time (sec.) QC Time (sec.) SOC Time (sec.)\nnestacase9kds__rad 9 8 inf. – – <1 <1 <1\nnestacase9l_kds__rad 9 8 inf. – – <1 <1 <1\nnestacase30fsr_kds__rad 30 29 6.1904e+02 1.74 1.74 <1 <1 <1\nnestacase30fsrlkds__rad 30 29 4.4584e+02 2.25 2.25 <1 <1 <1\nnestacase30kds__rad 30 29 4.7943e+03 11.47 11.47 <1 <1 <1\nnestacase30l_kds__rad 30 29 4.5623e+03 33.47 33.47 <1 <1 <1\nnestacase57kds__rad 57 56 1.2101e+04 13.58 13.58 <1 <1 <1\nnestacase57l_kds__rad 57 56 1.0173e+04 17.43 17.43 <1 <1 <1"
},

{
    "location": "experiment-results/#Non-Convex-Optimization-Cases-(NCO)-1",
    "page": "Experiment Results",
    "title": "Non-Convex Optimization Cases (NCO)",
    "category": "section",
    "text": "Case Name Nodes Edges AC ($/h) QC Gap (%) SOC Gap (%) AC Time (sec.) QC Time (sec.) SOC Time (sec.)\nnestacase5bgm__nco 5 6 1.0823e+03 10.29 10.74 <1 <1 <1\nnestacase9bgm__nco 9 9 3.0878e+03 10.85 10.85 <1 <1 <1\nnestacase9na_cao__nco 9 9 -2.1243e+02 -15.05 -18.12 <1 <1 <1\nnestacase9nb_cao__nco 9 9 -2.4742e+02 -15.62 -19.31 <1 <1 <1\nnestacase14s_cao__nco 14 20 9.6704e+03 3.83 3.83 <1 <1 <1\nnestacase391_bgm__nco 39 46 1.1221e+04 3.73 3.74 <1 <1 <1"
},

{
    "location": "experiment-results/#Utility-Cases-(UTL)-1",
    "page": "Experiment Results",
    "title": "Utility Cases (UTL)",
    "category": "section",
    "text": "Case Name Nodes Edges AC ($/h) QC Gap (%) SOC Gap (%) AC Time (sec.) QC Time (sec.) SOC Time (sec.)\nnestacase3cc__utl 3 3 2.0756e+02 1.55 1.62 <1 <1 <1\nnestacase3cgs__utl 3 3 1.0171e+02 1.69 1.69 <1 <1 <1\nnestacase3ch__utl 3 5 9.8740e+01 100.01 100.01 <1 <1 <1\nnestacase5lmbd__utl 5 7 2.3989e+03 0.01 0.01 <1 <1 <1\nnestacase7lmbd__utl 7 9 1.0344e+02 0.16 0.16 <1 <1 <1\nnestacase22bgm__utl 22 22 4.5388e+03 0.00 0.01 <1 <1 <1\nnestacase30test__utl 30 44 6.1510e+02 7.05 7.05 <1 <1 <1"
},

]}
