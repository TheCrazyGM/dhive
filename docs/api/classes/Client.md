[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / Client

# Class: Client

Defined in: [src/client.ts:183](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L183)

RPC Client
----------
Can be used in both node.js and the browser. Also see [ClientOptions](../interfaces/ClientOptions.md).

## Constructors

### Constructor

> **new Client**(`address`, `options?`): `Client`

Defined in: [src/client.ts:260](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L260)

#### Parameters

##### address

`string` \| `string`[]

The address to the Hive RPC server,
e.g. `https://api.hive.blog`. or [`https://api.hive.blog`, `https://another.api.com`]

##### options?

[`ClientOptions`](../interfaces/ClientOptions.md) = `{}`

Client options.

#### Returns

`Client`

## Properties

### address

> **address**: `string` \| `string`[]

Defined in: [src/client.ts:193](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L193)

Address to Hive RPC server.
String or String[] *read-only*

***

### addressPrefix

> `readonly` **addressPrefix**: `string`

Defined in: [src/client.ts:244](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L244)

Address prefix for current network.

***

### blockchain

> `readonly` **blockchain**: [`Blockchain`](Blockchain.md)

Defined in: [src/client.ts:213](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L213)

Blockchain helper.

***

### broadcast

> `readonly` **broadcast**: `BroadcastAPI`

Defined in: [src/client.ts:208](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L208)

Broadcast API helper.

***

### chainId

> `readonly` **chainId**: `Buffer`

Defined in: [src/client.ts:239](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L239)

Chain ID for current network.

***

### currentAddress

> **currentAddress**: `string`

Defined in: [src/client.ts:253](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L253)

***

### database

> `readonly` **database**: [`DatabaseAPI`](DatabaseAPI.md)

Defined in: [src/client.ts:198](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L198)

Database API helper.

***

### healthTracker

> `readonly` **healthTracker**: [`NodeHealthTracker`](NodeHealthTracker.md)

Defined in: [src/client.ts:234](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L234)

Node health tracker for smart failover.
Tracks per-node, per-API health and head block freshness.

***

### hivemind

> `readonly` **hivemind**: [`HivemindAPI`](HivemindAPI.md)

Defined in: [src/client.ts:218](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L218)

Hivemind helper.

***

### keys

> `readonly` **keys**: [`AccountByKeyAPI`](AccountByKeyAPI.md)

Defined in: [src/client.ts:223](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L223)

Accounts by key API helper.

***

### options

> `readonly` **options**: [`ClientOptions`](../interfaces/ClientOptions.md)

Defined in: [src/client.ts:187](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L187)

Client options, *read-only*.

***

### rc

> `readonly` **rc**: [`RCAPI`](RCAPI.md)

Defined in: [src/client.ts:203](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L203)

RC API helper.

***

### transaction

> `readonly` **transaction**: `TransactionStatusAPI`

Defined in: [src/client.ts:228](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L228)

Transaction status API helper.

## Methods

### call()

> **call**(`api`, `method`, `params?`): `Promise`\<`any`\>

Defined in: [src/client.ts:309](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L309)

Make a RPC call to the server.

#### Parameters

##### api

`string`

The API to call, e.g. `database_api`.

##### method

`string`

The API method, e.g. `get_dynamic_global_properties`.

##### params?

`any` = `[]`

Array of parameters to pass to the method, optional.

#### Returns

`Promise`\<`any`\>

***

### testnet()

> `static` **testnet**(`options?`): `Client`

Defined in: [src/client.ts:289](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/client.ts#L289)

Create a new client instance configured for the testnet.

#### Parameters

##### options?

[`ClientOptions`](../interfaces/ClientOptions.md)

#### Returns

`Client`
