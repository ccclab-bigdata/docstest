var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AngleBetweenVectors.jl-1",
    "page": "Readme",
    "title": "AngleBetweenVectors.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#When-computing-the-arc-separating-two-cartesian-vectors,-this-is-robustly-stable;-others-are-not.-1",
    "page": "Readme",
    "title": "When computing the arc separating two cartesian vectors, this is robustly stable; others are not.",
    "category": "section",
    "text": ""
},

{
    "location": "#Copyright-and-thinsp;2018-by-Jeffrey-Sarnoff.-and-nbsp;-and-nbsp;-This-work-is-released-under-The-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright ©&thinsp;2018 by Jeffrey Sarnoff. &nbsp;&nbsp; This work is released under The MIT License.",
    "category": "section",
    "text": "(Image: Build Status)AngleBetweenVectors exports angle. angle(point1, point2) determines the angle of their separation.   The smaller of the two solutions is used.  π obtains If the points are opposed, [(1,0), (-1,0)]; so 0 <= angle(p1, p2) <= pi.This function expects two points from a 2D, 3D .. ManyD space, in Cartesian coordinates.  Tuples and Vectors are handled immediately (prefer Tuples for speed). To use another point representations, just define a Tuple constructor for it.  NamedTuples and SVectors have this already.Most software uses acos(dot(p1, p2) / sqrt(norm(p1) norm(p2)) instead.  While they coincide often; it is exceedingly easy to find cases where angle is more accurate and then, usually they differ by a few ulps. Not always."
},

{
    "location": "#provides-1",
    "page": "Readme",
    "title": "provides",
    "category": "section",
    "text": "angle( point₁, point₂ )\npoints are given as Cartesian coordinates\npoints may be of any finite dimension >= 2\npoints may be any type with a Tuple constructor defined"
},

{
    "location": "#point-representations-that-just-work-1",
    "page": "Readme",
    "title": "point representations that just work",
    "category": "section",
    "text": "points as Tuples\npoints as NamedTuples\npoints as Vectors\npoints as SVectors     (StaticArrays)"
},

{
    "location": "#working-with-other-point-representations-1",
    "page": "Readme",
    "title": "working with other point representations",
    "category": "section",
    "text": "Just define a Tuple constructor for the representation.  That\'s all.# working with this?\nstruct Point3D{T}\n    x::T\n    y::T\n    z::T\nend\n\n#  define this:\nBase.Tuple(a::Point3D{T}) where {T} = (a.x, a.y, a.z)\n\n#  this just works:\nangle(point1::Point3D{T}, point2::Point3D{T})  where {T}"
},

{
    "location": "#why-use-it-1",
    "page": "Readme",
    "title": "why use it",
    "category": "section",
    "text": "This implementation is more robustly accurate than the usual method.You can work with points in 2D, 3D, .. 1000D .. ?."
},

{
    "location": "#notes-1",
    "page": "Readme",
    "title": "notes",
    "category": "section",
    "text": "The shorter of two angle solutions is returned as an unoriented magnitude (0 <= radians < π).\nVectors are given by their Cartesian coordinates in 2D, 3D or .. N-dimensions.\nThis follows a note by Professor Kahan in Computing Cross-Products and Rotations (pg 15): \"More uniformly accurate .. valid for  Euclidean  spaces of any dimension,   it never errs by more than a modest multiple of ε.\"  "
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AngleBetweenVectors.AngleBetweenVectorsAngleBetweenVectors.evalAngleBetweenVectors.includeAngleBetweenVectors.unitize"
},

]}
