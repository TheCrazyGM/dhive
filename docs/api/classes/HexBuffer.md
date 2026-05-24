[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / HexBuffer

# Class: HexBuffer

Defined in: [src/chain/misc.ts:63](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L63)

Buffer wrapper that serializes to a hex-encoded string.

## Remarks

Hive APIs frequently represent binary values as hex strings. `HexBuffer`
keeps binary data available for serializers while rendering cleanly in JSON.

## Example

```ts
const bytes = HexBuffer.from('deadbeef')
console.log(bytes.toJSON())
```

## Constructors

### Constructor

> **new HexBuffer**(`buffer`): `HexBuffer`

Defined in: [src/chain/misc.ts:69](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L69)

Creates a hex-buffer wrapper around a Uint8Array.

#### Parameters

##### buffer

`Uint8Array`

Raw binary data.

#### Returns

`HexBuffer`

## Properties

### buffer

> **buffer**: `Uint8Array`

Defined in: [src/chain/misc.ts:69](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L69)

Raw binary data.

## Methods

### toJSON()

> **toJSON**(): `string`

Defined in: [src/chain/misc.ts:101](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L101)

#### Returns

`string`

***

### toString()

> **toString**(`encoding?`): `string`

Defined in: [src/chain/misc.ts:94](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L94)

#### Parameters

##### encoding?

`string` = `"hex"`

#### Returns

`string`

***

### from()

> `static` **from**(`value`): `HexBuffer`

Defined in: [src/chain/misc.ts:82](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L82)

Normalizes hex, bytes, or an existing wrapper into a HexBuffer.

#### Parameters

##### value

`string` \| `number`[] \| `Uint8Array`\<`ArrayBufferLike`\> \| `HexBuffer`

Uint8Array, existing wrapper, byte array, or hex string.

#### Returns

`HexBuffer`

A hex-buffer wrapper.

#### Example

```ts
const buffer = HexBuffer.from([0xde, 0xad, 0xbe, 0xef])
```
