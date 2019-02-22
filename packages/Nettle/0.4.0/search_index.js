var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Nettle.jl-1",
    "page": "Readme",
    "title": "Nettle.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)libnettle supports a wide array of hashing algorithms.  This package interrogates libnettle to determine the available hash types, which are then available from Nettle.get_hash_types().  Typically these include SHA1, SHA224, SHA256, SHA384, SHA512, MD2, MD5 and RIPEMD160.Typical usage of these hash algorithms is to create a Hasher, update! it, and finally get a digest:h = Hasher(\"sha256\")\nupdate!(h, \"this is a test\")\nhexdigest!(h)\n\n#or...\nhexdigest(\"sha256\", \"this is a test\")Outputs:2e99758548972a8e8822ad47fa1017ff72f06f3ff6a016851f45c398732bc50cA digest! function is also available to return the digest as an Array(UInt8,1).  Note that both the digest! function and the hexdigest! function reset the internal Hasher object to a pristine state, ready for further update! calls."
},

{
    "location": "#HMAC-Functionality-1",
    "page": "Readme",
    "title": "HMAC Functionality",
    "category": "section",
    "text": "HMAC functionality revolves around the HMACState type, created by the function of the same name.  Arguments to this constructor are the desired hash type, and the desired key used to authenticate the hashing:h = HMACState(\"sha256\", \"mykey\")\nupdate!(h, \"this is a test\")\nhexdigest!(h)\n\n#or...\nhexdigest(\"sha256\", \"mykey\", \"this is a test\")Outputs:\"ca1dcafe1b5fb329256248196c0f92a95fbe3788db6c5cb0775b4106db437ba2\"A digest! function is also available to return the digest as an Array(UInt8,1).  Note that both the digest! function and the hexdigest! function reset the internal HMACState object to a pristine state, ready for further update! calls."
},

{
    "location": "#Encryption/Decryption-Functionality-1",
    "page": "Readme",
    "title": "Encryption/Decryption Functionality",
    "category": "section",
    "text": "Nettle also provides encryption and decryption functionality, using the Encryptor and Decryptor objects.  Cipher types are available through get_cipher_types().  Create a pair of objects with a shared key, and encrypt()/decrypt() to your heart\'s content:key = \"this key\'s exactly 32 bytes long\"\nenc = Encryptor(\"AES256\", key)\nplaintext = \"this is 16 chars\"\nciphertext = encrypt(enc, plaintext)\n\ndec = Decryptor(\"AES256\", key)\ndeciphertext = decrypt(dec, ciphertext)\nVector{UInt8}(plaintext) == deciphertext # no bytestring\n\n# or...\ndecrypt(\"AES256\", key, encrypt(\"AES256\", key, plaintext)) == Vector{UInt8}(plaintext)For AES256CBC encrypt/decrypt, generate a pair of key32 and iv16 with salt.(And add or trim padding yourself.)passwd = \"Secret Passphrase\"\nsalt = hex2bytes(\"a3e550e89e70996c\") # use random 8 bytes\n(key32, iv16) = gen_key32_iv16(Vector{UInt8}(passwd), salt)\n\nenc = Encryptor(\"AES256\", key32)\nplaintext = \"Message\"\nciphertext = encrypt(enc, :CBC, iv16, add_padding_PKCS5(Vector{UInt8}(plaintext), 16))\n\ndec = Decryptor(\"AES256\", key32)\ndeciphertext = decrypt(dec, :CBC, iv16, ciphertext)\nVector{UInt8}(plaintext) == trim_padding_PKCS5(deciphertext) # no bytestring\n\n# or...\nplainbytes = hex2bytes(\"414155aa5541416162\")\ncipherbytes = encrypt(\"AES256\", :CBC, iv16, key32, add_padding_PKCS5(plainbytes, 16))\ndecipherbytes = decrypt(\"AES256\", :CBC, iv16, key32, cipherbytes)\nplainbytes == trim_padding_PKCS5(decipherbytes) # no bytestring"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Nettle.CipherTypeNettle.DecryptorNettle.EncryptorNettle.HMACStateNettle.HashTypeNettle.HasherNettle.NettleNettle.NettleCipherNettle.NettleHashNettle.__init__Nettle._cipher_suitesNettle._cipher_typesNettle._hash_typesNettle._precompile_Nettle.add_padding_PKCS5Nettle.check_depsNettle.decryptNettle.decrypt!Nettle.depsjl_pathNettle.digestNettle.digest!Nettle.encryptNettle.encrypt!Nettle.evalNettle.gen_key32_iv16Nettle.get_cipher_typesNettle.get_hash_typesNettle.hexdigestNettle.hexdigest!Nettle.includeNettle.libnettleNettle.nettle_hashNettle.trim_padding_PKCS5Nettle.update!"
},

]}
