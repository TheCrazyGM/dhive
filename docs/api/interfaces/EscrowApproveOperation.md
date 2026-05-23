[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / EscrowApproveOperation

# Interface: EscrowApproveOperation

Defined in: [src/chain/operation.ts:417](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L417)

The agent and to accounts must approve an escrow transaction for it to be valid on
the blockchain. Once a part approves the escrow, the cannot revoke their approval.
Subsequent escrow approve operations, regardless of the approval, will be rejected.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"escrow_approve"`

Defined in: [src/chain/operation.ts:418](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L418)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:419](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L419)

#### agent

> **agent**: `string`

#### approve

> **approve**: `boolean`

#### escrow\_id

> **escrow\_id**: `number`

#### from

> **from**: `string`

#### to

> **to**: `string`

#### who

> **who**: `string`

Either to or agent.

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
