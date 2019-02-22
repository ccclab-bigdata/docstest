var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#TensorFlow.jl-1",
    "page": "Home",
    "title": "TensorFlow.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Home",
    "title": "Introduction",
    "category": "section",
    "text": "TensorFlow.jl is a wrapper around TensorFlow, a powerful library from Google for implementing state-of-the-art deep-learning models. See the intro tutorial from Google to get a sense of how TensorFlow works - TensorFlow.jl has a similar API to the Python TensorFlow API described in the tutorials. Then see the Julia equivalent of that tutorial."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Install viaPkg.add(\"TensorFlow\")To enable support for GPU usage on Linux, set an environment variable TF_USE_GPU to \"1\" and then rebuild the package. egENV[\"TF_USE_GPU\"] = \"1\"\nPkg.build(\"TensorFlow\")CUDA 8.0 and cudnn are required for GPU usage. For GPU support on Mac OS X, see documentation on building TensorFlow from source."
},

{
    "location": "#Comparison-to-Python-API-1",
    "page": "Home",
    "title": "Comparison to Python API",
    "category": "section",
    "text": "The wrapper sticks closely to the Python API and so should be easy to pick up for anyone used to the Python API to pick up. Most function names and arguments are semantically the same.Some differences:When the Python API uses an object-oriented notation like session.run(node), the Julia version would be run(session, node).\nWhen the Python API asks for a TensorFlow type such as TensorFloat.float32, instead pass in a native Julia type like Float32.\nMany basic Julia mathematical functions are extended to take a TensorFlow node and return another node representing the delayed execution of that function. For example, sqrt(constant(4.0)) will return a Operation which, when evaluated, returns 2.0."
},

{
    "location": "#What-functionality-of-TensorFlow-is-exposed-1",
    "page": "Home",
    "title": "What functionality of TensorFlow is exposed",
    "category": "section",
    "text": "Currently, a large fraction of the computation graph-building functionality is present. This includesAll basic unary and binary mathematical functions, such as sqrt, * (scalar and matrix), etc.\nThe most frequently used neural network operations, including convolution, recurrent neural networks with GRU cells, and dropout.\nNeural network trainers, such as AdamOptimizer.\nBasic image-loading and resizing operations\nControl flow operations (while loops, etc)\nPyBoard graph visualizationCurrently not wrapped, but planned for the near future:Distributed graph execution"
},

{
    "location": "#Limitations-1",
    "page": "Home",
    "title": "Limitations",
    "category": "section",
    "text": "Since the TensorFlow API is so large, not everything is currently wrapped. If you come across TensorFlow functionality provided by the Python API not available in the Julia API, please file an issue (or even better, submit a pull request). Additionally:The Python variable checkpointer and Julia checkpointer use different formats for the checkpoint file, since the Python format is proprietary. The TensorFlow developers have stated that they eventually settle on a format and document it, at which point Julia and Python-trained models can share parameters."
},

{
    "location": "tutorial/#",
    "page": "MNIST tutorial",
    "title": "MNIST tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "tutorial/#MNIST-tutorial-1",
    "page": "MNIST tutorial",
    "title": "MNIST tutorial",
    "category": "section",
    "text": "This tutorial is strongly based on the official TensorFlow MNIST tutorial. We will classify MNIST digits, at first using simple logistic regression and then with a deep convolutional model.Read through the official tutorial! Only the differences from the Python version are documented here."
},

{
    "location": "tutorial/#Load-MNIST-data-1",
    "page": "MNIST tutorial",
    "title": "Load MNIST data",
    "category": "section",
    "text": "The DataLoader API provided in \"examples/mnist_loader.jl\" has some simple code for loading the MNIST dataset, based on the MNIST.jl package.include(Pkg.dir(\"TensorFlow\", \"examples\", \"mnist_loader.jl\"))\nloader = DataLoader()"
},

{
    "location": "tutorial/#Start-TensorFlow-session-1",
    "page": "MNIST tutorial",
    "title": "Start TensorFlow session",
    "category": "section",
    "text": "using TensorFlow\nsess = Session()"
},

{
    "location": "tutorial/#Building-a-softmax-regression-model-1",
    "page": "MNIST tutorial",
    "title": "Building a softmax regression model",
    "category": "section",
    "text": ""
},

{
    "location": "tutorial/#Placeholders-1",
    "page": "MNIST tutorial",
    "title": "Placeholders",
    "category": "section",
    "text": "x = placeholder(Float32)\ny_ = placeholder(Float32)"
},

{
    "location": "tutorial/#Variables-1",
    "page": "MNIST tutorial",
    "title": "Variables",
    "category": "section",
    "text": "W = Variable(zeros(Float32, 784, 10))\nb = Variable(zeros(Float32, 10))\n\nrun(sess, global_variables_initializer())"
},

{
    "location": "tutorial/#Predicted-Class-and-Loss-Function-1",
    "page": "MNIST tutorial",
    "title": "Predicted Class and Loss Function",
    "category": "section",
    "text": "y = nn.softmax(x*W + b)\ncross_entropy = reduce_mean(-reduce_sum(y_ .* log(y), axis=[2]))Note several differences from the Python version of the tutorial:Python uses tf.matmul for matrix multiplication and * for element-wise multiplication of tensors in the computation graph. Julia uses * for matrix multiplication and .* for element-wise multiplication.\nThe reduction index for the loss term is 1 in the Python version, but the Julia API assumes 1-based indexing to be consistent with the rest of Julia and so 2 is used."
},

