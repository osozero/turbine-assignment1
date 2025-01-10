import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

const pkey_base58 = "kMjLCqPr2dSyndjSaaVQK4RKDK9FhQeRZk9b9HUnbsTRBHePeXaZbM9Ng6ynAjvJzqW93nVweCbKjx6S7M4aiA4";

let pkey_bytes = bs58.decode(pkey_base58);
console.log(pkey_bytes);


let keypair = Keypair.fromSecretKey(pkey_bytes);
console.log(keypair.publicKey.toBase58());

console.log(`[${keypair.secretKey}]`)