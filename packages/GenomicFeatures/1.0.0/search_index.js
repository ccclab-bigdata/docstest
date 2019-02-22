var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#GenomicFeatures.jl-1",
    "page": "Home",
    "title": "GenomicFeatures.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Description-1",
    "page": "Home",
    "title": "Description",
    "category": "section",
    "text": "GenomicFeatures.jl provides genomic interval arithmetic, data structures, and I/O tools for various data formats including BED, GFF3, bigWig, and bigBed."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Install GenomicFeatures from the Julia REPL:julia> Pkg.add(\"GenomicFeatures\")If you are interested in the cutting edge of the development, please check out the master branch to try new features before release."
},

{
    "location": "intervals/#",
    "page": "Intervals",
    "title": "Intervals",
    "category": "page",
    "text": ""
},

{
    "location": "intervals/#Genomic-Interval-Manipulation-1",
    "page": "Intervals",
    "title": "Genomic Interval Manipulation",
    "category": "section",
    "text": "The GenomicFeatures module consists of tools for working efficiently with genomic intervals."
},

{
    "location": "intervals/#Interval-type-1",
    "page": "Intervals",
    "title": "Interval type",
    "category": "section",
    "text": "Intervals in GenomicFeatures.jl are consistent with ranges in Julia: 1-based and end-inclusive. When data is read from formats with different representations (i.e. 0-based and/or end-exclusive) they are always converted automatically.  Similarly when writing data. You should not have to reason about off-by-one errors due to format differences while using functionality provided in GenomicFeatures.jl.The Interval type is defined asstruct Interval{T} <: AbstractInterval{Int64}\n    seqname::String\n    first::Int64\n    last::Int64\n    strand::Strand\n    metadata::T\nendThe first three fields (seqname, first, and last) are mandatory arguments when constructing an Interval object. seqname is the sequence name associated with the interval. The first and last fields are the leftmost and rightmost positions of the interval, which can be accessed with leftposition and rightposition functions, respectively.The strand field can take four kinds of values listed in the next table:Symbol Constant Meaning\n\'?\' STRAND_NA strand is unknown or inapplicable\n\'+\' STRAND_POS positive strand\n\'-\' STRAND_NEG negative strand\n\'.\' STRAND_BOTH non-strand-specific featureInterval is parameterized on metadata type, which lets it efficiently and precisely be specialized to represent intervals from a variety of formats.The default strand and metadata value are STRAND_BOTH and nothing:julia> Interval(\"chr1\", 10000, 20000)\nGenomicFeatures.Interval{Void}:\n  sequence name: chr1\n  leftmost position: 10000\n  rightmost position: 20000\n  strand: .\n  metadata: nothing\n\njulia> Interval(\"chr1\", 10000, 20000, \'+\')\nGenomicFeatures.Interval{Void}:\n  sequence name: chr1\n  leftmost position: 10000\n  rightmost position: 20000\n  strand: +\n  metadata: nothing\nThe following example shows all accessor functions for the five fields:julia> i = Interval(\"chr1\", 10000, 20000, \'+\', \"some annotation\")\nGenomicFeatures.Interval{String}:\n  sequence name: chr1\n  leftmost position: 10000\n  rightmost position: 20000\n  strand: +\n  metadata: some annotation\n\njulia> seqname(i)\n\"chr1\"\n\njulia> leftposition(i)\n10000\n\njulia> rightposition(i)\n20000\n\njulia> strand(i)\nSTRAND_POS\n\njulia> metadata(i)\n\"some annotation\"\n"
},

{
    "location": "intervals/#Collections-of-intervals-1",
    "page": "Intervals",
    "title": "Collections of intervals",
    "category": "section",
    "text": "Collections of intervals are represented using the IntervalCollection type, which is a general purpose indexed container for intervals. It supports fast intersection operations as well as insertion, deletion, and sorted iteration.Interval collections can be initialized by inserting elements one by one using push!.# The type parameter (Void here) indicates the interval metadata type.\ncol = IntervalCollection{Void}()\n\nfor i in 1:100:10000\n    push!(col, Interval(\"chr1\", i, i + 99))\nendIncrementally building an interval collection like this works, but IntervalCollection also has a bulk insertion constructor that is able to build the indexed data structure extremely efficiently from an array of intervals.col = IntervalCollection([Interval(\"chr1\", i, i + 99) for i in 1:100:10000])Bulding IntervalCollections in one shot like this should be preferred when it\'s convenient or speed in an issue.IntervalCollections can also be build directly from a genome annotation file, here in GFF3 format:reader = open(GFF3.Reader, \"some_genome.gff3\")\nfeatures = IntervalCollection(reader)"
},