{
    "location": "tutorial/#Train-the-model-1",
    "page": "MNIST tutorial",
    "title": "Train the model",
    "category": "section",
    "text": "train_step = train.minimize(train.GradientDescentOptimizer(.00001), cross_entropy)\nfor i in 1:1000\n    batch = next_batch(loader, 100)\n    run(sess, train_step, Dict(x=>batch[1], y_=>batch[2]))\nend"
},

{
    "location": "tutorial/#Evaluate-the-model-1",
    "page": "MNIST tutorial",
    "title": "Evaluate the model",
    "category": "section",
    "text": "correct_prediction = argmax(y, 2) .== argmax(y_, 2)\naccuracy=reduce_mean(cast(correct_prediction, Float32))\ntestx, testy = load_test_set()\n\nprintln(run(sess, accuracy, Dict(x=>testx, y_=>testy)))"
},

{
    "location": "tutorial/#Build-a-multi-layer-convolutional-network-1",
    "page": "MNIST tutorial",
    "title": "Build a multi-layer convolutional network",
    "category": "section",
    "text": "There are no significant differences from the Python version, so the entire code is presented here:# using TensorFlow\nusing Distributions\ninclude(\"mnist_loader.jl\")\n\nloader = DataLoader()\n\nsession = Session(Graph())\n\nfunction weight_variable(shape)\n    initial = map(Float32, rand(Normal(0, .001), shape...))\n    return Variable(initial)\nend\n\nfunction bias_variable(shape)\n    initial = fill(Float32(.1), shape...)\n    return Variable(initial)\nend\n\nfunction conv2d(x, W)\n    nn.conv2d(x, W, [1, 1, 1, 1], \"SAME\")\nend\n\nfunction max_pool_2x2(x)\n    nn.max_pool(x, [1, 2, 2, 1], [1, 2, 2, 1], \"SAME\")\nend\n\nx = placeholder(Float32)\ny_ = placeholder(Float32)\n\nW_conv1 = weight_variable([5, 5, 1, 32])\nb_conv1 = bias_variable([32])\n\nx_image = reshape(x, [-1, 28, 28, 1])\n\nh_conv1 = nn.relu(conv2d(x_image, W_conv1) + b_conv1)\nh_pool1 = max_pool_2x2(h_conv1)\n\nW_conv2 = weight_variable([5, 5, 32, 64])\nb_conv2 = bias_variable([64])\n\nh_conv2 = nn.relu(conv2d(h_pool1, W_conv2) + b_conv2)\nh_pool2 = max_pool_2x2(h_conv2)\n\nW_fc1 = weight_variable([7*7*64, 1024])\nb_fc1 = bias_variable([1024])\n\nh_pool2_flat = reshape(h_pool2, [-1, 7*7*64])\nh_fc1 = nn.relu(h_pool2_flat * W_fc1 + b_fc1)\n\nkeep_prob = placeholder(Float32)\nh_fc1_drop = nn.dropout(h_fc1, keep_prob)\n\nW_fc2 = weight_variable([1024, 10])\nb_fc2 = bias_variable([10])\n\ny_conv = nn.softmax(h_fc1_drop * W_fc2 + b_fc2)\n\ncross_entropy = reduce_mean(-reduce_sum(y_.*log(y_conv), axis=[2]))\n\ntrain_step = train.minimize(train.AdamOptimizer(1e-4), cross_entropy)\n\ncorrect_prediction = argmax(y_conv, 2) .== argmax(y_, 2)\n\naccuracy = reduce_mean(cast(correct_prediction, Float32))\n\nrun(session, global_variables_initializer())\n\nfor i in 1:1000\n    batch = next_batch(loader, 50)\n    if i%100 == 1\n        train_accuracy = run(session, accuracy, Dict(x=>batch[1], y_=>batch[2], keep_prob=>1.0))\n        @info(\"step $i, training accuracy $train_accuracy\")\n    end\n    run(session, train_step, Dict(x=>batch[1], y_=>batch[2], keep_prob=>.5))\nend\n\ntestx, testy = load_test_set()\ntest_accuracy = run(session, accuracy, Dict(x=>testx, y_=>testy, keep_prob=>1.0))\n@info(\"test accuracy $test_accuracy\")"
},

{
    "location": "visualization/#",
    "page": "Visualizing with Tensorboard",
    "title": "Visualizing with Tensorboard",
    "category": "page",
    "text": ""
},

{
    "location": "visualization/#Visualizing-learning-with-Tensorboard-1",
    "page": "Visualizing with Tensorboard",
    "title": "Visualizing learning with Tensorboard",
    "category": "section",
    "text": "You can visualize your graph structure and various learning-related statistics using Google\'s Tensorboard tool. Read its documentation to get a sense of how it works.Write out summary statistics to a file using the summary.FileWriter type, which works in the same way as the Python version.Generate the summaries using the summary operations, documented in the reference. They incldue summary.scalar, summary.histogram, etc."
},

