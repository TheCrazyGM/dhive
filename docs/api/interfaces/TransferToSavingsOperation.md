[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / TransferToSavingsOperation

# Interface: TransferToSavingsOperation

Defined in: [src/chain/operation.ts:1013](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L1013)

Moves liquid HIVE or HBD into an account's savings balance.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"transfer_to_savings"`

Defined in: [src/chain/operation.ts:1014](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L1014)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:1015](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L1015)

#### amount

> **amount**: `string` \| [`Asset`](../classes/Asset.md)

#### from

> **from**: `string`

#### memo

> **memo**: `string`

#### request\_id

> **request\_id**: `number`

#### to

> **to**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
