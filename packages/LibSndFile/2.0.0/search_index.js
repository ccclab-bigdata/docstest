var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LibSndFile.jl-1",
    "page": "Readme",
    "title": "LibSndFile.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)LibSndFile.jl is a wrapper for libsndfile, and supports a wide variety of file and sample formats. The package uses the FileIO load and save interface to automatically figure out the file type of the file to be opened, and the file contents are represented as a SampleBuf. For streaming I/O we support FileIO\'s loadstreaming and savestreaming functions as well. The results are represented as SampleSource (for reading), or SampleSink (for writing) subtypes. These buffer and stream types are defined in the SampledSignals package.Note that the load/save/etc. interface is exported from FileIO, and LibSndFile registers itself when the loaded, so you should bring in both packages. LibSndFile doesn\'t export any of its own names.julia> using FileIO: load, save, loadstreaming, savestreaming\njulia> import LibSndFile\njulia> load(\"audiofile.wav\")\n2938384-frame, 1-channel SampleBuf{FixedPointNumbers.Fixed{Int16,15}, 2}\n66.63002267573697s sampled at 44100.0Hz\n▆▅▆▆▆▆▆▅▆▆▆▇▇▇▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▇▆▆▆▆▆▇▆▇▆▇▆▆▆▅▆▆▆▆▆▆▅▆▆▅▆▅▆▆▇▇▇▇▆▆▆▆▆▆▇▆▆▆▆▆▆▆▇▆▇▂"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Read ogg file, write first 1024 samples of the first channel to new wav filex = load(\"myfile.ogg\")\nsave(\"myfile_short.wav\", x[1:1024])Read file, write the first second of all channels to a new filex = load(\"myfile.ogg\")\nsave(\"myfile_short.wav\", x[0s..1s, :])Read stereo file, write mono mixx = load(\"myfile.wav\")\nsave(\"myfile_mono.wav\", x[:, 1] + x[:, 2])Plot the left channelx = load(\"myfile.wav\")\nplot(x[:, 1]) # plots with samples on the x axis\nplot(domain(x), x[:, 1]) # plots with time on the x axisPlot the spectrum of the left channelx = load(\"myfile.wav\")\nf = fft(x) # returns a FrequencySampleBuf\nplot(domain(x), x[:, 1]) # plots with frequency on the x axisLoad a long file as a stream and plot the left channel from 2s to 3ss = loadstream(\"myfile.ogg\")\nx = read(s, 4s)[2s..3s, 1]\nclose(s)\nplot(domain(x), x)To handle closing the file automatically (including in the case of unexpected exceptions), we support the do block syntaxdata = loadstream(\"data/never_gonna_give_you_up.ogg\") do s\n    readall(f)\nend"
},

{
    "location": "#Supported-Formats-1",
    "page": "Readme",
    "title": "Supported Formats",
    "category": "section",
    "text": "See the libsndfile homepage for details, but in summary it supports reading and writing:Microsoft WAV\nOgg/Vorbis\nFLAC\nSGI / Apple AIFF / AIFC\nRAW\nSound Designer II SD2\nSun / DEC / NeXT AU / SND\nParis Audio File (PAF)\nCommodore Amiga IFF / SVX\nSphere Nist WAV\nIRCAM SF\nCreative VOC\nSoundforge W64\nGNU Octave 2.0 MAT4\nGNU Octave 2.1 MAT5\nPortable Voice Format PVF\nFasttracker 2 XI\nHMM Tool Kit HTK\nApple CAFNote not all file formats support all samplerates and bit depths. Currently LibSndFile.jl supports WAV, Ogg Vorbis, and FLAC files. Please file an issue if support for other formats would be useful."
},

{
    "location": "#Related-Packages-1",
    "page": "Readme",
    "title": "Related Packages",
    "category": "section",
    "text": "SampledSignals.jl provides the basic stream and buffer types used by this package.\nMP3.jl supports reading and writing MP3 files\nWAV.jl is a pure-julia package supporting the WAV file format.\nOpus.jl wraps libopus and allows you to read and write Opus audio.\nPortAudio.jl can be used to interface with your sound card to record and play audio."
},

{
    "location": "#A-Note-on-Licensing-1",
    "page": "Readme",
    "title": "A Note on Licensing",
    "category": "section",
    "text": "libsndfile is licensed under the LGPL, which is very permissive providing that libsndfile is dynamically linked. LibSndFile.jl is licensed under the MIT license, allowing you to statically compile the wrapper into your Julia application. Remember that you must still abide by the terms of the libsndfile license when using this wrapper, in terms of whether libsndfile is statically or dynamically linked.Note that this is to the best of my understanding, but I am not an attorney and this should not be considered legal advice."
},

