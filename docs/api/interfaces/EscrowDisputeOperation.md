[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / EscrowDisputeOperation

# Interface: EscrowDisputeOperation

Defined in: [src/chain/operation.ts:437](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L437)

If either the sender or receiver of an escrow payment has an issue, they can
raise it for dispute. Once a payment is in dispute, the agent has authority over
who gets what.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"escrow_dispute"`

Defined in: [src/chain/operation.ts:438](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L438)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:439](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L439)

#### agent

> **agent**: `string`

#### escrow\_id

> **escrow\_id**: `number`

#### from

> **from**: `string`

#### to

> **to**: `string`

#### who

> **who**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
