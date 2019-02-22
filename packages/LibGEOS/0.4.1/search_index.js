var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LibGEOS.jl-1",
    "page": "Readme",
    "title": "LibGEOS.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build Status) (Image: Coverage Status)LibGEOS is a LGPL-licensed package for manipulation and analysis of planar geometric objects, based on the libraries GEOS (the engine of PostGIS) and JTS (from which GEOS is ported).Among other things, it allows you to parse Well-known Text (WKT)p1 = readgeom(\"POLYGON((0 0,1 0,1 1,0 0))\")\np2 = readgeom(\"POLYGON((0 0,1 0,1 1,0 1,0 0))\")\np3 = readgeom(\"POLYGON((2 0,3 0,3 1,2 1,2 0))\")(Image: Example 1)Add a buffer around themg1 = buffer(p1, 0.5)\ng2 = buffer(p2, 0.5)\ng3 = buffer(p3, 0.5)(Image: Example 2)and take the union of different geometriespolygon = LibGEOS.union(g1, g3)(Image: Example 3)GEOS functionality is extensive, so coverage is incomplete, but the basic functionality for working with geospatial data is already available. I\'m learning as I go along, so documentation is lacking, but if you\'re interested, you can have a look at the examples in the examples/ folder, or the tests in test/test_geo_interface.jl and test/test_geos_operations.jl."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "At the Julia prompt, run julia   julia> Pkg.add(\"LibGEOS\")   This will install both the Julia package and GEOS shared libraries together. To just reinstall the GEOS shared libraries, run Pkg.build(\"LibGEOS\").Test that LibGEOS works by runnningjulia   julia> Pkg.test(\"LibGEOS\")"
},

