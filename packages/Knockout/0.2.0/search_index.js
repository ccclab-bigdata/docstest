var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Knockout-1",
    "page": "Readme",
    "title": "Knockout",
    "category": "section",
    "text": "(Image: Build Status)  (Image: codecov)A Julia wrapper for Knockout.js. It uses WebIO to load JavaScript and to do Julia to JS communication. Go here to get started with WebIO."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The package exports a single knockout function:"
},

{
    "location": "#knockout(template,-data;-options...)-1",
    "page": "Readme",
    "title": "knockout(template, data; options...)",
    "category": "section",
    "text": "template acts as the \"structre\" of the UI. It\'s normal HTML, but can use variables from data. See the Knockout documentation for more details. You can compose the template (like any HTML) using WebIO.\ndata is an iterable of propertyName => value pairs (e.g. a Dict) which populates the template.using Knockout, WebIO\n\ntemplate = node(:p, \"{{message}}\", attributes = Dict(\"data-bind\" => \"visible : visible\"))\nknockout(template, [:message=>\"hello\", :visible=>true])If a property\'s value is an observable, this function syncs the property and the observable. Here\'s how you can update the properties bound to the template from Julia.using Observables\nob = Observable(\"hello\")\nknockout(template, [:message=>ob, :visible=>true])Now if at any time you run ob[] = \"hey there!\" on Julia, you should see the contents of the message update in the UI. Try making an observable for :visible property and set it to true or false, you should see the message toggle in and out of view!To initiate JS to Julia communication you must set an event handler on scope[propertyName] (by calling on(f, scope[propertyName]))  before rendering the scope.Here\'s an example of JS to Julia communication:incoming = Observable(\"\")\non(println, incoming) # print to console on every update\n\ntemplate = node(:input, attributes = Dict(\"type\"=>\"text\", \"data-bind\" => \"value : message\"))()\nknockout(template, [:message=>incoming])This will cause the value of the textbox to flow back to Julia, and should get printed to STDOUT since we have a listener to print it. The value only gets updated on change (meaning when the widget loses focus). To update it on input (meaning whenever the user interacts with the widget) use:incoming = Observable(\"\")\non(println, incoming) # print to console on every update\n\ntemplate = node(:input, attributes = Dict(\"type\"=>\"text\", \"data-bind\" => \"value : message, valueUpdate : \'input\'\"))()\nknockout(template, [:message=>incoming])You can specify that you want some knockout observable to be computed as a function of other observables, e.g knockout(...; computed = Dict(:fullName => @js function(){this.firstName() + \' \' + this.lastName()})). You can pass functions that you want available in the Knockout scope as keyword arguments to knockout E.g. knockout(...; methods=Dict(:sayhello=>@js function(){ alert(\"hello!\") })) (Tip: use JSExpr.jl for the @js macro)"
},

{
    "location": "#Acknowledgments-1",
    "page": "Readme",
    "title": "Acknowledgments",
    "category": "section",
    "text": "This package is strongly inspired by Vue.jl. It basically is a word by word translation of Vue.jl for Knockout.js. Knockout.js solves one major technical difficulty of Vue.js: the impossibility of nesting instances."
},

{
    "location": "autodocs/#Knockout.knockout",
    "page": "Docstrings",
    "title": "Knockout.knockout",
    "category": "function",
    "text": "knockout(template, data=Dict(), extra_js = js\"\"; computed = [], methods = [])\n\nCreate a Knockout scope, with HTML structure provided by template and filled with data.\n\nArguments\n\ntemplate the Node that acts as the template. See Knockout syntax\ndata is either a dictionary or an array of propertyName => value pairs.\n\nIf a property\'s value is an observable, this function automatically sets up Julia -> JS communication. To set up JS to Julia communication set up an event handler on scope[propertyName] (by calling on(f, scope[propertyName])) before rendering the scope. You can specify that you want some knockout observable to be computed as a function of other observables, e.g knockout(...; computed = Dict(:fullName => @js function(){this.firstName() + \' \' + this.lastName()})). You can pass functions that you want available in the Knockout scope as keyword arguments to knockout E.g. knockout(...; methods=Dict(:sayhello=>@js function(){ alert(\"hello!\") }))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Knockout.KnockoutKnockout.dict2jsKnockout.evalKnockout.includeKnockout.isnumericKnockout.knockoutKnockout.knockout_jsKnockout.knockout_punches_js"
},

]}