{
    "location": "intervals/#GenomicFeatures.eachoverlap",
    "page": "Intervals",
    "title": "GenomicFeatures.eachoverlap",
    "category": "function",
    "text": "eachoverlap(intervals_a, intervals_b, [seqname_isless=Base.isless])\n\nCreate an iterator of overlapping intervals between intervals_a and intervals_b.\n\nThis function assumes elements of intervals_a and intervals_b are sorted by its sequence name and left position.  If the element type is not a subtype of GenomicFeatures.Interval, elements are converted to Interval objects.\n\nThe third optional argument is a function that defines the order of sequence names. The default function is Base.isless, which is the lexicographical order.\n\n\n\n\n\n"
},

{
    "location": "intervals/#Overlap-query-1",
    "page": "Intervals",
    "title": "Overlap query",
    "category": "section",
    "text": "There are number of eachoverlap function in the GenomicFeatures module. They follow two patterns: interval versus collection queries which return an iterator over intervals in the collection that overlap the query, and collection versus collection queries which iterate over all pairs of overlapping intervals.eachoverlapThe order of interval pairs is the same as the following nested loop but eachoverlap is often much faster:for a in intervals_a, b in intervals_b\n    if isoverlapping(a, b)\n        # do something...\n    end\nend"
},

{
    "location": "intervals/#GenomicFeatures.coverage",
    "page": "Intervals",
    "title": "GenomicFeatures.coverage",
    "category": "function",
    "text": "coverage(intervals)\n\nCompute the coverage of a collection of intervals and return an IntervalCollection that contains run-length encoded coverage data.\n\nFor example, given intervals like:\n\n[------]     [------------]\n   [---------------]\n\nThis function would return a new set of disjoint intervals with annotated coverage like:\n\n[1][-2-][-1-][--2--][--1--]\n\n\n\n\n\n"
},

{
    "location": "intervals/#Interval-streams-1",
    "page": "Intervals",
    "title": "Interval streams",
    "category": "section",
    "text": "Intervals need not necessarily stored in an indexed data structure for efficient intersection to be practical. Two collections of intervals need only be both sorted to compute all overlapping pairs. This is particularly useful in genomics where datasets are sometimes so large that loading them entirely into memory is not practical.The GenomicFeatures module is able to intersect any two iterators that yield intervals in sorted order, which we refer to as \"interval streams\". An IntervalCollection is also an interval stream, but so is a sorted array of intervals, and parsers over interval file formats. This allows for a very general notion of intersection.features_x = open(BED.Reader, \"features_x.bed\")\nfeatures_y = open(BED.Reader, \"features_y.bed\")\nfor (x, y) in eachoverlap(features_x, features_y)\n    println(\"intersection found between \", x, \" and \", y)\nend\nclose(features_x)\nclose(features_y)An exception will be thrown if an interval in encountered out of order while processing an interval stream. Ordering of intervals has one complication: there is not necessarily a standardized way to order sequence names. By default in GenomicFeatures.jl intervals are sorted using a Base.isless comparison function that is a default order in most command-line tools.A special sort of intersection can also be performed on an interval stream against itself to produce \"coverage intervals\".coverage"
},

{
    "location": "io/bed/#",
    "page": "BED",
    "title": "BED",
    "category": "page",
    "text": ""
},

{
    "location": "io/bed/#BED-1",
    "page": "BED",
    "title": "BED",
    "category": "section",
    "text": ""
},

{
    "location": "io/bed/#Description-1",
    "page": "BED",
    "title": "Description",
    "category": "section",
    "text": "BED is a text-based file format for representing genomic annotations like genes, transcripts, and so on. A BED file has tab-delimited and variable-length fields; the first three fields denoting a genomic interval are mandatory.This is an example of RNA transcripts:chr9	68331023	68424451	NM_015110	0	+\nchr9	68456943	68486659	NM_001206	0	-I/O tools for BED are provided from the GenomicFeatures.BED module, which exports following three types:Reader type: BED.Reader\nWriter type: BED.Writer\nElement type: BED.Record"
},

