[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / DynamicGlobalProperties

# Interface: DynamicGlobalProperties

Defined in: [src/chain/misc.ts:125](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L125)

Node state.

## Properties

### average\_block\_size

> **average\_block\_size**: `number`

Defined in: [src/chain/misc.ts:183](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L183)

Average block size is updated every block to be:

    average_block_size = (99 * average_block_size + new_block_size) / 100

 This property is used to update the current_reserve_ratio to maintain
 approximately 50% or less utilization of network capacity.

***

### confidential\_hbd\_supply

> **confidential\_hbd\_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:160](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L160)

Total asset held in confidential balances.

***

### confidential\_supply

> **confidential\_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:155](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L155)

Total asset held in confidential balances.

***

### current\_aslot

> **current\_aslot**: `number`

Defined in: [src/chain/misc.ts:198](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L198)

The current absolute slot number. Equal to the total
number of slots since genesis. Also equal to the total
number of missed slots plus head_block_number.

***

### current\_hbd\_supply

> **current\_hbd\_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:156](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L156)

***

### current\_reserve\_ratio

> **current\_reserve\_ratio**: `number`

Defined in: [src/chain/misc.ts:221](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L221)

Any time average_block_size <= 50% maximum_block_size this value grows by 1 until it
reaches MAX_RESERVE_RATIO.  Any time average_block_size is greater than
50% it falls by 1%.  Upward adjustments happen once per round, downward adjustments
happen every block.

***

### current\_supply

> **current\_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:151](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L151)

***

### current\_witness

> **current\_witness**: `string`

Defined in: [src/chain/misc.ts:139](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L139)

Currently elected witness.

***

### hbd\_interest\_rate

> **hbd\_interest\_rate**: `number`

Defined in: [src/chain/misc.ts:173](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L173)

This property defines the interest rate that HBD deposits receive.

***

### hbd\_print\_rate

> **hbd\_print\_rate**: `number`

Defined in: [src/chain/misc.ts:174](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L174)

***

### head\_block\_id

> **head\_block\_id**: `string`

Defined in: [src/chain/misc.ts:131](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L131)

***

### head\_block\_number

> **head\_block\_number**: `number`

Defined in: [src/chain/misc.ts:130](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L130)

Current block height.

***

### id

> **id**: `number`

Defined in: [src/chain/misc.ts:126](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L126)

***

### last\_irreversible\_block\_num

> **last\_irreversible\_block\_num**: `number`

Defined in: [src/chain/misc.ts:204](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L204)

***

### max\_virtual\_bandwidth

> **max\_virtual\_bandwidth**: `string`

Defined in: [src/chain/misc.ts:214](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L214)

The maximum bandwidth the blockchain can support is:

   max_bandwidth = maximum_block_size * BANDWIDTH_AVERAGE_WINDOW_SECONDS / BLOCK_INTERVAL

The maximum virtual bandwidth is:

   max_bandwidth * current_reserve_ratio

***

### maximum\_block\_size

> **maximum\_block\_size**: `number`

Defined in: [src/chain/misc.ts:192](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L192)

Maximum block size is decided by the set of active witnesses which change every round.
Each witness posts what they think the maximum size should be as part of their witness
properties, the median size is chosen to be the maximum block size for the round.

#### Note

the minimum value for maximum_block_size is defined by the protocol to prevent the
network from getting stuck by witnesses attempting to set this too low.

***

### num\_pow\_witnesses

> **num\_pow\_witnesses**: `number`

Defined in: [src/chain/misc.ts:149](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L149)

The current count of how many pending POW witnesses there are, determines
the difficulty of doing pow.

***

### participation\_count

> **participation\_count**: `number`

Defined in: [src/chain/misc.ts:203](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L203)

***

### pending\_rewarded\_vesting\_hive

> **pending\_rewarded\_vesting\_hive**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:169](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L169)

***

### pending\_rewarded\_vesting\_shares

> **pending\_rewarded\_vesting\_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:168](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L168)

***

### recent\_slots\_filled

> **recent\_slots\_filled**: `string`

Defined in: [src/chain/misc.ts:202](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L202)

Used to compute witness participation.

***

### time

> **time**: `string`

Defined in: [src/chain/misc.ts:135](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L135)

UTC Server time, e.g. 2020-01-15T00:42:00

***

### total\_pow

> **total\_pow**: `number`

Defined in: [src/chain/misc.ts:144](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L144)

The total POW accumulated, aka the sum of num_pow_witness at the time
new POW is added.

***

### total\_reward\_fund\_hive

> **total\_reward\_fund\_hive**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:163](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L163)

***

### total\_reward\_shares2

> **total\_reward\_shares2**: `string`

Defined in: [src/chain/misc.ts:167](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L167)

The running total of REWARD^2.

***

### total\_vesting\_fund\_hive

> **total\_vesting\_fund\_hive**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:161](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L161)

***

### total\_vesting\_shares

> **total\_vesting\_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:162](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L162)

***

### virtual\_supply

> **virtual\_supply**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:150](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L150)

***

### vote\_power\_reserve\_rate

> **vote\_power\_reserve\_rate**: `number`

Defined in: [src/chain/misc.ts:227](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/misc.ts#L227)

The number of votes regenerated per day.  Any user voting slower than this rate will be
"wasting" voting power through spillover; any user voting faster than this rate will have
their votes reduced.
