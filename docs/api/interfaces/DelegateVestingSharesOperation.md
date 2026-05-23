[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / DelegateVestingSharesOperation

# Interface: DelegateVestingSharesOperation

Defined in: [src/chain/operation.ts:386](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L386)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"delegate_vesting_shares"`

Defined in: [src/chain/operation.ts:387](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L387)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:388](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L388)

#### delegatee

> **delegatee**: `string`

The account receiving vesting shares.

#### delegator

> **delegator**: `string`

The account delegating vesting shares.

#### vesting\_shares

> **vesting\_shares**: `string` \| [`Asset`](../classes/Asset.md)

The amount of vesting shares delegated.

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