{
    "location": "io/bed/#Examples-1",
    "page": "BED",
    "title": "Examples",
    "category": "section",
    "text": "Here is a common workflow to iterate over all records in a BED file:# Import the BED module.\nusing GenomicFeatures\n\n# Open a BED file.\nreader = open(BED.Reader, \"data.bed\")\n\n# Iterate over records.\nfor record in reader\n    # Do something on record (see Accessors section).\n    chrom = BED.chrom(record)\n    # ...\nend\n\n# Finally, close the reader.\nclose(reader)If you repeatedly access records within specific ranges, it would be more efficient to construct an IntervalCollection object from a BED reader:# Create an interval collection in memory.\nicol = open(BED.Reader, \"data.bed\") do reader\n    IntervalCollection(reader)\nend\n\n# Query overlapping records.\nfor interval in eachoverlap(icol, Interval(\"chrX\", 40001, 51500))\n    # A record is stored in the metadata field of an interval.\n    record = metadata(interval)\n    # ...\nend"
},

{
    "location": "io/bed/#GenomicFeatures.BED.Reader",
    "page": "BED",
    "title": "GenomicFeatures.BED.Reader",
    "category": "type",
    "text": "BED.Reader(input::IO; index=nothing)\nBED.Reader(input::AbstractString; index=:auto)\n\nCreate a data reader of the BED file format.\n\nThe first argument specifies the data source. When it is a filepath that ends with .bgz, it is considered to be block compression file format (BGZF) and the function will try to find a tabix index file (<filename>.tbi) and read it if any. See http://www.htslib.org/doc/tabix.html for bgzip and tabix tools.\n\nArguments\n\ninput: data source\nindex: path to a tabix file\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.Writer",
    "page": "BED",
    "title": "GenomicFeatures.BED.Writer",
    "category": "type",
    "text": "BED.Writer(output::IO)\n\nCreate a data writer of the BED file format.\n\nArguments:\n\noutput: data sink\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.Record",
    "page": "BED",
    "title": "GenomicFeatures.BED.Record",
    "category": "type",
    "text": "BED.Record()\n\nCreate an unfilled BED record.\n\n\n\n\n\nBED.Record(data::Vector{UInt8})\n\nCreate a BED record object from data.\n\nThis function verifies and indexes fields for accessors. Note that the ownership of data is transferred to a new record object.\n\n\n\n\n\nBED.Record(str::AbstractString)\n\nCreate a BED record object from str.\n\nThis function verifies and indexes fields for accessors.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.chrom",
    "page": "BED",
    "title": "GenomicFeatures.BED.chrom",
    "category": "function",
    "text": "chrom(record::Record)::String\n\nGet the chromosome name of record.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.chromstart",
    "page": "BED",
    "title": "GenomicFeatures.BED.chromstart",
    "category": "function",
    "text": "chromstart(record::Record)::Int\n\nGet the starting position of record.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.chromend",
    "page": "BED",
    "title": "GenomicFeatures.BED.chromend",
    "category": "function",
    "text": "chromend(record::Record)::Int\n\nGet the end position of record.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.name",
    "page": "BED",
    "title": "GenomicFeatures.BED.name",
    "category": "function",
    "text": "name(record::Record)::String\n\nGet the name of record.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.score",
    "page": "BED",
    "title": "GenomicFeatures.BED.score",
    "category": "function",
    "text": "score(record::Record)::Int\n\nGet the score between 0 and 1000.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.strand",
    "page": "BED",
    "title": "GenomicFeatures.BED.strand",
    "category": "function",
    "text": "strand(record::Record)::GenomicFeatures.Strand\n\nGet the strand of record.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.thickstart",
    "page": "BED",
    "title": "GenomicFeatures.BED.thickstart",
    "category": "function",
    "text": "thickstart(record::Record)::Int\n\nGet the starting position at which record is drawn thickly.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.thickend",
    "page": "BED",
    "title": "GenomicFeatures.BED.thickend",
    "category": "function",
    "text": "thickend(record::Record)::Int\n\nGet the end position at which record is drawn thickly.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.itemrgb",
    "page": "BED",
    "title": "GenomicFeatures.BED.itemrgb",
    "category": "function",
    "text": "itemrgb(record::Record)::ColorTypes.RGB\n\nGet the RGB value of record.\n\nThe return type is defined in ColorTypes.jl.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.blockcount",
    "page": "BED",
    "title": "GenomicFeatures.BED.blockcount",
    "category": "function",
    "text": "blockcount(record::Record)::Int\n\nGet the number of blocks (exons) in record.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.blocksizes",
    "page": "BED",
    "title": "GenomicFeatures.BED.blocksizes",
    "category": "function",
    "text": "blocksizes(record::Record)::Vector{Int}\n\nGet the block (exon) sizes of record.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#GenomicFeatures.BED.blockstarts",
    "page": "BED",
    "title": "GenomicFeatures.BED.blockstarts",
    "category": "function",
    "text": "blockstarts(record::Record)::Vector{Int}\n\nGet the block (exon) starts of record.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n"
},

