[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / FeedPublishOperation

# Interface: FeedPublishOperation

Defined in: [src/chain/operation.ts:728](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L728)

Publishes a witness price feed.

## Remarks

Witness feeds influence the median HIVE/HBD price used by conversions and
debt-ratio mechanics.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"feed_publish"`

Defined in: [src/chain/operation.ts:729](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L729)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:730](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L730)

#### exchange\_rate

> **exchange\_rate**: [`PriceType`](../type-aliases/PriceType.md)

#### publisher

> **publisher**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
