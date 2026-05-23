[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / LimitOrderCancelOperation

# Interface: LimitOrderCancelOperation

Defined in: [src/chain/operation.ts:532](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L532)

Cancels an order and returns the balance to owner.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"limit_order_cancel"`

Defined in: [src/chain/operation.ts:533](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L533)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:534](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L534)

#### orderid

> **orderid**: `number`

#### owner

> **owner**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
