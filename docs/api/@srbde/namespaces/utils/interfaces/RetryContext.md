[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / RetryContext

# Interface: RetryContext

Defined in: [src/utils.ts:50](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L50)

Context for smart retry/failover decisions.

## Properties

### api?

> `optional` **api?**: `string`

Defined in: [src/utils.ts:54](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L54)

The API being called (e.g. "bridge", "condenser_api", "database_api")

***

### consoleOnFailover?

> `optional` **consoleOnFailover?**: `boolean`

Defined in: [src/utils.ts:58](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L58)

Whether to log failover events to console

***

### healthTracker?

> `optional` **healthTracker?**: [`NodeHealthTracker`](../../../../classes/NodeHealthTracker.md)

Defined in: [src/utils.ts:52](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L52)

Health tracker instance for per-node, per-API tracking

***

### isBroadcast?

> `optional` **isBroadcast?**: `boolean`

Defined in: [src/utils.ts:56](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/utils.ts#L56)

Whether this is a broadcast operation — never retry after request may have been received
