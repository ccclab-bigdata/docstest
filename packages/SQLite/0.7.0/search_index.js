var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#SQLite.jl-Documentation-1",
    "page": "Home",
    "title": "SQLite.jl Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "#SQLite.Query",
    "page": "Home",
    "title": "SQLite.Query",
    "category": "type",
    "text": "SQLite.Query(db, sql::String; values=[]; stricttypes::Bool=true, nullable::Bool=true)\n\nConstructs a SQLite.Query object by executing the SQL query sql against the sqlite database db and querying the columns names and types of the result set, if any.\n\nWill bind values to any parameters in sql. stricttypes=false will remove strict column typing in the result set, making each column effectively Vector{Any}; in sqlite, individual column values are only loosely associated with declared column types, and instead each carry their own type information. This can lead to type errors when trying to query columns when a single type is expected. nullable controls whether null (missing in Julia) values are expected in a column.\n\nAn SQLite.Query object will iterate NamedTuple rows by default, and also supports the Tables.jl interface for integrating with any other Tables.jl implementation. Due note however that iterating an sqlite result set is a forward-once-only operation. If you need to iterate over an SQLite.Query multiple times, but can\'t store the iterated NamedTuples, call SQLite.reset!(q::SQLite.Query) to re-execute the query and position the iterator back at the begining of the result set.\n\n\n\n\n\n"
},

{
    "location": "#SQLite.load!",
    "page": "Home",
    "title": "SQLite.load!",
    "category": "function",
    "text": "source |> SQLite.load!(db::SQLite.DB, tablename::String; temp::Bool=false, ifnotexists::Bool=false)\nSQLite.load!(source, db, tablename; temp=false, ifnotexists=false)\n\nLoad a Tables.jl input source into an SQLite table that will be named tablename (will be auto-generated if not specified).\n\ntemp=true will create a temporary SQLite table that will be destroyed automatically when the database is closed ifnotexists=false will throw an error if tablename already exists in db\n\n\n\n\n\n"
},

{
    "location": "#High-level-interface-1",
    "page": "Home",
    "title": "High-level interface",
    "category": "section",
    "text": "SQLite.Query\nSQLite.load!"
},

{
    "location": "#Types/Functions-1",
    "page": "Home",
    "title": "Types/Functions",
    "category": "section",
    "text": "SQLite.DB(file::AbstractString)\nSQLite.DB requires the file string argument as the name of either a pre-defined SQLite database to be opened, or if the file doesn\'t exist, a database will be created.\nThe SQLite.DB object represents a single connection to an SQLite database. All other SQLite.jl functions take an SQLite.DB as the first argument as context.\nTo create an in-memory temporary database, call SQLite.DB().\nThe SQLite.DB will automatically closed/shutdown when it goes out of scope (i.e. the end of the Julia session, end of a function call wherein it was created, etc.)SQLite.Stmt(db::SQLite.DB, sql::String)\nConstructs and prepares (compiled by the SQLite library) an SQL statement in the context of the provided db. Note the SQL statement is not actually executed, but only compiled (mainly for usage where the same statement is repeated with different parameters bound as values. See bind! below).\nThe SQLite.Stmt will automatically closed/shutdown when it goes out of scope (i.e. the end of the Julia session, end of a function call wherein it was created, etc.)SQLite.bind!(stmt::SQLite.Stmt,index,value)\nUsed to bind values to parameter placeholders in an prepared SQLite.Stmt. From the SQLite documentation:\nUsually, though, it is not useful to evaluate exactly the same SQL statement more than once. More often, one wants to evaluate similar statements. For example, you might want to evaluate an INSERT statement multiple times though with different values to insert. To accommodate this kind of flexibility, SQLite allows SQL statements to contain parameters which are \"bound\" to values prior to being evaluated. These values can later be changed and the same prepared statement can be evaluated a second time using the new values.\nIn SQLite, wherever it is valid to include a string literal, one can use a parameter in one of the following forms:\n? ?NNN :AAA AAA @AAA\nIn the examples above, NNN is an integer value and AAA is an identifier. A parameter initially has a value of NULL. Prior to calling sqlite3step() for the first time or immediately after sqlite3reset(), the application can invoke one of the sqlite3bind() interfaces to attach values to the parameters. Each call to sqlite3bind() overrides prior bindings on the same parameter.SQLite.execute!(stmt::SQLite.Stmt)\nSQLite.execute!(db::SQLite.DB, sql::String)Used to execute a prepared SQLite.Stmt. The 2nd method is a convenience method to pass in an SQL statement as a string which gets prepared and executed in one call. This method does not check for or return any results, hence it is only useful for database manipulation methods (i.e. ALTER, CREATE, UPDATE, DROP). To return results, see SQLite.query below.SQLite.Query(db::SQLite.DB, sql::String, values=[])\nConstructs a SQLite.Query object by executing the SQL query sql against the sqlite database db and queryingthe columns names and types of the result set, if any.Will bind values to any parameters in sql. stricttypes=false will remove strict column typing in the result set, making each column effectively Vector{Any}; in sqlite, individual column values are only loosely associated with declared column types, and instead each carry their own type information. This can lead to type errors when trying to query columns when a single type is expected. nullable controls whether null (missing in Julia) values are expected in a column.An SQLite.Query object will iterate NamedTuple rows by default, and also supports the Tables.jl interface for integrating with any other Tables.jl implementation. Due note however that iterating an sqlite result set is a forward-once-only operation. If you need to iterate over an SQLite.Query multiple times, but can\'t store the iterated NamedTuples, call SQLite.reset!(q::SQLite.Query) to re-execute the query and position the iterator back at the begining of the result set.SQLite.drop!(db::SQLite.DB,table::String;ifexists::Bool=false)\nSQLite.dropindex!(db::SQLite.DB,index::String;ifexists::Bool=false)\nThese are pretty self-explanatory. They\'re really just a convenience methods to execute DROP TABLE/DROP INDEX commands, while also calling \"VACUUM\" to clean out freed memory from the database.SQLite.createindex!(db::DB,table::AbstractString,index::AbstractString,cols::AbstractString;unique::Bool=true,ifnotexists::Bool=false)\nCreate a new index named index for table with the columns in cols, which should be a comma delimited list of column names. unique indicates whether the index will have unique values or not. ifnotexists will not throw an error if the index already exists.SQLite.removeduplicates!(db,table::AbstractString,cols::AbstractString)\nA convenience method for the common task of removing duplicate rows in a dataset according to some subset of columns that make up a \"primary key\".SQLite.tables(db::SQLite.DB)\nList the tables in an SQLite database dbSQLite.columns(db::SQLite.DB,table::AbstractString)\nList the columns in an SQLite tableSQLite.indices(db::SQLite.DB)\nList the indices that have been created in dbSQLite.register(db::SQLite.DB, func::Function; nargs::Int=-1, name::AbstractString=string(func), isdeterm::Bool=true)SQLite.register(db::SQLite.DB, init, step::Function, final::Function=identity; nargs::Int=-1, name::AbstractString=string(final), isdeterm::Bool=true)\nRegister a scalar (first method) or aggregate (second method) function with a SQLite.DB.@register db function\nAutomatically define then register function with a SQLite.DB.sr\"...\"\nThis string literal is used to escape all special characters in the string, useful for using regex in a query.SQLite.sqlreturn(contex, val)\nThis function should never be called explicitly. Instead it is exported so that it can be overloaded when necessary, see below."
},

