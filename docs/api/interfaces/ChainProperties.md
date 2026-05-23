[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / ChainProperties

# Interface: ChainProperties

Defined in: [src/chain/misc.ts:76](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L76)

Chain roperties that are decided by the witnesses.

## Properties

### account\_creation\_fee

> **account\_creation\_fee**: `string` \| [`Asset`](../classes/Asset.md)

Defined in: [src/chain/misc.ts:87](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L87)

This fee, paid in HIVE, is converted into VESTING SHARES for the new account. Accounts
without vesting shares cannot earn usage rations and therefore are powerless. This minimum
fee requires all accounts to have some kind of commitment to the network that includes the
ability to vote and make transactions.

#### Note

This has to be multiplied by STEEMIT ? `CREATE_ACCOUNT_WITH_HIVE_MODIFIER`
      (defined as 30 on the main chain) to get the minimum fee needed to create an account.

***

### hbd\_interest\_rate

> **hbd\_interest\_rate**: `number`

Defined in: [src/chain/misc.ts:96](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L96)

The HBD interest percentage rate decided by witnesses, expressed 0 to 10000.

***

### maximum\_block\_size

> **maximum\_block\_size**: `number`

Defined in: [src/chain/misc.ts:92](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/misc.ts#L92)

This witnesses vote for the maximum_block_size which is used by the network
to tune rate limiting and capacity.
