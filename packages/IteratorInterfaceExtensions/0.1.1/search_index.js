var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IteratorInterfaceExtensions-1",
    "page": "Readme",
    "title": "IteratorInterfaceExtensions",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: IteratorInterfaceExtensions) (Image: codecov.io)IteratorInterfaceExtensions defines a small number of extensions to the iterator interface."
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "This package adds a couple of extensions to the standard [iterator interface] https://docs.julialang.org/en/latest/manual/interfaces/#man-interface-iteration-1) in julia."
},

{
    "location": "#isiterable-and-getiterator-1",
    "page": "Readme",
    "title": "isiterable and getiterator",
    "category": "section",
    "text": "The first extension is comprised of the functions isiterable and getiterator. isiterable(x) will return true or false, indicating whether x can be iterated. It is important to note that a true return value does not indicate that one can call the iterate method on x, instead a consumer must call getiterator(x) if isiterable(x) returned true, and can then call iterate on the instance that is returned by getiterator. The proper pattern for consumer code therefore looks like this:if isiterable(x)\n    it = getiterator(x)\n    for i in it\n        # Custom code\n    end\nendThis consumer pattern will work with iterators that don\'t opt into the extensions in this package and with iterators that have opted into the extended interface defined in this package.There are two scenarios when a source might participate in this extended iterator interface.The first scenario is one where a source could not implement a type-stable version of iterate because the primary source type lacks the necessary type information. Such a source can add a method to getiterator that returns an instance of a different type with enough type information for a type stable implementation of the core iterator interface that iterates the elements of the original source.Second, sometimes such a source might not want to implement the iterate method at all for its core type. If that is the case, this source can add a method to isiterable that returns true, even though the source does not have a iterate method. As long as this source still implements the getiterator function, it still complies with the extended iterator contract defined in this package."
},

{
    "location": "#IteratorSize2-1",
    "page": "Readme",
    "title": "IteratorSize2",
    "category": "section",
    "text": "IteratorSize2 extends BaseIteratorSize with an additional return value, namely HasLengthAfterStart(). An iterator consumer that can provide an optimized implementation for iterators that know their length after the first call to the iterate method has, can call IteratorSize2 instead of BaseIteratorSize. The return value will either be one of the possible return values of BaseIteratorSize, or HasLengthAfterStart(). If the return value is HasLengthAfterStart(), the consumer can call length(x state) to obtain the number of elements the iterator will return. Here x is the same value that iterate was called on, and state is the value returned by iterate(x).An iterator that implements IteratorSize2(xMyType) = HasLengthAfterStart() must also implement BaseIteratorSize(xMyType) = BaseSizeUnknown()."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IteratorInterfaceExtensions.HasLengthAfterStartIteratorInterfaceExtensions.IteratorInterfaceExtensionsIteratorInterfaceExtensions.IteratorSize2IteratorInterfaceExtensions.evalIteratorInterfaceExtensions.getiteratorIteratorInterfaceExtensions.includeIteratorInterfaceExtensions.isiterable"
},

]}
