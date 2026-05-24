[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / PrivateKey

# Class: PrivateKey

Defined in: [src/crypto.ts:249](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L249)

Hive private key backed by the secp256k1 elliptic curve.

## Constructors

### Constructor

> **new PrivateKey**(`key`): `PrivateKey`

Defined in: [src/crypto.ts:250](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L250)

#### Parameters

##### key

`Uint8Array`

#### Returns

`PrivateKey`

## Methods

### createPublic()

> **createPublic**(`prefix?`): [`PublicKey`](PublicKey.md)

Defined in: [src/crypto.ts:315](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L315)

Derives the compressed public key for this private key.

#### Parameters

##### prefix?

`string`

#### Returns

[`PublicKey`](PublicKey.md)

***

### get\_shared\_secret()

> **get\_shared\_secret**(`public_key`): `Uint8Array`

Defined in: [src/crypto.ts:338](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L338)

Derives the shared secret used by encrypted Hive memos.

#### Parameters

##### public\_key

[`PublicKey`](PublicKey.md)

#### Returns

`Uint8Array`

***

### inspect()

> **inspect**(): `string`

Defined in: [src/crypto.ts:330](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L330)

Used by `utils.inspect` and `console.log` in node.js.

#### Returns

`string`

***

### sign()

> **sign**(`message`): [`Signature`](Signature.md)

Defined in: [src/crypto.ts:298](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L298)

Signs a 32-byte digest with this private key.

#### Parameters

##### message

`Uint8Array`

#### Returns

[`Signature`](Signature.md)

***

### toString()

> **toString**(): `string`

Defined in: [src/crypto.ts:323](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L323)

Renders the private key as a WIF string.

#### Returns

`string`

***

### from()

> `static` **from**(`value`): `PrivateKey`

Defined in: [src/crypto.ts:261](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L261)

Normalizes a WIF string or raw secret buffer into a private key.

#### Parameters

##### value

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`PrivateKey`

***

### fromLogin()

> `static` **fromLogin**(`username`, `password`, `role?`): `PrivateKey`

Defined in: [src/crypto.ts:286](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L286)

Derives a Hive role key from an account name and master password.

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

Defined in: [src/crypto.ts:279](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L279)

Derives a private key by hashing an arbitrary seed string.

#### Parameters

##### seed

`string`

#### Returns

`PrivateKey`

***

### fromString()

> `static` **fromString**(`wif`): `PrivateKey`

Defined in: [src/crypto.ts:272](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L272)

Parses a WIF-encoded Hive private key.

#### Parameters

##### wif

`string`

#### Returns

`PrivateKey`
