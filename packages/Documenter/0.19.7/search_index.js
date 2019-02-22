var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Documenter.jl-1",
    "page": "Home",
    "title": "Documenter.jl",
    "category": "section",
    "text": "A documentation generator for Julia.A package for building documentation from docstrings and markdown files.note: Note\nPlease read through the Documentation section of the main Julia manual if this is your first time using Julia\'s documentation system. Once you\'ve read through how to write documentation for your code then come back here."
},

{
    "location": "#Package-Features-1",
    "page": "Home",
    "title": "Package Features",
    "category": "section",
    "text": "Write all your documentation in Markdown.\nMinimal configuration.\nSupports Julia 0.6 and 0.7-dev.\nDoctests Julia code blocks.\nCross references for docs and section headers.\nLaTeX syntax support.\nChecks for missing docstrings and incorrect cross references.\nGenerates tables of contents and docstring indexes.\nUse git push to automatically build and deploy docs from Travis to GitHub Pages.The Package Guide provides a tutorial explaining how to get started using Documenter.Some examples of packages using Documenter can be found on the Examples page.See the Index for the complete list of documented functions and types."
},

{
    "location": "#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"man/guide.md\",\n    \"man/examples.md\",\n    \"man/syntax.md\",\n    \"man/doctests.md\",\n    \"man/hosting.md\",\n    \"man/latex.md\",\n    \"man/contributing.md\",\n]\nDepth = 1"
},

{
    "location": "#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Pages = [\"lib/public.md\", \"lib/internals.md\"]"
},

{
    "location": "#main-index-1",
    "page": "Home",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"lib/public.md\"]"
},

{
    "location": "man/guide/#",
    "page": "Guide",
    "title": "Guide",
    "category": "page",
    "text": ""
},

{
    "location": "man/guide/#Package-Guide-1",
    "page": "Guide",
    "title": "Package Guide",
    "category": "section",
    "text": ""
},

{
    "location": "man/guide/#Installation-1",
    "page": "Guide",
    "title": "Installation",
    "category": "section",
    "text": "Documenter is a registered package and so can be installed via Pkg.add.Pkg.add(\"Documenter\")This package supports Julia 0.6 and 0.7-dev."
},

{
    "location": "man/guide/#Usage-1",
    "page": "Guide",
    "title": "Usage",
    "category": "section",
    "text": "Documenter is designed to do one thing – combine markdown files and inline docstrings from Julia\'s docsystem into a single inter-linked document. What follows is a step-by-step guide to creating a simple document."
},

{
    "location": "man/guide/#Setting-up-the-folder-structure-1",
    "page": "Guide",
    "title": "Setting up the folder structure",
    "category": "section",
    "text": "Firstly, we need a Julia module to document. This could be a package generated via PkgDev.generate or a single .jl script accessible via Julia\'s LOAD_PATH. For this guide we\'ll be using a package called Example.jl that has the following directory layout:Example/\n    src/\n        Example.jl\n    ...Note that the ... just represent unimportant files and folders.We must decide on a location where we\'d like to store the documentation for this package. It\'s recommended to use a folder named docs/ in the toplevel of the package, like soExample/\n    docs/\n        ...\n    src/\n        Example.jl\n    ...Inside the docs/ folder we need to add two things. A source folder which will contain the markdown files that will be used to build the finished document and a Julia script that will be used to control the build process. The following names are recommendeddocs/\n    src/\n    make.jl"
},

{
    "location": "man/guide/#Building-an-empty-document-1",
    "page": "Guide",
    "title": "Building an empty document",
    "category": "section",
    "text": "With our docs/ directory now setup we\'re going to build our first document. It\'ll just be a single empty file at the moment, but we\'ll be adding to it later on.Add the following to your make.jl fileusing Documenter, Example\n\nmakedocs()This assumes you\'ve installed Documenter as discussed in Installation and that your Example.jl package can be found by Julia.note: Note\nIf your source directory is not accessible through Julia\'s LOAD_PATH, you might wish to add the following line at the top of make.jlpush!(LOAD_PATH,\"../src/\")Now add an index.md file to the src/ directory. The name has no particular significance though and you may name it whatever you like. We\'ll stick to index.md for this guide.Leave the newly added file empty and then run the following command from the docs/ directory$ julia make.jlNote that $ just represents the prompt character. You don\'t need to type that.If you\'d like to see the output from this command in color use$ julia --color=yes make.jlWhen you run that you should see the following outputDocumenter: setting up build directory.\nDocumenter: expanding markdown templates.\nDocumenter: building cross-references.\nDocumenter: running document checks.\nDocumenter: rendering document.\nDocumenter: populating indices.\nDocumenter: copying assets to build directory.The docs/ folder should contain a new directory – called build/. It\'s structure should look like the followingbuild/\n    assets/\n        Documenter.css\n        mathjaxhelper.js\n    index.mdwarning: Warning\nNever git commit the contents of build (or any other content generated by Documenter) to your repository\'s master branch. Always commit generated files to the gh-pages branch of your repository. This helps to avoid including unnecessary changes for anyone reviewing commits that happen to include documentation changes.See the Hosting Documentation section for details regarding how you should go about setting this up correctly.At the moment build/index.md should be empty since src/index.md is empty.At this point you can add some text to src/index.md and rerun the make.jl file to see the changes if you\'d like to."
},

{
    "location": "man/guide/#Adding-some-docstrings-1",
    "page": "Guide",
    "title": "Adding some docstrings",
    "category": "section",
    "text": "Next we\'ll splice a docstring defined in the Example module into the index.md file. To do this first document a function in that module:module Example\n\nexport func\n\n\"\"\"\n    func(x)\n\nReturns double the number `x` plus `1`.\n\"\"\"\nfunc(x) = 2x + 1\n\nendThen in the src/index.md file add the following# Example.jl Documentation\n\n```@docs\nfunc(x)\n```When we next run make.jl the docstring for Example.func(x) should appear in place of the @docs block in build/index.md. Note that more than one object can be referenced inside a @docs block – just place each one on a separate line.Note that a @docs block is evaluated in the Main module. This means that each object listed in the block must be visible there. The module can be changed to something else on a per-page basis with a @meta block as in the following# Example.jl Documentation\n\n```@meta\nCurrentModule = Example\n```\n\n```@docs\nfunc(x)\n```"
},

{
    "location": "man/guide/#Filtering-Included-Docstrings-1",
    "page": "Guide",
    "title": "Filtering Included Docstrings",
    "category": "section",
    "text": "In some cases you may want to include a docstring for a Method that extends a Function from a different module – such as Base. In the following example we extend Base.length with a new definition for the struct T and also add a docstring:struct T\n    # ...\nend\n\n\"\"\"\nCustom `length` docs for `T`.\n\"\"\"\nBase.length(::T) = 1When trying to include this docstring with```@docs\nlength\n```all the docs for length will be included – even those from other modules. There are two ways to solve this problem. Either include the type in the signature with```@docs\nlength(::T)\n```or declare the specific modules that makedocs should include withmakedocs(\n    # options\n    modules = [MyModule]\n)"
},

{
    "location": "man/guide/#Cross-Referencing-1",
    "page": "Guide",
    "title": "Cross Referencing",
    "category": "section",
    "text": "It may be necessary to refer to a particular docstring or section of your document from elsewhere in the document. To do this we can make use of Documenter\'s cross-referencing syntax which looks pretty similar to normal markdown link syntax. Replace the contents of src/index.md with the following# Example.jl Documentation\n\n```@docs\nfunc(x)\n```\n\n- link to [Example.jl Documentation](@ref)\n- link to [`func(x)`](@ref)So we just have to replace each link\'s url with @ref and write the name of the thing we\'d link to cross-reference. For document headers it\'s just plain text that matches the name of the header and for docstrings enclose the object in backticks.This also works across different pages in the same way. Note that these sections and docstrings must be unique within a document."
},

{
    "location": "man/guide/#Navigation-1",
    "page": "Guide",
    "title": "Navigation",
    "category": "section",
    "text": "Documenter can auto-generate tables of contents and docstring indexes for your document with the following syntax. We\'ll illustrate these features using our index.md file from the previous sections. Add the following to that file# Example.jl Documentation\n\n```@contents\n```\n\n## Functions\n\n```@docs\nfunc(x)\n```\n\n## Index\n\n```@index\n```The @contents block will generate a nested list of links to all the section headers in the document. By default it will gather all the level 1 and 2 headers from every page in the document, but this can be adjusted using Pages and Depth settings as in the following```@contents\nPages = [\"foo.md\", \"bar.md\"]\nDepth = 3\n```The @index block will generate a flat list of links to all the docs that that have been spliced into the document using @docs blocks. As with the @contents block the pages to be included can be set with a Pages = [...] line. Since the list is not nested Depth is not supported for @index."
},

{
    "location": "man/guide/#Output-formats-1",
    "page": "Guide",
    "title": "Output formats",
    "category": "section",
    "text": "Documenter produces a set of Markdown files, which then have to be converted into a user-readable format for distribution. While in principle any Markdown parser would do (as long as it supports the required Markdown extensions), the Python-based MkDocs is usually used to convert the Markdown files into a set of HTML pages. See Hosting Documentation for further information on configuring MkDocs for Documenter.note: Native HTML output\nThere is experimental support for native HTML output in Documenter. It can be enabled by passing the format = :html option to makedocs. It also requires the pages and sitename options. make.jl should then look something likemakedocs(\n    ...,\n    format = :html,\n    sitename = \"Package name\",\n    pages = [\n        \"page.md\",\n        \"Page title\" => \"page2.md\",\n        \"Subsection\" => [\n            ...\n        ]\n    ]\n)\n\ndeploydocs(\n    repo   = \"github.com/USER/PKG.jl.git\",\n    target = \"build\",\n    deps   = nothing,\n    make   = nothing\n)Since Documenter\'s docs are already built using HTML output, a fully working example of the configuration can be found in docs/make.jl. Note that with this configuration, mkdocs.yml is not required.It is still under development, may contain bugs, and undergo changes. However, any feedback is very welcome and early adopters are encouraged to try it out. Issues and suggestions should be posted to Documenter.jl\'s issue tracker.Additional makedocs options for HTML outputsitename is the site\'s title displayed in the title bar and at the top of the navigation menu.pages defines the hierarchy of the navigation menu."
},

{
    "location": "man/examples/#",
    "page": "Examples",
    "title": "Examples",
    "category": "page",
    "text": ""
},

{
    "location": "man/examples/#Examples-1",
    "page": "Examples",
    "title": "Examples",
    "category": "section",
    "text": "Sometimes the best way to learn how to use a new package is to look for examples of what others have already built with it.The following packages use Documenter to build their documentation and so should give a good overview of what this package is currently able to do.note: Note\nPackages are listed alphabetically. If you have a package that uses Documenter then please open a PR that adds it to the appropriate list below; a simple way to do so is to navigate to https://github.com/JuliaDocs/Documenter.jl/edit/master/docs/src/man/examples.md.The make.jl file for all listed packages will be tested to check for potential regressions prior to tagging new Documenter releases whenever possible."
},

{
    "location": "man/examples/#Registered-1",
    "page": "Examples",
    "title": "Registered",
    "category": "section",
    "text": "Packages that have tagged versions available in METADATA.jl.Augmentor.jl\nBanditOpt.jl\nBeaData.jl\nBio.jl\nControlSystems.jl\nCurrencies.jl\nDifferentialEquations.jl\nDiscretePredictors.jl\nDocumenter.jl\nEvolvingGraphs.jl\nExtractMacro.jl\nEzXML.jl\nFourierFlows.jl\nGadfly.jl\nGeoStats.jl\nHighlights.jl\nIntervalConstraintProgramming.jl\nLuxor.jl\nMergedMethods.jl\nMimi.jl\nNumericSuffixes.jl\nOnlineStats.jl\nPOMDPs.jl\nPhyloNetworks.jl\nPrivateModules.jl\nQuery.jl\nTaylorSeries.jl\nWeave.jl"
},

{
    "location": "man/examples/#Unregistered-1",
    "page": "Examples",
    "title": "Unregistered",
    "category": "section",
    "text": "Packages that are not available in METADATA.jl and may be works-in-progress. Please do take that into consideration when browsing this list.AnonymousTypes.jl\nOhMyREPL.jl"
},

{
    "location": "man/syntax/#",
    "page": "Syntax",
    "title": "Syntax",
    "category": "page",
    "text": ""
},

{
    "location": "man/syntax/#Syntax-1",
    "page": "Syntax",
    "title": "Syntax",
    "category": "section",
    "text": "This section of the manual describes the syntax used by Documenter to build documentation.Pages = [\"syntax.md\"]"
},

