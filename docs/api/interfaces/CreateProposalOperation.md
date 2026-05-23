[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / CreateProposalOperation

# Interface: CreateProposalOperation

Defined in: [src/chain/operation.ts:901](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L901)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"create_proposal"`

Defined in: [src/chain/operation.ts:902](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L902)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:903](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L903)

#### creator

> **creator**: `string`

#### daily\_pay

> **daily\_pay**: `string` \| [`Asset`](../classes/Asset.md)

#### end\_date

> **end\_date**: `string`

#### extensions

> **extensions**: `any`[]

#### permlink

> **permlink**: `string`

#### receiver

> **receiver**: `string`

#### start\_date

> **start\_date**: `string`

#### subject

> **subject**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
