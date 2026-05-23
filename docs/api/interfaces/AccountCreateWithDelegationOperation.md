[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / AccountCreateWithDelegationOperation

# Interface: AccountCreateWithDelegationOperation

Defined in: [src/chain/operation.ts:168](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L168)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"account_create_with_delegation"`

Defined in: [src/chain/operation.ts:169](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L169)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:170](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L170)

#### active

> **active**: [`AuthorityType`](AuthorityType.md)

#### creator

> **creator**: `string`

#### delegation

> **delegation**: `string` \| [`Asset`](../classes/Asset.md)

#### extensions

> **extensions**: `any`[]

Extensions. Not currently used.

#### fee

> **fee**: `string` \| [`Asset`](../classes/Asset.md)

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
