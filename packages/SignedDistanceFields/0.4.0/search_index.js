var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io) (Image: Coverage Status)"
},

{
    "location": "#SignedDistanceFields-1",
    "page": "Readme",
    "title": "SignedDistanceFields",
    "category": "section",
    "text": "This package implements an algorithm for quickly computing signed distance fields in 2D.result = sdf(img), where img is a 2-dimensional boolean array with true indicating the foreground and false indicating the background.If you want a downsampled distance field, you can call sdf(img, xsize[, ysize=xsize]), and pass it your desired output dimensions. Right now we only support scaling by integer amounts (e.g. turning a 1024x1024 image into a 64x64 SDF or a 500x500 image into a 125x125 SDF).There is also an edf function with identical usage that calculates the Euclidean distance transform—the distance from every background pixel to the closest pixel in the foreground.Signed distance fields are a useful representation for rendering glyphs and other shapes with crisp edges using OpenGL. By allowing the graphics hardware to interpolate between distance samples and testing for the shape boundary in the vertex shader, you can get surprisingly high-resolution output from smaller SDFs.Here\'s a paper from Valve introducing the idea and here\'s a good blog post about using signed distance fields for rendering text.(Image: Build Status)"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SignedDistanceFields.SignedDistanceFieldsSignedDistanceFields.downsampleSignedDistanceFields.edfSignedDistanceFields.edf_sqSignedDistanceFields.evalSignedDistanceFields.includeSignedDistanceFields.sdfSignedDistanceFields.xsweep!"
},

]}
