var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Gtk.jl-1",
    "page": "Home",
    "title": "Gtk.jl",
    "category": "section",
    "text": "Julia Bindings for Gtk."
},

{
    "location": "#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": "Gtk.jl is a is a Julia package providing bindings for the Gtk library: http://www.gtk.org/Complete Gtk documentation is available at https://developer.gnome.org/gtk/stable"
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Install Gtk.jl within Julia usingPkg.add(\"Gtk\")If this produces errors, please see installation troubleshooting."
},

{
    "location": "#Precompilation-1",
    "page": "Home",
    "title": "Precompilation",
    "category": "section",
    "text": "Gtk is precompilable by normal mechanisms. For further reduction of startup time for applications that use Gtk, one can even build it into your local installation of julia."
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "See Getting Started for an introduction to using the package"
},

{
    "location": "#Attribution-1",
    "page": "Home",
    "title": "Attribution",
    "category": "section",
    "text": "Gtk logo is made by Andreas Nilsson [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/)], via Wikimedia Commons"
},

{
    "location": "manual/gettingStarted/#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "manual/gettingStarted/#Getting-Started-1",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "section",
    "text": "We start this tutorial with a very simple example that creats an empty window of size 400x200 pixels and adds a button to itusing Gtk\n\nwin = GtkWindow(\"My First Gtk.jl Program\", 400, 200)\n\nb = GtkButton(\"Click Me\")\npush!(win,b)\n\nshowall(win)We will now go through this example step by step. First the package is loaded using Gtk statement. Then a window is created using the GtkWindow constructor. It gets as input the window title, the window width, and the window height. Then a button is created using the GtkButton constructor. In order to insert the button into the window we callpush!(win,b)Finally, showall(win) will render the entire application on the screen."
},

{
    "location": "manual/gettingStarted/#Extended-Example-1",
    "page": "Getting Started",
    "title": "Extended Example",
    "category": "section",
    "text": "We will now extend the example to let the button actually do something. To this end we first define a callback function that will be executed when the user clicks the button. Our callback function is supposed to change the window title of the applicationfunction on_button_clicked(w)\n  println(\"The button has been clicked\")\nendWhat happens when the user clicks the button is that a \"clicked\" signal is emitted. In order to connect this signal to our function on_button_clicked we have to callsignal_connect(on_button_clicked, b, \"clicked\")Our full extended example thus looks like:using Gtk\n\nwin = GtkWindow(\"My First Gtk.jl Program\", 400, 200)\n\nb = GtkButton(\"Click Me\")\npush!(win,b)\n\nfunction on_button_clicked(w)\n  println(\"The button has been clicked\")\nend\nsignal_connect(on_button_clicked, b, \"clicked\")\n\nshowall(win)"
},

{
    "location": "manual/properties/#",
    "page": "Properties",
    "title": "Properties",
    "category": "page",
    "text": ""
},

{
    "location": "manual/properties/#Properties-1",
    "page": "Properties",
    "title": "Properties",
    "category": "section",
    "text": "If you\'re following along, you probably noticed that creating win caused quite a lot of output:GtkWindowLeaf(name=\"\", parent, width-request=-1, height-request=-1, visible=TRUE, sensitive=TRUE, app-paintable=FALSE, can-focus=FALSE, has-focus=FALSE, is-focus=FALSE, can-default=FALSE, has-default=FALSE, receives-default=FALSE, composite-child=FALSE, style, events=0, no-show-all=FALSE, has-tooltip=FALSE, tooltip-markup=NULL, tooltip-text=NULL, window, double-buffered=TRUE, halign=GTK_ALIGN_FILL, valign=GTK_ALIGN_FILL, margin-left=0, margin-right=0, margin-top=0, margin-bottom=0, margin=0, hexpand=FALSE, vexpand=FALSE, hexpand-set=FALSE, vexpand-set=FALSE, expand=FALSE, border-width=0, resize-mode=GTK_RESIZE_QUEUE, child, type=GTK_WINDOW_TOPLEVEL, title=\"My window\", role=NULL, resizable=TRUE, modal=FALSE, window-position=GTK_WIN_POS_NONE, default-width=-1, default-height=-1, destroy-with-parent=FALSE, hide-titlebar-when-maximized=FALSE, icon, icon-name=NULL, screen, type-hint=GDK_WINDOW_TYPE_HINT_NORMAL, skip-taskbar-hint=FALSE, skip-pager-hint=FALSE, urgency-hint=FALSE, accept-focus=TRUE, focus-on-map=TRUE, decorated=TRUE, deletable=TRUE, gravity=GDK_GRAVITY_NORTH_WEST, transient-for, attached-to, opacity=1.000000, has-resize-grip=TRUE, resize-grip-visible=TRUE, application, ubuntu-no-proxy=FALSE, is-active=FALSE, has-toplevel-focus=FALSE, startup-id, mnemonics-visible=TRUE, focus-visible=TRUE, )This shows you a list of properties of the object. For example, notice that the title property is set to \"My window\". We can change the title in the following way:julia> set_gtk_property!(win, :title, \"New title\")To get the property, you have to specify the return type as a second argument:julia> get_gtk_property(win, :title, String)\n\"New title\"This is necessary because Gtk, a C library, maintains the state; you have to specify what type of Julia object you want to create from the pointers it passes back.To access particular properties, you can either use symbols, like :title, or strings, like \"title\". When using symbols, you\'ll need to convert any Gtk names that use - into names with _:julia> get_gtk_property(win, :double_buffered, Bool)\ntrueSome properties have convenience methods, for example:julia> visible(win)\ntrue\n\njulia> visible(win, false)\n\njulia> visible(win)\nfalse\n\njulia> visible(win, true)This sequence makes the window disappear and then reappear."
},

{
    "location": "manual/layout/#",
    "page": "Layout",
    "title": "Layout",
    "category": "page",
    "text": ""
},

{
    "location": "manual/layout/#Layout-1",
    "page": "Layout",
    "title": "Layout",
    "category": "section",
    "text": "You will usually want to add more than one widget to you application. To this end, Gtk provides several layout widget. Instead of using a precise positioning, the Gtk layout widgets take an approach where widgets are aligned in boxes and tables.note: Note\nWhile doing the layout using Julia code is possible for small examples it is in general advised to instead create the layout using Glade in combination with GtkBuilder Builder and Glade."
},

{
    "location": "manual/layout/#Box-1",
    "page": "Layout",
    "title": "Box",
    "category": "section",
    "text": "The most simple layout widget is the GtkBox. It can be either be horizontally or vertical aligned. It allow to add an arbitrary number of widgets.win = GtkWindow(\"New title\")\nhbox = GtkBox(:h)  # :h makes a horizontal layout, :v a vertical layout\npush!(win, hbox)\ncancel = GtkButton(\"Cancel\")\nok = GtkButton(\"OK\")\npush!(hbox, cancel)\npush!(hbox, ok)\nshowall(win)We can address individual \"slots\" in this container:julia> length(hbox)\n2\n\njulia> get_gtk_property(hbox[1], :label, String)\n\"Cancel\"\n\njulia> get_gtk_property(hbox[2], :label, String)\n\"OK\"This layout may not be exactly what you\'d like. Perhaps you\'d like the ok button to fill the available space, and to insert some blank space between them:set_gtk_property!(hbox,:expand,ok,true)\nset_gtk_property!(hbox,:spacing,10)The first line sets the expand property of the ok button within the hbox container.Note that these aren\'t evenly-sized, and that doesn\'t change if we set the cancel button\'s expand property to true. ButtonBox is created specifically for this purpose, so let\'s use it instead:destroy(hbox)\nok = GtkButton(\"OK\")\ncancel = GtkButton(\"Cancel\")\nhbox = GtkButtonBox(:h)\npush!(win, hbox)\npush!(hbox, cancel)\npush!(hbox, ok)Now we get this:(Image: window)which may be closer to what you had in mind."
},

{
    "location": "manual/layout/#Grid-1",
    "page": "Layout",
    "title": "Grid",
    "category": "section",
    "text": "More generally, you can arrange items in a grid:win = GtkWindow(\"A new window\")\ng = GtkGrid()\na = GtkEntry()  # a widget for entering text\nset_gtk_property!(a, :text, \"This is Gtk!\")\nb = GtkCheckButton(\"Check me!\")\nc = GtkScale(false, 0:10)     # a slider\n\n# Now let\'s place these graphical elements into the Grid:\ng[1,1] = a    # Cartesian coordinates, g[x,y]\ng[2,1] = b\ng[1:2,2] = c  # spans both columns\nset_gtk_property!(g, :column_homogeneous, true)\nset_gtk_property!(g, :column_spacing, 15)  # introduce a 15-pixel gap between columns\npush!(win, g)\nshowall(win)The g[x,y] = obj assigns the location to the indicated x,y positions in the grid (note that indexing is Cartesian rather than row/column; most graphics packages address the screen using Cartesian coordinates where 0,0 is in the upper left). A range is used to indicate a span of grid cells. By default, each row/column will use only as much space as required to contain the objects, but you can force them to be of the same size by setting properties like column_homogeneous."
},

{
    "location": "manual/signals/#",
    "page": "Signals and Callbacks",
    "title": "Signals and Callbacks",
    "category": "page",
    "text": ""
},

{
    "location": "manual/signals/#Signals-and-Callbacks-1",
    "page": "Signals and Callbacks",
    "title": "Signals and Callbacks",
    "category": "section",
    "text": "A button is not much use if it doesn\'t do anything. Gtk+ uses signals as a method for communicating that something of interest has happened. Most signals will be emitted as a consequence of user interaction: clicking on a button, closing a window, or just moving the mouse. You connect your signals to particular functions to make something happen.Let\'s try a simple example:b = GtkButton(\"Press me\")\nwin = GtkWindow(b, \"Callbacks\")\nshowall(win)\n\nfunction button_clicked_callback(widget)\n    println(widget, \" was clicked!\")\nend\n\nid = signal_connect(button_clicked_callback, b, \"clicked\")Here, button_clicked_callback is a callback function, something designed to be called by GTK+ to implement the response to user action.  You use the signal_connect function to specify when it should be called: in this case, when widget b (your button) emits the \"clicked\" signal.Using Julia\'s do syntax, the exact same code could alternatively be written asb = GtkButton(\"Press me\")\nwin = GtkWindow(b, \"Callbacks\")\nid = signal_connect(b, \"clicked\") do widget\n     println(widget, \" was clicked!\")\nendIf you try this, and click on the button, you should see something like the following:julia> GtkButton(action-name=NULL, action-target, related-action, use-action-appearance=TRUE, name=\"\", parent, width-request=-1, height-request=-1, visible=TRUE, sensitive=TRUE, app-paintable=FALSE, can-focus=TRUE, has-focus=TRUE, is-focus=TRUE, can-default=FALSE, has-default=FALSE, receives-default=TRUE, composite-child=FALSE, style, events=0, no-show-all=FALSE, has-tooltip=FALSE, tooltip-markup=NULL, tooltip-text=NULL, window, double-buffered=TRUE, halign=GTK_ALIGN_FILL, valign=GTK_ALIGN_FILL, margin-left=0, margin-right=0, margin-top=0, margin-bottom=0, margin=0, hexpand=FALSE, vexpand=FALSE, hexpand-set=FALSE, vexpand-set=FALSE, expand=FALSE, border-width=0, resize-mode=GTK_RESIZE_PARENT, child, label=\"Press me\", image, relief=GTK_RELIEF_NORMAL, use-underline=TRUE, use-stock=FALSE, focus-on-click=TRUE, xalign=0.500000, yalign=0.500000, image-position=GTK_POS_LEFT, ) was clicked!That\'s quite a lot of output; let\'s just print the label of the button:id2 = signal_connect(b, \"clicked\") do widget\n    println(\"\\\"\", get_gtk_property(widget,:label,String), \"\\\" was clicked!\")\nendNow you get something like this:julia> GtkButton(action-name=NULL, action-target, related-action, use-action-appearance=TRUE, name=\"\", parent, width-request=-1, height-request=-1, visible=TRUE, sensitive=TRUE, app-paintable=FALSE, can-focus=TRUE, has-focus=TRUE, is-focus=TRUE, can-default=FALSE, has-default=FALSE, receives-default=TRUE, composite-child=FALSE, style, events=0, no-show-all=FALSE, has-tooltip=FALSE, tooltip-markup=NULL, tooltip-text=NULL, window, double-buffered=TRUE, halign=GTK_ALIGN_FILL, valign=GTK_ALIGN_FILL, margin-left=0, margin-right=0, margin-top=0, margin-bottom=0, margin=0, hexpand=FALSE, vexpand=FALSE, hexpand-set=FALSE, vexpand-set=FALSE, expand=FALSE, border-width=0, resize-mode=GTK_RESIZE_PARENT, child, label=\"Press me\", image, relief=GTK_RELIEF_NORMAL, use-underline=TRUE, use-stock=FALSE, focus-on-click=TRUE, xalign=0.500000, yalign=0.500000, image-position=GTK_POS_LEFT, ) was clicked!\n\"Press me\" was clicked!Notice that both of the callback functions executed! Gtk+ allows you to define multiple signal handlers for a given object; even the execution order can be specified. Callbacks for some signals require that you return an Int32, with value 0 if you want the next handler to run or 1 if you want to prevent any other handlers from running on this event.The \"clicked\" signal callback should return nothing (void in C parlance), so you can\'t prevent other callbacks from running. However, we can disconnect the first signal handler:signal_handler_disconnect(b, id)Now clicking on the button just yieldsjulia> \"Press me\" was clicked!Alternatively, you can temporarily enable or disable individual handlers with signal_handler_block and signal_handler_unblock.The arguments of the callback depend on the signal type. For example, instead of using the \"clicked\" signal–-for which the Julia handler should be defined with just a single argument–-we could have used \"button-press-event\":b = GtkButton(\"Pick a mouse button\")\nwin = GtkWindow(b, \"Callbacks\")\nid = signal_connect(b, \"button-press-event\") do widget, event\n    println(\"You pressed button \", event.button)\nendNote that this signal requires two arguments, here widget and event, and that event contained useful information. Arguments and their meaning are described along with their corresponding signals. You should omit the final user_data argument described in the Gtk documentation; keep in mind that you can always address other variables from inside your function block, or define the callback in terms of an anonymous function:id = signal_connect((widget, event) -> cb_buttonpressed(widget, event, guistate, drawfunction, ...), b, \"button-press-event\")In some situations you may want or need to use an approach that is more analogous to julia\'s @cfunction callback syntax. One advantage of this alternative approach is that, in cases of error, the backtraces are much more informative.Warning: it is essential to avoid task switching inside Gtk callbacks, as this corrupts the Gtk C-stack. For example, use @async print or queue a message for yourself. You can also call GLib.g_yield() if you need to block. However, if you are still seeing segfaults in some random method due to there existing a callback that recursively calls the glib main loop (such as making a dialog box) or otherwise causes g_yield to be called, wrap the faulting code in GLib.@sigatom. This will postpone execution of that code block until it can be run on the proper stack (but will otherwise acts like normal control flow).These restrictions should be fixed once https://github.com/JuliaLang/julia/pull/13099 is merged."
},

{
    "location": "manual/builder/#",
    "page": "Builder and Glade",
    "title": "Builder and Glade",
    "category": "page",
    "text": ""
},

{
    "location": "manual/builder/#Builder-and-Glade-1",
    "page": "Builder and Glade",
    "title": "Builder and Glade",
    "category": "section",
    "text": "Until now we have created and arranged all widgets entirely using Julia code. While this works fine for small examples, it has the issue that we are tightly coupling the appearance from our application with the logic of our program code. In addition the linear way of procedural Julia code does not fit very well with complex user interfaces arranged in deeply nested tables and boxes.Fortunately, there is a much better way to design user interfaces that strictly separate the layout from the code. This is done by an XML based file format that allows for describing any widget arrangements. The XML file is usually not manually created but designed graphically using Glade in a WYSIWYG (what you see is what you get) manner. In order to use the interface in your Julia Gtk application you will need GtkBuilder."
},

{
    "location": "manual/builder/#Glade-1",
    "page": "Builder and Glade",
    "title": "Glade",
    "category": "section",
    "text": "Glade lets you create complex user interfaces by graphically arranging them together in a user friendly way. There are many good tutorials out there so that we will skip a detailed introduction here.The important thing when putting together the interface with glade is to give each widget that you later want to interface with a meaningful ID.note: Note\nNote that Glade can not only be used to create toplevel widgets (e.g. Windows). Instead one can start for instance with a GtkGrid or GtkBox serving as the base for a Custom/Composed Widgets."
},

{
    "location": "manual/builder/#Builder-1",
    "page": "Builder and Glade",
    "title": "Builder",
    "category": "section",
    "text": "Once we have created the interface with Glade the result can be stored in an XML file that usually has the extension .glade. Lets assume we have created a file myapp.glade that looks like<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<interface>\n  <!-- interface-requires gtk+ 3.0 -->\n  <object class=\"GtkWindow\" id=\"window1\">\n    <property name=\"can_focus\">False</property>\n    <child>\n      <object class=\"GtkButton\" id=\"button1\">\n        <property name=\"label\" translatable=\"yes\">button</property>\n        <property name=\"use_action_appearance\">False</property>\n        <property name=\"visible\">True</property>\n        <property name=\"can_focus\">True</property>\n        <property name=\"receives_default\">True</property>\n        <property name=\"use_action_appearance\">False</property>\n      </object>\n    </child>\n  </object>\n</interface>In order to access the widgets from Julia we first create a GtkBuilder object that will serve as our connector between the XML definition and our Julia code.b = GtkBuilder(filename=\"path/to/myapp.glade\")Alternatively, if we would store above XML definition in a Julia string myapp we can initalize the builder byb = GtkBuilder(buffer=myapp)Now we want to access a widget from the XML file in order to actually display it on the screen. To do so we callwin = b[\"window1\"]\nshowall(win)That is all that you need to know. You can thus see your builder as a kind of a widget store that you use when you need access to your widgets. It it therefore not really necessary to bind the widgets to local variables anymore but instead you can always use the builder object.note: Note\nIf you are developing the code in a package you can get the package directory using the Pkg.dir(\"MyPackage\") function. This allows you to put the files into the package directory and reference them in a relative manner.note: Note\nFrom Julia 1.0 on, Pkg.dir() is deprecated. Instead, you can use the @__DIR__ macro. For instance, if your glade file is located at MyPackage/src/builder/myuifile.ui, you can get the full path using uifile = joinpath(@__DIR__, \"builder\", \"myuifile.ui\")."
},

{
    "location": "manual/builder/#Callbacks-1",
    "page": "Builder and Glade",
    "title": "Callbacks",
    "category": "section",
    "text": "The XML file lets us only describe the visual structure of our widgets and not their behavior when the using is interacting with it. For this reason, we will have to add callbacks to the widgets which we do in Julia code as it was described in Signals and Callbacks."
},

{
    "location": "manual/textwidgets/#",
    "page": "Text Widgets",
    "title": "Text Widgets",
    "category": "page",
    "text": ""
},

{
    "location": "manual/textwidgets/#Text-Widgets-1",
    "page": "Text Widgets",
    "title": "Text Widgets",
    "category": "section",
    "text": "There are two basic widgets available for rendering simple text. The one is for displaying non-editable text GtkLabel the other is for editable text GtkEntry."
},

{
    "location": "manual/textwidgets/#Label-1",
    "page": "Text Widgets",
    "title": "Label",
    "category": "section",
    "text": "A GtkLabel is the most basic text widget that has already been used behind the scene in any previous example involving a GtkButton. A GtkLabel is constructed by callinglabel = GtkLabel(\"My text\")The text of a label can be changed usingGAccessor.text(label,\"My other text\")Furthermore, a label has limited support for adding formatted text. This is done using the markup function:GAccessor.markup(label,\"\"\"<b>My bold text</b>\\n\n                          <a href=\\\"http://www.gtk.org\\\"\n                          title=\\\"Our website\\\">GTK+ website</a>\"\"\")The syntax for this markup text is borrowed from html and explained here.A label can be made selectable usingGAccessor.selectable(label,true)This can be used if the user should be allowed to copy the text.The justification of a label can be changed in the following way:GAccessor.justify(label,Gtk.GConstants.GtkJustification.RIGHT)Possible values of the enum GtkJustification are LEFT,RIGHT,CENTER, and FILL.Automatic line wrapping can be enabled usingGAccessor.text(label,repeat(\"Very long text! \",20))\nGAccessor.line_wrap(label,true)Note that this will only happen, if the size of the widget is limited using layout constraints."
},

{
    "location": "manual/textwidgets/#Entry-1",
    "page": "Text Widgets",
    "title": "Entry",
    "category": "section",
    "text": "The entry widget allows the user to enter text. The entered text can be read and write usingent = GtkEntry()\nset_gtk_property!(ent,:text,\"My String\")\nstr = get_gtk_property(ent,:text,String)The maximum number of characters can be limited using set_gtk_property!(ent,:max_length,10).Sometimes you might want to make the widget non-editable. This can be done by a call# using the accessor methods\nGAccessor.editable(GtkEditable(ent),false)\n# using the property system\nset_gtk_property!(ent,:editable,false)If you want to use the entry to retrieve passwords you can hide the visibility of the entered text. This can be achieve by callingset_gtk_property!(ent,:visibility,false)To get notified by changes to the entry one can listen the \"changed\" event.TODO: setting progress and setting icons in entry"
},

{
    "location": "manual/textwidgets/#Search-Entry-1",
    "page": "Text Widgets",
    "title": "Search Entry",
    "category": "section",
    "text": "A special variant of the entry that can be used as a search box is GtkSearchEntry. It is equipped with a button to clear the entry.note: Note\nCurrently GtkSearchEntry is not fully wrapped in Gtk.jl but if you add it using Glade, it can be used as an alternative to the `GtkEntry"
},

{
    "location": "manual/combobox/#",
    "page": "Combobox",
    "title": "Combobox",
    "category": "page",
    "text": ""
},

{
    "location": "manual/combobox/#Combobox-1",
    "page": "Combobox",
    "title": "Combobox",
    "category": "section",
    "text": "The combobox widget allows for selecting an item from a dropdown menu. There are two different flavors of comboboxes. A simple GtkComboBoxText widget and a more powerful and generic GtkComboBox widget. The former is a subtype of the later"
},

{
    "location": "manual/combobox/#GtkComboBoxText-1",
    "page": "Combobox",
    "title": "GtkComboBoxText",
    "category": "section",
    "text": "The following example shows how to fill a GtkComboBoxText with elements and listen on the changed eventusing Gtk\n\ncb = GtkComboBoxText()\nchoices = [\"one\", \"two\", \"three\", \"four\"]\nfor choice in choices\n  push!(cb,choice)\nend\n# Lets set the active element to be \"two\"\nset_gtk_property!(cb,:active,1)\n\nsignal_connect(cb, \"changed\") do widget, others...\n  # get the active index\n  idx = get_gtk_property(cb, \"active\", Int)\n  # get the active string \n  # We need to wrap the GAccessor call into a Gtk bytestring\n  str = Gtk.bytestring( GAccessor.active_text(cb) ) \n  println(\"Active element is \\\"$str\\\" at index $idx\")\nend\n\nwin = GtkWindow(\"ComboBoxText Example\",400,200)\npush!(win, cb)\nshowall(win)"
},

{
    "location": "manual/combobox/#GtkComboBox-1",
    "page": "Combobox",
    "title": "GtkComboBox",
    "category": "section",
    "text": "Before you study the generic GtkComboBox you should have studied the section describing the List and Tree Widgets since both have a similar concept and interface.TODO "
},

{
    "location": "manual/listtreeview/#",
    "page": "List and Tree Widgets",
    "title": "List and Tree Widgets",
    "category": "page",
    "text": ""
},

{
    "location": "manual/listtreeview/#List-and-Tree-Widgets-1",
    "page": "List and Tree Widgets",
    "title": "List and Tree Widgets",
    "category": "section",
    "text": "The GtkTreeView is a very powerful widgets for displaying table-like or hierarchical data. Other than the name might indicate the GtkTreeView is used for both lists and trees.The power of this widget comes with a slightly more complex design that one has to understand when using the widget. The most important thing is that the widget itself does not store the displayed data. Instead there are dedicated GtkListStore and GtkTreeStore containers that will hold the data. The benefit of this approach is that it is possible to decouple the view from the data:The widget automatically updates when adding, removing or editing data from the store\nThe widget can sort its data without modifications in the store\nColumns can be reordered and resized\nFiltering can be used to show only subsets of dataWe will in the following introduce both widgets based on small and a more complex example."
},

{
    "location": "manual/listtreeview/#List-Store-1",
    "page": "List and Tree Widgets",
    "title": "List Store",
    "category": "section",
    "text": "Lets start with a very simple example: A table with three columns representing the name, the age and the gender of a person. Each column must have a specific type. Here, we chose to represent the gender using a boolean value where true  represents female and false represents male. We thus initialize the list store usingls = GtkListStore(String, Int, Bool)Now we will the store with datapush!(ls,(\"Peter\",20,false))\npush!(ls,(\"Paul\",30,false))\npush!(ls,(\"Mary\",25,true))If we want so insert the data at a specific position we can use the insert functioninsert!(ls, 2, (\"Susanne\", 35, true))You can use ls like a matrix like container. Calling length and size will give youjulia> length(ls)\n4\n\njulia> size(ls)\n(4,3)Specific element can be be accessed usingjulia> ls[1,1]\n\"Peter\"\njulia> ls[1,1] = \"Pete\"\n\"Pete\""
},

{
    "location": "manual/listtreeview/#List-View-1",
    "page": "List and Tree Widgets",
    "title": "List View",
    "category": "section",
    "text": "Now we actually want to display our data. To this end we create a tree view objecttv = GtkTreeView(GtkTreeModel(ls))Then we need specific renderers for each of the columns. Usually you will only need a text renderer, but in our example we want to display the boolean value using a checkbox.rTxt = GtkCellRendererText()\nrTog = GtkCellRendererToggle()Finally we create for each column a TreeViewColumn objectc1 = GtkTreeViewColumn(\"Name\", rTxt, Dict([(\"text\",0)]))\nc2 = GtkTreeViewColumn(\"Age\", rTxt, Dict([(\"text\",1)]))\nc3 = GtkTreeViewColumn(\"Female\", rTog, Dict([(\"active\",2)]))We need to push these column description objects to the tree viewpush!(tv, c1, c2, c3)Then we can display the tree view widget in a windowwin = GtkWindow(tv, \"List View\")\nshowall(win)If you prefer that the columns are resizable by the user callfor c in [c1, c2, c3]\n    GAccessor.resizable(c, true)\nend(Image: listview1)"
},

{
    "location": "manual/listtreeview/#Sorting-1",
    "page": "List and Tree Widgets",
    "title": "Sorting",
    "category": "section",
    "text": "We next want to make the tree view sortablefor (i,c) in enumerate([c1,c2,c3])\n  GAccessor.sort_column_id(c,i-1)\nendIf you now click on one of the column headers, the data will be sorted with respect to the selected column. You can even make the columns reorderablefor (i,c) in enumerate([c1, c2, c3])\n    GAccessor.reorderable(c, i)\nend"
},

{
    "location": "manual/listtreeview/#Selection-1",
    "page": "List and Tree Widgets",
    "title": "Selection",
    "category": "section",
    "text": "Usually the interesting bit of a list will be the entry being selected. This is done using an additional GtkTreeSelection object that can be retrieved byselection = GAccessor.selection(tv)One either have single selection or multiple selections. We toggle this by callingselection = GAccessor.mode(selection,Gtk.GConstants.GtkSelectionMode.MULTIPLE)We will stick with single selection for now and want to know the index of the selected itemjulia> ls[selected(selection),1]\n\"Pete\"Since it can happen that no item has been selected at all, it is a good idea to put this into an if statementif hasselection(selection)\n  # do something with selected(selection)\nendSometimes you want to invoke an action of an item is selected. This can be done bysignal_connect(selection, \"changed\") do widget\n  if hasselection(selection)\n    currentIt = selected(selection)\n\n    # now you can to something with the selected item\n    println(\"Name: \", ls[currentIt,1], \" Age: \", ls[currentIt,1])\n  end\nendAnother useful signal is \"row-activated\" that will be triggered by a double click of the user.note: Note\ngetting multiple selections still not implemented."
},

{
    "location": "manual/listtreeview/#Filtering-1",
    "page": "List and Tree Widgets",
    "title": "Filtering",
    "category": "section",
    "text": "A very useful thing is to apply a filter to a list view such that only a subset of data is shown. We can do this using the GtkTreeModelFilter type. It is as the GtkListStore a GtkTreeModel and therefore we can assign it to a tree view. So the idea is to wrap a GtkListStore in a GtkTreeModelFilter and assign that to the tree view.Next question is how to decide which row of the list store should be shown and which shouldn\'t. We will do this by adding an additional column to the list store that is hidden. The column will be of type Bool and a value true indicates that the entry is to be shown while false indicates the opposite. We make the filtering based on this column by a call to GAccessor.visible_column. The full example now looks like this:using Gtk\n\nls = GtkListStore(String, Int, Bool, Bool)\npush!(ls,(\"Peter\",20,false,true))\npush!(ls,(\"Paul\",30,false,true))\npush!(ls,(\"Mary\",25,true,true))\ninsert!(ls, 2, (\"Susanne\",35,true,true))\n\nrTxt = GtkCellRendererText()\nrTog = GtkCellRendererToggle()\n\nc1 = GtkTreeViewColumn(\"Name\", rTxt, Dict([(\"text\",0)]), sort_column_id=0)\nc2 = GtkTreeViewColumn(\"Age\", rTxt, Dict([(\"text\",1)]), sort_column_id=1)\nc3 = GtkTreeViewColumn(\"Female\", rTog, Dict([(\"active\",2)]), sort_column_id=2)\n\ntmFiltered = GtkTreeModelFilter(ls)\nGAccessor.visible_column(tmFiltered,3)\ntv = GtkTreeView(GtkTreeModel(tmFiltered))\npush!(tv, c1, c2, c3)\n\nselection = GAccessor.selection(tv)\n\nsignal_connect(selection, \"changed\") do widget\n  if hasselection(selection)\n    currentIt = selected(selection)\n\n    println(\"Name: \", GtkTreeModel(tmFiltered)[currentIt,1],\n            \" Age: \", GtkTreeModel(tmFiltered)[currentIt,1])\n  end\nend\n\nent = GtkEntry()\n\nsignal_connect(ent, \"changed\") do widget\n  searchText = get_gtk_property(ent, :text, String)\n\n  for l=1:length(ls)\n    showMe = true\n\n    if length(searchText) > 0\n      showMe = showMe && occursin(lowercase(searchText), lowercase(ls[l,1]))\n    end\n\n    ls[l,4] = showMe\n  end\nend\n\nvbox = GtkBox(:v)\npush!(vbox,ent,tv)\n\nwin = GtkWindow(vbox, \"List View with Filter\")\nshowall(win)You can see that we have added a little search bar such that you can see the filtering in action. It is furthermore important to note that we had to replace ls with GtkTreeModel(tmFiltered) in the selection changed callback since the selection will give an iterator that is only valid in the filtered tree model."
},

{
    "location": "manual/listtreeview/#Tree-Widget-1",
    "page": "List and Tree Widgets",
    "title": "Tree Widget",
    "category": "section",
    "text": "Here is an example of the tree model in action:using Gtk\n\nts = GtkTreeStore(String)\niter1 = push!(ts,(\"one\",))\niter2 = push!(ts,(\"two\",),iter1)\niter3 = push!(ts,(\"three\",),iter2)\ntv = GtkTreeView(GtkTreeModel(ts))\nr1 = GtkCellRendererText()\nc1 = GtkTreeViewColumn(\"A\", r1, Dict([(\"text\",0)]))\npush!(tv,c1)\nwin = GtkWindow(tv, \"Tree View\")\nshowall(win)\n\niter = Gtk.iter_from_index(ts, [1])\nts[iter,1] = \"ONE\""
},

{
    "location": "manual/filedialogs/#",
    "page": "Dialogs",
    "title": "Dialogs",
    "category": "page",
    "text": ""
},

{
    "location": "manual/filedialogs/#Dialogs-1",
    "page": "Dialogs",
    "title": "Dialogs",
    "category": "section",
    "text": ""
},

{
    "location": "manual/filedialogs/#File-Dialogs-1",
    "page": "Dialogs",
    "title": "File Dialogs",
    "category": "section",
    "text": "Gtk.jl supports the GtkFileChooserDialog and the GtkFileChooserNative. It also provides four functions, open_dialog and save_dialog as well as open_dialog_native and save_dialog_native, making this functionality easier to use. The syntax of these four functions are as follows:open_dialog(title, GtkNullContainer(), String[])\nsave_dialog(title, GtkNullContainer(), String[])\nopen_dialog_native(title, GtkNullContainer(), String[])\nsave_dialog_native(title, GtkNullContainer(), String[])If you are using these functions in the context of a GUI, you should set the parent to be the top-level window. Otherwise, for standalone usage in scripts, do not set the parent.The main flexibility comes from the filters, which can be specified as a Tuple or Vector. A filter can be specified as a string, in which case it specifies a globbing pattern, for example \"*.png\". You can specify multiple match types for a single filter by separating the patterns with a comma, for example \"*.png,*.jpg\". You can alternatively specify MIME types, or if no specification is provided it defaults to types supported by GdkPixbuf. The generic specification of a filter isGtkFileFilter(; name = nothing, pattern = \"\", mimetype = \"\")If on the other hand you want to choose a folder instead of a file, set the action to GtkFileChooserAction.SELECT_FOLDER:dir = open_dialog(\"Select Dataset Folder\", action=GtkFileChooserAction.SELECT_FOLDER)\nif isdir(dir)\n   # do something with dir\nendHere are some examples:open_dialog(\"Pick a file\")\nopen_dialog(\"Pick some files\", select_multiple=true)\nopen_dialog(\"Pick a file\", Null(), (\"*.jl\",))\nopen_dialog(\"Pick some text files\", GtkNullContainer(), (\"*.txt, *.csv\",), select_multiple=true)\nopen_dialog(\"Pick a file\", Null(), (GtkFileFilter(mimetype=\"text/csv\"),))\nopen_dialog(\"Pick an image file\", GtkNullContainer(), (\"*.png\", \"*.jpg\", GtkFileFilter(\"*.png, *.jpg\", name=\"All supported formats\")))\nopen_dialog(\"Pick an image file\", GtkNullContainer(), (GtkFileFilter(name=\"Supported image formats\"),))\n\nsave_dialog(\"Save as...\", Null(), (GtkFileFilter(\"*.png, *.jpg\", name=\"All supported formats\"), \"*.png\", \"*.jpg\"))"
},

{
    "location": "manual/filedialogs/#Message-dialogs-1",
    "page": "Dialogs",
    "title": "Message dialogs",
    "category": "section",
    "text": "Gtk.jl also supports GtkMessageDialog and provides several convenience functions:  info_dialog, ask_dialog, warn_dialog, and error_dialog.  Each inputs a string and an optional parent container, and returns nothing, except for ask_dialog which returns true if the user clicked yes.info_dialog(\"Julia rocks!\")\nask_dialog(\"Do you like chocolate ice cream?\", \"Not at all\", \"I like it\") && println(\"That\'s my favorite too.\")\nwarn_dialog(\"Oops!... I did it again\")"
},

{
    "location": "manual/keyevents/#",
    "page": "Key Events",
    "title": "Key Events",
    "category": "page",
    "text": ""
},

{
    "location": "manual/keyevents/#Key-Events-1",
    "page": "Key Events",
    "title": "Key Events",
    "category": "section",
    "text": "In order to capture a keyboard event one can connect to the key-press-event from the active window. An example is given byusing Gtk\n\nwin = GtkWindow(\"Key Press Example\")\n\nsignal_connect(win, \"key-press-event\") do widget, event\n  println(\"You pressed key \", event.keyval)\nendYou can then check if event.keyval has a certain value and invoke an action in that case."
},

{
    "location": "manual/canvas/#",
    "page": "Drawing on Canvas",
    "title": "Drawing on Canvas",
    "category": "page",
    "text": ""
},

{
    "location": "manual/canvas/#Drawing-on-Canvas-1",
    "page": "Drawing on Canvas",
    "title": "Drawing on Canvas",
    "category": "section",
    "text": "Generic drawing is done on a Canvas. You control what appears on this canvas by defining a draw function:using Gtk, Graphics\nc = @GtkCanvas()\nwin = GtkWindow(c, \"Canvas\")\n@guarded draw(c) do widget\n    ctx = getgc(c)\n    h = height(c)\n    w = width(c)\n    # Paint red rectangle\n    rectangle(ctx, 0, 0, w, h/2)\n    set_source_rgb(ctx, 1, 0, 0)\n    fill(ctx)\n    # Paint blue rectangle\n    rectangle(ctx, 0, 3h/4, w, h/4)\n    set_source_rgb(ctx, 0, 0, 1)\n    fill(ctx)\nend\nshow(c)This draw function will get called each time the window gets resized or otherwise needs to refresh its display.(Image: canvas)See Julia\'s standard-library documentation for more information on graphics.Errors in the draw function can corrupt Gtk\'s internal state; if this happens, you have to quit julia and start a fresh session. To avoid this problem, the @guarded macro wraps your code in a try/catch block and prevents the corruption. It is especially useful when initially writing and debugging code. See further discussion about when @guarded is relevant.Finally, Canvases have a field called mouse that allows you to easily write callbacks for mouse events:c.mouse.button1press = @guarded (widget, event) -> begin\n    ctx = getgc(widget)\n    set_source_rgb(ctx, 0, 1, 0)\n    arc(ctx, event.x, event.y, 5, 0, 2pi)\n    stroke(ctx)\n    reveal(widget)\nendThis will draw a green circle on the canvas at every mouse click. Resizing the window will make them go away; they were drawn on the canvas, but they weren\'t added to the draw function.Note the use of the @guarded macro here, too."
},

{
    "location": "manual/customWidgets/#",
    "page": "Custom/Composed Widgets",
    "title": "Custom/Composed Widgets",
    "category": "page",
    "text": ""
},

{
    "location": "manual/customWidgets/#Custom/Composed-Widgets-1",
    "page": "Custom/Composed Widgets",
    "title": "Custom/Composed Widgets",
    "category": "section",
    "text": "In practice, one usually has to customize a widget to ones own needs. Furthermore, it is also useful to group widgets together to break up a complete user interface into manageable parts. Both use cases are discussed next."
},

{
    "location": "manual/customWidgets/#Custom-Widgets-1",
    "page": "Custom/Composed Widgets",
    "title": "Custom Widgets",
    "category": "section",
    "text": "You can subclass an existing Gtk type in Julia using the following code pattern:mutable struct MyButton <: Gtk.GtkButton\n    handle::Ptr{Gtk.GObject}\n    other_fields\n    function MyButton(label)\n        btn = GtkButton(label)\n        return Gtk.gobject_move_ref(new(btn), btn)\n    end\nendThis creates a MyButton type which inherits its behavior from GtkButton. The gobject_move_ref call transfers ownership of the GObject handle from GtkButton to MyButton in a gc-safe manner. Afterwards, the btn object is invalid and converting from the Ptr{GtkObject} to GtkObject will return the MyButton object.Lets use this pattern to create a button that is initialized with a default text \"My Button\". The code would look like this.mutable struct MyButton <: Gtk.GtkButton\n    handle::Ptr{Gtk.GObject}\n\n    function MyButton()\n        btn = GtkButton(\"My Button\")\n        return Gtk.gobject_move_ref(new(btn.handle), btn)\n    end\nendWe can now add this button to e.g. a window or any layout container just as if MyButton would be a regular GtkWidget.btn = MyButton()\nwin = GtkWindow(\"Custom Widget\",400,200)\npush!(win, btn)\nshowall(win)"
},

{
    "location": "manual/customWidgets/#Composed-Widgets-1",
    "page": "Custom/Composed Widgets",
    "title": "Composed Widgets",
    "category": "section",
    "text": "While a pre-initialized button might look like an artificial use cases, the same pattern can be used to develop composed widgets. In that case one will typically subclass from a layout widget such as GtkBox or GtkGrid. Lets for instance build a new composed widget consisting of a text box and a buttonmutable struct ComposedWidget <: Gtk.GtkBox\n    handle::Ptr{Gtk.GObject}\n    btn # handle to child\n    tv # handle to child\n\n    function ComposedWidget(label)\n        vbox = GtkBox(:v)\n        btn = GtkButton(label)\n        tv = GtkTextView()\n        push!(vbox,btn,tv)\n        set_gtk_property!(vbox,:expand,tv,true)\n        set_gtk_property!(vbox,:spacing,10)\n        w = new(vbox.handle, btn, tv)\n        return Gtk.gobject_move_ref(w, vbox)\n    end\nend\n\nc = ComposedWidget(\"My Button\")\nwin = GtkWindow(\"Composed Widget\",400,200)\npush!(win, c)\nshowall(win)\nYou will usually store the handles to all subwidgets in the composed type as has been done in the example. This will give you quick access to the child widgets when e.g. callback functions for ComposedWidget are called."
},

{
    "location": "manual/async/#",
    "page": "Asynchronous UI",
    "title": "Asynchronous UI",
    "category": "page",
    "text": ""
},

{
    "location": "manual/async/#Asynchronous-UI-1",
    "page": "Asynchronous UI",
    "title": "Asynchronous UI",
    "category": "section",
    "text": "Here is an example of an asynchronous update of the user interface. Since Julia has currently no possibility of multithreading we use a second process to offload the work. The example is just a proof of principle.using Gtk\n\nbtn = GtkButton(\"Start\")\nsp = GtkSpinner()\nent = GtkEntry()\n\ngrid = GtkGrid()\ngrid[1,1] = btn\ngrid[2,1] = sp\ngrid[1:2,2] = ent\n\nid = addprocs(1)[1]\n\nsignal_connect(btn, \"clicked\") do widget\n start(sp)\n @Gtk.sigatom begin\n   @async begin\n    s = @fetchfrom id begin\n      sleep(4)\n      return \"I am back\"\n    end\n    @Gtk.sigatom begin\n      stop(sp)\n      set_gtk_property!(ent,:text,s)\n    end\n  end\n end\nend\n\nwin = GtkWindow(grid, \"Progress Bar\", 200, 200)\nshowall(win)"
},

{
    "location": "manual/nonreplusage/#",
    "page": "Non REPL Usage",
    "title": "Non REPL Usage",
    "category": "page",
    "text": ""
},

{
    "location": "manual/nonreplusage/#Non-REPL-Usage-1",
    "page": "Non REPL Usage",
    "title": "Non REPL Usage",
    "category": "section",
    "text": "If you\'re using Gtk from command-line scripts, one problem you may encounter is that Julia quits before you have a chance to see or interact with your windows. In such cases, the following design pattern can be helpful:win = Window(\"gtkwait\")\n\n# Put your GUI code here\n\nif !isinteractive()\n    c = Condition()\n    signal_connect(win, :destroy) do widget\n        notify(c)\n    end\n    wait(c)\nendBy waiting on a Condition, you force Julia to keep running. However, when the window is closed, then the program can continue (which in this case would simply be to exit)."
},

{
    "location": "manual/packages/#",
    "page": "High-Level Packages",
    "title": "High-Level Packages",
    "category": "page",
    "text": ""
},

{
    "location": "manual/packages/#High-Level-Packages-1",
    "page": "High-Level Packages",
    "title": "High-Level Packages",
    "category": "section",
    "text": "Finally, there are higher-level wrappers that might simplify your usage of Gtk, such as GtkReactive."
},

]}
