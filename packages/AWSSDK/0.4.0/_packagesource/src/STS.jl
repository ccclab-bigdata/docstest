#==============================================================================#
# STS.jl
#
# This file is generated from:
# https://github.com/aws/aws-sdk-js/blob/master/apis/sts-2011-06-15.normal.json
#==============================================================================#

__precompile__()

module STS

using AWSCore


"""
    using AWSSDK.STS.assume_role
    assume_role([::AWSConfig], arguments::Dict)
    assume_role([::AWSConfig]; RoleArn=, RoleSessionName=, <keyword arguments>)

    using AWSCore.Services.sts
    sts([::AWSConfig], "AssumeRole", arguments::Dict)
    sts([::AWSConfig], "AssumeRole", RoleArn=, RoleSessionName=, <keyword arguments>)

# AssumeRole Operation

Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) that you can use to access AWS resources that you might not normally have access to. Typically, you use `AssumeRole` for cross-account access or federation. For a comparison of `AssumeRole` with the other APIs that produce temporary credentials, see [Requesting Temporary Security Credentials](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Comparing the AWS STS APIs](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison) in the *IAM User Guide*.

**Important:** You cannot call `AssumeRole` by using AWS root account credentials; access is denied. You must use credentials for an IAM user or an IAM role to call `AssumeRole`.

For cross-account access, imagine that you own multiple accounts and need to access resources in each account. You could create long-term credentials in each account to access those resources. However, managing all those credentials and remembering which one can access which account can be time consuming. Instead, you can create one set of long-term credentials in one account and then use temporary security credentials to access all the other accounts by assuming roles in those accounts. For more information about roles, see [IAM Roles (Delegation and Federation)](http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html) in the *IAM User Guide*.

For federation, you can, for example, grant single sign-on access to the AWS Management Console. If you already have an identity and authentication system in your corporate network, you don't have to recreate user identities in AWS in order to grant those user identities access to AWS. Instead, after a user has been authenticated, you call `AssumeRole` (and specify the role with the appropriate permissions) to get temporary security credentials for that user. With those temporary security credentials, you construct a sign-in URL that users can use to access the console. For more information, see [Common Scenarios for Temporary Credentials](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html#sts-introduction) in the *IAM User Guide*.

By default, the temporary security credentials created by `AssumeRole` last for one hour. However, you can use the optional `DurationSeconds` parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see [View the Maximum Session Duration Setting for a Role](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session) in the *IAM User Guide*. The maximum session duration limit applies when you use the `AssumeRole*` API operations or the `assume-role*` CLI operations but does not apply when you use those operations to create a console URL. For more information, see [Using IAM Roles](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) in the *IAM User Guide*.

The temporary security credentials created by `AssumeRole` can be used to make API calls to any AWS service with the following exception: you cannot call the STS service's `GetFederationToken` or `GetSessionToken` APIs.

Optionally, you can pass an IAM access policy to this operation. If you choose not to pass a policy, the temporary security credentials that are returned by the operation have the permissions that are defined in the access policy of the role that is being assumed. If you pass a policy to this operation, the temporary security credentials that are returned by the operation have the permissions that are allowed by both the access policy of the role that is being assumed, ***and*** the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the access policy of the role that is being assumed. For more information, see [Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html) in the *IAM User Guide*.

To assume a role, your AWS account must be trusted by the role. The trust relationship is defined in the role's trust policy when the role is created. That trust policy states which accounts are allowed to delegate access to this account's role.

The user who wants to access the role must also have permissions delegated from the role's administrator. If the user is in a different account than the role, then the user's administrator must attach a policy that allows the user to call AssumeRole on the ARN of the role in the other account. If the user is in the same account as the role, then you can either attach a policy to the user (identical to the previous different account user), or you can add the user as a principal directly in the role's trust policy. In this case, the trust policy acts as the only resource-based policy in IAM, and users in the same account as the role do not need explicit permission to assume the role. For more information about trust policies and resource-based policies, see [IAM Policies](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) in the *IAM User Guide*.

**Using MFA with AssumeRole**

You can optionally include multi-factor authentication (MFA) information when you call `AssumeRole`. This is useful for cross-account scenarios in which you want to make sure that the user who is assuming the role has been authenticated using an AWS MFA device. In that scenario, the trust policy of the role being assumed includes a condition that tests for MFA authentication; if the caller does not include valid MFA information, the request to assume the role is denied. The condition in a trust policy that tests for MFA authentication might look like the following example.

`"Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}`

For more information, see [Configuring MFA-Protected API Access](http://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html) in the *IAM User Guide* guide.

To use MFA with `AssumeRole`, you pass values for the `SerialNumber` and `TokenCode` parameters. The `SerialNumber` value identifies the user's hardware or virtual MFA device. The `TokenCode` is the time-based one-time password (TOTP) that the MFA devices produces.

# Arguments

## `RoleArn = ::String` -- *Required*
The Amazon Resource Name (ARN) of the role to assume.


## `RoleSessionName = ::String` -- *Required*
An identifier for the assumed role session.

Use the role session name to uniquely identify a session when the same role is assumed by different principals or for different reasons. In cross-account scenarios, the role session name is visible to, and can be logged by the account that owns the role. The role session name is also used in the ARN of the assumed role principal. This means that subsequent cross-account API requests using the temporary security credentials will expose the role session name to the external account in their CloudTrail logs.

The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-


## `Policy = ::String`
An IAM policy in JSON format.

This parameter is optional. If you pass a policy, the temporary security credentials that are returned by the operation have the permissions that are allowed by both (the intersection of) the access policy of the role that is being assumed, *and* the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the access policy of the role that is being assumed. For more information, see [Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html) in the *IAM User Guide*.

The format for this parameter, as described by its regex pattern, is a string of characters up to 2048 characters in length. The characters can be any ASCII character from the space character to the end of the valid character list (\\u0020-\\u00FF). It can also include the tab (\\u0009), linefeed (\\u000A), and carriage return (\\u000D) characters.

**Note**
> The policy plain text must be 2048 bytes or shorter. However, an internal conversion compresses it into a packed binary format with a separate limit. The PackedPolicySize response element indicates by percentage how close to the upper size limit the policy is, with 100% equaling the maximum allowed size.


## `DurationSeconds = ::Int`
The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see [View the Maximum Session Duration Setting for a Role](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session) in the *IAM User Guide*.

By default, the value is set to 3600 seconds.

**Note**
> The `DurationSeconds` parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a `SessionDuration` parameter that specifies the maximum length of the console session. For more information, see [Creating a URL that Enables Federated Users to Access the AWS Management Console](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html) in the *IAM User Guide*.


## `ExternalId = ::String`
A unique identifier that is used by third parties when assuming roles in their customers' accounts. For each role that the third party can assume, they should instruct their customers to ensure the role's trust policy checks for the external ID that the third party generated. Each time the third party assumes the role, they should pass the customer's external ID. The external ID is useful in order to help third parties bind a role to the customer who created it. For more information about the external ID, see [How to Use an External ID When Granting Access to Your AWS Resources to a Third Party](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) in the *IAM User Guide*.

The regex used to validated this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-


## `SerialNumber = ::String`
The identification number of the MFA device that is associated with the user who is making the `AssumeRole` call. Specify this value if the trust policy of the role being assumed includes a condition that requires MFA authentication. The value is either the serial number for a hardware device (such as `GAHT12345678`) or an Amazon Resource Name (ARN) for a virtual device (such as `arn:aws:iam::123456789012:mfa/user`).

The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-


## `TokenCode = ::String`
The value provided by the MFA device, if the trust policy of the role being assumed requires MFA (that is, if the policy includes a condition that tests for MFA). If the role being assumed requires MFA and if the `TokenCode` value is missing or expired, the `AssumeRole` call returns an "access denied" error.

The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.




# Returns

`AssumeRoleResponse`

# Exceptions

`MalformedPolicyDocumentException`, `PackedPolicyTooLargeException` or `RegionDisabledException`.

# Example: To assume a role



Input:
```
[
    "DurationSeconds" => 3600,
    "ExternalId" => "123ABC",
    "Policy" => "{"Version":"2012-10-17","Statement":[{"Sid":"Stmt1","Effect":"Allow","Action":"s3:*","Resource":"*"}]}",
    "RoleArn" => "arn:aws:iam::123456789012:role/demo",
    "RoleSessionName" => "Bob"
]
```

Output:
```
Dict(
    "AssumedRoleUser" => Dict(
        "Arn" => "arn:aws:sts::123456789012:assumed-role/demo/Bob",
        "AssumedRoleId" => "ARO123EXAMPLE123:Bob"
    ),
    "Credentials" => Dict(
        "AccessKeyId" => "AKIAIOSFODNN7EXAMPLE",
        "Expiration" => "2011-07-15T23:28:33.359Z",
        "SecretAccessKey" => "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
        "SessionToken" => "AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
    ),
    "PackedPolicySize" => 6
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/sts-2011-06-15/AssumeRole)
"""
@inline assume_role(aws::AWSConfig=default_aws_config(); args...) = assume_role(aws, args)

