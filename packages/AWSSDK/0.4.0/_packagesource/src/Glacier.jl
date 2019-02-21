#==============================================================================#
# Glacier.jl
#
# This file is generated from:
# https://github.com/aws/aws-sdk-js/blob/master/apis/glacier-2012-06-01.normal.json
#==============================================================================#

__precompile__()

module Glacier

using AWSCore


"""
    using AWSSDK.Glacier.abort_multipart_upload
    abort_multipart_upload([::AWSConfig], arguments::Dict)
    abort_multipart_upload([::AWSConfig]; accountId=, vaultName=, uploadId=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", arguments::Dict)
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", accountId=, vaultName=, uploadId=)

# AbortMultipartUpload Operation

This operation aborts a multipart upload identified by the upload ID.

After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see [UploadMultipartPart](@ref) and [CompleteMultipartUpload](@ref).

This operation is idempotent.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Working with Archives in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html) and [Abort Multipart Upload](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `uploadId = ::String` -- *Required*
The upload ID of the multipart upload to delete.




# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To abort a multipart upload identified by the upload ID

The example deletes an in-progress multipart upload to a vault named my-vault:

Input:
```
[
    "accountId" => "-",
    "uploadId" => "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
    "vaultName" => "my-vault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/AbortMultipartUpload)
"""
@inline abort_multipart_upload(aws::AWSConfig=default_aws_config(); args...) = abort_multipart_upload(aws, args)

