// I := λx.x - Identity combinator
export function Identity<T>(x: T) {
  return x;
}
export const I = Identity;
export const Idiot = Identity;

// M := λf.ff - Mockingbird self-application combinator
export function SelfApplication<T extends Function>(f: T) {
  return f(f);
}
export const M = SelfApplication;
export const Mockingbird = SelfApplication;

// K := λab.a - Kestrel constant combinator, returns first
export function First<T>(a: T) {
  return <K>(b: K) => a;
}
export const K = First;
export const Kestrel = First;
export const True = First;

// KI := λab.a - Kite inconstant combinator, returns second
export function Second<T>(a: T) {
  return <K>(b: K) => b;
}
export const KI = Second;
export const Kite = Second;
export const False = Second;

// C := λfab.fba - Cardinal flip combinator
export function Flip<T extends Function>(f: T) {
  return <K>(a: K) => <R>(b: R) => f(b)(a);
}

export const C = Flip;
export const Cardinal = Flip;
