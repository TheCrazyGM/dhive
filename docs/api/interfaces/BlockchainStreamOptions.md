[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / BlockchainStreamOptions

# Interface: BlockchainStreamOptions

Defined in: [src/helpers/blockchain.ts:50](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L50)

## Properties

### from?

> `optional` **from?**: `number`

Defined in: [src/helpers/blockchain.ts:54](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L54)

Start block number, inclusive. If omitted generation will start from current block height.

***

### mode?

> `optional` **mode?**: [`BlockchainMode`](../enumerations/BlockchainMode.md)

Defined in: [src/helpers/blockchain.ts:63](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L63)

Streaming mode, if set to `Latest` may include blocks that are not applied to the final chain.
Defaults to `Irreversible`.

***

### to?

> `optional` **to?**: `number`

Defined in: [src/helpers/blockchain.ts:58](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L58)

End block number, inclusive. If omitted stream will continue indefinitely.
