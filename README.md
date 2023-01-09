# AES Cipher
AES (Advanced Encryption Standard) is a widely used symmetric encryption algorithm that was adopted by the US National Institute of Standards and Technology (NIST) in 2001. It was developed as a replacement for the older DES (Data Encryption Standard) algorithm, which was found to be vulnerable to attack. AES uses a fixed-length key to encrypt and decrypt data, with key lengths of 128, 192, or 256 bits.

AES is a block cipher, meaning that it operates on fixed-size blocks of data (128 bits) and uses a symmetric key for both encryption and decryption. In the AES algorithm, the plaintext is transformed into ciphertext through a series of mathematical operations involving the key, known as rounds. The number of rounds used in the encryption process depends on the key length: 10 rounds for 128-bit keys, 12 rounds for 192-bit keys, and 14 rounds for 256-bit keys.

AES is considered to be very secure and is used in a variety of applications, including encrypting data sent over the internet (e.g. in HTTPS connections), encrypting files on a computer, and protecting sensitive government information.

```
function AES_Encrypt(plaintext, key)
    block_size = 128 bits
    key_size = 128, 192, or 256 bits
    n_rounds = 10, 12, or 14 depending on key size
    state = plaintext
    key_schedule = GenerateKeySchedule(key, key_size, n_rounds)
    for i = 1 to n_rounds
        state = AddRoundKey(state, key_schedule[i])
        state = SubBytes(state)
        state = ShiftRows(state)
        state = MixColumns(state)
    state = AddRoundKey(state, key_schedule[n_rounds+1])
    return state

function AES_Decrypt(ciphertext, key)
    block_size = 128 bits
    key_size = 128, 192, or 256 bits
    n_rounds = 10, 12, or 14 depending on key size
    state = ciphertext
    key_schedule = GenerateKeySchedule(key, key_size, n_rounds)
    for i = n_rounds+1 to 1
        state = AddRoundKey(state, key_schedule[i])
        state = InvShiftRows(state)
        state = InvSubBytes(state)
        state = MixColumns(state)
    state = AddRoundKey(state, key_schedule[0])
    return state

```

# Caesar Cipher
The Caesar Cipher is a very basic substitution cipher that was used by the Roman empire to encode messages. It involves replacing each letter in a message with a letter that is a certain number of positions down the alphabet. For example, if the shift value (also known as the key) is 3, the letter 'A' would be replaced with 'D', 'B' would be replaced with 'E', and so on. The shift value is chosen by the sender and must be known by the recipient in order to decrypt the message.

The Caesar Cipher is very easy to break, especially since the shift value is usually small (1-25) and there are only 26 possible shift values. It can be easily broken using simple frequency analysis, which involves looking at the frequency of each letter in the ciphertext and comparing it to the known frequency of letters in the language of the plaintext.

```
function Caesar_Encrypt(plaintext, shift)
    ciphertext = ""
    for each character in plaintext
        if character is a letter
            ciphertext += shift_letter(character, shift)
        else
            ciphertext += character
    return ciphertext

function Caesar_Decrypt(ciphertext, shift)
    plaintext = ""
    for each character in ciphertext
        if character is a letter
            plaintext += shift_letter(character, -shift)
        else
            plaintext += character
    return plaintext

function shift_letter(letter, shift)
    return chr((ord(letter) - 65 + shift) % 26 + 65)

```

# XOR Cipher
The XOR cipher is a type of symmetric key encryption algorithm that uses the XOR (exclusive or) logical operator to combine the plaintext with a key to create the ciphertext. The key is used to encrypt and decrypt the message, and it must be kept secret to maintain the security of the message.

The XOR cipher is a simple encryption algorithm, but it can be very effective if the key is chosen carefully. The key can be any length, and the longer the key, the more secure the ciphertext will be. The XOR cipher is also reversible, meaning that the original plaintext can be obtained by applying the XOR operation again with the same key.

One advantage of the XOR cipher is that it is very fast to execute, making it suitable for use in real-time applications such as encrypting data transmitted over a network. However, it is also relatively easy to break if the key is not sufficiently long or if the same key is used multiple times.

```
function XOR_Encrypt(plaintext, key)
    key_length = length of key
    ciphertext = ""
    for i = 0 to length of plaintext
        ciphertext += plaintext[i] XOR key[i mod key_length]
    return ciphertext

function XOR_Decrypt(ciphertext, key)
    key_length = length of key
    plaintext = ""
    for i = 0 to length of ciphertext
        plaintext += ciphertext[i] XOR key[i mod key_length]
    return plaintext

```
