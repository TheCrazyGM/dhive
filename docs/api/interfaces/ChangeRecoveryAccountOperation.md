[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / ChangeRecoveryAccountOperation

# Interface: ChangeRecoveryAccountOperation

Defined in: [src/chain/operation.ts:242](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L242)

Each account lists another account as their recovery account.
The recovery account has the ability to create account_recovery_requests
for the account to recover. An account can change their recovery account
at any time with a 30 day delay. This delay is to prevent
an attacker from changing the recovery account to a malicious account
during an attack. These 30 days match the 30 days that an
owner authority is valid for recovery purposes.

On account creation the recovery account is set either to the creator of
the account (The account that pays the creation fee and is a signer on the transaction)
or to the empty string if the account was mined. An account with no recovery
has the top voted witness as a recovery account, at the time the recover
request is created. Note: This does mean the effective recovery account
of an account with no listed recovery account can change at any time as
witness vote weights. The top voted witness is explicitly the most trusted
witness according to stake.

## Extends

- [`Operation`](Operation.md)

## Properties

### 0

> **0**: `"change_recovery_account"`

Defined in: [src/chain/operation.ts:243](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L243)

#### Overrides

[`Operation`](Operation.md).[`0`](Operation.md#0)

***

### 1

> **1**: `object`

Defined in: [src/chain/operation.ts:244](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/operation.ts#L244)

#### account\_to\_recover

> **account\_to\_recover**: `string`

The account that would be recovered in case of compromise.

#### extensions

> **extensions**: `any`[]

Extensions. Not currently used.

#### new\_recovery\_account

> **new\_recovery\_account**: `string`

The account that creates the recover request.

#### Overrides

[`Operation`](Operation.md).[`1`](Operation.md#1)