@inline assume_role(aws::AWSConfig, args) = AWSCore.Services.sts(aws, "AssumeRole", args)

@inline assume_role(args) = assume_role(default_aws_config(), args)


"""
    using AWSSDK.STS.assume_role_with_saml
    assume_role_with_saml([::AWSConfig], arguments::Dict)
    assume_role_with_saml([::AWSConfig]; RoleArn=, PrincipalArn=, SAMLAssertion=, <keyword arguments>)

    using AWSCore.Services.sts
    sts([::AWSConfig], "AssumeRoleWithSAML", arguments::Dict)
    sts([::AWSConfig], "AssumeRoleWithSAML", RoleArn=, PrincipalArn=, SAMLAssertion=, <keyword arguments>)

# AssumeRoleWithSAML Operation

Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response. This operation provides a mechanism for tying an enterprise identity store or directory to role-based AWS access without user-specific credentials or configuration. For a comparison of `AssumeRoleWithSAML` with the other APIs that produce temporary credentials, see [Requesting Temporary Security Credentials](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Comparing the AWS STS APIs](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison) in the *IAM User Guide*.

The temporary security credentials returned by this operation consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to AWS services.

By default, the temporary security credentials created by `AssumeRoleWithSAML` last for one hour. However, you can use the optional `DurationSeconds` parameter to specify the duration of your session. Your role session lasts for the duration that you specify, or until the time specified in the SAML authentication response's `SessionNotOnOrAfter` value, whichever is shorter. You can provide a `DurationSeconds` value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see [View the Maximum Session Duration Setting for a Role](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session) in the *IAM User Guide*. The maximum session duration limit applies when you use the `AssumeRole*` API operations or the `assume-role*` CLI operations but does not apply when you use those operations to create a console URL. For more information, see [Using IAM Roles](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) in the *IAM User Guide*.

The temporary security credentials created by `AssumeRoleWithSAML` can be used to make API calls to any AWS service with the following exception: you cannot call the STS service's `GetFederationToken` or `GetSessionToken` APIs.

Optionally, you can pass an IAM access policy to this operation. If you choose not to pass a policy, the temporary security credentials that are returned by the operation have the permissions that are defined in the access policy of the role that is being assumed. If you pass a policy to this operation, the temporary security credentials that are returned by the operation have the permissions that are allowed by the intersection of both the access policy of the role that is being assumed, ***and*** the policy that you pass. This means that both policies must grant the permission for the action to be allowed. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the access policy of the role that is being assumed. For more information, see [Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html) in the *IAM User Guide*.

Before your application can call `AssumeRoleWithSAML`, you must configure your SAML identity provider (IdP) to issue the claims required by AWS. Additionally, you must use AWS Identity and Access Management (IAM) to create a SAML provider entity in your AWS account that represents your identity provider, and create an IAM role that specifies this SAML provider in its trust policy.

Calling `AssumeRoleWithSAML` does not require the use of AWS security credentials. The identity of the caller is validated by using keys in the metadata document that is uploaded for the SAML provider entity for your identity provider.

**Important**
> Calling `AssumeRoleWithSAML` can result in an entry in your AWS CloudTrail logs. The entry includes the value in the `NameID` element of the SAML assertion. We recommend that you use a NameIDType that is not associated with any personally identifiable information (PII). For example, you could instead use the Persistent Identifier (`urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`).

For more information, see the following resources:

*   [About SAML 2.0-based Federation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html) in the *IAM User Guide*.

*   [Creating SAML Identity Providers](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html) in the *IAM User Guide*.

*   [Configuring a Relying Party and Claims](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_relying-party.html) in the *IAM User Guide*.

*   [Creating a Role for SAML 2.0 Federation](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html) in the *IAM User Guide*.

# Arguments

## `RoleArn = ::String` -- *Required*
The Amazon Resource Name (ARN) of the role that the caller is assuming.


## `PrincipalArn = ::String` -- *Required*
The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.


## `SAMLAssertion = ::String` -- *Required*
The base-64 encoded SAML authentication response provided by the IdP.

For more information, see [Configuring a Relying Party and Adding Claims](http://docs.aws.amazon.com/IAM/latest/UserGuide/create-role-saml-IdP-tasks.html) in the *Using IAM* guide.


## `Policy = ::String`
An IAM policy in JSON format.

The policy parameter is optional. If you pass a policy, the temporary security credentials that are returned by the operation have the permissions that are allowed by both the access policy of the role that is being assumed, ***and*** the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the access policy of the role that is being assumed. For more information, [Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html) in the *IAM User Guide*.

The format for this parameter, as described by its regex pattern, is a string of characters up to 2048 characters in length. The characters can be any ASCII character from the space character to the end of the valid character list (\\u0020-\\u00FF). It can also include the tab (\\u0009), linefeed (\\u000A), and carriage return (\\u000D) characters.

**Note**
> The policy plain text must be 2048 bytes or shorter. However, an internal conversion compresses it into a packed binary format with a separate limit. The PackedPolicySize response element indicates by percentage how close to the upper size limit the policy is, with 100% equaling the maximum allowed size.


## `DurationSeconds = ::Int`
The duration, in seconds, of the role session. Your role session lasts for the duration that you specify for the `DurationSeconds` parameter, or until the time specified in the SAML authentication response's `SessionNotOnOrAfter` value, whichever is shorter. You can provide a `DurationSeconds` value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see [View the Maximum Session Duration Setting for a Role](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session) in the *IAM User Guide*.

By default, the value is set to 3600 seconds.

**Note**
> The `DurationSeconds` parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a `SessionDuration` parameter that specifies the maximum length of the console session. For more information, see [Creating a URL that Enables Federated Users to Access the AWS Management Console](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html) in the *IAM User Guide*.




# Returns

`AssumeRoleWithSAMLResponse`

# Exceptions

`MalformedPolicyDocumentException`, `PackedPolicyTooLargeException`, `IDPRejectedClaimException`, `InvalidIdentityTokenException`, `ExpiredTokenException` or `RegionDisabledException`.

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/sts-2011-06-15/AssumeRoleWithSAML)
"""
@inline assume_role_with_saml(aws::AWSConfig=default_aws_config(); args...) = assume_role_with_saml(aws, args)

