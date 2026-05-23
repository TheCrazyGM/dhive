[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / BinaryWriter

# Class: BinaryWriter

Defined in: [src/utils.ts:64](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L64)

Native binary writer using Uint8Array.

## Constructors

### Constructor

> **new BinaryWriter**(`size?`): `BinaryWriter`

Defined in: [src/utils.ts:68](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L68)

#### Parameters

##### size?

`number` = `1024`

#### Returns

`BinaryWriter`

## Methods

### getBuffer()

> **getBuffer**(): `Uint8Array`

Defined in: [src/utils.ts:154](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L154)

#### Returns

`Uint8Array`

***

### writeBytes()

> **writeBytes**(`bytes`): `void`

Defined in: [src/utils.ts:148](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L148)

#### Parameters

##### bytes

`Uint8Array`\<`ArrayBufferLike`\> \| `Buffer`\<`ArrayBufferLike`\>

#### Returns

`void`

***

### writeInt16()

> **writeInt16**(`value`): `void`

Defined in: [src/utils.ts:90](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L90)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeInt32()

> **writeInt32**(`value`): `void`

Defined in: [src/utils.ts:102](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L102)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeInt64()

> **writeInt64**(`value`): `void`

Defined in: [src/utils.ts:114](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L114)

#### Parameters

##### value

`string` \| `number` \| `JSBI`

#### Returns

`void`

***

### writeInt8()

> **writeInt8**(`value`): `void`

Defined in: [src/utils.ts:80](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L80)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeString()

> **writeString**(`value`): `void`

Defined in: [src/utils.ts:142](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L142)

#### Parameters

##### value

`string`

#### Returns

`void`

***

### writeUint16()

> **writeUint16**(`value`): `void`

Defined in: [src/utils.ts:96](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L96)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeUint32()

> **writeUint32**(`value`): `void`

Defined in: [src/utils.ts:108](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L108)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeUint64()

> **writeUint64**(`value`): `void`

Defined in: [src/utils.ts:124](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L124)

#### Parameters

##### value

`string` \| `number` \| `JSBI`

#### Returns

`void`

***

### writeUint8()

> **writeUint8**(`value`): `void`

Defined in: [src/utils.ts:85](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L85)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeVarint32()

> **writeVarint32**(`value`): `void`

Defined in: [src/utils.ts:134](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L134)

#### Parameters

##### value

`number`

#### Returns

`void`
