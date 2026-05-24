[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / bytesEqual

# Function: bytesEqual()

> **bytesEqual**(`a`, `b`): `boolean`

Defined in: [src/utils.ts:154](https://github.com/TheCrazyGM/dhive/blob/06f00c49db099e36d53bf072dac0943ba256d1a1/src/utils.ts#L154)

Compares two byte arrays for equality.

## Parameters

### a

`Uint8Array`

First byte array.

### b

`Uint8Array`

Second byte array.

## Returns

`boolean`

True when both arrays have the same length and byte values.

## Example

```ts
if (!bytesEqual(expected, actual)) {
  throw new Error('checksum mismatch')
}
```