{
    "location": "man/syntax/#@docs-block-1",
    "page": "Syntax",
    "title": "@docs block",
    "category": "section",
    "text": "Splice one or more docstrings into a document in place of the code block, i.e.```@docs\nDocumenter\nmakedocs\ndeploydocs\n```This block type is evaluated within the CurrentModule module if defined, otherwise within Main, and so each object listed in the block should be visible from that module. Undefined objects will raise warnings during documentation generation and cause the code block to be rendered in the final document unchanged.Objects may not be listed more than once within the document. When duplicate objects are detected an error will be raised and the build process will be terminated.To ensure that all docstrings from a module are included in the final document the modules keyword for makedocs can be set to the desired module or modules, i.e.makedocs(\n    modules = [Documenter],\n)which will cause any unlisted docstrings to raise warnings when makedocs is called. If modules is not defined then no warnings are printed, even if a document has missing docstrings."
},

{
    "location": "man/syntax/#@autodocs-block-1",
    "page": "Syntax",
    "title": "@autodocs block",
    "category": "section",
    "text": "Automatically splices all docstrings from the provided modules in place of the code block. This is equivalent to manually adding all the docstrings in a @docs block.```@autodocs\nModules = [Foo, Bar]\nOrder   = [:function, :type]\n```The above @autodocs block adds all the docstrings found in modules Foo and Bar that refer to functions or types to the document.Each module is added in order and so all docs from Foo will appear before those of Bar. Possible values for the Order vector are:module\n:constant\n:type\n:function\n:macroIf no Order is provided then the order listed above is used.When a potential docstring is found in one of the listed modules, but does not match any value from Order then it will be omitted from the document. Hence Order acts as a basic filter as well as sorter.In addition to Order, a Pages vector may be included in @autodocs to filter docstrings based on the source file in which they are defined:```@autodocs\nModules = [Foo]\nPages   = [\"a.jl\", \"b.jl\"]\n```In the above example docstrings from module Foo found in source files that end in a.jl and b.jl are included. The page order provided by Pages is also used to sort the docstrings. Note that page matching is done using the end of the provided strings and so a.jl will be matched by any source file that ends in a.jl, i.e. src/a.jl or src/foo/a.jl.To include only the exported names from the modules listed in Modules use Private = false. In a similar way Public = false can be used to only show the unexported names. By default both of these are set to true so that all names will be shown.Functions exported from `Foo`:\n\n```@autodocs\nModules = [Foo]\nPrivate = false\nOrder = [:function]\n```\n\nPrivate types in module `Foo`:\n\n```@autodocs\nModules = [Foo]\nPublic = false\nOrder = [:type]\n```note: Note\nWhen more complex sorting and filtering is needed then use @docs to define it explicitly."
},

{
    "location": "man/syntax/#@ref-link-1",
    "page": "Syntax",
    "title": "@ref link",
    "category": "section",
    "text": "Used in markdown links as the URL to tell Documenter to generate a cross-reference automatically. The text part of the link can be a docstring, header name, or GitHub PR/Issue number.# Syntax\n\n... [`makedocs`](@ref) ...\n\n# Functions\n\n```@docs\nmakedocs\n```\n\n... [Syntax](@ref) ...\n\n... [#42](@ref) ...Plain text in the \"text\" part of a link will either cross-reference a header, or, when it is a number preceded by a #, a GitHub issue/pull request. Text wrapped in backticks will cross-reference a docstring from a @docs block.@refs may refer to docstrings or headers on different pages as well as the current page using the same syntax.Note that depending on what the CurrentModule is set to, a docstring @ref may need to be prefixed by the module which defines it."
},

{
    "location": "man/syntax/#Duplicate-Headers-1",
    "page": "Syntax",
    "title": "Duplicate Headers",
    "category": "section",
    "text": "In some cases a document may contain multiple headers with the same name, but on different pages or of different levels. To allow @ref to cross-reference a duplicate header it must be given a name as in the following example# [Header](@id my_custom_header_name)\n\n...\n\n## Header\n\n... [Custom Header](@ref my_custom_header_name) ...The link that wraps the named header is removed in the final document. The text for a named @ref ... does not need to match the header that it references. Named @ref ...s may refer to headers on different pages in the same way as unnamed ones do.Duplicate docstring references do not occur since splicing the same docstring into a document more than once is disallowed."
},

{
    "location": "man/syntax/#Named-doc-@refs-1",
    "page": "Syntax",
    "title": "Named doc @refs",
    "category": "section",
    "text": "Docstring @refs can also be \"named\" in a similar way to headers as shown in the Duplicate Headers section above. For examplemodule Mod\n\n\"\"\"\nBoth of the following references point to `g` found in module `Main.Other`:\n\n  * [`Main.Other.g`](@ref)\n  * [`g`](@ref Main.Other.g)\n\n\"\"\"\nf(args...) = # ...\n\nendThis can be useful to avoid having to write fully qualified names for references that are not imported into the current module, or when the text displayed in the link is used to add additional meaning to the surrounding text, such asUse [`for i = 1:10 ...`](@ref for) to loop over all the numbers from 1 to 10.note: Note\nNamed doc @refs should be used sparingly since writing unqualified names may, in some cases, make it difficult to tell which function is being referred to in a particular docstring if there happen to be several modules that provide definitions with the same name."
},

{
    "location": "man/syntax/#@meta-block-1",
    "page": "Syntax",
    "title": "@meta block",
    "category": "section",
    "text": "This block type is used to define metadata key/value pairs that can be used elsewhere in the page. Currently recognised keys:CurrentModule: module where Documenter evaluates, for example, @docs-block and @ref-links.\nDocTestSetup: code to be evaluated before a doctest, see the Setup Code section under Doctests.\nDocTestFilters: filters to deal with, for example, unpredictable output from doctests, see the Filtering Doctests section under Doctests.\nEditURL: link to where the page can be edited. This defaults to the .md page itself, but if the source is something else (for example if the .md page is generated as part of the doc build) this can be set, either as a local link, or an absolute url.Example:```@meta\nCurrentModule = FooBar\nDocTestSetup  = quote\n    using MyPackage\nend\nDocTestFilters = [r\"Stacktrace:[\\s\\S]+\"]\nEditURL = \"link/to/source/file\"\n```Note that @meta blocks are always evaluated in Main."
},

{
    "location": "man/syntax/#@index-block-1",
    "page": "Syntax",
    "title": "@index block",
    "category": "section",
    "text": "Generates a list of links to docstrings that have been spliced into a document. Valid settings are Pages, Modules, and Order. For example:```@index\nPages   = [\"foo.md\"]\nModules = [Foo, Bar]\nOrder   = [:function, :type]\n```When Pages or Modules are not provided then all pages or modules are included. Order defaults to[:module, :constant, :type, :function, :macro]if not specified. Order and Modules behave the same way as in @autodocs blocks and filter out docstrings that do not match one of the modules or categories specified.Note that the values assigned to Pages, Modules, and Order may be any valid Julia code and thus can be something more complex that an array literal if required, i.e.```@index\nPages = map(file -> joinpath(\"man\", file), readdir(\"man\"))\n```It should be noted though that in this case Pages may not be sorted in the order that is expected by the user. Try to stick to array literals as much as possible."
},

{
    "location": "man/syntax/#@contents-block-1",
    "page": "Syntax",
    "title": "@contents block",
    "category": "section",
    "text": "Generates a nested list of links to document sections. Valid settings are Pages and Depth.```@contents\nPages = [\"foo.md\"]\nDepth = 5\n```As with @index if Pages is not provided then all pages are included. The default Depth value is 2."
},

{
    "location": "man/syntax/#@example-block-1",
    "page": "Syntax",
    "title": "@example block",
    "category": "section",
    "text": "Evaluates the code block and inserts the result into the final document along with the original source code.```@example\na = 1\nb = 2\na + b\n```The above @example block will splice the following into the final document```julia\na = 1\nb = 2\na + b\n```\n\n```\n3\n```Leading and trailing newlines are removed from the rendered code blocks. Trailing whitespace on each line is also removed.Hiding Source CodeCode blocks may have some content that does not need to be displayed in the final document. # hide comments can be appended to lines that should not be rendered, i.e.```@example\nusing Compat.Random # hide\nsrand(1) # hide\nA = rand(3, 3)\nb = [1, 2, 3]\nA \\ b\n```Note that appending # hide to every line in an @example block will result in the block being hidden in the rendered document. The results block will still be rendered though. @setup blocks are a convenient shorthand for hiding an entire block, including the output.stdout and stderrThe Julia output streams are redirected to the results block when evaluating @example blocks in the same way as when running doctest code blocks.nothing ResultsWhen the @example block evaluates to nothing then the second block is not displayed. Only the source code block will be shown in the rendered document. Note that if any output from either stdout or stderr is captured then the results block will be displayed even if nothing is returned.Named @example BlocksBy default @example blocks are run in their own anonymous Modules to avoid side-effects between blocks. To share the same module between different blocks on a page the @example can be named with the following syntax```@example 1\na = 1\n```\n\n```@example 1\nprintln(a)\n```The name can be any text, not just integers as in the example above, i.e. @example foo.Named @example blocks can be useful when generating documentation that requires intermediate explanation or multimedia such as plots as illustrated in the following exampleFirst we define some functions\n\n```@example 1\nusing PyPlot # hide\nf(x) = sin(2x) + 1\ng(x) = cos(x) - x\n```\n\nand then we plot `f` over the interval from ``-π`` to ``π``\n\n```@example 1\nx = linspace(-π, π)\nplot(x, f(x), color = \"red\")\nsavefig(\"f-plot.svg\"); nothing # hide\n```\n\n![](f-plot.svg)\n\nand then we do the same with `g`\n\n```@example 1\nplot(x, g(x), color = \"blue\")\nsavefig(\"g-plot.svg\"); nothing # hide\n```\n\n![](g-plot.svg)Note that @example blocks are evaluated within the directory of build where the file will be rendered . This means than in the above example savefig will output the .svg files into that directory. This allows the images to be easily referenced without needing to worry about relative paths.@example blocks automatically define ans which, as in the Julia REPL, is bound to the value of the last evaluated expression. This can be useful in situations such as the following one where where binding the object returned by plot to a named variable would look out of place in the final rendered documentation:```@example\nusing Gadfly # hide\nplot([sin, x -> 2sin(x) + x], -2π, 2π)\ndraw(SVG(\"plot.svg\", 6inch, 4inch), ans); nothing # hide\n```\n\n![](plot.svg)Delayed Execution of @example Blocks@example blocks accept a keyword argument continued which can be set to true or false (defaults to false). When continued = true the execution of the code is delayed until the next continued = false @example-block. This is needed for example when the expression in a block is not complete. Example:```@example half-loop; continued = true\nfor i in 1:3\n    j = i^2\n```\nSome text explaining what we should do with `j`\n```@example half-loop\n    println(j)\nend\n```Here the first block is not complete – the loop is missing the end. Thus, by setting continued = true here we delay the evaluation of the first block, until we reach the second block. A block with continued = true does not have any output."
},

{
    "location": "man/syntax/#@repl-block-1",
    "page": "Syntax",
    "title": "@repl block",
    "category": "section",
    "text": "These are similar to @example blocks, but adds a julia> prompt before each toplevel expression. ; and # hide syntax may be used in @repl blocks in the same way as in the Julia REPL and @example blocks.```@repl\na = 1\nb = 2\na + b\n```will generate```julia\njulia> a = 1\n1\n\njulia> b = 2\n2\n\njulia> a + b\n3\n```Named @repl <name> blocks behave in the same way as named @example <name> blocks."
},

{
    "location": "man/syntax/#@setup-name-block-1",
    "page": "Syntax",
    "title": "@setup <name> block",
    "category": "section",
    "text": "These are similar to @example blocks, but both the input and output are hidden from the final document. This can be convenient if there are several lines of setup code that need to be hidden.note: Note\nUnlike @example and @repl blocks, @setup requires a <name> attribute to associate it with downstream @example <name> and @repl <name> blocks.```@setup abc\nusing RDatasets\nusing DataFrames\niris = dataset(\"datasets\", \"iris\")\n```\n\n```@example abc\nprintln(iris)\n```"
},

{
    "location": "man/syntax/#@eval-block-1",
    "page": "Syntax",
    "title": "@eval block",
    "category": "section",
    "text": "Evaluates the contents of the block and inserts the resulting value into the final document.In the following example we use the PyPlot package to generate a plot and display it in the final document.```@eval\nusing PyPlot\n\nx = linspace(-π, π)\ny = sin(x)\n\nplot(x, y, color = \"red\")\nsavefig(\"plot.svg\")\n\nnothing\n```\n\n![](plot.svg)Note that each @eval block evaluates its contents within a separate module. When evaluating each block the present working directory, pwd, is set to the directory in build where the file will be written to.Also, instead of returning nothing in the example above we could have returned a new Markdown.MD object through Markdown.parse. This can be more appropriate when the filename is not known until evaluation of the block itself.note: Note\nIn most cases @example is preferred over @eval. Just like in normal Julia code where eval should be only be considered as a last resort, @eval should be treated in the same way."
},

