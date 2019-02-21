var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AWSCore.jl-1",
    "page": "Readme",
    "title": "AWSCore.jl",
    "category": "section",
    "text": "Julia interface for Amazon Web Services.This package provides core infrastructure functions and types.The AWSSDK.jl package provides automatically generated low-level API wrappers for each operation in each Amazon Web Service.The following high-level packages are also available: AWS S3, AWS SQS, AWS SNS, AWS IAM, AWS EC2, AWS Lambda, AWS SES and AWS SDB. These packages include operation specific result structure parsing, error handling, type convenience functions, iterators, etc.Full documentation is available here, or see below for some examples of how to get started.There are three ways to use AWSCore:Call AWSCore/Services.jlfunctions directly:using AWSCore.Services.cloudformation\ncloudformation(\"CreateStack\",\n               StackName = \"mystack\",\n               TemplateBody = readstring(\"cloudformation_template.yaml\"),\n               Parameters = [[\"ParameterKey\"   => \"Foo\",\n                              \"ParameterValue\" => \"bar\"]],\n               Capabilities = [\"CAPABILITY_IAM\"])Use the low-level AWSSDK wrappers:using AWSSDK.S3.list_buckets\nr = list_buckets()\nbuckets = [b[\"Name\"] for b in r[\"Buckets\"][\"Bucket\"]]Use one of the high-level convenience packages:using AWSS3\nbuckets = s3_list_buckets()"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Create an S3 bucket and store some data...aws = aws_config()\ns3_create_bucket(aws, \"my.bucket\")\ns3_enable_versioning(aws, \"my.bucket\")\n\ns3_put(aws, \"my.bucket\", \"key\", \"Hello!\")\nprintln(s3_get(aws, \"my.bucket\", \"key\"))Post a message to a queue...q = sqs_get_queue(aws, \"my-queue\")\n\nsqs_send_message(q, \"Hello!\")\n\nm = sqs_receive_message(q)\nprintln(m[\"message\"])\nsqs_delete_message(q, m)Post a message to a notification topic...sns_create_topic(aws, \"my-topic\")\nsns_subscribe_sqs(aws, \"my-topic\", q; raw = true)\n\nsns_publish(aws, \"my-topic\", \"Hello!\")\n\nm = sqs_receive_message(q)\nprintln(m[\"message\"])\nsqs_delete_message(q, m)\nStart an EC2 server and fetch info...ec2(aws, \"StartInstances\", {\"InstanceId.1\" => my_instance_id})\nr = ec2(aws, \"DescribeInstances\", {\"Filter.1.Name\" => \"instance-id\",\n                                   \"Filter.1.Value.1\" => my_instance_id})\nprintln(r)Create an IAM user...iam(aws, \"CreateUser\", {\"UserName\" => \"me\"})Automatically assume a role(details)...For a user with the IAM profile valid-iam-profile already in their credentials file that has permissions to a role called example-role-name:~/.aws/config:[profile example-role-name]\nrole_arn = arn:aws:iam::[role number here]:role/example-role-name\nsource_profile = valid-iam-profileENV[\"AWS_PROFILE\"] = \"example-role-name\"\nAWSCore.aws_config()"
},

