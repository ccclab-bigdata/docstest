var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#RNGPool.jl-1",
    "page": "Readme",
    "title": "RNGPool.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package provides a simple interface for thread-specific random number generators (RNGs).Currently, Threefry4x RNGs are used, as implemented in RandomNumbers.jl.At runtime, a Vector of Threads.nthreads() RNGs is initialized when the package is loaded.Calling getRNG() will return the RNG associated to the thread on which it is called.Calling setRNGs(v::Int64) sets the RNGs so that output is reproducible.Example usage:using RNGPool\n\n# on return, each element of out is the average of many Uniform(0,1) pseudo-random variates\nfunction foo!(out::Vector{Float64}, N::Int64)\n  nt = Threads.nthreads()\n  M::Int64 = div(N, nt)\n  Threads.@threads for i in 1:nt\n    rng::RNG = getRNG()\n    v::Float64 = 0.0\n    for j in 1:M\n      v += rand(rng)\n    end\n    out[i] = v / M\n  end\nend\n\nnt = Threads.nthreads()\nout = Vector{Float64}(undef, nt)\n\nsetRNGs(1)\n\nN0 = 2^25\nfoo!(out, N0)Big Crush Output with 16 threads:$ julia -O3 test/bigCrush.jl\nTesting circular RNG with 16 threads\n20297.402768 seconds (3.13 M allocations: 169.970 MiB, 0.00% gc time)\n\nBig Crush p-values:\n\n0.35024617233125155\n0.8835532763583632\n0.6636497877293779\n0.018903942941190053\n0.5169888091502591\n0.48459348174551337\n0.7209339139632519\n0.4953826520232639\n0.9024402475518911\n0.5\n0.8651926099525509\n0.9561154784011432\n0.8376321650399638\n0.6202341415528604\n1.799269319133724e-5\n0.8859876568914304\n0.22492814670245764\n0.3927173570756824\n0.4520844575203478\n0.8986304417260517\n0.038014481966689814\n(0.21568858056919513, 0.7389715767238474, 0.9076375138182249, 0.5966883110300443)\n(0.2431181574370577, 0.4871669809334896, 0.3231521924042511, 0.9215267021031692)\n(0.9712727839965605, 0.33191575846120747, 0.8321392860558294, 0.576450918419529)\n(0.8079223429884855, 0.29902676017610325, 0.274672277693068, 0.44596300957381135)\n0.6406462673625273\n0.5723208292533664\n0.8517476719247175\n0.6738959447126625\n0.3204715210910115\n0.033925233014120204\n0.8307482626649948\n0.5202223295545486\n0.0730899510030465\n0.9884621513805903\n0.5504918111758579\n0.07592255377356572\n0.8106929224255082\n0.9299569648871202\n0.7816015502299919\n0.6981399845286156\n0.11180741408148176\n0.5692101750490258\n0.6676474222753446\n0.8746415962396613\n(0.5115042482198283, 0.4466981107162864)\n(0.8441064470045998, 0.450098214225219)\n(0.5011236928371351, 0.846882944835641)\n(0.6052083611219846, 0.11989197241692676)\n0.8706050732302925\n0.24992576811155562\n0.7599705315327361\n0.6666798516789317\n0.5865513095444427\n0.18220660197484762\n0.5861954650088912\n0.5164889795925813\n0.06519595125937305\n0.8299875918826629\n0.5325072810883595\n0.36774868494116086\n0.7265016150707939\n0.7021869190099859\n0.5366819723353544\n0.8444332494141247\n0.882916216172351\n0.49723779059378237\n0.2548676909227585\n0.2604060378981502\n0.6764645024999533\n0.9948541696689198\n0.5924658062980863\n0.42134891840784894\n(0.3413158471198531, 0.34416968317789554, 0.2394729304126597, 0.6245575765098257, 0.09818457402629566)\n(0.6650635533444043, 0.24782138623974148, 0.743574533545167, 0.27541332372772076, 0.6128708321231922)\n(0.9821876686695014, 0.0849037720959841, 0.33329997993956706, 0.2298794954495592, 0.5169204798676033)\n(0.5885470974265907, 0.9040681527000856, 0.3897441111991409, 0.22866923396646388, 0.9013466337980678)\n(0.21546156684571005, 0.2389096235593432, 0.5139772080346743, 0.6849063061748559, 0.704148823149277)\n(0.8876023613895775, 0.5401482944911973, 0.07260663105257459, 0.697180881377814, 0.04297879789302261)\n(0.2735042082218486, 0.9303041521766279)\n(0.8966399623254027, 0.39194501288887884)\n0.1560730722289243\n0.22665875528141483\n0.9668336806166385\n0.6597833962007846\n(0.12961526864821815, 0.5)\n(0.4598726205050785, 0.6878130593504515)\n0.9881687651315975\n0.36703506587905493\n0.24463319618891602\n0.7648482035840278\n0.37514384022957814\n0.4620117955709462\n0.4624403232337113\n0.19667608525470504\n0.6965966537122446\n0.33501810021141654\n0.4305745819908624\n0.3792369085087328\n0.2140086341676749\n(0.9753379212091818, 0.1648700050329902)\n(0.3586029601856259, 0.36252843463374806)\n0.6775217740167053\n0.467673260137216\n0.925942247194567\n0.4705768063135961\n\nSmallest p-value = 1.799269319133724e-5"
},

]}
