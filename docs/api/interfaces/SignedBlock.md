[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / SignedBlock

# Interface: SignedBlock

Defined in: [src/chain/block.ts:59](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L59)

Full signed block.

## Extends

- [`SignedBlockHeader`](SignedBlockHeader.md)

## Properties

### block\_id

> **block\_id**: `string`

Defined in: [src/chain/block.ts:60](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L60)

***

### extensions

> **extensions**: `any`[]

Defined in: [src/chain/block.ts:46](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L46)

#### Inherited from

[`SignedBlockHeader`](SignedBlockHeader.md).[`extensions`](SignedBlockHeader.md#extensions)

***

### previous

> **previous**: `string`

Defined in: [src/chain/block.ts:42](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L42)

#### Inherited from

[`SignedBlockHeader`](SignedBlockHeader.md).[`previous`](SignedBlockHeader.md#previous)

***

### signing\_key

> **signing\_key**: `string`

Defined in: [src/chain/block.ts:61](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L61)

***

### timestamp

> **timestamp**: `string`

Defined in: [src/chain/block.ts:43](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L43)

#### Inherited from

[`SignedBlockHeader`](SignedBlockHeader.md).[`timestamp`](SignedBlockHeader.md#timestamp)

***

### transaction\_ids

> **transaction\_ids**: `string`[]

Defined in: [src/chain/block.ts:62](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L62)

***

### transaction\_merkle\_root

> **transaction\_merkle\_root**: `string`

Defined in: [src/chain/block.ts:45](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L45)

#### Inherited from

[`SignedBlockHeader`](SignedBlockHeader.md).[`transaction_merkle_root`](SignedBlockHeader.md#transaction_merkle_root)

***

### transactions

> **transactions**: [`Transaction`](Transaction.md)[]

Defined in: [src/chain/block.ts:63](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L63)

***

### witness

> **witness**: `string`

Defined in: [src/chain/block.ts:44](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L44)

#### Inherited from

[`SignedBlockHeader`](SignedBlockHeader.md).[`witness`](SignedBlockHeader.md#witness)

***

### witness\_signature

> **witness\_signature**: `string`

Defined in: [src/chain/block.ts:53](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/block.ts#L53)

#### Inherited from

[`SignedBlockHeader`](SignedBlockHeader.md).[`witness_signature`](SignedBlockHeader.md#witness_signature)
