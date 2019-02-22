var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EarCut-1",
    "page": "Readme",
    "title": "EarCut",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)Wrapper for earcut.hpp, a header only library for triangulating polygons.License of wrapper: MITLicense of earcut.hpp: ISCInstall with:Pkg.add(\"EarCut\")\nPkg.test(\"EarCut\")Usage:using EarCut\nusing GeometryTypes\na = Circle(Point2f0(0), 0.5f0)\nb = Circle(Point2f0(0), 1f0)\npolygon = [decompose(Point2f0, b), decompose(Point2f0, a)] # some points defining a polygon. Must be a Vector{Vector{Point}}\ntriangle_faces = triangulate(polygon)\n# then display with e.g. GLVisualize like this:\nusing GLVisualize, Colors; w = glscreen(); @async renderloop(w)\nv = map(x-> Point3f0(x[1], x[2], 0), vcat(polygon...))\nmesh = GLNormalMesh(vertices=v, faces=triangle_faces)\n_view(visualize(mesh), camera = :orthographic_pixel)\nGLAbstraction.center!(w, :orthographic_pixel)resulting in:(Image: image)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EarCut.EarCutEarCut.__init__EarCut.check_depsEarCut.depsfileEarCut.earcutEarCut.evalEarCut.includeEarCut.triangulate"
},

]}
