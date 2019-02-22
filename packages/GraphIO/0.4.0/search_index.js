var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GraphIO-1",
    "page": "Readme",
    "title": "GraphIO",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)GraphIO provides support to LightGraphs.jl for reading/writing graphs in various formats.The current version of GraphIO works with Julia version >= 0.7.Currently, the following functionality is provided:Format Read Write Multiple Graphs Format Name\n[EdgeList] ✓ ✓  EdgeListFormat\n[GML] ✓ ✓ ✓ GMLFormat\n[Graph6] ✓ ✓ ✓ Graph6Format\n[GraphML] ✓ ✓ ✓ GraphMLFormat\n[Pajek NET] ✓ ✓  NETFormat\n[GEXF]  ✓  GEXFFormat\n[DOT] ✓  ✓ DOTFormat\n[CDF] ✓   CDFFormat[EdgeList]: a simple list of sources and dests separated by whitespace and/or comma, one pair per line. [GML]: https://en.wikipedia.org/wiki/GraphModellingLanguage [Graph6]: https://users.cecs.anu.edu.au/~bdm/data/formats.html [GraphML]: https://en.wikipedia.org/wiki/GraphML [Pajek NET]: https://gephi.org/users/supported-graph-formats/pajek-net-format/ [GEXF]: https://gephi.org/gexf/format/ [DOT]: https://en.wikipedia.org/wiki/DOT(graphdescription_language)Graphs are read using either the loadgraph function or, for formats that support multiple graphs in a single file, the loadgraphs functions. loadgraph returns a LightGraph object, while loadgraphs returns a dictionary of LightGraph objects.  For example, an edgelist file could be loaded as:graph = loadgraph(\"path_to_graph/my_edgelist.txt\", \"graph_key\", EdgeListFormat())"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GraphIO.CDFGraphIO.CDFFormatGraphIO.DOTFormatGraphIO.EdgeListGraphIO.EdgeListFormatGraphIO.GEXFFormatGraphIO.GMLFormatGraphIO.Graph6GraphIO.Graph6FormatGraphIO.GraphIOGraphIO.GraphMLFormatGraphIO.NETGraphIO.NETFormatGraphIO.__init__GraphIO.evalGraphIO.include"
},

]}