{
    "location": "visualization/#Example-1",
    "page": "Visualizing with Tensorboard",
    "title": "Example",
    "category": "section",
    "text": "On the training side, your code will look like thisusing TensorFlow\nsession = Session()\n\nalpha = placeholder(Float32)\nweights = Variable(...)\n... # Set up the rest of your model\n\n# Generate some summary operations\nsummary = TensorFlow.summary\nalpha_summmary = summary.scalar(\"Learning rate\", alpha)\nweight_summary = summary.histogram(\"Parameters\", weights)\nmerged_summary_op = summary.merge_all()\n\n# Create a summary writer\nsummary_writer = summary.FileWriter(\"/my_log_dir\")\n\n# Train\nfor epoch in 1:num_epochs\n  ... # Run training\n  summaries = run(session, merged_summary_op)\n  write(summary_writer, summaries, epoch)\nendThen from the console, run> tensorboard --logdir=/my_log_dir"
},

{
    "location": "io/#",
    "page": "Using queues for loading your data",
    "title": "Using queues for loading your data",
    "category": "page",
    "text": ""
},

{
    "location": "io/#Loading-data-with-queues-1",
    "page": "Using queues for loading your data",
    "title": "Loading data with queues",
    "category": "section",
    "text": "TensorFlow.jl can load and preprocess data in parallel with training so that the performance of training is not limited by the speed of your IO device that holds the training data. The API is very similar to the Python TensorFlow API, so see its docs.Consult the reference  for a list of all relevant methods."
},

{
    "location": "shape_inference/#",
    "page": "Shape inference",
    "title": "Shape inference",
    "category": "page",
    "text": ""
},

{
    "location": "shape_inference/#Shape-inference-1",
    "page": "Shape inference",
    "title": "Shape inference",
    "category": "section",
    "text": "Shape inference allows you to statically query the shape of a tensor before the computation graph has been run. This lets you verify that tensors have their expected shape. Invoke it by calling get_shape on a Tensor object.The Python API to TensorFlow implements shape inference in the Python layer. As it is not part of the C layer, it has been partially reimplemented in Julia. The Julia implementation supports shape inference most of the common operations. Contributing to shape inference is easy and pull requests are welcome - just look at the self-contained \"shape_inference.jl\" file for examples."
},

{
    "location": "saving/#",
    "page": "Saving and restoring",
    "title": "Saving and restoring",
    "category": "page",
    "text": ""
},

{
    "location": "saving/#Saving-and-restoring-network-graphs-and-variables-1",
    "page": "Saving and restoring",
    "title": "Saving and restoring network graphs and variables",
    "category": "section",
    "text": "Both the value of variables (typically weights in a neural network) and the topology of the network (ie, all the operations that constitute your model) can be serialized to disk and loaded later. The mechanism is different for both."
},

{
    "location": "saving/#Saving-and-restoring-variable-values-1",
    "page": "Saving and restoring",
    "title": "Saving and restoring variable values",
    "category": "section",
    "text": "See the main TensorFlow docs for an overview.First create a saver object:saver = train.Saver()Then call the save method to save your variables:train.save(saver, session, \"/path/to/variable_file\")The newly-created \"variable_file\" is a JLD2 file that contains a mapping from variable names to their values. The value of variables can later be restored in a new Julia session withtrain.restore(saver, session, \"/path/to/variable_file\")For example, in one Julia session I might haveusing TensorFlow\nsession = Session()\n@tf x = get_variable([], Float32)\nrun(session, assign(x, 5.0f0))\nsaver = train.Saver()\ntrain.save(saver, session, \"weights.jld\")Then to restore in another session,using TensorFlow\nsession = Session()\n@tf x = get_variable([], Float32)\nsaver = train.Saver()\ntrain.restore(saver, session, \"weights.jld\")\nrun(session, x)  # Outputs \'5.0f0\'Just as in the Python API, there is an easy way to save multiple variable files during different iterations of training, making it easy to retrospectively analyze the value of variables during training.save can be passed a global_step keyword parameter, which is an integer that will be suffixed to the variable file name. The Saver constructor accepts an optional max_to_keep argument, which is an integer specifying how many of the latest versions of the variable files to save (older ones will be discarded to save space). For example, this code will keep the value of variables during the 5 most recent training iterations: ...\n saver = train.Saver(max_to_keep=5)\n for iteration in 1:100\n   ...\n   train.save(saver, session, \"variable_file\", global_step=iteration)\nendBy the end of this loop, file \"variablefile95\" contains the variable values during the 95th iteration, \"variablefile96\" the 96th iteration, etc."
},

{
    "location": "saving/#Saving-and-restoring-models-1",
    "page": "Saving and restoring",
    "title": "Saving and restoring models",
    "category": "section",
    "text": "The actual structure of the model can also be saved and restored from disk. In TensorFlow jargon, the complete structure of the model is referred to as the \"metagraph\".To save the metagraph, calltrain.export_meta_graph(\"filename\")To restore it, calltrain.import_meta_graph(\"filename\")For example, in one Julia session you might writeusing TensorFlow\nx = constant(1)\n@tf y = x+1\ntrain.export_meta_graph(\"my_model\")Then in a new Julia session,using TensorFlow\nsession = Session()\ntrain.import_meta_graph(\"my_model\")\ny = get_tensor_by_name(\"y\")\nrun(session, y)  # Outputs \'2\'The metagraph file format is the same as that used by the Python TensorFlow version, so models can be freely passed to and from Python TensorFlow sessions."
},

{
    "location": "core/#",
    "page": "Core functions",
    "title": "Core functions",
    "category": "page",
    "text": ""
},

{
    "location": "core/#Core-operations-1",
    "page": "Core functions",
    "title": "Core operations",
    "category": "section",
    "text": ""
},

