[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / ResetAccountOperation

# Interface: ResetAccountOperation

Defined in: [src/chain/operation.ts:706](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L706)

This operation allows recovery_account to change account_to_reset's owner authority to
new_owner_authority after 60 days of inactivity.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"reset_account"`

Defined in: [src/chain/operation.ts:707](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L707)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:708](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L708)

#### account\_to\_reset

> **account\_to\_reset**: `string`

#### new\_owner\_authority

> **new\_owner\_authority**: [`AuthorityType`](AuthorityType.md)

#### reset\_account

> **reset\_account**: `string`

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
