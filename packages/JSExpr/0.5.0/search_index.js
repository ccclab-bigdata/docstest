var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JSExpr-1",
    "page": "Readme",
    "title": "JSExpr",
    "category": "section",
    "text": "Build Coverage\n(Image: Build Status) (Image: codecov)This package provides the @js macro which translates a Julia expression to JavaScript."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "julia> using JSExpr\n\njulia> @js document.querySelector(\"#root\")\nWebIO.JSString(\"document.querySelector(\\\"#root\\\")\")\n\njulia> @js (a,b) -> a+b\nWebIO.JSString(\"(function (a,b){return (a+b)})\")The JSString object wraps a Julia string. You can access the plain string from the .s field."
},

{
    "location": "#Interpolation-1",
    "page": "Readme",
    "title": "Interpolation",
    "category": "section",
    "text": "You can interpolate Julia objects or JSString expressions (i.e. result of @js macro invocations) in a @js macrocall.julia> foo = 42\n42\n\njulia> callback = @js a -> a + $foo\nWebIO.JSString(\"(function (a){return (a+42)})\")\n\njulia> f = @js array -> array.map($callback)\nWebIO.JSString(\"(function (array){return array.map((function (a){return (a+42)}))})\")Converting a JSString or an object containing it to JSON serializes JSString as a string.julia> JSON.print(Dict(\"foo\" => \"bar\", \"bar\"=>f))\n{\"bar\":\"(function (array){return array.map((function (a){return (a+42)}))})\",\"foo\":\"bar\"}This is not ideal when you want to use the serialized output as JavaScript, for example in a <script> tag. In this case, you should use JSExpr.jsexprjulia> @js $(Dict(\"foo\" => \"bar\", \"bar\"=>f))\nWebIO.JSString(\"{\\\"bar\\\":(function (array){return array.map((function (a){return (a+42)}))}),\\\"foo\\\":\\\"bar\\\"}\")"
},

{
    "location": "#Object-literals-1",
    "page": "Readme",
    "title": "Object literals",
    "category": "section",
    "text": "The @js equivalent of{foo: 42, bar: \"baz\"}isjulia> @js d(foo=42, bar=\"baz\")\nWebIO.JSString(\"{foo:42,bar:\\\"baz\\\"}\")or a Dictjulia> @js Dict(:foo=>42, :bar=>\"baz\")\nWebIO.JSString(\"{foo:42,bar:\\\"baz\\\"}\")"
},

{
    "location": "#Supported-expressions-1",
    "page": "Readme",
    "title": "Supported expressions",
    "category": "section",
    "text": "Function call\nComparison operators\nDictionary / object literal\nAnonymous functions (automatically return the result)\nFunction expressions (ditto)\nAssignment, = and +=, -=, *=, &=, |=\nIf statements (@var expressions are not allowed in if statements yet). Note: if expressions are lowered to the ternary operator and hence return a value - this allows them to be used as the last expression in a function.\nArray indexing\nfor expression on range literals (i.e. for x in a:b or for x in a:s:b)\nreturn statements\n@new Foo() as the equivalent of new Foo() in JS\n@var foo = bar as the equivalent of var foo = bar in JS"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "JSExpr.@jsJSExpr.@js_strJSExpr.@newJSExpr.@varJSExpr.FJSExpr.JSExprJSExpr.JSStringJSExpr._flattenJSExpr._simplifyJSExpr.block_exprJSExpr.call_exprJSExpr.dict_exprJSExpr.evalJSExpr.for_exprJSExpr.func_exprJSExpr.if_blockJSExpr.if_exprJSExpr.includeJSExpr.insert_returnJSExpr.interJSExpr.intersperseJSExpr.jsexprJSExpr.jsexpr_joinedJSExpr.jsstringJSExpr.obs_get_exprJSExpr.obs_set_exprJSExpr.ref_exprJSExpr.vect_expr"
},

]}