{
    "location": "autodocs/#AWSCore.AWSConfig",
    "page": "Docstrings",
    "title": "AWSCore.AWSConfig",
    "category": "type",
    "text": "Most AWSCore functions take a AWSConfig dictionary as the first argument. This dictionary holds AWSCredentials and AWS region configuration.\n\naws = AWSConfig(:creds => AWSCredentials(), :region => \"us-east-1\")`\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.AWSCredentials",
    "page": "Docstrings",
    "title": "AWSCore.AWSCredentials",
    "category": "type",
    "text": "When you interact with AWS, you specify your AWS Security Credentials to verify who you are and whether you have permission to access the resources that you are requesting. AWS uses the security credentials to authenticate and authorize your requests.\n\nThe fields access_key_id and secret_key hold the access keys used to authenticate API requests (see Creating, Modifying, and Viewing Access Keys).\n\nTemporary Security Credentials require the extra session token field.\n\nThe user_arn and account_number fields are used to cache the result of the aws_user_arn and aws_account_number functions.\n\nThe AWSCredentials() constructor tries to load local Credentials from environment variables, ~/.aws/credentials, ~/.aws/config or EC2 instance credentials.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.AWSRequest",
    "page": "Docstrings",
    "title": "AWSCore.AWSRequest",
    "category": "type",
    "text": "The AWSRequest dictionary describes a single API request: It contains the following keys:\n\n:creds => AWSCredentials for authentication.\n:verb => \"GET\", \"PUT\", \"POST\" or \"DELETE\"\n:url => service endpoint url (returned by aws_endpoint)\n:headers => HTTP headers\n:content => HTTP body\n:resource => HTTP request path\n:region => AWS region\n:service => AWS service name\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.arn",
    "page": "Docstrings",
    "title": "AWSCore.arn",
    "category": "function",
    "text": "arn([::AWSConfig], service, resource, [region, [account]])\n\nGenerate an Amazon Resource Name for service and resource.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.arn_account",
    "page": "Docstrings",
    "title": "AWSCore.arn_account",
    "category": "function",
    "text": "arn_account(arn)\n\nExtract account number from arn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.arn_iam_name",
    "page": "Docstrings",
    "title": "AWSCore.arn_iam_name",
    "category": "function",
    "text": "arn_iam_name\n\nExtract IAM resource name from arn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.arn_iam_type",
    "page": "Docstrings",
    "title": "AWSCore.arn_iam_type",
    "category": "function",
    "text": "arn_iam_type\n\nExtract IAM resource type from arn. e.g. \"role\", \"policy\"...\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.arn_region",
    "page": "Docstrings",
    "title": "AWSCore.arn_region",
    "category": "function",
    "text": "arn_region(arn)\n\nExtract region name from arn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.arn_resource",
    "page": "Docstrings",
    "title": "AWSCore.arn_resource",
    "category": "function",
    "text": "arn_resource(arn)\n\nExtract resource name from arn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.arn_service",
    "page": "Docstrings",
    "title": "AWSCore.arn_service",
    "category": "function",
    "text": "arn_service(arn)\n\nExtract service name from arn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.aws_account_number",
    "page": "Docstrings",
    "title": "AWSCore.aws_account_number",
    "category": "function",
    "text": "aws_account_number(::AWSConfig)\n\n12-digit AWS Account Number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.aws_args_dict",
    "page": "Docstrings",
    "title": "AWSCore.aws_args_dict",
    "category": "function",
    "text": "aws_args_dict(args)\n\nConvert nested Vector{Pair} maps in args into Dict{String,Any} maps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.aws_config",
    "page": "Docstrings",
    "title": "AWSCore.aws_config",
    "category": "function",
    "text": "The aws_config function provides a simple way to creates an AWSConfig configuration dictionary.\n\n>aws = aws_config()\n>aws = aws_config(creds = my_credentials)\n>aws = aws_config(region = \"ap-southeast-2\")\n\nBy default, the aws_config attempts to load AWS credentials from:\n\nAWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environemnt variables,\n~/.aws/credentials or\nEC2 Instance Credentials.\n\nA ~/.aws/credentials file can be created using the AWS CLI command aws configrue. Or it can be created manually:\n\n[default]\naws_access_key_id = AKIAXXXXXXXXXXXXXXXX\naws_secret_access_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\nIf your ~/.aws/credentials file contains multiple profiles you can select a profile by setting the AWS_PROFILE environment variable.\n\naws_config understands the following AWS CLI environment variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN, AWS_DEFAULT_REGION, AWS_PROFILE and AWS_CONFIG_FILE.\n\nAn configuration dictionary can also be created directly from a key pair as follows. However, putting access credentials in source code is discouraged.\n\naws = aws_config(creds = AWSCredentials(\"AKIAXXXXXXXXXXXXXXXX\",\n                                        \"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\"))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.aws_user_arn",
    "page": "Docstrings",
    "title": "AWSCore.aws_user_arn",
    "category": "function",
    "text": "aws_user_arn(::AWSConfig)\n\nUnique Amazon Resource Name for configrued user.\n\ne.g. \"arn:aws:iam::account-ID-without-hyphens:user/Bob\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.default_aws_config",
    "page": "Docstrings",
    "title": "AWSCore.default_aws_config",
    "category": "function",
    "text": "default_aws_config returns a global shared AWSConfig object obtained by calling aws_config with no optional arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.do_request",
    "page": "Docstrings",
    "title": "AWSCore.do_request",
    "category": "function",
    "text": "do_request(::AWSRequest)\n\nSubmit an API request, return the result.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.dot_aws_credentials",
    "page": "Docstrings",
    "title": "AWSCore.dot_aws_credentials",
    "category": "function",
    "text": "Load Credentials from [AWS CLI ~/.aws/credentials file] or AWS CLI ~/.aws/config file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.dump_aws_request",
    "page": "Docstrings",
    "title": "AWSCore.dump_aws_request",
    "category": "function",
    "text": "Pretty-print AWSRequest dictionary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.ec2_instance_credentials",
    "page": "Docstrings",
    "title": "AWSCore.ec2_instance_credentials",
    "category": "function",
    "text": "Load Instance Profile Credentials for EC2 virtual machine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.ec2_metadata",
    "page": "Docstrings",
    "title": "AWSCore.ec2_metadata",
    "category": "function",
    "text": "ec2_metadata(key)\n\nFetch EC2 meta-data for key.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.ecs_instance_credentials",
    "page": "Docstrings",
    "title": "AWSCore.ecs_instance_credentials",
    "category": "function",
    "text": "Load ECS Task Credentials\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.env_instance_credentials",
    "page": "Docstrings",
    "title": "AWSCore.env_instance_credentials",
    "category": "function",
    "text": "Load Credentials from environment variables AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY etc. (e.g. in Lambda sandbox).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.flatten_query",
    "page": "Docstrings",
    "title": "AWSCore.flatten_query",
    "category": "function",
    "text": "flatten_query(service, query, prefix=\"\")\n\nRecursivly flatten tree of Dicts and Arrays into a 1-level deep Dict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.is_arn",
    "page": "Docstrings",
    "title": "AWSCore.is_arn",
    "category": "function",
    "text": "is_arn(arn)\n\nIs arn in the [correct format]? (http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.localhost_is_ec2",
    "page": "Docstrings",
    "title": "AWSCore.localhost_is_ec2",
    "category": "function",
    "text": "Is Julia running on an EC2 virtual machine?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.localhost_is_lambda",
    "page": "Docstrings",
    "title": "AWSCore.localhost_is_lambda",
    "category": "function",
    "text": "Is Julia running in an AWS Lambda sandbox?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.mime_multipart",
    "page": "Docstrings",
    "title": "AWSCore.mime_multipart",
    "category": "function",
    "text": "mime_multipart([header,] parts)\n\nEncode parts as a MIME Multipart message.\n\nparts is a Vector of (filename, content_type, content) Tuples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.rest_resource",
    "page": "Docstrings",
    "title": "AWSCore.rest_resource",
    "category": "function",
    "text": "rest_resource(request, args)\n\nReplace {Arg} placeholders in request[:resource] with arg values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.service_json",
    "page": "Docstrings",
    "title": "AWSCore.service_json",
    "category": "function",
    "text": "service_json(aws::AWSConfig; args...)\n\nProcess request for AWS \"json\" service protocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.service_query",
    "page": "Docstrings",
    "title": "AWSCore.service_query",
    "category": "function",
    "text": "service_query(aws::AWSConfig; args...)\n\nProcess request for AWS \"query\" service protocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.service_rest_json",
    "page": "Docstrings",
    "title": "AWSCore.service_rest_json",
    "category": "function",
    "text": "service_rest_json(aws::AWSConfig; args...)\n\nProcess request for AWS \"rest_json\" service protocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.service_rest_xml",
    "page": "Docstrings",
    "title": "AWSCore.service_rest_xml",
    "category": "function",
    "text": "service_rest_xml(aws::AWSConfig; args...)\n\nProcess request for AWS \"rest_xml\" service protocol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSCore.service_url",
    "page": "Docstrings",
    "title": "AWSCore.service_url",
    "category": "function",
    "text": "service_url(aws::AWSConfig; request)\n\nService endpoint URL for request.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AWSCore.AWSConfigAWSCore.AWSCoreAWSCore.AWSCredentialsAWSCore.AWSExceptionAWSCore.AWSRequestAWSCore.PartAWSCore.ServicesAWSCore._default_aws_configAWSCore.arnAWSCore.arn_accountAWSCore.arn_iam_nameAWSCore.arn_iam_typeAWSCore.arn_matchAWSCore.arn_regionAWSCore.arn_resourceAWSCore.arn_serviceAWSCore.aws_account_numberAWSCore.aws_args_dictAWSCore.aws_configAWSCore.aws_get_credential_detailsAWSCore.aws_get_regionAWSCore.aws_get_roleAWSCore.aws_get_role_detailsAWSCore.aws_user_arnAWSCore.content_typeAWSCore.copy!AWSCore.debug_levelAWSCore.default_aws_configAWSCore.do_requestAWSCore.dot_aws_config_fileAWSCore.dot_aws_credentialsAWSCore.dot_aws_credentials_fileAWSCore.dump_aws_requestAWSCore.ec2_instance_credentialsAWSCore.ec2_metadataAWSCore.ecs_instance_credentialsAWSCore.env_instance_credentialsAWSCore.evalAWSCore.flatten_queryAWSCore.headerAWSCore.http_getAWSCore.http_messageAWSCore.http_requestAWSCore.http_statusAWSCore.includeAWSCore.is_accountAWSCore.is_arnAWSCore.is_arn_prefixAWSCore.is_partitionAWSCore.is_regionAWSCore.is_serviceAWSCore.localhost_is_ec2AWSCore.localhost_is_lambdaAWSCore.localhost_maybe_ec2AWSCore.mime_multipartAWSCore.rest_resourceAWSCore.service_jsonAWSCore.service_queryAWSCore.service_rest_jsonAWSCore.service_rest_xmlAWSCore.service_urlAWSCore.set_debug_levelAWSCore.sign!AWSCore.sign_aws2!AWSCore.sign_aws4!"
},

]}
