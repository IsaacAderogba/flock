import { Succ, Zero, Add, Exp } from "./src";

function toNum<T extends Function>(succ: T) {
  return succ((x) => x + 1)(0);
}

const zero = Zero;
const one = Succ(zero);
const two = Succ(one);
const three = Succ(two);
const four = Succ(three);
const five = Add(one)(four);

console.log(toNum(Exp(three)(five)))
