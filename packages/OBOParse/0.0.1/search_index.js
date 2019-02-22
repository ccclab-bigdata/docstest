var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OBO-Ontology-parser-1",
    "page": "Readme",
    "title": "OBO Ontology parser",
    "category": "section",
    "text": "(Image: Build Status)Rewrite of GeneOntology.jl\'s OBO parser to be more robust and not specific to Gene Ontology."
},

{
    "location": "autodocs/#OBOParse.Ontology",
    "page": "Docstrings",
    "title": "OBOParse.Ontology",
    "category": "type",
    "text": "The collection of all ontology terms and their relations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OBOParse.Stanza",
    "page": "Docstrings",
    "title": "OBOParse.Stanza",
    "category": "type",
    "text": "Represents one entry in the OBO file, e.g.\n\n[Term]\nid: GO:0000002\nnamespace: biological_process\ndef: BBB\nname: two\n\nis stored as Stanza with Typ = \"Term\", id = \"GO:0000002\" and tagvalues = Dict(\"id\" => \"GO:0000002\", \"namespace\" => [\"biological_process\"], \"def\" => [\"BBB\"], \"name\" => \"two\").\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OBOParse.Term",
    "page": "Docstrings",
    "title": "OBOParse.Term",
    "category": "type",
    "text": "Ontology term.\n\nThe Term object is a node in the direct acyclic ontology graph. Its outgoing and incoming edges represent the relations with the other nodes and could be retrieved by\n\nrelationship(term, sym)\n\nand\n\nrev_relationship(term, sym)\n\nrespectively, where sym is the relationship annotation (e.g. :part_of, :is_a, :regulates).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OBOParse.Typedef",
    "page": "Docstrings",
    "title": "OBOParse.Typedef",
    "category": "type",
    "text": "\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "OBOParse.OBOParseOBOParse.OBOParseExceptionOBOParse.OntologyOBOParse.RefDictOBOParse.RelDictOBOParse.StanzaOBOParse.TagDictOBOParse.TermOBOParse.TermIdOBOParse.TypedefOBOParse.VecOrTupleOBOParse.alltermsOBOParse.ancestorsOBOParse.childrenOBOParse.descendantsOBOParse.evalOBOParse.find_first_nonescapedOBOParse.gettermbyidOBOParse.gettermbynameOBOParse.gettermidOBOParse.gettermsOBOParse.gettypedefsOBOParse.getuniquevalOBOParse.id_tagOBOParse.includeOBOParse.is_aOBOParse.isobsoleteOBOParse.loadOBOParse.parentsOBOParse.parseOBOOBOParse.parsetagvaluesOBOParse.r_stanzaOBOParse.relationshipOBOParse.removecommentsOBOParse.rev_relationshipOBOParse.satisfiesOBOParse.tagvalueOBOParse.transitive_closure"
},

]}
