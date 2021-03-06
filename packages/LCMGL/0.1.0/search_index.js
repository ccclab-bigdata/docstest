var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LCMGL-1",
    "page": "Readme",
    "title": "LCMGL",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov)This package provides Julia bindings for the libbot lcmgl package, which allows OpenGL commands to be executed from a remote process using the LCM message passing system. It uses Julia\'s native C support to call directly into the libbot2-lcmgl-client library, so it should perform well with minimal overhead.To use LCMGL, you\'ll need a viewer capable of listening to and displaying the resulting drawing commands. One excellent LCMGL-capable viewer is the drake-visualizer app, which is part of the free Drake robotics toolbox."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Construct a named LCMGL Client with:lcmgl = LCMGLClient(\"client_name\")LCMGL functions are mapped to Julia functions:color(lcmgl, rand(4)...)\nsphere(lcmgl, rand(3), 0.1, 20, 20)\nswitch_buffer(lcmgl)Multiple LCMGL clients can also share the same LCM object:lcm = LCM()\ngl1 = LCMGLClient(lcm, \"gl1\")\ngl2 = LCMGLClient(lcm, \"gl2\")A do-block syntax is also provided to make it easy to automatically construct and destroy an lcmgl client:LCMGLClient(\"test\") do lcmgl\n    color(lcmgl, rand(4)...)\n    sphere(lcmgl, rand(3), 0.1, 20, 20)\nendThe do-block syntax will also automatically call switch_buffer() at the end of the block if there are any drawing commands waiting to be displayed."
},

{
    "location": "#Memory-Management-1",
    "page": "Readme",
    "title": "Memory Management",
    "category": "section",
    "text": "When an LCM or LCMGLClient object is finalized by the Julia garbage collector, the appropriate C function will also be called to destroy the underlying C object. If you want to explicitly free that C object early, you can call close(lcm) or close(lcmgl) yourself. You may find this useful if you get errors about too many file objects being used by LCM. Calling close() multiple times on the same Julia object is safe."
},

{
    "location": "#Function-Names-1",
    "page": "Readme",
    "title": "Function Names",
    "category": "section",
    "text": "This package attempts to provide a consistent naming scheme for exported lcmgl functions: the bot2_lcmgl_ prefix is always removed, and suffixes that exist only to indicate the number or type of arguments have also been removed. So, for example, bot_lcmgl_vertex2d has become vertex(lcmgl, x, y) and bot_lcmgl_vertex3d has become vertex(lcmgl, x, y, z). There are a few exceptions: begin and end are reserved keywords in Julia, so they have become begin_mode(lcmgl, mode) and end_mode(lcmgl), and scale is already defined in Base, so it has become scale_axes(lcmgl, x_scale, y_scale, z_scale)."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LCMGL.@checked_libLCMGL.ClcmglLCMGL.LCMLCMGL.LCMGLLCMGL.LCMGLClientLCMGL.LINESLCMGL.LINE_LOOPLCMGL.LINE_STRIPLCMGL.POINTSLCMGL.POLYGONLCMGL.QUADSLCMGL.QUAD_STRIPLCMGL.TRIANGLESLCMGL.TRIANGLE_FANLCMGL.TRIANGLE_STRIPLCMGL.__init__LCMGL.begin_modeLCMGL.closeLCMGL.colorLCMGL.datalenLCMGL.depsjlLCMGL.draw_axesLCMGL.end_modeLCMGL.evalLCMGL.includeLCMGL.libbot2_lcmgl_clientLCMGL.liblcmLCMGL.line_widthLCMGL.load_identityLCMGL.normalLCMGL.point_sizeLCMGL.pop_matrixLCMGL.push_matrixLCMGL.rotateLCMGL.scale_axesLCMGL.sphereLCMGL.switch_bufferLCMGL.translateLCMGL.vertex"
},

]}