{
    "location": "core/#TensorFlow.Tensor",
    "page": "Core functions",
    "title": "TensorFlow.Tensor",
    "category": "type",
    "text": "Represents the output of an operation in the computation graph\n\n\n\n\n\n"
},

{
    "location": "core/#TensorFlow.Operation",
    "page": "Core functions",
    "title": "TensorFlow.Operation",
    "category": "type",
    "text": "An operation in the computation graph.\n\n\n\n\n\n"
},

{
    "location": "core/#TensorFlow.Session",
    "page": "Core functions",
    "title": "TensorFlow.Session",
    "category": "type",
    "text": "A TensorFlow session.\n\n\n\n\n\n"
},

{
    "location": "core/#TensorFlow.Graph",
    "page": "Core functions",
    "title": "TensorFlow.Graph",
    "category": "type",
    "text": "A TensorFlow computation graph\n\n\n\n\n\n"
},

{
    "location": "core/#Types-1",
    "page": "Core functions",
    "title": "Types",
    "category": "section",
    "text": "The computation graph as a whole is stored in the Graph type. Individual nodes in the graph are referred to as operations, stored in the Operation type. Operations can produce one or more outputs, represented as the Tensor type.Tensor\nOperation\nSession\nGraph"
},

{
    "location": "core/#Functions-1",
    "page": "Core functions",
    "title": "Functions",
    "category": "section",
    "text": "eltype\nnode_name\nget_collection\nget_def_graph\nrun\nget_node_by_name\nget_shape\nget_def"
},

{
    "location": "ops/#",
    "page": "Operations",
    "title": "Operations",
    "category": "page",
    "text": ""
},

{
    "location": "ops/#Operations-1",
    "page": "Operations",
    "title": "Operations",
    "category": "section",
    "text": "See the official TensorFlow documentation for a complete description of these operations."
},

{
    "location": "ops/#Basic-operations-1",
    "page": "Operations",
    "title": "Basic operations",
    "category": "section",
    "text": "placeholder\nconstant\nconcat\nstack\nsplit\nexpand_dims\nargmin\nargmax\nadd_n\none_hot\nrandom_uniform\nrandom_normal"
},

{
    "location": "ops/#Variables-1",
    "page": "Operations",
    "title": "Variables",
    "category": "section",
    "text": "Variable\nglobal_variables_initializer\nvariable_scope\nget_variable\nConstantInitializer\nassign\nassign_add\nassign_sub\nscatter_update"
},

{
    "location": "ops/#Reductions-1",
    "page": "Operations",
    "title": "Reductions",
    "category": "section",
    "text": "reduce_sum\nreduce_prod\nreduce_min\nreduce_max\nreduce_all\nreduce_any\nreduce_mean"
},

{
    "location": "ops/#Comparisons-1",
    "page": "Operations",
    "title": "Comparisons",
    "category": "section",
    "text": "equal\nnot_equal\nless\nless_equal\ngreater\ngreater_equal\nselect\nwhere"
},

{
    "location": "ops/#Images-1",
    "page": "Operations",
    "title": "Images",
    "category": "section",
    "text": "image.decode_jpeg\nimage.encode_jpeg\nimage.decode_png\nimage.encode_png\nimage.resize_images\nimage.central_crop"
},

{
    "location": "ops/#Neural-networks-1",
    "page": "Operations",
    "title": "Neural networks",
    "category": "section",
    "text": ""
},

{
    "location": "ops/#TensorFlow.Ops.conv2d",
    "page": "Operations",
    "title": "TensorFlow.Ops.conv2d",
    "category": "function",
    "text": " conv2d(input, filter; use_cudnn_on_gpu=true, data_format=NHWC, dilations=[1, 1, 1, 1])\n\n\n\n\n\n"
},

{
    "location": "ops/#TensorFlow.Ops.max_pool",
    "page": "Operations",
    "title": "TensorFlow.Ops.max_pool",
    "category": "function",
    "text": " max_pool(input; data_format=NHWC)\n\n\n\n\n\n"
},

{
    "location": "ops/#Convolutions-1",
    "page": "Operations",
    "title": "Convolutions",
    "category": "section",
    "text": "nn.conv2d\nnn.max_pool"
},

{
    "location": "ops/#TensorFlow.nn.embedding_lookup",
    "page": "Operations",
    "title": "TensorFlow.nn.embedding_lookup",
    "category": "function",
    "text": "embedding_lookup(params, ids; partition_strategy=\"mod\", name=\"\", validate_indices=true)\n\nLooks up values of ids in params. Currently only supports one Tensor in params.\n\nArgs:\n\nparams: A list of Tensors of the same type and which can be concatenated along their first dimension.\nids: A Tensor of Int32 or Int64 ids to be looked up in params.\npartition_strategy: If \"mod\" (default), assign each id to partition p = id % len(params). If \"div\", assign each id contiguously.\nname: An optional name for the operation.\nvalidate_indices: If true (default), make sure the indices are valid.\n\n\n\n\n\n"
},

{
    "location": "ops/#Embeddings-1",
    "page": "Operations",
    "title": "Embeddings",
    "category": "section",
    "text": "nn.embedding_lookup"
},

{
    "location": "ops/#Recurrent-neural-nets-1",
    "page": "Operations",
    "title": "Recurrent neural nets",
    "category": "section",
    "text": "nn.rnn\nnn.dynamic_rnn\nnn.zero_state\nnn.output_size\nnn.zero_state"
},

