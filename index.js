import { Web5 } from '@web5/api';
import { webcrypto } from 'node:crypto';


if (!globalThis.crypto) globalThis.crypto = webcrypto;

// Instance
const { web5, did: aliceDid } = await Web5.connect();

// console.log(aliceDid);

// Write
const { record } = await web5.dwn.records.create({
    data: 'Hello, Web5!',
    message: {
      dataFormat: 'text/plain',
    },
  });

// console.log('writeResult', record);

// Read
const readResult = await record.data.text();

console.log('readResult', readResult)

// Update
const updateResult = await record.update({
    data: 'Hello, Web5! I am updated.',
  });

console.log('updateResult', await record.data.text())

// Delete
const deleteResult = await record.delete();

console.log('deleteResult', deleteResult)