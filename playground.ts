import { I, K, C } from "./src";

// composing combinators
const kite = K(I);
const cardinal = kite;

console.log(I);
