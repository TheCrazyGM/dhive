[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / VestingDelegation

# Interface: VestingDelegation

Defined in: [src/chain/misc.ts:99](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L99)

## Properties

### delegatee

> **delegatee**: `string`

Defined in: [src/chain/misc.ts:111](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L111)

Account that is receiving vests from delegator.

***

### delegator

> **delegator**: `string`

Defined in: [src/chain/misc.ts:107](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L107)

Account that is delegating vests to delegatee.

***

### id

> **id**: `number`

Defined in: [src/chain/misc.ts:103](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L103)

Delegation id.

***

### min\_delegation\_time

> **min\_delegation\_time**: `string`

Defined in: [src/chain/misc.ts:119](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L119)

Earliest date delegation can be removed.

***

### vesting\_shares

> **vesting\_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:115](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L115)

Amount of VESTS delegated.