{
    "location": "autodocs/#LibGEOS.createCoordSeq",
    "page": "Docstrings",
    "title": "LibGEOS.createCoordSeq",
    "category": "function",
    "text": "createCoordSeq(size::Integer; ndim::Integer=2) -> Ptr{Ptr{Void}}\n\nCreate a Coordinate sequence with size coordinates ofdims\'\' dimensions (Return NULL on exception)\n\n\n\n\n\ncreateCoordSeq(x::Real, y::Real) -> Ptr{Ptr{Void}}\n\nCreate a createCoordSeq of a single 2D coordinate\n\n\n\n\n\ncreateCoordSeq(x::Real, y::Real, z::Real) -> Ptr{Ptr{Void}}\n\nCreate a createCoordSeq of a single 3D coordinate\n\n\n\n\n\ncreateCoordSeq(coords::Vector{Float64}) -> Ptr{Ptr{Void}}\n\nCreate a createCoordSeq of a single N dimensional coordinate\n\n\n\n\n\ncreateCoordSeq(coords::Vector{Float64}) -> Ptr{Ptr{Void}}\n\nCreate a createCoordSeq of a multiple N dimensional coordinate\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LibGEOS.GEOMTYPELibGEOS.GEOSAreaLibGEOS.GEOSArea_rLibGEOS.GEOSBoundaryLibGEOS.GEOSBoundary_rLibGEOS.GEOSBufferLibGEOS.GEOSBufferParamsLibGEOS.GEOSBufferParams_create_rLibGEOS.GEOSBufferParams_destroyLibGEOS.GEOSBufferParams_destroy_rLibGEOS.GEOSBufferParams_setEndCapStyleLibGEOS.GEOSBufferParams_setEndCapStyle_rLibGEOS.GEOSBufferParams_setJoinStyleLibGEOS.GEOSBufferParams_setJoinStyle_rLibGEOS.GEOSBufferParams_setMitreLimitLibGEOS.GEOSBufferParams_setMitreLimit_rLibGEOS.GEOSBufferParams_setQuadrantSegmentsLibGEOS.GEOSBufferParams_setQuadrantSegments_rLibGEOS.GEOSBufferParams_setSingleSidedLibGEOS.GEOSBufferParams_setSingleSided_rLibGEOS.GEOSBufferWithParamsLibGEOS.GEOSBufferWithParams_rLibGEOS.GEOSBufferWithStyleLibGEOS.GEOSBufferWithStyle_rLibGEOS.GEOSBuffer_rLibGEOS.GEOSContainsLibGEOS.GEOSContains_rLibGEOS.GEOSContextLibGEOS.GEOSContextHandle_tLibGEOS.GEOSContext_setErrorHandler_rLibGEOS.GEOSContext_setNoticeHandler_rLibGEOS.GEOSConvexHullLibGEOS.GEOSConvexHull_rLibGEOS.GEOSCoordSeqLibGEOS.GEOSCoordSeq_cloneLibGEOS.GEOSCoordSeq_clone_rLibGEOS.GEOSCoordSeq_createLibGEOS.GEOSCoordSeq_create_rLibGEOS.GEOSCoordSeq_destroyLibGEOS.GEOSCoordSeq_destroy_rLibGEOS.GEOSCoordSeq_getDimensionsLibGEOS.GEOSCoordSeq_getDimensions_rLibGEOS.GEOSCoordSeq_getOrdinateLibGEOS.GEOSCoordSeq_getOrdinate_rLibGEOS.GEOSCoordSeq_getSizeLibGEOS.GEOSCoordSeq_getSize_rLibGEOS.GEOSCoordSeq_getXLibGEOS.GEOSCoordSeq_getX_rLibGEOS.GEOSCoordSeq_getYLibGEOS.GEOSCoordSeq_getY_rLibGEOS.GEOSCoordSeq_getZLibGEOS.GEOSCoordSeq_getZ_rLibGEOS.GEOSCoordSeq_setOrdinateLibGEOS.GEOSCoordSeq_setOrdinate_rLibGEOS.GEOSCoordSeq_setXLibGEOS.GEOSCoordSeq_setX_rLibGEOS.GEOSCoordSeq_setYLibGEOS.GEOSCoordSeq_setY_rLibGEOS.GEOSCoordSeq_setZLibGEOS.GEOSCoordSeq_setZ_rLibGEOS.GEOSCoordSequenceLibGEOS.GEOSCoveredByLibGEOS.GEOSCoveredBy_rLibGEOS.GEOSCoversLibGEOS.GEOSCovers_rLibGEOS.GEOSCrossesLibGEOS.GEOSCrosses_rLibGEOS.GEOSDelaunayTriangulationLibGEOS.GEOSDelaunayTriangulation_rLibGEOS.GEOSDifferenceLibGEOS.GEOSDifference_rLibGEOS.GEOSDisjointLibGEOS.GEOSDisjoint_rLibGEOS.GEOSDistanceLibGEOS.GEOSDistance_rLibGEOS.GEOSEnvelopeLibGEOS.GEOSEnvelope_rLibGEOS.GEOSEqualsLibGEOS.GEOSEqualsExactLibGEOS.GEOSEqualsExact_rLibGEOS.GEOSEquals_rLibGEOS.GEOSErrorLibGEOS.GEOSFreeLibGEOS.GEOSFree_rLibGEOS.GEOSGeomLibGEOS.GEOSGeomFromHEX_bufLibGEOS.GEOSGeomFromHEX_buf_rLibGEOS.GEOSGeomFromWKB_bufLibGEOS.GEOSGeomFromWKB_buf_rLibGEOS.GEOSGeomFromWKTLibGEOS.GEOSGeomFromWKT_rLibGEOS.GEOSGeomGetEndPointLibGEOS.GEOSGeomGetEndPoint_rLibGEOS.GEOSGeomGetLengthLibGEOS.GEOSGeomGetLength_rLibGEOS.GEOSGeomGetNumPointsLibGEOS.GEOSGeomGetNumPoints_rLibGEOS.GEOSGeomGetPointNLibGEOS.GEOSGeomGetPointN_rLibGEOS.GEOSGeomGetStartPointLibGEOS.GEOSGeomGetStartPoint_rLibGEOS.GEOSGeomGetXLibGEOS.GEOSGeomGetX_rLibGEOS.GEOSGeomGetYLibGEOS.GEOSGeomGetY_rLibGEOS.GEOSGeomToHEX_bufLibGEOS.GEOSGeomToHEX_buf_rLibGEOS.GEOSGeomToWKB_bufLibGEOS.GEOSGeomToWKB_buf_rLibGEOS.GEOSGeomToWKTLibGEOS.GEOSGeomToWKT_rLibGEOS.GEOSGeomTypeLibGEOS.GEOSGeomTypeIdLibGEOS.GEOSGeomTypeId_rLibGEOS.GEOSGeomType_rLibGEOS.GEOSGeom_cloneLibGEOS.GEOSGeom_clone_rLibGEOS.GEOSGeom_createCollectionLibGEOS.GEOSGeom_createCollection_rLibGEOS.GEOSGeom_createEmptyCollectionLibGEOS.GEOSGeom_createEmptyCollection_rLibGEOS.GEOSGeom_createEmptyLineString_rLibGEOS.GEOSGeom_createEmptyPoint_rLibGEOS.GEOSGeom_createEmptyPolygon_rLibGEOS.GEOSGeom_createLineStringLibGEOS.GEOSGeom_createLineString_rLibGEOS.GEOSGeom_createLinearRingLibGEOS.GEOSGeom_createLinearRing_rLibGEOS.GEOSGeom_createPointLibGEOS.GEOSGeom_createPoint_rLibGEOS.GEOSGeom_createPolygonLibGEOS.GEOSGeom_createPolygon_rLibGEOS.GEOSGeom_destroyLibGEOS.GEOSGeom_destroy_rLibGEOS.GEOSGeom_extractUniquePointsLibGEOS.GEOSGeom_extractUniquePoints_rLibGEOS.GEOSGeom_getCoordSeqLibGEOS.GEOSGeom_getCoordSeq_rLibGEOS.GEOSGeom_getCoordinateDimensionLibGEOS.GEOSGeom_getCoordinateDimension_rLibGEOS.GEOSGeom_getDimensionsLibGEOS.GEOSGeom_getDimensions_rLibGEOS.GEOSGeometryLibGEOS.GEOSGetCentroidLibGEOS.GEOSGetCentroid_rLibGEOS.GEOSGetExteriorRingLibGEOS.GEOSGetExteriorRing_rLibGEOS.GEOSGetGeometryNLibGEOS.GEOSGetGeometryN_rLibGEOS.GEOSGetInteriorRingNLibGEOS.GEOSGetInteriorRingN_rLibGEOS.GEOSGetNumCoordinatesLibGEOS.GEOSGetNumCoordinates_rLibGEOS.GEOSGetNumGeometriesLibGEOS.GEOSGetNumGeometries_rLibGEOS.GEOSGetNumInteriorRingsLibGEOS.GEOSGetNumInteriorRings_rLibGEOS.GEOSGetSRIDLibGEOS.GEOSGetSRID_rLibGEOS.GEOSHasZLibGEOS.GEOSHasZ_rLibGEOS.GEOSHausdorffDistanceLibGEOS.GEOSHausdorffDistanceDensifyLibGEOS.GEOSHausdorffDistanceDensify_rLibGEOS.GEOSHausdorffDistance_rLibGEOS.GEOSInterpolateLibGEOS.GEOSInterpolateNormalizedLibGEOS.GEOSInterpolateNormalized_rLibGEOS.GEOSInterpolate_rLibGEOS.GEOSInterruptCallbackLibGEOS.GEOSIntersectionLibGEOS.GEOSIntersection_rLibGEOS.GEOSIntersectsLibGEOS.GEOSIntersects_rLibGEOS.GEOSLengthLibGEOS.GEOSLength_rLibGEOS.GEOSLineMergeLibGEOS.GEOSLineMerge_rLibGEOS.GEOSMessageHandlerLibGEOS.GEOSNearestPointsLibGEOS.GEOSNearestPoints_rLibGEOS.GEOSNodeLibGEOS.GEOSNode_rLibGEOS.GEOSNormalizeLibGEOS.GEOSNormalize_rLibGEOS.GEOSOffsetCurveLibGEOS.GEOSOffsetCurve_rLibGEOS.GEOSOrientationIndexLibGEOS.GEOSOrientationIndex_rLibGEOS.GEOSOverlapsLibGEOS.GEOSOverlaps_rLibGEOS.GEOSPointOnSurfaceLibGEOS.GEOSPointOnSurface_rLibGEOS.GEOSPolygonizeLibGEOS.GEOSPolygonize_fullLibGEOS.GEOSPolygonize_full_rLibGEOS.GEOSPolygonize_rLibGEOS.GEOSPolygonizer_getCutEdgesLibGEOS.GEOSPolygonizer_getCutEdges_rLibGEOS.GEOSPrepareLibGEOS.GEOSPrepare_rLibGEOS.GEOSPreparedContainsLibGEOS.GEOSPreparedContainsProperlyLibGEOS.GEOSPreparedContainsProperly_rLibGEOS.GEOSPreparedContains_rLibGEOS.GEOSPreparedCoveredByLibGEOS.GEOSPreparedCoveredBy_rLibGEOS.GEOSPreparedCoversLibGEOS.GEOSPreparedCovers_rLibGEOS.GEOSPreparedCrossesLibGEOS.GEOSPreparedCrosses_rLibGEOS.GEOSPreparedDisjointLibGEOS.GEOSPreparedDisjoint_rLibGEOS.GEOSPreparedGeom_destroyLibGEOS.GEOSPreparedGeom_destroy_rLibGEOS.GEOSPreparedGeometryLibGEOS.GEOSPreparedIntersectsLibGEOS.GEOSPreparedIntersects_rLibGEOS.GEOSPreparedOverlapsLibGEOS.GEOSPreparedOverlaps_rLibGEOS.GEOSPreparedTouchesLibGEOS.GEOSPreparedTouches_rLibGEOS.GEOSPreparedWithinLibGEOS.GEOSPreparedWithin_rLibGEOS.GEOSProjectLibGEOS.GEOSProjectNormalizedLibGEOS.GEOSProjectNormalized_rLibGEOS.GEOSProject_rLibGEOS.GEOSQueryCallbackLibGEOS.GEOSRelateLibGEOS.GEOSRelateBoundaryNodeRuleLibGEOS.GEOSRelateBoundaryNodeRule_rLibGEOS.GEOSRelatePatternLibGEOS.GEOSRelatePatternMatchLibGEOS.GEOSRelatePatternMatch_rLibGEOS.GEOSRelatePattern_rLibGEOS.GEOSRelate_rLibGEOS.GEOSSTRtreeLibGEOS.GEOSSTRtree_createLibGEOS.GEOSSTRtree_create_rLibGEOS.GEOSSTRtree_destroyLibGEOS.GEOSSTRtree_destroy_rLibGEOS.GEOSSTRtree_insertLibGEOS.GEOSSTRtree_insert_rLibGEOS.GEOSSTRtree_iterateLibGEOS.GEOSSTRtree_iterate_rLibGEOS.GEOSSTRtree_queryLibGEOS.GEOSSTRtree_query_rLibGEOS.GEOSSTRtree_removeLibGEOS.GEOSSTRtree_remove_rLibGEOS.GEOSSetSRIDLibGEOS.GEOSSetSRID_rLibGEOS.GEOSSharedPathsLibGEOS.GEOSSharedPaths_rLibGEOS.GEOSSimplifyLibGEOS.GEOSSimplify_rLibGEOS.GEOSSingleSidedBufferLibGEOS.GEOSSingleSidedBuffer_rLibGEOS.GEOSSnapLibGEOS.GEOSSnap_rLibGEOS.GEOSSymDifferenceLibGEOS.GEOSSymDifference_rLibGEOS.GEOSTopologyPreserveSimplifyLibGEOS.GEOSTopologyPreserveSimplify_rLibGEOS.GEOSTouchesLibGEOS.GEOSTouches_rLibGEOS.GEOSUnaryUnionLibGEOS.GEOSUnaryUnion_rLibGEOS.GEOSUnionLibGEOS.GEOSUnionCascadedLibGEOS.GEOSUnionCascaded_rLibGEOS.GEOSUnion_rLibGEOS.GEOSWKBReaderLibGEOS.GEOSWKBReader_create_rLibGEOS.GEOSWKBReader_destroyLibGEOS.GEOSWKBReader_destroy_rLibGEOS.GEOSWKBReader_readLibGEOS.GEOSWKBReader_readHEXLibGEOS.GEOSWKBReader_readHEX_rLibGEOS.GEOSWKBReader_read_rLibGEOS.GEOSWKBWriterLibGEOS.GEOSWKBWriter_create_rLibGEOS.GEOSWKBWriter_destroyLibGEOS.GEOSWKBWriter_destroy_rLibGEOS.GEOSWKBWriter_getByteOrderLibGEOS.GEOSWKBWriter_getByteOrder_rLibGEOS.GEOSWKBWriter_getIncludeSRIDLibGEOS.GEOSWKBWriter_getIncludeSRID_rLibGEOS.GEOSWKBWriter_getOutputDimensionLibGEOS.GEOSWKBWriter_getOutputDimension_rLibGEOS.GEOSWKBWriter_setByteOrderLibGEOS.GEOSWKBWriter_setByteOrder_rLibGEOS.GEOSWKBWriter_setIncludeSRIDLibGEOS.GEOSWKBWriter_setIncludeSRID_rLibGEOS.GEOSWKBWriter_setOutputDimensionLibGEOS.GEOSWKBWriter_setOutputDimension_rLibGEOS.GEOSWKBWriter_writeLibGEOS.GEOSWKBWriter_writeHEXLibGEOS.GEOSWKBWriter_writeHEX_rLibGEOS.GEOSWKBWriter_write_rLibGEOS.GEOSWKTReaderLibGEOS.GEOSWKTReader_create_rLibGEOS.GEOSWKTReader_destroyLibGEOS.GEOSWKTReader_destroy_rLibGEOS.GEOSWKTReader_readLibGEOS.GEOSWKTReader_read_rLibGEOS.GEOSWKTWriterLibGEOS.GEOSWKTWriter_create_rLibGEOS.GEOSWKTWriter_destroyLibGEOS.GEOSWKTWriter_destroy_rLibGEOS.GEOSWKTWriter_getOutputDimensionLibGEOS.GEOSWKTWriter_getOutputDimension_rLibGEOS.GEOSWKTWriter_setOld3DLibGEOS.GEOSWKTWriter_setOld3D_rLibGEOS.GEOSWKTWriter_setOutputDimensionLibGEOS.GEOSWKTWriter_setOutputDimension_rLibGEOS.GEOSWKTWriter_setRoundingPrecisionLibGEOS.GEOSWKTWriter_setRoundingPrecision_rLibGEOS.GEOSWKTWriter_setTrimLibGEOS.GEOSWKTWriter_setTrim_rLibGEOS.GEOSWKTWriter_writeLibGEOS.GEOSWKTWriter_write_rLibGEOS.GEOSWithinLibGEOS.GEOSWithin_rLibGEOS.GEOS_GEOMETRYCOLLECTIONLibGEOS.GEOS_LINEARRINGLibGEOS.GEOS_LINESTRINGLibGEOS.GEOS_MULTILINESTRINGLibGEOS.GEOS_MULTIPOINTLibGEOS.GEOS_MULTIPOLYGONLibGEOS.GEOS_POINTLibGEOS.GEOS_POLYGONLibGEOS.GEOS_WKB_NDRLibGEOS.GEOS_WKB_XDRLibGEOS.GEOS_finish_rLibGEOS.GEOS_getWKBByteOrder_rLibGEOS.GEOS_getWKBOutputDims_rLibGEOS.GEOS_init_rLibGEOS.GEOS_interruptRegisterCallbackLibGEOS.GEOS_setWKBByteOrderLibGEOS.GEOS_setWKBByteOrder_rLibGEOS.GEOS_setWKBOutputDimsLibGEOS.GEOS_setWKBOutputDims_rLibGEOS.GEOSisClosedLibGEOS.GEOSisClosed_rLibGEOS.GEOSisEmptyLibGEOS.GEOSisEmpty_rLibGEOS.GEOSisRingLibGEOS.GEOSisRing_rLibGEOS.GEOSisSimpleLibGEOS.GEOSisSimple_rLibGEOS.GEOSisValidLibGEOS.GEOSisValidDetailLibGEOS.GEOSisValidDetail_rLibGEOS.GEOSisValidReasonLibGEOS.GEOSisValidReason_rLibGEOS.GEOSisValid_rLibGEOS.GeometryCollectionLibGEOS.LibGEOSLibGEOS.LineStringLibGEOS.LinearRingLibGEOS.MultiLineStringLibGEOS.MultiPointLibGEOS.MultiPolygonLibGEOS.PointLibGEOS.PolygonLibGEOS.WKBReaderLibGEOS.WKBWriterLibGEOS.WKTReaderLibGEOS.WKTWriterLibGEOS.__init__LibGEOS._contextLibGEOS._readgeomLibGEOS._writegeomLibGEOS.areaLibGEOS.boundaryLibGEOS.bufferLibGEOS.centroidLibGEOS.check_depsLibGEOS.cloneCoordSeqLibGEOS.cloneGeomLibGEOS.containsLibGEOS.convexhullLibGEOS.coveredbyLibGEOS.coversLibGEOS.createCollectionLibGEOS.createCoordSeqLibGEOS.createEmptyCollectionLibGEOS.createLineStringLibGEOS.createLinearRingLibGEOS.createPointLibGEOS.createPolygonLibGEOS.crossesLibGEOS.delaunayTriangulationLibGEOS.delaunayTriangulationEdgesLibGEOS.depsjl_pathLibGEOS.destroyCoordSeqLibGEOS.destroyGeomLibGEOS.destroyPreparedGeomLibGEOS.differenceLibGEOS.disjointLibGEOS.distanceLibGEOS.endPointLibGEOS.envelopeLibGEOS.equalsLibGEOS.equalsexactLibGEOS.evalLibGEOS.exteriorRingLibGEOS.finishGEOSLibGEOS.finishGEOS_rLibGEOS.geomAreaLibGEOS.geomDistanceLibGEOS.geomFromGEOSLibGEOS.geomFromWKTLibGEOS.geomLengthLibGEOS.geomToWKTLibGEOS.geomTypeIdLibGEOS.geosjl_errorhandlerLibGEOS.getCoordSeqLibGEOS.getCoordinateDimensionLibGEOS.getCoordinatesLibGEOS.getDimensionsLibGEOS.getGeomDimensionsLibGEOS.getGeomXLibGEOS.getGeomYLibGEOS.getGeometriesLibGEOS.getGeometryLibGEOS.getPointLibGEOS.getSRIDLibGEOS.getSizeLibGEOS.getXLibGEOS.getX!LibGEOS.getYLibGEOS.getY!LibGEOS.getZLibGEOS.getZ!LibGEOS.hasZLibGEOS.hausdorffdistanceLibGEOS.includeLibGEOS.initGEOSLibGEOS.initGEOS_rLibGEOS.interiorRingLibGEOS.interiorRingsLibGEOS.interpolateLibGEOS.interpolateNormalizedLibGEOS.intersectionLibGEOS.intersectsLibGEOS.isClosedLibGEOS.isEmptyLibGEOS.isRingLibGEOS.isSimpleLibGEOS.isValidLibGEOS.libgeosLibGEOS.libgeos_cppLibGEOS.lineMergeLibGEOS.nearestPointsLibGEOS.nodeLibGEOS.normalize!LibGEOS.numCoordinatesLibGEOS.numGeometriesLibGEOS.numInteriorRingsLibGEOS.numPointsLibGEOS.overlapsLibGEOS.parseWKTLibGEOS.pointOnSurfaceLibGEOS.polygonizeLibGEOS.prepareGeomLibGEOS.prepcontainsLibGEOS.prepcontainsproperlyLibGEOS.prepcoveredbyLibGEOS.prepcoversLibGEOS.prepcrossesLibGEOS.prepdisjointLibGEOS.prepintersectsLibGEOS.prepoverlapsLibGEOS.preptouchesLibGEOS.prepwithinLibGEOS.projectLibGEOS.projectNormalizedLibGEOS.readgeomLibGEOS.setCoordSeq!LibGEOS.setSRIDLibGEOS.setX!LibGEOS.setY!LibGEOS.setZ!LibGEOS.sharedPathsLibGEOS.simplifyLibGEOS.snapLibGEOS.startPointLibGEOS.symmetricDifferenceLibGEOS.topologyPreserveSimplifyLibGEOS.touchesLibGEOS.unaryUnionLibGEOS.unionLibGEOS.uniquePointsLibGEOS.withinLibGEOS.writegeom"
},

]}
