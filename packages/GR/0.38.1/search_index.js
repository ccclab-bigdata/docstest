var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#The-GR-module-for-Julia-1",
    "page": "Readme",
    "title": "The GR module for Julia",
    "category": "section",
    "text": "(Image: The MIT License) (Image: GitHub tag) (Image: Build Status) (Image: GR) (Image: Join the chat at https://gitter.im/jheinen/GR.jl)(Image: Screenshots)This module provides a Julia interface to GR, a framework for visualisation applications."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "From the Julia REPL an up to date version can be installed with:Pkg.add(\"GR\")or in the Pkg REPL-mode:add GRThe Julia package manager will download and install a pre-compiled run-time (for your hardware architecture), if the GR software is not already installed in the recommended locations."
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "In Julia simply type using GR and begin calling functions in the GR framework API.Let\'s start with a simple example. We generate 10,000 random numbers and create a histogram. The histogram function automatically chooses an appropriate number of bins to cover the range of values in x and show the shape of the underlying distribution.using GR\nhistogram(randn(10000))"
},

{
    "location": "#Using-GR-as-backend-for-Plots.jl-1",
    "page": "Readme",
    "title": "Using GR as backend for Plots.jl",
    "category": "section",
    "text": "Plots is a powerful wrapper around other Julia visualization \"backends\", where GR seems to be one of the favorite ones. To get an impression how complex visualizations may become easier with Plots, take a look at these  examples.Plots is great on its own, but the real power comes from the ecosystem surrounding it. You can find more information here."
},

