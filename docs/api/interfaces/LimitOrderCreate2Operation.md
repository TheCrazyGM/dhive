[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / LimitOrderCreate2Operation

# Interface: LimitOrderCreate2Operation

Defined in: [src/chain/operation.ts:559](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L559)

This operation is identical to limit_order_create except it serializes the price rather
than calculating it from other fields.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"limit_order_create2"`

Defined in: [src/chain/operation.ts:560](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L560)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:561](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L561)

#### amount\_to\_sell

> **amount\_to\_sell**: `string` \| [`Asset`](../classes/Asset.md)

#### exchange\_rate

> **exchange\_rate**: [`PriceType`](../type-aliases/PriceType.md)

#### expiration

> **expiration**: `string`

#### fill\_or\_kill

> **fill\_or\_kill**: `boolean`

#### orderid

> **orderid**: `number`

#### owner

> **owner**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
