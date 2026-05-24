[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / AccountWitnessVoteOperation

# Interface: AccountWitnessVoteOperation

Defined in: [src/chain/operation.ts:320](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L320)

Approves or removes a witness vote.

## Example

```ts
const op: AccountWitnessVoteOperation = ['account_witness_vote', {
  account: 'srbde',
  witness: 'some-witness',
  approve: true
}]
```

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"account_witness_vote"`

Defined in: [src/chain/operation.ts:321](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L321)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:322](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L322)

#### account

> **account**: `string`

#### approve

> **approve**: `boolean`

#### witness

> **witness**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
