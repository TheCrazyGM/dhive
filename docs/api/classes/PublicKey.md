[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / PublicKey

# Class: PublicKey

Defined in: [src/crypto.ts:167](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L167)

ECDSA (secp256k1) public key.

## Constructors

### Constructor

> **new PublicKey**(`key`, `prefix?`): `PublicKey`

Defined in: [src/crypto.ts:171](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L171)

#### Parameters

##### key

`any`

##### prefix?

`string` = `DEFAULT_ADDRESS_PREFIX`

#### Returns

`PublicKey`

## Properties

### key

> `readonly` **key**: `any`

Defined in: [src/crypto.ts:172](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L172)

***

### prefix

> `readonly` **prefix**: `string` = `DEFAULT_ADDRESS_PREFIX`

Defined in: [src/crypto.ts:173](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L173)

***

### uncompressed

> `readonly` **uncompressed**: `Buffer`

Defined in: [src/crypto.ts:169](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L169)

## Methods

### inspect()

> **inspect**(): `string`

Defined in: [src/crypto.ts:243](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L243)

Used by `utils.inspect` and `console.log` in node.js.

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `string`

Defined in: [src/crypto.ts:236](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L236)

Return JSON representation of this key, same as toString().

#### Returns

`string`

***

### toString()

> **toString**(): `string`

Defined in: [src/crypto.ts:229](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L229)

Return a WIF-encoded representation of the key.

#### Returns

`string`

***

### verify()

> **verify**(`message`, `signature`): `boolean`

Defined in: [src/crypto.ts:217](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L217)

Verify a 32-byte signature.

#### Parameters

##### message

`Buffer`

32-byte message to verify.

##### signature

[`Signature`](Signature.md)

Signature to verify.

#### Returns

`boolean`

***

### from()

> `static` **from**(`value`): `PublicKey`

Defined in: [src/crypto.ts:204](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L204)

Create a new instance.

#### Parameters

##### value

`string` \| `PublicKey`

#### Returns

`PublicKey`

***

### fromBuffer()

> `static` **fromBuffer**(`key`): `any`

Defined in: [src/crypto.ts:183](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L183)

#### Parameters

##### key

`Uint8Array`\<`ArrayBufferLike`\> \| `Buffer`\<`ArrayBufferLike`\>

#### Returns

`any`

***

### fromString()

> `static` **fromString**(`wif`): `PublicKey`

Defined in: [src/crypto.ts:196](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L196)

Create a new instance from a WIF-encoded key.

#### Parameters

##### wif

`string`

#### Returns

`PublicKey`
