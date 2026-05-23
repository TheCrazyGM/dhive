[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / AccountUpdate2Operation

# Interface: AccountUpdate2Operation

Defined in: [src/chain/operation.ts:887](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L887)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"account_update2"`

Defined in: [src/chain/operation.ts:888](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L888)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:889](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L889)

#### account

> **account**: `string`

#### active?

> `optional` **active?**: [`AuthorityType`](AuthorityType.md)

#### extensions

> **extensions**: `any`[]

#### json\_metadata

> **json\_metadata**: `string`

#### memo\_key?

> `optional` **memo\_key?**: `string` \| [`PublicKey`](../classes/PublicKey.md)

#### owner?

> `optional` **owner?**: [`AuthorityType`](AuthorityType.md)

#### posting?

> `optional` **posting?**: [`AuthorityType`](AuthorityType.md)

#### posting\_json\_metadata

> **posting\_json\_metadata**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
