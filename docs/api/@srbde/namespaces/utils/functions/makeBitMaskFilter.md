[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / makeBitMaskFilter

# Function: makeBitMaskFilter()

> **makeBitMaskFilter**(`allowedOperations`): (`string` \| `null`)[]

Defined in: [src/utils.ts:805](https://github.com/TheCrazyGM/dhive/blob/06f00c49db099e36d53bf072dac0943ba256d1a1/src/utils.ts#L805)

Builds the two-word account-history operation mask accepted by Hive.

## Parameters

### allowedOperations

`number`[]

Operation ids from [operationOrders](../variables/operationOrders.md).

## Returns

(`string` \| `null`)[]

Low/high mask words as decimal strings, with zero words represented
as `null`.

## Remarks

Native `bigint` is used for the 64-bit mask words, replacing the older JSBI
shim while keeping the returned RPC shape as decimal strings or `null`.

## Example

```ts
const mask = makeBitMaskFilter([
  operationOrders.transfer,
  operationOrders.claim_reward_balance
])
```
