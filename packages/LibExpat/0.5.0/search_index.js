var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LibExpat-Julia-wrapper-for-libexpat-1",
    "page": "Readme",
    "title": "LibExpat - Julia wrapper for libexpat",
    "category": "section",
    "text": "(Image: LibExpat) (Image: LibExpat) (Image: LibExpat) (Image: Build Status) (Image: Build status) (Image: Coverage Status)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#XPath-queries-on-fully-parsed-tree-1",
    "page": "Readme",
    "title": "XPath queries on fully parsed tree",
    "category": "section",
    "text": "Has only three relevant APIsxp_parse(s::String) returns a parsed object of type ETree (used to be called ParsedData).\nLibExpat.find(pd::ETree, element_path::String) is used to search for elements within the parsed data object as returned by xp_parse\n(pd::ETree)[xpath::String] or xpath(pd::ETree, xpath::String) is also used to search for elements within the parseddata object as returned by xp_parse, but using a subset of the xpath specificationExamples for element_path are:\"foo/bar/baz\" returns an array of elements, i.e. ETree objects with tag \"baz\" under foo/bar\n\"foo//baz\" returns an array of elements, i.e. ETree objects with tag \"baz\" anywhere under foo\n\"foo/bar/baz[1]\" returns a ETree object representing the first element of type \"baz\"\n\"foo/bar/baz[1]{qux}\" returns a String representing the attribute \"qux\" of the first element of type \"baz\" whichhas the \"qux\" attribute\"foo/bar[2]/baz[1]{qux}\" in the case there is more than one \"bar\" element, this picks up \"baz\" from the 2nd \"bar\"\n\"foo/bar{qux}\" returns a String representing the attribute \"qux\" of foo/bar\n\"foo/bar/baz[1]#string\" returns a String representing the \"string-value\" for the given element path. The string-value is theconcatenation of all text nodes that are descendants of the given node. NOTE: All whitespace is preserved in the concatenated string.If only one sub-element exists, the index is assumed to be 1 and may be omitted.\"foo/bar/baz[2]{qux}\" is the same as \"foo[1]/bar[1]/baz[2]{qux}\"\nreturns an empty list or nothing if an element in the path is not found\nNOTE: If the element_path starts with a / then the search starts from pd as the root pd (the first argument)\nIf element_path does NOT start with a / then the search starts with the children of the root pd (the first argument)You can also navigate the returned ETree object directly, i.e., without using LibExpat.find. The relevant members of ETree are:type ETree\n    name        # XML Tag\n    attr        # Dict of tag attributes as name-value pairs\n    elements    # Vector of child nodes (ETree or String)\nendThe xpath search consists of two parts: the parser and the search. Calling xpath\"some/xpath[expression]\" xpath(xp::String) will construct an XPath object that can be passed as the second argument to the xpath search. The search can be used via parseddata[xpath\"string\"] or xpath(parseddata, xpath\"string\"). The use of the xpath string macro is not required, but is recommended for performance, and the ability to use variable interpolation. When xpath is called as a macro, it will parse path elements starting with $ as julia variables and perform limited string interpolation:xpath\"/a/$b/c[contains(.,\'\\$x$y$(z)!\\\'\')]\"The parser handles most of the XPath 1.0 specification. The following features are currently missing:accessing parents of attributes\nseveral xpath functions (namespace-uri, lang, processing-instructions, and comment). name and local-name do not account for xmlns namespaces correctly.\nparenthesized expressions\nxmlns namespace parsing\ncorrect ordering of output\nseveral xpath axes (namespace, following, following-sibling, preceding, preceding-sibling)\n&quot; and &apos; (although you can use \\\' or \\\" as escape sequences when using the xpath\"\" string macro)"
},

