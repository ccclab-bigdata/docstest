var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LegacyStrings-1",
    "page": "Readme",
    "title": "LegacyStrings",
    "category": "section",
    "text": "(Image: Travis CI Build Status) (Image: AppVeyor Build Status)(Image: Julia 0.5 Status) (Image: Julia 0.6 Status) (Image: Julia 0.7 Status)The LegacyStrings package provides compatibility string types from Julia 0.5 (and earlier), which were removed in subsequent versions, including:ASCIIString: a single-byte-per character string type that can only hold ASCII string data.\nUTF8String: a string type with single byte code units (UInt8), encoding strings as UTF-8.\nUTF16String: a string type with two-byte native-endian code units (UInt16), encoding strings as UTF-16.\nUTF32String: a string type with four-byte native-endian code units (UInt32), encoding strings as UTF-32.\nByteString: a type alias for Union{ASCIIString,UTF8String}, i.e. strings that can be passed to C directly.\nWString: an alias for UTF16String if Cwchart_t is two bytes (i.e. Windows) or UTF32String otherwise.\nRepString: a string type for efficient handling of repeated strings.LegacyStrings also defines and exports converter functions for these types, i.e.:ascii: convert to ASCIIString; since Base exports an ascii function as well, you must explicitly do import LegacyStrings: ascii or write LegacyStrings.ascii in order to use this function rather than Base.ascii.\nutf8: convert to UTF8String.\nutf16: convert to UTF16String.\nutf32: convert to UTF32String.\nwstring: alias for utf16 or utf32 according to what WString is an alias to."
},

