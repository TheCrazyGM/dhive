[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / BinaryReader

# Class: BinaryReader

Defined in: [src/utils.ts:213](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L213)

Little-endian byte reader used by Hive deserializers and memo decoding.

## Constructors

### Constructor

> **new BinaryReader**(`buffer`): `BinaryReader`

Defined in: [src/utils.ts:217](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L217)

#### Parameters

##### buffer

`Uint8Array`

#### Returns

`BinaryReader`

## Methods

### readBytes()

> **readBytes**(`length`): `Uint8Array`

Defined in: [src/utils.ts:284](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L284)

#### Parameters

##### length

`number`

#### Returns

`Uint8Array`

***

### readInt16()

> **readInt16**(): `number`

Defined in: [src/utils.ts:232](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L232)

#### Returns

`number`

***

### readInt32()

> **readInt32**(): `number`

Defined in: [src/utils.ts:244](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L244)

#### Returns

`number`

***

### readInt64()

> **readInt64**(): `bigint`

Defined in: [src/utils.ts:256](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L256)

#### Returns

`bigint`

***

### readInt8()

> **readInt8**(): `number`

Defined in: [src/utils.ts:224](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L224)

#### Returns

`number`

***

### readString()

> **readString**(): `string`

Defined in: [src/utils.ts:279](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L279)

#### Returns

`string`

***

### readUint16()

> **readUint16**(): `number`

Defined in: [src/utils.ts:238](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L238)

#### Returns

`number`

***

### readUint32()

> **readUint32**(): `number`

Defined in: [src/utils.ts:250](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L250)

#### Returns

`number`

***

### readUint64()

> **readUint64**(): `bigint`

Defined in: [src/utils.ts:263](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L263)

#### Returns

`bigint`

***

### readUint8()

> **readUint8**(): `number`

Defined in: [src/utils.ts:228](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L228)

#### Returns

`number`

***

### readVarint32()

> **readVarint32**(): `number`

Defined in: [src/utils.ts:267](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L267)

#### Returns

`number`

***

### skip()

> **skip**(`length`): `void`

Defined in: [src/utils.ts:293](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L293)

#### Parameters

##### length

`number`

#### Returns

`void`
