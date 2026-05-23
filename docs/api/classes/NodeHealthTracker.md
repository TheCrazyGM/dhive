[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / NodeHealthTracker

# Class: NodeHealthTracker

Defined in: [src/health-tracker.ts:75](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L75)

## Constructors

### Constructor

> **new NodeHealthTracker**(`options?`): `NodeHealthTracker`

Defined in: [src/health-tracker.ts:88](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L88)

#### Parameters

##### options?

[`HealthTrackerOptions`](../interfaces/HealthTrackerOptions.md) = `{}`

#### Returns

`NodeHealthTracker`

## Methods

### getHealthSnapshot()

> **getHealthSnapshot**(): `Map`\<`string`, \{ `apiFailures`: `Record`\<`string`, \{ `count`: `number`; \}\>; `consecutiveFailures`: `number`; `headBlock`: `number`; `healthy`: `boolean`; \}\>

Defined in: [src/health-tracker.ts:268](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L268)

Get a snapshot of current health state for diagnostics.

#### Returns

`Map`\<`string`, \{ `apiFailures`: `Record`\<`string`, \{ `count`: `number`; \}\>; `consecutiveFailures`: `number`; `headBlock`: `number`; `healthy`: `boolean`; \}\>

***

### getOrderedNodes()

> **getOrderedNodes**(`allNodes`, `api?`): `string`[]

Defined in: [src/health-tracker.ts:241](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L241)

Return nodes ordered by health for a specific API call.
Healthy nodes come first (preserving original order), then unhealthy nodes as fallback.

#### Parameters

##### allNodes

`string`[]

##### api?

`string`

#### Returns

`string`[]

***

### isNodeHealthy()

> **isNodeHealthy**(`node`, `api?`): `boolean`

Defined in: [src/health-tracker.ts:194](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L194)

Check if a node is considered healthy for a given API.

#### Parameters

##### node

`string`

##### api?

`string`

#### Returns

`boolean`

***

### isRateLimited()

> **isRateLimited**(`node`): `boolean`

Defined in: [src/health-tracker.ts:153](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L153)

Check if a node is currently rate-limited (429 cooldown active).

#### Parameters

##### node

`string`

#### Returns

`boolean`

***

### recordApiFailure()

> **recordApiFailure**(`node`, `api`): `void`

Defined in: [src/health-tracker.ts:164](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L164)

Record an API/plugin-specific failure (e.g. "method not found", "plugin not enabled").
Only increments the per-API counter, NOT the global consecutive failure counter.
This prevents a node with a disabled plugin from being penalized for all APIs.

#### Parameters

##### node

`string`

##### api

`string`

#### Returns

`void`

***

### recordFailure()

> **recordFailure**(`node`, `api`): `void`

Defined in: [src/health-tracker.ts:127](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L127)

Record a network-level failure (timeout, connection refused, HTTP error).
Increments both the global consecutive failure counter and the API-specific counter.

#### Parameters

##### node

`string`

##### api

`string`

#### Returns

`void`

***

### recordRateLimit()

> **recordRateLimit**(`node`, `retryAfterSeconds?`): `void`

Defined in: [src/health-tracker.ts:140](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L140)

Record that a node returned HTTP 429 (Too Many Requests).
The node will be skipped until the rate limit expires.

#### Parameters

##### node

`string`

##### retryAfterSeconds?

`number`

Value from the Retry-After header, or undefined to use default.

#### Returns

`void`

***

### recordSuccess()

> **recordSuccess**(`node`, `api`): `void`

Defined in: [src/health-tracker.ts:117](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L117)

Record a successful call to a node for a specific API.
Clears consecutive failure counter and API-specific failures for this API.

#### Parameters

##### node

`string`

##### api

`string`

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [src/health-tracker.ts:259](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L259)

Reset all health tracking data.

#### Returns

`void`

***

### updateHeadBlock()

> **updateHeadBlock**(`node`, `headBlock`): `void`

Defined in: [src/health-tracker.ts:180](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/health-tracker.ts#L180)

Update head block number for a node.
Called passively when get_dynamic_global_properties responses are observed.

#### Parameters

##### node

`string`

##### headBlock

`number`

#### Returns

`void`
