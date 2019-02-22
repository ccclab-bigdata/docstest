var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Portable-Hardware-Locality-(Hwloc)-1",
    "page": "Readme",
    "title": "Portable Hardware Locality (Hwloc)",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)This Julia package wraps the hwloc library.The Portable Hardware Locality (hwloc) software package provides a portable abstraction (across OS, versions, architectures, ...) of the hierarchical topology of modern architectures, including NUMA memory nodes, sockets, shared caches, cores and simultaneous multithreading. It also gathers various system attributes such as cache and memory information as well as the locality of I/O devices such as network interfaces, InfiniBand HCAs or GPUs. It primarily aims at helping applications with gathering information about modern computing hardware so as to exploit it accordingly and efficiently.http://www.open-mpi.org/projects/hwloc/"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The Julia module Hwloc provides a high-level wrapper of the hwloc library; that is, hwloc\'s data structure are translated into Julia types that contain the same information, but are modified to look \"natural\" in Julia. Low-level administrative tasks are hidden.The most important function is Hwloc.topology_load, which examines the current node\'s hardware topology (memories, caches, cores, etc.), and returns a tree structure describing this topology. This corresponds to the output of the lstopo program.import Hwloc\ntopology = Hwloc.topology_load()\nprintln(\"Machine topology:\")\nprint(topology)This outputs the full information, such as:D0: L0 P0 Machine  \n    D1: L0 P0 Node  \n        D2: L0 P0 Cache  Cache{size=8388608,depth=3,linesize=64,associativity=0,type=Unified}\n            D3: L0 P0 Cache  Cache{size=262144,depth=2,linesize=64,associativity=8,type=Unified}\n                D4: L0 P0 Cache  Cache{size=32768,depth=1,linesize=64,associativity=0,type=Data}\n                    D5: L0 P0 Core  \n                        D6: L0 P0 PU  \n                        D6: L1 P1 PU  \n            D3: L1 P1 Cache  Cache{size=262144,depth=2,linesize=64,associativity=8,type=Unified}\n                D4: L1 P1 Cache  Cache{size=32768,depth=1,linesize=64,associativity=0,type=Data}\n                    D5: L1 P1 Core  \n                        D6: L2 P2 PU  \n                        D6: L3 P3 PU  \n            D3: L2 P2 Cache  Cache{size=262144,depth=2,linesize=64,associativity=8,type=Unified}\n                D4: L2 P2 Cache  Cache{size=32768,depth=1,linesize=64,associativity=0,type=Data}\n                    D5: L2 P2 Core  \n                        D6: L4 P4 PU  \n                        D6: L5 P5 PU  \n            D3: L3 P3 Cache  Cache{size=262144,depth=2,linesize=64,associativity=8,type=Unified}\n                D4: L3 P3 Cache  Cache{size=32768,depth=1,linesize=64,associativity=0,type=Data}\n                    D5: L3 P3 Core  \n                        D6: L6 P6 PU  \n                        D6: L7 P7 PU  Often, one only wants an overview of the topology, omitting details. The function Hwloc.getinfo does this, similar to the output of the hwloc-info program.import Hwloc\ntopology = Hwloc.topology_load()\nsummary = Hwloc.getinfo(topology)\nprintln(\"Machine overview:\")\nfor obj in summary\n    obj_type = obj[1]\n    count = obj[2]\n    println(\"$count $obj_type\")\nendThis may output:1 Machine\n1 Node\n1 Cache\n4 Cache\n4 Cache\n4 Core\n8 PU"
},

{
    "location": "#Obtaining-particular-information:-1",
    "page": "Readme",
    "title": "Obtaining particular information:",
    "category": "section",
    "text": "The number of (physical) cores and virtual cores (PUs):import Hwloc\ntopology = Hwloc.topology_load()\ncounts = Hwloc.histmap(topology)\nncores = counts[:Core]\nnpus = counts[:PU]\nprintln(\"This machine has $ncores cores and $npus PUs (processing units)\")This may print:This machine has 4 cores and 8 PUs (processing units)A shortcut is also provided for the number of (physical) cores:import Hwloc\nncores = Hwloc.num_physical_cores()The L1 cache properties:import Hwloc\ntopology = Hwloc.topology_load()\nl1cache = first(filter(t->t.type_==:Cache && t.attr.depth==1, topology)).attr\nprintln(\"L1 cache information: $l1cache\")This may print:L1 cache information: Cache{size=32768,depth=1,linesize=64,associativity=0,type=Data}"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Hwloc.@checked_libHwloc.AttributeHwloc.CacheAttrHwloc.GroupAttrHwloc.HwlocHwloc.NullAttrHwloc.OSDevAttrHwloc.ObjectHwloc.PCIDevAttrHwloc.api_versionHwloc.cache_typesHwloc.evalHwloc.get_api_versionHwloc.getinfoHwloc.histmapHwloc.hwloc_bitmap_tHwloc.hwloc_cache_attr_sHwloc.hwloc_cpuset_tHwloc.hwloc_distances_sHwloc.hwloc_group_attr_sHwloc.hwloc_nodeset_tHwloc.hwloc_objHwloc.hwloc_obj_bridge_type_tHwloc.hwloc_obj_cache_type_tHwloc.hwloc_obj_info_sHwloc.hwloc_obj_memory_page_type_sHwloc.hwloc_obj_memory_sHwloc.hwloc_obj_osdev_type_tHwloc.hwloc_obj_tHwloc.hwloc_obj_type_tHwloc.hwloc_obj_v1Hwloc.hwloc_obj_v2Hwloc.hwloc_osdev_attr_sHwloc.hwloc_pcidev_attr_sHwloc.includeHwloc.libhwlocHwloc.loadHwloc.load_attrHwloc.num_physical_coresHwloc.obj_typesHwloc.obj_types_v1Hwloc.obj_types_v2Hwloc.osdev_typesHwloc.topology_load"
},

]}