{
    "location": "ops/#Nonlinearities-1",
    "page": "Operations",
    "title": "Nonlinearities",
    "category": "section",
    "text": "nn.relu\nnn.relu6\nnn.elu\nnn.softplus\nnn.softsign\nnn.softmax\nnn.sigmoid\nnn.tanh"
},

{
    "location": "ops/#TensorFlow.nn.l2_loss",
    "page": "Operations",
    "title": "TensorFlow.nn.l2_loss",
    "category": "function",
    "text": "l2_loss(t)\n\nComputes half the L2-norm of a Tensor t, without taking the square root.\n\n\n\n\n\n"
},

{
    "location": "ops/#Losses-1",
    "page": "Operations",
    "title": "Losses",
    "category": "section",
    "text": "nn.l2_loss"
},

{
    "location": "ops/#TensorFlow.nn.dropout",
    "page": "Operations",
    "title": "TensorFlow.nn.dropout",
    "category": "function",
    "text": "dropout(x, keep_prob; noise_shape=nothing, seed=0)\n\nKeeps each element of x with keep_prob, scaled by 1/keep_prob, otherwise outputs 0. This computes dropout.\n\nArgs:\n\nx: A Tensor.\nkeep_prob: Probability that each element is kept.\nnoise_shape: Shape for randomly generated keep/drop flags.\nseed: Integer used to seed the RNG. Defaults to 0.\n\n\n\n\n\n"
},

{
    "location": "ops/#Regularizations-1",
    "page": "Operations",
    "title": "Regularizations",
    "category": "section",
    "text": "nn.dropout"
},

{
    "location": "ops/#TensorFlow.nn.top_k",
    "page": "Operations",
    "title": "TensorFlow.nn.top_k",
    "category": "function",
    "text": "top_k(input, k=1; sorted=true)\n\nFinds values and indices of the top k largest entries of input in its last dimension.\n\nArgs:\n\ninput: One or more dimensional Tensor with last dimension at least size k.\nk: Number of largest elements of input to look for. Defaults to 1.\nsorted: If true (default), the returned values will be sorted in descending order.\n\n\n\n\n\n"
},

{
    "location": "ops/#TensorFlow.nn.in_top_k",
    "page": "Operations",
    "title": "TensorFlow.nn.in_top_k",
    "category": "function",
    "text": "in_top_k(predictions, targets, k)\n\nDetermines whether the targets are in the top k predictions. Outputs a batch_size (first dimension of predictions) array of boolean values.\n\nArgs:\n\npredictions: Two dimensional Tensor.\ntargets: A Tensor.\nk: Number of elements to look at for comparison.\n\n\n\n\n\n"
},

{
    "location": "ops/#Evaluations-1",
    "page": "Operations",
    "title": "Evaluations",
    "category": "section",
    "text": "nn.top_k\nnn.in_top_k"
},

{
    "location": "ops/#TensorFlow.Ops.logical_and",
    "page": "Operations",
    "title": "TensorFlow.Ops.logical_and",
    "category": "function",
    "text": " logical_and(x, y)\n\n\n\n\n\n"
},

{
    "location": "ops/#TensorFlow.Ops.logical_not",
    "page": "Operations",
    "title": "TensorFlow.Ops.logical_not",
    "category": "function",
    "text": " logical_not(x)\n\n\n\n\n\n"
},

{
    "location": "ops/#TensorFlow.Ops.logical_or",
    "page": "Operations",
    "title": "TensorFlow.Ops.logical_or",
    "category": "function",
    "text": " logical_or(x, y)\n\n\n\n\n\n"
},

{
    "location": "ops/#TensorFlow.logical_xor",
    "page": "Operations",
    "title": "TensorFlow.logical_xor",
    "category": "function",
    "text": "logical_xor(x, y; name=\"LogicalXor\")\n\nReturns the truth value of x XOR y element-wise.\n\nNOTE: LogicalXor supports broadcasting. More about broadcasting here\n\nArgs:\n\nx: A Tensor of type bool.\ny: A Tensor of type bool.\nname: A name for the operation (optional).\n\nReturns:   A Tensor of type bool.\n\n\n\n\n\n"
},

{
    "location": "ops/#Logic-1",
    "page": "Operations",
    "title": "Logic",
    "category": "section",
    "text": "logical_and\nlogical_not\nlogical_or\nlogical_xor"
},

{
    "location": "ops/#Control-flow-1",
    "page": "Operations",
    "title": "Control flow",
    "category": "section",
    "text": "identity\nTensorFlow.make_tuple\nTensorFlow.group\nTensorFlow.no_op\ncond"
},

{
    "location": "io_ref/#",
    "page": "IO pipelines with queues",
    "title": "IO pipelines with queues",
    "category": "page",
    "text": ""
},

{
    "location": "io_ref/#IO-1",
    "page": "IO pipelines with queues",
    "title": "IO",
    "category": "section",
    "text": ""
},

{
    "location": "io_ref/#TensorFlow.train.add_queue_runner",
    "page": "IO pipelines with queues",
    "title": "TensorFlow.train.add_queue_runner",
    "category": "function",
    "text": "add_queue_runner(runner::QueueRunner)\n\nManually adds a queue runner to the graph\'s collection of queue runners. All runners in the collection will be executed in parallel when start_queue_runners is invoked.\n\n\n\n\n\n"
},

