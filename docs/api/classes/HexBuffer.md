[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / HexBuffer

# Class: HexBuffer

Defined in: [src/chain/misc.ts:46](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L46)

Buffer wrapper that serializes to a hex-encoded string.

## Constructors

### Constructor

> **new HexBuffer**(`buffer`): `HexBuffer`

Defined in: [src/chain/misc.ts:47](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L47)

#### Parameters

##### buffer

`Buffer`

#### Returns

`HexBuffer`

## Properties

### buffer

> **buffer**: `Buffer`

Defined in: [src/chain/misc.ts:47](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L47)

## Methods

### toJSON()

> **toJSON**(): `string`

Defined in: [src/chain/misc.ts:68](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L68)

#### Returns

`string`

***

### toString()

> **toString**(`encoding?`): `string`

Defined in: [src/chain/misc.ts:64](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L64)

#### Parameters

##### encoding?

`string` = `'hex'`

#### Returns

`string`

***

### from()

> `static` **from**(`value`): `HexBuffer`

Defined in: [src/chain/misc.ts:52](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L52)

Convenience to create a new HexBuffer, does not copy data if value passed is already a buffer.

#### Parameters

##### value

`string` \| `number`[] \| `HexBuffer` \| `Buffer`\<`ArrayBufferLike`\>

#### Returns

`HexBuffer`
