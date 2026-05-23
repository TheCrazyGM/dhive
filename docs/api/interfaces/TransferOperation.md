[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / TransferOperation

# Interface: TransferOperation

Defined in: [src/chain/operation.ts:748](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L748)

Transfers asset from one account to another.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"transfer"`

Defined in: [src/chain/operation.ts:749](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L749)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:750](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L750)

#### amount

> **amount**: `string` \| [`Asset`](../classes/Asset.md)

Amount of HIVE or HBD to send.

#### from

> **from**: `string`

Sending account name.

#### memo

> **memo**: `string`

Plain-text note attached to transaction.

#### to

> **to**: `string`

Receiving account name.

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