{
    "location": "autodocs/#GR.activatews",
    "page": "Docstrings",
    "title": "GR.activatews",
    "category": "function",
    "text": "activatews(workstation_id::Int)\n\nActivate the specified workstation.\n\nParameters:\n\nworkstation_id :     A workstation identifier.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.axes2d",
    "page": "Docstrings",
    "title": "GR.axes2d",
    "category": "function",
    "text": "axes2d(x_tick::Real, y_tick::Real, x_org::Real, y_org::Real, major_x::Int, major_y::Int, tick_size::Real)\n\nDraw X and Y coordinate axes with linearly and/or logarithmically spaced tick marks.\n\nParameters:\n\nx_tick, y_tick :     The interval between minor tick marks on each axis. x_org, y_org :     The world coordinates of the origin (point of intersection) of the X     and Y axes. major_x, major_y :     Unitless integer values specifying the number of minor tick intervals     between major tick marks. Values of 0 or 1 imply no minor ticks.     Negative values specify no labels will be drawn for the associated axis. tick_size :     The length of minor tick marks specified in a normalized device     coordinate unit. Major tick marks are twice as long as minor tick marks.     A negative value reverses the tick marks on the axes from inward facing     to outward facing (or vice versa).\n\nTick marks are positioned along each axis so that major tick marks fall on the axes origin (whether visible or not). Major tick marks are labeled with the corresponding data values. Axes are drawn according to the scale of the window. Axes and tick marks are drawn using solid lines; line color and width can be modified using the setlinetype and setlinewidth functions. Axes are drawn according to the linear or logarithmic transformation established by the setscale function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.begingraphics",
    "page": "Docstrings",
    "title": "GR.begingraphics",
    "category": "function",
    "text": "begingraphics(path)\n\nOpen a file for graphics output.\n\nParameters:\n\npath :     Filename for the graphics file.\n\nbegingraphics allows to write all graphics output into a XML-formatted file until the endgraphics functions is called. The resulting file may later be imported with the importgraphics function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.beginprint",
    "page": "Docstrings",
    "title": "GR.beginprint",
    "category": "function",
    "text": "beginprint(pathname)\n\nOpen and activate a print device.\n\nParameters:\n\npathname :     Filename for the print device.\n\nbeginprint opens an additional graphics output device. The device type is obtained from the given file extension. The following file types are supported:\n\n+-------------+---------------------------------------+\n|.ps, .eps    |PostScript                             |\n+-------------+---------------------------------------+\n|.pdf         |Portable Document Format               |\n+-------------+---------------------------------------+\n|.bmp         |Windows Bitmap (BMP)                   |\n+-------------+---------------------------------------+\n|.jpeg, .jpg  |JPEG image file                        |\n+-------------+---------------------------------------+\n|.png         |Portable Network Graphics file (PNG)   |\n+-------------+---------------------------------------+\n|.tiff, .tif  |Tagged Image File Format (TIFF)        |\n+-------------+---------------------------------------+\n|.fig         |Xfig vector graphics file              |\n+-------------+---------------------------------------+\n|.svg         |Scalable Vector Graphics               |\n+-------------+---------------------------------------+\n|.wmf         |Windows Metafile                       |\n+-------------+---------------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.beginprintext",
    "page": "Docstrings",
    "title": "GR.beginprintext",
    "category": "function",
    "text": "beginprintext(pathname, mode, fmt, orientation)\n\nOpen and activate a print device with the given layout attributes.\n\nParameters:\n\npathname :     Filename for the print device. mode :     Output mode (Color, GrayScale) fmt :     Output format (see table below) orientation :     Page orientation (Landscape, Portait)\n\nThe available formats are:\n\n+-----------+---------------+\n|A4         |0.210 x 0.297  |\n+-----------+---------------+\n|B5         |0.176 x 0.250  |\n+-----------+---------------+\n|Letter     |0.216 x 0.279  |\n+-----------+---------------+\n|Legal      |0.216 x 0.356  |\n+-----------+---------------+\n|Executive  |0.191 x 0.254  |\n+-----------+---------------+\n|A0         |0.841 x 1.189  |\n+-----------+---------------+\n|A1         |0.594 x 0.841  |\n+-----------+---------------+\n|A2         |0.420 x 0.594  |\n+-----------+---------------+\n|A3         |0.297 x 0.420  |\n+-----------+---------------+\n|A5         |0.148 x 0.210  |\n+-----------+---------------+\n|A6         |0.105 x 0.148  |\n+-----------+---------------+\n|A7         |0.074 x 0.105  |\n+-----------+---------------+\n|A8         |0.052 x 0.074  |\n+-----------+---------------+\n|A9         |0.037 x 0.052  |\n+-----------+---------------+\n|B0         |1.000 x 1.414  |\n+-----------+---------------+\n|B1         |0.500 x 0.707  |\n+-----------+---------------+\n|B10        |0.031 x 0.044  |\n+-----------+---------------+\n|B2         |0.500 x 0.707  |\n+-----------+---------------+\n|B3         |0.353 x 0.500  |\n+-----------+---------------+\n|B4         |0.250 x 0.353  |\n+-----------+---------------+\n|B6         |0.125 x 0.176  |\n+-----------+---------------+\n|B7         |0.088 x 0.125  |\n+-----------+---------------+\n|B8         |0.062 x 0.088  |\n+-----------+---------------+\n|B9         |0.044 x 0.062  |\n+-----------+---------------+\n|C5E        |0.163 x 0.229  |\n+-----------+---------------+\n|Comm10E    |0.105 x 0.241  |\n+-----------+---------------+\n|DLE        |0.110 x 0.220  |\n+-----------+---------------+\n|Folio      |0.210 x 0.330  |\n+-----------+---------------+\n|Ledger     |0.432 x 0.279  |\n+-----------+---------------+\n|Tabloid    |0.279 x 0.432  |\n+-----------+---------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.cellarray",
    "page": "Docstrings",
    "title": "GR.cellarray",
    "category": "function",
    "text": "cellarray(xmin::Real, xmax::Real, ymin::Real, ymax::Real, dimx::Int, dimy::Int, color)\n\nDisplay rasterlike images in a device-independent manner. The cell array function partitions a rectangle given by two corner points into DIMX X DIMY cells, each of them colored individually by the corresponding color index of the given cell array.\n\nParameters:\n\nxmin, ymin :     Lower left point of the rectangle xmax, ymax :     Upper right point of the rectangle dimx, dimy :     X and Y dimension of the color index array color :     Color index array\n\nThe values for xmin, xmax, ymin and ymax are in world coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.closews",
    "page": "Docstrings",
    "title": "GR.closews",
    "category": "function",
    "text": "closews(workstation_id::Int)\n\nClose the specified workstation.\n\nParameters:\n\nworkstation_id :     A workstation identifier.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.contour",
    "page": "Docstrings",
    "title": "GR.contour",
    "category": "function",
    "text": "contour(px, py, h, pz, major_h::Int)\n\nDraw contours of a three-dimensional data set whose values are specified over a rectangular mesh. Contour lines may optionally be labeled.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates h :     A list containing the Z coordinate for the height values z :     A list of length len(x) * len(y) or an appropriately dimensioned     array containing the Z coordinates major_h :     Directs GR to label contour lines. For example, a value of 3 would label     every third line. A value of 1 will label every line. A value of 0     produces no labels. To produce colored contour lines, add an offset     of 1000 to major_h.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.contourf",
    "page": "Docstrings",
    "title": "GR.contourf",
    "category": "function",
    "text": "contourf(px, py, h, pz, major_h::Int)\n\nDraw filled contours of a three-dimensional data set whose values are specified over a rectangular mesh.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates h :     A list containing the Z coordinate for the height values z :     A list of length len(x) * len(y) or an appropriately dimensioned     array containing the Z coordinates major_h :     (intended for future use)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.deactivatews",
    "page": "Docstrings",
    "title": "GR.deactivatews",
    "category": "function",
    "text": "deactivatews(workstation_id::Int)\n\nDeactivate the specified workstation.\n\nParameters:\n\nworkstation_id :     A workstation identifier.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.drawarc",
    "page": "Docstrings",
    "title": "GR.drawarc",
    "category": "function",
    "text": "drawarc(xmin::Real, xmax::Real, ymin::Real, ymax::Real, a1::Int, a2::Int)\n\nDraw a circular or elliptical arc covering the specified rectangle.\n\nParameters:\n\nxmin :     Lower left edge of the rectangle xmax :     Lower right edge of the rectangle ymin :     Upper left edge of the rectangle ymax :     Upper right edge of the rectangle a1 :     The start angle a2 :     The end angle\n\nThe resulting arc begins at a1 and ends at a2 degrees. Angles are interpreted such that 0 degrees is at the 3 o\'clock position. The center of the arc is the center of the given rectangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.drawarrow",
    "page": "Docstrings",
    "title": "GR.drawarrow",
    "category": "function",
    "text": "drawarrow(x1::Real, y1::Real, x2::Real, y2::Real)\n\nDraw an arrow between two points.\n\nParameters:\n\nx1, y1 :     Starting point of the arrow (tail) x2, y2 :     Head of the arrow\n\nDifferent arrow styles (angles between arrow tail and wing, optionally filled heads, double headed arrows) are available and can be set with the setarrowstyle function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.drawimage",
    "page": "Docstrings",
    "title": "GR.drawimage",
    "category": "function",
    "text": "drawimage(xmin::Real, xmax::Real, ymin::Real, ymax::Real, width::Int, height::Int, data, model::Int = 0)\n\nDraw an image into a given rectangular area.\n\nParameters:\n\nxmin, ymin :     First corner point of the rectangle xmax, ymax :     Second corner point of the rectangle width, height :     The width and the height of the image data :     An array of color values dimensioned width by height model :     Color model (default=0)\n\nThe available color models are:\n\n+-----------------------+---+-----------+\n|MODEL_RGB              |  0|   AABBGGRR|\n+-----------------------+---+-----------+\n|MODEL_HSV              |  1|   AAVVSSHH|\n+-----------------------+---+-----------+\n\nThe points (xminx, ymin) and (xmax, ymax) are world coordinates defining diagonally opposite corner points of a rectangle. This rectangle is divided into width by height cells. The two-dimensional array data specifies colors for each cell.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.drawpath",
    "page": "Docstrings",
    "title": "GR.drawpath",
    "category": "function",
    "text": "drawpath(points, codes, fill::Int)\n\nDraw simple and compound outlines consisting of line segments and bezier curves.\n\nParameters:\n\npoints :     (N, 2) array of (x, y) vertices codes :     N-length array of path codes fill :     A flag indication whether resulting path is to be filled or not\n\nThe following path codes are recognized:\n\n+----------+-----------------------------------------------------------+\n|      STOP|end the entire path                                        |\n+----------+-----------------------------------------------------------+\n|    MOVETO|move to the given vertex                                   |\n+----------+-----------------------------------------------------------+\n|    LINETO|draw a line from the current position to the given vertex  |\n+----------+-----------------------------------------------------------+\n|    CURVE3|draw a quadratic Bézier curve                              |\n+----------+-----------------------------------------------------------+\n|    CURVE4|draw a cubic Bézier curve                                  |\n+----------+-----------------------------------------------------------+\n| CLOSEPOLY|draw a line segment to the start point of the current path |\n+----------+-----------------------------------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.drawrect",
    "page": "Docstrings",
    "title": "GR.drawrect",
    "category": "function",
    "text": "drawrect(xmin::Real, xmax::Real, ymin::Real, ymax::Real)\n\nDraw a rectangle using the current line attributes.\n\nParameters:\n\nxmin :     Lower left edge of the rectangle xmax :     Lower right edge of the rectangle ymin :     Upper left edge of the rectangle ymax :     Upper right edge of the rectangle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.fillarc",
    "page": "Docstrings",
    "title": "GR.fillarc",
    "category": "function",
    "text": "fillarc(xmin::Real, xmax::Real, ymin::Real, ymax::Real, a1::Int, a2::Int)\n\nFill a circular or elliptical arc covering the specified rectangle.\n\nParameters:\n\nxmin :     Lower left edge of the rectangle xmax :     Lower right edge of the rectangle ymin :     Upper left edge of the rectangle ymax :     Upper right edge of the rectangle a1 :     The start angle a2 :     The end angle\n\nThe resulting arc begins at a1 and ends at a2 degrees. Angles are interpreted such that 0 degrees is at the 3 o\'clock position. The center of the arc is the center of the given rectangle.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.fillarea",
    "page": "Docstrings",
    "title": "GR.fillarea",
    "category": "function",
    "text": "fillarea(x, y)\n\nAllows you to specify a polygonal shape of an area to be filled.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates\n\nThe attributes that control the appearance of fill areas are fill area interior style, fill area style index and fill area color index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.fillrect",
    "page": "Docstrings",
    "title": "GR.fillrect",
    "category": "function",
    "text": "fillrect(xmin::Real, xmax::Real, ymin::Real, ymax::Real)\n\nDraw a filled rectangle using the current fill attributes.\n\nParameters:\n\nxmin :     Lower left edge of the rectangle xmax :     Lower right edge of the rectangle ymin :     Upper left edge of the rectangle ymax :     Upper right edge of the rectangle\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.gdp",
    "page": "Docstrings",
    "title": "GR.gdp",
    "category": "function",
    "text": "gdp(x, y, primid, datrec)\n\nGenerates a generalized drawing primitive (GDP) of the type you specify, using specified points and any additional information contained in a data record.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates primid :     Primitive identifier datrec :     Primitive data record\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.grid",
    "page": "Docstrings",
    "title": "GR.grid",
    "category": "function",
    "text": "grid(x_tick::Real, y_tick::Real, x_org::Real, y_org::Real, major_x::Int, major_y::Int)\n\nDraw a linear and/or logarithmic grid.\n\nParameters:\n\nx_tick, y_tick :     The length in world coordinates of the interval between minor grid     lines. x_org, y_org :     The world coordinates of the origin (point of intersection) of the grid. major_x, major_y :     Unitless integer values specifying the number of minor grid lines     between major grid lines. Values of 0 or 1 imply no grid lines.\n\nMajor grid lines correspond to the axes origin and major tick marks whether visible or not. Minor grid lines are drawn at points equal to minor tick marks. Major grid lines are drawn using black lines and minor grid lines are drawn using gray lines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.herrorbars",
    "page": "Docstrings",
    "title": "GR.herrorbars",
    "category": "function",
    "text": "herrorbars(px, py, e1, e2)\n\nDraw a standard horizontal error bar graph.\n\nParameters:\n\npx :     A list of length N containing the X coordinates py :     A list of length N containing the Y coordinates e1 :      The absolute values of the lower error bar data e2 :      The absolute values of the upper error bar data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.mathtex",
    "page": "Docstrings",
    "title": "GR.mathtex",
    "category": "function",
    "text": "mathtex(x::Real, y::Real, string)\n\nGenerate a character string starting at the given location. Strings can be defined to create mathematical symbols and Greek letters using LaTeX syntax.\n\nParameters:\n\nx, y :     Position of the text string specified in world coordinates string :     The text string to be drawn\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.openws",
    "page": "Docstrings",
    "title": "GR.openws",
    "category": "function",
    "text": "openws(workstation_id::Int, connection, workstation_type::Int)\n\nOpen a graphical workstation.\n\nParameters:\n\nworkstation_id :     A workstation identifier. connection :     A connection identifier. workstation_type :     The desired workstation type.\n\nAvailable workstation types:\n\n+-------------+------------------------------------------------------+\n|            5|Workstation Independent Segment Storage               |\n+-------------+------------------------------------------------------+\n|         7, 8|Computer Graphics Metafile (CGM binary, clear text)   |\n+-------------+------------------------------------------------------+\n|           41|Windows GDI                                           |\n+-------------+------------------------------------------------------+\n|           51|Mac Quickdraw                                         |\n+-------------+------------------------------------------------------+\n|      61 - 64|PostScript (b/w, color)                               |\n+-------------+------------------------------------------------------+\n|     101, 102|Portable Document Format (plain, compressed)          |\n+-------------+------------------------------------------------------+\n|    210 - 213|X Windows                                             |\n+-------------+------------------------------------------------------+\n|          214|Sun Raster file (RF)                                  |\n+-------------+------------------------------------------------------+\n|     215, 218|Graphics Interchange Format (GIF87, GIF89)            |\n+-------------+------------------------------------------------------+\n|          216|Motif User Interface Language (UIL)                   |\n+-------------+------------------------------------------------------+\n|          320|Windows Bitmap (BMP)                                  |\n+-------------+------------------------------------------------------+\n|          321|JPEG image file                                       |\n+-------------+------------------------------------------------------+\n|          322|Portable Network Graphics file (PNG)                  |\n+-------------+------------------------------------------------------+\n|          323|Tagged Image File Format (TIFF)                       |\n+-------------+------------------------------------------------------+\n|          370|Xfig vector graphics file                             |\n+-------------+------------------------------------------------------+\n|          371|Gtk                                                   |\n+-------------+------------------------------------------------------+\n|          380|wxWidgets                                             |\n+-------------+------------------------------------------------------+\n|          381|Qt4                                                   |\n+-------------+------------------------------------------------------+\n|          382|Scaleable Vector Graphics (SVG)                       |\n+-------------+------------------------------------------------------+\n|          390|Windows Metafile                                      |\n+-------------+------------------------------------------------------+\n|          400|Quartz                                                |\n+-------------+------------------------------------------------------+\n|          410|Socket driver                                         |\n+-------------+------------------------------------------------------+\n|          415|0MQ driver                                            |\n+-------------+------------------------------------------------------+\n|          420|OpenGL                                                |\n+-------------+------------------------------------------------------+\n|          430|HTML5 Canvas                                          |\n+-------------+------------------------------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.polyline",
    "page": "Docstrings",
    "title": "GR.polyline",
    "category": "function",
    "text": "polyline(x, y)\n\nDraw a polyline using the current line attributes, starting from the first data point and ending at the last data point.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates\n\nThe values for x and y are in world coordinates. The attributes that control the appearance of a polyline are linetype, linewidth and color index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.polyline3d",
    "page": "Docstrings",
    "title": "GR.polyline3d",
    "category": "function",
    "text": "polyline3d(px, py, pz)\n\nDraw a 3D curve using the current line attributes, starting from the first data point and ending at the last data point.\n\nParameters:\n\nx :     A list of length N containing the X coordinates y :     A list of length N containing the Y coordinates z :     A list of length N containing the Z coordinates\n\nThe values for x, y and z are in world coordinates. The attributes that control the appearance of a polyline are linetype, linewidth and color index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.polymarker",
    "page": "Docstrings",
    "title": "GR.polymarker",
    "category": "function",
    "text": "polymarker(x, y)\n\nDraw marker symbols centered at the given data points.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates\n\nThe values for x and y are in world coordinates. The attributes that control the appearance of a polymarker are marker type, marker size scale factor and color index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.polymarker3d",
    "page": "Docstrings",
    "title": "GR.polymarker3d",
    "category": "function",
    "text": "polymarker3d(px, py, pz)\n\nDraw marker symbols centered at the given 3D data points.\n\nParameters:\n\nx :     A list of length N containing the X coordinates y :     A list of length N containing the Y coordinates z :     A list of length N containing the Z coordinates\n\nThe values for x, y and z are in world coordinates. The attributes that control the appearance of a polymarker are marker type, marker size scale factor and color index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.selntran",
    "page": "Docstrings",
    "title": "GR.selntran",
    "category": "function",
    "text": "selntran(transform::Int)\n\nselntran selects a predefined transformation from world coordinates to normalized device coordinates.\n\nParameters:\n\ntransform :     A normalization transformation number.\n\n+------+----------------------------------------------------------------------------------------------------+\n|     0|Selects the identity transformation in which both the window and viewport have the range of 0 to 1  |\n+------+----------------------------------------------------------------------------------------------------+\n|  >= 1|Selects a normalization transformation as defined by `setwindow` and `setviewport`                  |\n+------+----------------------------------------------------------------------------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setarrowsize",
    "page": "Docstrings",
    "title": "GR.setarrowsize",
    "category": "function",
    "text": "setarrowsize(size::Real)\n\nSet the arrow size to be used for subsequent arrow commands.\n\nParameters:\n\nsize :     The arrow size to be used\n\nsetarrowsize defines the arrow size for subsequent arrow primitives. The default arrow size is 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setarrowstyle",
    "page": "Docstrings",
    "title": "GR.setarrowstyle",
    "category": "function",
    "text": "setarrowstyle(style::Int)\n\nSet the arrow style to be used for subsequent arrow commands.\n\nParameters:\n\nstyle :     The arrow style to be used\n\nsetarrowstyle defines the arrow style for subsequent arrow primitives. The default arrow style is 1.\n\n+---+----------------------------------+\n|  1|simple, single-ended              |\n+---+----------------------------------+\n|  2|simple, single-ended, acute head  |\n+---+----------------------------------+\n|  3|hollow, single-ended              |\n+---+----------------------------------+\n|  4|filled, single-ended              |\n+---+----------------------------------+\n|  5|triangle, single-ended            |\n+---+----------------------------------+\n|  6|filled triangle, single-ended     |\n+---+----------------------------------+\n|  7|kite, single-ended                |\n+---+----------------------------------+\n|  8|filled kite, single-ended         |\n+---+----------------------------------+\n|  9|simple, double-ended              |\n+---+----------------------------------+\n| 10|simple, double-ended, acute head  |\n+---+----------------------------------+\n| 11|hollow, double-ended              |\n+---+----------------------------------+\n| 12|filled, double-ended              |\n+---+----------------------------------+\n| 13|triangle, double-ended            |\n+---+----------------------------------+\n| 14|filled triangle, double-ended     |\n+---+----------------------------------+\n| 15|kite, double-ended                |\n+---+----------------------------------+\n| 16|filled kite, double-ended         |\n+---+----------------------------------+\n| 17|double line, single-ended         |\n+---+----------------------------------+\n| 18|double line, double-ended         |\n+---+----------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setcharexpan",
    "page": "Docstrings",
    "title": "GR.setcharexpan",
    "category": "function",
    "text": "setcharexpan(factor::Real)\n\nSet the current character expansion factor (width to height ratio).\n\nParameters:\n\nfactor :     Text expansion factor applied to the nominal text width-to-height ratio\n\nsetcharexpan defines the width of subsequent text output primitives. The expansion factor alters the width of the generated characters, but not their height. The default text expansion factor is 1, or one times the normal width-to-height ratio of the text.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setcharheight",
    "page": "Docstrings",
    "title": "GR.setcharheight",
    "category": "function",
    "text": "setcharheight(height::Real)\n\nSet the current character height.\n\nParameters:\n\nheight :     Text height value\n\nsetcharheight defines the height of subsequent text output primitives. Text height is defined as a percentage of the default window. GR uses the default text height of 0.027 (2.7% of the height of the default window).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setcharup",
    "page": "Docstrings",
    "title": "GR.setcharup",
    "category": "function",
    "text": "setcharup(ux::Real, uy::Real)\n\nSet the current character text angle up vector.\n\nParameters:\n\nux, uy :     Text up vector\n\nsetcharup defines the vertical rotation of subsequent text output primitives. The text up vector is initially set to (0, 1), horizontal to the baseline.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setclip",
    "page": "Docstrings",
    "title": "GR.setclip",
    "category": "function",
    "text": "setclip(indicator::Int)\n\nSet the clipping indicator.\n\nParameters:\n\nindicator :     An indicator specifying whether clipping is on or off.\n\n+----+---------------------------------------------------------------+\n|   0|Clipping is off. Data outside of the window will be drawn.     |\n+----+---------------------------------------------------------------+\n|   1|Clipping is on. Data outside of the window will not be drawn.  |\n+----+---------------------------------------------------------------+\n\nsetclip enables or disables clipping of the image drawn in the current window. Clipping is defined as the removal of those portions of the graph that lie outside of the defined viewport. If clipping is on, GR does not draw generated output primitives past the viewport boundaries. If clipping is off, primitives may exceed the viewport boundaries, and they will be drawn to the edge of the workstation window. By default, clipping is on.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setcolorrep",
    "page": "Docstrings",
    "title": "GR.setcolorrep",
    "category": "function",
    "text": "setcolorrep(index::Int, red::Real, green::Real, blue::Real)\n\nsetcolorrep allows to redefine an existing color index representation by specifying an RGB color triplet.\n\nParameters:\n\nindex :     Color index in the range 0 to 1256 red :     Red intensity in the range 0.0 to 1.0 green :     Green intensity in the range 0.0 to 1.0 blue:     Blue intensity in the range 0.0 to 1.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setcoordxform",
    "page": "Docstrings",
    "title": "GR.setcoordxform",
    "category": "function",
    "text": "setcoordxform(mat)\n\nChange the coordinate transformation according to the given matrix.\n\nParameters:\n\nmat[3][2] :     2D transformation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setfillcolorind",
    "page": "Docstrings",
    "title": "GR.setfillcolorind",
    "category": "function",
    "text": "setfillcolorind(color::Int)\n\nSets the current fill area color index.\n\nParameters:\n\ncolor :     The fill area color index (COLOR < 1256)\n\nsetfillcolorind defines the color of subsequent fill area output primitives. GR uses the default foreground color (black=1) for the default fill area color index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setfillintstyle",
    "page": "Docstrings",
    "title": "GR.setfillintstyle",
    "category": "function",
    "text": "setfillintstyle(style::Int)\n\nSet the fill area interior style to be used for fill areas.\n\nParameters:\n\nstyle :     The style of fill to be used\n\nsetfillintstyle defines the interior style  for subsequent fill area output primitives. The default interior style is HOLLOW.\n\n+---------+---+--------------------------------------------------------------------------------+\n|HOLLOW   |  0|No filling. Just draw the bounding polyline                                     |\n+---------+---+--------------------------------------------------------------------------------+\n|SOLID    |  1|Fill the interior of the polygon using the fill color index                     |\n+---------+---+--------------------------------------------------------------------------------+\n|PATTERN  |  2|Fill the interior of the polygon using the style index as a pattern index       |\n+---------+---+--------------------------------------------------------------------------------+\n|HATCH    |  3|Fill the interior of the polygon using the style index as a cross-hatched style |\n+---------+---+--------------------------------------------------------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setfillstyle",
    "page": "Docstrings",
    "title": "GR.setfillstyle",
    "category": "function",
    "text": "setfillstyle(index::Int)\n\nSets the fill style to be used for subsequent fill areas.\n\nParameters:\n\nindex :     The fill style index to be used\n\nsetfillstyle specifies an index when PATTERN fill or HATCH fill is requested by the setfillintstyle function. If the interior style is set to PATTERN, the fill style index points to a device-independent pattern table. If interior style is set to HATCH the fill style index indicates different hatch styles. If HOLLOW or SOLID is specified for the interior style, the fill style index is unused.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setlinecolorind",
    "page": "Docstrings",
    "title": "GR.setlinecolorind",
    "category": "function",
    "text": "setlinecolorind(color::Int)\n\nDefine the color of subsequent polyline output primitives.\n\nParameters:\n\ncolor :     The polyline color index (COLOR < 1256)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setlinetype",
    "page": "Docstrings",
    "title": "GR.setlinetype",
    "category": "function",
    "text": "setlinetype(style::Int)\n\nSpecify the line style for polylines.\n\nParameters:\n\nstyle :     The polyline line style\n\nThe available line types are:\n\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_SOLID             |   1|Solid line                                         |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_DASHED            |   2|Dashed line                                        |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_DOTTED            |   3|Dotted line                                        |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_DASHED_DOTTED     |   4|Dashed-dotted line                                 |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_DASH_2_DOT        |  -1|Sequence of one dash followed by two dots          |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_DASH_3_DOT        |  -2|Sequence of one dash followed by three dots        |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_LONG_DASH         |  -3|Sequence of long dashes                            |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_LONG_SHORT_DASH   |  -4|Sequence of a long dash followed by a short dash   |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_SPACED_DASH       |  -5|Sequence of dashes double spaced                   |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_SPACED_DOT        |  -6|Sequence of dots double spaced                     |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_DOUBLE_DOT        |  -7|Sequence of pairs of dots                          |\n+---------------------------+----+---------------------------------------------------+\n|LINETYPE_TRIPLE_DOT        |  -8|Sequence of groups of three dots                   |\n+---------------------------+----+---------------------------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setlinewidth",
    "page": "Docstrings",
    "title": "GR.setlinewidth",
    "category": "function",
    "text": "setlinewidth(width::Real)\n\nDefine the line width of subsequent polyline output primitives.\n\nParameters:\n\nwidth :     The polyline line width scale factor\n\nThe line width is calculated as the nominal line width generated on the workstation multiplied by the line width scale factor. This value is mapped by the workstation to the nearest available line width. The default line width is 1.0, or 1 times the line width generated on the graphics device.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setmarkercolorind",
    "page": "Docstrings",
    "title": "GR.setmarkercolorind",
    "category": "function",
    "text": "setmarkercolorind(color::Int)\n\nDefine the color of subsequent polymarker output primitives.\n\nParameters:\n\ncolor :     The polymarker color index (COLOR < 1256)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setmarkersize",
    "page": "Docstrings",
    "title": "GR.setmarkersize",
    "category": "function",
    "text": "setmarkersize(mtype::Real)\n\nSpecify the marker size for polymarkers.\n\nParameters:\n\nsize :     Scale factor applied to the nominal marker size\n\nThe polymarker size is calculated as the nominal size generated on the graphics device multiplied by the marker size scale factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setmarkertype",
    "page": "Docstrings",
    "title": "GR.setmarkertype",
    "category": "function",
    "text": "setmarkertype(mtype::Int)\n\nSpecifiy the marker type for polymarkers.\n\nParameters:\n\nstyle :     The polymarker marker type\n\nThe available marker types are:\n\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_DOT               |    1|Smallest displayable dot                        |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_PLUS              |    2|Plus sign                                       |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_ASTERISK          |    3|Asterisk                                        |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_CIRCLE            |    4|Hollow circle                                   |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_DIAGONAL_CROSS    |    5|Diagonal cross                                  |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_CIRCLE      |   -1|Filled circle                                   |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_TRIANGLE_UP       |   -2|Hollow triangle pointing upward                 |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_TRI_UP      |   -3|Filled triangle pointing upward                 |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_TRIANGLE_DOWN     |   -4|Hollow triangle pointing downward               |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_TRI_DOWN    |   -5|Filled triangle pointing downward               |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SQUARE            |   -6|Hollow square                                   |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_SQUARE      |   -7|Filled square                                   |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_BOWTIE            |   -8|Hollow bowtie                                   |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_BOWTIE      |   -9|Filled bowtie                                   |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_HGLASS            |  -10|Hollow hourglass                                |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_HGLASS      |  -11|Filled hourglass                                |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_DIAMOND           |  -12|Hollow diamond                                  |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_DIAMOND     |  -13|Filled Diamond                                  |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_STAR              |  -14|Hollow star                                     |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_STAR        |  -15|Filled Star                                     |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_TRI_UP_DOWN       |  -16|Hollow triangles pointing up and down overlaid  |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_TRI_RIGHT   |  -17|Filled triangle point right                     |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID_TRI_LEFT    |  -18|Filled triangle pointing left                   |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_HOLLOW PLUS       |  -19|Hollow plus sign                                |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_SOLID PLUS        |  -20|Solid plus sign                                 |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_PENTAGON          |  -21|Pentagon                                        |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_HEXAGON           |  -22|Hexagon                                         |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_HEPTAGON          |  -23|Heptagon                                        |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_OCTAGON           |  -24|Octagon                                         |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_STAR_4            |  -25|4-pointed star                                  |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_STAR_5            |  -26|5-pointed star (pentagram)                      |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_STAR_6            |  -27|6-pointed star (hexagram)                       |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_STAR_7            |  -28|7-pointed star (heptagram)                      |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_STAR_8            |  -29|8-pointed star (octagram)                       |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_VLINE             |  -30|verical line                                    |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_HLINE             |  -31|horizontal line                                 |\n+-----------------------------+-----+------------------------------------------------+\n|MARKERTYPE_OMARK             |  -32|o-mark                                          |\n+-----------------------------+-----+------------------------------------------------+\n\nPolymarkers appear centered over their specified coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setscale",
    "page": "Docstrings",
    "title": "GR.setscale",
    "category": "function",
    "text": "setscale(options::Int)\n\nsetscale sets the type of transformation to be used for subsequent GR output primitives.\n\nParameters:\n\noptions :     Scale specification (see Table below)\n\n+---------------+--------------------+\n|OPTION_X_LOG   |Logarithmic X-axis  |\n+---------------+--------------------+\n|OPTION_Y_LOG   |Logarithmic Y-axis  |\n+---------------+--------------------+\n|OPTION_Z_LOG   |Logarithmic Z-axis  |\n+---------------+--------------------+\n|OPTION_FLIP_X  |Flip X-axis         |\n+---------------+--------------------+\n|OPTION_FLIP_Y  |Flip Y-axis         |\n+---------------+--------------------+\n|OPTION_FLIP_Z  |Flip Z-axis         |\n+---------------+--------------------+\n\nsetscale defines the current transformation according to the given scale specification which may be or\'ed together using any of the above options. GR uses these options for all subsequent output primitives until another value is provided. The scale options are used to transform points from an abstract logarithmic or semi-logarithmic coordinate system, which may be flipped along each axis, into the world coordinate system.\n\nNote: When applying a logarithmic transformation to a specific axis, the system assumes that the axes limits are greater than zero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setshadow",
    "page": "Docstrings",
    "title": "GR.setshadow",
    "category": "function",
    "text": "setshadow(offsetx::Real, offsety::Real, blur::Real)\n\nsetshadow allows drawing of shadows, realized by images painted underneath, and offset from, graphics objects such that the shadow mimics the effect of a light source cast on the graphics objects.\n\nParameters:\n\noffsetx :     An x-offset, which specifies how far in the horizontal direction the     shadow is offset from the object offsety :     A y-offset, which specifies how far in the vertical direction the shadow     is offset from the object blur :     A blur value, which specifies whether the object has a hard or a diffuse     edge\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setspace",
    "page": "Docstrings",
    "title": "GR.setspace",
    "category": "function",
    "text": "setspace(zmin::Real, zmax::Real, rotation::Int, tilt::Int)\n\nSet the abstract Z-space used for mapping three-dimensional output primitives into the current world coordinate space.\n\nParameters:\n\nzmin :     Minimum value for the Z-axis. zmax :     Maximum value for the Z-axis. rotation :     Angle for the rotation of the X axis, in degrees. tilt :     Viewing angle of the Z axis in degrees.\n\nsetspace establishes the limits of an abstract Z-axis and defines the angles for rotation and for the viewing angle (tilt) of a simulated three-dimensional graph, used for mapping corresponding output primitives into the current window. These settings are used for all subsequent three-dimensional output primitives until other values are specified. Angles of rotation and viewing angle must be specified between 0° and 90°.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.settextalign",
    "page": "Docstrings",
    "title": "GR.settextalign",
    "category": "function",
    "text": "settextalign(horizontal::Int, vertical::Int)\n\nSet the current horizontal and vertical alignment for text.\n\nParameters:\n\nhorizontal :     Horizontal text alignment (see the table below) vertical :     Vertical text alignment (see the table below)\n\nsettextalign specifies how the characters in a text primitive will be aligned in horizontal and vertical space. The default text alignment indicates horizontal left alignment and vertical baseline alignment.\n\n+-------------------------+---+----------------+\n|TEXT_HALIGN_NORMAL       |  0|                |\n+-------------------------+---+----------------+\n|TEXT_HALIGN_LEFT         |  1|Left justify    |\n+-------------------------+---+----------------+\n|TEXT_HALIGN_CENTER       |  2|Center justify  |\n+-------------------------+---+----------------+\n|TEXT_HALIGN_RIGHT        |  3|Right justify   |\n+-------------------------+---+----------------+\n\n+-------------------------+---+------------------------------------------------+\n|TEXT_VALIGN_NORMAL       |  0|                                                |\n+-------------------------+---+------------------------------------------------+\n|TEXT_VALIGN_TOP          |  1|Align with the top of the characters            |\n+-------------------------+---+------------------------------------------------+\n|TEXT_VALIGN_CAP          |  2|Aligned with the cap of the characters          |\n+-------------------------+---+------------------------------------------------+\n|TEXT_VALIGN_HALF         |  3|Aligned with the half line of the characters    |\n+-------------------------+---+------------------------------------------------+\n|TEXT_VALIGN_BASE         |  4|Aligned with the base line of the characters    |\n+-------------------------+---+------------------------------------------------+\n|TEXT_VALIGN_BOTTOM       |  5|Aligned with the bottom line of the characters  |\n+-------------------------+---+------------------------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.settextcolorind",
    "page": "Docstrings",
    "title": "GR.settextcolorind",
    "category": "function",
    "text": "settextcolorind(color::Int)\n\nSets the current text color index.\n\nParameters:\n\ncolor :     The text color index (COLOR < 1256)\n\nsettextcolorind defines the color of subsequent text output primitives. GR uses the default foreground color (black=1) for the default text color index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.settextfontprec",
    "page": "Docstrings",
    "title": "GR.settextfontprec",
    "category": "function",
    "text": "settextfontprec(font::Int, precision::Int)\n\nSpecify the text font and precision for subsequent text output primitives.\n\nParameters:\n\nfont :     Text font (see tables below) precision :     Text precision (see table below)\n\nThe available text fonts are:\n\n+--------------------------------------+-----+\n|FONT_TIMES_ROMAN                      |  101|\n+--------------------------------------+-----+\n|FONT_TIMES_ITALIC                     |  102|\n+--------------------------------------+-----+\n|FONT_TIMES_BOLD                       |  103|\n+--------------------------------------+-----+\n|FONT_TIMES_BOLDITALIC                 |  104|\n+--------------------------------------+-----+\n|FONT_HELVETICA                        |  105|\n+--------------------------------------+-----+\n|FONT_HELVETICA_OBLIQUE                |  106|\n+--------------------------------------+-----+\n|FONT_HELVETICA_BOLD                   |  107|\n+--------------------------------------+-----+\n|FONT_HELVETICA_BOLDOBLIQUE            |  108|\n+--------------------------------------+-----+\n|FONT_COURIER                          |  109|\n+--------------------------------------+-----+\n|FONT_COURIER_OBLIQUE                  |  110|\n+--------------------------------------+-----+\n|FONT_COURIER_BOLD                     |  111|\n+--------------------------------------+-----+\n|FONT_COURIER_BOLDOBLIQUE              |  112|\n+--------------------------------------+-----+\n|FONT_SYMBOL                           |  113|\n+--------------------------------------+-----+\n|FONT_BOOKMAN_LIGHT                    |  114|\n+--------------------------------------+-----+\n|FONT_BOOKMAN_LIGHTITALIC              |  115|\n+--------------------------------------+-----+\n|FONT_BOOKMAN_DEMI                     |  116|\n+--------------------------------------+-----+\n|FONT_BOOKMAN_DEMIITALIC               |  117|\n+--------------------------------------+-----+\n|FONT_NEWCENTURYSCHLBK_ROMAN           |  118|\n+--------------------------------------+-----+\n|FONT_NEWCENTURYSCHLBK_ITALIC          |  119|\n+--------------------------------------+-----+\n|FONT_NEWCENTURYSCHLBK_BOLD            |  120|\n+--------------------------------------+-----+\n|FONT_NEWCENTURYSCHLBK_BOLDITALIC      |  121|\n+--------------------------------------+-----+\n|FONT_AVANTGARDE_BOOK                  |  122|\n+--------------------------------------+-----+\n|FONT_AVANTGARDE_BOOKOBLIQUE           |  123|\n+--------------------------------------+-----+\n|FONT_AVANTGARDE_DEMI                  |  124|\n+--------------------------------------+-----+\n|FONT_AVANTGARDE_DEMIOBLIQUE           |  125|\n+--------------------------------------+-----+\n|FONT_PALATINO_ROMAN                   |  126|\n+--------------------------------------+-----+\n|FONT_PALATINO_ITALIC                  |  127|\n+--------------------------------------+-----+\n|FONT_PALATINO_BOLD                    |  128|\n+--------------------------------------+-----+\n|FONT_PALATINO_BOLDITALIC              |  129|\n+--------------------------------------+-----+\n|FONT_ZAPFCHANCERY_MEDIUMITALIC        |  130|\n+--------------------------------------+-----+\n|FONT_ZAPFDINGBATS                     |  131|\n+--------------------------------------+-----+\n\nThe available text precisions are:\n\n+---------------------------+---+--------------------------------------+\n|TEXT_PRECISION_STRING      |  0|String precision (higher quality)     |\n+---------------------------+---+--------------------------------------+\n|TEXT_PRECISION_CHAR        |  1|Character precision (medium quality)  |\n+---------------------------+---+--------------------------------------+\n|TEXT_PRECISION_STROKE      |  2|Stroke precision (lower quality)      |\n+---------------------------+---+--------------------------------------+\n\nThe appearance of a font depends on the text precision value specified. STRING, CHARACTER or STROKE precision allows for a greater or lesser realization of the text primitives, for efficiency. STRING is the default precision for GR and produces the highest quality output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.settextpath",
    "page": "Docstrings",
    "title": "GR.settextpath",
    "category": "function",
    "text": "settextpath(path::Int)\n\nDefine the current direction in which subsequent text will be drawn.\n\nParameters:\n\npath :     Text path (see table below)\n\n+----------------------+---+---------------+\n|TEXT_PATH_RIGHT       |  0|left-to-right  |\n+----------------------+---+---------------+\n|TEXT_PATH_LEFT        |  1|right-to-left  |\n+----------------------+---+---------------+\n|TEXT_PATH_UP          |  2|downside-up    |\n+----------------------+---+---------------+\n|TEXT_PATH_DOWN        |  3|upside-down    |\n+----------------------+---+---------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.settransparency",
    "page": "Docstrings",
    "title": "GR.settransparency",
    "category": "function",
    "text": "settransparency(alpha::Real)\n\nSet the value of the alpha component associated with GR colors\n\nParameters:\n\nalpha :     An alpha value (0.0 - 1.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setviewport",
    "page": "Docstrings",
    "title": "GR.setviewport",
    "category": "function",
    "text": "setviewport(xmin::Real, xmax::Real, ymin::Real, ymax::Real)\n\nsetviewport establishes a rectangular subspace of normalized device coordinates.\n\nParameters:\n\nxmin :     The left horizontal coordinate of the viewport. xmax :     The right horizontal coordinate of the viewport (0 <= xmin < xmax <= 1). ymin :     The bottom vertical coordinate of the viewport. ymax :     The top vertical coordinate of the viewport (0 <= ymin < ymax <= 1).\n\nsetviewport defines the rectangular portion of the Normalized Device Coordinate (NDC) space to be associated with the specified normalization transformation. The NDC viewport and World Coordinate (WC) window define the normalization transformation through which all output primitives pass. The WC window is mapped onto the rectangular NDC viewport which is, in turn, mapped onto the display surface of the open and active workstation, in device coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setwindow",
    "page": "Docstrings",
    "title": "GR.setwindow",
    "category": "function",
    "text": "setwindow(xmin::Real, xmax::Real, ymin::Real, ymax::Real)\n\nsetwindow establishes a window, or rectangular subspace, of world coordinates to be plotted. If you desire log scaling or mirror-imaging of axes, use the SETSCALE function.\n\nParameters:\n\nxmin :     The left horizontal coordinate of the window (xmin < xmax). xmax :     The right horizontal coordinate of the window. ymin :     The bottom vertical coordinate of the window (ymin < ymax). ymax :     The top vertical coordinate of the window.\n\nsetwindow defines the rectangular portion of the World Coordinate space (WC) to be associated with the specified normalization transformation. The WC window and the Normalized Device Coordinates (NDC) viewport define the normalization transformation through which all output primitives are mapped. The WC window is mapped onto the rectangular NDC viewport which is, in turn, mapped onto the display surface of the open and active workstation, in device coordinates. By default, GR uses the range [0,1] x [0,1], in world coordinates, as the normalization transformation window.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setwsviewport",
    "page": "Docstrings",
    "title": "GR.setwsviewport",
    "category": "function",
    "text": "setwsviewport(xmin::Real, xmax::Real, ymin::Real, ymax::Real)\n\nDefine the size of the workstation graphics window in meters.\n\nParameters:\n\nxmin :     The left horizontal coordinate of the workstation viewport. xmax :     The right horizontal coordinate of the workstation viewport. ymin :     The bottom vertical coordinate of the workstation viewport. ymax :     The top vertical coordinate of the workstation viewport.\n\nsetwsviewport places a workstation window on the display of the specified size in meters. This command allows the workstation window to be accurately sized for a display or hardcopy device, and is often useful for sizing graphs for desktop publishing applications.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.setwswindow",
    "page": "Docstrings",
    "title": "GR.setwswindow",
    "category": "function",
    "text": "setwswindow(xmin::Real, xmax::Real, ymin::Real, ymax::Real)\n\nSet the area of the NDC viewport that is to be drawn in the workstation window.\n\nParameters:\n\nxmin :     The left horizontal coordinate of the workstation window. xmax :     The right horizontal coordinate of the workstation window (0 <= xmin < xmax <= 1). ymin :     The bottom vertical coordinate of the workstation window. ymax :     The top vertical coordinate of the workstation window (0 <= ymin < ymax <= 1).\n\nsetwswindow defines the rectangular area of the Normalized Device Coordinate space to be output to the device. By default, the workstation transformation will map the range [0,1] x [0,1] in NDC onto the largest square on the workstation’s display surface. The aspect ratio of the workstation window is maintained at 1 to 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.spline",
    "page": "Docstrings",
    "title": "GR.spline",
    "category": "function",
    "text": "spline(x, y, m, method)\n\nGenerate a cubic spline-fit, starting from the first data point and ending at the last data point.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates m :     The number of points in the polygon to be drawn (m > len(x)) method :     The smoothing method\n\nThe values for x and y are in world coordinates. The attributes that control the appearance of a spline-fit are linetype, linewidth and color index.\n\nIf method is > 0, then a generalized cross-validated smoothing spline is calculated. If method is 0, then an interpolating natural cubic spline is calculated. If method is < -1, then a cubic B-spline is calculated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.surface",
    "page": "Docstrings",
    "title": "GR.surface",
    "category": "function",
    "text": "surface(px, py, pz, option::Int)\n\nDraw a three-dimensional surface plot for the given data points.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates z :     A list of length len(x) * len(y) or an appropriately dimensioned     array containing the Z coordinates option :     Surface display option (see table below)\n\nx and y define a grid. z is a singly dimensioned array containing at least nx * ny data points. Z describes the surface height at each point on the grid. Data is ordered as shown in the following table:\n\n+------------------+--+--------------------------------------------------------------+\n|LINES             | 0|Use X Y polylines to denote the surface                       |\n+------------------+--+--------------------------------------------------------------+\n|MESH              | 1|Use a wire grid to denote the surface                         |\n+------------------+--+--------------------------------------------------------------+\n|FILLED_MESH       | 2|Applies an opaque grid to the surface                         |\n+------------------+--+--------------------------------------------------------------+\n|Z_SHADED_MESH     | 3|Applies Z-value shading to the surface                        |\n+------------------+--+--------------------------------------------------------------+\n|COLORED_MESH      | 4|Applies a colored grid to the surface                         |\n+------------------+--+--------------------------------------------------------------+\n|CELL_ARRAY        | 5|Applies a grid of individually-colored cells to the surface   |\n+------------------+--+--------------------------------------------------------------+\n|SHADED_MESH       | 6|Applies light source shading to the 3-D surface               |\n+------------------+--+--------------------------------------------------------------+\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.text",
    "page": "Docstrings",
    "title": "GR.text",
    "category": "function",
    "text": "text(x::Real, y::Real, string)\n\nDraw a text at position x, y using the current text attributes.\n\nParameters:\n\nx :     The X coordinate of starting position of the text string y :     The Y coordinate of starting position of the text string string :     The text to be drawn\n\nThe values for x and y are in normalized device coordinates. The attributes that control the appearance of text are text font and precision, character expansion factor, character spacing, text color index, character height, character up vector, text path and text alignment.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.textext",
    "page": "Docstrings",
    "title": "GR.textext",
    "category": "function",
    "text": "textext(x::Real, y::Real, string)\n\nDraw a text at position x, y using the current text attributes. Strings can be defined to create basic mathematical expressions and Greek letters.\n\nParameters:\n\nx :     The X coordinate of starting position of the text string y :     The Y coordinate of starting position of the text string string :     The text to be drawn\n\nThe values for X and Y are in normalized device coordinates. The attributes that control the appearance of text are text font and precision, character expansion factor, character spacing, text color index, character height, character up vector, text path and text alignment.\n\nThe character string is interpreted to be a simple mathematical formula. The following notations apply:\n\nSubscripts and superscripts: These are indicated by carets (\'^\') and underscores (\'_\'). If the sub/superscript contains more than one character, it must be enclosed in curly braces (\'{}\').\n\nFractions are typeset with A \'/\' B, where A stands for the numerator and B for the denominator.\n\nTo include a Greek letter you must specify the corresponding keyword after a backslash (\'\') character. The text translator produces uppercase or lowercase Greek letters depending on the case of the keyword.\n\n+--------+---------+\n|Letter  |Keyword  |\n+--------+---------+\n|Α α     |alpha    |\n+--------+---------+\n|Β β     |beta     |\n+--------+---------+\n|Γ γ     |gamma    |\n+--------+---------+\n|Δ δ     |delta    |\n+--------+---------+\n|Ε ε     |epsilon  |\n+--------+---------+\n|Ζ ζ     |zeta     |\n+--------+---------+\n|Η η     |eta      |\n+--------+---------+\n|Θ θ     |theta    |\n+--------+---------+\n|Ι ι     |iota     |\n+--------+---------+\n|Κ κ     |kappa    |\n+--------+---------+\n|Λ λ     |lambda   |\n+--------+---------+\n|Μ μ     |mu       |\n+--------+---------+\n|Ν ν     |nu       |\n+--------+---------+\n|Ξ ξ     |xi       |\n+--------+---------+\n|Ο ο     |omicron  |\n+--------+---------+\n|Π π     |pi       |\n+--------+---------+\n|Ρ ρ     |rho      |\n+--------+---------+\n|Σ σ     |sigma    |\n+--------+---------+\n|Τ τ     |tau      |\n+--------+---------+\n|Υ υ     |upsilon  |\n+--------+---------+\n|Φ φ     |phi      |\n+--------+---------+\n|Χ χ     |chi      |\n+--------+---------+\n|Ψ ψ     |psi      |\n+--------+---------+\n|Ω ω     |omega    |\n+--------+---------+\n\nFor more sophisticated mathematical formulas, you should use the gr.mathtex function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.titles3d",
    "page": "Docstrings",
    "title": "GR.titles3d",
    "category": "function",
    "text": "titles3d(x_title, y_title, z_title)\n\nDisplay axis titles just outside of their respective axes.\n\nParameters:\n\nx_title, y_title, z_title :     The text to be displayed on each axis\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.tricontour",
    "page": "Docstrings",
    "title": "GR.tricontour",
    "category": "function",
    "text": "tricontour(x, y, z, levels)\n\nDraw a contour plot for the given triangle mesh.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates z :     A list containing the Z coordinates levels :     A list containing the contour levels\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.trisurface",
    "page": "Docstrings",
    "title": "GR.trisurface",
    "category": "function",
    "text": "trisurface(x, y, z)\n\nDraw a triangular surface plot for the given data points.\n\nParameters:\n\nx :     A list containing the X coordinates y :     A list containing the Y coordinates z :     A list containing the Z coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GR.verrorbars",
    "page": "Docstrings",
    "title": "GR.verrorbars",
    "category": "function",
    "text": "verrorbars(px, py, e1, e2)\n\nDraw a standard vertical error bar graph.\n\nParameters:\n\npx :     A list of length N containing the X coordinates py :     A list of length N containing the Y coordinates e1 :      The absolute values of the lower error bar data e2 :      The absolute values of the upper error bar data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "GR.ASF_BUNDLEDGR.ASF_INDIVIDUALGR.CLIPGR.COLORMAP_AFMHOTGR.COLORMAP_AUTUMNGR.COLORMAP_BLUESCALEGR.COLORMAP_BONEGR.COLORMAP_BRGGR.COLORMAP_BROWNSCALEGR.COLORMAP_BWRGR.COLORMAP_CMRMAPGR.COLORMAP_COOLGR.COLORMAP_COOLWARMGR.COLORMAP_COPPERGR.COLORMAP_CUBEHELIXGR.COLORMAP_CYANSCALEGR.COLORMAP_FLAMEGR.COLORMAP_GEOLOGICGR.COLORMAP_GIST_EARTHGR.COLORMAP_GIST_HEATGR.COLORMAP_GIST_NCARGR.COLORMAP_GIST_RAINBOWGR.COLORMAP_GIST_STERNGR.COLORMAP_GLOWINGGR.COLORMAP_GNUPLOTGR.COLORMAP_GNUPLOT2GR.COLORMAP_GRAYGR.COLORMAP_GRAYSCALEGR.COLORMAP_GREENSCALEGR.COLORMAP_HOTGR.COLORMAP_HSVGR.COLORMAP_INFERNOGR.COLORMAP_JETGR.COLORMAP_MAGENTASCALEGR.COLORMAP_MAGMAGR.COLORMAP_OCEANGR.COLORMAP_PILATUSGR.COLORMAP_PINKGR.COLORMAP_PLASMAGR.COLORMAP_RAINBOWGR.COLORMAP_RAINBOWLIKEGR.COLORMAP_REDSCALEGR.COLORMAP_SEISMICGR.COLORMAP_SPECTRALGR.COLORMAP_SPRINGGR.COLORMAP_SUMMERGR.COLORMAP_TEMPERATUREGR.COLORMAP_TERRAINGR.COLORMAP_UNIFORMGR.COLORMAP_VIRIDISGR.COLORMAP_WINTERGR.COORDINATES_NDCGR.COORDINATES_WCGR.FONT_AVANTGARDE_BOOKGR.FONT_AVANTGARDE_BOOKOBLIQUEGR.FONT_AVANTGARDE_DEMIGR.FONT_AVANTGARDE_DEMIOBLIQUEGR.FONT_BOOKMAN_DEMIGR.FONT_BOOKMAN_DEMIITALICGR.FONT_BOOKMAN_LIGHTGR.FONT_BOOKMAN_LIGHTITALICGR.FONT_COURIERGR.FONT_COURIER_BOLDGR.FONT_COURIER_BOLDOBLIQUEGR.FONT_COURIER_OBLIQUEGR.FONT_HELVETICAGR.FONT_HELVETICA_BOLDGR.FONT_HELVETICA_BOLDOBLIQUEGR.FONT_HELVETICA_OBLIQUEGR.FONT_NEWCENTURYSCHLBK_BOLDGR.FONT_NEWCENTURYSCHLBK_BOLDITALICGR.FONT_NEWCENTURYSCHLBK_ITALICGR.FONT_NEWCENTURYSCHLBK_ROMANGR.FONT_PALATINO_BOLDGR.FONT_PALATINO_BOLDITALICGR.FONT_PALATINO_ITALICGR.FONT_PALATINO_ROMANGR.FONT_SYMBOLGR.FONT_TIMES_BOLDGR.FONT_TIMES_BOLDITALICGR.FONT_TIMES_ITALICGR.FONT_TIMES_ROMANGR.FONT_ZAPFCHANCERY_MEDIUMITALICGR.FONT_ZAPFDINGBATSGR.GRGR.GR3GR.HTMLGR.INTSTYLE_HATCHGR.INTSTYLE_HOLLOWGR.INTSTYLE_PATTERNGR.INTSTYLE_SOLIDGR.LINETYPE_DASHEDGR.LINETYPE_DASHED_DOTTEDGR.LINETYPE_DASH_2_DOTGR.LINETYPE_DASH_3_DOTGR.LINETYPE_DOTTEDGR.LINETYPE_DOUBLE_DOTGR.LINETYPE_LONG_DASHGR.LINETYPE_LONG_SHORT_DASHGR.LINETYPE_SOLIDGR.LINETYPE_SPACED_DASHGR.LINETYPE_SPACED_DOTGR.LINETYPE_TRIPLE_DOTGR.MARKERTYPE_ASTERISKGR.MARKERTYPE_BOWTIEGR.MARKERTYPE_CIRCLEGR.MARKERTYPE_DIAGONAL_CROSSGR.MARKERTYPE_DIAMONDGR.MARKERTYPE_DOTGR.MARKERTYPE_HEPTAGONGR.MARKERTYPE_HEXAGONGR.MARKERTYPE_HLINEGR.MARKERTYPE_HOLLOW_PLUSGR.MARKERTYPE_HOURGLASSGR.MARKERTYPE_OCTAGONGR.MARKERTYPE_OMARKGR.MARKERTYPE_PENTAGONGR.MARKERTYPE_PLUSGR.MARKERTYPE_SOLID_BOWTIEGR.MARKERTYPE_SOLID_CIRCLEGR.MARKERTYPE_SOLID_DIAMONDGR.MARKERTYPE_SOLID_HGLASSGR.MARKERTYPE_SOLID_PLUSGR.MARKERTYPE_SOLID_SQUAREGR.MARKERTYPE_SOLID_STARGR.MARKERTYPE_SOLID_TRI_DOWNGR.MARKERTYPE_SOLID_TRI_LEFTGR.MARKERTYPE_SOLID_TRI_RIGHTGR.MARKERTYPE_SOLID_TRI_UPGR.MARKERTYPE_SQUAREGR.MARKERTYPE_STARGR.MARKERTYPE_STAR_4GR.MARKERTYPE_STAR_5GR.MARKERTYPE_STAR_6GR.MARKERTYPE_STAR_7GR.MARKERTYPE_STAR_8GR.MARKERTYPE_TRIANGLE_DOWNGR.MARKERTYPE_TRIANGLE_UPGR.MARKERTYPE_TRI_UP_DOWNGR.MARKERTYPE_VLINEGR.MODEL_HSVGR.MODEL_RGBGR.MPL_POSTPONE_UPDATEGR.MPL_SUPPRESS_CLEARGR.NOCLIPGR.NoneGR.OPTION_CELL_ARRAYGR.OPTION_COLORED_MESHGR.OPTION_FILLED_MESHGR.OPTION_FLIP_XGR.OPTION_FLIP_YGR.OPTION_FLIP_ZGR.OPTION_LINESGR.OPTION_MESHGR.OPTION_SHADED_MESHGR.OPTION_X_LOGGR.OPTION_Y_LOGGR.OPTION_Z_LOGGR.OPTION_Z_SHADED_MESHGR.PATH_CLOSEPOLYGR.PATH_CURVE3GR.PATH_CURVE4GR.PATH_LINETOGR.PATH_MOVETOGR.PATH_STOPGR.PNGGR.STDOUTGR.SVGGR.TEXT_HALIGN_CENTERGR.TEXT_HALIGN_LEFTGR.TEXT_HALIGN_NORMALGR.TEXT_HALIGN_RIGHTGR.TEXT_PATH_DOWNGR.TEXT_PATH_LEFTGR.TEXT_PATH_RIGHTGR.TEXT_PATH_UPGR.TEXT_PRECISION_CHARGR.TEXT_PRECISION_STRINGGR.TEXT_PRECISION_STROKEGR.TEXT_VALIGN_BASEGR.TEXT_VALIGN_BOTTOMGR.TEXT_VALIGN_CAPGR.TEXT_VALIGN_HALFGR.TEXT_VALIGN_NORMALGR.TEXT_VALIGN_TOPGR.XFORM_BOOLEANGR.XFORM_CUBICGR.XFORM_EQUALIZEDGR.XFORM_LINEARGR.XFORM_LOGGR.XFORM_LOGLOGGR.__init__GR._readfileGR.activatewsGR.adjustlimitsGR.adjustrangeGR.axesGR.axes2dGR.axes3dGR.begingraphicsGR.beginprintGR.beginprintextGR.cart2sphGR.cellarrayGR.clearwsGR.closegksGR.closemetaGR.closesegGR.closewsGR.colorbarGR.colormapGR.contourGR.contourfGR.copysegGR.createsegGR.deactivatewsGR.delaunayGR.deletemetaGR.destroycontextGR.display_nameGR.displaynameGR.drawarcGR.drawarrowGR.drawgraphicsGR.drawimageGR.drawpathGR.drawrectGR.emergencyclosegksGR.endgraphicsGR.endprintGR.evalGR.figureGR.figure_countGR.file_pathGR.fillarcGR.fillareaGR.fillrectGR.gcfGR.gdpGR.getgraphicsGR.gr3GR.gradientGR.gridGR.grid3dGR.griditGR.heatmapGR.herrorbarsGR.hexbinGR.histogramGR.holdGR.hsvtorgbGR.importgraphicsGR.imshowGR.includeGR.inlineGR.inqcolorGR.inqcolorfromrgbGR.inqdspsizeGR.inqmathtexGR.inqregenflagsGR.inqscaleGR.inqtextGR.inqtextextGR.inqviewportGR.inqwindowGR.interp2GR.isatomGR.isijuliaGR.isinlineGR.isosurfaceGR.jlgrGR.jsGR.latin1GR.legendGR.libGRGR.libGR3GR.loglogGR.mainloopGR.mathtexGR.meshgridGR.mime_typeGR.ndctowcGR.opengksGR.openmetaGR.openwsGR.oplotGR.osGR.panzoomGR.peaksGR.plotGR.plot3GR.plotmetaGR.polarGR.polarhistogramGR.polylineGR.polyline3dGR.polymarkerGR.polymarker3dGR.quiverGR.readimageGR.recv_cGR.recvmetaGR.redrawsegwsGR.reducepointsGR.restorestateGR.savefigGR.savestateGR.scatterGR.scatter3GR.selectcontextGR.selntranGR.semilogxGR.semilogyGR.send_cGR.sendmetaGR.sendmetarefGR.setarrowsizeGR.setarrowstyleGR.setcharexpanGR.setcharheightGR.setcharspaceGR.setcharupGR.setclipGR.setcolormapGR.setcolorrepGR.setcoordxformGR.setfillcolorindGR.setfillintstyleGR.setfillstyleGR.setlinecolorindGR.setlinetypeGR.setlinewidthGR.setmarkercolorindGR.setmarkersizeGR.setmarkertypeGR.setpanzoomGR.setregenflagsGR.setscaleGR.setsegtranGR.setshadowGR.setspaceGR.settextalignGR.settextcolorindGR.settextfontprecGR.settextpathGR.settransparencyGR.setviewportGR.setwindowGR.setwsviewportGR.setwswindowGR.shadeGR.shadelinesGR.shadepointsGR.showGR.sph2cartGR.splineGR.stemGR.stepGR.subplotGR.surfaceGR.textGR.textextGR.tickGR.titleGR.titles3dGR.tricontGR.tricontourGR.trisurfGR.trisurfaceGR.updategksGR.updatewsGR.usecolorschemeGR.uselinespecGR.validaterangeGR.verrorbarsGR.versionGR.volumeGR.wc3towcGR.wctondcGR.wireframeGR.xlabelGR.xlimGR.ylabelGR.ylim"
},

]}
