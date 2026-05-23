[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../globals.md) / [utils](../index.md) / exponentialBackoffWithJitter

# Function: exponentialBackoffWithJitter()

> **exponentialBackoffWithJitter**(`tries`, `baseDelay?`, `maxDelay?`, `jitter?`): `number`

Defined in: [src/utils.ts:328](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/utils.ts#L328)

Standard exponential backoff with jitter.
Formula: min(maxDelay, (base * 2^tries)) + random(0, jitter)

## Parameters

### tries

`number`

### baseDelay?

`number` = `500`

### maxDelay?

`number` = `10000`

### jitter?

`number` = `100`

## Returns

`number`
