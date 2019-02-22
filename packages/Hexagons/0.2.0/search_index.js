var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hexagons-1",
    "page": "Readme",
    "title": "Hexagons",
    "category": "section",
    "text": "(Image: Build Status)This package provides some basic utilities for working with hexagonal grids. It is largely works from Amit Patel\'s terrific refererence."
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "Hexagonal grids can be indexed a number of different ways. Indexes are represented with one of the Hexagon types. The following are currently provided:HexagonAxial(q, r)\nHexagonCubic(x, y, z)\nHexagonOffsetOddR(q, r)\nHexagonOffsetEvenR(q, r)One indexing system can be converted to another with convert.convert(HexagonOffsetOddR, HexagonAxial(2, 4))The six points (in cartesian space) of a hexagon can be iterated through with points.for (x, y) in vertices(HexagonAxial(2, 3))\n    # ...\nendThe center point can be obtained with centerx, y = center(HexagonAxial(2, 3))A point in cartesian space can be mapped to the index of the hexagon that contains it with the cube_round function.h = cube_round(23.5, 4.67)"
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "This library is not mature or complete, but provides just enough to implement hexagonal bin visualizations. If your hexagon project requires something that\'s not provided, file bug or pull request."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Hexagons.CUBIC_HEX_DIAGONAL_OFFSETSHexagons.CUBIC_HEX_NEIGHBOR_OFFSETSHexagons.HexagonHexagons.HexagonAxialHexagons.HexagonCubicHexagons.HexagonDiagonalIteratorHexagons.HexagonDistanceIteratorHexagons.HexagonNeighborIteratorHexagons.HexagonOffsetEvenRHexagons.HexagonOffsetOddRHexagons.HexagonRingIteratorHexagons.HexagonSpiralIteratorHexagons.HexagonSpiralIteratorStateHexagons.HexagonVertexIteratorHexagons.HexagonsHexagons.centerHexagons.cube_linedrawHexagons.cube_roundHexagons.diagonalsHexagons.distanceHexagons.evalHexagons.hexagonHexagons.hexagons_withinHexagons.hexpointsHexagons.includeHexagons.nearest_cubic_hexagonHexagons.neighborHexagons.neighborsHexagons.ringHexagons.spiralHexagons.vertices"
},

]}
