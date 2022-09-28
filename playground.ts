import { I, K, C, Not, True, False } from "./src";

// composing combinators
const kite = K(I);

console.log(Not(False))