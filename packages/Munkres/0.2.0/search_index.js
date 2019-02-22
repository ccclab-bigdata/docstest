var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Munkres-1",
    "page": "Readme",
    "title": "Munkres",
    "category": "section",
    "text": "Julia implementation of the Hungarian algorithm for the optimal assignment problem: Given N workers and M jobs, find a minimal cost assignment of one job to each worker.(Image: Build Status)"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "A synthetic example with a simple solution.# Each worker-job combination has a random cost\ncost = rand(4,4)\n# However, each worker can do a certain job with zero cost\nbest_jobs = [3,4,1,2]\nfor (i,j) in enumerate(best_jobs); cost[i,j] = 0; end\n\n# Compute optimal assignment given the cost\ncomputed_best_jobs = munkres(cost)\n\n@assert best_jobs == computed_best_jobsExample output:julia> cost = rand(4,4)\n4x4 Array{Float64,2}:\n 0.455632  0.0972016  0.807122  0.806295\n 0.933324  0.280094   0.261727  0.235289\n 0.53323   0.408037   0.935853  0.62243\n 0.08281   0.147279   0.649129  0.910296\n\njulia> best_jobs = [3,4,1,2]\n4-element Array{Int64,1}:\n 3\n 4\n 1\n 2\n\njulia> for (i,j) in enumerate(best_jobs); cost[i,j] = 0; end\n\njulia> computed_best_jobs = munkres(cost)\n4-element Array{Int64,1}:\n 3\n 4\n 1\n 2\n"
},

{
    "location": "autodocs/#Munkres.munkres",
    "page": "Docstrings",
    "title": "Munkres.munkres",
    "category": "function",
    "text": "Munkres (Hungarian) Algorithm for optimal assignment, i.e.  given an NxM cost matrix for assigning N workers to M jobs, what is the optimal allocation of tasks to workers such that one one task is assigned to one worker.\n\nInput\n\ncost_matrix - an NxM real valued matrix of the cost of assigning job m to worker N\n\nOutput\n\np - A vector of length N of assignments, where j = p[i] assigns job j to worker i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Munkres.LocationMunkres.ModifiedCostMunkres.MunkresMunkres.PrimeMarkMunkres.StarMarkMunkres.augment_path!Munkres.erase_primes!Munkres.evalMunkres.find_prime_in_rowMunkres.find_smallest_uncoveredMunkres.find_star_in_columnMunkres.includeMunkres.iszeroMunkres.munkresMunkres.step_five!Munkres.step_four!Munkres.step_one!Munkres.step_six!Munkres.step_three!Munkres.step_two!Munkres.valid"
},

]}
