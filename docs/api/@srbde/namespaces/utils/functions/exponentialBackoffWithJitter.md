[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / exponentialBackoffWithJitter

# Function: exponentialBackoffWithJitter()

> **exponentialBackoffWithJitter**(`tries`, `baseDelay?`, `maxDelay?`, `jitter?`): `number`

Defined in: [src/utils.ts:328](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L328)

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
