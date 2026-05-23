[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / RCAPI

# Class: RCAPI

Defined in: [src/helpers/rc.ts:8](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L8)

## Constructors

### Constructor

> **new RCAPI**(`client`): `RCAPI`

Defined in: [src/helpers/rc.ts:9](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L9)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`RCAPI`

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/helpers/rc.ts:9](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L9)

## Methods

### calculateRCMana()

> **calculateRCMana**(`rc_account`): `Manabar`

Defined in: [src/helpers/rc.ts:60](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L60)

Calculates the RC mana-data based on an RCAccount - findRCAccounts()

#### Parameters

##### rc\_account

`RCAccount`

#### Returns

`Manabar`

***

### calculateVPMana()

> **calculateVPMana**(`account`): `Manabar`

Defined in: [src/helpers/rc.ts:70](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L70)

Calculates the RC mana-data based on an Account - getAccounts()

#### Parameters

##### account

[`Account`](../interfaces/Account.md)

#### Returns

`Manabar`

***

### call()

> **call**(`method`, `params?`): `Promise`\<`any`\>

Defined in: [src/helpers/rc.ts:14](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L14)

Convenience for calling `rc_api`.

#### Parameters

##### method

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### findRCAccounts()

> **findRCAccounts**(`usernames`): `Promise`\<`RCAccount`[]\>

Defined in: [src/helpers/rc.ts:21](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L21)

Returns RC data for array of usernames

#### Parameters

##### usernames

`string`[]

#### Returns

`Promise`\<`RCAccount`[]\>

***

### getRCMana()

> **getRCMana**(`username`): `Promise`\<`Manabar`\>

Defined in: [src/helpers/rc.ts:42](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L42)

Makes a API call and returns the RC mana-data for a specified username

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`Manabar`\>

***

### getResourceParams()

> **getResourceParams**(): `Promise`\<`RCParams`\>

Defined in: [src/helpers/rc.ts:28](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L28)

Returns the global resource params

#### Returns

`Promise`\<`RCParams`\>

***

### getResourcePool()

> **getResourcePool**(): `Promise`\<`RCPool`\>

Defined in: [src/helpers/rc.ts:35](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L35)

Returns the global resource pool

#### Returns

`Promise`\<`RCPool`\>

***

### getVPMana()

> **getVPMana**(`username`): `Promise`\<`Manabar`\>

Defined in: [src/helpers/rc.ts:50](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/helpers/rc.ts#L50)

Makes a API call and returns the VP mana-data for a specified username

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`Manabar`\>