{
    "location": "io/bed/#API-1",
    "page": "BED",
    "title": "API",
    "category": "section",
    "text": "GenomicFeatures.BED.Reader\nGenomicFeatures.BED.Writer\nGenomicFeatures.BED.Record\nGenomicFeatures.BED.chrom\nGenomicFeatures.BED.chromstart\nGenomicFeatures.BED.chromend\nGenomicFeatures.BED.name\nGenomicFeatures.BED.score\nGenomicFeatures.BED.strand\nGenomicFeatures.BED.thickstart\nGenomicFeatures.BED.thickend\nGenomicFeatures.BED.itemrgb\nGenomicFeatures.BED.blockcount\nGenomicFeatures.BED.blocksizes\nGenomicFeatures.BED.blockstarts"
},

{
    "location": "io/gff3/#",
    "page": "GFF3",
    "title": "GFF3",
    "category": "page",
    "text": ""
},

{
    "location": "io/gff3/#GFF3-1",
    "page": "GFF3",
    "title": "GFF3",
    "category": "section",
    "text": ""
},

{
    "location": "io/gff3/#Description-1",
    "page": "GFF3",
    "title": "Description",
    "category": "section",
    "text": "GFF3 is a text-based file format for representing genomic annotations. The major difference from BED is that GFF3 is more structured and can include sequences in the FASTA file format.I/O tools for GFF3 are provided from the GenomicFeatures.GFF3 module, which exports following three types:Reader type: GFF3.Reader\nWriter type: GFF3.Writer\nElement type: GFF3.RecordA GFF3 file may contain directives and/or comments in addition to genomic features. These lines are skipped by default but you can control the behavior by passing keyword arguments to GFF3.Reader. See the docstring for details."
},