@inline assume_role_with_saml(aws::AWSConfig, args) = AWSCore.Services.sts(aws, "AssumeRoleWithSAML", args)

@inline assume_role_with_saml(args) = assume_role_with_saml(default_aws_config(), args)


"""
    using AWSSDK.STS.assume_role_with_web_identity
    assume_role_with_web_identity([::AWSConfig], arguments::Dict)
    assume_role_with_web_identity([::AWSConfig]; RoleArn=, RoleSessionName=, WebIdentityToken=, <keyword arguments>)

    using AWSCore.Services.sts
    sts([::AWSConfig], "AssumeRoleWithWebIdentity", arguments::Dict)
    sts([::AWSConfig], "AssumeRoleWithWebIdentity", RoleArn=, RoleSessionName=, WebIdentityToken=, <keyword arguments>)

# AssumeRoleWithWebIdentity Operation

Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider, such as Amazon Cognito, Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity provider.

**Note**
> For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the [AWS SDK for iOS](http://aws.amazon.com/sdkforios/) and the [AWS SDK for Android](http://aws.amazon.com/sdkforandroid/) to uniquely identify a user and supply the user with a consistent identity throughout the lifetime of an application.

To learn more about Amazon Cognito, see [Amazon Cognito Overview](http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-auth.html#d0e840) in the *AWS SDK for Android Developer Guide* guide and [Amazon Cognito Overview](http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-auth.html#d0e664) in the *AWS SDK for iOS Developer Guide*.

Calling `AssumeRoleWithWebIdentity` does not require the use of AWS security credentials. Therefore, you can distribute an application (for example, on mobile devices) that requests temporary security credentials without including long-term AWS credentials in the application, and without deploying server-based proxy services that use long-term AWS credentials. Instead, the identity of the caller is validated by using a token from the web identity provider. For a comparison of `AssumeRoleWithWebIdentity` with the other APIs that produce temporary credentials, see [Requesting Temporary Security Credentials](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Comparing the AWS STS APIs](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison) in the *IAM User Guide*.

The temporary security credentials returned by this API consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to AWS service APIs.

By default, the temporary security credentials created by `AssumeRoleWithWebIdentity` last for one hour. However, you can use the optional `DurationSeconds` parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see [View the Maximum Session Duration Setting for a Role](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session) in the *IAM User Guide*. The maximum session duration limit applies when you use the `AssumeRole*` API operations or the `assume-role*` CLI operations but does not apply when you use those operations to create a console URL. For more information, see [Using IAM Roles](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) in the *IAM User Guide*.

The temporary security credentials created by `AssumeRoleWithWebIdentity` can be used to make API calls to any AWS service with the following exception: you cannot call the STS service's `GetFederationToken` or `GetSessionToken` APIs.

Optionally, you can pass an IAM access policy to this operation. If you choose not to pass a policy, the temporary security credentials that are returned by the operation have the permissions that are defined in the access policy of the role that is being assumed. If you pass a policy to this operation, the temporary security credentials that are returned by the operation have the permissions that are allowed by both the access policy of the role that is being assumed, ***and*** the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the access policy of the role that is being assumed. For more information, see [Permissions for AssumeRole, AssumeRoleWithSAML, and AssumeRoleWithWebIdentity](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html) in the *IAM User Guide*.

Before your application can call `AssumeRoleWithWebIdentity`, you must have an identity token from a supported identity provider and create a role that the application can assume. The role that your application assumes must trust the identity provider that is associated with the identity token. In other words, the identity provider must be specified in the role's trust policy.

**Important**
> Calling `AssumeRoleWithWebIdentity` can result in an entry in your AWS CloudTrail logs. The entry includes the [Subject](http://openid.net/specs/openid-connect-core-1_0.html#Claims) of the provided Web Identity Token. We recommend that you avoid using any personally identifiable information (PII) in this field. For example, you could instead use a GUID or a pairwise identifier, as [suggested in the OIDC specification](http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes).

For more information about how to use web identity federation and the `AssumeRoleWithWebIdentity` API, see the following resources:

*   [Using Web Identity Federation APIs for Mobile Apps](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_manual.html) and [Federation Through a Web-based Identity Provider](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity).

*   [Web Identity Federation Playground](https://web-identity-federation-playground.s3.amazonaws.com/index.html). This interactive website lets you walk through the process of authenticating via Login with Amazon, Facebook, or Google, getting temporary security credentials, and then using those credentials to make a request to AWS.

*   [AWS SDK for iOS](http://aws.amazon.com/sdkforios/) and [AWS SDK for Android](http://aws.amazon.com/sdkforandroid/). These toolkits contain sample apps that show how to invoke the identity providers, and then how to use the information from these providers to get and use temporary security credentials.

*   [Web Identity Federation with Mobile Applications](http://aws.amazon.com/articles/web-identity-federation-with-mobile-applications). This article discusses web identity federation and shows an example of how to use web identity federation to get access to content in Amazon S3.

# Arguments

## `RoleArn = ::String` -- *Required*
The Amazon Resource Name (ARN) of the role that the caller is assuming.


## `RoleSessionName = ::String` -- *Required*
An identifier for the assumed role session. Typically, you pass the name or identifier that is associated with the user who is using your application. That way, the temporary security credentials that your application will use are associated with that user. This session name is included as part of the ARN and assumed role ID in the `AssumedRoleUser` response element.

The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-


## `WebIdentityToken = ::String` -- *Required*
The OAuth 2.0 access token or OpenID Connect ID token that is provided by the identity provider. Your application must get this token by authenticating the user who is using your application with a web identity provider before the application makes an `AssumeRoleWithWebIdentity` call.


## `ProviderId = ::String`
The fully qualified host component of the domain name of the identity provider.

Specify this value only for OAuth 2.0 access tokens. Currently `www.amazon.com` and `graph.facebook.com` are the only supported identity providers for OAuth 2.0 access tokens. Do not include URL schemes and port numbers.

Do not specify this value for OpenID Connect ID tokens.


## `Policy = ::String`
An IAM policy in JSON format.

The policy parameter is optional. If you pass a policy, the temporary security credentials that are returned by the operation have the permissions that are allowed by both the access policy of the role that is being assumed, ***and*** the policy that you pass. This gives you a way to further restrict the permissions for the resulting temporary security credentials. You cannot use the passed policy to grant permissions that are in excess of those allowed by the access policy of the role that is being assumed. For more information, see [Permissions for AssumeRoleWithWebIdentity](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_assumerole.html) in the *IAM User Guide*.

The format for this parameter, as described by its regex pattern, is a string of characters up to 2048 characters in length. The characters can be any ASCII character from the space character to the end of the valid character list (\\u0020-\\u00FF). It can also include the tab (\\u0009), linefeed (\\u000A), and carriage return (\\u000D) characters.

**Note**
> The policy plain text must be 2048 bytes or shorter. However, an internal conversion compresses it into a packed binary format with a separate limit. The PackedPolicySize response element indicates by percentage how close to the upper size limit the policy is, with 100% equaling the maximum allowed size.


## `DurationSeconds = ::Int`
The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see [View the Maximum Session Duration Setting for a Role](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session) in the *IAM User Guide*.

By default, the value is set to 3600 seconds.

**Note**
> The `DurationSeconds` parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a `SessionDuration` parameter that specifies the maximum length of the console session. For more information, see [Creating a URL that Enables Federated Users to Access the AWS Management Console](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html) in the *IAM User Guide*.




# Returns

`AssumeRoleWithWebIdentityResponse`

# Exceptions

`MalformedPolicyDocumentException`, `PackedPolicyTooLargeException`, `IDPRejectedClaimException`, `IDPCommunicationErrorException`, `InvalidIdentityTokenException`, `ExpiredTokenException` or `RegionDisabledException`.

# Example: To assume a role as an OpenID Connect-federated user



Input:
```
[
    "DurationSeconds" => 3600,
    "ProviderId" => "www.amazon.com",
    "RoleArn" => "arn:aws:iam::123456789012:role/FederatedWebIdentityRole",
    "RoleSessionName" => "app1",
    "WebIdentityToken" => "Atza%7CIQEBLjAsAhRFiXuWpUXuRvQ9PZL3GMFcYevydwIUFAHZwXZXXXXXXXXJnrulxKDHwy87oGKPznh0D6bEQZTSCzyoCtL_8S07pLpr0zMbn6w1lfVZKNTBdDansFBmtGnIsIapjI6xKR02Yc_2bQ8LZbUXSGm6Ry6_BG7PrtLZtj_dfCTj92xNGed-CrKqjG7nPBjNIL016GGvuS5gSvPRUxWES3VYfm1wl7WTI7jn-Pcb6M-buCgHhFOzTQxod27L9CqnOLio7N3gZAGpsp6n1-AJBOCJckcyXe2c6uD0srOJeZlKUm2eTDVMf8IehDVI0r1QOnTV6KzzAI3OY87Vd_cVMQ"
]
```

Output:
```
Dict(
    "AssumedRoleUser" => Dict(
        "Arn" => "arn:aws:sts::123456789012:assumed-role/FederatedWebIdentityRole/app1",
        "AssumedRoleId" => "AROACLKWSDQRAOEXAMPLE:app1"
    ),
    "Audience" => "client.5498841531868486423.1548@apps.example.com",
    "Credentials" => Dict(
        "AccessKeyId" => "AKIAIOSFODNN7EXAMPLE",
        "Expiration" => "2014-10-24T23:00:23Z",
        "SecretAccessKey" => "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
        "SessionToken" => "AQoDYXdzEE0a8ANXXXXXXXXNO1ewxE5TijQyp+IEXAMPLE"
    ),
    "PackedPolicySize" => 123,
    "Provider" => "www.amazon.com",
    "SubjectFromWebIdentityToken" => "amzn1.account.AF6RHO7KZU5XRVQJGXK6HEXAMPLE"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/sts-2011-06-15/AssumeRoleWithWebIdentity)
"""
@inline assume_role_with_web_identity(aws::AWSConfig=default_aws_config(); args...) = assume_role_with_web_identity(aws, args)

