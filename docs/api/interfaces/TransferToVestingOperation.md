[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / TransferToVestingOperation

# Interface: TransferToVestingOperation

Defined in: [src/chain/operation.ts:799](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L799)

This operation converts HIVE into VFS (Vesting Fund Shares) at
the current exchange rate. With this operation it is possible to
give another account vesting shares so that faucets can
pre-fund new accounts with vesting shares.
(A.k.a. Powering Up)

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"transfer_to_vesting"`

Defined in: [src/chain/operation.ts:800](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L800)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:801](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L801)

#### amount

> **amount**: `string` \| [`Asset`](../classes/Asset.md)

Amount to power up, must be HIVE

#### from

> **from**: `string`

#### to

> **to**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
