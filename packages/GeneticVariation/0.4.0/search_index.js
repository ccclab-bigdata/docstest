var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#GeneticVariation-1",
    "page": "Home",
    "title": "GeneticVariation",
    "category": "section",
    "text": "(Image: Latest Release) (Image: MIT License) (Image: Stable documentation) (Image: Latest documentation) (Image: Lifecycle) (Image: Chat on Discord)"
},

{
    "location": "#Description-1",
    "page": "Home",
    "title": "Description",
    "category": "section",
    "text": "GeneticVariation provides types and methods for working with datasets of genetic variation. It provides a VCF and BCF parser, as well as methods for working with variation in sequences such as evolutionary distance computation, and counting different mutation types."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Install GeneticVariation from the Julia REPL:using Pkg\nadd(\"GeneticVariation\")\n# Pkg.add(\"GeneticVariation\") for julia prior to v0.7If you are interested in the cutting edge of the development, please check out the master branch to try new features before release."
},

{
    "location": "#Testing-1",
    "page": "Home",
    "title": "Testing",
    "category": "section",
    "text": "GeneticVariation is tested against julia 0.6 and 0.7-dev on Linux, OS X, and Windows.PackageEvaluator Latest Build Status\n(Image: ) (Image: ) (Image: ) (Image: ) (Image: )"
},

{
    "location": "#Contributing-1",
    "page": "Home",
    "title": "Contributing",
    "category": "section",
    "text": "We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.Take a look at the CONTRIBUTING file provided with every BioJulia package package for detailed contributor and maintainer guidelines."
},

{
    "location": "#Financial-contributions-1",
    "page": "Home",
    "title": "Financial contributions",
    "category": "section",
    "text": "We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development of the community, it will be \"merged\" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed."
},

{
    "location": "#Backers-and-Sponsors-1",
    "page": "Home",
    "title": "Backers & Sponsors",
    "category": "section",
    "text": "Thank you to all our backers and sponsors!Love our work and community? Become a backer.(Image: backers)Does your company use BioJulia? Help keep BioJulia feature rich and healthy by sponsoring the project Your logo will show up here with a link to your website.(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )"
},

{
    "location": "#Questions?-1",
    "page": "Home",
    "title": "Questions?",
    "category": "section",
    "text": "If you have a question about contributing or using BioJulia software, come on over and chat to us on Discord, or you can try the Bio category of the Julia discourse site."
},

{
    "location": "man/io/vcf-bcf/#",
    "page": "VCF and BCF formatted files",
    "title": "VCF and BCF formatted files",
    "category": "page",
    "text": "CurrentModule = GeneticVariation\nDocTestSetup = quote\n    using GeneticVariation\nend"
},

{
    "location": "man/io/vcf-bcf/#VCF-and-BCF-Formatted-files-1",
    "page": "VCF and BCF formatted files",
    "title": "VCF and BCF Formatted files",
    "category": "section",
    "text": "VCF is a text-based file format for representing genetic polymorphism.VCF files can be read using VCFReader, respectively:reader = VCF.Reader(open(\"example.vcf\", \"r\"))\nfor record in reader\n    # do something\nend\nclose(reader)A reader first reads the header section of a file and creates a VCF.Header object. The header function is provided to access the header object of a reader:julia> header(reader)\nGeneticVariation.VCF.Header:\n  metainfo tags: fileformat fileDate source reference contig phasing INFO FILTER FORMAT\n     sample IDs: NA00001 NA00002 NA00003\n\njulia> findall(header(reader), \"FORMAT\")\n4-element Array{GeneticVariation.VCF.MetaInfo,1}:\n GeneticVariation.VCF.MetaInfo:\n    tag: FORMAT\n  value: ID=\"GT\" Number=\"1\" Type=\"String\" Description=\"Genotype\"          \n GeneticVariation.VCF.MetaInfo:\n    tag: FORMAT\n  value: ID=\"GQ\" Number=\"1\" Type=\"Integer\" Description=\"Genotype Quality\"\n GeneticVariation.VCF.MetaInfo:\n    tag: FORMAT\n  value: ID=\"DP\" Number=\"1\" Type=\"Integer\" Description=\"Read Depth\"       \n GeneticVariation.VCF.MetaInfo:\n    tag: FORMAT\n  value: ID=\"HQ\" Number=\"2\" Type=\"Integer\" Description=\"Haplotype Quality\"VCF.MetaInfo variables in the header support the following accessors:Accessor Description\nmetainfotag tag string\nmetainfoval value string\nkeys keys of fields between \'<\' and \'>\'\nvalues values of fields between \'<\' and \'>\'\n[<key>] value of a field with keyjulia> metainfo = VCF.MetaInfo(\"##FORMAT=<ID=GT,Number=1,Type=String,Description=\\\"Genotype\\\">\")\nGeneticVariation.VCF.MetaInfo:\n    tag: FORMAT\n  value: ID=\"GT\" Number=\"1\" Type=\"String\" Description=\"Genotype\"\n\njulia> metainfotag(metainfo)\n\"FORMAT\"\n\njulia> metainfoval(metainfo)\n\"<ID=GT,Number=1,Type=String,Description=\\\"Genotype\\\">\"\n\njulia> keys(metainfo)\n4-element Array{String,1}:\n \"ID\"         \n \"Number\"     \n \"Type\"       \n \"Description\"\n\njulia> metainfo[\"ID\"]\n\"GT\"\nVCF.Record and BCF.Record variables support the following accessor functions (see the docstring of each accessor for the details):Accessor Description\nchrom chromosome name\npos reference position\nid unique identifiers\nref reference bases\nalt alternate bases\nqual Phred-scaled quality score\nfilter filter status\ninfo additional information\ninfokeys keys of additional information\nformat genotype format\ngenotype genotype informationjulia> record = VCF.Record(\"20\\t14370\\trs6054257\\tG\\tA\\t29\\tPASS\\tNS=3;DP=14;AF=0.5;DB;H2\\tGT:GQ:DP:HQ\\t0|0:48:1:51,51\\t1|0:48:8:51,51\")\nGeneticVariation.VCF.Record:\n   chromosome: 20\n     position: 14370\n   identifier: rs6054257\n    reference: G\n    alternate: A\n      quality: 29.0\n       filter: PASS\n  information: NS=3 DP=14 AF=0.5 DB H2\n       format: GT GQ DP HQ\n     genotype: [1] 0|0 48 1 51,51 [2] 1|0 48 8 51,51\n\njulia> VCF.chrom(record)\n\"20\"\n\njulia> VCF.pos(record)\n14370\n\njulia> VCF.id(record)\n1-element Array{String,1}:\n \"rs6054257\"\n\njulia> VCF.ref(record)\n\"G\"\n\njulia> VCF.alt(record)\n1-element Array{String,1}:\n \"A\"\n\njulia> VCF.qual(record)\n29.0\n\njulia> VCF.filter(record)\n1-element Array{String,1}:\n \"PASS\"\n\njulia> VCF.info(record)\n5-element Array{Pair{String,String},1}:\n \"NS\"=>\"3\"  \n \"DP\"=>\"14\"\n \"AF\"=>\"0.5\"\n \"DB\"=>\"\"   \n \"H2\"=>\"\"   \n\njulia> VCF.format(record)\n4-element Array{String,1}:\n \"GT\"\n \"GQ\"\n \"DP\"\n \"HQ\"\n\njulia> VCF.genotype(record)\n2-element Array{Array{String,1},1}:\n String[\"0|0\",\"48\",\"1\",\"51,51\"]\n String[\"1|0\",\"48\",\"8\",\"51,51\"]\n\njulia> VCF.genotype(record, 1:2, \"GT\")\n2-element Array{String,1}:\n \"0|0\"\n \"1|0\"\n\njulia> VCF.genotype(record, 1:1, \"GT\")\n1-element Array{String,1}:\n \"0|0\"\n\njulia> VCF.genotype(record, 1:2, \"GT\")\n2-element Array{String,1}:\n \"0|0\"\n \"1|0\"\n"
},

{
    "location": "man/site_counting/#",
    "page": "Mutation Counting",
    "title": "Mutation Counting",
    "category": "page",
    "text": "CurrentModule = GeneticVariation\nDocTestSetup = quote\n    using GeneticVariation\nend"
},

{
    "location": "man/site_counting/#Identifying-and-counting-sequence-sites-1",
    "page": "Mutation Counting",
    "title": "Identifying and counting sequence sites",
    "category": "section",
    "text": "GeneticVariation.jl extends the site-counting methods in BioSequences.jl, using the same fast bit-parallel techniques to rapidly compute the numbers of different types of mutations between two large biological sequences. Such computation is required for many population genetic analyses of variation, such as computation of evolutionary distances."
},

{
    "location": "man/site_counting/#GeneticVariation.Conserved",
    "page": "Mutation Counting",
    "title": "GeneticVariation.Conserved",
    "category": "type",
    "text": "A Conserved site describes a site where two aligned nucleotides are definately conserved. By definately conserved this means that the symbols of the site are non-ambiguity symbols, and they are the same symbol.\n\n\n\n\n\n"
},

{
    "location": "man/site_counting/#GeneticVariation.Mutated",
    "page": "Mutation Counting",
    "title": "GeneticVariation.Mutated",
    "category": "type",
    "text": "A Mutated site describes a site where two aligned nucleotides are definately mutated. By definately mutated this means that the symbols of the site are non-ambiguity symbols, and they are not the same symbol.\n\n\n\n\n\n"
},

{
    "location": "man/site_counting/#GeneticVariation.Segregating",
    "page": "Mutation Counting",
    "title": "GeneticVariation.Segregating",
    "category": "type",
    "text": "Segregating sites are positions which show differences (polymorphisms) between related genes in a sequence alignment (are not conserved). Segregating sites include conservative, semi-conservative and non-conservative mutations.\n\n\n\n\n\n"
},

{
    "location": "man/site_counting/#Types-of-site-added-1",
    "page": "Mutation Counting",
    "title": "Types of site added",
    "category": "section",
    "text": "Conserved\nMutated\nSegregatingSee the site-counting section of the BioSequences.jl documentation to see how to use the count and count_pairwise methods to count different types of site."
},

{
    "location": "man/diversity/#",
    "page": "Genetic Diversity",
    "title": "Genetic Diversity",
    "category": "page",
    "text": "CurrentModule = GeneticVariation\nDocTestSetup = quote\n    using GeneticVariation\n    using BioSequences\nend"
},

{
    "location": "man/diversity/#GeneticVariation.gene_frequencies",
    "page": "Genetic Diversity",
    "title": "GeneticVariation.gene_frequencies",
    "category": "function",
    "text": "gene_frequencies(seqcounts::Composition{T}) where T <: Sequence\n\nCompute gene_frequencies from a BioSequences.Composition variable that contains unique sequence counts.\n\n\n\n\n\ngene_frequencies(iterable)\n\nCompute the gene frequencies for any iterable with an eltype which is a concrete subtype of the abstract Sequence type.\n\n\n\n\n\n"
},

{
    "location": "man/diversity/#Computing-allele-frequencies-1",
    "page": "Genetic Diversity",
    "title": "Computing allele frequencies",
    "category": "section",
    "text": "When first looking at the diversity present in a population, it is common to want to know how many of each unique allele there is in a population i.e. the allele frequencies of the population are.Formally defined, allele frequency is a measure of the relative frequency of an allele on a genetic locus in a population.In population genetics, allele frequencies show the genetic diversity of a species population or equivalently the richness of its gene pool.Population genetics studies the different \"forces\" that might lead to changes in the distribution and frequencies of alleles - in other words, to evolution.Besides selection, these forces include genetic drift, mutation and migration.Computing allele frequencies then, is an essential task for many wishing to work with genetic variation, and so methods for computing such frequencies are included in GeneticVariation.jl.Allele frequencies can be computed for genes, micro-satellites, RFPL patterns, and from SNPs.gene_frequencies"
},

{
    "location": "man/diversity/#GeneticVariation.avg_mut",
    "page": "Genetic Diversity",
    "title": "GeneticVariation.avg_mut",
    "category": "function",
    "text": "avg_mut(sequences)\n\nThe average number of mutations found in (n choose 2) pairwise comparisons of sequences (i, j) in a sample of sequences.\n\nsequences should be any indexable container of DNA sequence types.\n\n\n\n\n\n"
},

{
    "location": "man/diversity/#Computing-measures-of-genetic-diversity-1",
    "page": "Genetic Diversity",
    "title": "Computing measures of genetic diversity",
    "category": "section",
    "text": "There are various methods of quantifying the amount of genetic variation in biological data with GeneticVariation.jl:avg_mut"
},

{
    "location": "man/diversity/#GeneticVariation.NL79",
    "page": "Genetic Diversity",
    "title": "GeneticVariation.NL79",
    "category": "function",
    "text": "NL79(m::M, f::V) where {M<:AbstractMatrix{Float64},V<:AbstractVector{Float64}}\n\nCompute nucleotide diversity using a matrix of the number of mutations between sequence pairs, and a vector of the frequencies of each sequence in the population.\n\n\n\n\n\nNL79(sequences)\n\nCompute nucleotide diversity, as described by Nei and Li in 1979.\n\nThis measure is defined as the average number of nucleotide differences per site between two DNA sequences in all possible pairs in the sample population, and is often denoted by the greek letter pi.\n\nSequences should be any iterable that yields biosequence types.\n\nExamples\n\njulia> testSeqs = [dna\"AAAACTTTTACCCCCGGGGG\",\n                   dna\"AAAACTTTTACCCCCGGGGG\",\n                   dna\"AAAACTTTTACCCCCGGGGG\",\n                   dna\"AAAACTTTTACCCCCGGGGG\",\n                   dna\"AAAAATTTTACCCCCGTGGG\",\n                   dna\"AAAAATTTTACCCCCGTGGG\",\n                   dna\"AAAACTTTTTCCCCCGTAGG\",\n                   dna\"AAAACTTTTTCCCCCGTAGG\",\n                   dna\"AAAAATTTTTCCCCCGGAGG\",\n                   dna\"AAAAATTTTTCCCCCGGAGG\"]\n10-element Array{BioSequences.BioSequence{BioSequences.DNAAlphabet{4}},1}:\n AAAACTTTTACCCCCGGGGG\n AAAACTTTTACCCCCGGGGG\n AAAACTTTTACCCCCGGGGG\n AAAACTTTTACCCCCGGGGG\n AAAAATTTTACCCCCGTGGG\n AAAAATTTTACCCCCGTGGG\n AAAACTTTTTCCCCCGTAGG\n AAAACTTTTTCCCCCGTAGG\n AAAAATTTTTCCCCCGGAGG\n AAAAATTTTTCCCCCGGAGG\n\n julia> NL79(testSeqs)\n 0.096\n\n\n\n\n\n\n"
},

{
    "location": "man/diversity/#Nucleotide-diversity-1",
    "page": "Genetic Diversity",
    "title": "Nucleotide diversity",
    "category": "section",
    "text": "Nucleotide diversity is a concept in molecular genetics which is used to measure the degree of polymorphism within a population.There are different methods which can be used to compute measures of nucleotide diversity, we list them below, and show how to compute them using GeneticVariation.NL79"
},

]}