@inline assume_role_with_web_identity(aws::AWSConfig, args) = AWSCore.Services.sts(aws, "AssumeRoleWithWebIdentity", args)

@inline assume_role_with_web_identity(args) = assume_role_with_web_identity(default_aws_config(), args)


"""
    using AWSSDK.STS.decode_authorization_message
    decode_authorization_message([::AWSConfig], arguments::Dict)
    decode_authorization_message([::AWSConfig]; EncodedMessage=)

    using AWSCore.Services.sts
    sts([::AWSConfig], "DecodeAuthorizationMessage", arguments::Dict)
    sts([::AWSConfig], "DecodeAuthorizationMessage", EncodedMessage=)

# DecodeAuthorizationMessage Operation

Decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request.

For example, if a user is not authorized to perform an action that he or she has requested, the request returns a `Client.UnauthorizedOperation` response (an HTTP 403 response). Some AWS actions additionally return an encoded message that can provide details about this authorization failure.

**Note**
> Only certain AWS actions return an encoded authorization message. The documentation for an individual action indicates whether that action returns an encoded message in addition to returning an HTTP code.

The message is encoded because the details of the authorization status can constitute privileged information that the user who requested the action should not see. To decode an authorization status message, a user must be granted permissions via an IAM policy to request the `DecodeAuthorizationMessage` (`sts:DecodeAuthorizationMessage`) action.

The decoded message includes the following type of information:

*   Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see [Determining Whether a Request is Allowed or Denied](http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow) in the *IAM User Guide*.

*   The principal who made the request.

*   The requested action.

*   The requested resource.

*   The values of condition keys in the context of the user's request.

# Arguments

## `EncodedMessage = ::String` -- *Required*
The encoded message that was returned with the response.




# Returns

`DecodeAuthorizationMessageResponse`

# Exceptions

`InvalidAuthorizationMessageException`.

# Example: To decode information about an authorization status of a request



Input:
```
[
    "EncodedMessage" => "<encoded-message>"
]
```

Output:
```
Dict(
    "DecodedMessage" => "{"allowed": "false","explicitDeny": "false","matchedStatements": "","failures": "","context": {"principal": {"id": "AIDACKCEVSQ6C2EXAMPLE","name": "Bob","arn": "arn:aws:iam::123456789012:user/Bob"},"action": "ec2:StopInstances","resource": "arn:aws:ec2:us-east-1:123456789012:instance/i-dd01c9bd","conditions": [{"item": {"key": "ec2:Tenancy","values": ["default"]},{"item": {"key": "ec2:ResourceTag/elasticbeanstalk:environment-name","values": ["Default-Environment"]}},(Additional items ...)]}}"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/sts-2011-06-15/DecodeAuthorizationMessage)
"""
@inline decode_authorization_message(aws::AWSConfig=default_aws_config(); args...) = decode_authorization_message(aws, args)

