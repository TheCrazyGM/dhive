[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / Authority

# Class: Authority

Defined in: [src/chain/account.ts:45](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/account.ts#L45)

## Implements

- [`AuthorityType`](../interfaces/AuthorityType.md)

## Constructors

### Constructor

> **new Authority**(`__namedParameters`): `Authority`

Defined in: [src/chain/account.ts:50](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/account.ts#L50)

#### Parameters

##### \_\_namedParameters

[`AuthorityType`](../interfaces/AuthorityType.md)

#### Returns

`Authority`

## Properties

### account\_auths

> **account\_auths**: \[`string`, `number`\][]

Defined in: [src/chain/account.ts:47](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/account.ts#L47)

#### Implementation of

[`AuthorityType`](../interfaces/AuthorityType.md).[`account_auths`](../interfaces/AuthorityType.md#account_auths)

***

### key\_auths

> **key\_auths**: \[`string` \| [`PublicKey`](PublicKey.md), `number`\][]

Defined in: [src/chain/account.ts:48](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/account.ts#L48)

#### Implementation of

[`AuthorityType`](../interfaces/AuthorityType.md).[`key_auths`](../interfaces/AuthorityType.md#key_auths)

***

### weight\_threshold

> **weight\_threshold**: `number`

Defined in: [src/chain/account.ts:46](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/account.ts#L46)

#### Implementation of

[`AuthorityType`](../interfaces/AuthorityType.md).[`weight_threshold`](../interfaces/AuthorityType.md#weight_threshold)

## Methods

### from()

> `static` **from**(`value`): `Authority`

Defined in: [src/chain/account.ts:59](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/account.ts#L59)

Convenience to create a new instance from PublicKey or authority object.

#### Parameters

##### value

`string` \| [`AuthorityType`](../interfaces/AuthorityType.md) \| [`PublicKey`](PublicKey.md)

#### Returns

`Authority`