{
    "location": "#User-Defined-Functions-1",
    "page": "Home",
    "title": "User Defined Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#SQLite-Regular-Expressions-1",
    "page": "Home",
    "title": "SQLite Regular Expressions",
    "category": "section",
    "text": "SQLite provides syntax for calling the regexp function from inside WHERE clauses. Unfortunately, however, SQLite does not provide a default implementation of the regexp function so SQLite.jl creates one automatically when you open a database. The function can be called in the following ways (examples using the Chinook Database)julia> using SQLite\n\njulia> db = SQLite.DB(\"Chinook_Sqlite.sqlite\")\n\njulia> # using SQLite\'s in-built syntax\n\njulia> SQLite.Query(db, \"SELECT FirstName, LastName FROM Employee WHERE LastName REGEXP \'e(?=a)\'\") |> DataFrame\n1x2 ResultSet\n| Row | \"FirstName\" | \"LastName\" |\n|-----|-------------|------------|\n| 1   | \"Jane\"      | \"Peacock\"  |\n\njulia> # explicitly calling the regexp() function\n\njulia> SQLite.Query(db, \"SELECT * FROM Genre WHERE regexp(\'e[trs]\', Name)\") |> DataFrame\n6x2 ResultSet\n| Row | \"GenreId\" | \"Name\"               |\n|-----|-----------|----------------------|\n| 1   | 3         | \"Metal\"              |\n| 2   | 4         | \"Alternative & Punk\" |\n| 3   | 6         | \"Blues\"              |\n| 4   | 13        | \"Heavy Metal\"        |\n| 5   | 23        | \"Alternative\"        |\n| 6   | 25        | \"Opera\"              |\n\njulia> # you can even do strange things like this if you really want\n\njulia> SQLite.Query(db, \"SELECT * FROM Genre ORDER BY GenreId LIMIT 2\") |> DataFrame\n2x2 ResultSet\n| Row | \"GenreId\" | \"Name\" |\n|-----|-----------|--------|\n| 1   | 1         | \"Rock\" |\n| 2   | 2         | \"Jazz\" |\n\njulia> SQLite.Query(db, \"INSERT INTO Genre VALUES (regexp(\'^word\', \'this is a string\'), \'My Genre\')\") |> DataFrame\n1x1 ResultSet\n| Row | \"Rows Affected\" |\n|-----|-----------------|\n| 1   | 0               |\n\njulia> SQLite.Query(db, \"SELECT * FROM Genre ORDER BY GenreId LIMIT 2\") |> DataFrame\n2x2 ResultSet\n| Row | \"GenreId\" | \"Name\"     |\n|-----|-----------|------------|\n| 1   | 0         | \"My Genre\" |\n| 2   | 1         | \"Rock\"     |Due to the heavy use of escape characters you may run into problems where julia parses out some backslashes in your query, for example \"\\y\" simply becomes \"y\". For example the following two queries are identicaljulia> SQLite.Query(db, \"SELECT * FROM MediaType WHERE Name REGEXP \'-\\d\'\") |> DataFrame\n1x1 ResultSet\n| Row | \"Rows Affected\" |\n|-----|-----------------|\n| 1   | 0               |\n\njulia> SQLite.Query(db, \"SELECT * FROM MediaType WHERE Name REGEXP \'-d\'\") |> DataFrame\n1x1 ResultSet\n| Row | \"Rows Affected\" |\n|-----|-----------------|\n| 1   | 0               |This can be avoided in two ways. You can either escape each backslash yourself or you can use the sr\"...\" string literal that SQLite.jl exports. The previous query can then successfully be run like sojulia> # manually escaping backslashes\n\njulia> SQLite.Query(db, \"SELECT * FROM MediaType WHERE Name REGEXP \'-\\\\d\'\") |> DataFrame\n1x2 ResultSet\n| Row | \"MediaTypeId\" | \"Name\"                        |\n|-----|---------------|-------------------------------|\n| 1   | 3             | \"Protected MPEG-4 video file\" |\n\njulia> # using sr\"...\"\n\njulia> SQLite.Query(db, sr\"SELECT * FROM MediaType WHERE Name REGEXP \'-\\d\'\") |> DataFrame\n1x2 ResultSet\n| Row | \"MediaTypeId\" | \"Name\"                        |\n|-----|---------------|-------------------------------|\n| 1   | 3             | \"Protected MPEG-4 video file\" |The sr\"...\" currently escapes all special characters in a string but it may be changed in the future to escape only characters which are part of a regex."
},

