import { I, K, C } from "./src";

// composing combinators
const kite = K(I);
const cardinal = kite;

console.log(cardinal(1)(2));
console.log(C(K)(1)(2));