{
    "location": "man/syntax/#@raw-format-block-1",
    "page": "Syntax",
    "title": "@raw <format> block",
    "category": "section",
    "text": "Allows code to be inserted into the final document verbatim. E.g. to insert custom HTML or LaTeX code into the output.The format argument is mandatory and Documenter uses it to determine whether a particular block should be copied over to the output or not. Currently supported formats are html and latex, used by the respective writers. A @raw block whose format is not recognized is usually ignored, so it is possible to have a raw block for each output format without the blocks being duplicated in the output.The following example shows how SVG code with custom styling can be included into documents using the @raw block.```@raw html\n<svg style=\"display: block; margin: 0 auto;\" width=\"5em\" heigth=\"5em\">\n	<circle cx=\"2.5em\" cy=\"2.5em\" r=\"2em\" stroke=\"black\" stroke-width=\".1em\" fill=\"red\" />\n</svg>\n```It will show up as follows, with code having been copied over verbatim to the HTML file.<svg style=\"display: block; margin: 0 auto;\" width=\"5em\" heigth=\"5em\">\n	<circle cx=\"2.5em\" cy=\"2.5em\" r=\"2em\" stroke=\"black\" stroke-width=\".1em\" fill=\"red\" />\n    (SVG)\n</svg>"
},

{
    "location": "man/doctests/#",
    "page": "Doctests",
    "title": "Doctests",
    "category": "page",
    "text": ""
},

{
    "location": "man/doctests/#Doctests-1",
    "page": "Doctests",
    "title": "Doctests",
    "category": "section",
    "text": "Documenter will, by default, try to run jldoctest code blocks that it finds in the generated documentation. This can help to avoid documentation examples from becoming outdated, incorrect, or misleading. It\'s recommended that as many of a package\'s examples be runnable by Documenter\'s doctest.This section of the manual outlines how to go about enabling doctests for code blocks in your package\'s documentation."
},

{
    "location": "man/doctests/#\"Script\"-Examples-1",
    "page": "Doctests",
    "title": "\"Script\" Examples",
    "category": "section",
    "text": "The first, of two, types of doctests is the \"script\" code block. To make Documenter detect this kind of code block the following format must be used:```jldoctest\na = 1\nb = 2\na + b\n\n# output\n\n3\n```The code block\'s \"language\" must be jldoctest and must include a line containing the text # output. The text before this line is the contents of the script which is run. The text that appears after # output is the textual representation that would be shown in the Julia REPL if the script had been included.The actual output produced by running the \"script\" is compared to the expected result and any difference will result in makedocs throwing an error and terminating.Note that the amount of whitespace appearing above and below the # output line is not significant and can be increased or decreased if desired.It is possible to suppress the output from the doctest by setting the output keyword argument to false, for example```jldoctest; output = false\na = 1\nb = 2\na + b\n\n# output\n\n3\n```Note that the output of the script will still be compared to the expected result, i.e. what is # output section, but the # output section will be suppressed in the rendered documentation."
},

{
    "location": "man/doctests/#REPL-Examples-1",
    "page": "Doctests",
    "title": "REPL Examples",
    "category": "section",
    "text": "The other kind of doctest is a simulated Julia REPL session. The following format is detected by Documenter as a REPL doctest:```jldoctest\njulia> a = 1\n1\n\njulia> b = 2;\n\njulia> c = 3;  # comment\n\njulia> a + b + c\n6\n```As with script doctests, the code block must have it\'s language set to jldoctest. When a code block contains one or more julia> at the start of a line then it is assumed to be a REPL doctest. Semi-colons, ;, at the end of a line works in the same way as in the Julia REPL and will suppress the output, although the line is still evaluated.Note that not all features of the REPL are supported such as shell and help modes."
},

{
    "location": "man/doctests/#Exceptions-1",
    "page": "Doctests",
    "title": "Exceptions",
    "category": "section",
    "text": "Doctests can also test for thrown exceptions and their stacktraces. Comparing of the actual and expected results is done by checking whether the expected result matches the start of the actual result. Hence, both of the following errors will match the actual result.```jldoctest\njulia> div(1, 0)\nERROR: DivideError: integer division error\n in div(::Int64, ::Int64) at ./int.jl:115\n\njulia> div(1, 0)\nERROR: DivideError: integer division error\n```If instead the first div(1, 0) error was written as```jldoctest\njulia> div(1, 0)\nERROR: DivideError: integer division error\n in div(::Int64, ::Int64) at ./int.jl:114\n```where line 115 is replaced with 114 then the doctest will fail.In the second div(1, 0), where no stacktrace is shown, it may appear to the reader that it is expected that no stacktrace will actually be displayed when they attempt to try to recreate the error themselves. To indicate to readers that the output result is truncated and does not display the entire (or any of) the stacktrace you may write [...] at the line where checking should stop, i.e.```jldoctest\njulia> div(1, 0)\nERROR: DivideError: integer division error\n[...]\n```"
},

{
    "location": "man/doctests/#Preserving-definitions-between-blocks-1",
    "page": "Doctests",
    "title": "Preserving definitions between blocks",
    "category": "section",
    "text": "Every doctest block is evaluated inside its own module. This means that definitions (types, variables, functions etc.) from a block can not be used in the next block. For example:```jldoctest\njulia> foo = 42\n42\n```The variable foo will not be defined in the next block:```jldoctest\njulia> println(foo)\nERROR: UndefVarError: foo not defined\n```To preserve definitions it is possible to label blocks in order to collect several blocks into the same module. All blocks with the same label (in the same file) will be evaluated in the same module, and hence share scope. This can be useful if the same definitions are used in more than one block, with for example text, or other doctest blocks, in between. Example:```jldoctest mylabel\njulia> foo = 42\n42\n```Now, since the block below has the same label as the block above, the variable foo can be used:```jldoctest mylabel\njulia> println(foo)\n42\n```note: Note\nLabeled doctest blocks does not need to be consecutive (as in the example above) to be included in the same module. They can be interspaced with unlabeled blocks or blocks with another label."
},

{
    "location": "man/doctests/#Setup-Code-1",
    "page": "Doctests",
    "title": "Setup Code",
    "category": "section",
    "text": "Doctests may require some setup code that must be evaluated prior to that of the actual example, but that should not be displayed in the final documentation. For this purpose a @meta block containing a DocTestSetup = ... value can be used. In the example below, the function foo is defined inside a @meta block. This block will be evaluated at the start of the following doctest blocks:```@meta\nDocTestSetup = quote\n    function foo(x)\n        return x^2\n    end\nend\n```\n\n```jldoctest\njulia> foo(2)\n4\n```\n\n```@meta\nDocTestSetup = nothing\n```The DocTestSetup = nothing is not strictly necessary, but good practice nonetheless to help avoid unintentional definitions in following doctest blocks.Another option is to use the setup keyword argument, which is convenient for short definitions, and for setups needed in inline docstrings.```jldoctest; setup = :(foo(x) = x^2)\njulia> foo(2)\n4\n```note: Note\nThe DocTestSetup and the setup values are re-evaluated at the start of each doctest block and no state is shared between any code blocks. To preserve definitions see Preserving definitions between blocks."
},

{
    "location": "man/doctests/#Filtering-Doctests-1",
    "page": "Doctests",
    "title": "Filtering Doctests",
    "category": "section",
    "text": "A part of the output of a doctest might be non-deterministic, e.g. pointer addresses and timings. It is therefore possible to filter a doctest so that the deterministic part can still be tested.A filter takes the form of a regular expression. In a doctest, each match in the expected output and the actual output is removed before the two outputs are compared. Filters are added globally, i.e. applied to all doctests in the documentation, by passing a list of regular expressions to makedocs with the keyword doctestfilters.For more fine grained control it is possible to define filters in @meta blocks by assigning them to the DocTestFilters variable, either as a single regular expression (DocTestFilters = [r\"foo\"]) or as a vector of several regex (DocTestFilters = [r\"foo\", r\"bar\"]).An example is given below where some of the non-deterministic output from @time is filtered.```@meta\nDocTestFilters = r\"[0-9\\.]+ seconds \\(.*\\)\"\n```\n\n```jldoctest\njulia> @time [1,2,3,4]\n  0.000003 seconds (5 allocations: 272 bytes)\n4-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n```\n\n```@meta\nDocTestFilters = nothing\n```The DocTestFilters = nothing is not strictly necessary, but good practice nonetheless to help avoid unintentional filtering in following doctest blocks.Another option is to use the filter keyword argument. This defines a doctest-local filter which is only active for the specific doctest. Note that such filters are not shared between named doctests either. It is possible to define a filter by a single regex (filter = r\"foo\") or as a list of regex (filter = [r\"foo\", r\"bar\"]). Example:```jldoctest; filter = r\"[0-9\\.]+ seconds \\(.*\\)\"\njulia> @time [1,2,3,4]\n  0.000003 seconds (5 allocations: 272 bytes)\n4-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n```note: Note\nThe global filters, filters defined in @meta blocks, and filters defined with the filter keyword argument are all applied to each doctest."
},

{
    "location": "man/doctests/#Fixing-outdated-Doctests-1",
    "page": "Doctests",
    "title": "Fixing outdated Doctests",
    "category": "section",
    "text": "To fix outdated doctests, the doctest flag to makedocs can be set to doctest = :fix. This will run the doctests, and overwrite the old results with the new output.note: Note\nThe :fix option currently only works for LF line endings (\'\\n\')note: Note\nIt is recommended to git commit any code changes before running the doctest fixing. That way it is simple to restore to the previous state if the fixing goes wrong.note: Note\nThere are some corner cases where the fixing algorithm may replace the wrong code snippet. It is therefore recommended to manually inspect the result of the fixing before committing."
},

{
    "location": "man/doctests/#Skipping-Doctests-1",
    "page": "Doctests",
    "title": "Skipping Doctests",
    "category": "section",
    "text": "Doctesting can be disabled by setting the makedocs keyword doctest = false. This should only be done when initially laying out the structure of a package\'s documentation, after which it\'s encouraged to always run doctests when building docs."
},

{
    "location": "man/hosting/#",
    "page": "Hosting Documentation",
    "title": "Hosting Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "man/hosting/#Hosting-Documentation-1",
    "page": "Hosting Documentation",
    "title": "Hosting Documentation",
    "category": "section",
    "text": "After going through the Package Guide and Doctests page you will need to host the generated documentation somewhere for potential users to read. This guide will describe how to setup automatic updates for your package docs using the Travis build service and GitHub Pages. This is the same approach used by this package to host its own docs – the docs you\'re currently reading.note: Note\nFollowing this guide should be the final step you take after you are comfortable with the syntax and build process used by Documenter.jl. Only proceed with the steps outlined on this page once you have successfully used mkdocs locally to build your documentation.  mkdocs can typically be installed using pip install mkdocs in your terminal.This guide assumes that you already have GitHub and Travis accounts setup. If not then go set those up first and then return here."
},

{
    "location": "man/hosting/#Overview-1",
    "page": "Hosting Documentation",
    "title": "Overview",
    "category": "section",
    "text": "Once setup correctly the following will happen each time you push new updates to your package repository:travis buildbots startup and run your tests;\neach buildbot will build the package docs using your docs/make.jl script;\na single buildbot will then try to push the generated docs back to GitHub.Note that the hosted documentation does not update when you make pull requests; you see updates only when you merge to master or push new tags.The following sections outline how to enable this for your own package."
},

{
    "location": "man/hosting/#SSH-Deploy-Keys-1",
    "page": "Hosting Documentation",
    "title": "SSH Deploy Keys",
    "category": "section",
    "text": "Deploy keys provide push access to a single repository, to allow secure deployment of generated documentation from Travis to GitHub.note: Note\nYou will need several command line programs installed for the following steps to work. They are which, git, and ssh-keygen. Make sure these are installed before you begin this section.Open a Julia REPL and import Documenter.julia> using DocumenterThen call the Travis.genkeys function as follows:julia> Travis.genkeys(\"MyPackage\")where \"MyPackage\" is the name of the package you would like to create deploy keys for. The output will look similar to the text below:INFO: add the public key below to https://github.com/USER/REPO/settings/keys\n      with read/write access:\n\n[SSH PUBLIC KEY HERE]\n\nINFO: add a secure environment variable named \'DOCUMENTER_KEY\' to\n      https://travis-ci.org/USER/REPO/settings with value:\n\n[LONG BASE64 ENCODED PRIVATE KEY]Follow the instructions that are printed out, namely:Add the public ssh key to your settings page for the GitHub repository that you are setting up by following the .../settings/key link provided. Click on Add deploy key, enter the name documenter as the title, and copy the public key into the Key field.  Note that you should include no whitespace when copying the key. Check Allow write access to allow Documenter to commit the generated documentation to the repo.\nNext add the long private key to the Travis settings page using the provided link. Again note that you should include no whitespace when copying the key. In the Environment Variables section add a key with the name DOCUMENTER_KEY and the value that was printed out. Do not set the variable to be displayed in the build log. Then click Add.\nwarning: Security warning\nTo reiterate: make sure that the \"Display value in build log\" option is OFF for the variable, so that it does not get printed when the tests run. This base64-encoded string contains the unencrypted private key that gives full write access to your repository, so it must be kept safe.  Also, make sure that you never expose this variable in your tests, nor merge any code that does. You can read more about Travis environment variables in Travis User Documentation."
},