{
    "location": "io_ref/#TensorFlow.train.start_queue_runners",
    "page": "IO pipelines with queues",
    "title": "TensorFlow.train.start_queue_runners",
    "category": "function",
    "text": "start_queue_runners(session::Session)\n\nRun all queue runners in parallel that were previously added to the graph\'s collection of queue runners via add_queue_runner.\n\nArgs:\n\nsession: The TensorFlow session containing the queues\n\n\n\n\n\n"
},

{
    "location": "io_ref/#TensorFlow.train.range_input_producer",
    "page": "IO pipelines with queues",
    "title": "TensorFlow.train.range_input_producer",
    "category": "function",
    "text": "range_input_producer(limit; num_epochs=nothing, do_shuffle=true, seed=0, capacity=32)\n\nProduces the integers from 1 to limit in a queue.\n\nArgs:\n\nlimit: Inclusive upper bound on the endpoint of the range of integers to produce\nnum_epochs: Number of times to produce the integers.\ndo_shuffle: If true, shuffle the inputs each epoch.\nseed: Seed to use for the RNG if do_shuffle is true.\ncapacity: Sets the queue capacity. Default is 32.\n\n\n\n\n\n"
},

{
    "location": "io_ref/#TensorFlow.train.input_producer",
    "page": "IO pipelines with queues",
    "title": "TensorFlow.train.input_producer",
    "category": "function",
    "text": "input_producer(input; element_shape=nothing, num_epochs=nothing, do_shuffle=true, seed=0, capacity=32)\n\nOutputs the rows of input to a queue for input pipelining.\n\nArgs:\n\ninput: A Tensor with the rows to produce.\nelement_shape: The shape of the input rows, in case it can\'t be inferred. Defaults to nothing.\nnum_epochs: Number of times to produce each row. If unspecified (default), input_producer can produce each row an unlimited number of times.\ndo_shuffle: If true, shuffle the inputs each epoch.\nseed: Seed to use for the RNG if do_shuffle is true.\ncapacity: Sets the queue capacity. Default is 32.\n\n\n\n\n\n"
},

{
    "location": "io_ref/#TensorFlow.train.string_input_producer",
    "page": "IO pipelines with queues",
    "title": "TensorFlow.train.string_input_producer",
    "category": "function",
    "text": "string_input_producer(string_tensors; num_epochs=nothing, do_shuffle=true, seed=0, capacity=32)\n\nOutput strings to a queue for an input pipeline.\n\nArgs:\n\nstring_tensor: A one dimensional Tensor of strings to produce.\nnum_epochs: Number of times to produce the strings.\ndo_shuffle: If true, shuffle the inputs each epoch.\nseed: Seed to use for the RNG if do_shuffle is true.\ncapacity: Sets the queue capacity. Default is 32.\n\n\n\n\n\n"
},

{
    "location": "io_ref/#TensorFlow.train.shuffle_batch",
    "page": "IO pipelines with queues",
    "title": "TensorFlow.train.shuffle_batch",
    "category": "function",
    "text": "shuffle_batch(tensors, batch_size; capacity=32, enqueue_many=false, shapes=nothing, dynamic_pad=false, allow_smaller_final_batch=false)\n\nCreate batches by randomly shuffling tensors.\n\nArgs:\n\ntensors: A list of tensors to enqueue.\nbatch_size: The batch size which will be pulled from the queue.\ncapacity: Sets the queue capacity. Default is 32.\ndynamic_pad: If true all tensors will be padded on unknown dimensions to batch_size. Otherwise tensors shapes must be fully known. Currently only false is supported.\nenqueue_many: If false, tensors represents a single example. Otherwise tensors represents a batch of examples. Currently only false is supported.\nshapes: The shapes for each example. Defaults to the inferred shapes from tensors.\nallow_smaller_final_batch: If true (default false), the final batch is allowed to be smaller than the other batches if there are not enough samples remaining.\n\n\n\n\n\n"
},

{
    "location": "io_ref/#TensorFlow.train.QueueRunner",
    "page": "IO pipelines with queues",
    "title": "TensorFlow.train.QueueRunner",
    "category": "type",
    "text": "QueueRunner\n\nRepresents an object that continually enqueues elements to a TensorFlow queue in parallel with other operations.\n\n\n\n\n\n"
},

{
    "location": "io_ref/#TensorFlow.train.create_threads",
    "page": "IO pipelines with queues",
    "title": "TensorFlow.train.create_threads",
    "category": "function",
    "text": "create_threads(runner::QueueRunner, session::Session)\n\nCreates tasks that run the enqueue operations in runner in parallel.\n\n\n\n\n\n"
},

{
    "location": "io_ref/#Pipeline-functions-1",
    "page": "IO pipelines with queues",
    "title": "Pipeline functions",
    "category": "section",
    "text": "train.add_queue_runner\ntrain.start_queue_runners\ntrain.range_input_producer\ntrain.input_producer\ntrain.string_input_producer\ntrain.shuffle_batch\ntrain.QueueRunner\ntrain.create_threads"
},

{
    "location": "io_ref/#Readers-1",
    "page": "IO pipelines with queues",
    "title": "Readers",
    "category": "section",
    "text": "io.WholeFileReader\nio.TextLineReader\nread"
},

{
    "location": "summary_ref/#",
    "page": "Summaries",
    "title": "Summaries",
    "category": "page",
    "text": ""
},

