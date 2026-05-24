[**@srbde/pollen**](../../../../index.md)

***

[@srbde/pollen](../../../../index.md) / [utils](../index.md) / bytesEqual

# Function: bytesEqual()

> **bytesEqual**(`a`, `b`): `boolean`

Defined in: [src/utils.ts:167](https://github.com/TheCrazyGM/dhive/blob/b7fee73ff5fdd26e45fb6f64011ce38836188cc9/src/utils.ts#L167)

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