{
    "location": "#Custom-Scalar-Functions-1",
    "page": "Home",
    "title": "Custom Scalar Functions",
    "category": "section",
    "text": "SQLite.jl also provides a way that you can implement your own Scalar Functions. This is done using the register function and macro.@register takes a SQLite.DB and a function. The function can be in block syntaxjulia> @register db function add3(x)\n       x + 3\n       endinline function syntaxjulia> @register db mult3(x) = 3 * xand previously defined functionsjulia> @register db sinThe SQLite.register function takes optional arguments; nargs which defaults to -1, name which defaults to the name of the function, isdeterm which defaults to true. In practice these rarely need to be used.The SQLite.register function uses the sqlreturn function to return your function\'s return value to SQLite. By default, sqlreturn maps the returned value to a native SQLite type or, failing that, serializes the julia value and stores it as a BLOB. To change this behaviour simply define a new method for sqlreturn which then calls a previously defined method for sqlreturn. Methods which map to native SQLite types aresqlreturn(context, ::NullType)\nsqlreturn(context, val::Int32)\nsqlreturn(context, val::Int64)\nsqlreturn(context, val::Float64)\nsqlreturn(context, val::UTF16String)\nsqlreturn(context, val::String)\nsqlreturn(context, val::Any)As an example, say you would like BigInts to be stored as TEXT rather than a BLOB. You would simply need to define the following methodsqlreturn(context, val::BigInt) = sqlreturn(context, string(val))Another example is the sqlreturn used by the regexp function. For regexp to work correctly it must return it must return an Int (more specifically a 0 or 1) but ismatch (used by regexp) returns a Bool. For this reason the following method was definedsqlreturn(context, val::Bool) = sqlreturn(context, int(val))Any new method defined for sqlreturn must take two arguments and must pass the first argument straight through as the first argument."
},

{
    "location": "#Custom-Aggregate-Functions-1",
    "page": "Home",
    "title": "Custom Aggregate Functions",
    "category": "section",
    "text": "Using the SQLite.register function, you can also define your own aggregate functions with largely the same semantics.The SQLite.register function for aggregates must take a SQLite.DB, an initial value, a step function and a final function. The first argument to the step function will be the return value of the previous function (or the initial value if it is the first iteration). The final function must take a single argument which will be the return value of the last step function.julia> dsum(prev, cur) = prev + cur\n\njulia> dsum(prev) = 2 * prev\n\njulia> SQLite.register(db, 0, dsum, dsum)If no name is given the name of the first (step) function is used (in this case \"dsum\"). You can also use lambdas, the following does the same as the previous code snippetjulia> SQLite.register(db, 0, (p,c) -> p+c, p -> 2p, name=\"dsum\")"
},

]}
