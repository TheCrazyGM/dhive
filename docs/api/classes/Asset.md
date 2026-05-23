[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / Asset

# Class: Asset

Defined in: [src/chain/asset.ts:59](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L59)

Class representing a hive asset, e.g. `1.000 HIVE` or `12.112233 VESTS`.

## Constructors

### Constructor

> **new Asset**(`amount`, `symbol`): `Asset`

Defined in: [src/chain/asset.ts:60](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L60)

#### Parameters

##### amount

`number`

##### symbol

[`AssetSymbol`](../type-aliases/AssetSymbol.md)

#### Returns

`Asset`

## Properties

### amount

> `readonly` **amount**: `number`

Defined in: [src/chain/asset.ts:61](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L61)

***

### symbol

> `readonly` **symbol**: [`AssetSymbol`](../type-aliases/AssetSymbol.md)

Defined in: [src/chain/asset.ts:62](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L62)

## Methods

### add()

> **add**(`amount`): `Asset`

Defined in: [src/chain/asset.ts:173](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L173)

Return a new Asset instance with amount added.

#### Parameters

##### amount

`string` \| `number` \| `Asset`

#### Returns

`Asset`

***

### divide()

> **divide**(`divisor`): `Asset`

Defined in: [src/chain/asset.ts:206](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L206)

Return a new Asset with the amount divided.

#### Parameters

##### divisor

`string` \| `number` \| `Asset`

#### Returns

`Asset`

***

### getPrecision()

> **getPrecision**(): `number`

Defined in: [src/chain/asset.ts:134](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L134)

Return asset precision.

#### Returns

`number`

***

### multiply()

> **multiply**(`factor`): `Asset`

Defined in: [src/chain/asset.ts:194](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L194)

Return a new Asset with the amount multiplied by factor.

#### Parameters

##### factor

`string` \| `number` \| `Asset`

#### Returns

`Asset`

***

### steem\_symbols()

> **steem\_symbols**(): `Asset`

Defined in: [src/chain/asset.ts:152](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L152)

Returns a representation of this asset using STEEM/SBD symbols
as required by the Hive blockchain protocol-level serialization.

#### Returns

`Asset`

***

### subtract()

> **subtract**(`amount`): `Asset`

Defined in: [src/chain/asset.ts:182](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L182)

Return a new Asset instance with amount subtracted.

#### Parameters

##### amount

`string` \| `number` \| `Asset`

#### Returns

`Asset`

***

### toJSON()

> **toJSON**(): `string`

Defined in: [src/chain/asset.ts:218](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L218)

For JSON serialization, same as toString().

#### Returns

`string`

***

### toString()

> **toString**(): `string`

Defined in: [src/chain/asset.ts:166](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L166)

Return a string representation of this asset, e.g. `42.000 HIVE`.

#### Returns

`string`

***

### from()

> `static` **from**(`value`, `symbol?`): `Asset`

Defined in: [src/chain/asset.ts:92](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L92)

Convenience to create new Asset.

#### Parameters

##### value

`string` \| `number` \| `Asset`

##### symbol?

[`AssetSymbol`](../type-aliases/AssetSymbol.md)

Symbol to use when created from number. Will also be used to validate
              the asset, throws if the passed value has a different symbol than this.

#### Returns

`Asset`

***

### fromString()

> `static` **fromString**(`string`, `expectedSymbol?`): `Asset`

Defined in: [src/chain/asset.ts:68](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L68)

Create a new Asset instance from a string, e.g. `42.000 HIVE`.

#### Parameters

##### string

`string`

##### expectedSymbol?

[`AssetSymbol`](../type-aliases/AssetSymbol.md)

#### Returns

`Asset`

***

### max()

> `static` **max**(`a`, `b`): `Asset`

Defined in: [src/chain/asset.ts:123](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L123)

Return the larger of the two assets.

#### Parameters

##### a

`Asset`

##### b

`Asset`

#### Returns

`Asset`

***

### min()

> `static` **min**(`a`, `b`): `Asset`

Defined in: [src/chain/asset.ts:112](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/chain/asset.ts#L112)

Return the smaller of the two assets.

#### Parameters

##### a

`Asset`

##### b

`Asset`

#### Returns

`Asset`