{
    "location": "autodocs/#LegacyStrings.checkstring",
    "page": "Docstrings",
    "title": "LegacyStrings.checkstring",
    "category": "function",
    "text": "Validates and calculates number of characters in a UTF-8,UTF-16 or UTF-32 encoded vector/string\n\nThis function checks the bounds of the start and end positions Use unsafe_checkstring to avoid that overhead if the bounds have already been checked\n\nInput Arguments:\n\ndat    UTF-8 (Vector{UInt8}), UTF-16 (Vector{UInt16}) or UTF-32 (Vector{UInt32}, AbstractString) encoded string\n\nOptional Input Arguments:\n\nstartpos start position (defaults to 1)\nendpos   end position   (defaults to lastindex(dat))\n\nKeyword Arguments:\n\naccept_long_null  = true  # Modified UTF-8 (\\0 represented as b\"\\xc0\\x80\")\naccept_surrogates = true  # CESU-8\naccept_long_char  = false # Accept arbitrary long encodings\n\nReturns:\n\n(total characters, flags, 4-byte, 3-byte, 2-byte)\n\nThrows:\n\nUnicodeError\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LegacyStrings.encode_to_utf16",
    "page": "Docstrings",
    "title": "LegacyStrings.encode_to_utf16",
    "category": "function",
    "text": "Converts an already validated UTF-32 encoded vector of UInt32 to a UTF16String\n\nInput Arguments:\n\ndat Vector{UInt32} of UTF-32 encoded data\nlen length of output in 16-bit words\n\nReturns:\n\nUTF16String\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LegacyStrings.encode_to_utf8",
    "page": "Docstrings",
    "title": "LegacyStrings.encode_to_utf8",
    "category": "function",
    "text": "Converts an already validated vector of UInt16 or UInt32 to a UTF8String\n\nInput Arguments:\n\ndat Vector of code units (UInt16 or UInt32), explicit   is not converted\nlen length of output in bytes\n\nReturns:\n\nUTF8String\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LegacyStrings.unsafe_checkstring",
    "page": "Docstrings",
    "title": "LegacyStrings.unsafe_checkstring",
    "category": "function",
    "text": "Validates and calculates number of characters in a UTF-8,UTF-16 or UTF-32 encoded vector/string\n\nWarning: this function does not check the bounds of the start or end positions Use checkstring to make sure the bounds are checked\n\nInput Arguments:\n\ndat    UTF-8 (Vector{UInt8}), UTF-16 (Vector{UInt16}) or UTF-32 (Vector{UInt32}, AbstractString) encoded string\n\nOptional Input Arguments:\n\npos    start position (defaults to 1)\nendpos end position   (defaults to lastindex(dat))\n\nKeyword Arguments:\n\naccept_long_null  = true  # Modified UTF-8 (\\0 represented as b\"\\xc0\\x80\")\naccept_surrogates = true  # CESU-8\naccept_long_char  = false # Accept arbitrary long encodings\n\nReturns:\n\n(total characters, flags, 4-byte, 3-byte, 2-byte)\n\nThrows:\n\nUnicodeError\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LegacyStrings.utf16",
    "page": "Docstrings",
    "title": "LegacyStrings.utf16",
    "category": "function",
    "text": "utf16(s)\n\nCreate a UTF-16 string from a byte array, array of UInt16, or any other string type. (Data must be valid UTF-16. Conversions of byte arrays check for a byte-order marker in the first two bytes, and do not include it in the resulting string.)\n\nNote that the resulting UTF16String data is terminated by the NUL codepoint (16-bit zero), which is not treated as a character in the string (so that it is mostly invisible in Julia); this allows the string to be passed directly to external functions requiring NUL-terminated data. This NUL is appended automatically by the utf16(s) conversion function. If you have a UInt16 array A that is already NUL-terminated valid UTF-16 data, then you can instead use UTF16String(A) to construct the string without making a copy of the data and treating the NUL as a terminator rather than as part of the string.\n\n\n\n\n\nutf16(::Union{Ptr{UInt16},Ptr{Int16}} [, length])\n\nCreate a string from the address of a NUL-terminated UTF-16 string. A copy is made; the pointer can be safely freed. If length is specified, the string does not have to be NUL-terminated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LegacyStrings.utf32",
    "page": "Docstrings",
    "title": "LegacyStrings.utf32",
    "category": "function",
    "text": "utf32(s)\n\nCreate a UTF-32 string from a byte array, array of Char or UInt32, or any other string type. (Conversions of byte arrays check for a byte-order marker in the first four bytes, and do not include it in the resulting string.)\n\nNote that the resulting UTF32String data is terminated by the NUL codepoint (32-bit zero), which is not treated as a character in the string (so that it is mostly invisible in Julia); this allows the string to be passed directly to external functions requiring NUL-terminated data. This NUL is appended automatically by the utf32(s) conversion function. If you have a Char or UInt32 array A that is already NUL-terminated UTF-32 data, then you can instead use UTF32String(A) to construct the string without making a copy of the data and treating the NUL as a terminator rather than as part of the string.\n\n\n\n\n\nutf32(::Union{Ptr{Char},Ptr{UInt32},Ptr{Int32}} [, length])\n\nCreate a string from the address of a NUL-terminated UTF-32 string. A copy is made; the pointer can be safely freed. If length is specified, the string does not have to be NUL-terminated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LegacyStrings.wstring",
    "page": "Docstrings",
    "title": "LegacyStrings.wstring",
    "category": "function",
    "text": "utf32(s)\n\nCreate a UTF-32 string from a byte array, array of Char or UInt32, or any other string type. (Conversions of byte arrays check for a byte-order marker in the first four bytes, and do not include it in the resulting string.)\n\nNote that the resulting UTF32String data is terminated by the NUL codepoint (32-bit zero), which is not treated as a character in the string (so that it is mostly invisible in Julia); this allows the string to be passed directly to external functions requiring NUL-terminated data. This NUL is appended automatically by the utf32(s) conversion function. If you have a Char or UInt32 array A that is already NUL-terminated UTF-32 data, then you can instead use UTF32String(A) to construct the string without making a copy of the data and treating the NUL as a terminator rather than as part of the string.\n\n\n\n\n\nutf32(::Union{Ptr{Char},Ptr{UInt32},Ptr{Int32}} [, length])\n\nCreate a string from the address of a NUL-terminated UTF-32 string. A copy is made; the pointer can be safely freed. If length is specified, the string does not have to be NUL-terminated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LegacyStrings.ASCIIStringLegacyStrings.AbstractString1632LegacyStrings.AllLegacyStringTypesLegacyStrings.ByteStringLegacyStrings.DirectIndexStringLegacyStrings.LegacyStringsLegacyStrings.RepStringLegacyStrings.RevStringLegacyStrings.UTF16StringLegacyStrings.UTF32StringLegacyStrings.UTF8StringLegacyStrings.UTF_ERR_CONTLegacyStrings.UTF_ERR_INVALIDLegacyStrings.UTF_ERR_INVALID_16LegacyStrings.UTF_ERR_INVALID_8LegacyStrings.UTF_ERR_INVALID_CHARLegacyStrings.UTF_ERR_INVALID_INDEXLegacyStrings.UTF_ERR_LONGLegacyStrings.UTF_ERR_MAP_CHARLegacyStrings.UTF_ERR_MISSING_SURROGATELegacyStrings.UTF_ERR_NOT_LEADLegacyStrings.UTF_ERR_NOT_SURROGATELegacyStrings.UTF_ERR_NOT_TRAILLegacyStrings.UTF_ERR_NULL_16_TERMINATELegacyStrings.UTF_ERR_NULL_32_TERMINATELegacyStrings.UTF_ERR_ODD_BYTES_16LegacyStrings.UTF_ERR_ODD_BYTES_32LegacyStrings.UTF_ERR_SHORTLegacyStrings.UTF_ERR_SURROGATELegacyStrings.UTF_LATIN1LegacyStrings.UTF_LONGLegacyStrings.UTF_SURROGATELegacyStrings.UTF_UNICODE2LegacyStrings.UTF_UNICODE3LegacyStrings.UTF_UNICODE4LegacyStrings.UnicodeErrorLegacyStrings.WStringLegacyStrings.asciiLegacyStrings.byte_string_classifyLegacyStrings.bytestringLegacyStrings.checkstringLegacyStrings.chr2indLegacyStrings.empty_utf16LegacyStrings.empty_utf32LegacyStrings.empty_utf8LegacyStrings.encode_to_utf16LegacyStrings.encode_to_utf8LegacyStrings.evalLegacyStrings.fast_utf_copyLegacyStrings.first_utf8_byteLegacyStrings.get_continuationLegacyStrings.get_supplementaryLegacyStrings.get_utf8_3byteLegacyStrings.get_utf8_4byteLegacyStrings.includeLegacyStrings.ind2chrLegacyStrings.is_surrogate_codeunitLegacyStrings.is_surrogate_leadLegacyStrings.is_surrogate_trailLegacyStrings.is_valid_continuationLegacyStrings.lastidxLegacyStrings.lcfirstLegacyStrings.nextLegacyStrings.output_utf8_4byte!LegacyStrings.rsearchLegacyStrings.searchLegacyStrings.ucfirstLegacyStrings.unsafe_checkstringLegacyStrings.utf16LegacyStrings.utf32LegacyStrings.utf8LegacyStrings.utf8_offsetLegacyStrings.utf8_trailingLegacyStrings.wstring"
},

]}
