[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / SetWithdrawVestingRouteOperation

# Interface: SetWithdrawVestingRouteOperation

Defined in: [src/chain/operation.ts:735](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L735)

Allows an account to setup a vesting withdraw but with the additional
request for the funds to be transferred directly to another account's
balance rather than the withdrawing account. In addition, those funds
can be immediately vested again, circumventing the conversion from
vests to hive and back, guaranteeing they maintain their value.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"set_withdraw_vesting_route"`

Defined in: [src/chain/operation.ts:736](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L736)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:737](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L737)

#### auto\_vest

> **auto\_vest**: `boolean`

#### from\_account

> **from\_account**: `string`

#### percent

> **percent**: `number`

#### to\_account

> **to\_account**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
