[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / CustomOperation

# Interface: CustomOperation

Defined in: [src/chain/operation.ts:338](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L338)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"custom"`

Defined in: [src/chain/operation.ts:339](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L339)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:340](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L340)

#### data

> **data**: `number`[] \| [`HexBuffer`](../classes/HexBuffer.md) \| `Buffer`\<`ArrayBufferLike`\>

#### id

> **id**: `number`

#### required\_auths

> **required\_auths**: `string`[]

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
