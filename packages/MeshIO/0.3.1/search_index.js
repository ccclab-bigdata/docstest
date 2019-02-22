var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MeshIO-1",
    "page": "Readme",
    "title": "MeshIO",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io) (Image: Coverage Status)This package supports loading of the following formats: obj, stl, ply, off and 2DM More will come. Loading works over the FileIO interface. This means loading a mesh is as simple as this:using FileIO\nmesh = load(\"path/to/mesh.obj\")Displaying a mesh can be achieved with GLVisualize, GLPlot and ThreeJS.Functions for mesh manipulation can be found in Meshes and JuliaGeometry"
},

{
    "location": "#Some-Infos-1",
    "page": "Readme",
    "title": "Some Infos",
    "category": "section",
    "text": "MeshIO now has the HomogenousMesh type. Name is still not settled, but it\'s supposed to be a dense mesh with all attributes either having the length of one (constant over the whole mesh) or the same length (per vertex). This meshtype holds a large variability for all the different attribute mixtures that I\'ve encountered while trying to visualize things over at GLVisualize. This is the best type I\'ve found so far to encode this large variability, without an explosion of functions.The focus is on conversion between different mesh types and creation of different mesh types. This has led to some odd seeming design choices. First, you can get an attribute via decompose(::Type{AttributeType}, ::Mesh). This will try to get this attribute, and if it has the wrong type try to convert it, or if it is not available try to create it. So decompose(Point3{Float32}, mesh) on a mesh with vertices of type Point3{Float64} will return a vector of type Point3{Float32}. Similarly, if you call decompose(Normal3{Float32}, mesh) but the mesh doesn\'t have normals, it will call the function normals(mesh.vertices, mesh.faces, Normal3{Float32}, which will create the normals for the mesh. As most attributes are independent, this  enables us to easily create all kinds of conversions. Also, I can define decompose for arbitrary geometric types. decompose{T}(Point3{T}, r::Rectangle) can actually return the needed vertices for a rectangle. This together with convert enables us to create mesh primitives like this:MeshType(Cube(...))\nMeshType(Sphere(...))\nMeshType(Volume, 0.4f0) #0.4f0 => isovalueSimilarly, I can pass a meshtype to an IO function, which then parses only the attributes that I really need. So passing Mesh{Point3{Float32}, Face3{UInt32}} to the obj importer will skip normals, uv coordinates etc, and automatically converts the given attributes to the right number type.To put this one level further, the Face type has the index offset relative to Julia\'s indexing as a parameter (e.g. Face3{T, 0} is 1 indexed). Also, you can index into an array with this face type, and it will convert the indexes correctly while accessing the array. So something like this always works, independent of the underlying index offset:v1, v2, v3 = vertices[face]Also, the importer is sensitive to this, so if you always want to work with 0-indexed faces (like it makes sense for opengl based visualizations), you can parse the mesh already as an 0-indexed mesh, by just defining the mesh format to use Face3{T, -1}. (only the OBJ importer yet)Small example to demonstrate the advantage for IO: Julia #Export takes any mesh function write{M <: Mesh}(msh::M, fn::File{:ply_binary})     # even if the native mesh format doesn\'t have an array of dense points or faces, the correct ones will     # now be created, or converted:     vts = decompose(Point3{Float32}, msh) # I know ply_binary needs Point3{Float32}     fcs = decompose(Face3{Int32, -1}, msh) # And 0 indexed Int32 faces.     #write code... end"
},

{
    "location": "#TODO-1",
    "page": "Readme",
    "title": "TODO",
    "category": "section",
    "text": "Port all the other importers/exporters to use the new mesh type and the FileIO API\nInclude more meshtypes for more exotic formats\nWrite tests"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "MeshIO.MeshIOMeshIO.evalMeshIO.includeMeshIO.loadMeshIO.process_faceMeshIO.process_face_normalMeshIO.process_face_uv_or_normalMeshIO.renderMeshIO.saveMeshIO.triangulated_faces"
},

]}
