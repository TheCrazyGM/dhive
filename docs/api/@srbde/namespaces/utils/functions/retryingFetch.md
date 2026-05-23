[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../globals.md) / [utils](../index.md) / retryingFetch

# Function: retryingFetch()

> **retryingFetch**(`currentAddress`, `allAddresses`, `opts`, `timeout`, `failoverThreshold`, `consoleOnFailover`, `backoff`, `fetchTimeout?`, `retryContext?`): `Promise`\<\{ `currentAddress`: `string`; `response`: `any`; \}\>

Defined in: [src/utils.ts:351](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/utils.ts#L351)

Smart fetch with immediate failover and per-node health tracking.

For read operations:
- On failure, immediately try the next healthy node (no backoff within a round)
- After trying all nodes once (one round), apply backoff before the next round
- Stop after failoverThreshold rounds

For broadcast operations:
- Only retry on pre-connection errors (ECONNREFUSED, ENOTFOUND, etc.)
  where we know the request never reached the server
- NEVER retry after timeout or response errors to prevent double-broadcasting

## Parameters

### currentAddress

`string`

### allAddresses

`string` \| `string`[]

### opts

`any`

### timeout

`number`

### failoverThreshold

`number`

### consoleOnFailover

`boolean`

### backoff

(`tries`) => `number`

### fetchTimeout?

(`tries`) => `number`

### retryContext?

[`RetryContext`](../interfaces/RetryContext.md)

## Returns

`Promise`\<\{ `currentAddress`: `string`; `response`: `any`; \}\>
