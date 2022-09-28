// I := λx.x - Identity combinator
export const I = <T>(x: T) => x;
export const Idiot = I;

// M := λf.ff - Mockingbird self-application combinator
export const M = <T extends Function>(f: T) => f(f);
export const Mockingbird = M;

// K := λab.a - Kestrel constant combinator, returns first
export const K = <T>(a: T) => <K>(b: K) => a;
export const Kestrel = K;
export const True = K;

// KI := λab.a - Kite inconstant combinator, returns second
export const KI = <T>(a: T) => <K>(b: K) => b;
export const Kite = KI;
export const False = KI;
