import { base58 as bs58 } from '@scure/base'
import { types } from './chain/deserializer.js'
import { Types } from './chain/serializer.js'
import { PrivateKey, PublicKey } from './crypto.js'
import * as Aes from './helpers/aes.js'
import { BinaryReader, BinaryWriter } from './utils.js'

/**
 * Memo/Any message encoding using AES (aes-cbc algorithm)
 * @param {Buffer|string} private_key Private memo key of sender
 * @param {Buffer|string} public_key public memo key of recipient
 * @param {string} memo message to be encrypted
 * @param {number} testNonce nonce with high entropy
 */
const encode = (
  private_key: PrivateKey | string,
  public_key: PublicKey | string,
  memo: string,
  testNonce?: string
): string => {
  if (!memo.startsWith('#')) {
    return memo
  }
  memo = memo.substring(1)
  checkEncryption()
  private_key = toPrivateObj(private_key)
  public_key = toPublicObj(public_key)
  
  const writer = new BinaryWriter()
  writer.writeString(memo)
  const memoBuffer = Buffer.from(writer.getBuffer())

  const { nonce, message, checksum } = Aes.encrypt(
    private_key,
    public_key,
    memoBuffer,
    testNonce
  )
  
  const writer2 = new BinaryWriter()
  Types.EncryptedMemo(writer2, {
    check: checksum,
    encrypted: message,
    from: private_key.createPublic(),
    nonce,
    to: public_key
  })
  const data = Buffer.from(writer2.getBuffer())
  return '#' + bs58.encode(data)
}

/**
 * Encrypted memo/message decryption
 * @param {PrivateKey|string} private_key Private memo key of recipient
 * @param {string}memo Encrypted message/memo
 */
const decode = (private_key: PrivateKey | string, memo: string): string => {
  if (!memo.startsWith('#')) {
    return memo
  }
  memo = memo.substring(1)
  checkEncryption()
  private_key = toPrivateObj(private_key)
  const decodedMemo = bs58.decode(memo)
  let memoBuffer: any = types.EncryptedMemoD(Buffer.from(decodedMemo))
  const { from, to, nonce, check, encrypted } = memoBuffer
  const pubkey = private_key.createPublic().toString()
  const otherpub =
    pubkey === new PublicKey(from.key).toString()
      ? new PublicKey(to.key)
      : new PublicKey(from.key)
  
  const decrypted = Aes.decrypt(private_key, otherpub, nonce, encrypted, check)
  const reader = new BinaryReader(new Uint8Array(decrypted))
  try {
    return '#' + reader.readString()
  } catch (e) {
    // Sender did not length-prefix the memo
    return '#' + Buffer.from(decrypted).toString('utf-8')
  }
}

let encodeTest
const checkEncryption: any = () => {
  if (encodeTest === undefined) {
    let plaintext
    encodeTest = true // prevent infinate looping
    try {
      const wif = '5JdeC9P7Pbd1uGdFVEsJ41EkEnADbbHGq6p1BwFxm6txNBsQnsw'
      const pubkey = 'STM8m5UgaFAAYQRuaNejYdS8FVLVp9Ss3K1qAVk5de6F8s3HnVbvA'
      const cyphertext = encode(wif, pubkey, '#memo爱')
      plaintext = decode(wif, cyphertext)
    } catch (e) {
      throw new Error(e)
    } finally {
      encodeTest = plaintext === '#memo爱'
    }
  }
  if (encodeTest === false) {
    throw new Error('This environment does not support encryption.')
  }
}

const toPrivateObj = (o: any): PrivateKey =>
  o ? (o.key ? o : PrivateKey.fromString(o)) : o /* null or undefined*/
const toPublicObj = (o: any): PublicKey =>
  o ? (o.key ? o : PublicKey.fromString(o)) : o /* null or undefined*/

export const Memo = {
  decode,
  encode
}