{
    "location": "man/hosting/#.travis.yml-Configuration-1",
    "page": "Hosting Documentation",
    "title": ".travis.yml Configuration",
    "category": "section",
    "text": "In the after_success section of the .travis.yml file, where code coverage is processed, run your docs/make.jl file:after_success:\n  - julia -e \'Pkg.add(\"Documenter\")\'\n  - julia -e \'cd(Pkg.dir(\"PACKAGE_NAME\")); include(joinpath(\"docs\", \"make.jl\"))\'"
},

{
    "location": "man/hosting/#The-deploydocs-Function-1",
    "page": "Hosting Documentation",
    "title": "The deploydocs Function",
    "category": "section",
    "text": "At the moment your docs/make.jl file probably only containsusing Documenter, PACKAGE_NAME\n\nmakedocs()We\'ll need to add an additional function call to this file after makedocs which would perform the deployment of the docs to the gh-pages branch. Add the following at the end of the file:deploydocs(\n    repo = \"github.com/USER_NAME/PACKAGE_NAME.jl.git\",\n    julia = \"0.6\"\n)where USER_NAME and PACKAGE_NAME must be set to the appropriate names. Note that repo should not specify any protocol, i.e. it should not begin with https:// or git@.Since you are probably testing your package on against multiple Julia versions and on multiple operating systems, you need to specify which of those builds should be used for deployment. This is to avoid deploying the same docs multiple times.The mandatory julia keyword argument specifies the Julia version and must be one from the julia: section of your .travis.yml. The operating system defaults to Linux, but can be changed using the osname keyword as follows:deploydocs(\n    deps   = Deps.pip(\"mkdocs\", \"python-markdown-math\"),\n    repo   = \"github.com/USER_NAME/PACKAGE_NAME.jl.git\",\n    julia  = \"nightly\",\n    osname = \"osx\"\n)This will deploy the docs from the OSX Julia nightly Travis build bot.The keyword deps serves to provide the required dependencies to deploy the documentation. In the example above we include the dependencies mkdocs and python-markdown-math. The former makes sure that MkDocs is installed to deploy the documentation, and the latter provides the mdx_math markdown extension to exploit MathJax rendering of latex equations in markdown. Other dependencies should be included here.See the deploydocs function documentation for more details."
},

{
    "location": "man/hosting/#The-MkDocs-mkdocs.yml-File-1",
    "page": "Hosting Documentation",
    "title": "The MkDocs mkdocs.yml File",
    "category": "section",
    "text": "We\'ll be using MkDocs to convert the markdown files generated by Documenter to HTML. (This, of course, is not the only option you have for this step. Any markdown to HTML converter should work fine with some amount of setting up.)Add an mkdocs.yml file to your docs/ directory with the following content:site_name:        PACKAGE_NAME.jl\nrepo_url:         https://github.com/USER_NAME/PACKAGE_NAME.jl\nsite_description: Description...\nsite_author:      USER_NAME\n\ntheme: readthedocs\n\nextra_css:\n  - assets/Documenter.css\n\nextra_javascript:\n  - https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML\n  - assets/mathjaxhelper.js\n\nmarkdown_extensions:\n  - extra\n  - tables\n  - fenced_code\n  - mdx_math\n\ndocs_dir: \'build\'\n\npages:\n  - Home: index.mdThis is only a basic skeleton. Read through the MkDocs documentation if you would like to know more about the available settings."
},

{
    "location": "man/hosting/#.gitignore-1",
    "page": "Hosting Documentation",
    "title": ".gitignore",
    "category": "section",
    "text": "Add the following to your package\'s .gitignore filedocs/build/\ndocs/site/These are needed to avoid committing generated content to your repository."
},

{
    "location": "man/hosting/#gh-pages-Branch-1",
    "page": "Hosting Documentation",
    "title": "gh-pages Branch",
    "category": "section",
    "text": "By default, Documenter pushes documentation to the gh-pages branch. If the branch does not exist it will be created automatically by deploydocs. If does exist then Documenter simply adds an additional commit with the built documentation. You should be aware that Documenter may overwrite existing content without warning.If you wish to create the gh-pages branch manually the that can be done following these instructions."
},

{
    "location": "man/hosting/#Documentation-Versions-1",
    "page": "Hosting Documentation",
    "title": "Documentation Versions",
    "category": "section",
    "text": "When documentation is generated it is stored in one of the following folders:latest stores the most recent documentation that is committed to the master branch.\nstable stores the most recent documentation from a tagged commit. Older tagged versions are stored in directories named after their tags. These tagged directories are persistent and must be manually removed from the gh-pages branch if necessary.Unless a custom domain is being used, the stable and latest pages are found at:https://USER_NAME.github.io/PACKAGE_NAME.jl/stable\nhttps://USER_NAME.github.io/PACKAGE_NAME.jl/latestOnce your documentation has been pushed to the gh-pages branch you should add links to your README.md pointing to the stable and latest documentation URLs. It is common practice to make use of \"badges\" similar to those used for Travis and AppVeyor build statuses or code coverage. Adding the following to your package README.md should be all that is necessary:[![](https://img.shields.io/badge/docs-stable-blue.svg)](https://USER_NAME.github.io/PACKAGE_NAME.jl/stable)\n[![](https://img.shields.io/badge/docs-latest-blue.svg)](https://USER_NAME.github.io/PACKAGE_NAME.jl/latest)PACKAGE_NAME and USER_NAME should be replaced with their appropriate values. The colour and text of the image can be changed by altering docs-stable-blue as described on shields.io, though it is recommended that package authors follow this standard to make it easier for potential users to find documentation links across multiple package README files.Final RemarksThat should be all that is needed to enable automatic documentation building. Pushing new commits to your master branch should trigger doc builds. Note that other branches do not trigger these builds and neither do pull requests by potential contributors.If you would like to see a more complete example of how this process is setup then take a look at this package\'s repository for some inspiration."
},

{
    "location": "man/latex/#",
    "page": "LaTeX syntax",
    "title": "LaTeX syntax",
    "category": "page",
    "text": ""
},

{
    "location": "man/latex/#latex_syntax-1",
    "page": "LaTeX syntax",
    "title": "LaTeX syntax",
    "category": "section",
    "text": "The following section describes how to add equations written using LaTeX to your documentation."
},

{
    "location": "man/latex/#Escaping-characters-in-docstrings-1",
    "page": "LaTeX syntax",
    "title": "Escaping characters in docstrings",
    "category": "section",
    "text": "Since some characters used in LaTeX syntax are treated differently in docstrings they need to be escaped using a \\ character as in the following example:\"\"\"\nHere\'s some inline maths: \\$\\\\sqrt[n]{1 + x + x^2 + \\\\ldots}\\$.\n\nHere\'s an equation:\n\n\\$\\\\frac{n!}{k!(n - k)!} = \\\\binom{n}{k}\\$\n\nThis is the binomial coefficient.\n\"\"\"\nfunc(x) = # ...To avoid needing to escape the special characters the doc\"\" string macro can be used:doc\"\"\"\nHere\'s some inline maths: $\\sqrt[n]{1 + x + x^2 + \\ldots}$.\n\nHere\'s an equation:\n\n$\\frac{n!}{k!(n - k)!} = \\binom{n}{k}$\n\nThis is the binomial coefficient.\n\"\"\"\nfunc(x) = # ...A related issue is how to add dollar signs to a docstring. They need to be double-escaped as follows:\"\"\"\nThe cost was \\\\\\$1.\n\"\"\""
},

{
    "location": "man/latex/#Inline-equations-1",
    "page": "LaTeX syntax",
    "title": "Inline equations",
    "category": "section",
    "text": "Here\'s some inline maths: ``\\sqrt[n]{1 + x + x^2 + \\ldots}``.which will be displayed asHere\'s some inline maths: sqrtn1 + x + x^2 + ldots."
},

{
    "location": "man/latex/#Display-equations-1",
    "page": "LaTeX syntax",
    "title": "Display equations",
    "category": "section",
    "text": "Here\'s an equation:\n\n```math\n\\frac{n!}{k!(n - k)!} = \\binom{n}{k}\n```\n\nThis is the binomial coefficient.which will be displayed asHere\'s an equation:fracnk(n - k) = binomnkThis is the binomial coefficient."
},

{
    "location": "man/latex/#MkDocs-and-MathJax-1",
    "page": "LaTeX syntax",
    "title": "MkDocs and MathJax",
    "category": "section",
    "text": "To get MkDocs to display LaTeX equations correctly we need to update several of this configuration files described in the Package Guide.docs/make.jl should add the python-markdown-math dependency to allow for equations to be rendered correctly.# ...\n\ndeploydocs(\n    deps = Deps.pip(\"pygments\", \"mkdocs\", \"python-markdown-math\"),\n    # ...\n)This package should also be installed locally so that you can preview the generated documentation prior to pushing new commits to a repository.$ pip install python-markdown-mathThe docs/mkdocs.yml file must add the python-markdown-math extension, called mdx_math, as well as two MathJax JavaScript files:# ...\nmarkdown_extensions:\n  - mdx_math\n  # ...\n\nextra_javascript:\n  - https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML\n  - assets/mathjaxhelper.js\n# ...Final RemarksFollowing this guide and adding the necessary changes to the configuration files should enable properly rendered mathematical equations within your documentation both locally and when built and deployed using the Travis built service."
},

{
    "location": "man/contributing/#",
    "page": "Contributing",
    "title": "Contributing",
    "category": "page",
    "text": ""
},

{
    "location": "man/contributing/#Contributing-1",
    "page": "Contributing",
    "title": "Contributing",
    "category": "section",
    "text": "This page details the some of the guidelines that should be followed when contributing to this package."
},

{
    "location": "man/contributing/#Branches-1",
    "page": "Contributing",
    "title": "Branches",
    "category": "section",
    "text": "From Documenter version 0.3 onwards release-* branches are used for tagged minor versions of this package. This follows the same approach used in the main Julia repository, albeit on a much more modest scale.Please open pull requests against the master branch rather than any of the release-* branches whenever possible."
},

{
    "location": "man/contributing/#Backports-1",
    "page": "Contributing",
    "title": "Backports",
    "category": "section",
    "text": "Bug fixes are backported to the release-* branches using git cherry-pick -x by a JuliaDocs member and will become available in point releases of that particular minor version of the package.Feel free to nominate commits that should be backported by opening an issue. Requests for new point releases to be tagged in METADATA.jl can also be made in the same way."
},

{
    "location": "man/contributing/#release-*-branches-1",
    "page": "Contributing",
    "title": "release-* branches",
    "category": "section",
    "text": "Each new minor version x.y.0 gets a branch called release-x.y (a protected branch).\nNew versions are usually tagged only from the release-x.y branches.\nFor patch releases, changes get backported to the release-x.y branch via a single PR with the standard name \"Backports for x.y.z\" and label \"Type: Backport\". The PR message links to all the PRs that are providing commits to the backport. The PR gets merged as a merge commit (i.e. not squashed).\nThe old release-* branches may be removed once they have outlived their usefulness.\nPatch version milestones are used to keep track of which PRs get backported etc."
},

{
    "location": "man/contributing/#Style-Guide-1",
    "page": "Contributing",
    "title": "Style Guide",
    "category": "section",
    "text": "Follow the style of the surrounding text when making changes. When adding new features please try to stick to the following points whenever applicable."
},

{
    "location": "man/contributing/#Julia-1",
    "page": "Contributing",
    "title": "Julia",
    "category": "section",
    "text": "4-space indentation;\nmodules spanning entire files should not be indented, but modules that have surrounding code should;\nno blank lines at the start or end of files;\ndo not manually align syntax such as = or :: over adjacent lines;\nuse function ... end when a method definition contains more than one toplevel expression;\nrelated short-form method definitions don\'t need a new line between them;\nunrelated or long-form method definitions must have a blank line separating each one;\nsurround all binary operators with whitespace except for ::, ^, and :;\nfiles containing a single module ... end must be named after the module;\nmethod arguments should be ordered based on the amount of usage within the method body;\nmethods extended from other modules must follow their inherited argument order, not the above rule;\nexplicit return should be preferred except in short-form method definitions;\navoid dense expressions where possible e.g. prefer nested ifs over complex nested ?s;\ninclude a trailing , in vectors, tuples, or method calls that span several lines;\ndo not use multiline comments (#= and =#);\nwrap long lines as near to 92 characters as possible, this includes docstrings;\nfollow the standard naming conventions used in Base."
},

{
    "location": "man/contributing/#Markdown-1",
    "page": "Contributing",
    "title": "Markdown",
    "category": "section",
    "text": "Use unbalanced # headers, i.e. no # on the right hand side of the header text;\ninclude a single blank line between toplevel blocks;\nunordered lists must use * bullets with two preceding spaces;\ndo not hard wrap lines;\nuse emphasis (*) and bold (**) sparingly;\nalways use fenced code blocks instead of indented blocks;\nfollow the conventions outlined in the Julia documentation page on documentation."
},

