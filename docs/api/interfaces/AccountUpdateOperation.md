[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / AccountUpdateOperation

# Interface: AccountUpdateOperation

Defined in: [src/chain/operation.ts:187](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L187)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"account_update"`

Defined in: [src/chain/operation.ts:188](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L188)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:189](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L189)

#### account

> **account**: `string`

#### active?

> `optional` **active?**: [`AuthorityType`](AuthorityType.md)

#### json\_metadata

> **json\_metadata**: `string`

#### memo\_key

> **memo\_key**: `string` \| [`PublicKey`](../classes/PublicKey.md)

#### owner?

> `optional` **owner?**: [`AuthorityType`](AuthorityType.md)

#### posting?

> `optional` **posting?**: [`AuthorityType`](AuthorityType.md)

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
