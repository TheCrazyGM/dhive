[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / PrivateKey

# Class: PrivateKey

Defined in: [src/crypto.ts:253](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L253)

ECDSA (secp256k1) private key.

## Constructors

### Constructor

> **new PrivateKey**(`key`): `PrivateKey`

Defined in: [src/crypto.ts:256](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L256)

#### Parameters

##### key

`Buffer`

#### Returns

`PrivateKey`

## Properties

### secret

> **secret**: `Buffer`

Defined in: [src/crypto.ts:254](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L254)

## Methods

### createPublic()

> **createPublic**(`prefix?`): [`PublicKey`](PublicKey.md)

Defined in: [src/crypto.ts:324](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L324)

Derive the public key for this private key.

#### Parameters

##### prefix?

`string`

#### Returns

[`PublicKey`](PublicKey.md)

***

### get\_shared\_secret()

> **get\_shared\_secret**(`public_key`): `Buffer`

Defined in: [src/crypto.ts:348](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L348)

Get shared secret for memo cryptography

#### Parameters

##### public\_key

[`PublicKey`](PublicKey.md)

#### Returns

`Buffer`

***

### inspect()

> **inspect**(): `string`

Defined in: [src/crypto.ts:340](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L340)

Used by `utils.inspect` and `console.log` in node.js. Does not show the full key
to get the full encoded key you need to explicitly call [toString](#tostring).

#### Returns

`string`

***

### multiply()

> **multiply**(`pub`): `Buffer`

Defined in: [src/crypto.ts:301](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L301)

#### Parameters

##### pub

`any`

#### Returns

`Buffer`

***

### sign()

> **sign**(`message`): [`Signature`](Signature.md)

Defined in: [src/crypto.ts:311](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L311)

Sign message.

#### Parameters

##### message

`Buffer`

32-byte message.

#### Returns

[`Signature`](Signature.md)

***

### toString()

> **toString**(): `string`

Defined in: [src/crypto.ts:332](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L332)

Return a WIF-encoded representation of the key.

#### Returns

`string`

***

### from()

> `static` **from**(`value`): `PrivateKey`

Defined in: [src/crypto.ts:267](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L267)

Convenience to create a new instance from WIF string or buffer.

#### Parameters

##### value

`string` \| `Buffer`\<`ArrayBufferLike`\>

#### Returns

`PrivateKey`

***

### fromLogin()

> `static` **fromLogin**(`username`, `password`, `role?`): `PrivateKey`

Defined in: [src/crypto.ts:292](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L292)

Create key from username and password.

#### Parameters

##### username

`string`

##### password

`string`

##### role?

[`KeyRole`](../type-aliases/KeyRole.md) = `'active'`

#### Returns

`PrivateKey`

***

### fromSeed()

> `static` **fromSeed**(`seed`): `PrivateKey`

Defined in: [src/crypto.ts:285](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L285)

Create a new instance from a seed.

#### Parameters

##### seed

`string`

#### Returns

`PrivateKey`

***

### fromString()

> `static` **fromString**(`wif`): `PrivateKey`

Defined in: [src/crypto.ts:278](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/crypto.ts#L278)

Create a new instance from a WIF-encoded key.

#### Parameters

##### wif

`string`

#### Returns

`PrivateKey`