{
    "location": "lib/public/#",
    "page": "Public",
    "title": "Public",
    "category": "page",
    "text": ""
},

{
    "location": "lib/public/#Public-Documentation-1",
    "page": "Public",
    "title": "Public Documentation",
    "category": "section",
    "text": "Documentation for Documenter.jl\'s public interface.See Internal Documentation for internal package docs covering all submodules."
},

{
    "location": "lib/public/#Contents-1",
    "page": "Public",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"public.md\"]"
},

{
    "location": "lib/public/#Index-1",
    "page": "Public",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"public.md\"]"
},

{
    "location": "lib/public/#Public-Interface-1",
    "page": "Public",
    "title": "Public Interface",
    "category": "section",
    "text": "Documenter\nmakedocs\nhide\ndeploydocs\nDocumenter.generate\nTravis\nTravis.genkeys\nDeps\nDeps.pip"
},

{
    "location": "lib/internals/#",
    "page": "Internals",
    "title": "Internals",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/#Internal-Documentation-1",
    "page": "Internals",
    "title": "Internal Documentation",
    "category": "section",
    "text": "This page lists all the documented internals of the Documenter module and submodules."
},

{
    "location": "lib/internals/#Contents-1",
    "page": "Internals",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [joinpath(\"internals\", f) for f in readdir(\"internals\")]"
},

{
    "location": "lib/internals/#Index-1",
    "page": "Internals",
    "title": "Index",
    "category": "section",
    "text": "A list of all internal documentation sorted by module.Pages = [joinpath(\"internals\", f) for f in readdir(\"internals\")]"
},

{
    "location": "lib/internals/anchors/#",
    "page": "Anchors",
    "title": "Anchors",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/anchors/#Documenter.Anchors",
    "page": "Anchors",
    "title": "Documenter.Anchors",
    "category": "module",
    "text": "Defines the Anchor and AnchorMap types.\n\nAnchors and AnchorMaps are used to represent links between objects within a document.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/anchors/#Documenter.Anchors.Anchor",
    "page": "Anchors",
    "title": "Documenter.Anchors.Anchor",
    "category": "type",
    "text": "Stores an arbitrary object called .object and it\'s location within a document.\n\nFields\n\nobject – the stored object.\norder  – ordering of object within the entire document.\nfile   – the destination file, in build, where the object will be written to.\nid     – the generated \"slug\" identifying the object.\nnth    – integer that unique-ifies anchors with the same id.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/anchors/#Documenter.Anchors.AnchorMap",
    "page": "Anchors",
    "title": "Documenter.Anchors.AnchorMap",
    "category": "type",
    "text": "Tree structure representating anchors in a document and their relationships with eachother.\n\nObject Hierarchy\n\nid -> file -> anchors\n\nEach id maps to a file which in turn maps to a vector of Anchor objects.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/anchors/#Documenter.Anchors.add!-Tuple{Documenter.Anchors.AnchorMap,Documenter.Anchors.Anchor,Any,Any}",
    "page": "Anchors",
    "title": "Documenter.Anchors.add!",
    "category": "method",
    "text": "add!(m, anchor, id, file)\n\n\nAdds a new Anchor to the AnchorMap for a given id and file.\n\nEither an actual Anchor object may be provided or any other object which is automatically wrapped in an Anchor before being added to the AnchorMap.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/anchors/#Documenter.Anchors.anchor-Tuple{Documenter.Anchors.AnchorMap,Any}",
    "page": "Anchors",
    "title": "Documenter.Anchors.anchor",
    "category": "method",
    "text": "anchor(m, id)\n\n\nReturns the Anchor object matching id. file and n may also be provided. An Anchor is returned, or nothing in case of no match.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/anchors/#Documenter.Anchors.exists-Tuple{Documenter.Anchors.AnchorMap,Any,Any,Any}",
    "page": "Anchors",
    "title": "Documenter.Anchors.exists",
    "category": "method",
    "text": "exists(m, id, file, n)\n\n\nDoes the given id exist within the AnchorMap? A file and integer n may also be provided to narrow the search for existance.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/anchors/#Documenter.Anchors.isunique-Tuple{Documenter.Anchors.AnchorMap,Any}",
    "page": "Anchors",
    "title": "Documenter.Anchors.isunique",
    "category": "method",
    "text": "isunique(m, id)\n\n\nIs the id unique within the given AnchorMap? May also specify the file.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/anchors/#Anchors-1",
    "page": "Anchors",
    "title": "Anchors",
    "category": "section",
    "text": "Modules = [Documenter.Anchors]"
},

{
    "location": "lib/internals/builder/#",
    "page": "Builder",
    "title": "Builder",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/builder/#Documenter.Builder",
    "page": "Builder",
    "title": "Documenter.Builder",
    "category": "module",
    "text": "Defines the Documenter.jl build \"pipeline\" named DocumentPipeline.\n\nEach stage of the pipeline performs an action on a Documents.Document object. These actions may involve creating directory structures, expanding templates, running doctests, etc.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Documenter.Builder.CheckDocument",
    "page": "Builder",
    "title": "Documenter.Builder.CheckDocument",
    "category": "type",
    "text": "Checks that all documented objects are included in the document and runs doctests on all valid Julia code blocks.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Documenter.Builder.CrossReferences",
    "page": "Builder",
    "title": "Documenter.Builder.CrossReferences",
    "category": "type",
    "text": "Finds and sets URLs for each @ref link in the document to the correct destinations.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Documenter.Builder.DocumentPipeline",
    "page": "Builder",
    "title": "Documenter.Builder.DocumentPipeline",
    "category": "type",
    "text": "The default document processing \"pipeline\", which consists of the following actions:\n\nSetupBuildDirectory\nExpandTemplates\nCrossReferences\nCheckDocument\nPopulate\nRenderDocument\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Documenter.Builder.ExpandTemplates",
    "page": "Builder",
    "title": "Documenter.Builder.ExpandTemplates",
    "category": "type",
    "text": "Executes a sequence of actions on each node of the parsed markdown files in turn.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Documenter.Builder.Populate",
    "page": "Builder",
    "title": "Documenter.Builder.Populate",
    "category": "type",
    "text": "Populates the ContentsNodes and IndexNodes with links.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Documenter.Builder.RenderDocument",
    "page": "Builder",
    "title": "Documenter.Builder.RenderDocument",
    "category": "type",
    "text": "Writes the document tree to the build directory.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Documenter.Builder.SetupBuildDirectory",
    "page": "Builder",
    "title": "Documenter.Builder.SetupBuildDirectory",
    "category": "type",
    "text": "Creates the correct directory layout within the build folder and parses markdown files.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Documenter.Builder.walk_navpages-NTuple{6,Any}",
    "page": "Builder",
    "title": "Documenter.Builder.walk_navpages",
    "category": "method",
    "text": "walk_navpages(visible, title, src, children, parent, doc)\n\n\nRecursively walks through the Documents.Document\'s .user.pages field, generating Documents.NavNodes and related data structures in the process.\n\nThis implementation is the de facto specification for the .user.pages field.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/builder/#Builder-1",
    "page": "Builder",
    "title": "Builder",
    "category": "section",
    "text": "Modules = [Documenter.Builder]"
},

{
    "location": "lib/internals/cross-references/#",
    "page": "CrossReferences",
    "title": "CrossReferences",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/cross-references/#Documenter.CrossReferences",
    "page": "CrossReferences",
    "title": "Documenter.CrossReferences",
    "category": "module",
    "text": "Provides the crossref function used to automatically calculate link URLs.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/cross-references/#Documenter.CrossReferences.crossref-Tuple{Documenter.Documents.Document}",
    "page": "CrossReferences",
    "title": "Documenter.CrossReferences.crossref",
    "category": "method",
    "text": "crossref(doc)\n\n\nTraverses a Documents.Document and replaces links containg @ref URLs with their real URLs.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/cross-references/#Documenter.CrossReferences.find_object-Tuple{Documenter.Documents.Document,Any,Any}",
    "page": "CrossReferences",
    "title": "Documenter.CrossReferences.find_object",
    "category": "method",
    "text": "find_object(doc, binding, typesig)\n\n\nFind the included Object in the doc matching binding and typesig. The matching heuristic isn\'t too picky about what matches and will only fail when no Bindings matching binding have been included.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/cross-references/#CrossReferences-1",
    "page": "CrossReferences",
    "title": "CrossReferences",
    "category": "section",
    "text": "Modules = [Documenter.CrossReferences]"
},

{
    "location": "lib/internals/docchecks/#",
    "page": "DocChecks",
    "title": "DocChecks",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/docchecks/#Documenter.DocChecks",
    "page": "DocChecks",
    "title": "Documenter.DocChecks",
    "category": "module",
    "text": "Provides the missingdocs, footnotes and linkcheck functions for checking docs.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docchecks/#Documenter.DocChecks.footnotes-Tuple{Documenter.Documents.Document}",
    "page": "DocChecks",
    "title": "Documenter.DocChecks.footnotes",
    "category": "method",
    "text": "footnotes(doc)\n\n\nChecks footnote links in a Documents.Document.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docchecks/#Documenter.DocChecks.linkcheck-Tuple{Documenter.Documents.Document}",
    "page": "DocChecks",
    "title": "Documenter.DocChecks.linkcheck",
    "category": "method",
    "text": "linkcheck(doc)\n\n\nChecks external links using curl.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docchecks/#Documenter.DocChecks.missingdocs-Tuple{Documenter.Documents.Document}",
    "page": "DocChecks",
    "title": "Documenter.DocChecks.missingdocs",
    "category": "method",
    "text": "missingdocs(doc)\n\n\nChecks that a Documents.Document contains all available docstrings that are defined in the modules keyword passed to Documenter.makedocs.\n\nPrints out the name of each object that has not had its docs spliced into the document.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docchecks/#DocChecks-1",
    "page": "DocChecks",
    "title": "DocChecks",
    "category": "section",
    "text": "Modules = [Documenter.DocChecks]"
},

{
    "location": "lib/internals/docsystem/#",
    "page": "DocSystem",
    "title": "DocSystem",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/docsystem/#Documenter.DocSystem",
    "page": "DocSystem",
    "title": "Documenter.DocSystem",
    "category": "module",
    "text": "Provides a consistent interface to retreiving DocStr objects from the Julia docsystem in both 0.4 and 0.5.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docsystem/#Documenter.DocSystem.binding-Tuple{Any}",
    "page": "DocSystem",
    "title": "Documenter.DocSystem.binding",
    "category": "method",
    "text": "Converts an object to a Base.Docs.Binding object.\n\nbinding(any)\n\n\nSupported inputs are:\n\nBinding\nDataType\nFunction\nModule\nSymbol\n\nNote that unsupported objects will throw an ArgumentError.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docsystem/#Documenter.DocSystem.convertmeta-Tuple{IdDict{Any,Any}}",
    "page": "DocSystem",
    "title": "Documenter.DocSystem.convertmeta",
    "category": "method",
    "text": "convertmeta(meta)\n\n\nConverts a 0.4-style docstring cache into a 0.5 one.\n\nThe original docstring cache is not modified.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docsystem/#Documenter.DocSystem.docstr-Tuple{Markdown.MD}",
    "page": "DocSystem",
    "title": "Documenter.DocSystem.docstr",
    "category": "method",
    "text": "docstr(md; kws...)\n\n\nConstruct a DocStr object from a Markdown.MD object.\n\nThe optional keyword arguments are used to add new data to the DocStr\'s .data dictionary.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docsystem/#Documenter.DocSystem.getdocs",
    "page": "DocSystem",
    "title": "Documenter.DocSystem.getdocs",
    "category": "function",
    "text": "getdocs(binding)\ngetdocs(binding, typesig; compare, modules, aliases)\n\n\nFind all DocStr objects that match the provided arguments:\n\nbinding: the name of the object.\ntypesig: the signature of the object. Default: Union{}.\ncompare: how to compare signatures? Exact (==) or subtypes (<:). Default: <:.\nmodules: which modules to search through. Default: all modules.\naliases: check aliases of binding when nothing is found. Default: true.\n\nReturns a Vector{DocStr} ordered by definition order in 0.5 and by type_morespecific in 0.4.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docsystem/#Documenter.DocSystem.getdocs",
    "page": "DocSystem",
    "title": "Documenter.DocSystem.getdocs",
    "category": "function",
    "text": "getdocs(object)\ngetdocs(object, typesig; kws...)\n\n\nAccepts objects of any type and tries to convert them to Bindings before searching for the Binding in the docsystem.\n\nNote that when conversion fails this method returns an empty Vector{DocStr}.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docsystem/#Documenter.DocSystem.multidoc",
    "page": "DocSystem",
    "title": "Documenter.DocSystem.multidoc",
    "category": "function",
    "text": "Construct a MultiDoc object from the provided argument.\n\nValid inputs are:\n\nMarkdown.MD\nDocs.FuncDoc\nDocs.TypeDoc\n\n\n\n\n\n"
},

{
    "location": "lib/internals/docsystem/#DocSystem-1",
    "page": "DocSystem",
    "title": "DocSystem",
    "category": "section",
    "text": "Modules = [Documenter.DocSystem]"
},

{
    "location": "lib/internals/documenter/#",
    "page": "Documenter",
    "title": "Documenter",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/documenter/#Documenter.gitrm_copy",
    "page": "Documenter",
    "title": "Documenter.gitrm_copy",
    "category": "function",
    "text": "gitrm_copy(src, dst)\n\nUses git rm -r to remove dst and then copies src to dst. Assumes that the working directory is within the git repository of dst is when the function is called.\n\nThis is to get around #507 on filesystems that are case-insensitive (e.g. on OS X, Windows). Without doing a git rm first, git add -A will not detect case changes in filenames.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documenter/#Documenter.git_push",
    "page": "Documenter",
    "title": "Documenter.git_push",
    "category": "function",
    "text": "git_push(\n    root, tmp, repo;\n    branch=\"gh-pages\", dirname=\"\", target=\"site\", tag=\"\", key=\"\", sha=\"\", devurl=\"dev\"\n)\n\nHandles pushing changes to the remote documentation branch. When tag is empty the docs are deployed to the devurl directory, and when building docs for a tag they are deployed to a vX.Y.Z directory.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documenter/#Documenter-1",
    "page": "Documenter",
    "title": "Documenter",
    "category": "section",
    "text": "Documenter.gitrm_copy\nDocumenter.git_push"
},

{
    "location": "lib/internals/documents/#",
    "page": "Documents",
    "title": "Documents",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/documents/#Documenter.Documents",
    "page": "Documents",
    "title": "Documenter.Documents",
    "category": "module",
    "text": "Defines Document and its supporting types\n\nPage\nUser\nInternal\nGlobals\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.Document",
    "page": "Documents",
    "title": "Documenter.Documents.Document",
    "category": "type",
    "text": "Represents an entire document.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.Globals",
    "page": "Documents",
    "title": "Documenter.Documents.Globals",
    "category": "type",
    "text": "Page-local values such as current module that are shared between nodes in a page.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.Internal",
    "page": "Documents",
    "title": "Documenter.Documents.Internal",
    "category": "type",
    "text": "Private state used to control the generation process.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.NavNode",
    "page": "Documents",
    "title": "Documenter.Documents.NavNode",
    "category": "type",
    "text": "Element in the navigation tree of a document, containing navigation references to other page, reference to the Page object etc.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.Page",
    "page": "Documents",
    "title": "Documenter.Documents.Page",
    "category": "type",
    "text": "Represents a single markdown file.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.User",
    "page": "Documents",
    "title": "Documenter.Documents.User",
    "category": "type",
    "text": "User-specified values used to control the generation process.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.getplugin-Union{Tuple{T}, Tuple{Document,Type{T}}} where T<:Documenter.Plugin",
    "page": "Documents",
    "title": "Documenter.Documents.getplugin",
    "category": "method",
    "text": "getplugin(doc::Document, T)\n\nRetrieves the Plugin type for T stored in doc. If T was passed to makedocs, the passed type will be returned. Otherwise, a new T object will be created using the default constructor T().\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.navpath-Tuple{Documenter.Documents.NavNode}",
    "page": "Documents",
    "title": "Documenter.Documents.navpath",
    "category": "method",
    "text": "Constructs a list of the ancestors of the navnode (inclding the navnode itself), ordered so that the root of the navigation tree is the first and navnode itself is the last item.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.populate!-Tuple{Documenter.Documents.Document}",
    "page": "Documents",
    "title": "Documenter.Documents.populate!",
    "category": "method",
    "text": "populate!(document)\n\n\nPopulates the ContentsNodes and IndexNodes of the document with links.\n\nThis can only be done after all the blocks have been expanded (and nodes constructed), because the items have to exist before we can gather the links to those items.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documenter.Documents.walk-Tuple{Any,Any,Any}",
    "page": "Documents",
    "title": "Documenter.Documents.walk",
    "category": "method",
    "text": "walk(f, meta, element)\n\n\nCalls f on element and any of its child elements. meta is a Dict containing metadata such as current module.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/documents/#Documents-1",
    "page": "Documents",
    "title": "Documents",
    "category": "section",
    "text": "Modules = [Documenter.Documents]"
},

{
    "location": "lib/internals/dom/#",
    "page": "DOM",
    "title": "DOM",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/dom/#Documenter.Utilities.DOM",
    "page": "DOM",
    "title": "Documenter.Utilities.DOM",
    "category": "module",
    "text": "Provides a domain specific language for representing HTML documents.\n\nExamples\n\nusing Documenter.Utilities.DOM\n\n# `DOM` does not export any HTML tags. Define the ones we actually need.\n@tags div p em strong ul li\n\ndiv(\n    p(\"This \", em(\"is\"), \" a \", strong(\"paragraph.\"),\n    p(\"And this is \", strong(\"another\"), \" one\"),\n    ul(\n        li(\"and\"),\n        li(\"an\"),\n        li(\"unordered\"),\n        li(\"list\")\n    )\n)\n\nNotes\n\nAll the arguments passed to a node are flattened into a single vector rather than preserving any nested structure. This means that passing two vectors of nodes to a div will result in a div node with a single vector of children (the concatenation of the two vectors) rather than two vector children. The only arguments that are not flattened are nested nodes.\n\nString arguments are automatically converted into text nodes. Text nodes do not have any children or attributes and when displayed the string is escaped using escapehtml.\n\nAttributes\n\nAs well as plain nodes shown in the previous example, nodes can have attributes added to them using the following syntax.\n\ndiv[\".my-class\"](\n    img[:src => \"foo.jpg\"],\n    input[\"#my-id\", :disabled]\n)\n\nIn the above example we add a class = \"my-class\" attribute to the div node, a src = \"foo.jpg\" to the img, and id = \"my-id\" disabled attributes to the input node.\n\nThe following syntax is supported within [...]:\n\ntag[\"#id\"]\ntag[\".class\"]\ntag[\".class#id\"]\ntag[:disabled]\ntag[:src => \"foo.jpg\"]\n# ... or any combination of the above arguments.\n\nInternal Representation\n\nThe @tags macro defines named Tag objects as follows\n\n@tags div p em strong\n\nexpands to\n\nconst div, p, em, strong = Tag(:div), Tag(:p), Tag(:em), Tag(:strong)\n\nThese Tag objects are lightweight representations of empty HTML elements without any attributes and cannot be used to represent a complete document. To create an actual tree of HTML elements that can be rendered we need to add some attributes and/or child elements using getindex or call syntax. Applying either to a Tag object will construct a new Node object.\n\ntag(...)      # No attributes.\ntag[...]      # No children.\ntag[...](...) # Has both attributes and children.\n\nAll three of the above syntaxes return a new Node object. Printing of Node objects is defined using the standard Julia display functions, so only needs a call to print to print out a valid HTML document with all nessesary text escaped.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/dom/#Documenter.Utilities.DOM.@tags-Tuple",
    "page": "DOM",
    "title": "Documenter.Utilities.DOM.@tags",
    "category": "macro",
    "text": "Define a collection of Tag objects and bind them to constants with the same names.\n\nExamples\n\nDefined globally within a module:\n\n@tags div ul li\n\nDefined within the scope of a function to avoid cluttering the global namespace:\n\nfunction template(args...)\n    @tags div ul li\n    # ...\nend\n\n\n\n\n\n"
},

{
    "location": "lib/internals/dom/#Documenter.Utilities.DOM.HTMLDocument",
    "page": "DOM",
    "title": "Documenter.Utilities.DOM.HTMLDocument",
    "category": "type",
    "text": "A HTML node that wraps around the root node of the document and adds a DOCTYPE to it.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/dom/#Documenter.Utilities.DOM.Node",
    "page": "DOM",
    "title": "Documenter.Utilities.DOM.Node",
    "category": "type",
    "text": "Represents an element within an HTML document including any textual content, children Nodes, and attributes.\n\nThis type should not be constructed directly, but instead via (...) and [...] applied to a Tag or another Node object.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/dom/#Documenter.Utilities.DOM.Tag",
    "page": "DOM",
    "title": "Documenter.Utilities.DOM.Tag",
    "category": "type",
    "text": "Represents a empty and attribute-less HTML element.\n\nUse @tags to define instances of this type rather than manually creating them via Tag(:tagname).\n\n\n\n\n\n"
},

{
    "location": "lib/internals/dom/#Documenter.Utilities.DOM.escapehtml-Tuple{AbstractString}",
    "page": "DOM",
    "title": "Documenter.Utilities.DOM.escapehtml",
    "category": "method",
    "text": "Escape characters in the provided string. This converts the following characters:\n\n< to &lt;\n> to &gt;\n& to &amp;\n\' to &#39;\n\" to &quot;\n\nWhen no escaping is needed then the same object is returned, otherwise a new string is constructed with the characters escaped. The returned object should always be treated as an immutable copy and compared using == rather than ===.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/dom/#Documenter.Utilities.DOM.flatten!-Tuple{Any,Any,Union{AbstractString, Symbol, Node, Pair}}",
    "page": "DOM",
    "title": "Documenter.Utilities.DOM.flatten!",
    "category": "method",
    "text": "Signatures\n\nflatten!(f!, out, x::Atom)\nflatten!(f!, out, xs)\n\nFlatten the contents the third argument into the second after applying the function f! to the element.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/dom/#DOM-1",
    "page": "DOM",
    "title": "DOM",
    "category": "section",
    "text": "Modules = [Documenter.Utilities.DOM]"
},

{
    "location": "lib/internals/expanders/#",
    "page": "Expanders",
    "title": "Expanders",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders",
    "page": "Expanders",
    "title": "Documenter.Expanders",
    "category": "module",
    "text": "Defines node \"expanders\" that transform nodes from the parsed markdown files.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.AutoDocsBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.AutoDocsBlocks",
    "category": "type",
    "text": "Parses each code block where the language is @autodocs and replaces it with all the docstrings that match the provided key/value pairs Modules = ... and Order = ....\n\n```@autodocs\nModules = [Foo, Bar]\nOrder   = [:function, :type]\n```\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.ContentsBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.ContentsBlocks",
    "category": "type",
    "text": "Parses each code block where the language is @contents and replaces it with a nested list of all Header nodes in the generated document. The pages and depth of the list can be set using Pages = [...] and Depth = N where N is and integer.\n\n```@contents\nPages = [\"foo.md\", \"bar.md\"]\nDepth = 1\n```\n\nThe default Depth value is 2.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.DocsBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.DocsBlocks",
    "category": "type",
    "text": "Parses each code block where the language is @docs and evaluates the expressions found within the block. Replaces the block with the docstrings associated with each expression.\n\n```@docs\nDocumenter\nmakedocs\ndeploydocs\n```\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.EvalBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.EvalBlocks",
    "category": "type",
    "text": "Parses each code block where the language is @eval and evaluates it\'s content. Replaces the block with the value resulting from the evaluation. This can be useful for inserting generated content into a document such as plots.\n\n```@eval\nusing PyPlot\nx = linspace(-π, π)\ny = sin(x)\nplot(x, y, color = \"red\")\nsavefig(\"plot.svg\")\nMarkdown.parse(\"![Plot](plot.svg)\")\n```\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.ExampleBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.ExampleBlocks",
    "category": "type",
    "text": "Parses each code block where the language is @example and evaluates the parsed Julia code found within. The resulting value is then inserted into the final document after the source code.\n\n```@example\na = 1\nb = 2\na + b\n```\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.ExpanderPipeline",
    "page": "Expanders",
    "title": "Documenter.Expanders.ExpanderPipeline",
    "category": "type",
    "text": "The default node expander \"pipeline\", which consists of the following expanders:\n\nTrackHeaders\nMetaBlocks\nDocsBlocks\nAutoDocsBlocks\nEvalBlocks\nIndexBlocks\nContentsBlocks\nExampleBlocks\nSetupBlocks\nREPLBlocks\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.IndexBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.IndexBlocks",
    "category": "type",
    "text": "Parses each code block where the language is @index and replaces it with an index of all docstrings spliced into the document. The pages that are included can be set using a key/value pair Pages = [...] such as\n\n```@index\nPages = [\"foo.md\", \"bar.md\"]\n```\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.MetaBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.MetaBlocks",
    "category": "type",
    "text": "Parses each code block where the language is @meta and evaluates the key/value pairs found within the block, i.e.\n\n```@meta\nCurrentModule = Documenter\nDocTestSetup  = quote\n    using Documenter\nend\n```\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.REPLBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.REPLBlocks",
    "category": "type",
    "text": "Similar to the ExampleBlocks expander, but inserts a Julia REPL prompt before each toplevel expression in the final document.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.SetupBlocks",
    "page": "Expanders",
    "title": "Documenter.Expanders.SetupBlocks",
    "category": "type",
    "text": "Similar to the ExampleBlocks expander, but hides all output in the final document.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Documenter.Expanders.TrackHeaders",
    "page": "Expanders",
    "title": "Documenter.Expanders.TrackHeaders",
    "category": "type",
    "text": "Tracks all Markdown.Header nodes found in the parsed markdown files and stores an Anchors.Anchor object for each one.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/expanders/#Expanders-1",
    "page": "Expanders",
    "title": "Expanders",
    "category": "section",
    "text": "Modules = [Documenter.Expanders]"
},

{
    "location": "lib/internals/formats/#",
    "page": "Formats",
    "title": "Formats",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/formats/#Documenter.Formats",
    "page": "Formats",
    "title": "Documenter.Formats",
    "category": "module",
    "text": "Filetypes used to decide which rendering methods in Documenter.Writers are called.\n\nThe only supported format is currently Markdown.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/formats/#Documenter.Formats.mimetype-Tuple{Symbol}",
    "page": "Formats",
    "title": "Documenter.Formats.mimetype",
    "category": "method",
    "text": "mimetype(f)\n\n\nConverts a Format value to a MIME type.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/formats/#Formats-1",
    "page": "Formats",
    "title": "Formats",
    "category": "section",
    "text": "Modules = [Documenter.Formats]"
},

{
    "location": "lib/internals/generator/#",
    "page": "Generator",
    "title": "Generator",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/generator/#Generator-1",
    "page": "Generator",
    "title": "Generator",
    "category": "section",
    "text": "Modules = [Documenter.Generator]"
},

{
    "location": "lib/internals/mdflatten/#",
    "page": "MDFlatten",
    "title": "MDFlatten",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/mdflatten/#Documenter.Utilities.MDFlatten",
    "page": "MDFlatten",
    "title": "Documenter.Utilities.MDFlatten",
    "category": "module",
    "text": "Provides the mdflatten function that can \"flatten\" Markdown objects into a string, with formatting etc. stripped.\n\nNote that the tests in test/mdflatten.jl should be considered to be the spec for the output (number of newlines, indents, formatting, etc.).\n\n\n\n\n\n"
},

{
    "location": "lib/internals/mdflatten/#Documenter.Utilities.MDFlatten.mdflatten-Tuple{Any}",
    "page": "MDFlatten",
    "title": "Documenter.Utilities.MDFlatten.mdflatten",
    "category": "method",
    "text": "Convert a Markdown object to a String of only text (i.e. not formatting info).\n\nIt drop most of the extra information (e.g. language of a code block, URLs) and formatting (e.g. emphasis, headers). This \"flattened\" representation can then be used as input for search engines.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/mdflatten/#MDFlatten-1",
    "page": "MDFlatten",
    "title": "MDFlatten",
    "category": "section",
    "text": "Modules = [Documenter.Utilities.MDFlatten]"
},

{
    "location": "lib/internals/selectors/#",
    "page": "Selectors",
    "title": "Selectors",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/selectors/#Documenter.Utilities.Selectors",
    "page": "Selectors",
    "title": "Documenter.Utilities.Selectors",
    "category": "module",
    "text": "An extensible code selection interface.\n\nThe Selectors module provides an extensible way to write code that has to dispatch on different predicates without hardcoding the control flow into a single chain of if statements.\n\nIn the following example a selector for a simple condition is implemented and the generated selector code is described:\n\nabstract type MySelector <: Selectors.AbstractSelector end\n\n# The different cases we want to test.\nabstract type One    <: MySelector end\nabstract type NotOne <: MySelector end\n\n# The order in which to test the cases.\nSelectors.order(::Type{One})    = 0.0\nSelectors.order(::Type{NotOne}) = 1.0\n\n# The predicate to test against.\nSelectors.matcher(::Type{One}, x)    = x === 1\nSelectors.matcher(::Type{NotOne}, x) = x !== 1\n\n# What to do when a test is successful.\nSelectors.runner(::Type{One}, x)    = println(\"found one\")\nSelectors.runner(::Type{NotOne}, x) = println(\"not found\")\n\n# Test our selector with some numbers.\nfor i in 0:5\n    Selectors.dispatch(MySelector, i)\nend\n\nSelectors.dispatch(Selector, i) will behave equivalent to the following:\n\nfunction dispatch(::Type{MySelector}, i::Int)\n    if matcher(One, i)\n        runner(One, i)\n    elseif matcher(NotOne, i)\n        runner(NotOne, i)\n    end\nend\n\nand further to\n\nfunction dispatch(::Type{MySelector}, i::Int)\n    if i === 1\n        println(\"found one\")\n    elseif i !== 1\n        println(\"not found\")\n    end\nend\n\nThe module provides the following interface for creating selectors:\n\norder\nmatcher\nrunner\nstrict\ndisable\ndispatch\n\n\n\n\n\n"
},

{
    "location": "lib/internals/selectors/#Documenter.Utilities.Selectors.AbstractSelector",
    "page": "Selectors",
    "title": "Documenter.Utilities.Selectors.AbstractSelector",
    "category": "type",
    "text": "Root selector type. Each user-defined selector must subtype from this, i.e.\n\nabstract type MySelector <: Selectors.AbstractSelector end\n\nabstract type First  <: MySelector end\nabstract type Second <: MySelector end\n\n\n\n\n\n"
},

{
    "location": "lib/internals/selectors/#Documenter.Utilities.Selectors.disable-Union{Tuple{Type{T}}, Tuple{T}} where T<:Documenter.Utilities.Selectors.AbstractSelector",
    "page": "Selectors",
    "title": "Documenter.Utilities.Selectors.disable",
    "category": "method",
    "text": "Disable a particular case in a selector so that it is never used.\n\nSelectors.disable(::Type{Debug}) = true\n\n\n\n\n\n"
},

{
    "location": "lib/internals/selectors/#Documenter.Utilities.Selectors.dispatch-Union{Tuple{T}, Tuple{Type{T},Vararg{Any,N} where N}} where T<:Documenter.Utilities.Selectors.AbstractSelector",
    "page": "Selectors",
    "title": "Documenter.Utilities.Selectors.dispatch",
    "category": "method",
    "text": "Call Selectors.runner(T, args...) where T is a subtype of MySelector for which matcher(T, args...) is true.\n\nSelectors.dispatch(MySelector, args...)\n\n\n\n\n\n"
},

{
    "location": "lib/internals/selectors/#Documenter.Utilities.Selectors.matcher",
    "page": "Selectors",
    "title": "Documenter.Utilities.Selectors.matcher",
    "category": "function",
    "text": "Define the matching test for each case in a selector, i.e.\n\nSelectors.matcher(::Type{First}, x)  = x == 1\nSelectors.matcher(::Type{Second}, x) = true\n\nNote that the return type must be Bool.\n\nTo match against multiple cases use the Selectors.strict function.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/selectors/#Documenter.Utilities.Selectors.order",
    "page": "Selectors",
    "title": "Documenter.Utilities.Selectors.order",
    "category": "function",
    "text": "Define the precedence of each case in a selector, i.e.\n\nSelectors.order(::Type{First})  = 1.0\nSelectors.order(::Type{Second}) = 2.0\n\nNote that the return type must be Float64. Defining multiple case types to have the same order will result in undefined behaviour.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/selectors/#Documenter.Utilities.Selectors.runner",
    "page": "Selectors",
    "title": "Documenter.Utilities.Selectors.runner",
    "category": "function",
    "text": "Define the code that will run when a particular Selectors.matcher test returns true, i.e.\n\nSelectors.runner(::Type{First}, x)  = println(\"`x` is equal to `1`.\")\nSelectors.runner(::Type{Second}, x) = println(\"`x` is not equal to `1`.\")\n\n\n\n\n\n"
},

{
    "location": "lib/internals/selectors/#Documenter.Utilities.Selectors.strict-Union{Tuple{Type{T}}, Tuple{T}} where T<:Documenter.Utilities.Selectors.AbstractSelector",
    "page": "Selectors",
    "title": "Documenter.Utilities.Selectors.strict",
    "category": "method",
    "text": "Define whether a selector case will \"fallthrough\" or not when successfully matched against. By default matching is strict and does not fallthrough to subsequent selector cases.\n\n# Adding a debugging selector case.\nabstract type Debug <: MySelector end\n\n# Insert prior to all other cases.\nSelectors.order(::Type{Debug}) = 0.0\n\n# Fallthrough to the next case on success.\nSelectors.strict(::Type{Debug}) = false\n\n# We always match, regardless of the value of `x`.\nSelectors.matcher(::Type{Debug}, x) = true\n\n# Print some debugging info.\nSelectors.runner(::Type{Debug}, x) = @show x\n\n\n\n\n\n"
},

{
    "location": "lib/internals/selectors/#Selectors-1",
    "page": "Selectors",
    "title": "Selectors",
    "category": "section",
    "text": "Modules = [Documenter.Selectors]"
},

{
    "location": "lib/internals/textdiff/#",
    "page": "TextDiff",
    "title": "TextDiff",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/textdiff/#Documenter.Utilities.TextDiff.splitby-Tuple{Regex,AbstractString}",
    "page": "TextDiff",
    "title": "Documenter.Utilities.TextDiff.splitby",
    "category": "method",
    "text": "splitby(reg, text)\n\n\nSplits text at regex matches, returning an array of substrings. The parts of the string that match the regular expression are also included at the ends of the returned strings.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/textdiff/#TextDiff-1",
    "page": "TextDiff",
    "title": "TextDiff",
    "category": "section",
    "text": "Modules = [Documenter.Utilities.TextDiff]"
},

{
    "location": "lib/internals/utilities/#",
    "page": "Utilities",
    "title": "Utilities",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities",
    "page": "Utilities",
    "title": "Documenter.Utilities",
    "category": "module",
    "text": "Provides a collection of utility functions and types that are used in other submodules.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.Object",
    "page": "Utilities",
    "title": "Documenter.Utilities.Object",
    "category": "type",
    "text": "Represents an object stored in the docsystem by its binding and signature.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.assetsdir-Tuple{}",
    "page": "Utilities",
    "title": "Documenter.Utilities.assetsdir",
    "category": "method",
    "text": "Returns the path to the Documenter assets directory.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.check_kwargs-Tuple{Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.check_kwargs",
    "category": "method",
    "text": "Prints a formatted warning to the user listing unrecognised keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.currentdir-Tuple{}",
    "page": "Utilities",
    "title": "Documenter.Utilities.currentdir",
    "category": "method",
    "text": "Returns the current directory.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.doccat-Tuple{Documenter.Utilities.Object}",
    "page": "Utilities",
    "title": "Documenter.Utilities.doccat",
    "category": "method",
    "text": "Returns the category name of the provided Object.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.docs",
    "page": "Utilities",
    "title": "Documenter.Utilities.docs",
    "category": "function",
    "text": "docs(ex, str)\n\nReturns an expression that, when evaluated, returns the docstrings associated with ex.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.filterdocs-Tuple{Markdown.MD,Set{Module}}",
    "page": "Utilities",
    "title": "Documenter.Utilities.filterdocs",
    "category": "method",
    "text": "filterdocs(doc, modules)\n\nRemove docstrings from the markdown object, doc, that are not from one of modules.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.get_commit_short-Tuple{Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.get_commit_short",
    "category": "method",
    "text": "get_commit_short(dir)\n\n\nReturns the first 5 characters of the current git commit hash of the directory dir.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.isabsurl-Tuple{Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.isabsurl",
    "category": "method",
    "text": "isabsurl(url)\n\nChecks whether url is an absolute URL (as opposed to a relative one).\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.issubmodule-Tuple{Any,Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.issubmodule",
    "category": "method",
    "text": "issubmodule(sub, mod)\n\nChecks whether sub is a submodule of mod. A module is also considered to be its own submodule.\n\nE.g. A.B.C is a submodule of A, A.B and A.B.C, but it is not a submodule of D, A.D nor A.B.C.D.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.nodocs-Tuple{Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.nodocs",
    "category": "method",
    "text": "Does the given docstring represent actual documentation or a no docs error message?\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.object-Tuple{Union{Expr, Symbol},AbstractString}",
    "page": "Utilities",
    "title": "Documenter.Utilities.object",
    "category": "method",
    "text": "object(ex, str)\n\nReturns a expression that, when evaluated, returns an Object representing ex.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.parseblock-Tuple{AbstractString,Any,Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.parseblock",
    "category": "method",
    "text": "Returns a vector of parsed expressions and their corresponding raw strings.\n\nReturns a Vector of tuples (expr, code), where expr is the corresponding expression (e.g. a Expr or Symbol object) and code is the string of code the expression was parsed from.\n\nThe keyword argument skip = N drops the leading N lines from the input string.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.relpath_from_repo_root-Tuple{Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.relpath_from_repo_root",
    "category": "method",
    "text": "relpath_from_repo_root(file)\n\n\nReturns the path of file, relative to the root of the Git repository, or nothing if the file is not in a Git repository.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.repo_root-Tuple{Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.repo_root",
    "category": "method",
    "text": "repo_root(file; dbdir=\".git\")\n\nTries to determine the root directory of the repository containing file. If the file is not in a repository, the function returns nothing.\n\nThe dbdir keyword argument specifies the name of the directory we are searching for to determine if this is a repostory or not. If there is a file called dbdir, then it\'s contents is checked under the assumption that it is a Git worktree.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.slugify-Tuple{AbstractString}",
    "page": "Utilities",
    "title": "Documenter.Utilities.slugify",
    "category": "method",
    "text": "Slugify a string into a suitable URL.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.srcpath-Tuple{Any,Any,Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.srcpath",
    "category": "method",
    "text": "Find the path of a file relative to the source directory. root is the path to the directory containing the file file.\n\nIt is meant to be used with walkdir(source).\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.submodules-Tuple{Array{Module,1}}",
    "page": "Utilities",
    "title": "Documenter.Utilities.submodules",
    "category": "method",
    "text": "Returns the set of submodules of a given root module/s.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Documenter.Utilities.withoutput-Tuple{Any}",
    "page": "Utilities",
    "title": "Documenter.Utilities.withoutput",
    "category": "method",
    "text": "Call a function and capture all stdout and stderr output.\n\nwithoutput(f) --> (result, success, backtrace, output)\n\nwhere\n\nresult is the value returned from calling function f.\nsuccess signals whether f has thrown an error, in which case result stores the Exception that was raised.\nbacktrace a Vector{Ptr{Cvoid}} produced by catch_backtrace() if an error is thrown.\noutput is the combined output of stdout and stderr during execution of f.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/utilities/#Utilities-1",
    "page": "Utilities",
    "title": "Utilities",
    "category": "section",
    "text": "Modules = [Documenter.Utilities]"
},

{
    "location": "lib/internals/writers/#",
    "page": "Writers",
    "title": "Writers",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/writers/#Documenter.Writers",
    "page": "Writers",
    "title": "Documenter.Writers",
    "category": "module",
    "text": "A module that provides several renderers for Document objects. The supported formats are currently:\n\n:markdown – the default format.\n:html – generates a complete HTML site with navigation and search included.\n:latex – generates a PDF using LuaLaTeX.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.render-Tuple{Documenter.Documents.Document}",
    "page": "Writers",
    "title": "Documenter.Writers.render",
    "category": "method",
    "text": "Writes a Documents.Document object to .user.build directory in the formats specified in the .user.format vector.\n\nAdding additional formats requires adding new Selector definitions as follows:\n\nabstract type CustomFormat <: FormatSelector end\n\nSelectors.order(::Type{CustomFormat}) = 4.0 # or a higher number.\nSelectors.matcher(::Type{CustomFormat}, fmt, _) = fmt === :custom\nSelectors.runner(::Type{CustomFormat}, _, doc) = CustomWriter.render(doc)\n\n# Definition of `CustomWriter` module below...\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.MarkdownWriter",
    "page": "Writers",
    "title": "Documenter.Writers.MarkdownWriter",
    "category": "module",
    "text": "A module for rendering Document objects to markdown.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter",
    "category": "module",
    "text": "A module for rendering Document objects to HTML.\n\nKeywords\n\nHTMLWriter uses the following additional keyword arguments that can be passed to Documenter.makedocs: assets, sitename, analytics, authors, pages, version. The behavior of HTMLWriter can be further customized by passing Documenter.makedocs a HTML, which accepts the following keyword arguments: prettyurls, disable_git, edit_branch, canonical.\n\nsitename is the site\'s title displayed in the title bar and at the top of the *navigation menu. This argument is mandatory for HTMLWriter.\n\npages defines the hierarchy of the navigation menu.\n\nassets can be used to include additional assets (JS, CSS, ICO etc. files). See below for more information.\n\nExperimental keywords\n\nanalytics can be used specify the Google Analytics tracking ID.\n\nversion specifies the version string of the current version which will be the selected option in the version selector. If this is left empty (default) the version selector will be hidden. The special value git-commit sets the value in the output to git:{commit}, where {commit} is the first few characters of the current commit hash.\n\nHTML Plugin options\n\nThe HTML Documenter.Plugin provides additional customization options for the HTMLWriter. For more information, see the HTML documentation.\n\nPage outline\n\nThe HTMLWriter makes use of the page outline that is determined by the headings. It is assumed that if the very first block of a page is a level 1 heading, then it is intended as the page title. This has two consequences:\n\nIt is then used to automatically determine the page title in the navigation menu and in the <title> tag, unless specified in the .pages option.\nIf the first heading is interpreted as being the page title, it is not displayed in the navigation sidebar.\n\nDefault and custom assets\n\nDocumenter copies all files under the source directory (e.g. /docs/src/) over to the compiled site. It also copies a set of default assets from /assets/html/ to the site\'s assets/ directory, unless the user already had a file with the same name, in which case the user\'s files overrides the Documenter\'s file. This could, in principle, be used for customizing the site\'s style and scripting.\n\nThe HTML output also links certain custom assets to the generated HTML documents, specifically a logo and additional javascript files. The asset files that should be linked must be placed in assets/, under the source directory (e.g /docs/src/assets) and must be on the top level (i.e. files in the subdirectories of assets/ are not linked).\n\nFor the logo, Documenter checks for the existence of assets/logo.png. If that\'s present, it gets displayed in the navigation bar.\n\nAdditional JS, ICO, and CSS assets can be included in the generated pages using the assets keyword for makedocs. assets must be a Vector{String} and will include each listed asset in the <head> of every page in the order in which they are listed. The type of the asset (i.e. whether it is going to be included with a <script> or a <link> tag) is determined by the file\'s extension – either .js, .ico, or .css. Adding an ICO asset is primarilly useful for setting a custom favicon.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.HTML",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.HTML",
    "category": "type",
    "text": "HTML(kwargs...)\n\nSets the behavior of HTMLWriter.\n\nKeyword arguments\n\nprettyurls (default true) – allows toggling the pretty URLs feature.\n\nBy default (i.e. when prettyurls is set to true), Documenter creates a directory structure that hides the .html suffixes from the URLs (e.g. by default src/foo.md becomes src/foo/index.html, but can be accessed with via src/foo/ in the browser). This structure is preferred when publishing the generate HTML files as a website (e.g. on GitHub Pages), which is Documenter\'s primary use case.\n\nIf prettyurls = false, then Documenter generates src/foo.html instead, suitable for local documentation builds, as browsers do not normally resolve foo/ to foo/index.html for local files.\n\nTo have pretty URLs disabled in local builds, but still have them enabled for the automatic CI deployment builds, you can set prettyurls = get(ENV, \"CI\", nothing) == \"true\" (the specific environment variable you will need to check may depend on the CI system you are using, but this will work on Travis CI).\n\ndisable_git can be used to disable calls to git when the document is not in a Git-controlled repository. Without setting this to true, Documenter will throw an error and exit if any of the Git commands fail. The calls to Git are mainly used to gather information about the current commit hash and file paths, necessary for constructing the links to the remote repository.\n\nedit_branch specifies which branch, tag or commit the \"Edit on GitHub\" links point to. It defaults to master. If it set to nothing, the current commit will be used.\n\ncanonical specifies the canonical URL for your documentation. We recommend you set this to the base url of your stable documentation, e.g. https://juliadocs.github.io/Documenter.jl/stable. This allows search engines to know which version to send their users to. See wikipedia for more information. Default is nothing, in which case no canonical link is set.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.MDBlockContext",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.MDBlockContext",
    "category": "constant",
    "text": "MDBlockContext is a union of all the Markdown nodes whose children should be blocks. It can be used to dispatch on all the block-context nodes at once.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.HTMLContext",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.HTMLContext",
    "category": "type",
    "text": "HTMLWriter-specific globals that are passed to domify and other recursive functions.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.collect_subsections-Tuple{Documenter.Documents.Page}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.collect_subsections",
    "category": "method",
    "text": "Returns an ordered list of tuples, (toplevel, anchor, text), corresponding to level 1 and 2 headings on the page. Note that if the first header on the page is a level 1 header then it is not included – it is assumed to be the page title and so does not need to be included in the navigation menu twice.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.copy_asset-Tuple{Any,Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.copy_asset",
    "category": "method",
    "text": "Copies an asset from Documenters assets/html/ directory to doc.user.build. Returns the path of the copied asset relative to .build.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.domify-Tuple{Any,Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.domify",
    "category": "method",
    "text": "Converts recursively a Documents.Page, Markdown or Documenter *Node objects into HTML DOM.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.fixlinks!-Tuple{Any,Any,Markdown.Link}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.fixlinks!",
    "category": "method",
    "text": "Replaces URLs in Markdown.Link elements (if they point to a local .md page) with the actual URLs.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.get_url-Tuple{Any,AbstractString}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.get_url",
    "category": "method",
    "text": "Returns the full path corresponding to a path of a .md page file. The the input and output paths are assumed to be relative to src/.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.get_url-Tuple{Any,Documenter.Documents.NavNode}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.get_url",
    "category": "method",
    "text": "Returns the full path of a Documents.NavNode relative to src/.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.getpage-Tuple{Any,Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.getpage",
    "category": "method",
    "text": "Returns a page (as a Documents.Page object) using the HTMLContext.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.jsescape-Tuple{Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.jsescape",
    "category": "method",
    "text": "Replaces some of the characters in the string with escape sequences so that the strings would be valid JS string literals, as per the ECMAScript® 2017 standard.\n\nNote that it always escapes both potential \" and \' closing quotes.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.mdconvert-Tuple{Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.mdconvert",
    "category": "method",
    "text": "Convert a markdown object to a DOM.Node object.\n\nThe parent argument is passed to allow for context-dependant conversions.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.navhref-Tuple{Any,Any,Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.navhref",
    "category": "method",
    "text": "Get the relative hyperlink between two Documents.NavNodes. Assumes that both Documents.NavNodes have an associated Documents.Page (i.e. .page is not nothing).\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.navitem-Tuple{Any,Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.navitem",
    "category": "method",
    "text": "navitem returns the lists and list items of the navigation menu. It gets called recursively to construct the whole tree.\n\nIt always returns a DOM.Node. If there\'s nothing to display (e.g. the node is set to be invisible), it returns an empty text node (DOM.Node(\"\")).\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.open_output-Tuple{Any,Any,Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.open_output",
    "category": "method",
    "text": "Opens the output file of the navnode in write node. If necessary, the path to the output file is created before opening the file.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.pagetitle-Tuple{Documenter.Documents.Page}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.pagetitle",
    "category": "method",
    "text": "Tries to guess the page title by looking at the <h1> headers and returns the header contents of the first <h1> on a page (or nothing if the algorithm was unable to find any <h1> headers).\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.pretty_url-Tuple{Any,AbstractString}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.pretty_url",
    "category": "method",
    "text": "If html_prettyurls is enabled, returns a \"pretty\" version of the path which can then be used in links in the resulting HTML file.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.relhref-Tuple{Any,Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.relhref",
    "category": "method",
    "text": "Calculates a relative HTML link from one path to another.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.HTMLWriter.render_page-Tuple{Any,Any}",
    "page": "Writers",
    "title": "Documenter.Writers.HTMLWriter.render_page",
    "category": "method",
    "text": "Constructs and writes the page referred to by the navnode to .build.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.LaTeXWriter",
    "page": "Writers",
    "title": "Documenter.Writers.LaTeXWriter",
    "category": "module",
    "text": "A module for rendering Document objects to LaTeX and PDF.\n\nKeywords\n\nLaTeXWriter uses the following additional keyword arguments that can be passed to Documenter.makedocs: authors, sitename.\n\nsitename is the site\'s title displayed in the title bar and at the top of the navigation menu. It goes into the \\title LaTeX command.\n\nauthors can be used to specify the authors of. It goes into the \\author LaTeX command.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Documenter.Writers.LaTeXWriter.LaTeX",
    "page": "Writers",
    "title": "Documenter.Writers.LaTeXWriter.LaTeX",
    "category": "type",
    "text": "LaTeXWriter.LaTeX(; kwargs...)\n\nOutput format specifier that results in LaTeX/PDF output. Used together with makedocs, e.g.\n\nmakedocs(\n    format = LaTeX()\n)\n\nThe makedocs argument sitename will be used for the \\title field in the tex document, and if the build is for a release tag (i.e. when the \"TRAVIS_TAG\" environment variable is set) the version number will be appended to the title. The makedocs argument authors should also be specified, it will be used for the \\authors field in the tex document.\n\nKeyword arguments\n\nplatform sets the platform where the tex-file is compiled, either \"native\" (default) or \"docker\". See Other Output Formats for more information.\n\n\n\n\n\n"
},

{
    "location": "lib/internals/writers/#Writers-1",
    "page": "Writers",
    "title": "Writers",
    "category": "section",
    "text": "Modules = [\n    Documenter.Writers,\n    Documenter.Writers.MarkdownWriter,\n    Documenter.Writers.HTMLWriter,\n    Documenter.Writers.LaTeXWriter,\n]"
},

]}
