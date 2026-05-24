[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / PublicKey

# Class: PublicKey

Defined in: [src/crypto.ts:166](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L166)

Hive public key backed by the secp256k1 elliptic curve.

## Constructors

### Constructor

> **new PublicKey**(`key`, `prefix?`): `PublicKey`

Defined in: [src/crypto.ts:170](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L170)

#### Parameters

##### key

`Uint8Array`

##### prefix?

`string` = `DEFAULT_ADDRESS_PREFIX`

#### Returns

`PublicKey`

## Properties

### key

> `readonly` **key**: `Uint8Array`

Defined in: [src/crypto.ts:171](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L171)

***

### prefix

> `readonly` **prefix**: `string` = `DEFAULT_ADDRESS_PREFIX`

Defined in: [src/crypto.ts:172](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L172)

***

### uncompressed

> `readonly` **uncompressed**: `Uint8Array`

Defined in: [src/crypto.ts:168](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L168)

## Methods

### inspect()

> **inspect**(): `string`

Defined in: [src/crypto.ts:236](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L236)

Used by `utils.inspect` and `console.log` in node.js.

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `string`

Defined in: [src/crypto.ts:229](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L229)

Return JSON representation of this key, same as toString().

#### Returns

`string`

***

### toString()

> **toString**(): `string`

Defined in: [src/crypto.ts:222](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L222)

Renders the key as a Hive public-key string.

#### Returns

`string`

***

### verify()

> **verify**(`message`, `signature`): `boolean`

Defined in: [src/crypto.ts:210](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L210)

Verifies a compact ECDSA signature against a 32-byte digest.

#### Parameters

##### message

`Uint8Array`

##### signature

[`Signature`](Signature.md)

#### Returns

`boolean`

***

### from()

> `static` **from**(`value`): `PublicKey`

Defined in: [src/crypto.ts:199](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L199)

Normalizes a public-key input into a PublicKey instance.

#### Parameters

##### value

`string` \| `PublicKey`

#### Returns

`PublicKey`

***

### fromBuffer()

> `static` **fromBuffer**(`key`): `PublicKey`

Defined in: [src/crypto.ts:184](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L184)

#### Parameters

##### key

`Uint8Array`

#### Returns

`PublicKey`

***

### fromString()

> `static` **fromString**(`wif`): `PublicKey`

Defined in: [src/crypto.ts:191](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L191)

Creates a public key from its Hive string representation.

#### Parameters

##### wif

`string`

#### Returns

`PublicKey`
