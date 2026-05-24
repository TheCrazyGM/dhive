[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / VestingDelegation

# Interface: VestingDelegation

Defined in: [src/chain/misc.ts:156](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L156)

Vesting-share delegation from one account to another.

## Remarks

Delegated VESTS remain owned by the delegator but transfer voting influence
and RC capacity to the delegatee until removed and cooled down.

## Example

```ts
const delegations = await client.database.getVestingDelegations('srbde')
console.log(delegations[0]?.delegatee)
```

## Properties

### delegatee

> **delegatee**: `string`

Defined in: [src/chain/misc.ts:168](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L168)

Account that is receiving vests from delegator.

***

### delegator

> **delegator**: `string`

Defined in: [src/chain/misc.ts:164](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L164)

Account that is delegating vests to delegatee.

***

### id

> **id**: `number`

Defined in: [src/chain/misc.ts:160](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L160)

Delegation id.

***

### min\_delegation\_time

> **min\_delegation\_time**: `string`

Defined in: [src/chain/misc.ts:176](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L176)

Earliest date delegation can be removed.

***

### vesting\_shares

> **vesting\_shares**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:172](https://github.com/TheCrazyGM/dhive/blob/ab36e508de98a7faeac27bf4201fc79843d471c8/src/chain/misc.ts#L172)

Amount of VESTS delegated.
