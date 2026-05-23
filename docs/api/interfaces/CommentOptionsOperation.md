[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / CommentOptionsOperation

# Interface: CommentOptionsOperation

Defined in: [src/chain/operation.ts:295](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L295)

Generic operation.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"comment_options"`

Defined in: [src/chain/operation.ts:296](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L296)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:297](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L297)

#### allow\_curation\_rewards

> **allow\_curation\_rewards**: `boolean`

Whether to allow post to recieve curation rewards.

#### allow\_votes

> **allow\_votes**: `boolean`

Whether to allow post to receive votes.

#### author

> **author**: `string`

#### extensions

> **extensions**: \[`0`, \{ `beneficiaries`: [`BeneficiaryRoute`](BeneficiaryRoute.md)[]; \}\][]

#### max\_accepted\_payout

> **max\_accepted\_payout**: `string` \| [`Asset`](../classes/Asset.md)

HBD value of the maximum payout this post will receive.

#### percent\_hbd

> **percent\_hbd**: `number`

The percent of Hive Dollars to key, unkept amounts will be received as Hive Power.

#### permlink

> **permlink**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
