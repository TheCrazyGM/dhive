[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / BinaryReader

# Class: BinaryReader

Defined in: [src/utils.ts:162](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L162)

Native binary reader using Uint8Array.

## Constructors

### Constructor

> **new BinaryReader**(`buffer`): `BinaryReader`

Defined in: [src/utils.ts:166](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L166)

#### Parameters

##### buffer

`Uint8Array`

#### Returns

`BinaryReader`

## Methods

### readBytes()

> **readBytes**(`length`): `Uint8Array`

Defined in: [src/utils.ts:235](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L235)

#### Parameters

##### length

`number`

#### Returns

`Uint8Array`

***

### readInt16()

> **readInt16**(): `number`

Defined in: [src/utils.ts:178](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L178)

#### Returns

`number`

***

### readInt32()

> **readInt32**(): `number`

Defined in: [src/utils.ts:190](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L190)

#### Returns

`number`

***

### readInt64()

> **readInt64**(): `JSBI`

Defined in: [src/utils.ts:202](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L202)

#### Returns

`JSBI`

***

### readInt8()

> **readInt8**(): `number`

Defined in: [src/utils.ts:170](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L170)

#### Returns

`number`

***

### readString()

> **readString**(): `string`

Defined in: [src/utils.ts:228](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L228)

#### Returns

`string`

***

### readUint16()

> **readUint16**(): `number`

Defined in: [src/utils.ts:184](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L184)

#### Returns

`number`

***

### readUint32()

> **readUint32**(): `number`

Defined in: [src/utils.ts:196](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L196)

#### Returns

`number`

***

### readUint64()

> **readUint64**(): `JSBI`

Defined in: [src/utils.ts:212](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L212)

#### Returns

`JSBI`

***

### readUint8()

> **readUint8**(): `number`

Defined in: [src/utils.ts:174](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L174)

#### Returns

`number`

***

### readVarint32()

> **readVarint32**(): `number`

Defined in: [src/utils.ts:216](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L216)

#### Returns

`number`

***

### skip()

> **skip**(`length`): `void`

Defined in: [src/utils.ts:241](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L241)

#### Parameters

##### length

`number`

#### Returns

`void`
