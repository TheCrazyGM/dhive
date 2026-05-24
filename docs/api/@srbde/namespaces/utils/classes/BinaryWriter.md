[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / BinaryWriter

# Class: BinaryWriter

Defined in: [src/utils.ts:113](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L113)

Growable little-endian byte writer used by Hive serializers.

## Constructors

### Constructor

> **new BinaryWriter**(`size?`): `BinaryWriter`

Defined in: [src/utils.ts:117](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L117)

#### Parameters

##### size?

`number` = `1024`

#### Returns

`BinaryWriter`

## Methods

### getBuffer()

> **getBuffer**(): `Uint8Array`

Defined in: [src/utils.ts:205](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L205)

#### Returns

`Uint8Array`

***

### writeBytes()

> **writeBytes**(`bytes`): `void`

Defined in: [src/utils.ts:199](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L199)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`void`

***

### writeInt16()

> **writeInt16**(`value`): `void`

Defined in: [src/utils.ts:139](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L139)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeInt32()

> **writeInt32**(`value`): `void`

Defined in: [src/utils.ts:151](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L151)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeInt64()

> **writeInt64**(`value`): `void`

Defined in: [src/utils.ts:163](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L163)

#### Parameters

##### value

`string` \| `number` \| `bigint`

#### Returns

`void`

***

### writeInt8()

> **writeInt8**(`value`): `void`

Defined in: [src/utils.ts:129](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L129)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeString()

> **writeString**(`value`): `void`

Defined in: [src/utils.ts:193](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L193)

#### Parameters

##### value

`string`

#### Returns

`void`

***

### writeUint16()

> **writeUint16**(`value`): `void`

Defined in: [src/utils.ts:145](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L145)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeUint32()

> **writeUint32**(`value`): `void`

Defined in: [src/utils.ts:157](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L157)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeUint64()

> **writeUint64**(`value`): `void`

Defined in: [src/utils.ts:174](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L174)

#### Parameters

##### value

`string` \| `number` \| `bigint`

#### Returns

`void`

***

### writeUint8()

> **writeUint8**(`value`): `void`

Defined in: [src/utils.ts:134](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L134)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeVarint32()

> **writeVarint32**(`value`): `void`

Defined in: [src/utils.ts:185](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/utils.ts#L185)

#### Parameters

##### value

`number`

#### Returns

`void`
