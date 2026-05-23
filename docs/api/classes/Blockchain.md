[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / Blockchain

# Class: Blockchain

Defined in: [src/helpers/blockchain.ts:66](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L66)

## Constructors

### Constructor

> **new Blockchain**(`client`): `Blockchain`

Defined in: [src/helpers/blockchain.ts:67](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L67)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`Blockchain`

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/helpers/blockchain.ts:67](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L67)

## Methods

### getBlockNumbers()

> **getBlockNumbers**(`options?`): `AsyncGenerator`\<`number`, `void`, `unknown`\>

Defined in: [src/helpers/blockchain.ts:102](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L102)

Return a asynchronous block number iterator.

#### Parameters

##### options?

`number` \| [`BlockchainStreamOptions`](../interfaces/BlockchainStreamOptions.md)

Feed options, can also be a block number to start from.

#### Returns

`AsyncGenerator`\<`number`, `void`, `unknown`\>

***

### getBlockNumberStream()

> **getBlockNumberStream**(`options?`): `ReadableStream`

Defined in: [src/helpers/blockchain.ts:133](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L133)

Return a stream of block numbers, accepts same parameters as [getBlockNumbers](#getblocknumbers).

#### Parameters

##### options?

`number` \| [`BlockchainStreamOptions`](../interfaces/BlockchainStreamOptions.md)

#### Returns

`ReadableStream`

***

### getBlocks()

> **getBlocks**(`options?`): `AsyncGenerator`\<[`SignedBlock`](../interfaces/SignedBlock.md), `void`, `unknown`\>

Defined in: [src/helpers/blockchain.ts:140](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L140)

Return a asynchronous block iterator, accepts same parameters as [getBlockNumbers](#getblocknumbers).

#### Parameters

##### options?

`number` \| [`BlockchainStreamOptions`](../interfaces/BlockchainStreamOptions.md)

#### Returns

`AsyncGenerator`\<[`SignedBlock`](../interfaces/SignedBlock.md), `void`, `unknown`\>

***

### getBlockStream()

> **getBlockStream**(`options?`): `ReadableStream`

Defined in: [src/helpers/blockchain.ts:149](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L149)

Return a stream of blocks, accepts same parameters as [getBlockNumbers](#getblocknumbers).

#### Parameters

##### options?

`number` \| [`BlockchainStreamOptions`](../interfaces/BlockchainStreamOptions.md)

#### Returns

`ReadableStream`

***

### getCurrentBlock()

> **getCurrentBlock**(`mode?`): `Promise`\<[`SignedBlock`](../interfaces/SignedBlock.md)\>

Defined in: [src/helpers/blockchain.ts:94](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L94)

Get latest block.

#### Parameters

##### mode?

[`BlockchainMode`](../enumerations/BlockchainMode.md)

#### Returns

`Promise`\<[`SignedBlock`](../interfaces/SignedBlock.md)\>

***

### getCurrentBlockHeader()

> **getCurrentBlockHeader**(`mode?`): `Promise`\<[`BlockHeader`](../interfaces/BlockHeader.md)\>

Defined in: [src/helpers/blockchain.ts:85](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L85)

Get latest block header.

#### Parameters

##### mode?

[`BlockchainMode`](../enumerations/BlockchainMode.md)

#### Returns

`Promise`\<[`BlockHeader`](../interfaces/BlockHeader.md)\>

***

### getCurrentBlockNum()

> **getCurrentBlockNum**(`mode?`): `Promise`\<`number`\>

Defined in: [src/helpers/blockchain.ts:72](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L72)

Get latest block number.

#### Parameters

##### mode?

[`BlockchainMode`](../enumerations/BlockchainMode.md) = `BlockchainMode.Irreversible`

#### Returns

`Promise`\<`number`\>

***

### getOperations()

> **getOperations**(`options?`): `AsyncGenerator`\<[`AppliedOperation`](../interfaces/AppliedOperation.md), `void`, `unknown`\>

Defined in: [src/helpers/blockchain.ts:156](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L156)

Return a asynchronous operation iterator, accepts same parameters as [getBlockNumbers](#getblocknumbers).

#### Parameters

##### options?

`number` \| [`BlockchainStreamOptions`](../interfaces/BlockchainStreamOptions.md)

#### Returns

`AsyncGenerator`\<[`AppliedOperation`](../interfaces/AppliedOperation.md), `void`, `unknown`\>

***

### getOperationsStream()

> **getOperationsStream**(`options?`): `ReadableStream`

Defined in: [src/helpers/blockchain.ts:168](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/blockchain.ts#L168)

Return a stream of operations, accepts same parameters as [getBlockNumbers](#getblocknumbers).

#### Parameters

##### options?

`number` \| [`BlockchainStreamOptions`](../interfaces/BlockchainStreamOptions.md)

#### Returns

`ReadableStream`
