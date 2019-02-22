var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: LaTeXStrings) (Image: LaTeXStrings)"
},

{
    "location": "#LaTeXStrings-1",
    "page": "Readme",
    "title": "LaTeXStrings",
    "category": "section",
    "text": "This is a small package to make it easier to type LaTeX equations in string literals in the Julia language, written by Steven G. Johnson.With ordinary strings in Julia, to enter a string literal with embedded LaTeX equations you need to manually escape all backslashes and dollar signs: for example, $\\alpha^2$ is written \\$\\\\alpha^2\\$.  Also, even though IJulia is capable of displaying formatted LaTeX equations (via MathJax), an ordinary string will not exploit this.  Therefore, the LaTeXStrings package defines:A LaTeXString class (a subtype of String), which works like a string (for indexing, conversion, etcetera), but automatically displays as text/latex in IJulia.\nL\"...\" and L\"\"\"...\"\"\" string macros which allow you to enter LaTeX equations without escaping backslashes and dollar signs (and which add the dollar signs for you if you omit them)."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "After installing LaTeXStrings with Pkg.add(\"LaTeXStrings\") in Julia, runusing LaTeXStringsto load the package.  At this point, you can construct LaTeXString literals with the constructor L\"...\" (and L\"\"\"...\"\"\" for multi-line strings); for example L\"1 + \\alpha^2\" or L\"an equation: $1 + \\alpha^2$\".  (Note that $ is added automatically around your string, i.e. the string is interpreted as an equation, if you do not include $ yourself.)You can also use the lower-level constructor latexstring(args...), which works much like string(args...) except that it produces a LaTeXString result and automatically puts $ at the beginning and end of the string if an unescaped $ is not already present.  Note that with latexstring(...) you do have to escape $ and \\: for example, latexstring(\"an equation: \\$1 + \\\\alpha^2\\$\").  One reason you might want to use latexstring instead of L\"...\" is that only the former supports string interpolation (inserting the values of other variables into your string).Finally, you can use the lowest-level constructor LaTeXString(s).  The only advantage of this is that it does not automatically put $ at the beginning and end of the string.  So, if for some reason you want to use text/latex display of ordinary text (with no equations or formatting), you can use this constructor.  (Note that IJulia only formats LaTeX equations; other LaTeX text-formatting commands like \\emph are ignored.)"
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "This package was written by Steven G. Johnson, and is distributed under the MIT/expat license (see the LICENSE.md file)."
},

{
    "location": "autodocs/#LaTeXStrings.LaTeXString",
    "page": "Docstrings",
    "title": "LaTeXStrings.LaTeXString",
    "category": "type",
    "text": "A LaTeXString is a string type whose contents represent a fragment of LaTeX code, typically containing an equation ($...$).   In certain environments (e.g. IJulia) this will display with LaTeX-like formatting.   For the most part, you can use a LaTeXString object in any context that expects an AbstractString object.\n\nThe L\"...\" macro is convenient for constructing LaTeXString objects, because it eliminates the need to escape backslashes and dollar signs, and implicitly inserts dollar signs around the string if none are present.  For example, L\"$\\alpha$\", L\"\\alpha\", and LaTeXString(\"\\$\\\\alpha\\$\") are all equivalent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LaTeXStrings.LaTeXStrings",
    "page": "Docstrings",
    "title": "LaTeXStrings.LaTeXStrings",
    "category": "module",
    "text": "The LaTeXStrings module exists mainly to make LaTeX equations easier to type as literal strings, and so that the resulting strings display as formatted equations in supporting environments like IJulia.\n\nSee in particular the LaTeXString type and the L\"...\" constructor macro.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LaTeXStrings.latexstring",
    "page": "Docstrings",
    "title": "LaTeXStrings.latexstring",
    "category": "function",
    "text": "latexstring(args...)\n\nSimilar to string(args...), but generates a LaTeXString instead of a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LaTeXStrings.@L_mstrLaTeXStrings.@L_strLaTeXStrings.LaTeXStringLaTeXStrings.LaTeXStringsLaTeXStrings.evalLaTeXStrings.includeLaTeXStrings.latexstring"
},

]}