@inline decode_authorization_message(aws::AWSConfig, args) = AWSCore.Services.sts(aws, "DecodeAuthorizationMessage", args)

@inline decode_authorization_message(args) = decode_authorization_message(default_aws_config(), args)


"""
    using AWSSDK.STS.get_caller_identity
    get_caller_identity([::AWSConfig], arguments::Dict)
    get_caller_identity([::AWSConfig]; )

    using AWSCore.Services.sts
    sts([::AWSConfig], "GetCallerIdentity", arguments::Dict)
    sts([::AWSConfig], "GetCallerIdentity", )

# GetCallerIdentity Operation

Returns details about the IAM identity whose credentials are used to call the API.

# Arguments



# Returns

`GetCallerIdentityResponse`

# Example: To get details about a calling IAM user

This example shows a request and response made with the credentials for a user named Alice in the AWS account 123456789012.

Input:
```
[

]
```

Output:
```
Dict(
    "Account" => "123456789012",
    "Arn" => "arn:aws:iam::123456789012:user/Alice",
    "UserId" => "AKIAI44QH8DHBEXAMPLE"
)
```

# Example: To get details about a calling user federated with AssumeRole

This example shows a request and response made with temporary credentials created by AssumeRole. The name of the assumed role is my-role-name, and the RoleSessionName is set to my-role-session-name.

Input:
```
[

]
```

Output:
```
Dict(
    "Account" => "123456789012",
    "Arn" => "arn:aws:sts::123456789012:assumed-role/my-role-name/my-role-session-name",
    "UserId" => "AKIAI44QH8DHBEXAMPLE:my-role-session-name"
)
```

# Example: To get details about a calling user federated with GetFederationToken

This example shows a request and response made with temporary credentials created by using GetFederationToken. The Name parameter is set to my-federated-user-name.

Input:
```
[

]
```

Output:
```
Dict(
    "Account" => "123456789012",
    "Arn" => "arn:aws:sts::123456789012:federated-user/my-federated-user-name",
    "UserId" => "123456789012:my-federated-user-name"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/sts-2011-06-15/GetCallerIdentity)
"""
@inline get_caller_identity(aws::AWSConfig=default_aws_config(); args...) = get_caller_identity(aws, args)

