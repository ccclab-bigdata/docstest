var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DeepDiffs-1",
    "page": "Readme",
    "title": "DeepDiffs",
    "category": "section",
    "text": "(Image: Travis Status) (Image: Appveyor status) (Image: codecov.io)DeepDiffs.jl provides the deepdiff function, which finds and displays differences (diffs) between Julia data structures. It supports Vectors, Dicts, and Strings. When diffing dictionaries where values associated with a particular key may change, deepdiff will recurse into value to provide a more detailed diff.Many users will likely only use the deepdiff function to interactively visualize diffs. For more advanced usage, the return value from deepdiff will be some subtype of the DeepDiff abstract type which can be further manipulated. These subtypes support the following functions:before(diff): returns the first original (left-hand-side) value that was diffed\nafter(diff): returns the modified (right-hand-side) value that was diffed\nadded(diff): returns a list of indices or dictionary keys that were new items. These indices correspond to the \"after\" value.\nremoved(diff): returns a list of indices or dictionary keys that were removed. These indices correspond to the \"before\" value.\nchanged(diff): returns a dictionary whose keys are indices or dictionary keys and whose values are themselves DeepDiffs that describe the modified value. Currently this is only meaningful when diffing dictionaries because the keys can be matched up between the original and modified values."
},

{
    "location": "#Diffing-Vectors-1",
    "page": "Readme",
    "title": "Diffing Vectors",
    "category": "section",
    "text": "Vectors are diffed using a longest-subsequence algorithm that tries to minmize the number of additions and removals necessary to transform one Vector to another.(Image: Dict diff output)"
},

{
    "location": "#Diffing-Dicts-1",
    "page": "Readme",
    "title": "Diffing Dicts",
    "category": "section",
    "text": "Dicts are diffed by matching up the keys between the original and modified values, so it can recognize removed, added, or modified values.(Image: Dict diff output)If color is disabled then the additions and removals are displayed a little differently:(Image: Dict diff output)"
},

{
    "location": "#Diffing-Strings-1",
    "page": "Readme",
    "title": "Diffing Strings",
    "category": "section",
    "text": ""
},

{
    "location": "#Single-line-strings-1",
    "page": "Readme",
    "title": "Single-line strings",
    "category": "section",
    "text": "Single-line strings are diffed character-by-character. The indices returned by added and removed correspond to indices in the Vector of characters returned by collect(str::String).(Image: Dict diff output)"
},

{
    "location": "#Multi-line-strings-1",
    "page": "Readme",
    "title": "Multi-line strings",
    "category": "section",
    "text": "Multi-line strings (strings with at least one newline) are diffed line-by-line. The indices returned by added and removed correspond to line numbers.(Image: Dict diff output)"
},

{
    "location": "autodocs/#DeepDiffs.deepdiff",
    "page": "Docstrings",
    "title": "DeepDiffs.deepdiff",
    "category": "function",
    "text": "diff = deepdiff(obj1, obj2)\n\ndeepdiff computes the structural difference between two objects and returns a diff representing \"edits\" needed to transform obj1 into obj2. This diff supports the added, removed, and modified functions that return Sets of dictionary keys or array indices.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "DeepDiffs.AllStringDiffsDeepDiffs.DeepDiffDeepDiffs.DeepDiffsDeepDiffs.DictDiffDeepDiffs.SimpleDiffDeepDiffs.StringDiffDeepDiffs.StringLineDiffDeepDiffs.VectorDiffDeepDiffs.addedDeepDiffs.afterDeepDiffs.backtrackDeepDiffs.beforeDeepDiffs.changedDeepDiffs.deepdiffDeepDiffs.diffprintDeepDiffs.evalDeepDiffs.fieldequalDeepDiffs.hascolorDeepDiffs.includeDeepDiffs.inspaceDeepDiffs.prettyprintDeepDiffs.printitemDeepDiffs.removedDeepDiffs.visitall"
},

]}
