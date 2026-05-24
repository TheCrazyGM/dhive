[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / PriceType

# Type Alias: PriceType

> **PriceType** = [`Price`](../classes/Price.md) \| \{ `base`: [`Asset`](../classes/Asset.md) \| `string`; `quote`: [`Asset`](../classes/Asset.md) \| `string`; \}

Defined in: [src/chain/asset.ts:358](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/asset.ts#L358)

Value accepted anywhere Pollen needs a Hive price ratio.

## Example

```ts
const feed: PriceType = {
  base: '1.000 HIVE',
  quote: '0.300 HBD'
}
```