{
    "location": "io/gff3/#Examples-1",
    "page": "GFF3",
    "title": "Examples",
    "category": "section",
    "text": "Here is a common workflow to iterate over all records in a GFF3 file:# Import the GFF3 module.\nusing GenomicFeatures\n\n# Open a GFF3 file.\nreader = open(GFF3.Reader, \"data.gff3\")\n\n# Iterate over records.\nfor record in reader\n    # Do something on record (see Accessors section).\n    seqid = GFF3.seqid(reader)\n    # ...\nend\n\n# Finally, close the reader\nclose(reader)If you are interested in directives (which starts with \'#\') in addition to genomic features, you need to pass skip_directives=false when initializing a GFF3 constructor:# Set skip_directives to true (this is set to false by default).\nreader = GFF3.Reader(open(\"data.gff3\"), skip_directives=false)\nfor record in record\n    # Branch by record type.\n    if GFF3.isfeature(record)\n        # ...\n    elseif GFF3.isdirective(record)\n        # ...\n    else\n        # This never happens.\n        assert(false)\n    end\nend\nclose(reader)GenomicFeatures.jl supports tabix to retrieve records overlapping with a specific interval. First you need to create a block compression file from a GFF3 file using bgzip and then index it using tabix.cat data.gff3 | grep -v \"^#\" | sort -k1,1 -k4,4n | bgzip >data.gff3.bgz\ntabix data.gff3.bgz  # this creates data.gff3.bgz.tbiThen you can read the block compression file as follows:# Read the block compression gzip file.\nreader = GFF3.Reader(\"data.gff3.bgz\")\nfor record in eachoverlap(reader, Interval(\"chr1\", 250_000, 300_000))\n    # Each record overlap the query interval.\n    # ...\nend"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.Reader",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.Reader",
    "category": "type",
    "text": "GFF3.Reader(input::IO;\n            index=nothing,\n            save_directives::Bool=false,\n            skip_features::Bool=false,\n            skip_directives::Bool=true,\n            skip_comments::Bool=true)\n\nGFF3.Reader(input::AbstractString;\n            index=:auto,\n            save_directives::Bool=false,\n            skip_features::Bool=false,\n            skip_directives::Bool=true,\n            skip_comments::Bool=true)\n\nCreate a reader for data in GFF3 format.\n\nThe first argument specifies the data source. When it is a filepath that ends with .bgz, it is considered to be block compression file format (BGZF) and the function will try to find a tabix index file (<filename>.tbi) and read it if any. See http://www.htslib.org/doc/tabix.html for bgzip and tabix tools.\n\nArguments\n\ninput: data source (IO object or filepath)\nindex: path to a tabix file\nsave_directives: flag to save directive records (which can be accessed with GFF3.directives)\nskip_features: flag to skip feature records\nskip_directives: flag to skip directive records\nskip_comments:  flag to skip comment records\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.directives",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.directives",
    "category": "function",
    "text": "Return all directives that preceded the last GFF entry parsed as an array of strings.\n\nDirectives at the end of the file can be accessed by calling close(reader) and then directives(reader).\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.hasfasta",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.hasfasta",
    "category": "function",
    "text": "Return true if the GFF3 stream is at its end and there is trailing FASTA data.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.getfasta",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.getfasta",
    "category": "function",
    "text": "Return a BioSequences.FASTA.Reader initialized to parse trailing FASTA data.\n\nThrows an exception if there is no trailing FASTA, which can be checked using hasfasta.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.Writer",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.Writer",
    "category": "type",
    "text": "GFF3.Writer(output::IO)\n\nCreate a data writer of the GFF3 file format.\n\nArguments:\n\noutput: data sink\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.Record",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.Record",
    "category": "type",
    "text": "GFF3.Record()\n\nCreate an unfilled GFF3 record.\n\n\n\n\n\nGFF3.Record(data::Vector{UInt8})\n\nCreate a GFF3 record object from data. This function verifies and indexes fields for accessors. Note that the ownership of data is transferred to a new record object.\n\n\n\n\n\nGFF3.Record(str::AbstractString)\n\nCreate a GFF3 record object from str. This function verifies and indexes fields for accessors.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.isfeature",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.isfeature",
    "category": "function",
    "text": "isfeature(record::Record)::Bool\n\nTest if record is a feature record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.isdirective",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.isdirective",
    "category": "function",
    "text": "isdirective(record::Record)::Bool\n\nTest if record is a directive record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.iscomment",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.iscomment",
    "category": "function",
    "text": "iscomment(record::Record)::Bool\n\nTest if record is a comment record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.seqid",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.seqid",
    "category": "function",
    "text": "seqid(record::Record)::String\n\nGet the sequence ID of record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.source",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.source",
    "category": "function",
    "text": "source(record::Record)::String\n\nGet the source of record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.featuretype",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.featuretype",
    "category": "function",
    "text": "featuretype(record::Record)::String\n\nGet the type of record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.seqstart",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.seqstart",
    "category": "function",
    "text": "seqstart(record::Record)::Int\n\nGet the start coordinate of record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.seqend",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.seqend",
    "category": "function",
    "text": "seqend(record::Record)::Int\n\nGet the end coordinate of record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.score",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.score",
    "category": "function",
    "text": "score(record::Record)::Float64\n\nGet the score of record\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.strand",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.strand",
    "category": "function",
    "text": "strand(record::Record)::GenomicFeatures.Strand\n\nGet the strand of record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.phase",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.phase",
    "category": "function",
    "text": "phase(record::Record)::Int\n\nGet the phase of record.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.attributes",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.attributes",
    "category": "function",
    "text": "attributes(record::Record)::Vector{Pair{String,Vector{String}}}\n\nGet the attributes of record.\n\n\n\n\n\nattributes(record::Record, key::String)::Vector{String}\n\nGet the attributes of record with key.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#GenomicFeatures.GFF3.content",
    "page": "GFF3",
    "title": "GenomicFeatures.GFF3.content",
    "category": "function",
    "text": "content(record::Record)::String\n\nGet the content of record. Leading \'#\' letters are removed.\n\n\n\n\n\n"
},