{
    "location": "#Streaming-XML-parsing-1",
    "page": "Readme",
    "title": "Streaming XML parsing",
    "category": "section",
    "text": "If you do not want to store the whole tree in memory, LibExpat offers the abbility to define callbacks for streaming parsing too. To parse a document, you creata a new XPCallbacks instance and define all callbacks you want to receive.type XPCallbacks\n    # These are all (yet) available callbacks, by default initialised with a dummy function.\n    # Each callback will be handed as first argument a XPStreamHandler and the following other parameters:\n    start_cdata     # (..) -- Start of a CDATA section\n    end_cdata       # (..) -- End of a CDATA sections\n    comment         # (.., comment::String) -- A comment\n    character_data  # (.., txt::String) -- A character data section\n    default         # (.., txt::String) -- Handler for any characters in the document which wouldn\'t otherwise be handled.\n    default_expand  # (.., txt::String) -- Default handler that doesn\'t inhibit the expansion of internal entity reference.\n    start_element   # (.., name::String, attrs::Dict{String,String}) -- Start of a tag/element\n    end_element     # (.., name::String) -- End of a tag/element\n    start_namespace # (.., prefix::String, uri::String) -- Start of a namespace declaration\n    end_namespace   # (.., prefix::String) -- End of the scope of a namespace\nendUsing an initialized XPCallbacks object, one can start parsing using xp_streaming_parse which takes the XML document as a string, the XPCallbacks object and an arbitrary data object which can be used to reference some context during parsing. This data object is accessible through the data attribute of the XPStreamHandler instance passed to each callback.If your data is too large to fit into memory, as an alternative you can use xp_streaming_parsefile to parse the XML document line-by-line (the number of lines read and passed to expat is controlled by the keyword argument bufferlines)."
},

