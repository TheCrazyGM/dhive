[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / CreateClaimedAccountOperation

# Interface: CreateClaimedAccountOperation

Defined in: [src/chain/operation.ts:321](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L321)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"create_claimed_account"`

Defined in: [src/chain/operation.ts:322](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L322)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:323](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L323)

#### active

> **active**: [`AuthorityType`](AuthorityType.md)

#### creator

> **creator**: `string`

#### extensions

> **extensions**: `any`[]

Extensions. Not currently used.

#### json\_metadata

> **json\_metadata**: `string`

#### memo\_key

> **memo\_key**: `string` \| [`PublicKey`](../classes/PublicKey.md)

#### new\_account\_name

> **new\_account\_name**: `string`

#### owner

> **owner**: [`AuthorityType`](AuthorityType.md)

#### posting

> **posting**: [`AuthorityType`](AuthorityType.md)

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
