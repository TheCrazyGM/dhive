[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / Signature

# Class: Signature

Defined in: [src/crypto.ts:359](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L359)

ECDSA (secp256k1) signature.

## Constructors

### Constructor

> **new Signature**(`data`, `recovery`): `Signature`

Defined in: [src/crypto.ts:360](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L360)

#### Parameters

##### data

`Buffer`

##### recovery

`number`

#### Returns

`Signature`

## Properties

### data

> **data**: `Buffer`

Defined in: [src/crypto.ts:360](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L360)

***

### recovery

> **recovery**: `number`

Defined in: [src/crypto.ts:360](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L360)

## Methods

### recover()

> **recover**(`message`, `prefix?`): [`PublicKey`](PublicKey.md)

Defined in: [src/crypto.ts:379](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L379)

Recover public key from signature by providing original signed message.

#### Parameters

##### message

`Buffer`

32-byte message that was used to create the signature.

##### prefix?

`string`

#### Returns

[`PublicKey`](PublicKey.md)

***

### toBuffer()

> **toBuffer**(): `Buffer`\<`ArrayBuffer`\>

Defined in: [src/crypto.ts:385](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L385)

#### Returns

`Buffer`\<`ArrayBuffer`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/crypto.ts:392](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L392)

#### Returns

`string`

***

### fromBuffer()

> `static` **fromBuffer**(`buffer`): `Signature`

Defined in: [src/crypto.ts:364](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L364)

#### Parameters

##### buffer

`Buffer`

#### Returns

`Signature`

***

### fromString()

> `static` **fromString**(`string`): `Signature`

Defined in: [src/crypto.ts:371](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/crypto.ts#L371)

#### Parameters

##### string

`string`

#### Returns

`Signature`
