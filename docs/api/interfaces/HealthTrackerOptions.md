[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / HealthTrackerOptions

# Interface: HealthTrackerOptions

Defined in: [src/health-tracker.ts:36](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L36)

## Properties

### apiCooldownMs?

> `optional` **apiCooldownMs?**: `number`

Defined in: [src/health-tracker.ts:46](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L46)

How long (ms) to deprioritize a node for a specific API after failures.
Default: 60 seconds.

***

### defaultRateLimitMs?

> `optional` **defaultRateLimitMs?**: `number`

Defined in: [src/health-tracker.ts:72](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L72)

Default duration (ms) to skip a node after receiving a 429 response,
used when the server doesn't provide a Retry-After header.
Default: 10 seconds.

***

### headBlockTtlMs?

> `optional` **headBlockTtlMs?**: `number`

Defined in: [src/health-tracker.ts:66](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L66)

How long (ms) head block data remains valid for staleness checks.
Default: 2 minutes.

***

### maxApiFailuresBeforeCooldown?

> `optional` **maxApiFailuresBeforeCooldown?**: `number`

Defined in: [src/health-tracker.ts:56](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L56)

Number of API-specific failures before deprioritizing for that API.
Default: 2.

***

### maxFailuresBeforeCooldown?

> `optional` **maxFailuresBeforeCooldown?**: `number`

Defined in: [src/health-tracker.ts:51](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L51)

Number of consecutive failures before a node enters cooldown.
Default: 3.

***

### nodeCooldownMs?

> `optional` **nodeCooldownMs?**: `number`

Defined in: [src/health-tracker.ts:41](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L41)

How long (ms) to deprioritize a node after consecutive failures.
Default: 30 seconds.

***

### staleBlockThreshold?

> `optional` **staleBlockThreshold?**: `number`

Defined in: [src/health-tracker.ts:61](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L61)

How many blocks behind the best known head block a node can be
before being considered stale. Default: 30.
