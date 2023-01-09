import React, { useState } from 'react';
import aes128 from './aes128';
import aes192 from './aes192';
import aes256 from './aes256';


const App = () => {
  const [mode, setMode] = useState('aes-128');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleEncrypt = () => {
    let encrypted;
    if (mode === 'aes-128') {
      encrypted = aes128.encrypt(message, password);
    } else if (mode === 'aes-192') {
      encrypted = aes192.encrypt(message, password);
    } else if (mode === 'aes-256') {
      encrypted = aes256.encrypt(message, password);
    }
    setEncryptedMessage(encrypted);
  };

  const handleDecrypt = () => {
    let decrypted;
    if (mode === 'aes-128') {
      decrypted = aes128.decrypt(encryptedMessage, password);
    } else if (mode === 'aes-192') {
      decrypted = aes192.decrypt(encryptedMessage, password);
    } else if (mode === 'aes-256') {
      decrypted = aes256.decrypt(encryptedMessage, password);
    }
    setDecryptedMessage(decrypted);
  };

  return (
    <div className="container">
      <h1>AES Encrypt/Decrypt</h1>
      <div className="form-group">
        <label htmlFor="mode-select">Select AES Mode:</label>
        <select id="mode-select" value={mode} onChange={e => setMode(e.target.value)}>
          <option value="aes-128">AES-128</option>
          <option value="aes-192">AES-192</option>
          <option value="aes-256">AES-256</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message-input">Message:</label>
        <textarea id="message-input" value={message} onChange={e => setMessage(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password-input">Password:</label>
        <input type="password" id="password-input" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="button" onClick={handleEncrypt}>
        Encrypt
      </button>
      <button type="button" onClick={handleDecrypt}>
        Decrypt
      </button>
      <div className="form-group">
      <label htmlFor="encrypted-message">Encrypted Message:</label>
        <textarea id="encrypted-message" value={encryptedMessage} onChange={e => setEncryptedMessage(e.target.value)} />
      </div>
        <div className="form-group">
            <label htmlFor="decrypted-message">Decrypted Message:</label>
        <textarea id="decrypted-message" value={decryptedMessage} onChange={e => setDecryptedMessage(e.target.value)} />
      </div>
    </div>
    );
};

export default App;
