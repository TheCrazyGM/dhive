import { BinaryReader } from "../utils.js";
import { PublicKey } from "../crypto.js";

/**
 * Function signature for reading one Hive protocol value from a binary reader.
 *
 * @param reader - Source binary reader.
 * @returns The decoded protocol value.
 *
 * @remarks
 * Deserializers mirror the serializer registry for the limited binary payloads
 * Pollen needs to decode, currently focused on encrypted memo envelopes. Inputs
 * are native `Uint8Array` bytes or an existing {@link BinaryReader}; no Node
 * `Buffer` wrapper is required.
 *
 * @example
 * ```ts
 * const memo = types.EncryptedMemoD(bytes)
 * console.log(memo.from.toString())
 * ```
 */
export type Deserializer = (reader: BinaryReader) => unknown;

const PublicKeyDeserializer = (reader: BinaryReader) => {
  const bytes = reader.readBytes(33);
  return PublicKey.fromBuffer(bytes);
};

const UInt64Deserializer = (reader: BinaryReader) => reader.readUint64();

const UInt32Deserializer = (reader: BinaryReader) => reader.readUint32();

const BinaryDeserializer = (reader: BinaryReader) => {
  return reader.readBytes(reader.readVarint32());
};

const BufferDeserializer =
  (keyDeserializers: [string, Deserializer][]) => (buffer: Uint8Array | BinaryReader) => {
    const reader =
      typeof (buffer as BinaryReader).readBytes === "function"
        ? (buffer as BinaryReader)
        : new BinaryReader(buffer as Uint8Array);
    const obj: Record<string, unknown> = {};
    for (const [key, deserializer] of keyDeserializers) {
      try {
        obj[key] = deserializer(reader);
      } catch (error: unknown) {
        if (error instanceof Error) {
          error.message = `${key}: ${error.message}`;
          throw error;
        }
        throw new Error(`${key}: ${String(error)}`);
      }
    }
    return obj;
  };

const EncryptedMemoDeserializer: Deserializer = BufferDeserializer([
  ["from", PublicKeyDeserializer],
  ["to", PublicKeyDeserializer],
  ["nonce", UInt64Deserializer],
  ["check", UInt32Deserializer],
  ["encrypted", BinaryDeserializer],
]);

/**
 * Hive protocol deserializer registry.
 *
 * @remarks
 * The exported registry intentionally stays small. Pollen primarily receives
 * JSON from RPC nodes, but encrypted memos arrive as binary payloads nested
 * inside base58 strings and need a dedicated decoder.
 *
 * @example
 * ```ts
 * const decoded = types.EncryptedMemoD(bytes)
 * console.log(decoded.nonce.toString())
 * ```
 */
export const types = {
  EncryptedMemoD: EncryptedMemoDeserializer,
};