@inline get_caller_identity(aws::AWSConfig, args) = AWSCore.Services.sts(aws, "GetCallerIdentity", args)

@inline get_caller_identity(args) = get_caller_identity(default_aws_config(), args)


"""
    using AWSSDK.STS.get_federation_token
    get_federation_token([::AWSConfig], arguments::Dict)
    get_federation_token([::AWSConfig]; Name=, <keyword arguments>)

    using AWSCore.Services.sts
    sts([::AWSConfig], "GetFederationToken", arguments::Dict)
    sts([::AWSConfig], "GetFederationToken", Name=, <keyword arguments>)

# GetFederationToken Operation

Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user. A typical use is in a proxy application that gets temporary security credentials on behalf of distributed applications inside a corporate network. Because you must call the `GetFederationToken` action using the long-term security credentials of an IAM user, this call is appropriate in contexts where those credentials can be safely stored, usually in a server-based application. For a comparison of `GetFederationToken` with the other APIs that produce temporary credentials, see [Requesting Temporary Security Credentials](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Comparing the AWS STS APIs](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison) in the *IAM User Guide*.

**Note**
> If you are creating a mobile-based or browser-based app that can authenticate users using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID Connect-compatible identity provider, we recommend that you use [Amazon Cognito](http://aws.amazon.com/cognito/) or `AssumeRoleWithWebIdentity`. For more information, see [Federation Through a Web-based Identity Provider](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity).

The `GetFederationToken` action must be called by using the long-term AWS security credentials of an IAM user. You can also call `GetFederationToken` using the security credentials of an AWS root account, but we do not recommended it. Instead, we recommend that you create an IAM user for the purpose of the proxy application and then attach a policy to the IAM user that limits federated users to only the actions and resources that they need access to. For more information, see [IAM Best Practices](http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) in the *IAM User Guide*.

The temporary security credentials that are obtained by using the long-term credentials of an IAM user are valid for the specified duration, from 900 seconds (15 minutes) up to a maximium of 129600 seconds (36 hours). The default is 43200 seconds (12 hours). Temporary credentials that are obtained by using AWS root account credentials have a maximum duration of 3600 seconds (1 hour).

The temporary security credentials created by `GetFederationToken` can be used to make API calls to any AWS service with the following exceptions:

*   You cannot use these credentials to call any IAM APIs.

*   You cannot call any STS APIs except `GetCallerIdentity`.

**Permissions**

The permissions for the temporary security credentials returned by `GetFederationToken` are determined by a combination of the following:

*   The policy or policies that are attached to the IAM user whose credentials are used to call `GetFederationToken`.

*   The policy that is passed as a parameter in the call.

The passed policy is attached to the temporary security credentials that result from the `GetFederationToken` API call--that is, to the *federated user*. When the federated user makes an AWS request, AWS evaluates the policy attached to the federated user in combination with the policy or policies attached to the IAM user whose credentials were used to call `GetFederationToken`. AWS allows the federated user's request only when both the federated user ***and*** the IAM user are explicitly allowed to perform the requested action. The passed policy cannot grant more permissions than those that are defined in the IAM user policy.

A typical use case is that the permissions of the IAM user whose credentials are used to call `GetFederationToken` are designed to allow access to all the actions and resources that any federated user will need. Then, for individual users, you pass a policy to the operation that scopes down the permissions to a level that's appropriate to that individual user, using a policy that allows only a subset of permissions that are granted to the IAM user.

If you do not pass a policy, the resulting temporary security credentials have no effective permissions. The only exception is when the temporary security credentials are used to access a resource that has a resource-based policy that specifically allows the federated user to access the resource.

For more information about how permissions work, see [Permissions for GetFederationToken](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_getfederationtoken.html). For information about using `GetFederationToken` to create temporary security credentials, see [GetFederationToken—Federation Through a Custom Identity Broker](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getfederationtoken).

# Arguments

## `Name = ::String` -- *Required*
The name of the federated user. The name is used as an identifier for the temporary security credentials (such as `Bob`). For example, you can reference the federated user name in a resource-based policy, such as in an Amazon S3 bucket policy.

The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-


## `Policy = ::String`
An IAM policy in JSON format that is passed with the `GetFederationToken` call and evaluated along with the policy or policies that are attached to the IAM user whose credentials are used to call `GetFederationToken`. The passed policy is used to scope down the permissions that are available to the IAM user, by allowing only a subset of the permissions that are granted to the IAM user. The passed policy cannot grant more permissions than those granted to the IAM user. The final permissions for the federated user are the most restrictive set based on the intersection of the passed policy and the IAM user policy.

If you do not pass a policy, the resulting temporary security credentials have no effective permissions. The only exception is when the temporary security credentials are used to access a resource that has a resource-based policy that specifically allows the federated user to access the resource.

The format for this parameter, as described by its regex pattern, is a string of characters up to 2048 characters in length. The characters can be any ASCII character from the space character to the end of the valid character list (\\u0020-\\u00FF). It can also include the tab (\\u0009), linefeed (\\u000A), and carriage return (\\u000D) characters.

**Note**
> The policy plain text must be 2048 bytes or shorter. However, an internal conversion compresses it into a packed binary format with a separate limit. The PackedPolicySize response element indicates by percentage how close to the upper size limit the policy is, with 100% equaling the maximum allowed size.

For more information about how permissions work, see [Permissions for GetFederationToken](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_getfederationtoken.html).


## `DurationSeconds = ::Int`
The duration, in seconds, that the session should last. Acceptable durations for federation sessions range from 900 seconds (15 minutes) to 129600 seconds (36 hours), with 43200 seconds (12 hours) as the default. Sessions obtained using AWS account (root) credentials are restricted to a maximum of 3600 seconds (one hour). If the specified duration is longer than one hour, the session obtained by using AWS account (root) credentials defaults to one hour.




# Returns

`GetFederationTokenResponse`

# Exceptions

`MalformedPolicyDocumentException`, `PackedPolicyTooLargeException` or `RegionDisabledException`.

# Example: To get temporary credentials for a role by using GetFederationToken



Input:
```
[
    "DurationSeconds" => 3600,
    "Name" => "Bob",
    "Policy" => "{"Version":"2012-10-17","Statement":[{"Sid":"Stmt1","Effect":"Allow","Action":"s3:*","Resource":"*"}]}"
]
```

Output:
```
Dict(
    "Credentials" => Dict(
        "AccessKeyId" => "AKIAIOSFODNN7EXAMPLE",
        "Expiration" => "2011-07-15T23:28:33.359Z",
        "SecretAccessKey" => "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
        "SessionToken" => "AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
    ),
    "FederatedUser" => Dict(
        "Arn" => "arn:aws:sts::123456789012:federated-user/Bob",
        "FederatedUserId" => "123456789012:Bob"
    ),
    "PackedPolicySize" => 6
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/sts-2011-06-15/GetFederationToken)
"""
@inline get_federation_token(aws::AWSConfig=default_aws_config(); args...) = get_federation_token(aws, args)