{
    "location": "io/gff3/#API-1",
    "page": "GFF3",
    "title": "API",
    "category": "section",
    "text": "GenomicFeatures.GFF3.Reader\nGenomicFeatures.GFF3.directives\nGenomicFeatures.GFF3.hasfasta\nGenomicFeatures.GFF3.getfasta\nGenomicFeatures.GFF3.Writer\nGenomicFeatures.GFF3.Record\nGenomicFeatures.GFF3.isfeature\nGenomicFeatures.GFF3.isdirective\nGenomicFeatures.GFF3.iscomment\nGenomicFeatures.GFF3.seqid\nGenomicFeatures.GFF3.source\nGenomicFeatures.GFF3.featuretype\nGenomicFeatures.GFF3.seqstart\nGenomicFeatures.GFF3.seqend\nGenomicFeatures.GFF3.score\nGenomicFeatures.GFF3.strand\nGenomicFeatures.GFF3.phase\nGenomicFeatures.GFF3.attributes\nGenomicFeatures.GFF3.content"
},

{
    "location": "io/bigwig/#",
    "page": "BigWig",
    "title": "BigWig",
    "category": "page",
    "text": ""
},

{
    "location": "io/bigwig/#bigWig-1",
    "page": "BigWig",
    "title": "bigWig",
    "category": "section",
    "text": ""
},

{
    "location": "io/bigwig/#Description-1",
    "page": "BigWig",
    "title": "Description",
    "category": "section",
    "text": "bigWig is a binary file format for associating a floating point number with each base in the genome. bigWig files are indexed to quickly fetch specific regions.I/O tools for bigWig are provided from the GenomicFeatures.BigWig module, which exports following three types:Reader type: BigWig.Reader\nWriter type: BigWig.Writer\nElement type: BigWig.Record"
},

{
    "location": "io/bigwig/#Examples-1",
    "page": "BigWig",
    "title": "Examples",
    "category": "section",
    "text": "A common workflow is to open a file, iterate over records, and close the file:# Import the BigWig module.\nusing GenomicFeatures\n\n# Open a bigWig file (e.g. mapping depth or coverage).\nreader = open(BigWig.Reader, \"data.cov.bw\")\n\n# Iterate over records overlapping with a query interval.\nfor record in eachoverlap(reader, Interval(\"Chr2\", 5001, 6000))\n    # Extract the start position, end position and value of the record,\n    startpos = BigWig.chromstart(record)\n    endpos = BigWig.chromend(record)\n    value = BigWig.value(record)\n    # and do something...\nend\n\n# Finally, close the reader.\nclose(reader)BigWig.values is a handy function that returns a vector of values. This returns a value per position within the query region:# Get values in Chr2:5001-6000 as a vector of 1000 elements.\nBigWig.values(reader, Interval(\"Chr2\", 5001, 6000))Iterating over all records is also supported:reader = open(BigWig.Reader, \"data.cov.bw\")\nfor record in reader\n    # ...\nend\nclose(reader)Creating a bigWig can be written as follows:# Open an output file.\nfile = open(\"data.cov.bw\", \"w\")\n\n# Initialize a bigWig writer.\nwriter = BigWig.Writer(file, [(\"chr1\", 2000), (\"chr2\", 1000)])\n\n# Write records.\nwrite(writer, (\"chr1\",   1, 100, 1.0))\nwrite(writer, (\"chr1\", 101, 200, 2.1))\n# ...\nwrite(writer, (\"chr2\",  51, 150, 3.2))\n\n# Close the writer (this closes the file, too).\nclose(writer)"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.Reader",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.Reader",
    "category": "type",
    "text": "BigWig.Reader(input::IO)\n\nCreate a reader for bigWig file format.\n\nNote that input must be seekable.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.chromlist",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.chromlist",
    "category": "function",
    "text": "chromlist(reader::BigWig.Reader)::Vector{Tuple{String,Int}}\n\nGet the (name, length) pairs of chromosomes/contigs.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.values",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.values",
    "category": "function",
    "text": "values(reader::BigWig.Reader, interval::Interval)::Vector{Float32}\n\nGet a vector of values within interval from reader.\n\nThis function fills missing values with NaN32.\n\n\n\n\n\nvalues(reader::BigWig.Reader, chrom::AbstractString, range::UnitRange)::Vector{Float32}\n\nGet a vector of values within range of chrom from reader.\n\nThis function fills missing values with NaN32.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.Writer",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.Writer",
    "category": "type",
    "text": "BigWig.Writer(output::IO, chromlist; binsize=64, datatype=:bedgraph)\n\nCreate a data writer of the bigWig file format.\n\nArguments\n\noutput: data sink\nchromlist: chromosome list with length\nbinsize=64: size of a zoom with the highest resolution\ndatatype=:bedgraph: encoding of values (:bedgraph, :varstep or :fixedstep)\n\nExamples\n\noutput = open(\"data.bw\", \"w\")\nwriter = BigWig.Writer(output, [(\"chr1\", 12345), (\"chr2\", 9100)])\nwrite(writer, (\"chr1\", 501, 600, 1.0))\nwrite(writer, (\"chr2\", 301, 450, 3.0))\nclose(writer)\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.Record",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.Record",
    "category": "type",
    "text": "BigWig.Record()\n\nCreate an unfilled bigWig record.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.chrom",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.chrom",
    "category": "function",
    "text": "chrom(record::Record)::String\n\nGet the chromosome name of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.chromid",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.chromid",
    "category": "function",
    "text": "chromid(record::Record)::UInt32\n\nGet the chromosome ID of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.chromstart",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.chromstart",
    "category": "function",
    "text": "chromstart(record::Record)::Int\n\nGet the start position of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.chromend",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.chromend",
    "category": "function",
    "text": "chromend(record::Record)::Int\n\nGet the end position of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#GenomicFeatures.BigWig.value",
    "page": "BigWig",
    "title": "GenomicFeatures.BigWig.value",
    "category": "function",
    "text": "value(record::Record)::Float32\n\nGet the value of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigwig/#API-1",
    "page": "BigWig",
    "title": "API",
    "category": "section",
    "text": "GenomicFeatures.BigWig.Reader\nGenomicFeatures.BigWig.chromlist\nGenomicFeatures.BigWig.values\nGenomicFeatures.BigWig.Writer\nGenomicFeatures.BigWig.Record\nGenomicFeatures.BigWig.chrom\nGenomicFeatures.BigWig.chromid\nGenomicFeatures.BigWig.chromstart\nGenomicFeatures.BigWig.chromend\nGenomicFeatures.BigWig.value"
},

