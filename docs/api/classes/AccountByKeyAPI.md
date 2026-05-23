[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / AccountByKeyAPI

# Class: AccountByKeyAPI

Defined in: [src/helpers/key.ts:13](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/key.ts#L13)

## Constructors

### Constructor

> **new AccountByKeyAPI**(`client`): `AccountByKeyAPI`

Defined in: [src/helpers/key.ts:14](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/key.ts#L14)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`AccountByKeyAPI`

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/helpers/key.ts:14](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/key.ts#L14)

## Methods

### call()

> **call**(`method`, `params?`): `Promise`\<`any`\>

Defined in: [src/helpers/key.ts:19](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/key.ts#L19)

Convenience for calling `account_by_key_api`.

#### Parameters

##### method

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### getKeyReferences()

> **getKeyReferences**(`keys`): `Promise`\<[`AccountsByKey`](../interfaces/AccountsByKey.md)\>

Defined in: [src/helpers/key.ts:26](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/key.ts#L26)

Returns all accounts that have the key associated with their owner or active authorities.

#### Parameters

##### keys

(`string` \| [`PublicKey`](PublicKey.md))[]

#### Returns

`Promise`\<[`AccountsByKey`](../interfaces/AccountsByKey.md)\>