{
    "location": "summary_ref/#Summary-reference-1",
    "page": "Summaries",
    "title": "Summary reference",
    "category": "section",
    "text": ""
},

{
    "location": "summary_ref/#TensorFlow.summary.FileWriter",
    "page": "Summaries",
    "title": "TensorFlow.summary.FileWriter",
    "category": "type",
    "text": "FileWriter(logdir; graph=get_def_graph())\n\nThe FileWriter type provides a mechanism to create an event file in a given directory and add summaries and events to it. The class updates the file contents asynchronously. This allows a training program to call methods to add data to the file directly from the training loop, without slowing down training.\n\nOn construction the summary writer creates a new event file in logdir.\n\nIf you pass a Graph to the constructor it is added to the event file.\n\nArguments:\n\nlogdir: A string. Directory where event file will be written.\ngraph: A Graph object.\n\n\n\n\n\n"
},

{
    "location": "summary_ref/#Writing-event-files-1",
    "page": "Summaries",
    "title": "Writing event files",
    "category": "section",
    "text": "TensorFlow.summary.FileWriter"
},

{
    "location": "summary_ref/#TensorFlow.summary.summary_ops.scalar",
    "page": "Summaries",
    "title": "TensorFlow.summary.summary_ops.scalar",
    "category": "function",
    "text": " scalar_summary(tags, values)\n\n\n\n\n\n\n\n"
},

{
    "location": "summary_ref/#TensorFlow.summary.summary_ops.histogram",
    "page": "Summaries",
    "title": "TensorFlow.summary.summary_ops.histogram",
    "category": "function",
    "text": " histogram_summary(tag, values)\n\n\n\n\n\n\n\n"
},

{
    "location": "summary_ref/#TensorFlow.summary.summary_ops.image",
    "page": "Summaries",
    "title": "TensorFlow.summary.summary_ops.image",
    "category": "function",
    "text": " image_summary(tag, tensor; max_images=3, bad_color=?)\n\n\n\n\n\n\n\n"
},

{
    "location": "summary_ref/#TensorFlow.summary.summary_ops.merge_all",
    "page": "Summaries",
    "title": "TensorFlow.summary.summary_ops.merge_all",
    "category": "function",
    "text": "merge_all(key=:Summaries)\n\nMerges all summaries collected in the default graph.\n\nArgs:   key: GraphKey used to collect the summaries.  Defaults to           :Summaries\n\nReturns:   If no summaries were collected, returns nothing.  Otherwise returns a scalar   Tensor of type String containing the serialized Summary protocol   buffer resulting from the merging.\n\n\n\n\n\n"
},

{
    "location": "summary_ref/#Summary-operations-1",
    "page": "Summaries",
    "title": "Summary operations",
    "category": "section",
    "text": "TensorFlow.summary.scalar\nTensorFlow.summary.histogram\nTensorFlow.summary.image\nTensorFlow.summary.merge_all"
},

{
    "location": "basic_usage/#",
    "page": "Basic usage",
    "title": "Basic usage",
    "category": "page",
    "text": ""
},

{
    "location": "basic_usage/#Basic-usage-1",
    "page": "Basic usage",
    "title": "Basic usage",
    "category": "section",
    "text": "using TensorFlow\n\nsess = Session()\n\nx = constant(Float64[1,2])\ny = Variable(Float64[3,4])\nz = placeholder(Float64)\n\nw = exp(x + z + -y)\n\nrun(sess, global_variables_initializer())\nres = run(sess, w, Dict(z=>Float64[1,2]))\nBase.Test.@test res[1] ≈ exp(-1)"
},

{
    "location": "logistic/#",
    "page": "Logistic regression",
    "title": "Logistic regression",
    "category": "page",
    "text": ""
},

{
    "location": "logistic/#Logistic-regression-1",
    "page": "Logistic regression",
    "title": "Logistic regression",
    "category": "section",
    "text": "using Distributions, TensorFlow, Printf\n\n# Generate some synthetic data\nx = randn(100, 50)\nw = randn(50, 10)\ny_prob = exp.(x*w)\ny_prob ./= sum(y_prob, dims=2)\n\nfunction draw(probs)\n    y = zeros(size(probs))\n    for i in 1:size(probs, 1)\n        idx = rand(Categorical(probs[i, :]))\n        y[i, idx] = 1\n    end\n    return y\nend\n\ny = draw(y_prob)\n\n# Build the model\nsess = Session(Graph())\nX = placeholder(Float64)\nY_obs = placeholder(Float64)\n\nvariable_scope(\"logisitic_model\", initializer=Normal(0, .001)) do\n    global W = get_variable(\"weights\", [50, 10], Float64)\n    global B = get_variable(\"bias\", [10], Float64)\nend\n\nY=nn.softmax(X*W + B)\nLoss = -reduce_sum(log(Y).*Y_obs)\noptimizer = train.AdamOptimizer()\nminimize_op = train.minimize(optimizer, Loss)\nsaver = train.Saver()\n# Run training\nrun(sess, global_variables_initializer())\ncheckpoint_path = mktempdir()\n@info(\"Checkpoint files saved in $checkpoint_path\")\nfor epoch in 1:100\n    cur_loss, _ = run(sess, (Loss, minimize_op), Dict(X=>x, Y_obs=>y))\n    println(Printf.@sprintf(\"Current loss is %.2f.\", cur_loss))\n    train.save(saver, sess, joinpath(checkpoint_path, \"logistic\"), global_step=epoch)\nend\n"
},

