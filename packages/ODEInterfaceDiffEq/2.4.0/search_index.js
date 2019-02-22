var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ODEInterfaceDiffEq-1",
    "page": "Readme",
    "title": "ODEInterfaceDiffEq",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)(Image: ODEInterfaceDiffEq) (Image: ODEInterfaceDiffEq)This package contains bindings for ODEInterface.jl to allow it to be used with the JuliaDiffEq common interface. For more information on using the solvers from this package, see the DifferentialEquations.jl documentation."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "A standard installation on MacOSX and Linux should work. On Windows, you need to install mingw32 compilers and add them to the path. MingW32 can be found here. Then add the path to your environment variables. An example path is:C:\\Program Files\\mingw-w64\\x86_64-6.1.0-posix-seh-rt_v5-rev0\\mingw64\\bin"
},

{
    "location": "#Common-API-Usage-1",
    "page": "Readme",
    "title": "Common API Usage",
    "category": "section",
    "text": "This library adds the common interface to ODEInterface.jl\'s solvers. See the DifferentialEquations.jl documentation for details on the interface. Following the Lorenz example from the ODE tutorial, we can solve this using dopri5 via the following:using ODEInterfaceDiffEq\nfunction lorenz(du,u,p,t)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nend\nu0 = [1.0;0.0;0.0]\ntspan = (0.0,100.0)\nprob = ODEProblem(lorenz,u0,tspan)\nsol = solve(prob,dopri5(),abstol=1e-4)\nusing Plots; plot(sol,vars=(1,2,3))The options available in solve are documented at the common solver options page. The available methods are documented at the ODE solvers page."
},

]}
