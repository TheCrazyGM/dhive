[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / SetResetAccountOperation

# Interface: SetResetAccountOperation

Defined in: [src/chain/operation.ts:719](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L719)

This operation allows 'account' owner to control which account has the power
to execute the 'reset_account_operation' after 60 days.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"set_reset_account"`

Defined in: [src/chain/operation.ts:720](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L720)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:721](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/chain/operation.ts#L721)

#### account

> **account**: `string`

#### current\_reset\_account

> **current\_reset\_account**: `string`

#### reset\_account

> **reset\_account**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