{
    "location": "io/bigbed/#",
    "page": "BigBed",
    "title": "BigBed",
    "category": "page",
    "text": ""
},

{
    "location": "io/bigbed/#bigBed-1",
    "page": "BigBed",
    "title": "bigBed",
    "category": "section",
    "text": "Description –––––-bigBed is a binary file format for representing genomic annotations and often created from BED files. bigBed files are indexed to quickly fetch specific regions.I/O tools for bigBed are provided from the GenomicFeatures.BigBed module, which exports following three types:Reader type: BigBed.Reader\nWritre type: BigBed.Writer\nElement type: BigBed.Record"
},

{
    "location": "io/bigbed/#Examples-1",
    "page": "BigBed",
    "title": "Examples",
    "category": "section",
    "text": "A common workflow is to open a file, iterate over records, and close the file:# Import the BigBed module.\nusing GenomicFeatures\n\n# Open a bigBed file.\nreader = open(BigBed.Reader, \"data.bb\")\n\n# Iterate over records overlapping with a query interval.\nfor record in eachoverlap(reader, Interval(\"Chr2\", 5001, 6000))\n    # Extract the start position, end position and value of the record,\n    startpos = BigBed.chromstart(record)\n    endpos = BigBed.chromend(record)\n    value = BigBed.value(record)\n    # and do something...\nend\n\n# Finally, close the reader.\nclose(reader)Iterating over all records is also supported:reader = open(BigBed.Reader, \"data.bb\")\nfor record in reader\n    # ...\nend\nclose(reader)Creating a bigBed file can be done as follows. The write call takes a tuple of 3-12 elements (i.e. chromosome name, start position, end position, name, score, strand, thickstart, thickend, RGB color, blockcount, blocksizes and blockstarts). The first three are mandatory fields but others are optional.# Import RGB type.\nusing ColorTypes\nfile = open(\"data.bb\", \"w\")\nwriter = BigBed.Writer(file, [(\"chr1\", 1000)])\nwrite(writer, (\"chr1\", 1, 100, \"some name\", 100, \'+\', 10, 90, RGB(0.5, 0.1, 0.2), 2, [4, 10], [10, 20]))\nclose(writer)"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.Reader",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.Reader",
    "category": "type",
    "text": "BigBed.Reader(input::IO)\n\nCreate a reader for bigBed file format.\n\nNote that input must be seekable.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.chromlist",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.chromlist",
    "category": "function",
    "text": "chromlist(reader::BigBed.Reader)::Vector{Tuple{String,Int}}\n\nGet the (name, length) pairs of chromosomes/contigs.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.Writer",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.Writer",
    "category": "type",
    "text": "BigBed.Writer(output::IO, chromlist; binsize=64)\n\nCreate a data writer of the bigBed file format.\n\nArguments\n\noutput: data sink\nchromlist: chromosome list with length\nbinsize=64: size of a zoom with the highest resolution\n\nExamples\n\noutput = open(\"data.bb\", \"w\")\nwriter = BigBed.Writer(output, [(\"chr1\", 12345), (\"chr2\", 9100)])\nwrite(writer, (\"chr1\", 101, 150, \"gene 1\"))\nwrite(writer, (\"chr2\", 211, 250, \"gene 2\"))\nclose(writer)\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.Record",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.Record",
    "category": "type",
    "text": "BigBed.Record()\n\nCreate an unfilled bigBed record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.chrom",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.chrom",
    "category": "function",
    "text": "chrom(record::Record)::String\n\nGet the chromosome name of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.chromid",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.chromid",
    "category": "function",
    "text": "chromid(record::Record)::UInt32\n\nGet the chromosome ID of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.chromstart",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.chromstart",
    "category": "function",
    "text": "chromstart(record::Record)::Int\n\nGet the start position of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.chromend",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.chromend",
    "category": "function",
    "text": "chromend(record::Record)::Int\n\nGet the end position of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.name",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.name",
    "category": "function",
    "text": "name(record::Record)::String\n\nGet the name of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.score",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.score",
    "category": "function",
    "text": "score(record::Record)::Int\n\nGet the score between 0 and 1000.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.strand",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.strand",
    "category": "function",
    "text": "strand(record::Record)::GenomicFeatures.Strand\n\nGet the strand of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.thickstart",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.thickstart",
    "category": "function",
    "text": "thickstart(record::Record)::Int\n\nGet the starting position at which record is drawn thickly.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.thickend",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.thickend",
    "category": "function",
    "text": "thickend(record::Record)::Int\n\nGet the end position at which record is drawn thickly.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.itemrgb",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.itemrgb",
    "category": "function",
    "text": "itemrgb(record::Record)::ColorTypes.RGB\n\nGet the RGB value of record.\n\nThe return type is defined in ColorTypes.jl.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.blockcount",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.blockcount",
    "category": "function",
    "text": "blockcount(record::Record)::Int\n\nGet the number of blocks (exons) in record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.blocksizes",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.blocksizes",
    "category": "function",
    "text": "blocksizes(record::Record)::Vector{Int}\n\nGet the block (exon) sizes of record.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.blockstarts",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.blockstarts",
    "category": "function",
    "text": "blockstarts(record::Record)::Vector{Int}\n\nGet the block (exon) starts of record.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#GenomicFeatures.BigBed.optionals",
    "page": "BigBed",
    "title": "GenomicFeatures.BigBed.optionals",
    "category": "function",
    "text": "optionals(record::Record)::Vector{String}\n\nGet optional fields as strings.\n\n\n\n\n\n"
},

{
    "location": "io/bigbed/#API-1",
    "page": "BigBed",
    "title": "API",
    "category": "section",
    "text": "GenomicFeatures.BigBed.Reader\nGenomicFeatures.BigBed.chromlist\nGenomicFeatures.BigBed.Writer\nGenomicFeatures.BigBed.Record\nGenomicFeatures.BigBed.chrom\nGenomicFeatures.BigBed.chromid\nGenomicFeatures.BigBed.chromstart\nGenomicFeatures.BigBed.chromend\nGenomicFeatures.BigBed.name\nGenomicFeatures.BigBed.score\nGenomicFeatures.BigBed.strand\nGenomicFeatures.BigBed.thickstart\nGenomicFeatures.BigBed.thickend\nGenomicFeatures.BigBed.itemrgb\nGenomicFeatures.BigBed.blockcount\nGenomicFeatures.BigBed.blocksizes\nGenomicFeatures.BigBed.blockstarts\nGenomicFeatures.BigBed.optionals"
},

]}
