var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Discreet-1",
    "page": "Readme",
    "title": "Discreet",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Discreet is a small opinionated toolbox to estimate entropy and mutual information from discrete samples. It contains methods to adjust results and correct over- or under-estimations.The code here should work on Julia 0.6. It has minimal unit tests and has received little testing in the wild.g"
},

{
    "location": "#Estimating-entropy-1",
    "page": "Readme",
    "title": "Estimating entropy",
    "category": "section",
    "text": "Discreet uses StatsBase\'s FrequencyWeights and ProbabilityWeights types.using StatsBase: FrequencyWeights, ProbabilityWeights\nusing Discreet\n\ndist = FrequencyWeights([1, 1, 1, 1, 1, 1])\nentropy(dist)  # Naive method: log(6) ≈ 1.792\n\nentropy(dist; method=:CS)  # Chao-Shen correction: ≈ 3.840\n\nentropy(dist; method=:Shrink)  # Shrinkage correction: ≈ 1.792\n\ndist = ProbabilityWeights([.5, .5])\nentropy(dist)  # log(2) ≈ 0.693Discreet can also estimate the entropy of a sample:using Discreet\n\ndata = [\"tomato\", \"apple\", \"apple\", \"banana\", \"tomato\"]\nestimate_entropy(data)  # == entropy(FrequencyWeights([2, 2, 1]))"
},

{
    "location": "#Estimate-mutual-information-1",
    "page": "Readme",
    "title": "Estimate mutual information",
    "category": "section",
    "text": "Discrete provides similar routines to estimate mutual information.using Discreet\n\nlabels_a = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]\nlabels_b = [1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 3, 1, 3, 3, 3, 2, 2]\nmutual_information(labels_a, labels_b)  # Naive method: ≈ 0.410\n\nmutual_information(labels_a, labels_b; method=:CS)  # Chao-Shen correction: ≈ 0.148\n\nmutual_information(labels_a, labels_b; normalize=true)  # Normalized score (between 0 and 1): ≈ 0.382"
},

{
    "location": "autodocs/#Discreet.entropy_cs",
    "page": "Docstrings",
    "title": "Discreet.entropy_cs",
    "category": "function",
    "text": "Chao-Shen (2003) entropy estimator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Discreet.entropy_shrinkage",
    "page": "Docstrings",
    "title": "Discreet.entropy_shrinkage",
    "category": "function",
    "text": "Shrinkage entropy estimator.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Discreet.estimate_entropy",
    "page": "Docstrings",
    "title": "Discreet.estimate_entropy",
    "category": "function",
    "text": "Estimate the entropy of an array using a naive (frequencies-based), Chao-Shen, or shrinkage estimator. Chao-Shen and shrinkage estimators reduce the bias for small samples and a large number of classes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Discreet.DiscreetDiscreet.entropyDiscreet.entropy_csDiscreet.entropy_naiveDiscreet.entropy_shrinkageDiscreet.estimate_entropyDiscreet.estimate_joint_entropyDiscreet.evalDiscreet.includeDiscreet.mutual_informationDiscreet.mutual_information_contingency"
},

]}