{
    "location": "autodocs/#LibSndFile.fmt_to_type",
    "page": "Docstrings",
    "title": "LibSndFile.fmt_to_type",
    "category": "function",
    "text": "Take a LibSndFile format code and return a suitable sample type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSndFile.inferlen",
    "page": "Docstrings",
    "title": "LibSndFile.inferlen",
    "category": "function",
    "text": "inferlen(io)\n\nTry to infer the length of io in bytes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSndFile.sf_readf",
    "page": "Docstrings",
    "title": "LibSndFile.sf_readf",
    "category": "function",
    "text": "Wrappers for the family of sfreadf* functions, which read the given number of frames into the given array. Returns the number of frames read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSndFile.sf_writef",
    "page": "Docstrings",
    "title": "LibSndFile.sf_writef",
    "category": "function",
    "text": "Wrappers for the family of sfwritef* functions, which write the given number of frames into the given array. Returns the number of frames written.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "LibSndFile.@checked_libLibSndFile.LengthIOLibSndFile.LibSndFileLibSndFile.SFM_READLibSndFile.SFM_WRITELibSndFile.SF_ENDIAN_BIGLibSndFile.SF_ENDIAN_CPULibSndFile.SF_ENDIAN_FILELibSndFile.SF_ENDIAN_LITTLELibSndFile.SF_FORMAT_AIFFLibSndFile.SF_FORMAT_ALAWLibSndFile.SF_FORMAT_AULibSndFile.SF_FORMAT_AVRLibSndFile.SF_FORMAT_CAFLibSndFile.SF_FORMAT_DOUBLELibSndFile.SF_FORMAT_DPCM_16LibSndFile.SF_FORMAT_DPCM_8LibSndFile.SF_FORMAT_DWVW_12LibSndFile.SF_FORMAT_DWVW_16LibSndFile.SF_FORMAT_DWVW_24LibSndFile.SF_FORMAT_DWVW_NLibSndFile.SF_FORMAT_ENDMASKLibSndFile.SF_FORMAT_FLACLibSndFile.SF_FORMAT_FLOATLibSndFile.SF_FORMAT_G721_32LibSndFile.SF_FORMAT_G723_24LibSndFile.SF_FORMAT_G723_40LibSndFile.SF_FORMAT_GSM610LibSndFile.SF_FORMAT_HTKLibSndFile.SF_FORMAT_IMA_ADPCMLibSndFile.SF_FORMAT_IRCAMLibSndFile.SF_FORMAT_MAT4LibSndFile.SF_FORMAT_MAT5LibSndFile.SF_FORMAT_MPC2KLibSndFile.SF_FORMAT_MS_ADPCMLibSndFile.SF_FORMAT_NISTLibSndFile.SF_FORMAT_OGGLibSndFile.SF_FORMAT_PAFLibSndFile.SF_FORMAT_PCM_16LibSndFile.SF_FORMAT_PCM_24LibSndFile.SF_FORMAT_PCM_32LibSndFile.SF_FORMAT_PCM_S8LibSndFile.SF_FORMAT_PCM_U8LibSndFile.SF_FORMAT_PVFLibSndFile.SF_FORMAT_RAWLibSndFile.SF_FORMAT_RF64LibSndFile.SF_FORMAT_SD2LibSndFile.SF_FORMAT_SDSLibSndFile.SF_FORMAT_SUBMASKLibSndFile.SF_FORMAT_SVXLibSndFile.SF_FORMAT_TYPEMASKLibSndFile.SF_FORMAT_ULAWLibSndFile.SF_FORMAT_VOCLibSndFile.SF_FORMAT_VORBISLibSndFile.SF_FORMAT_VOX_ADPCMLibSndFile.SF_FORMAT_W64LibSndFile.SF_FORMAT_WAVLibSndFile.SF_FORMAT_WAVEXLibSndFile.SF_FORMAT_WVELibSndFile.SF_FORMAT_XILibSndFile.SF_INFOLibSndFile.SF_SEEK_CURLibSndFile.SF_SEEK_ENDLibSndFile.SF_SEEK_SETLibSndFile.SF_VIRTUAL_IOLibSndFile.SndFileSinkLibSndFile.SndFileSourceLibSndFile.SndFileStreamLibSndFile.__init__LibSndFile.depsjlLibSndFile.evalLibSndFile.fmt_to_typeLibSndFile.formatcodeLibSndFile.includeLibSndFile.inferlenLibSndFile.libsndfileLibSndFile.loadLibSndFile.load_helperLibSndFile.loadstreamingLibSndFile.saveLibSndFile.save_helperLibSndFile.savestreamingLibSndFile.sf_closeLibSndFile.sf_count_tLibSndFile.sf_openLibSndFile.sf_readfLibSndFile.sf_strerrorLibSndFile.sf_writefLibSndFile.subformatcodeLibSndFile.supported_formatsLibSndFile.virtual_get_filelenLibSndFile.virtual_readLibSndFile.virtual_seekLibSndFile.virtual_tellLibSndFile.virtual_write"
},

]}