@inline abort_multipart_upload(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "DELETE", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", args)

@inline abort_multipart_upload(args) = abort_multipart_upload(default_aws_config(), args)


"""
    using AWSSDK.Glacier.abort_vault_lock
    abort_vault_lock([::AWSConfig], arguments::Dict)
    abort_vault_lock([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/lock-policy", arguments::Dict)
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/lock-policy", accountId=, vaultName=)

# AbortVaultLock Operation

This operation aborts the vault locking process if the vault lock is not in the `Locked` state. If the vault lock is in the `Locked` state when this operation is requested, the operation returns an `AccessDeniedException` error. Aborting the vault locking process removes the vault lock policy from the specified vault.

A vault lock is put into the `InProgress` state by calling [InitiateVaultLock](@ref). A vault lock is put into the `Locked` state by calling [CompleteVaultLock](@ref). You can get the state of a vault lock by calling [GetVaultLock](@ref). For more information about the vault locking process, see [Amazon Glacier Vault Lock](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html). For more information about vault lock policies, see [Amazon Glacier Access Control with Vault Lock Policies](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html).

This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the `InProgress` state or if there is no policy associated with the vault.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To abort a vault lock

The example aborts the vault locking process if the vault lock is not in the Locked state for the vault named examplevault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "examplevault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/AbortVaultLock)
"""
@inline abort_vault_lock(aws::AWSConfig=default_aws_config(); args...) = abort_vault_lock(aws, args)

@inline abort_vault_lock(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "DELETE", "/{accountId}/vaults/{vaultName}/lock-policy", args)

@inline abort_vault_lock(args) = abort_vault_lock(default_aws_config(), args)


"""
    using AWSSDK.Glacier.add_tags_to_vault
    add_tags_to_vault([::AWSConfig], arguments::Dict)
    add_tags_to_vault([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/tags?operation=add", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/tags?operation=add", accountId=, vaultName=, <keyword arguments>)

# AddTagsToVault Operation

This operation adds the specified tags to a vault. Each tag is composed of a key and a value. Each vault can have up to 10 tags. If your request would cause the tag limit for the vault to be exceeded, the operation throws the `LimitExceededException` error. If a tag already exists on the vault under a specified key, the existing key value will be overwritten. For more information about tags, see [Tagging Amazon Glacier Resources](http://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `Tags = ::Dict{String,String}`
The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string.




# Exceptions

`InvalidParameterValueException`, `MissingParameterValueException`, `ResourceNotFoundException`, `LimitExceededException` or `ServiceUnavailableException`.

# Example: To add tags to a vault

The example adds two tags to a my-vault.

Input:
```
[
    "Tags" => [
        "examplekey1" => "examplevalue1",
        "examplekey2" => "examplevalue2"
    ],
    "accountId" => "-",
    "vaultName" => "my-vault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/AddTagsToVault)
"""
@inline add_tags_to_vault(aws::AWSConfig=default_aws_config(); args...) = add_tags_to_vault(aws, args)

@inline add_tags_to_vault(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/vaults/{vaultName}/tags?operation=add", args)

@inline add_tags_to_vault(args) = add_tags_to_vault(default_aws_config(), args)


"""
    using AWSSDK.Glacier.complete_multipart_upload
    complete_multipart_upload([::AWSConfig], arguments::Dict)
    complete_multipart_upload([::AWSConfig]; accountId=, vaultName=, uploadId=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", accountId=, vaultName=, uploadId=, <keyword arguments>)

# CompleteMultipartUpload Operation

You call this operation to inform Amazon Glacier that all the archive parts have been uploaded and that Amazon Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Amazon Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see [InitiateJob](@ref).

In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see [Computing Checksums](http://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html). On the server side, Amazon Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Amazon Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The [ListParts](@ref) operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue.

Additionally, Amazon Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Amazon Glacier returns an error and the operation fails.

Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Uploading Large Archives in Parts (Multipart Upload)](http://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html) and [Complete Multipart Upload](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `uploadId = ::String` -- *Required*
The upload ID of the multipart upload.


## `*header:* x-amz-archive-size = ::String`
The total size, in bytes, of the entire archive. This value should be the sum of all the sizes of the individual parts that you uploaded.


## `*header:* x-amz-sha256-tree-hash = ::String`
The SHA256 tree hash of the entire archive. It is the tree hash of SHA256 tree hash of the individual parts. If the value you specify in the request does not match the SHA256 tree hash of the final assembled archive as computed by Amazon Glacier, Amazon Glacier returns an error and the request fails.




# Returns

`ArchiveCreationOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To complete a multipart upload

The example completes a multipart upload for a 3 MiB archive.

Input:
```
[
    "accountId" => "-",
    "archiveSize" => "3145728",
    "checksum" => "9628195fcdbcbbe76cdde456d4646fa7de5f219fb39823836d81f0cc0e18aa67",
    "uploadId" => "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "archiveId" => "NkbByEejwEggmBz2fTHgJrg0XBoDfjP4q6iu87-TjhqG6eGoOY9Z8i1_AUyUsuhPAdTqLHy8pTl5nfCFJmDl2yEZONi5L26Omw12vcs01MNGntHEQL8MBfGlqrEXAMPLEArchiveId",
    "checksum" => "9628195fcdbcbbe76cdde456d4646fa7de5f219fb39823836d81f0cc0e18aa67",
    "location" => "/111122223333/vaults/my-vault/archives/NkbByEejwEggmBz2fTHgJrg0XBoDfjP4q6iu87-TjhqG6eGoOY9Z8i1_AUyUsuhPAdTqLHy8pTl5nfCFJmDl2yEZONi5L26Omw12vcs01MNGntHEQL8MBfGlqrEXAMPLEArchiveId"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/CompleteMultipartUpload)
"""
@inline complete_multipart_upload(aws::AWSConfig=default_aws_config(); args...) = complete_multipart_upload(aws, args)

@inline complete_multipart_upload(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", args)

@inline complete_multipart_upload(args) = complete_multipart_upload(default_aws_config(), args)


"""
    using AWSSDK.Glacier.complete_vault_lock
    complete_vault_lock([::AWSConfig], arguments::Dict)
    complete_vault_lock([::AWSConfig]; accountId=, vaultName=, lockId=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}", accountId=, vaultName=, lockId=)

# CompleteVaultLock Operation

This operation completes the vault locking process by transitioning the vault lock from the `InProgress` state to the `Locked` state, which causes the vault lock policy to become unchangeable. A vault lock is put into the `InProgress` state by calling [InitiateVaultLock](@ref). You can obtain the state of the vault lock by calling [GetVaultLock](@ref). For more information about the vault locking process, [Amazon Glacier Vault Lock](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html).

This operation is idempotent. This request is always successful if the vault lock is in the `Locked` state and the provided lock ID matches the lock ID originally used to lock the vault.

If an invalid lock ID is passed in the request when the vault lock is in the `Locked` state, the operation returns an `AccessDeniedException` error. If an invalid lock ID is passed in the request when the vault lock is in the `InProgress` state, the operation throws an `InvalidParameter` error.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `lockId = ::String` -- *Required*
The `lockId` value is the lock ID obtained from a [InitiateVaultLock](@ref) request.




# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To complete a vault lock

The example completes the vault locking process by transitioning the vault lock from the InProgress state to the Locked state.

Input:
```
[
    "accountId" => "-",
    "lockId" => "AE863rKkWZU53SLW5be4DUcW",
    "vaultName" => "example-vault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/CompleteVaultLock)
"""
@inline complete_vault_lock(aws::AWSConfig=default_aws_config(); args...) = complete_vault_lock(aws, args)

@inline complete_vault_lock(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}", args)

@inline complete_vault_lock(args) = complete_vault_lock(default_aws_config(), args)


"""
    using AWSSDK.Glacier.create_vault
    create_vault([::AWSConfig], arguments::Dict)
    create_vault([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "PUT", "/{accountId}/vaults/{vaultName}", arguments::Dict)
    glacier([::AWSConfig], "PUT", "/{accountId}/vaults/{vaultName}", accountId=, vaultName=)

# CreateVault Operation

This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon Glacier.

You must use the following guidelines when naming a vault.

*   Names can be between 1 and 255 characters long.

*   Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period).

This operation is idempotent.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Creating a Vault in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html) and [Create Vault](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Returns

`CreateVaultOutput`

# Exceptions

`InvalidParameterValueException`, `MissingParameterValueException`, `ServiceUnavailableException` or `LimitExceededException`.

# Example: To create a new vault

The following example creates a new vault named my-vault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "location" => "/111122223333/vaults/my-vault"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/CreateVault)
"""
@inline create_vault(aws::AWSConfig=default_aws_config(); args...) = create_vault(aws, args)

@inline create_vault(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "PUT", "/{accountId}/vaults/{vaultName}", args)

@inline create_vault(args) = create_vault(default_aws_config(), args)


"""
    using AWSSDK.Glacier.delete_archive
    delete_archive([::AWSConfig], arguments::Dict)
    delete_archive([::AWSConfig]; accountId=, vaultName=, archiveId=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/archives/{archiveId}", arguments::Dict)
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/archives/{archiveId}", accountId=, vaultName=, archiveId=)

# DeleteArchive Operation

This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios:

*   If the archive retrieval job is actively preparing the data for download when Amazon Glacier receives the delete archive request, the archival retrieval operation might fail.

*   If the archive retrieval job has successfully prepared the archive for download when Amazon Glacier receives the delete archive request, you will be able to download the output.

This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Deleting an Archive in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-an-archive.html) and [Delete Archive](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `archiveId = ::String` -- *Required*
The ID of the archive to delete.




# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To delete an archive

The example deletes the archive specified by the archive ID.

Input:
```
[
    "accountId" => "-",
    "archiveId" => "NkbByEejwEggmBz2fTHgJrg0XBoDfjP4q6iu87-TjhqG6eGoOY9Z8i1_AUyUsuhPAdTqLHy8pTl5nfCFJmDl2yEZONi5L26Omw12vcs01MNGntHEQL8MBfGlqrEXAMPLEArchiveId",
    "vaultName" => "examplevault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/DeleteArchive)
"""
@inline delete_archive(aws::AWSConfig=default_aws_config(); args...) = delete_archive(aws, args)

@inline delete_archive(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "DELETE", "/{accountId}/vaults/{vaultName}/archives/{archiveId}", args)

@inline delete_archive(args) = delete_archive(default_aws_config(), args)


"""
    using AWSSDK.Glacier.delete_vault
    delete_vault([::AWSConfig], arguments::Dict)
    delete_vault([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}", arguments::Dict)
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}", accountId=, vaultName=)

# DeleteVault Operation

This operation deletes a vault. Amazon Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon Glacier returns an error. You can use [DescribeVault](@ref) to return the number of archives in a vault, and you can use [Initiate a Job (POST jobs)](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html) to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using [Delete Archive (DELETE archive)](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html).

This operation is idempotent.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Deleting a Vault in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults.html) and [Delete Vault](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To delete a vault

The example deletes a vault named my-vault:

Input:
```
[
    "accountId" => "-",
    "vaultName" => "my-vault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/DeleteVault)
"""
@inline delete_vault(aws::AWSConfig=default_aws_config(); args...) = delete_vault(aws, args)

@inline delete_vault(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "DELETE", "/{accountId}/vaults/{vaultName}", args)

@inline delete_vault(args) = delete_vault(default_aws_config(), args)


"""
    using AWSSDK.Glacier.delete_vault_access_policy
    delete_vault_access_policy([::AWSConfig], arguments::Dict)
    delete_vault_access_policy([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/access-policy", arguments::Dict)
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/access-policy", accountId=, vaultName=)

# DeleteVaultAccessPolicy Operation

This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request.

This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see [Amazon Glacier Access Control with Vault Access Policies](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To delete the vault access policy

The example deletes the access policy associated with the vault named examplevault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "examplevault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/DeleteVaultAccessPolicy)
"""
@inline delete_vault_access_policy(aws::AWSConfig=default_aws_config(); args...) = delete_vault_access_policy(aws, args)

@inline delete_vault_access_policy(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "DELETE", "/{accountId}/vaults/{vaultName}/access-policy", args)

@inline delete_vault_access_policy(args) = delete_vault_access_policy(default_aws_config(), args)


"""
    using AWSSDK.Glacier.delete_vault_notifications
    delete_vault_notifications([::AWSConfig], arguments::Dict)
    delete_vault_notifications([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/notification-configuration", arguments::Dict)
    glacier([::AWSConfig], "DELETE", "/{accountId}/vaults/{vaultName}/notification-configuration", accountId=, vaultName=)

# DeleteVaultNotifications Operation

This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Configuring Vault Notifications in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html) and [Delete Vault Notification Configuration](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html) in the Amazon Glacier Developer Guide.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To delete the notification configuration set for a vault

The example deletes the notification configuration set for the vault named examplevault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "examplevault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/DeleteVaultNotifications)
"""
@inline delete_vault_notifications(aws::AWSConfig=default_aws_config(); args...) = delete_vault_notifications(aws, args)

@inline delete_vault_notifications(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "DELETE", "/{accountId}/vaults/{vaultName}/notification-configuration", args)

@inline delete_vault_notifications(args) = delete_vault_notifications(default_aws_config(), args)


"""
    using AWSSDK.Glacier.describe_job
    describe_job([::AWSConfig], arguments::Dict)
    describe_job([::AWSConfig]; accountId=, vaultName=, jobId=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/jobs/{jobId}", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/jobs/{jobId}", accountId=, vaultName=, jobId=)

# DescribeJob Operation

This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon Glacier completes the job. For more information about initiating a job, see [InitiateJob](@ref).

**Note**
> This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Amazon Glacier can notify the topic after it completes the job.

A job ID will not expire for at least 24 hours after Amazon Glacier completes the job.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For more information about using this operation, see the documentation for the underlying REST API [Describe Job](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `jobId = ::String` -- *Required*
The ID of the job to describe.




# Returns

`GlacierJobDescription`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To get information about a previously initiated job

The example returns information about the previously initiated job specified by the job ID.

Input:
```
[
    "accountId" => "-",
    "jobId" => "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4Cn",
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "Action" => "InventoryRetrieval",
    "Completed" => false,
    "CreationDate" => "2015-07-17T20:23:41.616Z",
    "InventoryRetrievalParameters" => Dict(
        "Format" => "JSON"
    ),
    "JobId" => "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
    "StatusCode" => "InProgress",
    "VaultARN" => "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/DescribeJob)
"""
@inline describe_job(aws::AWSConfig=default_aws_config(); args...) = describe_job(aws, args)

@inline describe_job(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/jobs/{jobId}", args)

@inline describe_job(args) = describe_job(default_aws_config(), args)


"""
    using AWSSDK.Glacier.describe_vault
    describe_vault([::AWSConfig], arguments::Dict)
    describe_vault([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}", accountId=, vaultName=)

# DescribeVault Operation

This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use [InitiateJob](@ref). Amazon Glacier generates vault inventories approximately daily. For more information, see [Downloading a Vault Inventory in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html).

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Retrieving Vault Metadata in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html) and [Describe Vault](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Returns

`DescribeVaultOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To retrieve information about a vault

The example retrieves data about a vault named my-vault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "CreationDate" => "2016-09-23T19:27:18.665Z",
    "NumberOfArchives" => 0,
    "SizeInBytes" => 0,
    "VaultARN" => "arn:aws:glacier:us-west-2:111122223333:vaults/my-vault",
    "VaultName" => "my-vault"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/DescribeVault)
"""
@inline describe_vault(aws::AWSConfig=default_aws_config(); args...) = describe_vault(aws, args)

@inline describe_vault(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}", args)

@inline describe_vault(args) = describe_vault(default_aws_config(), args)


"""
    using AWSSDK.Glacier.get_data_retrieval_policy
    get_data_retrieval_policy([::AWSConfig], arguments::Dict)
    get_data_retrieval_policy([::AWSConfig]; accountId=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/policies/data-retrieval", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/policies/data-retrieval", accountId=)

# GetDataRetrievalPolicy Operation

This operation returns the current data retrieval policy for the account and region specified in the GET request. For more information about data retrieval policies, see [Amazon Glacier Data Retrieval Policies](http://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.




# Returns

`GetDataRetrievalPolicyOutput`

# Exceptions

`InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To get the current data retrieval policy for an account

The example returns the current data retrieval policy for the account.

Input:
```
[
    "accountId" => "-"
]
```

Output:
```
Dict(
    "Policy" => Dict(
        "Rules" => [
            Dict(
                "BytesPerHour" => 10737418240,
                "Strategy" => "BytesPerHour"
            )
        ]
    )
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/GetDataRetrievalPolicy)
"""
@inline get_data_retrieval_policy(aws::AWSConfig=default_aws_config(); args...) = get_data_retrieval_policy(aws, args)

@inline get_data_retrieval_policy(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/policies/data-retrieval", args)

@inline get_data_retrieval_policy(args) = get_data_retrieval_policy(default_aws_config(), args)


"""
    using AWSSDK.Glacier.get_job_output
    get_job_output([::AWSConfig], arguments::Dict)
    get_job_output([::AWSConfig]; accountId=, vaultName=, jobId=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output", accountId=, vaultName=, jobId=, <keyword arguments>)

# GetJobOutput Operation

This operation downloads the output of the job you initiated using [InitiateJob](@ref). Depending on the job type you specified when you initiated the job, the output will be either the content of an archive or a vault inventory.

You can download all the job output or download a portion of the output by specifying a byte range. In the case of an archive retrieval job, depending on the byte range you specify, Amazon Glacier returns the checksum for the portion of the data. You can compute the checksum on the client and verify that the values match to ensure the portion you downloaded is the correct data.

A job ID will not expire for at least 24 hours after Amazon Glacier completes the job. That a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded size against the size returned in the headers from the **Get Job Output** response.

For archive retrieval jobs, you should also verify that the size is what you expected. If you download a portion of the output, the expected size is based on the range of bytes you specified. For example, if you specify a range of `bytes=0-1048575`, you should verify your download size is 1,048,576 bytes. If you download an entire archive, the expected size is the size of the archive when you uploaded it to Amazon Glacier The expected size is also returned in the headers from the **Get Job Output** response.

In the case of an archive retrieval job, depending on the byte range you specify, Amazon Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded is the correct data, compute the checksum on the client, verify that the values match, and verify that the size is what you expected.

A job ID does not expire for at least 24 hours after Amazon Glacier completes the job. That is, you can download the job output within the 24 hours period after Amazon Glacier completes the job.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and the underlying REST API, see [Downloading a Vault Inventory](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html), [Downloading an Archive](http://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html), and [Get Job Output](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html)

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `jobId = ::String` -- *Required*
The job ID whose data is downloaded.


## `*header:* Range = ::String`
The range of bytes to retrieve from the output. For example, if you want to download the first 1,048,576 bytes, specify the range as `bytes=0-1048575`. By default, this operation downloads the entire output.

If the job output is large, then you can use a range to retrieve a portion of the output. This allows you to download the entire output in smaller chunks of bytes. For example, suppose you have 1 GB of job output you want to download and you decide to download 128 MB chunks of data at a time, which is a total of eight Get Job Output requests. You use the following process to download the job output:

1.  Download a 128 MB chunk of output by specifying the appropriate byte range. Verify that all 128 MB of data was received.

2.  Along with the data, the response includes a SHA256 tree hash of the payload. You compute the checksum of the payload on the client and compare it with the checksum you received in the response to ensure you received all the expected data.

3.  Repeat steps 1 and 2 for all the eight 128 MB chunks of output data, each time specifying the appropriate byte range.

4.  After downloading all the parts of the job output, you have a list of eight checksum values. Compute the tree hash of these values to find the checksum of the entire output. Using the [DescribeJob](@ref) API, obtain job information of the job that provided you the output. The response includes the checksum of the entire archive stored in Amazon Glacier. You compare this value with the checksum you computed to ensure you have downloaded the entire archive content with no errors.




# Returns

`GetJobOutputOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To get the output of a previously initiated job

The example downloads the output of a previously initiated inventory retrieval job that is identified by the job ID.

Input:
```
[
    "accountId" => "-",
    "jobId" => "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
    "range" => "",
    "vaultName" => "my-vaul"
]
```

Output:
```
Dict(
    "acceptRanges" => "bytes",
    "body" => "inventory-data",
    "contentType" => "application/json",
    "status" => 200
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/GetJobOutput)
"""
@inline get_job_output(aws::AWSConfig=default_aws_config(); args...) = get_job_output(aws, args)

@inline get_job_output(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output", args)

@inline get_job_output(args) = get_job_output(default_aws_config(), args)


"""
    using AWSSDK.Glacier.get_vault_access_policy
    get_vault_access_policy([::AWSConfig], arguments::Dict)
    get_vault_access_policy([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/access-policy", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/access-policy", accountId=, vaultName=)

# GetVaultAccessPolicy Operation

This operation retrieves the `access-policy` subresource set on the vault; for more information on setting this subresource, see [Set Vault Access Policy (PUT access-policy)](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html). If there is no access policy set on the vault, the operation returns a `404 Not found` error. For more information about vault access policies, see [Amazon Glacier Access Control with Vault Access Policies](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Returns

`GetVaultAccessPolicyOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To  get the access-policy set on the vault

The example retrieves the access-policy set on the vault named example-vault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "example-vault"
]
```

Output:
```
Dict(
    "policy" => Dict(
        "Policy" => "{"Version":"2012-10-17","Statement":[{"Sid":"Define-owner-access-rights","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault"}]}"
    )
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/GetVaultAccessPolicy)
"""
@inline get_vault_access_policy(aws::AWSConfig=default_aws_config(); args...) = get_vault_access_policy(aws, args)

@inline get_vault_access_policy(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/access-policy", args)

@inline get_vault_access_policy(args) = get_vault_access_policy(default_aws_config(), args)


"""
    using AWSSDK.Glacier.get_vault_lock
    get_vault_lock([::AWSConfig], arguments::Dict)
    get_vault_lock([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/lock-policy", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/lock-policy", accountId=, vaultName=)

# GetVaultLock Operation

This operation retrieves the following attributes from the `lock-policy` subresource set on the specified vault:

*   The vault lock policy set on the vault.

*   The state of the vault lock, which is either `InProgess` or `Locked`.

*   When the lock ID expires. The lock ID is used to complete the vault locking process.

*   When the vault lock was initiated and put into the `InProgress` state.

A vault lock is put into the `InProgress` state by calling [InitiateVaultLock](@ref). A vault lock is put into the `Locked` state by calling [CompleteVaultLock](@ref). You can abort the vault locking process by calling [AbortVaultLock](@ref). For more information about the vault locking process, [Amazon Glacier Vault Lock](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html).

If there is no vault lock policy set on the vault, the operation returns a `404 Not found` error. For more information about vault lock policies, [Amazon Glacier Access Control with Vault Lock Policies](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Returns

`GetVaultLockOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To retrieve vault lock-policy related attributes that are set on a vault

The example retrieves the attributes from the lock-policy subresource set on the vault named examplevault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "examplevault"
]
```

Output:
```
Dict(
    "CreationDate" => "exampledate",
    "ExpirationDate" => "exampledate",
    "Policy" => "{"Version":"2012-10-17","Statement":[{"Sid":"Define-vault-lock","Effect":"Deny","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault","Condition":{"NumericLessThanEquals":{"glacier:ArchiveAgeinDays":"365"}}}]}",
    "State" => "InProgress"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/GetVaultLock)
"""
@inline get_vault_lock(aws::AWSConfig=default_aws_config(); args...) = get_vault_lock(aws, args)

@inline get_vault_lock(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/lock-policy", args)

@inline get_vault_lock(args) = get_vault_lock(default_aws_config(), args)


"""
    using AWSSDK.Glacier.get_vault_notifications
    get_vault_notifications([::AWSConfig], arguments::Dict)
    get_vault_notifications([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/notification-configuration", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/notification-configuration", accountId=, vaultName=)

# GetVaultNotifications Operation

This operation retrieves the `notification-configuration` subresource of the specified vault.

For information about setting a notification configuration on a vault, see [SetVaultNotifications](@ref). If a notification configuration for a vault is not set, the operation returns a `404 Not Found` error. For more information about vault notifications, see [Configuring Vault Notifications in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html).

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Configuring Vault Notifications in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html) and [Get Vault Notification Configuration](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Returns

`GetVaultNotificationsOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To get the notification-configuration for the specified vault

The example retrieves the notification-configuration for the vault named my-vault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "vaultNotificationConfig" => Dict(
        "Events" => [
            "InventoryRetrievalCompleted",
            "ArchiveRetrievalCompleted"
        ],
        "SNSTopic" => "arn:aws:sns:us-west-2:0123456789012:my-vault"
    )
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/GetVaultNotifications)
"""
@inline get_vault_notifications(aws::AWSConfig=default_aws_config(); args...) = get_vault_notifications(aws, args)

@inline get_vault_notifications(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/notification-configuration", args)

@inline get_vault_notifications(args) = get_vault_notifications(default_aws_config(), args)


"""
    using AWSSDK.Glacier.initiate_job
    initiate_job([::AWSConfig], arguments::Dict)
    initiate_job([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/jobs", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/jobs", accountId=, vaultName=, <keyword arguments>)

# InitiateJob Operation

This operation initiates a job of the specified type, which can be a select, an archival retrieval, or a vault retrieval. For more information about using this operation, see the documentation for the underlying REST API [Initiate a Job](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `jobParameters = [ ... ]`
Provides options for specifying job information.
```
 jobParameters = [
        "Format" =>  ::String,
        "Type" =>  ::String,
        "ArchiveId" =>  ::String,
        "Description" =>  ::String,
        "SNSTopic" =>  ::String,
        "RetrievalByteRange" =>  ::String,
        "Tier" =>  ::String,
        "InventoryRetrievalParameters" =>  [
            "StartDate" =>  ::String,
            "EndDate" =>  ::String,
            "Limit" =>  ::String,
            "Marker" =>  ::String
        ],
        "SelectParameters" =>  [
            "InputSerialization" =>  ["csv" =>  [
                    "FileHeaderInfo" =>  "USE", "IGNORE" or "NONE",
                    "Comments" =>  ::String,
                    "QuoteEscapeCharacter" =>  ::String,
                    "RecordDelimiter" =>  ::String,
                    "FieldDelimiter" =>  ::String,
                    "QuoteCharacter" =>  ::String
                ]],
            "ExpressionType" =>  "SQL",
            "Expression" =>  ::String,
            "OutputSerialization" =>  ["csv" =>  [
                    "QuoteFields" =>  "ALWAYS" or "ASNEEDED",
                    "QuoteEscapeCharacter" =>  ::String,
                    "RecordDelimiter" =>  ::String,
                    "FieldDelimiter" =>  ::String,
                    "QuoteCharacter" =>  ::String
                ]]
        ],
        "OutputLocation" =>  ["S3" =>  [
                "BucketName" =>  ::String,
                "Prefix" =>  ::String,
                "Encryption" =>  [
                    "EncryptionType" =>  "aws:kms" or "AES256",
                    "KMSKeyId" =>  ::String,
                    "KMSContext" =>  ::String
                ],
                "CannedACL" =>  "private", "public-read", "public-read-write", "aws-exec-read", "authenticated-read", "bucket-owner-read" or "bucket-owner-full-control",
                "AccessControlList" =>  [[
                    "Grantee" =>  [
                        "Type" => <required> "AmazonCustomerByEmail", "CanonicalUser" or "Group",
                        "DisplayName" =>  ::String,
                        "URI" =>  ::String,
                        "ID" =>  ::String,
                        "EmailAddress" =>  ::String
                    ],
                    "Permission" =>  "FULL_CONTROL", "WRITE", "WRITE_ACP", "READ" or "READ_ACP"
                ], ...],
                "Tagging" =>  ::Dict{String,String},
                "UserMetadata" =>  ::Dict{String,String},
                "StorageClass" =>  "STANDARD", "REDUCED_REDUNDANCY" or "STANDARD_IA"
            ]]
    ]
```



# Returns

`InitiateJobOutput`

# Exceptions

`ResourceNotFoundException`, `PolicyEnforcedException`, `InvalidParameterValueException`, `MissingParameterValueException`, `InsufficientCapacityException` or `ServiceUnavailableException`.

# Example: To initiate an inventory-retrieval job

The example initiates an inventory-retrieval job for the vault named examplevault.

Input:
```
[
    "accountId" => "-",
    "jobParameters" => [
        "Description" => "My inventory job",
        "Format" => "CSV",
        "SNSTopic" => "arn:aws:sns:us-west-2:111111111111:Glacier-InventoryRetrieval-topic-Example",
        "Type" => "inventory-retrieval"
    ],
    "vaultName" => "examplevault"
]
```

Output:
```
Dict(
    "jobId" => " HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID",
    "location" => "/111122223333/vaults/examplevault/jobs/HkF9p6o7yjhFx-K3CGl6fuSm6VzW9T7esGQfco8nUXVYwS0jlb5gq1JZ55yHgt5vP54ZShjoQzQVVh7vEXAMPLEjobID"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/InitiateJob)
"""
@inline initiate_job(aws::AWSConfig=default_aws_config(); args...) = initiate_job(aws, args)

@inline initiate_job(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/vaults/{vaultName}/jobs", args)

@inline initiate_job(args) = initiate_job(default_aws_config(), args)


"""
    using AWSSDK.Glacier.initiate_multipart_upload
    initiate_multipart_upload([::AWSConfig], arguments::Dict)
    initiate_multipart_upload([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/multipart-uploads", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/multipart-uploads", accountId=, vaultName=, <keyword arguments>)

# InitiateMultipartUpload Operation

This operation initiates a multipart upload. Amazon Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see [UploadMultipartPart](@ref)).

When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB.

Every part you upload to this resource (see [UploadMultipartPart](@ref)), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB.

**Note**
> You don't need to know the size of the archive when you start a multipart upload because Amazon Glacier does not require you to specify the overall archive size.

After you complete the multipart upload, Amazon Glacier removes the multipart upload resource referenced by the ID. Amazon Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Uploading Large Archives in Parts (Multipart Upload)](http://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html) and [Initiate Multipart Upload](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `*header:* x-amz-archive-description = ::String`
The archive description that you are uploading in parts.

The part size must be a megabyte (1024 KB) multiplied by a power of 2, for example 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB (4096 MB).


## `*header:* x-amz-part-size = ::String`
The size of each part except the last, in bytes. The last part can be smaller than this part size.




# Returns

`InitiateMultipartUploadOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To initiate a multipart upload

The example initiates a multipart upload to a vault named my-vault with a part size of 1 MiB (1024 x 1024 bytes) per file.

Input:
```
[
    "accountId" => "-",
    "partSize" => "1048576",
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "location" => "/111122223333/vaults/my-vault/multipart-uploads/19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
    "uploadId" => "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/InitiateMultipartUpload)
"""
@inline initiate_multipart_upload(aws::AWSConfig=default_aws_config(); args...) = initiate_multipart_upload(aws, args)

@inline initiate_multipart_upload(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/vaults/{vaultName}/multipart-uploads", args)

@inline initiate_multipart_upload(args) = initiate_multipart_upload(default_aws_config(), args)


"""
    using AWSSDK.Glacier.initiate_vault_lock
    initiate_vault_lock([::AWSConfig], arguments::Dict)
    initiate_vault_lock([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/lock-policy", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/lock-policy", accountId=, vaultName=, <keyword arguments>)

# InitiateVaultLock Operation

This operation initiates the vault locking process by doing the following:

*   Installing a vault lock policy on the specified vault.

*   Setting the lock state of vault lock to `InProgress`.

*   Returning a lock ID, which is used to complete the vault locking process.

You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see [Amazon Glacier Access Control with Vault Lock Policies](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html).

You must complete the vault locking process within 24 hours after the vault lock enters the `InProgress` state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the `InProgress` state, and the vault lock policy is removed from the vault. You call [CompleteVaultLock](@ref) to complete the vault locking process by setting the state of the vault lock to `Locked`.

After a vault lock is in the `Locked` state, you cannot initiate a new vault lock for the vault.

You can abort the vault locking process by calling [AbortVaultLock](@ref). You can get the state of the vault lock by calling [GetVaultLock](@ref). For more information about the vault locking process, [Amazon Glacier Vault Lock](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html).

If this operation is called when the vault lock is in the `InProgress` state, the operation returns an `AccessDeniedException` error. When the vault lock is in the `InProgress` state you must call [AbortVaultLock](@ref) before you can initiate a new vault lock policy.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `policy = ["Policy" =>  ::String]`
The vault lock policy as a JSON string, which uses "\\" as an escape character.




# Returns

`InitiateVaultLockOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To initiate the vault locking process

The example initiates the vault locking process for the vault named my-vault.

Input:
```
[
    "accountId" => "-",
    "policy" => [
        "Policy" => "{"Version":"2012-10-17","Statement":[{"Sid":"Define-vault-lock","Effect":"Deny","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault","Condition":{"NumericLessThanEquals":{"glacier:ArchiveAgeinDays":"365"}}}]}"
    ],
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "lockId" => "AE863rKkWZU53SLW5be4DUcW"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/InitiateVaultLock)
"""
@inline initiate_vault_lock(aws::AWSConfig=default_aws_config(); args...) = initiate_vault_lock(aws, args)

@inline initiate_vault_lock(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/vaults/{vaultName}/lock-policy", args)

@inline initiate_vault_lock(args) = initiate_vault_lock(default_aws_config(), args)


"""
    using AWSSDK.Glacier.list_jobs
    list_jobs([::AWSConfig], arguments::Dict)
    list_jobs([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/jobs", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/jobs", accountId=, vaultName=, <keyword arguments>)

# ListJobs Operation

This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation time.

**Note**
> Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists.

The List Jobs operation supports pagination. You should always check the response `Marker` field. If there are no more jobs to list, the `Marker` field is set to `null`. If there are more jobs to list, the `Marker` field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the `Marker` value for that job that you obtained from a previous List Jobs request.

You can set a maximum limit for the number of jobs returned in the response by specifying the `limit` parameter in the request. The default limit is 50. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit.

Additionally, you can filter the jobs list returned by specifying the optional `statuscode` parameter or `completed` parameter, or both. Using the `statuscode` parameter, you can specify to return only jobs that match either the `InProgress`, `Succeeded`, or `Failed` status. Using the `completed` parameter, you can specify to return only jobs that were completed (`true`) or jobs that were not completed (`false`).

For more information about using this operation, see the documentation for the underlying REST API [List Jobs](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `limit = ::String`
The maximum number of jobs to be returned. The default limit is 50. The number of jobs returned might be fewer than the specified limit, but the number of returned jobs never exceeds the limit.


## `marker = ::String`
An opaque string used for pagination. This value specifies the job at which the listing of jobs should begin. Get the marker value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of results started in a previous List Jobs request.


## `statuscode = ::String`
The type of job status to return. You can specify the following values: `InProgress`, `Succeeded`, or `Failed`.


## `completed = ::String`
The state of the jobs to return. You can specify `true` or `false`.




# Returns

`ListJobsOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To list jobs for a vault

The example lists jobs for the vault named my-vault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "JobList" => [
        Dict(
            "Action" => "ArchiveRetrieval",
            "ArchiveId" => "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
            "ArchiveSHA256TreeHash" => "9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67",
            "ArchiveSizeInBytes" => 3145728,
            "Completed" => false,
            "CreationDate" => "2015-07-17T21:16:13.840Z",
            "JobDescription" => "Retrieve archive on 2015-07-17",
            "JobId" => "l7IL5-EkXyEY9Ws95fClzIbk2O5uLYaFdAYOi-azsX_Z8V6NH4yERHzars8wTKYQMX6nBDI9cMNHzyZJO59-8N9aHWav",
            "RetrievalByteRange" => "0-3145727",
            "SHA256TreeHash" => "9628195fcdbcbbe76cdde932d4646fa7de5f219fb39823836d81f0cc0e18aa67",
            "SNSTopic" => "arn:aws:sns:us-west-2:0123456789012:my-vault",
            "StatusCode" => "InProgress",
            "VaultARN" => "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
        ),
        Dict(
            "Action" => "InventoryRetrieval",
            "Completed" => false,
            "CreationDate" => "2015-07-17T20:23:41.616Z",
            "InventoryRetrievalParameters" => Dict(
                "Format" => "JSON"
            ),
            "JobId" => "zbxcm3Z_3z5UkoroF7SuZKrxgGoDc3RloGduS7Eg-RO47Yc6FxsdGBgf_Q2DK5Ejh18CnTS5XW4_XqlNHS61dsO4CnMW",
            "StatusCode" => "InProgress",
            "VaultARN" => "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault"
        )
    ]
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/ListJobs)
"""
@inline list_jobs(aws::AWSConfig=default_aws_config(); args...) = list_jobs(aws, args)

@inline list_jobs(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/jobs", args)

@inline list_jobs(args) = list_jobs(default_aws_config(), args)


"""
    using AWSSDK.Glacier.list_multipart_uploads
    list_multipart_uploads([::AWSConfig], arguments::Dict)
    list_multipart_uploads([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/multipart-uploads", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/multipart-uploads", accountId=, vaultName=, <keyword arguments>)

# ListMultipartUploads Operation

This operation lists in-progress multipart uploads for the specified vault. An in-progress multipart upload is a multipart upload that has been initiated by an [InitiateMultipartUpload](@ref) request, but has not yet been completed or aborted. The list returned in the List Multipart Upload response has no guaranteed order.

The List Multipart Uploads operation supports pagination. By default, this operation returns up to 50 multipart uploads in the response. You should always check the response for a `marker` at which to continue the list; if there are no more items the `marker` is `null`. To return a list of multipart uploads that begins at a specific upload, set the `marker` request parameter to the value you obtained from a previous List Multipart Upload request. You can also limit the number of uploads returned in the response by specifying the `limit` parameter in the request.

Note the difference between this operation and listing parts ([ListParts](@ref)). The List Multipart Uploads operation lists all multipart uploads for a vault and does not require a multipart upload ID. The List Parts operation requires a multipart upload ID since parts are associated with a single upload.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and the underlying REST API, see [Working with Archives in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html) and [List Multipart Uploads](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `marker = ::String`
An opaque string used for pagination. This value specifies the upload at which the listing of uploads should begin. Get the marker value from a previous List Uploads response. You need only include the marker if you are continuing the pagination of results started in a previous List Uploads request.


## `limit = ::String`
Specifies the maximum number of uploads returned in the response body. If this value is not specified, the List Uploads operation returns up to 50 uploads.




# Returns

`ListMultipartUploadsOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To list all the in-progress multipart uploads for a vault

The example lists all the in-progress multipart uploads for the vault named examplevault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "examplevault"
]
```

Output:
```
Dict(
    "Marker" => "null",
    "UploadsList" => [
        Dict(
            "ArchiveDescription" => "archive 1",
            "CreationDate" => "2012-03-19T23:20:59.130Z",
            "MultipartUploadId" => "xsQdFIRsfJr20CW2AbZBKpRZAFTZSJIMtL2hYf8mvp8dM0m4RUzlaqoEye6g3h3ecqB_zqwB7zLDMeSWhwo65re4C4Ev",
            "PartSizeInBytes" => 4194304,
            "VaultARN" => "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
        ),
        Dict(
            "ArchiveDescription" => "archive 2",
            "CreationDate" => "2012-04-01T15:00:00.000Z",
            "MultipartUploadId" => "nPyGOnyFcx67qqX7E-0tSGiRi88hHMOwOxR-_jNyM6RjVMFfV29lFqZ3rNsSaWBugg6OP92pRtufeHdQH7ClIpSF6uJc",
            "PartSizeInBytes" => 4194304,
            "VaultARN" => "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
        ),
        Dict(
            "ArchiveDescription" => "archive 3",
            "CreationDate" => "2012-03-20T17:03:43.221Z",
            "MultipartUploadId" => "qt-RBst_7yO8gVIonIBsAxr2t-db0pE4s8MNeGjKjGdNpuU-cdSAcqG62guwV9r5jh5mLyFPzFEitTpNE7iQfHiu1XoV",
            "PartSizeInBytes" => 4194304,
            "VaultARN" => "arn:aws:glacier:us-west-2:012345678901:vaults/examplevault"
        )
    ]
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/ListMultipartUploads)
"""
@inline list_multipart_uploads(aws::AWSConfig=default_aws_config(); args...) = list_multipart_uploads(aws, args)

@inline list_multipart_uploads(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/multipart-uploads", args)

@inline list_multipart_uploads(args) = list_multipart_uploads(default_aws_config(), args)


"""
    using AWSSDK.Glacier.list_parts
    list_parts([::AWSConfig], arguments::Dict)
    list_parts([::AWSConfig]; accountId=, vaultName=, uploadId=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", accountId=, vaultName=, uploadId=, <keyword arguments>)

# ListParts Operation

This operation lists the parts of an archive that have been uploaded in a specific multipart upload. You can make this request at any time during an in-progress multipart upload before you complete the upload (see [CompleteMultipartUpload](@ref). List Parts returns an error for completed uploads. The list returned in the List Parts response is sorted by part range.

The List Parts operation supports pagination. By default, this operation returns up to 50 uploaded parts in the response. You should always check the response for a `marker` at which to continue the list; if there are no more items the `marker` is `null`. To return a list of parts that begins at a specific part, set the `marker` request parameter to the value you obtained from a previous List Parts request. You can also limit the number of parts returned in the response by specifying the `limit` parameter in the request.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and the underlying REST API, see [Working with Archives in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html) and [List Parts](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `uploadId = ::String` -- *Required*
The upload ID of the multipart upload.


## `marker = ::String`
An opaque string used for pagination. This value specifies the part at which the listing of parts should begin. Get the marker value from the response of a previous List Parts response. You need only include the marker if you are continuing the pagination of results started in a previous List Parts request.


## `limit = ::String`
The maximum number of parts to be returned. The default limit is 50. The number of parts returned might be fewer than the specified limit, but the number of returned parts never exceeds the limit.




# Returns

`ListPartsOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To list the parts of an archive that have been uploaded in a multipart upload

The example lists all the parts of a multipart upload.

Input:
```
[
    "accountId" => "-",
    "uploadId" => "OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE",
    "vaultName" => "examplevault"
]
```

Output:
```
Dict(
    "ArchiveDescription" => "archive description",
    "CreationDate" => "2012-03-20T17:03:43.221Z",
    "Marker" => "null",
    "MultipartUploadId" => "OW2fM5iVylEpFEMM9_HpKowRapC3vn5sSL39_396UW9zLFUWVrnRHaPjUJddQ5OxSHVXjYtrN47NBZ-khxOjyEXAMPLE",
    "PartSizeInBytes" => 4194304,
    "Parts" => [
        Dict(
            "RangeInBytes" => "0-4194303",
            "SHA256TreeHash" => "01d34dabf7be316472c93b1ef80721f5d4"
        ),
        Dict(
            "RangeInBytes" => "4194304-8388607",
            "SHA256TreeHash" => "0195875365afda349fc21c84c099987164"
        )
    ],
    "VaultARN" => "arn:aws:glacier:us-west-2:012345678901:vaults/demo1-vault"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/ListParts)
"""
@inline list_parts(aws::AWSConfig=default_aws_config(); args...) = list_parts(aws, args)

@inline list_parts(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", args)

@inline list_parts(args) = list_parts(default_aws_config(), args)


"""
    using AWSSDK.Glacier.list_provisioned_capacity
    list_provisioned_capacity([::AWSConfig], arguments::Dict)
    list_provisioned_capacity([::AWSConfig]; accountId=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/provisioned-capacity", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/provisioned-capacity", accountId=)

# ListProvisionedCapacity Operation

This operation lists the provisioned capacity units for the specified AWS account.

# Arguments

## `accountId = ::String` -- *Required*
The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID.




# Returns

`ListProvisionedCapacityOutput`

# Exceptions

`InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To list the provisioned capacity units for an account

The example lists the provisioned capacity units for an account.

Input:
```
[
    "accountId" => "-"
]
```

Output:
```
Dict(
    "ProvisionedCapacityList" => [
        Dict(
            "CapacityId" => "zSaq7NzHFQDANTfQkDen4V7z",
            "ExpirationDate" => "2016-12-12T00:00:00.000Z",
            "StartDate" => "2016-11-11T20:11:51.095Z"
        ),
        Dict(
            "CapacityId" => "yXaq7NzHFQNADTfQkDen4V7z",
            "ExpirationDate" => "2017-01-15T00:00:00.000Z",
            "StartDate" => "2016-12-13T20:11:51.095Z"
        )
    ]
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/ListProvisionedCapacity)
"""
@inline list_provisioned_capacity(aws::AWSConfig=default_aws_config(); args...) = list_provisioned_capacity(aws, args)

@inline list_provisioned_capacity(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/provisioned-capacity", args)

@inline list_provisioned_capacity(args) = list_provisioned_capacity(default_aws_config(), args)


"""
    using AWSSDK.Glacier.list_tags_for_vault
    list_tags_for_vault([::AWSConfig], arguments::Dict)
    list_tags_for_vault([::AWSConfig]; accountId=, vaultName=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/tags", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults/{vaultName}/tags", accountId=, vaultName=)

# ListTagsForVault Operation

This operation lists all the tags attached to a vault. The operation returns an empty map if there are no tags. For more information about tags, see [Tagging Amazon Glacier Resources](http://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.




# Returns

`ListTagsForVaultOutput`

# Exceptions

`InvalidParameterValueException`, `MissingParameterValueException`, `ResourceNotFoundException` or `ServiceUnavailableException`.

# Example: To list the tags for a vault

The example lists all the tags attached to the vault examplevault.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "examplevault"
]
```

Output:
```
Dict(
    "Tags" => Dict(
        "date" => "july2015",
        "id" => "1234"
    )
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/ListTagsForVault)
"""
@inline list_tags_for_vault(aws::AWSConfig=default_aws_config(); args...) = list_tags_for_vault(aws, args)

@inline list_tags_for_vault(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults/{vaultName}/tags", args)

@inline list_tags_for_vault(args) = list_tags_for_vault(default_aws_config(), args)


"""
    using AWSSDK.Glacier.list_vaults
    list_vaults([::AWSConfig], arguments::Dict)
    list_vaults([::AWSConfig]; accountId=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "GET", "/{accountId}/vaults", arguments::Dict)
    glacier([::AWSConfig], "GET", "/{accountId}/vaults", accountId=, <keyword arguments>)

# ListVaults Operation

This operation lists all vaults owned by the calling user's account. The list returned in the response is ASCII-sorted by vault name.

By default, this operation returns up to 10 items. If there are more vaults to list, the response `marker` field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the `marker` field is `null`. To return a list of vaults that begins at a specific vault, set the `marker` request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the `limit` parameter in the request.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Retrieving Vault Metadata in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html) and [List Vaults](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.


## `marker = ::String`
A string used for pagination. The marker specifies the vault ARN after which the listing of vaults should begin.


## `limit = ::String`
The maximum number of vaults to be returned. The default limit is 10. The number of vaults returned might be fewer than the specified limit, but the number of returned vaults never exceeds the limit.




# Returns

`ListVaultsOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To list all vaults owned by the calling user's account

The example lists all vaults owned by the specified AWS account.

Input:
```
[
    "accountId" => "-",
    "limit" => "",
    "marker" => ""
]
```

Output:
```
Dict(
    "VaultList" => [
        Dict(
            "CreationDate" => "2015-04-06T21:23:45.708Z",
            "LastInventoryDate" => "2015-04-07T00:26:19.028Z",
            "NumberOfArchives" => 1,
            "SizeInBytes" => 3178496,
            "VaultARN" => "arn:aws:glacier:us-west-2:0123456789012:vaults/my-vault",
            "VaultName" => "my-vault"
        )
    ]
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/ListVaults)
"""
@inline list_vaults(aws::AWSConfig=default_aws_config(); args...) = list_vaults(aws, args)

@inline list_vaults(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "GET", "/{accountId}/vaults", args)

@inline list_vaults(args) = list_vaults(default_aws_config(), args)


"""
    using AWSSDK.Glacier.purchase_provisioned_capacity
    purchase_provisioned_capacity([::AWSConfig], arguments::Dict)
    purchase_provisioned_capacity([::AWSConfig]; accountId=)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/provisioned-capacity", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/provisioned-capacity", accountId=)

# PurchaseProvisionedCapacity Operation

This operation purchases a provisioned capacity unit for an AWS account.

# Arguments

## `accountId = ::String` -- *Required*
The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID.




# Returns

`PurchaseProvisionedCapacityOutput`

# Exceptions

`InvalidParameterValueException`, `MissingParameterValueException`, `LimitExceededException` or `ServiceUnavailableException`.

# Example: To purchases a provisioned capacity unit for an AWS account

The example purchases provisioned capacity unit for an AWS account.

Input:
```
[
    "accountId" => "-"
]
```

Output:
```
Dict(
    "capacityId" => "zSaq7NzHFQDANTfQkDen4V7z"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/PurchaseProvisionedCapacity)
"""
@inline purchase_provisioned_capacity(aws::AWSConfig=default_aws_config(); args...) = purchase_provisioned_capacity(aws, args)

@inline purchase_provisioned_capacity(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/provisioned-capacity", args)

@inline purchase_provisioned_capacity(args) = purchase_provisioned_capacity(default_aws_config(), args)


"""
    using AWSSDK.Glacier.remove_tags_from_vault
    remove_tags_from_vault([::AWSConfig], arguments::Dict)
    remove_tags_from_vault([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/tags?operation=remove", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/tags?operation=remove", accountId=, vaultName=, <keyword arguments>)

# RemoveTagsFromVault Operation

This operation removes one or more tags from the set of tags attached to a vault. For more information about tags, see [Tagging Amazon Glacier Resources](http://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html). This operation is idempotent. The operation will be successful, even if there are no tags attached to the vault.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `TagKeys = [::String, ...]`
A list of tag keys. Each corresponding tag is removed from the vault.




# Exceptions

`InvalidParameterValueException`, `MissingParameterValueException`, `ResourceNotFoundException` or `ServiceUnavailableException`.

# Example: To remove tags from a vault

The example removes two tags from the vault named examplevault.

Input:
```
[
    "TagKeys" => [
        "examplekey1",
        "examplekey2"
    ],
    "accountId" => "-",
    "vaultName" => "examplevault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/RemoveTagsFromVault)
"""
@inline remove_tags_from_vault(aws::AWSConfig=default_aws_config(); args...) = remove_tags_from_vault(aws, args)

@inline remove_tags_from_vault(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/vaults/{vaultName}/tags?operation=remove", args)

@inline remove_tags_from_vault(args) = remove_tags_from_vault(default_aws_config(), args)


"""
    using AWSSDK.Glacier.set_data_retrieval_policy
    set_data_retrieval_policy([::AWSConfig], arguments::Dict)
    set_data_retrieval_policy([::AWSConfig]; accountId=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "PUT", "/{accountId}/policies/data-retrieval", arguments::Dict)
    glacier([::AWSConfig], "PUT", "/{accountId}/policies/data-retrieval", accountId=, <keyword arguments>)

# SetDataRetrievalPolicy Operation

This operation sets and then enacts a data retrieval policy in the region specified in the PUT request. You can set one policy per region for an AWS account. The policy is enacted within a few minutes of a successful PUT operation.

The set policy operation does not affect retrieval jobs that were in progress before the policy was enacted. For more information about data retrieval policies, see [Amazon Glacier Data Retrieval Policies](http://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.


## `Policy = ["Rules" =>  [[ ... ], ...]]`
The data retrieval policy in JSON format.
```
 Policy = ["Rules" =>  [[
            "Strategy" =>  ::String,
            "BytesPerHour" =>  ::Int
        ], ...]]
```



# Exceptions

`InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To set and then enact a data retrieval policy 

The example sets and then enacts a data retrieval policy.

Input:
```
[
    "Policy" => [
        "Rules" => [
            [
                "BytesPerHour" => 10737418240,
                "Strategy" => "BytesPerHour"
            ]
        ]
    ],
    "accountId" => "-"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/SetDataRetrievalPolicy)
"""
@inline set_data_retrieval_policy(aws::AWSConfig=default_aws_config(); args...) = set_data_retrieval_policy(aws, args)

@inline set_data_retrieval_policy(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "PUT", "/{accountId}/policies/data-retrieval", args)

@inline set_data_retrieval_policy(args) = set_data_retrieval_policy(default_aws_config(), args)


"""
    using AWSSDK.Glacier.set_vault_access_policy
    set_vault_access_policy([::AWSConfig], arguments::Dict)
    set_vault_access_policy([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "PUT", "/{accountId}/vaults/{vaultName}/access-policy", arguments::Dict)
    glacier([::AWSConfig], "PUT", "/{accountId}/vaults/{vaultName}/access-policy", accountId=, vaultName=, <keyword arguments>)

# SetVaultAccessPolicy Operation

This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the `access-policy` subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see [Amazon Glacier Access Control with Vault Access Policies](http://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html).

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `policy = ["Policy" =>  ::String]`
The vault access policy as a JSON string.




# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To set the access-policy on a vault

The example configures an access policy for the vault named examplevault.

Input:
```
[
    "accountId" => "-",
    "policy" => [
        "Policy" => "{"Version":"2012-10-17","Statement":[{"Sid":"Define-owner-access-rights","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::999999999999:root"},"Action":"glacier:DeleteArchive","Resource":"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault"}]}"
    ],
    "vaultName" => "examplevault"
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/SetVaultAccessPolicy)
"""
@inline set_vault_access_policy(aws::AWSConfig=default_aws_config(); args...) = set_vault_access_policy(aws, args)

@inline set_vault_access_policy(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "PUT", "/{accountId}/vaults/{vaultName}/access-policy", args)

@inline set_vault_access_policy(args) = set_vault_access_policy(default_aws_config(), args)


"""
    using AWSSDK.Glacier.set_vault_notifications
    set_vault_notifications([::AWSConfig], arguments::Dict)
    set_vault_notifications([::AWSConfig]; accountId=, vaultName=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "PUT", "/{accountId}/vaults/{vaultName}/notification-configuration", arguments::Dict)
    glacier([::AWSConfig], "PUT", "/{accountId}/vaults/{vaultName}/notification-configuration", accountId=, vaultName=, <keyword arguments>)

# SetVaultNotifications Operation

This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications.

To configure vault notifications, send a PUT request to the `notification-configuration` subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon Glacier to send notifications to the topic.

Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events:

*   **ArchiveRetrievalCompleted** This event occurs when a job that was initiated for an archive retrieval is completed ([InitiateJob](@ref)). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from [DescribeJob](@ref).

*   **InventoryRetrievalCompleted** This event occurs when a job that was initiated for an inventory retrieval is completed ([InitiateJob](@ref)). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from [DescribeJob](@ref).

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Configuring Vault Notifications in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html) and [Set Vault Notification Configuration](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `vaultNotificationConfig = [ ... ]`
Provides options for specifying notification configuration.
```
 vaultNotificationConfig = [
        "SNSTopic" =>  ::String,
        "Events" =>  [::String, ...]
    ]
```



# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException` or `ServiceUnavailableException`.

# Example: To configure a vault to post a message to an Amazon SNS topic when jobs complete

The example sets the examplevault notification configuration.

Input:
```
[
    "accountId" => "-",
    "vaultName" => "examplevault",
    "vaultNotificationConfig" => [
        "Events" => [
            "ArchiveRetrievalCompleted",
            "InventoryRetrievalCompleted"
        ],
        "SNSTopic" => "arn:aws:sns:us-west-2:012345678901:mytopic"
    ]
]
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/SetVaultNotifications)
"""
@inline set_vault_notifications(aws::AWSConfig=default_aws_config(); args...) = set_vault_notifications(aws, args)

@inline set_vault_notifications(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "PUT", "/{accountId}/vaults/{vaultName}/notification-configuration", args)

@inline set_vault_notifications(args) = set_vault_notifications(default_aws_config(), args)


"""
    using AWSSDK.Glacier.upload_archive
    upload_archive([::AWSConfig], arguments::Dict)
    upload_archive([::AWSConfig]; vaultName=, accountId=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/archives", arguments::Dict)
    glacier([::AWSConfig], "POST", "/{accountId}/vaults/{vaultName}/archives", vaultName=, accountId=, <keyword arguments>)

# UploadArchive Operation

This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon Glacier returns the archive ID in the `x-amz-archive-id` header of the response.

You must use the archive ID to access your data in Amazon Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see [InitiateJob](@ref).

You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see [Computing Checksums](http://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html).

You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see [InitiateJob](@ref). Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list.

Archives are immutable. After you upload an archive, you cannot edit the archive or its description.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Uploading an Archive in Amazon Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html) and [Upload Archive](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `vaultName = ::String` -- *Required*
The name of the vault.


## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `*header:* x-amz-archive-description = ::String`
The optional description of the archive you are uploading.


## `*header:* x-amz-sha256-tree-hash = ::String`
The SHA256 tree hash of the data being uploaded.


## `body = blob`
The data to upload.




# Returns

`ArchiveCreationOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException`, `RequestTimeoutException` or `ServiceUnavailableException`.

# Example: To upload an archive

The example adds an archive to a vault.

Input:
```
[
    "accountId" => "-",
    "archiveDescription" => "",
    "body" => "example-data-to-upload",
    "checksum" => "",
    "vaultName" => "my-vault"
]
```

Output:
```
Dict(
    "archiveId" => "kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw",
    "checksum" => "969fb39823836d81f0cc028195fcdbcbbe76cdde932d4646fa7de5f21e18aa67",
    "location" => "/0123456789012/vaults/my-vault/archives/kKB7ymWJVpPSwhGP6ycSOAekp9ZYe_--zM_mw6k76ZFGEIWQX-ybtRDvc2VkPSDtfKmQrj0IRQLSGsNuDp-AJVlu2ccmDSyDUmZwKbwbpAdGATGDiB3hHO0bjbGehXTcApVud_wyDw"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/UploadArchive)
"""
@inline upload_archive(aws::AWSConfig=default_aws_config(); args...) = upload_archive(aws, args)

@inline upload_archive(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "POST", "/{accountId}/vaults/{vaultName}/archives", args)

@inline upload_archive(args) = upload_archive(default_aws_config(), args)


"""
    using AWSSDK.Glacier.upload_multipart_part
    upload_multipart_part([::AWSConfig], arguments::Dict)
    upload_multipart_part([::AWSConfig]; accountId=, vaultName=, uploadId=, <keyword arguments>)

    using AWSCore.Services.glacier
    glacier([::AWSConfig], "PUT", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", arguments::Dict)
    glacier([::AWSConfig], "PUT", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", accountId=, vaultName=, uploadId=, <keyword arguments>)

# UploadMultipartPart Operation

This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload.

Amazon Glacier rejects your upload part request if any of the following conditions is true:

*   **SHA256 tree hash does not match**To ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see [Computing Checksums](http://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html).

*   **Part size does not match**The size of each part except the last must match the size specified in the corresponding [InitiateMultipartUpload](@ref) request. The size of the last part must be the same size as, or smaller than, the specified size.

    **Note**
    > If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail.

*   **Range does not align**The byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail.

This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data.

An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](http://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).

For conceptual information and underlying REST API, see [Uploading Large Archives in Parts (Multipart Upload)](http://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html) and [Upload Part](http://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html) in the *Amazon Glacier Developer Guide*.

# Arguments

## `accountId = ::String` -- *Required*
The `AccountId` value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '`-`' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.


## `vaultName = ::String` -- *Required*
The name of the vault.


## `uploadId = ::String` -- *Required*
The upload ID of the multipart upload.


## `*header:* x-amz-sha256-tree-hash = ::String`
The SHA256 tree hash of the data being uploaded.


## `*header:* Content-Range = ::String`
Identifies the range of bytes in the assembled archive that will be uploaded in this part. Amazon Glacier uses this information to assemble the archive in the proper sequence. The format of this header follows RFC 2616. An example header is Content-Range:bytes 0-4194303/*.


## `body = blob`
The data to upload.




# Returns

`UploadMultipartPartOutput`

# Exceptions

`ResourceNotFoundException`, `InvalidParameterValueException`, `MissingParameterValueException`, `RequestTimeoutException` or `ServiceUnavailableException`.

# Example: To upload the first part of an archive

The example uploads the first 1 MiB (1024 x 1024 bytes) part of an archive.

Input:
```
[
    "accountId" => "-",
    "body" => "part1",
    "checksum" => "c06f7cd4baacb087002a99a5f48bf953",
    "range" => "bytes 0-1048575/*",
    "uploadId" => "19gaRezEXAMPLES6Ry5YYdqthHOC_kGRCT03L9yetr220UmPtBYKk-OssZtLqyFu7sY1_lR7vgFuJV6NtcV5zpsJ",
    "vaultName" => "examplevault"
]
```

Output:
```
Dict(
    "checksum" => "c06f7cd4baacb087002a99a5f48bf953"
)
```

See also: [AWS API Documentation](https://docs.aws.amazon.com/goto/WebAPI/glacier-2012-06-01/UploadMultipartPart)
"""
@inline upload_multipart_part(aws::AWSConfig=default_aws_config(); args...) = upload_multipart_part(aws, args)

@inline upload_multipart_part(aws::AWSConfig, args) = AWSCore.Services.glacier(aws, "PUT", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", args)

@inline upload_multipart_part(args) = upload_multipart_part(default_aws_config(), args)




end # module Glacier


#==============================================================================#
# End of file
#==============================================================================#
