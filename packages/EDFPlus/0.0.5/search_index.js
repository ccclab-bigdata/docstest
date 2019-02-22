var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#EDFPlus.jl-1",
    "page": "Readme",
    "title": "EDFPlus.jl",
    "category": "section",
    "text": "(Image: Build status) (Image: Build Status) (Image: Coverage Status)Julia for handling BDF+ and EDF+ EEG and similar signal data files.Heavily influenced by the C EEG library edflib.License: 2-clause BSD.Installation:To install from a Julia REPL command line session:using Pkg\n Pkg.add(PackageSpec(url=\"http://github.com/wherrera10/EDFPlus.jl\"))Note that the test files include a 23 mb test file. You may need to allow extra time for that to download when installing."
},

{
    "location": "autodocs/#EDFPlus.Annotation",
    "page": "Docstrings",
    "title": "EDFPlus.Annotation",
    "category": "type",
    "text": "mutable struct Annotation\n\nThese are text strings denoting a time, optionally duration, and a list of notes about the signal at that particular time in the recording. The first onset time of the annotation channel gives a fractional second offset adjustment of the start time of that record, which is specified in whole seconds in the header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.BEDFPlus",
    "page": "Docstrings",
    "title": "EDFPlus.BEDFPlus",
    "category": "type",
    "text": "mutable struct BEDFPlus\n\nData struct for EDF, EDF+, BDF, and BDF+ EEG type signal files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.ChannelParam",
    "page": "Docstrings",
    "title": "EDFPlus.ChannelParam",
    "category": "type",
    "text": "mutable struct ChannelParam\n\nParameters for each channel in the EEG record.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.DataFormat",
    "page": "Docstrings",
    "title": "EDFPlus.DataFormat",
    "category": "type",
    "text": "DataFormat\n\nenum for types this package handles. Current format for a potential translation is also /same/.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.FileStatus",
    "page": "Docstrings",
    "title": "EDFPlus.FileStatus",
    "category": "type",
    "text": "FileStatus\n\nenum for type or state of file: type of data detected, whether any errors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.Int24",
    "page": "Docstrings",
    "title": "EDFPlus.Int24",
    "category": "type",
    "text": "type Int24\n\n24-bit integer routines for BDF format signal data.\n\nBDF and BDF+ files use 24 bits per data signal point. The module caches these after reading as Int32 to fit LLVM CPU registers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.addannotation!",
    "page": "Docstrings",
    "title": "EDFPlus.addannotation!",
    "category": "function",
    "text": "addannotation!(edfh, onset, duration, description)\n\nAdd an annotation at the given onset timepoint IF there is room Note the description arg is a text string, not an array argument here\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.annotation_epoch_iterator",
    "page": "Docstrings",
    "title": "EDFPlus.annotation_epoch_iterator",
    "category": "function",
    "text": "annotation_epoch_iterator(edfh, epochsecs; startsec, endsec)\n\nReturn an iterator for a group of annotations for a given epoch as in epoch_iterator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.annotationtoTAL",
    "page": "Docstrings",
    "title": "EDFPlus.annotationtoTAL",
    "category": "function",
    "text": "annotationtoTAL(ann)\n\nCreate a TAL (timestamped annotation list) text entry out of an annotation\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.bytesperdatapoint",
    "page": "Docstrings",
    "title": "EDFPlus.bytesperdatapoint",
    "category": "function",
    "text": "bytesperdatapoint(edfh)\n\nReturn how many bytes used per data point entry: 2 for EDF (16-bit), 3 for BDF (24-bit) data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.channeltimesegment",
    "page": "Docstrings",
    "title": "EDFPlus.channeltimesegment",
    "category": "function",
    "text": "channeltimesegment(edfh, channel, startsec, endsec, physical)\n\nget the channel\'s data between the time points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.checkfile!",
    "page": "Docstrings",
    "title": "EDFPlus.checkfile!",
    "category": "function",
    "text": "checkfile!(edfh)\n\nHelper function for loadfile and writefile!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.closefile!",
    "page": "Docstrings",
    "title": "EDFPlus.closefile!",
    "category": "function",
    "text": "closefile!(edfh)\n\nClose the file opened by loadfile and loaded to the BEDFPlus struct Releases memory from read data in edfh\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.dash2space",
    "page": "Docstrings",
    "title": "EDFPlus.dash2space",
    "category": "function",
    "text": "replace underslashes in string with spaces \n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.datapointinterval",
    "page": "Docstrings",
    "title": "EDFPlus.datapointinterval",
    "category": "function",
    "text": "datapointinterval(edfh, channel)\n\nTime interval in fractions of a second between individual signal data points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.digitalchanneldata",
    "page": "Docstrings",
    "title": "EDFPlus.digitalchanneldata",
    "category": "function",
    "text": "digitalchanneldata(edfh, channelnumber)\n\nGet a single digital channel of data in its entirety.\n\nArguments:\n\nedfh          the BEDFPlus struct\nchannelnumber the channel number in the records\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.dummyacquire",
    "page": "Docstrings",
    "title": "EDFPlus.dummyacquire",
    "category": "function",
    "text": "dummyacquire(edfh)\n\nDummy function for call in writefile! for optional acquire function If using package for data acquisition will need to custom write the acquire function for your calls to writefile!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.epoch_iterator",
    "page": "Docstrings",
    "title": "EDFPlus.epoch_iterator",
    "category": "function",
    "text": "epoch_iterator(edfh, epochsecs; channels, startsec, endsec, physical)\n\nMake an iterator for EEG epochs of a given duration between start and stop times.\n\nRequired arguments\n\nedfh BEDFPlus struct\nepochsecs second duration of each epoch\n\nOptional arguments\n\nchannels List of channel numbers for data, defaults to all signal channels\nstartsec Starting position from 0 at start of file, defaults to file start\nendsec Ending position in seconds from start of file, defaults to file end\nphysical Whether to return data as translated to the physical units, defaults to true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.epochmarkers",
    "page": "Docstrings",
    "title": "EDFPlus.epochmarkers",
    "category": "function",
    "text": "epochmarkers(edfh, secs)\n\nGet a set of (start, stop) positional markers for epochs (sequential windows) given an epoch duration in seconds\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.highpassfilter",
    "page": "Docstrings",
    "title": "EDFPlus.highpassfilter",
    "category": "function",
    "text": "highpassfilter(signals, fs, cutoff=1.0, order=4)\n\nApply high pass filter to signals, return filtered data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.latin_dict",
    "page": "Docstrings",
    "title": "EDFPlus.latin_dict",
    "category": "constant",
    "text": "map table for translation of latin extended ascii to plain ascii chars \n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.latintoascii",
    "page": "Docstrings",
    "title": "EDFPlus.latintoascii",
    "category": "function",
    "text": "latintoascii(str)\n\nHelper function for writefile! related functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.loadfile",
    "page": "Docstrings",
    "title": "EDFPlus.loadfile",
    "category": "function",
    "text": "loadfile(path::String, read_annotations=true)\n\nLoad a BDF+ or EDF+ type file. Takes a pathname. Will ignore annotations if second argument is set false. Returns a BEDFPlus structure including header and data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.lowpassfilter",
    "page": "Docstrings",
    "title": "EDFPlus.lowpassfilter",
    "category": "function",
    "text": "lowpassfilter(signals, fs, cutoff=25.0, order=4)\n\nApply low pass filter to signals, return filtered data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.multichanneltimesegment",
    "page": "Docstrings",
    "title": "EDFPlus.multichanneltimesegment",
    "category": "function",
    "text": "multichanneltimesegment(edfh, chanlist, startsec, endsec, physical)\n\nGet an multichannel array of lists of datapoints over time segment NB: best if all datapoint signal rates are the same\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.notchfilter",
    "page": "Docstrings",
    "title": "EDFPlus.notchfilter",
    "category": "function",
    "text": "notchfilter(signals, fs, notchfreq=60, q = 35)\n\nNotch filter signals in array signals, return filtered signals\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.physicalchanneldata",
    "page": "Docstrings",
    "title": "EDFPlus.physicalchanneldata",
    "category": "function",
    "text": "physicalchanneldata(edfh, channelnumber)\n\nGet a single data channel in its entirely, in the physical units stated in the header\n\nArguments\n\nedfh          the BEDFPlus struct\nchannelnumber the channel number in the records– a channel in the mapped_signals list\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.readannotations!",
    "page": "Docstrings",
    "title": "EDFPlus.readannotations!",
    "category": "function",
    "text": "readannotations!(edfh)\n\nHelper function for loadfile\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.readdata!",
    "page": "Docstrings",
    "title": "EDFPlus.readdata!",
    "category": "function",
    "text": "readdata!(edfh)\n\nHelper function for loadfile, reads signal data into the BEDFPlus struct\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.recordindexat",
    "page": "Docstrings",
    "title": "EDFPlus.recordindexat",
    "category": "function",
    "text": "recordindexat(edfh, secondsafterstart)\n\nIndex of the record point at or closest just before a given time from recording start Translates a values in seconds to a position in the signal data matrix, returns that record\'s position\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.recordslice",
    "page": "Docstrings",
    "title": "EDFPlus.recordslice",
    "category": "function",
    "text": "recordslice(edfh, startpos, endpos)\n\nGet a slice of the data in the recording from one data entry position to another\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.samplerate",
    "page": "Docstrings",
    "title": "EDFPlus.samplerate",
    "category": "function",
    "text": "samplerate(edfh, channel)\n\nGet sample (sampling) rate (fs) on the channel in sec^-1 units\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.signalat",
    "page": "Docstrings",
    "title": "EDFPlus.signalat",
    "category": "function",
    "text": "signalat(edfh, secondsafter, channel)\n\nGet the position in the signal data of the data point at or closest after a given time from recording start. Translates a value in seconds to a position in the signal channel matrix, returns that signal data point\'s 2D position as list\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.signaldata",
    "page": "Docstrings",
    "title": "EDFPlus.signaldata",
    "category": "function",
    "text": "signaldata(edfh)\n\nReturn which BEDFPlus variable holds the signal data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.signalindices",
    "page": "Docstrings",
    "title": "EDFPlus.signalindices",
    "category": "function",
    "text": "signalindices(edfh, channelnumber)\n\nGet a pair of indices of a channel\'s bytes within each of the data records\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.translate16to24bits!",
    "page": "Docstrings",
    "title": "EDFPlus.translate16to24bits!",
    "category": "function",
    "text": "translate16to24bits!(edfh)\n\nTranslate 16 bit data to 32-bit width, for change to 24-bit data for writefile!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.translate24to16bits!",
    "page": "Docstrings",
    "title": "EDFPlus.translate24to16bits!",
    "category": "function",
    "text": "translate24to16bits!(edfh)\n\nTranslate data in 24-bit BDF to 16-bit EDF format Helper function for writefile!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.trim",
    "page": "Docstrings",
    "title": "EDFPlus.trim",
    "category": "function",
    "text": "trim(str)\n\ntrim whitespace fore and aft, as in trim in java etc\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.trimrightzeros",
    "page": "Docstrings",
    "title": "EDFPlus.trimrightzeros",
    "category": "function",
    "text": "trimrightzeros compact number string by trimming nonsignificant decimal places/point when not zero \n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.version",
    "page": "Docstrings",
    "title": "EDFPlus.version",
    "category": "function",
    "text": "static function to state version of module \n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.writeBDFrecords!",
    "page": "Docstrings",
    "title": "EDFPlus.writeBDFrecords!",
    "category": "function",
    "text": "writeBDFrecords!(edfh, fh)\n\nWrite an BEDFPlus format file Helper file for writefile!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.writeBDFsignalchannel",
    "page": "Docstrings",
    "title": "EDFPlus.writeBDFsignalchannel",
    "category": "function",
    "text": "writeBDFsignalchannel(edfh,fh, record, channel)\n\nHelper function for writefile! write a BDF record\'s worth of a signal channel at given record and channel number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.writeEDFrecords!",
    "page": "Docstrings",
    "title": "EDFPlus.writeEDFrecords!",
    "category": "function",
    "text": "writeEDFrecords!(edfh, fh)\n\nHelper function for writefile! Write a record\'s worth of all channels of a given record\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.writeEDFsignalchannel",
    "page": "Docstrings",
    "title": "EDFPlus.writeEDFsignalchannel",
    "category": "function",
    "text": "writeEDFsignalchannel(edfh, fh, record, channel)\n\nHelper function for writefile! write a record\'s worth of a signal channel at given record and channel number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.writefile!",
    "page": "Docstrings",
    "title": "EDFPlus.writefile!",
    "category": "function",
    "text": "writefile!(edfh, newpath; acquire=dummyacquire, sigformat=same)\n\nWrite to data in the edfh struct to the file indicated by newpath Returns the file handle of the file written, opened for reading\n\nNOTE: The header needs to be completely specified at function start except for the final number of records, which will be updated after all data records are written. For a system that is recording the data as it is written, the acquire(edfh) function should write the data according the the header parameters. NB: iff the function converts from BDF to EDF or EDF to BDF, the edfh struct is changed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.writeheader",
    "page": "Docstrings",
    "title": "EDFPlus.writeheader",
    "category": "function",
    "text": "writeheader(edfh, fh)\n\nHelper function for writefile!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#EDFPlus.writeleftjust",
    "page": "Docstrings",
    "title": "EDFPlus.writeleftjust",
    "category": "function",
    "text": "writeleftjust(fh, x, len, fillchar=\' \')\n\nWrite a stringified object to a file in the leftmost portion of chars written, filling with fillchar to len length as needed, truncate if too long for field\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "EDFPlus.AnnotationEDFPlus.BDFEDFPlus.BDFPLUSEDFPlus.BEDFPlusEDFPlus.CLOSEDEDFPlus.ChannelParamEDFPlus.DataFormatEDFPlus.EDFEDFPlus.EDFPLUSEDFPlus.EDFPLUS_VERSIONEDFPlus.EDFPlusEDFPlus.FORMAT_ERROREDFPlus.FileStatusEDFPlus.Int24EDFPlus.MAX_ANNOTATION_LENGTHEDFPlus.MAX_ANNOTATION_TEXT_LENGTHEDFPlus.MAX_CHANNELSEDFPlus.MIN_ANNOTATION_CHANNEL_LENGTHEDFPlus.READ_ERROREDFPlus.addannotation!EDFPlus.annotation_epoch_iteratorEDFPlus.annotationtoTALEDFPlus.bdfEDFPlus.bdfplusEDFPlus.bytesperdatapointEDFPlus.channeltimesegmentEDFPlus.checkfile!EDFPlus.closefile!EDFPlus.dash2spaceEDFPlus.datapointintervalEDFPlus.digitalchanneldataEDFPlus.dummyacquireEDFPlus.edfEDFPlus.edfplusEDFPlus.epoch_iteratorEDFPlus.epochmarkersEDFPlus.evalEDFPlus.highpassfilterEDFPlus.includeEDFPlus.latin_dictEDFPlus.latintoasciiEDFPlus.loadfileEDFPlus.lowpassfilterEDFPlus.multichanneltimesegmentEDFPlus.notchfilterEDFPlus.physicalchanneldataEDFPlus.readannotations!EDFPlus.readdata!EDFPlus.recordindexatEDFPlus.recordsliceEDFPlus.sameEDFPlus.samplerateEDFPlus.signalatEDFPlus.signaldataEDFPlus.signalindicesEDFPlus.translate16to24bits!EDFPlus.translate24to16bits!EDFPlus.trimEDFPlus.trimrightzerosEDFPlus.versionEDFPlus.writeBDFrecords!EDFPlus.writeBDFsignalchannelEDFPlus.writeEDFrecords!EDFPlus.writeEDFsignalchannelEDFPlus.writefile!EDFPlus.writeheaderEDFPlus.writei24EDFPlus.writeleftjust"
},

]}
