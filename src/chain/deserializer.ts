import { BinaryReader } from '../utils.js'
import { PublicKey } from '../crypto.js'

export type Deserializer = (reader: BinaryReader) => any

const PublicKeyDeserializer = (reader: BinaryReader) => {
  const bytes = reader.readBytes(33)
  return PublicKey.fromBuffer(Buffer.from(bytes))
}

const UInt64Deserializer = (reader: BinaryReader) => reader.readUint64()

const UInt32Deserializer = (reader: BinaryReader) => reader.readUint32()

const BinaryDeserializer = (reader: BinaryReader) => {
  return Buffer.from(reader.readBytes(reader.readVarint32()))
}

const BufferDeserializer = (keyDeserializers: [string, Deserializer][]) => (
  buffer: Uint8Array | Buffer
) => {
  const reader = new BinaryReader(buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer))
  const obj: any = {}
  for (const [key, deserializer] of keyDeserializers) {
    try {
      obj[key] = deserializer(reader)
    } catch (error: any) {
      error.message = `${key}: ${error.message}`
      throw error
    }
  }
  return obj
}

const EncryptedMemoDeserializer: any = BufferDeserializer([
  ['from', PublicKeyDeserializer],
  ['to', PublicKeyDeserializer],
  ['nonce', UInt64Deserializer],
  ['check', UInt32Deserializer],
  ['encrypted', BinaryDeserializer]
])

export const types = {
  EncryptedMemoD: EncryptedMemoDeserializer
}
