var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Elliptic-Special-Functions-for-Julia-1",
    "page": "Readme",
    "title": "Elliptic Special Functions for Julia",
    "category": "section",
    "text": "(Image: Build Status)This julia package provides the following:"
},

{
    "location": "#Elliptic-Integrals-1",
    "page": "Readme",
    "title": "Elliptic Integrals",
    "category": "section",
    "text": "<table>   <tr>     <td>K(m)</td>     <td>Complete elliptic integral of the first kind, K(m) = F(π/2|m)</td>   </tr>   <tr>     <td>F(phi, m)</td>     <td>Incomplete elliptic integral of the first kind, F(φ|m)</td>   </tr>   <tr>     <td>E(m)</td>     <td>Complete elliptic integral of the second kind, E(m) = E(π/2|m)</td>   </tr>   <tr>     <td>E(phi, m)</td>     <td>Incomplete elliptic integral of the second kind, E(φ|m)</td>   </tr>   <tr>     <td>Pi(n, phi, m)</td>     <td>Incomplete elliptic integral of the third kind, Π(n;φ|m)</td>   </tr> </table>The parameter m = k^2 = sin(α)^2 where α is the modular angle and k is the modulus.julia> import Elliptic\n\njulia> Elliptic.K(0.5)\n1.854074677301372"
},

{
    "location": "#Jacobi-Elliptic-Functions-1",
    "page": "Readme",
    "title": "Jacobi Elliptic Functions",
    "category": "section",
    "text": "<table>   <tr>     <td>am(u, m)</td>     <td>Jacobi amplitude, defined by u = F(am(u|m)|m)</td>   </tr>   <tr>     <td>sn(u, m)</td>     <td>Jacobi elliptic function, sn(u|m) = sin(am(u|m))</td>   </tr>   <tr>     <td>cn(u, m)</td>     <td>Jacobi elliptic function, cn(u|m) = cos(am(u|m))</td>   </tr>   <tr>     <td>dn(u, m)</td>     <td>Jacobi elliptic function, dn(u|m) = sqrt(1 - m sn(u|m)^2)</td>   </tr><tr>     <td>cd(u, m)</td>     <td>Jacobi elliptic function, cd(u|m)</td>   </tr>   <tr>     <td>sd(u, m)</td>     <td>Jacobi elliptic function, sd(u|m)</td>   </tr>   <tr>     <td>nd(u, m)</td>     <td>Jacobi elliptic function, nd(u|m) = 1/dn(u|m)</td>   </tr><tr>     <td>dc(u, m)</td>     <td>Jacobi elliptic function, dc(u|m)</td>   </tr>   <tr>     <td>nc(u, m)</td>     <td>Jacobi elliptic function, nc(u|m) = 1/cn(u|m)</td>   </tr>   <tr>     <td>sc(u, m)</td>     <td>Jacobi elliptic function, sc(u|m)</td>   </tr><tr>     <td>ns(u, m)</td>     <td>Jacobi elliptic function, ns(u|m) = 1/sn(u|m)</td>   </tr>   <tr>     <td>ds(u, m)</td>     <td>Jacobi elliptic function, ds(u|m)</td>   </tr>   <tr>     <td>cs(u, m)</td>     <td>Jacobi elliptic function, cs(u|m)</td>   </tr> </table>julia> import Elliptic.Jacobi\n\njulia> Jacobi.sn(2, 9)\n-0.15028246569211734"
},

{
    "location": "#Matlab-Compatibility-1",
    "page": "Readme",
    "title": "Matlab Compatibility",
    "category": "section",
    "text": "<table>   <tr>     <td>ellipj(u, m)</td>     <td>returns (sn(u,m), cn(u,m), dn(u,m))</td>   </tr>   <tr>     <td>ellipke(m)</td>     <td>returns (K(m), E(m))</td>   </tr> </table>For convenience, the matlab compatible ellipj and ellipke routines are also provided. ellipj(u,m) is equivalent to sn(u,m), cn(u,m), dn(u,m), but faster if you want all three. Likewise, ellipke(m) is equivalent to K(m), E(m), but faster if you want both.julia> import Elliptic\n\njulia> k,e = Elliptic.ellipke(0.5)\n(1.854074677301372,1.3506438810476757)\n\njulia> sn,cn,dn = Elliptic.ellipj(0.672, 0.36)\n(0.6095196917919022,0.792770928653356,0.9307281387786907)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.update()\n\njulia> Pkg.add(\"Elliptic\")"
},

{
    "location": "#Definitions-1",
    "page": "Readme",
    "title": "Definitions",
    "category": "section",
    "text": "(Image: F(\\phi|m) = \\int_0^\\phi d\\theta (1 - m\\sin^2\\theta)^{-1/2})(Image: E(\\phi|m) = \\int_0^\\phi d\\theta (1 - m\\sin^2\\theta)^{1/2})(Image: \\Pi(n;\\varphi|m) = \\int_0^\\varphi d\\theta\\, (1-n\\sin^2\\theta)^{-1}(1 - m\\sin^2\\theta)^{-1/2})"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Elliptic.EElliptic.EllipticElliptic.FElliptic.JacobiElliptic.KElliptic.PiElliptic.SLATECElliptic._EElliptic.ellipjElliptic.ellipkeElliptic.evalElliptic.includeElliptic.rawF"
},

]}
