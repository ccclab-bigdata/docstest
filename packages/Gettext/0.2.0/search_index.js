var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Gettext.jl-1",
    "page": "Readme",
    "title": "Gettext.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)An interface to the gettext internationalization/translation interface."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, run Pkg.update() and then Pkg.add(\"Gettext\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "A simple string can be translated as follows:using Gettext\n\nbindtextdomain(\"sample\", \"po/\")\ntextdomain(\"sample\")\n\nprintln(_\"Hello, world!\")In fact, such a sample program can be run from the toplevel directory of this repository as follows:$ LANGUAGE=fr julia helloworld.jl\nBonjour le monde !"
},

{
    "location": "#String-interpolation-1",
    "page": "Readme",
    "title": "String interpolation",
    "category": "section",
    "text": "For string interpolation, you will need to use a runtime method (e.g. Formatting.jl) rather than Julia\'s built-in compile-time interpolation syntax.  If using Formatting.jl, it probably makes sense to use the \"Python\" formatting style, as it allows the translations to have different argument orders than the original strings.  For example,using Gettext\nusing Formatting\n\nbindtextdomain(\"sample\", \"po/\")\ntextdomain(\"sample\")\n\ndaystr(n) = format(ngettext(\"{1} day\", \"{1} days\", n), n)\n\nprintln(daystr(1))\nprintln(daystr(3))When run, this gives$ LANGUAGE=fr julia daystr.jl\n1 jour\n3 jours"
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "Currently this library relies on Python\'s built-in gettext.py implementation via PyCall.  In the future, it may make sense to port this code into a Julia-native version (see issue #1)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Gettext.@N__strGettext.@__strGettext.GettextGettext.__init__Gettext.bindtextdomainGettext.dgettextGettext.dlgettextGettext.dngettextGettext.evalGettext.gettextGettext.gtGettext.includeGettext.ldngettextGettext.lgettextGettext.lngettextGettext.ngettextGettext.textdomain"
},

]}
