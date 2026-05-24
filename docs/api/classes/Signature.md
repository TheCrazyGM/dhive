[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / Signature

# Class: Signature

Defined in: [src/crypto.ts:348](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L348)

Compact recoverable secp256k1 signature.

## Constructors

### Constructor

> **new Signature**(`data`, `recovery`): `Signature`

Defined in: [src/crypto.ts:349](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L349)

#### Parameters

##### data

`Uint8Array`

##### recovery

`number`

#### Returns

`Signature`

## Properties

### data

> **data**: `Uint8Array`

Defined in: [src/crypto.ts:349](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L349)

***

### recovery

> **recovery**: `number`

Defined in: [src/crypto.ts:349](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L349)

## Methods

### recover()

> **recover**(`message`, `prefix?`): [`PublicKey`](PublicKey.md)

Defined in: [src/crypto.ts:371](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L371)

Recovers the public key that produced this signature.

#### Parameters

##### message

`Uint8Array`

##### prefix?

`string`

#### Returns

[`PublicKey`](PublicKey.md)

***

### toBuffer()

> **toBuffer**(): `Uint8Array`\<`ArrayBuffer`\>

Defined in: [src/crypto.ts:379](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L379)

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/crypto.ts:387](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L387)

#### Returns

`string`

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`): `Signature`

Defined in: [src/crypto.ts:353](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L353)

#### Parameters

##### buffer

`Uint8Array`

#### Returns

`Signature`

***

### fromString()

> `static` **fromString**(`string`): `Signature`

Defined in: [src/crypto.ts:364](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/crypto.ts#L364)

#### Parameters

##### string

`string`

#### Returns

`Signature`
