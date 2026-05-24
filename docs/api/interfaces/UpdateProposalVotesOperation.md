[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / UpdateProposalVotesOperation

# Interface: UpdateProposalVotesOperation

Defined in: [src/chain/operation.ts:1181](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L1181)

Approves or removes approvals for DHF proposal ids.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"update_proposal_votes"`

Defined in: [src/chain/operation.ts:1182](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L1182)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:1183](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/operation.ts#L1183)

#### approve

> **approve**: `boolean`

#### extensions

> **extensions**: `any`[]

#### proposal\_ids

> **proposal\_ids**: `number`[]

#### voter

> **voter**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
