[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / CustomBinaryOperation

# Interface: CustomBinaryOperation

Defined in: [src/chain/operation.ts:347](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L347)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"custom_binary"`

Defined in: [src/chain/operation.ts:348](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L348)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:349](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L349)

#### data

> **data**: `number`[] \| [`HexBuffer`](../classes/HexBuffer.md) \| `Buffer`\<`ArrayBufferLike`\>

#### id

> **id**: `string`

ID string, must be less than 32 characters long.

#### required\_active\_auths

> **required\_active\_auths**: `string`[]

#### required\_auths

> **required\_auths**: [`AuthorityType`](AuthorityType.md)[]

#### required\_owner\_auths

> **required\_owner\_auths**: `string`[]

#### required\_posting\_auths

> **required\_posting\_auths**: `string`[]

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
