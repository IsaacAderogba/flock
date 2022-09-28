// I := λx.x - Identity combinator
export const I = <T>(x: T) => x;
export const Idiot = I;

// M := λf.ff - Mockingbird self-application combinator
export const M = <T extends Function>(f: T) => f();
export const Mockingbird = M;
