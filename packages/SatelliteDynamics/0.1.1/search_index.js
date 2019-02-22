var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "Testing Coverage Documentation\n(Image: Build Status) (Image: Coverage Status) (Image: )"
},

{
    "location": "#SatelliteDynamics.jl-1",
    "page": "Readme",
    "title": "SatelliteDynamics.jl",
    "category": "section",
    "text": "SatelliteDynamics package is meant to address the needs of the satellite operator, academic researcher, and public enthusiast communities.Current high-fidelity satellite dynamics modeling software generally falls into two camps:It is commercially licensed and closed-source code, making it difficult, if not impossible, to be used by hobbyists and academic researchers.\nThere is a steep learning curve which makes correct use of the underlying libraries difficult.These two challenges make it an unfortunately common occurance that guidance, navigation, and control engineers will frequently reimplement common astrodynamics libraries for each new project.With these two deficienties in mind, SatelliteDynamics.jl aims to provide a open-source, MIT-licensed, high fidelity astrodynamics toolbox to help make it easy to perform high-quality simulation and analysis of satellite attitude and orbit dynamics."
},

{
    "location": "#Getting-Started:-Installation-And-First-Steps-1",
    "page": "Readme",
    "title": "Getting Started: Installation And First Steps",
    "category": "section",
    "text": "To install the package, use the following command inside the Julia REPL:Pkg.add(\"SatelliteDynamics\")To load the package, use the command:using SatelliteDynamics"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The documentation for the package can be found here: https://sisl.github.io/SatelliteDynamics.jl/latestMore example code and more thorough documentation will be added as time permits."
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.AS2RAD",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.AS2RAD",
    "category": "constant",
    "text": "Constant to convert arcseconds to radians. Equal to 2pi/(360*3600). [rad/as]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.AU",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.AU",
    "category": "constant",
    "text": "Astronomical Unit. Equal to the mean distance of the Earth from the sun. TDB-compatible value. [m]\n\nP. Gérard and B. Luzum, IERS Technical Note 36, 2010\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.C_LIGHT",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.C_LIGHT",
    "category": "constant",
    "text": "Speed of light in vacuum. [m/s]\n\nD. Vallado, Fundamentals of Astrodynamics and Applications (4th Ed.), 2010\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.EOP",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.EOP",
    "category": "constant",
    "text": "Module-wide global EarthOrientationData object. This data object is used as the default source of Earth Orientation Data by reference system transformations if no explicit EarthOrientationData file is provided to those transformations.\n\nThis value can be overridden in your own code as follows:\n\nSatelliteDynamics.EOP = EarthOrientationData(:EOP_PRODUCT_CHOICE)\n\nThis global variable defaults to use the module\'s internal version of :FINALS_2000  if it is not otherwise set/provided.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.EarthOrientationData",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.EarthOrientationData",
    "category": "type",
    "text": "The EarthOrientationData constains a single data member of type  Dict{Int32, Tuple{Float64, Float64, Float64}} that stores the Earth Orientation parameters UT1-UTC, xp, and yp whose units are meters,  radians, and radians, respectively. xp and yp are the x- and  y-components of Earth\'s polar motion. The dictionary key is the Epoch the  parameters are for as a Modified Julian Day at 0h UTC.\n\nArguments:\n\nproduct::Symbol The IERS product type can be :C04_14, :C04_80, or :FINALS_2000\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.Epoch",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.Epoch",
    "category": "type",
    "text": "The Epoch type represents a single instant in time. It is used throughout the SatelliteDynamics module. It is meant to provide a clear definition of moments in time and provide a convenient interface display time in various representations as well as in differrent time systems. The internal data members are also chosen such that the representation maintains nanosecond-precision in reprersenation of time and doesn\'t accumulate floating-point arithmetic errors larger than nanoseconds even after centuries.\n\nSupports +, +=, -, and -= operators. Two Epoch\'s can be differenced to return the time difference between two Epochs. If adding a Real number it is interpreted as an offset in seconds to add to the Epoch.\n\nThe class also supports all arithmetic operators: ==, !=, <, <=, >, >=\n\nArguments:\n\nyear::Int Year\nyear::Int Month\nyear::Int Day\nhour::Int Hour (optional)\nminute::Int Minute (optional)\nsecond::Real Seconds (optional)\nnanoseconds::Real Nanoseconds (optional)\ntsys::Symbol: Time system of the epoch at initialization\n\nThe Epoch class can be also be initialized from a string. Examples of Valid String constructors are: \n\nepc = Epoch(\"2018-12-20\")\nepc = Epoch(\"2018-12-20T16:22:19.0Z\")\nepc = Epoch(\"2018-12-20T16:22:19.123Z\")\nepc = Epoch(\"2018-12-20T16:22:19.123456789Z\")\nepc = Epoch(\"2018-12-20T16:22:19Z\")\nepc = Epoch(\"20181220T162219Z\")\nepc = Epoch(\"2018-12-01 16:22:19 GPS\")\nepc = Epoch(\"2018-12-01 16:22:19.0 GPS\")\nepc = Epoch(\"2018-12-01 16:22:19.123 GPS\")\nepc = Epoch(\"2018-12-01 16:22:19.123456789 GPS\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.EulerAngle",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.EulerAngle",
    "category": "type",
    "text": "The EulerAngle type provides a represenation of EulerAngles for storing attitude information.\n\nValid sequences are: 121, 123, 131, 132, 212, 213, 231, 232, 312, 313, 321, 323.\n\nData members:\n\nseq::Symbol: Order of application of angles with respect to body axis.\nphi::Float64: First Euler angle\ntheta::Float64: Second Euler angle\npsi::Float64: Third Euler angle\n\nReferences:\n\nJ. Diebel, Representing attitude: Euler angles, unit quaternions, and rotation vectors. Matrix 58(15-16) (2006).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.EulerAxis",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.EulerAxis",
    "category": "type",
    "text": "The EulerAxis type provides a representation of the Euler angle-and-axis attitude representation.\n\nData members:\n\ntheta::Float64: Angle of rotation\nvec::Array{Float64, 1}: Axis of rotation\n\nReferences:\n\nJ. Diebel, Representing attitude: Euler angles, unit quaternions, and rotation vectors. Matrix 58(15-16) (2006).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_EARTH",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_EARTH",
    "category": "constant",
    "text": "Earth\'s Gravitational constant [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_JUPITER",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_JUPITER",
    "category": "constant",
    "text": "Gravitational constant of the Jupiter. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_MARS",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_MARS",
    "category": "constant",
    "text": "Gravitational constant of the Mars. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_MERCURY",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_MERCURY",
    "category": "constant",
    "text": "Gravitational constant of the Mercury. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_MOON",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_MOON",
    "category": "constant",
    "text": "Gravitational constant of the Moon. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_NEPTUNE",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_NEPTUNE",
    "category": "constant",
    "text": "Gravitational constant of the Neptune. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_PLUTO",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_PLUTO",
    "category": "constant",
    "text": "Gravitational constant of the Pluto. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_SATURN",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_SATURN",
    "category": "constant",
    "text": "Gravitational constant of the Saturn. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_SUN",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_SUN",
    "category": "constant",
    "text": "Gravitational constant of the Sun. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_URANUS",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_URANUS",
    "category": "constant",
    "text": "Gravitational constant of the Uranus. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GM_VENUS",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GM_VENUS",
    "category": "constant",
    "text": "Gravitational constant of the Venus. [m^3/s^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GPS_TAI",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GPS_TAI",
    "category": "constant",
    "text": "Offset of GPS time system with respect to TAI time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GPS_TT",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GPS_TT",
    "category": "constant",
    "text": "Offset of GPS time system with respect to TT time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.GPS_ZERO",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.GPS_ZERO",
    "category": "constant",
    "text": "Modified Julian Date of the start of the GPS time system in the GPS time system. This date was January 6, 1980 0H as reckond in the UTC time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.GRAVITY_MODEL",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.GRAVITY_MODEL",
    "category": "constant",
    "text": "Module-wide global GravityModel object. This data object is used as the default spherical harmonic gravity field unless one is otherwise provided.\n\nThis value can be overridden in your own code as follows:\n\nSatelliteDynamics.GravityModel = GravityModel(PATH_TO_YOUR_GRAVITY_MODEL)\n\nThis global variable defaults to use the module\'s internal version of the EGM2008 model truncated to order and degree 90, if it is not otherwise set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.GravModel",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.GravModel",
    "category": "type",
    "text": "GravModel stores a spherical harmonic gravity field in memory. Can store normalized or denomalized coefficients. Package contains EGM2008, GGM01S, and GGM0S gravity models, as well as the default gravity model of EGM2008 truncated to degree and order 90.\n\nAdditional gravity field models can be downloaded from: http://icgem.gfz-potsdam.de/home\n\nArguments:\n\nfilepath::string Path to spherical harmonic gravity model file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.J2_EARTH",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.J2_EARTH",
    "category": "constant",
    "text": "Earth\'s first zonal harmonic. [dimensionless]\n\nGGM05s Gravity Model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.MJD2000",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.MJD2000",
    "category": "constant",
    "text": "Modified Julian Date of January 1, 2000 00:00:00. Value is independent of time scale.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.MJD_ZERO",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.MJD_ZERO",
    "category": "constant",
    "text": "Offset of Modified Julian Days representation with respect to Julian Days. For  a time, t, MJD_ZERO is equal to:\n\nMJD_ZERO = t_jd - t_mjd\n\nWhere tjd is the epoch represented in Julian Days, and tmjd is the epoch in Modified Julian Days.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.OMEGA_EARTH",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.OMEGA_EARTH",
    "category": "constant",
    "text": "Earth axial rotation rate. [rad/s]\n\nD. Vallado, Fundamentals of Astrodynamics and Applications (4th Ed.), p. 222, 2010\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.POLE_LOCATOR",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.POLE_LOCATOR",
    "category": "function",
    "text": "Compute the location of the pole. Returns x- and y- components as a tuple with the units of [radians].  If the EarthOrientationData argument is ommitted the function will use the default module-global value.\n\nArguments:\n\neop::EarthOrientationData EarthOrientationData object to use to compute the offset\nmjd::Real Modified Julian Date in UTC of the Epoch for which the pole locator is desired.\ninterp::Bool Whether to linearly interpolate the parameter data to the input MJD.\n\nReturns:\n\npole_locator::Tuple{ -Float, Float} (x, y) pole location in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.P_SUN",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.P_SUN",
    "category": "constant",
    "text": "Nominal solar radiation pressure at 1 AU. [N/m^2]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.Quaternion",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.Quaternion",
    "category": "type",
    "text": "The Quaternion type defines a scalar-first quaternion for representation of attitude.\n\nData members:\n\nq0::Float64: Scalar part of quaternion\nq1::Float64: First vector component of quaternion\nq2::Float64: Second vector component of quaternion\nq3::Float64: Third vector component of quaternion\n\nReferences:\n\nJ. Diebel, Representing attitude: Euler angles, unit quaternions, and rotation vectors. Matrix 58(15-16) (2006).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.RAD2AS",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.RAD2AS",
    "category": "constant",
    "text": "Constant to convert radians to arcseconds. Equal to 2pi/(360*3600) [as/ras]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.R_EARTH",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.R_EARTH",
    "category": "constant",
    "text": "Earth\'s equatorial radius. [m]\n\nGGM05s Gravity Model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.R_SUN",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.R_SUN",
    "category": "constant",
    "text": "Nominal solar photospheric radius. [m]\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.Rx",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.Rx",
    "category": "function",
    "text": "Rotation matrix, for a rotation about the x-axis.\n\nArguments:\n\nangle::Real: Counter-clockwise angle of rotation as viewed looking back along the postive direction of the rotation axis.\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\nr::Array{<:Real, 2}: Rotation matrix\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.27.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.Ry",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.Ry",
    "category": "function",
    "text": "Rotation matrix, for a rotation about the y-axis.\n\nArguments:\n\nangle::Real: Counter-clockwise angle of rotation as viewed looking back along the postive direction of the rotation axis.\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\nr::Array{<:Real, 2}: Rotation matrix\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.27.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.Rz",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.Rz",
    "category": "function",
    "text": "Rotation matrix, for a rotation about the z-axis.\n\nArguments:\n\nangle::Real: Counter-clockwise angle of rotation as viewed looking back along the postive direction of the rotation axis.\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\nr::Array{<:Real, 2}: Rotation matrix\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.27.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.TAI_GPS",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.TAI_GPS",
    "category": "constant",
    "text": "Offset of TAI time system with respect to GPS time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.TAI_TT",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.TAI_TT",
    "category": "constant",
    "text": "Offset of TAI time system with respect to TT time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.TT_GPS",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.TT_GPS",
    "category": "constant",
    "text": "Offset of TT time system with respect to GPS time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.TT_TAI",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.TT_TAI",
    "category": "constant",
    "text": "Offset of TT time system with respect to TAI time system.\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and  Applications, 2012.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.UT1_UTC",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.UT1_UTC",
    "category": "function",
    "text": "Compute the offset between the UT1 and UTC time systems in seconds. If the EarthOrientationData argument is ommitted the function will use the default module-global value.\n\nArguments:\n\neop::EarthOrientationData EarthOrientationData object to use to compute the offset\nmjd::Real Modified Julian Date in UTC of the Epoch for which the UT1-UTC offset is desired.\ninterp::Bool Whether to linearly interpolate the parameter data to the input MJD.\n\nReturns:\n\nut1_utc::Float UT1 - UTC offset. [s] \n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.WGS84_a",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.WGS84_a",
    "category": "constant",
    "text": "Earth\'s semi-major axis as defined by the WGS84 geodetic system. [m]\n\nNIMA Technical Report TR8350.2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.WGS84_f",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.WGS84_f",
    "category": "constant",
    "text": "Earth\'s ellipsoidal flattening.  WGS84 Value.\n\nNIMA Technical Report TR8350.2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.XP",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.XP",
    "category": "function",
    "text": "Compute the x-component of the pole locator in [radians]. If the first EarthOrientationData argument is ommitted the function will use the default module-global value.\n\nArguments:\n\neop::EarthOrientationData EarthOrientationData object to use to compute the offset\nmjd::Real Modified Julian Date in UTC of the Epoch for which the xp value is desired.\ninterp::Bool Whether to linearly interpolate the parameter data to the input MJD.\n\nReturns:\n\nxp::Float x-component of pole locator in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.YP",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.YP",
    "category": "function",
    "text": "Compute the y-component of the pole locator in [radians]. If the first EarthOrientationData argument is ommitted the function will use the default module-global value.\n\nArguments:\n\neop::EarthOrientationData EarthOrientationData object to use to compute the offset\nmjd::Real Modified Julian Date in UTC of the Epoch for which the yp value is desired.\ninterp::Bool Whether to linearly interpolate the parameter data to the input MJD.\n\nReturns:\n\nyp::Float y-component of pole locator in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.accel_drag",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.accel_drag",
    "category": "function",
    "text": "Computes the perturbing, non-conservative acceleration caused by atmospheric drag assuming that the ballistic properties of the spacecraft are captured by the coefficient of drag.\n\nArguments:\n\nx::Array{<:Real, 1}: Satellite Cartesean state in the inertial reference frame [m; m/s]\nrho::Real: atmospheric density [kg/m^3]\nmass::Real: Spacecraft mass [kg]\narea::Real: Wind-facing cross-sectional area [m^2]\nCd::Real: coefficient of drag [dimensionless]\nT::Array{<:Real, 2}: Rotation matrix from the inertial to the true-of-date frame\n\nReturn:\n\na::Array{<:Real, 1}: Acceleration due to drag in the X, Y, and Z inertial directions. [m/s^2]\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.83-86.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.accel_gravity",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.accel_gravity",
    "category": "function",
    "text": "Computes the accleration caused by Earth gravity as modeled by a spherical  harmonic gravity field.\n\nArguments:\n\nr_sat::Array{<:Real, 1}: Satellite position in the inertial frame [m]\nR_eci_ecef::Array{<:Real, 2}: Rotation matrix transforming a vector from the inertial to body-fixed reference frames. \nn_max::Integer: Maximum degree coefficient to use in expansion\nm_max::Integer: Maximum order coefficient to use in the expansion. Must be less than the degree.\n\nReturn:\n\na::Array{<:Real, 1}: Gravitational acceleration in X, Y, and Z inertial directions [m/s^2]\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.56-68.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.accel_point_mass",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.accel_point_mass",
    "category": "function",
    "text": "Computes the acceleration of a satellite caused by a point-mass approximation  of the central body. Returns the acceleration vector of the satellite.\n\nAssumes the satellite is much, much less massive than the central body.\n\nArguments:\n\nr_sat::Array{<:Real, 1}: satellite position in a commonn inertial frame [m]\nr_body::Array{<:Real, 1}: position of body in a commonn inertial frame [m]\nGM::Array{<:Real, 1}: gravitational coeffient of attracting body [m^3/s^2] Default: SatelliteDynamics.Constants.GM_EARTH)\n\n(Default: SatelliteDynamics.Constants.GM_EARTH\n\nReturn:\n\na::Array{<:Real, 1}: Acceleration in X, Y, and Z inertial directions [m/s^2]\n\n\n\n\n\nComputes the acceleration on a satellite caused by a point-mass approximation  of a massive body. Returns the acceleration vector of the satellite.\n\nArguments:\n\nr_sat::Array{<:Real, 1}: satellite position in the inertial frame [m]\nGM::Array{<:Real, 1}: gravitational coeffient of attracting body [m^3/s^2] Default: SatelliteDynamics.Constants.GM_EARTH)\n\n(Default: SatelliteDynamics.Constants.GM_EARTH\n\nReturn:\n\na::Array{<:Real, 1}: Acceleration in X, Y, and Z inertial directions [m/s^2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.accel_relativity",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.accel_relativity",
    "category": "function",
    "text": "Computes perturbation accleration of a satellite in the Inertial frame due to the combined effects of special and general relativity.\n\nArguments:\n\nx::Array{<:Real, 1}: Satellite Cartesean state in the inertial reference frame [m; m/s]\n\nReturns:\n\na::Array{<:Real, 1}: Satellite acceleration due to relativity. [m/s^2]\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.110-112.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.accel_srp",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.accel_srp",
    "category": "function",
    "text": "Computes the perturbing acceleration due to direct solar radiation  pressure assuming the reflecting surface is a flat plate pointed directly at the Sun.\n\nArguments:\n\nx::Array{<:Real, 1}: Satellite Cartesean state in the inertial reference frame [m; m/s]\n\nReturns:\n\na::Array{<:Real, 1}: Satellite acceleration due to solar radiation pressure [m/s^2]\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.77-79.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.accel_thirdbody_moon",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.accel_thirdbody_moon",
    "category": "function",
    "text": "Computes the acceleration of a satellite in the inertial frame due to the gravitational attraction of the Moon.\n\nArguments:\n\nx::Array{<:Real, 1}: Satellite Cartesean state in the inertial reference frame [m; m/s]\nr_moon::Array{<:Real, 1}: Position of moon in inertial frame.\n\nReturns:\n\na::Array{<:Real, 1}: Acceleration due to the Moon\'s gravity in the inertial frame [m/s^2]\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.69-70.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.accel_thirdbody_sun",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.accel_thirdbody_sun",
    "category": "function",
    "text": "Computes the acceleration of a satellite in the inertial frame due to the gravitational attraction of the Sun.\n\nArguments:\n\nx::Array{<:Real, 1}: Satellite Cartesean state in the inertial reference frame [m; m/s]\nr_sun::Array{<:Real, 1}: Position of sun in inertial frame.\n\nReturn:\n\na::Array{<:Real, 1}: Acceleration due to the Sun\'s gravity in the inertial frame [m/s^2]\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.69-70.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Astrodynamics.anomaly_eccentric_to_mean",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Astrodynamics.anomaly_eccentric_to_mean",
    "category": "function",
    "text": "Convert eccentric anomaly into mean anomaly.\n\nArguments:\n\nE::Real: Eccentric anomaly. [rad] or [deg]\ne::Real: Eccentricity. [dimensionless]\nuse_degrees:Bool: If true interpret input will be interpreted as being in degrees, and output will be returned in degrees.\n\nReturns:\n\nM::Real: Mean anomaly. [rad] or [deg]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Astrodynamics.anomaly_mean_to_eccentric",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Astrodynamics.anomaly_mean_to_eccentric",
    "category": "function",
    "text": "Convert mean anomaly into eccentric anomaly.\n\nArguments:\n\nM::Real: Mean anomaly. [deg] or [deg]\ne::Real: Eccentricity. [dimensionless]\nuse_degrees:Bool: If true interpret input will be interpreted as being in degrees, and output will be returned in degrees.\n\nReturns:\n\nE::Real: Eccentric anomaly. [rad] or [deg]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.as_matrix",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.as_matrix",
    "category": "function",
    "text": "Return the rotation matrix representation of a Quaternion.\n\nArguments:\n\nq::Quaternion: Quaternion\n\nReturns:\n\nmat::Array{Float64, 2}: Rotation Matrix on SO(3).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.as_vector",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.as_vector",
    "category": "function",
    "text": "Return quaternion as a vector. \n\nEquivalent to q[:]\n\nArguments:\n\nq::Quaternion: Quaternion\n\nReturns:\n\nvec::Array{Float64, 1}: Quaternion as a (4,) vector\n\n\n\n\n\nReturn Euler angles as a vector.\n\nEquivalent to: [e.phi, e.theta, e.psi] for EulerAngle e\n\nArguments:\n\ne::EulerAngle Euler Angle\n\nReturns:\n\nevec::Array{Float64, 1} Euler angles components in vector form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.bias_precession_nutation",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.bias_precession_nutation",
    "category": "function",
    "text": "Computes the Bias-Precession-Nutation matrix transforming the GCRS to the  CIRS intermediate reference frame. This transformation corrects for the  bias, precession, and nutation of Celestial Intermediate Origin (CIO) with respect to inertial space.\n\nArguments:\n\nepc::Epoch: Epoch of transformation\n\nReturns:\n\nrc2i::Array{<:Real, 2}: 3x3 Rotation matrix transforming GCRS -> CIRS\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.caldate",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.caldate",
    "category": "function",
    "text": "Return the Gregorian calendar date for a specific \n\nArguments:\n\nepc::Epoch: Input epoch\ntsys::Symbol: Time system to compute output in.\n\nReturns:\n\nyear::Int: Year of epoch\nmonth::Int: Month of epoch\nday::Int: Day of epoch\nhour::Int: Hour of epoch\nminute::Int: Minute of epoch\nsecond::Int: Second of epoch\nnanoseconds::Int: Year of epoch\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.caldate_to_jd",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.caldate_to_jd",
    "category": "function",
    "text": "Convert a Gregorian calendar date to the equivalent Julian Date representation of that time instant.\n\nAguments:\n\nyear::Integer: Year\nyear::Integer: Month\nyear::Integer: Day\nhour::Integer: Hour\nminute::Integer: Minute \nsecond::Real: Seconds\nnanoseconds::Real: Nanoseconds\n\nReturns:\n\nmjd::Float64: Julian Date of Epoch\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.caldate_to_mjd",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.caldate_to_mjd",
    "category": "function",
    "text": "Convert a Gregorian calendar date to the equivalent Modified Julian Date representation of that time instant.\n\nAguments:\n\nyear::Integer Year\nyear::Integer Month\nyear::Integer Day\nhour::Integer Hour\nminute::Integer Minute \nsecond::Real Seconds\nnanoseconds::Real Nanoseconds\n\nReturns:\n\nmjd::Float64 Modified Julian Date of Epoch\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.day_of_year",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.day_of_year",
    "category": "function",
    "text": "Return the day-of-year number for a given Epoch. \n\nJanuary 1 0h of each year will return 1.\n\nArguments:\n\nepc::Epoch: Epoch\ntsys::Symbol: Time system to return output in\n\nReturns:\n\ndoy::Real: Day of year number. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.days_from_elapsed",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.days_from_elapsed",
    "category": "function",
    "text": "Computes the day number in a given time scale given the elapsed time since epoch and the epoch itself.\n\nAssumes all days are counted using a uniform 86400.0 seconds over the time span.\n\nArguments:\n\nt::Real: Elapsed seconds since the day_epoch.\nday_epoch::Real: Day number of the epoch. Common values are SatelliteDynamics.Constants.MJD_ZERO (to get the Julian Day number) or SatelliteDynamics.Constants.MJD2000 (to get Modified Julian Days if reckoning time from January 1, 2000 0H)\n\nReturns:\n\ndays::Float: Number of elapsed days in the time scale.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.density_harris_priester",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.density_harris_priester",
    "category": "function",
    "text": "Computes the local density using the Harris-Priester density model.\n\nArguments:\n\nx::Array{<:Real, 1}: Satellite Cartesean state in the inertial reference frame [m; m/s]\nr_sun::Array{<:Real, 1}: Position of sun in inertial frame.\n\nReturns:\n\nrho:Float64: Local atmospheric density [kg/m^3]\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.89-91.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.deriv_orbit_earth",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.deriv_orbit_earth",
    "category": "function",
    "text": "Compute the state derivative.\n\nArguments:\n\nepc::Epoch: Current epoch\nx::Array{<:Real, 1}: Satellite state vector\nmass::Real: Satellite mass [kg]\narea_drag: Velocity-facing area affected by drag. [m^2]\ncoef_drag: Coefficient of drag [dimensionless]\narea_srp: Velocity-facing area affected by drag. [m^2]\ncoef_srp: Coefficient of reflectivity [dimensionless]  \nn_grav::Integer: Gravity model degree (Default: 20)\nm_grav::Integer: Gravity model order (Default: 20)\ndrag::Bool: Include cannonball atomospheric drag in force model (Default: true)\nsrp::Bool: Include flat-plate solar radiation pressure in force model (Default: true)\nmoon::Bool: Include thridbody lunar gravity in force model (Default: true)\nsun::Bool: Include thirdbody solar in force model (Default: true)\nrelativity::Bool: Include relativistic effects in force model (Default: true)\n\nReturns:\n\ndx::Array{<:Float64, 1}: Satellite state derivative, velocity and accelerations [m; m/s]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Constants.e_EARTH",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Constants.e_EARTH",
    "category": "constant",
    "text": "Earth\'s first eccentricity. WGS84 Value. [dimensionless]\n\nNIMA Technical Report TR8350.2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.earth_rotation",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.earth_rotation",
    "category": "function",
    "text": "Computes the Earth rotation matrix transforming the CIRS to the TIRS intermediate reference frame. This transformation corrects for the Earth rotation.\n\nArguments:\n\nepc::Epoch: Epoch of transformation\n\nReturns:\n\nr::Array{<:Real, 2}: 3x3 Rotation matrix transforming CIRS -> TIRS\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.eclipse_conical",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.eclipse_conical",
    "category": "function",
    "text": "Computes the illumination fraction of a satellite in Earth orbit using a conical Earth shadow model.\n\nArguments:\n\nx::Array{<:Real, 1}: Satellite Cartesean state in the inertial reference frame [m; m/s]\nr_sun::Array{<:Real, 1}: Position of sun in inertial frame.\n\nReturn:\n\nnu::Float64: Illumination fraction (0 <= nu <= 1). nu = 0 means spacecraft in complete shadow, nu = 1 mean spacecraft fully illuminated by sun.\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.80-83.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.eclipse_cylindrical",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.eclipse_cylindrical",
    "category": "function",
    "text": "Computes the illumination fraction of a satellite in Earth orbit using a cylindrical Earth shadow model.\n\nArguments:\n\nx::Array{<:Real, 1}: Satellite Cartesean state in the inertial reference frame [m; m/s]\nr_sun::Array{<:Real, 1}: Position of sun in inertial frame.\n\nReturn:\n\nnu::Float64: Illumination fraction (0 <= nu <= 1). nu = 0 means spacecraft in complete shadow, nu = 1 mean spacecraft fully illuminated by sun.\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.80-83.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.elapsed_from_epoch",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.elapsed_from_epoch",
    "category": "function",
    "text": "Compute the number of elapsed seconds since a given Epoch from the day number. Can be used to compute the elapsed time since a given Julian or Modified Julian Date.\n\nArguments:\n\nday_number::Real: Day number, can contain fractional days. Asummes all days are a uniform 86400.0 seconds in length.\nday_epoch::Real: Modified Julian Date of Epoch\n\nReturns:\n\nt::Float: Number of elapsed seconds between the Provided Modified   Julian date and the epoch.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.epoch_to_jdfd",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.epoch_to_jdfd",
    "category": "function",
    "text": "Compute the two-part date format used by SOFA.jl functions forr a given Epoch.\n\nArguments:\n\nepc::Epoch: Epoch\ntsys::Symbol: Time system to return output in\n\nReturns:\n\nd1::Real: First part of two part date. [days]\nd2::Real: Second part of two part date. [days]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.gast",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.gast",
    "category": "function",
    "text": "Compute the Greenwich Mean Sidereal Time for the given Epoch.\n\nArguments:\n\nepc::Epoch: Epoch\nuse_degrees::Bool: Return output in degrees (Default: false)\n\nReturns:\n\ngast::Real: Greenwich Apparent Sidereal Time [rad/deg]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.gmst",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.gmst",
    "category": "function",
    "text": "Compute the Greenwich Mean Sidereal Time for the given Epoch.\n\nArguments:\n\nepc::Epoch: Epoch\nuse_degrees::Bool: Return output in degrees (Default: false)\n\nReturns:\n\ngmst::Real: Greenwich Mean Sidereal Time [rad/deg]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.jd",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.jd",
    "category": "function",
    "text": "Compute the Julian Date for a specific epoch\n\nArguments:\n\nepc::Epoch: Epoch\ntsys::Symbol: Time system to return output in\n\nReturns:\n\njd::Real: Julian date of the epoch in the requested time system\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.jd_to_caldate",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.jd_to_caldate",
    "category": "function",
    "text": "Convert a Julian Date to the equivalent Gregorian calendar date representation of the same instant in time.\n\nAguments:\n\njd::Real: Julian Date of Epoch\n\nReturns:\n\nyear::Int32: Year\nyear::Int32: Month\nyear::Int32: Day\nhour::Int32: Hour\nminute::Int32: Minute \nsecond::Float64: Seconds\nmicrosecond::Float64: Nanoseconds\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.load_eop",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.load_eop",
    "category": "function",
    "text": "Load new Earth orientation data into the module global EarthOrientationData object. The product can be one of the symbols: :C04_14, :C04_80, or :FINALS_2000.\n\nArguments:\n\nproduct::Symbol Loads a different set of EarthOrientationData values into the module-wide global EarthOrientationData parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.load_gravity_model",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.load_gravity_model",
    "category": "function",
    "text": "Load new gravity model into module global EarthOrientationData object. The product can be one of the symbols: :EGM2008_20, :EGM2008_90, :GGM01S, :GGM05S, or the filepath to a text-encoded gravity model file.\n\nArguments:\n\ngfc_file::String File path of gravity field model\nproduct_name::Symbol OR a symbol of a known gravity field product. Valid ones are: :EGM2008_20, :EGM2008_90, :GGM01S, :GGM05S\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Astrodynamics.mean_motion",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Astrodynamics.mean_motion",
    "category": "function",
    "text": "Compute the mean motion given a semi-major axis.\n\nArguments:\n\na::Real: Semi-major axis. [m]\nuse_degrees:Bool: If true returns result in units of degrees\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns:\n\nn::Real: Orbital mean motion. [rad/s] or [deg/s]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.mjd",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.mjd",
    "category": "function",
    "text": "Compute the Modified Julian Date for a specific epoch\n\nArguments:\n\nepc::Epoch: Epoch\ntsys::Symbol: Time system to return output in\n\nReturns:\n\nmjd::Real: Julian date of the epoch in the requested time system\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.mjd_to_caldate",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.mjd_to_caldate",
    "category": "function",
    "text": "Convert a Modified Julian Date to the equivalent Gregorian calendar date representation of the same instant in time.\n\nAguments:\n\nmjd::Real: Modified Julian Date of Epoch\n\nReturns:\n\nyear::Int32: Year\nyear::Int32: Month\nyear::Int32: Day\nhour::Int32: Hour\nminute::Int32: Minute \nsecond::Float64: Seconds\nnanoseconds::Float64: Nanoseconds\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.moon_position",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.moon_position",
    "category": "function",
    "text": "Compute the Moon\'s position in the EME2000 inertial frame through the use of low-precision analytical functions.\n\nArgument:\n\nepc::Epoch: Epoch\n\nReturns:\n\nr_moon::Array{<:Real, 1}: Position vector of the Moon in the Earth-centered inertial fame.\n\nNotes:\n\nThe EME2000 inertial frame is for most purposes equivalent to the GCRF frame.\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.70-73.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Astrodynamics.orbit_period",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Astrodynamics.orbit_period",
    "category": "function",
    "text": "Compute the satellite orbital period given the semi-major axis.\n\nArguments:\n\na::Real: Semi-major axis. [m]\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns:\n\nT::Real: Orbital period. [s]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.polar_motion",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.polar_motion",
    "category": "function",
    "text": "Computes the Earth rotation matrix transforming the TIRS to the ITRF reference  frame.\n\nArguments\n\nepc::Epoch: Epoch of transformation\n\nReturns\n\nrpm::Array{<:Real, 2}: 3x3 Rotation matrix transforming TIRS -> ITRF\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Simulation.propagate_orbit",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Simulation.propagate_orbit",
    "category": "function",
    "text": "Simulate orbit dynamics\n\nArguments:\n\nepc0::Epoch: Propagation start Epoch\neci0::Epoch: Initial Cartesean inertial state [m; m/s]\nepcf::Epoch: Final to simulate to.\ntimestep::Real: Timestep to use for simulation (Default: 5.0)\nsolver: Solver to use to solve ODEProblem\natol::Real: Absolute tolerate limit for differential equation solution (Default: 1.0e-9)\natol::Real: Absolute tolerate limit for differential equation solution (Default: 1.0e-9)\nmass::Real: Satellite mass (Default: 100.0) [kg]\narea_drag::Real: Area of drag (cannon-ball model) (Default: 1.0) [m^2]\ncoef_drag::Real: Coefficient of drag (Default: 2.3) [dimensionless]\narea_srp::Real: Area of solar radiation prerssure (Default: 1.0) [m^2]\ncoef_srp::Real: Coefficient of reflectivity (Default: 1.8) [dimensionless]\nn_grav::Integer: Degree of gravity field (Default: 0.0) [dimensionless]\nm_grav::Integer: Order of gravity field (Default: 0.0) [dimensionless]\ndrag::Bool: Apply drag perturbation (Default: false)\nsrp::Bool: Apply solar radiation pressure perturbation (Default: false)\nmoon::Bool: Apply third-body lunar gravity perturbation (Default: false)\nsun::Bool: Apply third-body solar gravity perturbation (Default: false)\nrelativity::Bool: Apply relativistic perturbations (Default: false)\n\nReturns:\n\nt::Array{Float64, 1}: Simulation output times at elapsed seconds from initial Epoch\nepc::Array{Epoch, 1}: Simulation output times as absolute Epochs\neci::Array{Float64, 2}: Propgated inertial state. Time is aligned with column dimension.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.rECEFtoECI",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.rECEFtoECI",
    "category": "function",
    "text": "Computes the combined rotation matrix from the Earth-fixed to the inertial reference frame. Applies corrections for bias, precession, nutation, Earth-rotation, and polar motion.\n\nThe transformation is accomplished using the IAU 2006/2000A, CIO-based  theory using classical angles. The method as described in section 5.5 of  the SOFA C transformation cookbook.\n\nArguments\n\nepc::Epoch: Epoch of transformation\n\nReturns\n\nr::Array{<:Real, 1}: 3x3 Rotation matrix transforming ITRF -> GCRF\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.rECEFtoENZ",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.rECEFtoENZ",
    "category": "function",
    "text": "Compute the rotation matrix from the Earth-fixed to the East-North-Up coorindate basis.\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Real, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.rECEFtoSEZ",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.rECEFtoSEZ",
    "category": "function",
    "text": "Compute the rotation matrix from the Earth-fixed to the South-East-Zenith  coorindate basis.\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.rECItoECEF",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.rECItoECEF",
    "category": "function",
    "text": "Computes the combined rotation matrix from the inertial to the Earth-fixed reference frame. Applies corrections for bias, precession, nutation, Earth-rotation, and polar motion.\n\nThe transformation is accomplished using the IAU 2006/2000A, CIO-based  theory using classical angles. The method as described in section 5.5 of  the SOFA C transformation cookbook.\n\nArguments\n\nepc::Epoch: Epoch of transformation\n\nReturns\n\nr::Array{<:Real, 2}: 3x3 Rotation matrix transforming GCRF -> ITRF\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.rECItoRTN",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.rECItoRTN",
    "category": "function",
    "text": "Compute the Earth-centered inertial to radial, along-track, cross-track (RTN)  rotation matrix. Which, if applied to a position vector in the ECI frame, will  transform that vector into the equivalent position vector in the RTN frame.\n\nThe RTN frame is also commonly refered to as the local-vertical, local-horizontal (LVLH) frame.\n\nArguments:\n\nx::Array{<:Real, 1}: Inertial state (position and velocity) of primary (observing) satellite\nxt::Array{<:Real, 1}: Inertial state (position and velocity) of the target satellite\n\nReturns:\n\nR_eci_to_rtn::Array{<:Real, 1}: Rotation matrix transforming from the ECI frame to the RTN frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.rENZtoECEF",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.rENZtoECEF",
    "category": "function",
    "text": "Compute the rotation matrix from the Earth-fixed to the South-East-Zenith  coorindate basis.\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.rRTNtoECI",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.rRTNtoECI",
    "category": "function",
    "text": "Compute the radial, along-track, cross-track (RTN) rotation matrix. Which, if applied to a position vector in the RTN frame, will transform that vector to beinto the equivalent relative position in the ECI frame.\n\nThe RTN frame is also commonly refered to as the local-vertical, local-horizontal (LVLH) frame.\n\nArguments:\n\nx::Array{<:Real, 1}: Inertial state (position and velocity) of primary (observing) satellite\nxt::Array{<:Real, 1}: Inertial state (position and velocity) of the target satellite\n\nReturns:\n\nR_rtn_to_eci::Array{<:Real, 1}: Rotation matrix transforming from the RTN frame to the ECI frame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.rSEZtoECEF",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.rSEZtoECEF",
    "category": "function",
    "text": "Compute the rotation matrix from the Earth-fixed to the South-East-Zenith  coorindate basis.\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Astrodynamics.sCARTtoOSC",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Astrodynamics.sCARTtoOSC",
    "category": "function",
    "text": "Given a Cartesean position and velocity in the inertial frame, return the  state expressed in terms of  osculating orbital elements.\n\nThe osculating elements are assumed to be (in order):\n\na, Semi-major axis [m]\ne, Eccentricity [dimensionless]\ni, Inclination [rad]\nΩ, Right Ascension of the Ascending Node (RAAN) [rad]\nω, Argument of Perigee [ramd]\nM, Mean anomaly [rad]\n\nArguments:\n\nx x::Array{<:Real, 1}: Cartesean inertial state. Returns position and velocity. [m; m/s]\nuse_degrees:Bool: If true interpret input will be interpreted as being in degrees, and output will be returned in degrees.\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns\n\nx_oe x::Array{<:Real, 1}: Osculating orbital elements. See above for desription of the elements and their required order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.sECEFtoECI",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.sECEFtoECI",
    "category": "function",
    "text": "Transforms an Earth fixed state into an Inertial state\n\nThe transformation is accomplished using the IAU 2006/2000A, CIO-based  theory using classical angles. The method as described in section 5.5 of  the SOFA C transformation cookbook.\n\nArguments\n\nepc::Epoch: Epoch of transformation\nx::Array{<:Real, 1}: Earth-fixed state (position, velocity) [m; m/s]\n\nReturns\n\nx_ecef::Array{<:Real, 1}: Inertial state (position, velocity)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sECEFtoENZ",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sECEFtoENZ",
    "category": "function",
    "text": "Compute the coordinates of an object in the topocentric frame of an Earth-fixed frame\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\necef::Array{<:Real, 1}: Coordinates of the object in Earth-fixed station\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sECEFtoGEOC",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sECEFtoGEOC",
    "category": "function",
    "text": "Convert Earth-fixed position to geocentric location.\n\nArguments:\n\necef::Array{<:Real, 1}: Earth-fixed coordinated [m]\nuse_degrees:Bool: If true returns result in units of degrees\n\nReturns:\n\ngeoc: Geocentric coordinates (lon, lat, altitude) [rad] / [deg]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sECEFtoGEOD",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sECEFtoGEOD",
    "category": "function",
    "text": "Convert geodetic coordinaties to Earth-fixed position\n\nArguments:\n\necef::Array{<:Real, 1}: Earth-fixed position [m]\nuse_degrees:Bool: If true returns result in units of degrees\n\nReturns:\n\ngeod::Array{<:Real, 1}: Geocentric coordinates (lon, lat, altitude) [rad] / [deg]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sECEFtoSEZ",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sECEFtoSEZ",
    "category": "function",
    "text": "Compute the coordinates of an object in the topocentric frame of an Earth-fixed frame\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\necef::Array{<:Real, 1}: Coordinates of the object in Earth-fixed station\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.sECItoECEF",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.sECItoECEF",
    "category": "function",
    "text": "Transforms an Earth inertial state into an Earth fixed state\n\nThe transformation is accomplished using the IAU 2006/2000A, CIO-based  theory using classical angles. The method as described in section 5.5 of  the SOFA C transformation cookbook.\n\nArguments\n\nepc::Epoch: Epoch of transformation\nx::Array{<:Real, 1}: Inertial state (position, velocity) [m; m/s]\n\nReturns\n\nx_ecef::Array{<:Real, 1}: Earth-fixed state (position, velocity)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.sECItoRTN",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.sECItoRTN",
    "category": "function",
    "text": "Compute the radial, along-track, cross-track (RTN) coordinates of a target satellite in the primary satellites RTN frame.\n\nThe RTN frame is also commonly refered to as the local-vertical, local-horizontal (LVLH) frame.\n\nArguments:\n\nx::Array{<:Real, 1}: Inertial state (position and velocity) of primary (observing) satellite\nxt::Array{<:Real, 1}: Inertial state (position and velocity) of the target satellite\n\nReturns:\n\nrtn::Array{<:Real, 1}: Position and velocity of the target relative of the observing satellite in the RTN.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sENZtoAZEL",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sENZtoAZEL",
    "category": "function",
    "text": "Convert East-North-Zenith topocentric state to azimuth, elevation, and range.\n\nArguments:\n\nx::Array{<:Real, 1}: East-North-Up state\nuse_degrees:Bool: If true returns result in units of degrees\n\nReturns:\n\nazel::Array{<:Real, 1}: Azimuth, elevation and range [rad; rad; m]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sENZtoECEF",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sENZtoECEF",
    "category": "function",
    "text": "Compute the coordinates of an object in the topocentric frame of an Earth-fixed frame\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nsez::Array{<:Real, 1}: SEZ coordinates of the object\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sGEOCtoECEF",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sGEOCtoECEF",
    "category": "function",
    "text": "Convert geocentric position to equivalent Earth-fixed position.\n\nArguments:\n\ngeoc::Array{<:Real, 1}: Geocentric coordinates (lon, lat, altitude) [rad] / [deg]\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\necef::Array{<:Real, 1}: Earth-fixed coordinates [m]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sGEODtoECEF",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sGEODtoECEF",
    "category": "function",
    "text": "Convert geodetic position to equivalent Earth-fixed position.\n\nArguments:\n\ngeod::Array{<:Real, 1}: Geodetic coordinates (lon, lat, altitude) [rad] / [deg]\nuse_degrees:Bool: If true interpret input as being in degrees.\n\nReturns:\n\necef::Array{<:Real, 1}: Earth-fixed coordinates [m]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Astrodynamics.sOSCtoCART",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Astrodynamics.sOSCtoCART",
    "category": "function",
    "text": "Given an orbital state expressed in osculating orbital elements compute the equivalent Cartesean position and velocity of the inertial state.\n\nThe osculating elements are assumed to be (in order):\n\na, Semi-major axis [m]\ne, Eccentricity [dimensionless]\ni, Inclination [rad]\nΩ, Right Ascension of the Ascending Node (RAAN) [rad]\nω, Argument of Perigee [ramd]\nM, Mean anomaly [rad]\n\nArguments:\n\nx_oe x::Array{<:Real, 1}: Osculating orbital elements. See above for desription of the elements and their required order.\nuse_degrees:Bool: If true interpret input will be interpreted as being in degrees, and output will be returned in degrees.\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns\n\nx x::Array{<:Real, 1}: Cartesean inertial state. Returns position and velocity. [m; m/s]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.ReferenceSystems.sRTNtoECI",
    "page": "Docstrings",
    "title": "SatelliteDynamics.ReferenceSystems.sRTNtoECI",
    "category": "function",
    "text": "Compute the Earth-center\n\nThe RTN frame is also commonly refered to as the local-vertical, local-horizontal (LVLH) frame.\n\nArguments:\n\nx::Array{<:Real, 1}: Inertial state (position and velocity) of primary (observing) satellite\nxt::Array{<:Real, 1}: Inertial state (position and velocity) of the target satellite\n\nReturns:\n\nrtn::Array{<:Real, 1}: Position and velocity of the target relative of the observing satellite in the RTN.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sSEZtoAZEL",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sSEZtoAZEL",
    "category": "function",
    "text": "Convert South-East-Zenith topocentric state to azimuth, elevation, and range.\n\nArguments:\n\nx::Array{<:Real, 1}: South-East-Zenith state\nuse_degrees:Bool: If true returns result in units of degrees\n\nReturns:\n\nazel::Array{<:Real, 1}: Azimuth, elevation and range [rad; rad; m]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Coordinates.sSEZtoECEF",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Coordinates.sSEZtoECEF",
    "category": "function",
    "text": "Compute the coordinates of an object in the topocentric frame of an Earth-fixed frame\n\nArguments:\n\nstation_ecef::Array{<:Real, 1}: Earth-fixed cartesian station coordinates\nsez::Array{<:Real, 1}: SEZ coordinates of the object\nconversion::Bool: Conversion type to use. Can be \"geocentric\" or \"geodetic\"\n\nReturns:\n\nE::Array{Float64, 2}: Topocentric rotation matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Astrodynamics.semimajor_axis",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Astrodynamics.semimajor_axis",
    "category": "function",
    "text": "Calculate semi-major axis given mean-motion.\n\nArguments:\n\nn::Real: Orbital mean motion. [rad/s] or [deg/s]\nuse_degrees:Bool: If true interpret input as being in degrees.\nGM::Real: Gravitational constant of central body. Defaults to SatelliteDynamics.Constants.GM_EARTH if none is provided.\n\nReturns:\n\na::Real: Semi-major axis. [m]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.set_eop",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.set_eop",
    "category": "function",
    "text": "Set Earth orientation data values for a specific date in the module global EarthOrientationData object.\n\nArguments:\n\nmjd::Real Modified Julian Date in UTC of the Epoch for which the Earth orientation data is aligned to.\nut1_utc::Real Offset between UT1 and UTC in seconds.\nxp::Real x-component of the pole locator in radians.\nyp::Real y-component of the pole locator in radians.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Attitude.slerp",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Attitude.slerp",
    "category": "function",
    "text": "Perform spherical linear interpolation (SLERP) on two quaternions. Interpolatles  from quaternion, q1, to quaternion, q2, at normalized interpolation time, t.\n\nInterpolation time must be in the range [0, 1] a value of 0 will return q1, while a value of 1 will return q2.\n\nArguments:\n\nq1::Quaternion: Starting Quaternion\nq2::Quaternion: Ending Quaternion\nt::Real: Normalized interpolation time. [0, 1]\n\nReturns:\n\nq:Quaternion: Quaternion attitude interpolation from q1 toward q2 at time t.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.OrbitDynamics.sun_position",
    "page": "Docstrings",
    "title": "SatelliteDynamics.OrbitDynamics.sun_position",
    "category": "function",
    "text": "Compute the Sun\'s position in the EME2000 inertial frame through the use of low-precision analytical functions.\n\nArgument:\n\nepc::Epoch: Epoch\n\nReturns:\n\nr_sun::Array{<:Real, 1}: Position vector of the Sun in the Earth-centered inertial fame.\n\nNotes:\n\nThe EME2000 inertial frame is for most purposes equivalent to the GCRF frame.\n\nReferences:\n\nO. Montenbruck, and E. Gill, Satellite Orbits: Models, Methods and Applications, 2012, p.70-73.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Astrodynamics.sun_sync_inclination",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Astrodynamics.sun_sync_inclination",
    "category": "function",
    "text": "Compute the required inclination for a Sun-synchronous Earth orbit.\n\nAlgorithm assumes the nodal precession is entirely due to the J2 perturbation, and no other perturbations are considered.\n\nThe inclination is computed using a first-order, non-iterative approximation.\n\nArguments:\n\na::Real: Semi-major axis. [m]\ne::Real: Eccentricity. [dimensionless]\nuse_degrees:Bool: If true interpret output will be returned in degrees.\n\nReturns:\n\niss::Real: Requierd inclination for a sun-synchronous orbit. [rad] or [deg]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Time.time_system_offset",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Time.time_system_offset",
    "category": "function",
    "text": "Compute the offset between two time systems at a given Epoch.\n\nThe offset (in seconds) is computed as:\n\ntime_system_offset = tsys_dest - tsys_src\n\nThe value returned is the number of seconds that musted be added to the source time system given the input epoch, to get the equivalent epoch.\n\nConversions are accomplished using SOFA C library calls. Epoch.\n\nArguments:\n\njd::Real: Part 1 of two-part date (Julian days)\nfd::Real: Part 2 of two-part date (Fractional days)\ntsys_src::Symbol: Base time system\ntsys_dest::Symbol: Destination time system\n\nReturns:\n\noffset::Float: Offset between soruce and destination time systems in seconds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SatelliteDynamics.Universe.update_eop",
    "page": "Docstrings",
    "title": "SatelliteDynamics.Universe.update_eop",
    "category": "function",
    "text": "Download updated Earth orientation datafiles for included products IERS products.\n\nArguments:\n\nproduct::Symbol The IERS product type can be :C04_14, :C04_80, or :FINALS_2000\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "SatelliteDynamics.AS2RADSatelliteDynamics.AUSatelliteDynamics.AstrodynamicsSatelliteDynamics.AttitudeSatelliteDynamics.C_LIGHTSatelliteDynamics.ConstantsSatelliteDynamics.CoordinatesSatelliteDynamics.EOPSatelliteDynamics.EarthOrientationDataSatelliteDynamics.EpochSatelliteDynamics.EulerAngleSatelliteDynamics.EulerAxisSatelliteDynamics.GM_EARTHSatelliteDynamics.GM_JUPITERSatelliteDynamics.GM_MARSSatelliteDynamics.GM_MERCURYSatelliteDynamics.GM_MOONSatelliteDynamics.GM_NEPTUNESatelliteDynamics.GM_PLUTOSatelliteDynamics.GM_SATURNSatelliteDynamics.GM_SUNSatelliteDynamics.GM_URANUSSatelliteDynamics.GM_VENUSSatelliteDynamics.GPS_TAISatelliteDynamics.GPS_TTSatelliteDynamics.GPS_ZEROSatelliteDynamics.GRAVITY_MODELSatelliteDynamics.GRAV_COEFSatelliteDynamics.GravModelSatelliteDynamics.J2_EARTHSatelliteDynamics.MJD2000SatelliteDynamics.MJD_ZEROSatelliteDynamics.OMEGA_EARTHSatelliteDynamics.OrbitDynamicsSatelliteDynamics.POLE_LOCATORSatelliteDynamics.P_SUNSatelliteDynamics.QuaternionSatelliteDynamics.RAD2ASSatelliteDynamics.R_EARTHSatelliteDynamics.R_SUNSatelliteDynamics.ReferenceSystemsSatelliteDynamics.RxSatelliteDynamics.RySatelliteDynamics.RzSatelliteDynamics.SatelliteDynamicsSatelliteDynamics.SimulationSatelliteDynamics.TAI_GPSSatelliteDynamics.TAI_TTSatelliteDynamics.TT_GPSSatelliteDynamics.TT_TAISatelliteDynamics.TimeSatelliteDynamics.UT1_UTCSatelliteDynamics.UniverseSatelliteDynamics.WGS84_aSatelliteDynamics.WGS84_fSatelliteDynamics.XPSatelliteDynamics.YPSatelliteDynamics.accel_dragSatelliteDynamics.accel_gravitySatelliteDynamics.accel_point_massSatelliteDynamics.accel_relativitySatelliteDynamics.accel_srpSatelliteDynamics.accel_thirdbody_moonSatelliteDynamics.accel_thirdbody_sunSatelliteDynamics.anomaly_eccentric_to_meanSatelliteDynamics.anomaly_mean_to_eccentricSatelliteDynamics.as_matrixSatelliteDynamics.as_vectorSatelliteDynamics.bias_precession_nutationSatelliteDynamics.caldateSatelliteDynamics.caldate_to_jdSatelliteDynamics.caldate_to_mjdSatelliteDynamics.day_of_yearSatelliteDynamics.days_from_elapsedSatelliteDynamics.density_harris_priesterSatelliteDynamics.deriv_orbit_earthSatelliteDynamics.e_EARTHSatelliteDynamics.earth_rotationSatelliteDynamics.eclipse_conicalSatelliteDynamics.eclipse_cylindricalSatelliteDynamics.elapsed_from_epochSatelliteDynamics.epoch_to_jdfdSatelliteDynamics.evalSatelliteDynamics.gastSatelliteDynamics.gmstSatelliteDynamics.includeSatelliteDynamics.jdSatelliteDynamics.jd_to_caldateSatelliteDynamics.load_eopSatelliteDynamics.load_gravity_modelSatelliteDynamics.mean_motionSatelliteDynamics.mjdSatelliteDynamics.mjd_to_caldateSatelliteDynamics.moon_positionSatelliteDynamics.orbit_periodSatelliteDynamics.polar_motionSatelliteDynamics.propagate_orbitSatelliteDynamics.rECEFtoECISatelliteDynamics.rECEFtoENZSatelliteDynamics.rECEFtoSEZSatelliteDynamics.rECItoECEFSatelliteDynamics.rECItoRTNSatelliteDynamics.rENZtoECEFSatelliteDynamics.rRTNtoECISatelliteDynamics.rSEZtoECEFSatelliteDynamics.sCARTtoOSCSatelliteDynamics.sECEFtoECISatelliteDynamics.sECEFtoENZSatelliteDynamics.sECEFtoGEOCSatelliteDynamics.sECEFtoGEODSatelliteDynamics.sECEFtoSEZSatelliteDynamics.sECItoECEFSatelliteDynamics.sECItoRTNSatelliteDynamics.sENZtoAZELSatelliteDynamics.sENZtoECEFSatelliteDynamics.sGEOCtoECEFSatelliteDynamics.sGEODtoECEFSatelliteDynamics.sOSCtoCARTSatelliteDynamics.sRTNtoECISatelliteDynamics.sSEZtoAZELSatelliteDynamics.sSEZtoECEFSatelliteDynamics.semimajor_axisSatelliteDynamics.set_eopSatelliteDynamics.slerpSatelliteDynamics.sun_positionSatelliteDynamics.sun_sync_inclinationSatelliteDynamics.time_system_offsetSatelliteDynamics.update_eop"
},

]}