{
    "location": "#IJulia-Demonstration-Notebook-1",
    "page": "Readme",
    "title": "IJulia Demonstration Notebook",
    "category": "section",
    "text": "LibExpat IJulia Demo "
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LibExpat.@cLibExpat.@ctypedefLibExpat.@xpathLibExpat.@xpath_descendantLibExpat.@xpath_fnLibExpat.@xpath_parseLibExpat.@xpath_strLibExpat.ETreeLibExpat.LibExpatLibExpat.ParsedDataLibExpat.SymbolAnyLibExpat.XML_AttlistDeclHandlerLibExpat.XML_BoolLibExpat.XML_CQUANT_NONELibExpat.XML_CQUANT_OPTLibExpat.XML_CQUANT_PLUSLibExpat.XML_CQUANT_REPLibExpat.XML_CTYPE_ANYLibExpat.XML_CTYPE_CHOICELibExpat.XML_CTYPE_EMPTYLibExpat.XML_CTYPE_MIXEDLibExpat.XML_CTYPE_NAMELibExpat.XML_CTYPE_SEQLibExpat.XML_CharLibExpat.XML_CharacterDataHandlerLibExpat.XML_CommentHandlerLibExpat.XML_ContentLibExpat.XML_DefaultCurrentLibExpat.XML_DefaultHandlerLibExpat.XML_ERROR_ABORTEDLibExpat.XML_ERROR_ASYNC_ENTITYLibExpat.XML_ERROR_ATTRIBUTE_EXTERNAL_ENTITY_REFLibExpat.XML_ERROR_BAD_CHAR_REFLibExpat.XML_ERROR_BINARY_ENTITY_REFLibExpat.XML_ERROR_CANT_CHANGE_FEATURE_ONCE_PARSINGLibExpat.XML_ERROR_DUPLICATE_ATTRIBUTELibExpat.XML_ERROR_ENTITY_DECLARED_IN_PELibExpat.XML_ERROR_EXTERNAL_ENTITY_HANDLINGLibExpat.XML_ERROR_FEATURE_REQUIRES_XML_DTDLibExpat.XML_ERROR_FINISHEDLibExpat.XML_ERROR_INCOMPLETE_PELibExpat.XML_ERROR_INCORRECT_ENCODINGLibExpat.XML_ERROR_INVALID_TOKENLibExpat.XML_ERROR_JUNK_AFTER_DOC_ELEMENTLibExpat.XML_ERROR_MISPLACED_XML_PILibExpat.XML_ERROR_NONELibExpat.XML_ERROR_NOT_STANDALONELibExpat.XML_ERROR_NOT_SUSPENDEDLibExpat.XML_ERROR_NO_ELEMENTSLibExpat.XML_ERROR_NO_MEMORYLibExpat.XML_ERROR_PARAM_ENTITY_REFLibExpat.XML_ERROR_PARTIAL_CHARLibExpat.XML_ERROR_PUBLICIDLibExpat.XML_ERROR_RECURSIVE_ENTITY_REFLibExpat.XML_ERROR_RESERVED_NAMESPACE_URILibExpat.XML_ERROR_RESERVED_PREFIX_XMLLibExpat.XML_ERROR_RESERVED_PREFIX_XMLNSLibExpat.XML_ERROR_SUSPENDEDLibExpat.XML_ERROR_SUSPEND_PELibExpat.XML_ERROR_SYNTAXLibExpat.XML_ERROR_TAG_MISMATCHLibExpat.XML_ERROR_TEXT_DECLLibExpat.XML_ERROR_UNBOUND_PREFIXLibExpat.XML_ERROR_UNCLOSED_CDATA_SECTIONLibExpat.XML_ERROR_UNCLOSED_TOKENLibExpat.XML_ERROR_UNDECLARING_PREFIXLibExpat.XML_ERROR_UNDEFINED_ENTITYLibExpat.XML_ERROR_UNEXPECTED_STATELibExpat.XML_ERROR_UNKNOWN_ENCODINGLibExpat.XML_ERROR_XML_DECLLibExpat.XML_ElementDeclHandlerLibExpat.XML_EncodingLibExpat.XML_EndCdataSectionHandlerLibExpat.XML_EndDoctypeDeclHandlerLibExpat.XML_EndElementHandlerLibExpat.XML_EndNamespaceDeclHandlerLibExpat.XML_EntityDeclHandlerLibExpat.XML_ErrorStringLibExpat.XML_ExpatVersionLibExpat.XML_ExpatVersionInfoLibExpat.XML_Expat_VersionLibExpat.XML_ExternalEntityParserCreateLibExpat.XML_ExternalEntityRefHandlerLibExpat.XML_FALSELibExpat.XML_FEATURE_ATTR_INFOLibExpat.XML_FEATURE_CONTEXT_BYTESLibExpat.XML_FEATURE_DTDLibExpat.XML_FEATURE_ENDLibExpat.XML_FEATURE_LARGE_SIZELibExpat.XML_FEATURE_MIN_SIZELibExpat.XML_FEATURE_NSLibExpat.XML_FEATURE_SIZEOF_XML_CHARLibExpat.XML_FEATURE_SIZEOF_XML_LCHARLibExpat.XML_FEATURE_UNICODELibExpat.XML_FEATURE_UNICODE_WCHAR_TLibExpat.XML_FINISHEDLibExpat.XML_FeatureLibExpat.XML_FreeContentModelLibExpat.XML_GetBaseLibExpat.XML_GetBufferLibExpat.XML_GetCurrentByteCountLibExpat.XML_GetCurrentByteIndexLibExpat.XML_GetCurrentColumnNumberLibExpat.XML_GetCurrentLineNumberLibExpat.XML_GetErrorCodeLibExpat.XML_GetFeatureListLibExpat.XML_GetIdAttributeIndexLibExpat.XML_GetInputContextLibExpat.XML_GetParsingStatusLibExpat.XML_GetSpecifiedAttributeCountLibExpat.XML_INITIALIZEDLibExpat.XML_IndexLibExpat.XML_LCharLibExpat.XML_MemFreeLibExpat.XML_MemMallocLibExpat.XML_MemReallocLibExpat.XML_Memory_Handling_SuiteLibExpat.XML_NotStandaloneHandlerLibExpat.XML_NotationDeclHandlerLibExpat.XML_PARAM_ENTITY_PARSING_ALWAYSLibExpat.XML_PARAM_ENTITY_PARSING_NEVERLibExpat.XML_PARAM_ENTITY_PARSING_UNLESS_STANDALONELibExpat.XML_PARSINGLibExpat.XML_ParseLibExpat.XML_ParseBufferLibExpat.XML_ParserLibExpat.XML_ParserCreateLibExpat.XML_ParserCreateNSLibExpat.XML_ParserCreate_MMLibExpat.XML_ParserFreeLibExpat.XML_ParserResetLibExpat.XML_ParsingStatusLibExpat.XML_ProcessingInstructionHandlerLibExpat.XML_ResumeParserLibExpat.XML_STATUS_ERRORLibExpat.XML_STATUS_OKLibExpat.XML_STATUS_SUSPENDEDLibExpat.XML_SUSPENDEDLibExpat.XML_SetAttlistDeclHandlerLibExpat.XML_SetBaseLibExpat.XML_SetCdataSectionHandlerLibExpat.XML_SetCharacterDataHandlerLibExpat.XML_SetCommentHandlerLibExpat.XML_SetDefaultHandlerLibExpat.XML_SetDefaultHandlerExpandLibExpat.XML_SetDoctypeDeclHandlerLibExpat.XML_SetElementDeclHandlerLibExpat.XML_SetElementHandlerLibExpat.XML_SetEncodingLibExpat.XML_SetEndCdataSectionHandlerLibExpat.XML_SetEndDoctypeDeclHandlerLibExpat.XML_SetEndElementHandlerLibExpat.XML_SetEndNamespaceDeclHandlerLibExpat.XML_SetEntityDeclHandlerLibExpat.XML_SetExternalEntityRefHandlerLibExpat.XML_SetExternalEntityRefHandlerArgLibExpat.XML_SetHashSaltLibExpat.XML_SetNamespaceDeclHandlerLibExpat.XML_SetNotStandaloneHandlerLibExpat.XML_SetNotationDeclHandlerLibExpat.XML_SetParamEntityParsingLibExpat.XML_SetProcessingInstructionHandlerLibExpat.XML_SetReturnNSTripletLibExpat.XML_SetSkippedEntityHandlerLibExpat.XML_SetStartCdataSectionHandlerLibExpat.XML_SetStartDoctypeDeclHandlerLibExpat.XML_SetStartElementHandlerLibExpat.XML_SetStartNamespaceDeclHandlerLibExpat.XML_SetUnknownEncodingHandlerLibExpat.XML_SetUnparsedEntityDeclHandlerLibExpat.XML_SetUserDataLibExpat.XML_SetXmlDeclHandlerLibExpat.XML_SizeLibExpat.XML_SkippedEntityHandlerLibExpat.XML_StartCdataSectionHandlerLibExpat.XML_StartDoctypeDeclHandlerLibExpat.XML_StartElementHandlerLibExpat.XML_StartNamespaceDeclHandlerLibExpat.XML_StopParserLibExpat.XML_TRUELibExpat.XML_UnknownEncodingHandlerLibExpat.XML_UnparsedEntityDeclHandlerLibExpat.XML_UseForeignDTDLibExpat.XML_UseParserAsHandlerArgLibExpat.XML_XmlDeclHandlerLibExpat.XPCallbacksLibExpat.XPHandleLibExpat.XPStreamHandlerLibExpat.XPathLibExpat.XPath_CollectorLibExpat._dep_message_ParsedDataLibExpat.attrs_in_to_dictLibExpat.cdataLibExpat.commentLibExpat.consume_functionLibExpat.consume_whitespaceLibExpat.defaultLibExpat.default_expandLibExpat.end_cdataLibExpat.end_elementLibExpat.end_namespaceLibExpat.evalLibExpat.findLibExpat.freeLibExpat.includeLibExpat.isrootLibExpat.libexpatLibExpat.make_parserLibExpat.parseLibExpat.parsefileLibExpat.pauseLibExpat.resumeLibExpat.start_cdataLibExpat.start_elementLibExpat.start_namespaceLibExpat.stopLibExpat.streaming_cdataLibExpat.streaming_commentLibExpat.streaming_defaultLibExpat.streaming_default_expandLibExpat.streaming_end_cdataLibExpat.streaming_end_elementLibExpat.streaming_end_namespaceLibExpat.streaming_start_cdataLibExpat.streaming_start_elementLibExpat.streaming_start_namespaceLibExpat.string_valueLibExpat.xp_closeLibExpat.xp_geterrorLibExpat.xp_make_parserLibExpat.xp_parseLibExpat.xpathLibExpat.xpath_axesLibExpat.xpath_booleanLibExpat.xpath_combined_checkedLibExpat.xpath_descendantLibExpat.xpath_exprLibExpat.xpath_functionsLibExpat.xpath_normalizeLibExpat.xpath_numberLibExpat.xpath_outputLibExpat.xpath_parseLibExpat.xpath_parse_exprLibExpat.xpath_separatorsLibExpat.xpath_stringLibExpat.xpath_translateLibExpat.xpath_types"
},

]}