@inline get_federation_token(aws::AWSConfig, args) = AWSCore.Services.sts(aws, "GetFederationToken", args)

@inline get_federation_token(args) = get_federation_token(default_aws_config(), args)


"""
    using AWSSDK.STS.get_session_token
    get_session_token([::AWSConfig], arguments::Dict)
    get_session_token([::AWSConfig]; <keyword arguments>)

    using AWSCore.Services.sts
    sts([::AWSConfig], "GetSessionToken", arguments::Dict)
    sts([::AWSConfig], "GetSessionToken", <keyword arguments>)

# GetSessionToken Operation

Returns a set of temporary credentials for an AWS account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use `GetSessionToken` if you want to use MFA to protect programmatic calls to specific AWS APIs like Amazon EC2 `StopInstances`. MFA-enabled IAM users would need to call `GetSessionToken` and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that are returned from the call, IAM users can then make programmatic calls to APIs that require MFA authentication. If you do not supply a correct MFA code, then the API returns an access denied error. For a comparison of `GetSessionToken` with the other APIs that produce temporary credentials, see [Requesting Temporary Security Credentials](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html) and [Comparing the AWS STS APIs](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison) in the *IAM User Guide*.

The `GetSessionToken` action must be called by using the long-term AWS security credentials of the AWS account or an IAM user. Credentials that are created by IAM users are valid for the duration that you specify, from 900 seconds (15 minutes) up to a maximum of 129600 seconds (36 hours), with a default of 43200 seconds (12 hours); credentials that are created by using account credentials can range from 900 seconds (15 minutes) up to a maximum of 3600 seconds (1 hour), with a default of 1 hour.

The temporary security credentials created by `GetSessionToken` can be used to make API calls to any AWS service with the following exceptions:

*   You cannot call any IAM APIs unless MFA authentication information is included in the request.

*   You cannot call any STS API *except* `AssumeRole` or `GetCallerIdentity`.

**Note**
> We recommend that you do not call `GetSessionToken` with root account credentials. Instead, follow our [best practices](http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users) by creating one or more IAM users, giving them the necessary permissions, and using IAM users for everyday interaction with AWS.

The permissions associated with the temporary security credentials returned by `GetSessionToken` are based on the permissions associated with account or IAM user whose credentials are used to call the action. If `GetSessionToken` is called using root account credentials, the temporary credentials have root account permissions. Similarly, if `GetSessionToken` is called using the credentials of an IAM user, the temporary credentials have the same permissions as the IAM user.

For more information about using `GetSessionToken` to create temporary credentials, go to [Temporary Credentials for Users in Untrusted Environments](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken) in the *IAM User Guide*.

# Arguments

## `DurationSeconds = ::Int`
The duration, in seconds, that the credentials should remain valid. Acceptable durations for IAM user sessions range from 900 seconds (15 minutes) to 129600 seconds (36 hours), with 43200 seconds (12 hours) as the default. Sessions for AWS account owners are restricted to a maximum of 3600 seconds (one hour). If the duration is longer than one hour, the session for AWS account owners defaults to one hour.


## `SerialNumber = ::String`
The identification number of the MFA device that is associated with the IAM user who is making the `GetSessionToken` call. Specify this value if the IAM user has a policy that requires MFA authentication. The value is either the serial number for a hardware device (such as `GAHT12345678`) or an Amazon Resource Name (ARN) for a virtual device (such as `arn:aws:iam::123456789012:mfa/user`). You can find the device for an IAM user by going to the AWS Management Console and viewing the user's security credentials.

The regex used to validated this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-


## `TokenCode = ::String`
The value provided by the MFA device, if MFA is required. If any policy requires the IAM user to submit an MFA code, specify this value. If MFA authentication is required, and the user does not provide a code when requesting a set of temporary security credentials, the user will receive an "access denied" response when requesting resources that require MFA authentication.

The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.




# Returns

`GetSessionTokenResponse`

# Exceptions

`RegionDisabledException`.

# Example: To get temporary credentials for an IAM user or an AWS account



Input:
```
[
    "DurationSeconds" => 3600,
    "SerialNumber" => "YourMFASerialNumber",
    "TokenCode" => "123456"
]
```

Output:
```
Dict(
    "Credentials" => Dict(
        "AccessKeyId" => "AKIAIOSFODNN7EXAMPLE",
        "Expiration" => "2011-07-11T19:55:29.611Z",
        "SecretAccessKey" => "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
        "SessionToken" => "AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c/LTo6UDdyJwOOvEVPvLXCrrrUtdnniCEXAMPLE/IvU1dYUg2RVAJBanLiHb4IgRmpRV3zrkuWJOgQs8IZZaIv2BXIa2R4OlgkBN9bkUDNCJiBeb/AXlzBBko7b15fjrBs2+cTQtpZ3CYWFXG8C5zqx37wnOE49mRl/+OtkIKGO7fAE"
    )
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/sts-2011-06-15/GetSessionToken)
"""
@inline get_session_token(aws::AWSConfig=default_aws_config(); args...) = get_session_token(aws, args)

@inline get_session_token(aws::AWSConfig, args) = AWSCore.Services.sts(aws, "GetSessionToken", args)

@inline get_session_token(args) = get_session_token(default_aws_config(), args)




end # module STS


#==============================================================================#
# End of file
#==============================================================================#