{
    "location": "build_from_source/#",
    "page": "Build TensorFlow from source",
    "title": "Build TensorFlow from source",
    "category": "page",
    "text": ""
},

{
    "location": "build_from_source/#Building-TensorFlow-from-source-1",
    "page": "Build TensorFlow from source",
    "title": "Building TensorFlow from source",
    "category": "section",
    "text": "Building TensorFlow from source is recommended by Google for maximum performance, especially when running in CPU mode - on some systems, the difference can be substantial. It will also be required for Mac OS X GPU support for TensorFlow versions later than 1.1. This document describes how to do so."
},

{
    "location": "build_from_source/#Step-1:-Build-libtensorflow-1",
    "page": "Build TensorFlow from source",
    "title": "Step 1: Build libtensorflow",
    "category": "section",
    "text": "To build libtensorflow for TensorFlow.jl, follow the official instructions for building tensorFLow from source, except for a few minor modifications so as to build the library rather than the client.In the step \"Prepare environment\", ignore \"Install python dependencies\" – these are not necessary as we are not building for Python. Be sure to follow all other steps as needed for your OS.\nIn the step \"Build the pip package\", since we are building the binary file and not the pip package, instead run bazel build --config=opt //tensorflow:libtensorflow.so, adding --config=cuda if GPU support is desired.Running bazel build will produce the libtensorflow.so binary needed by TensorFlow.jl - there is no need to build the Python package or run anything else. You may place the binary wherever is convenient. If on Mac OS X, you may need to rename the libtensorflow.so to libtensorflow.dylib."
},

{
    "location": "build_from_source/#Step-2:-Install-the-TensorFlow-binary-1",
    "page": "Build TensorFlow from source",
    "title": "Step 2: Install the TensorFlow binary",
    "category": "section",
    "text": "We must now tell TensorFlow.jl to where to load the custom binary from. There are a number of ways to do so.We can set the environment variable LIBTENSORFLOW to /path/to/tensorflow.so. This may be done system-wide by editing .profile or any other method supported by your OS.\nFor users of the Atom/Juno IDE who do not wish to modify their system-wide environment, environment variables may be set by adding the line process.env.LIBTENSORFLOW = \"/path/to/libtensorflow.so\" to the init.coffee script (easily accessible by clicking File -> Init Script). Note that Atom may not always inherit environment variables set by the OS.\nOr you can copy libtensorflow.so to <TensorFlowDIR>/deps/usr/bin/, overwriting the included binary. Where <TensorFlowDIR> is the path to the directory TensorFlow.jl is being loaded from."
},

{
    "location": "build_from_source/#Step-3:-Check-that-the-custom-binary-is-loaded-1",
    "page": "Build TensorFlow from source",
    "title": "Step 3: Check that the custom binary is loaded",
    "category": "section",
    "text": "After running using TensorFlow, it should no longer complain that TensorFlow wasn\'t compiled with the necessary instructions. Try generating two random matrices and multiplying them together. You can time the computation with @time run(sess, x), which should be much faster."
},

{
    "location": "build_from_source/#Tips-and-known-issues-1",
    "page": "Build TensorFlow from source",
    "title": "Tips & known issues",
    "category": "section",
    "text": "For maximum performance, you should always compile on the same system that will be running the computation, and with the correct CUDA Compute Capability version supported by your GPU.\nIf TensorFlow.jl fails to load with the error Library not loaded: @rpath/libcublas.8.0.dylib or any similar error, it means that the CUDA libraries are not in LD_LIBRARY_PATH as required by Nvidia. Be sure to add /usr/local/cuda/lib, or wherever your CUDA instalation is located, to LD_LIBRARY_PATH. This may be done by editing .profile, or for Atom/Juno users editing init.coffee, or any other method supported by your OS, as described in Step 2. Be careful that you append this folder and do not mistakenly overwrite your entire path.\nIf you get CUDA_ERROR_NOT_INITIALIZED, then for some reason TensorFlow cannot find your GPU. Make sure that the appropriate software is installed, and if using an external GPU, make sure it is plugged in correctly.\nTo check whether the GPU is being used, create your session with TensorFlow.Session(config=TensorFlow.tensorflow.ConfigProto(log_device_placement=true)). TensorFlow will then print information about which device is used.\nYou may need to add symlinks from libcudnn5.dylib to libcudnn.5.dylib so that Bazel is able to correctly locate the necessary dependencies.\nOn Mac OS X, nvcc, Nvidia\'s CUDA compiler, requires OS X Command Line Tools version 8.2 and does not work with the latest version. You can download this version from Apple\'s website, and switch to it by running sudo xcode-select -s /path/to/CommandLineTools.\nOn Mac OS X, make sure to set the environment variable GCC_HOST_COMPILER_PATH to /usr/bin/gcc - do not install GCC yourself, or the build may fail with obscure error messages.\nOn Mac OS X, if you don\'t wish to install Homebrew, you can instead use Julia\'s internal Homebrew-based dependency manager Homebrew.jl by running Homebrew.brew(`install --build-from-source libtensorflow`). GPU support can be enabled by modifying the Ruby formula using Homebrew.brew(`edit libtensorflow`) – you should set all necessary environment variables in the Ruby formula, as Homebrew may not display prompts correctly."
},

]}
