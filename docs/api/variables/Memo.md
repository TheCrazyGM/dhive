[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../globals.md) / Memo

# Variable: Memo

> `const` **Memo**: `object`

Defined in: [src/memo.ts:109](https://github.com/TheCrazyGM/dhive/blob/6054b90073cd532f97c7e867d7a6edea01f17e62/src/memo.ts#L109)

## Type Declaration

### decode

> **decode**: (`private_key`, `memo`) => `string`

Encrypted memo/message decryption

#### Parameters

##### private\_key

`string` \| [`PrivateKey`](../classes/PrivateKey.md)

Private memo key of recipient

##### memo

`string`

Encrypted message/memo

#### Returns

`string`

### encode

> **encode**: (`private_key`, `public_key`, `memo`, `testNonce?`) => `string`

Memo/Any message encoding using AES (aes-cbc algorithm)

#### Parameters

##### private\_key

`string` \| [`PrivateKey`](../classes/PrivateKey.md)

Private memo key of sender

##### public\_key

`string` \| [`PublicKey`](../classes/PublicKey.md)

public memo key of recipient

##### memo

`string`

message to be encrypted

##### testNonce?

`string`

nonce with high entropy

#### Returns

`string`
