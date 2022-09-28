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
export function True<T>(a: T) {
  return <K>(b: K) => a;
}
export const K = True;
export const Kestrel = True;
export const First = True;

// KI := λab.a - Kite inconstant combinator, returns second
export function False<T>(a: T) {
  return <K>(b: K) => b;
}
export const KI = False;
export const Kite = False;
export const Second = False;

// C := λfab.fba - Cardinal flip combinator
export function Flip<T extends Function>(f: T) {
  return <K>(a: K) => <R>(b: R) => f(b)(a);
}

export const C = Flip;
export const Cardinal = Flip;

// Not := λb.bFT - takes a boolean and tells it to select its opposite
export function Not<T extends typeof True | typeof False>(choose: T) {
    return choose(False)(True)
}
