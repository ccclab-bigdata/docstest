var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FunctionalTables-1",
    "page": "Readme",
    "title": "FunctionalTables",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)Julia package for working with (potentially large) columns of data."
},

{
    "location": "#Design-1",
    "page": "Readme",
    "title": "Design",
    "category": "section",
    "text": "A table is a collection of columns, indexed by Symbols.Columns are immutable, which allows compression and type narrowing when applicable. Columns do not support random access, just iterate.Columns are created by collecting elements into sinks, which are then finalized. While being collected into, sinks can change representation, eg decide whether to use RLE or other compression schemes, mmap to disk for large data, etc –- these can be configured and ideally ignored by the user.NamedTuples are used pervasively throughout the interface."
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "Heavily experimental, API changes radically without warnings or deprecations. This primarily an experiment, the package will be registered if it works out."
},

{
    "location": "autodocs/#FunctionalTables.ColumnSort",
    "page": "Docstrings",
    "title": "FunctionalTables.ColumnSort",
    "category": "type",
    "text": "struct ColumnSort{K, R}\n\nSort specification for a column. K::Symbol is a key for sorting, R::Bool reverses sorting for this key.\n\nThis type is not part of the interface, for internal representation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.ColumnSorting",
    "page": "Docstrings",
    "title": "FunctionalTables.ColumnSorting",
    "category": "type",
    "text": "Type for sorting, used internally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.FunctionalTable",
    "page": "Docstrings",
    "title": "FunctionalTables.FunctionalTable",
    "category": "type",
    "text": "FunctionalTable(itr)\nFunctionalTable(itr, sortspecs)\nFunctionalTable(itr, sortspecs, sortingpolicy; cfg)\n\n\nCreate a FunctionalTable from an iterable that returns NamedTuples.\n\nReturned values need to have the same names (but not necessarily types).\n\nsorting specifies sorting, and is a tuple of :key or :key => reverse elements.\n\ncfg determines sink configuration for collecting elements of the columns, see SinkConfig.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.Keys",
    "page": "Docstrings",
    "title": "FunctionalTables.Keys",
    "category": "type",
    "text": "Type for keys, used internally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.RLEVector",
    "page": "Docstrings",
    "title": "FunctionalTables.RLEVector",
    "category": "type",
    "text": "struct RLEVector{C, T, S}\n\nAn RLE encoded vector, using negative lengths for missing values.\n\nWhen an elemenet in counts is positive, it encodes that many of the corresponding element in data.\n\nNegative counts encode missing values of type S (has to be a concrete singleton). In this case there is no corresponding value in data, ie data may have fewer elements than counts.\n\nAn RLEVector can also act as a column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.RepeatedValue",
    "page": "Docstrings",
    "title": "FunctionalTables.RepeatedValue",
    "category": "type",
    "text": "RepeatedValue(value, len)\n\nEquivalent to a vector containing len instances of value. Used internally.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SHOWROWS",
    "page": "Docstrings",
    "title": "FunctionalTables.SHOWROWS",
    "category": "constant",
    "text": "Shows this many values from each column in a FunctionalTable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SINKCONFIG",
    "page": "Docstrings",
    "title": "FunctionalTables.SINKCONFIG",
    "category": "constant",
    "text": "Default sink configuration.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SINKVECTORS",
    "page": "Docstrings",
    "title": "FunctionalTables.SINKVECTORS",
    "category": "constant",
    "text": "Sink configuration that collects to vectors.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SinkConfig",
    "page": "Docstrings",
    "title": "FunctionalTables.SinkConfig",
    "category": "type",
    "text": "struct SinkConfig{M}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SortingPolicy",
    "page": "Docstrings",
    "title": "FunctionalTables.SortingPolicy",
    "category": "type",
    "text": "struct SortingPolicy{K}\n\nPolicy for dealing with specified sortings.\n\nSee VerifySorting, TrustSorting, and TrySorting.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.SplitTable",
    "page": "Docstrings",
    "title": "FunctionalTables.SplitTable",
    "category": "type",
    "text": "struct SplitTable{K, T<:FunctionalTable, C<:SinkConfig}\n\nImplements by.\n\nIterator state is a tuple, with\n\nsinks and firstkey, created from the element with a non-matching key,\nitrstate, the iteration state for itr.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.TrustSorting",
    "page": "Docstrings",
    "title": "FunctionalTables.TrustSorting",
    "category": "type",
    "text": "Accept the specified sorting to hold without any checks (except for verifying that column names are valid).\n\nnote: Note\nThis can lead to incorrect results, use cautiously. VerifySorting is recommended instead as it has little overhead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.TrySorting",
    "page": "Docstrings",
    "title": "FunctionalTables.TrySorting",
    "category": "type",
    "text": "Try the specified sorting, then gracefully degrade to a subset of it that holds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.VerifySorting",
    "page": "Docstrings",
    "title": "FunctionalTables.VerifySorting",
    "category": "type",
    "text": "Verify that the specified sorting holds. This is the default sorting policy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.append1",
    "page": "Docstrings",
    "title": "FunctionalTables.append1",
    "category": "function",
    "text": "append1(v, elt)\n\n\nAppend elt to v, allocating a new vector and copying the contents.\n\nType of new collection is calculated using promote_type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.by",
    "page": "Docstrings",
    "title": "FunctionalTables.by",
    "category": "function",
    "text": "by(indexkeys, ft; cfg)\n\n\nAn iterator that groups rows of tables by the columns indexkeys, returning (index::NamedTupe, table::FunctionalTable) for each contiguous block of the index keys.\n\ncfg is used for collecting table.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.cancontain",
    "page": "Docstrings",
    "title": "FunctionalTables.cancontain",
    "category": "function",
    "text": "cancontain(T, elt)\n\n\nTest if a collection of element type T can contain a new element elt without any loss of precision.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.checkvalidkeys",
    "page": "Docstrings",
    "title": "FunctionalTables.checkvalidkeys",
    "category": "function",
    "text": "checkvalidkeys(argkeys, validkeys)\n\n\nCheck that argkeys are a subset of the valid keys.\n\nWhen that does not hold, throw and error with an informative message.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.cmp_sorting",
    "page": "Docstrings",
    "title": "FunctionalTables.cmp_sorting",
    "category": "function",
    "text": "cmp_sorting(cs, a, b)\n\n\nCompare rows a and b, which support the getproperty interface, with the given column sorting.\n\nInternal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.collect_column",
    "page": "Docstrings",
    "title": "FunctionalTables.collect_column",
    "category": "function",
    "text": "collect_column(cfg, itr)\n\n\nCollect results from itr into a sink (using config cfg), then finalize and return the column.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.collect_columns",
    "page": "Docstrings",
    "title": "FunctionalTables.collect_columns",
    "category": "function",
    "text": "columns, sorting = \n\ncollect_columns(cfg, itr, sorting, sortingpolicy)\n\n\nCollect results from itr, which are supposed to be NamedTuples with the same names, into sinks (using config cfg), then finalize and return the NamedTuple of the columns and the sorting (which is ≡ sorting unless sortingpolicy ≡ SortingPolicy(:prefix)).\n\nsorting is ignored when sortingpolicy ≡ SortingPolicy(:accept), otherwise used according to the value of the latter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.column_sorting",
    "page": "Docstrings",
    "title": "FunctionalTables.column_sorting",
    "category": "function",
    "text": "column_sorting(sortspecs)\ncolumn_sorting(sortspecs, colkeys)\n\n\nProcess sorting specifications for columns (an iterable or possibly a ColumnSorting), return a value of type ColumnSorting.\n\nVerify that sort keys are unique. When colkeys is given, verify that the sort keys are a subset of it.\n\nAccepted syntax:\n\n:key, for sorting a column in ascending order\n:key => reverse, for sorting a column in descending order\n\nAll functions which accept sort specs should use this, but the function itself is not part of the API.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.columns",
    "page": "Docstrings",
    "title": "FunctionalTables.columns",
    "category": "function",
    "text": "columns(ft; vector, mutable)\n\n\nReturn the columns in a NamedTuple.\n\nWhen mutable, all columns will be mutable <: AbstractVector, and not share (shallow) structure.\n\nWhen vector, all columns will be <: AbstractVector, but may be immutable or share structure.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.dropkeys",
    "page": "Docstrings",
    "title": "FunctionalTables.dropkeys",
    "category": "function",
    "text": "dropkeys(ftkeys, drop)\n\n\nCheck that drop ⊆ ftkeys, then return ftkeys ∖ drop.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.finalize_sink",
    "page": "Docstrings",
    "title": "FunctionalTables.finalize_sink",
    "category": "function",
    "text": "finalize_sink(?, sink)\n\n\nConvert sink to a column.\n\nsink may share structure with the result and is not supposed to be used for saving any more elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.finalize_sinks",
    "page": "Docstrings",
    "title": "FunctionalTables.finalize_sinks",
    "category": "function",
    "text": "finalize_sinks(cfg, sinks)\n\n\nFinalize a (named) tuple of sinks.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.fuse",
    "page": "Docstrings",
    "title": "FunctionalTables.fuse",
    "category": "function",
    "text": "fuse(f, index, tables)\n\n\nPrepend the index as repeated columns to f(index, tables...).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.make_sink",
    "page": "Docstrings",
    "title": "FunctionalTables.make_sink",
    "category": "function",
    "text": "make_sink(cfg, elt)\n\n\nCreate and return a sink using configuration cfg that stores elt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.make_sinks",
    "page": "Docstrings",
    "title": "FunctionalTables.make_sinks",
    "category": "function",
    "text": "make_sinks(cfg, elts)\n\n\nMake sinks for a (named) tuple pf elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.merge_repeated",
    "page": "Docstrings",
    "title": "FunctionalTables.merge_repeated",
    "category": "function",
    "text": "merge_repeated(index, ft)\n\n\nMake a functional table from index, repeating each value for a column to match the length of ft, then merge the two.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.merge_sorting",
    "page": "Docstrings",
    "title": "FunctionalTables.merge_sorting",
    "category": "function",
    "text": "merge_sorting(cs, otherkeys)\n\n\nCalculate sorting when a table with sorting is merged with a table containing otherkeys, which may replace columns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.narrow",
    "page": "Docstrings",
    "title": "FunctionalTables.narrow",
    "category": "function",
    "text": "narrow(x)\n\n\nConvert the argument to a narrower type if possible without losing precision.\n\nnote: Note\nThis function is not type stable, use only when new container types are determined.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.retained_sorting",
    "page": "Docstrings",
    "title": "FunctionalTables.retained_sorting",
    "category": "function",
    "text": "retained_sorting(cs, a, b)\n\n\nReturn the part of sorting under which a ≤ b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.select",
    "page": "Docstrings",
    "title": "FunctionalTables.select",
    "category": "function",
    "text": "select(ft, keep)\n\n\nselect(ft, keep...) select(ft; drop)\n\nSelect a subset of columns from the table.\n\nselect(ft, keep) and select(ft, keep...) returns the table with the given columns.\n\nselect(ft; drop = keys) is a convenience form for keeping all but the given columns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.select_sorting",
    "page": "Docstrings",
    "title": "FunctionalTables.select_sorting",
    "category": "function",
    "text": "select_sorting(cs, keep)\n\n\nCalculate sorting when only keep keys are kept.\n\nkeep may contain keys not in the sorting, ie those of a FunctionalTable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.sortkey",
    "page": "Docstrings",
    "title": "FunctionalTables.sortkey",
    "category": "function",
    "text": "Accessor for sort key. Internal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.split_namedtuple",
    "page": "Docstrings",
    "title": "FunctionalTables.split_namedtuple",
    "category": "function",
    "text": "split_namedtuple(splitter, nt)\n\n\nSplits a named tuple in two, based on the names in splitter.\n\nReturns two NamedTuples; the first one is ordered as splitter, the second one with the remaining values as in the original argument.\n\njulia> split_namedtuple(NamedTuple{(:a, :c)}, (c = 1, b = 2, a = 3, d = 4))\n((a = 3, c = 1), (b = 2, d = 4))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FunctionalTables.store!_or_reallocate",
    "page": "Docstrings",
    "title": "FunctionalTables.store!_or_reallocate",
    "category": "function",
    "text": "store!_or_reallocate(?, sink, elt)\n\n\nEither store elt in sink (in which case the returned value is ≡ sink), or allocate a new sink that can do this, copy the contents, save elt and return that (then the returned value is ≢ sink).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "FunctionalTables.ColumnSortFunctionalTables.ColumnSortingFunctionalTables.FunctionalTableFunctionalTables.FunctionalTablesFunctionalTables.KeysFunctionalTables.RLEVectorFunctionalTables.RepeatedValueFunctionalTables.SHOWROWSFunctionalTables.SINKCONFIGFunctionalTables.SINKVECTORSFunctionalTables.SinkConfigFunctionalTables.SortingPolicyFunctionalTables.SplitTableFunctionalTables.TrustSortingFunctionalTables.TrySortingFunctionalTables.VerifySortingFunctionalTables._cmp_sortingFunctionalTables._collect_block!FunctionalTables._retained_sortingFunctionalTables._select_sortingFunctionalTables._showcolcontentsFunctionalTables.append1FunctionalTables.byFunctionalTables.cancontainFunctionalTables.checkvalidkeysFunctionalTables.cmp_columnsortFunctionalTables.cmp_sortingFunctionalTables.collect_columnFunctionalTables.collect_column!FunctionalTables.collect_columnsFunctionalTables.collect_columns!FunctionalTables.column_sortingFunctionalTables.columnsFunctionalTables.contiguous_blocksFunctionalTables.dropkeysFunctionalTables.evalFunctionalTables.finalize_sinkFunctionalTables.finalize_sinksFunctionalTables.fuseFunctionalTables.getsortingFunctionalTables.includeFunctionalTables.isless_sortingFunctionalTables.make_sinkFunctionalTables.make_sinksFunctionalTables.merge_repeatedFunctionalTables.merge_sortingFunctionalTables.narrowFunctionalTables.retained_sortingFunctionalTables.selectFunctionalTables.select_sortingFunctionalTables.sort_in_memoryFunctionalTables.sortkeyFunctionalTables.split_namedtupleFunctionalTables.store!_or_reallocate"
},

]}
