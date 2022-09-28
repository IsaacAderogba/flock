// I := λx.x - Identity combinator
export function Identity<T>(x: T) {
  return x;
}

// M := λf.ff - Mockingbird self-application combinator
export function SelfApplication<T extends Function>(f: T) {
  return f(f);
}

// C := λfab.fba - Cardinal flip combinator
export function Flip<T extends Function>(f: T) {
  return <K>(a: K) =>
    <R>(b: R) =>
      f(b)(a);
}

/**
 * church booleans
 */
type Boolean = typeof True | typeof False;

// K := λab.a - Kestrel constant combinator, returns first
export function True<T>(a: T) {
  return <K>(b: K) => a;
}

// KI := λab.a - Kite inconstant combinator, returns second
export function False<T>(a: T) {
  return <K>(b: K) => b;
}

// Not := λb.bFT - takes a boolean and tells it to select its opposite
export function Not<T extends Boolean>(choose: T) {
  return choose(False)(True);
}

// And:= λpq.pqp - takes in boolean functions, can shortcircuit to false
export function And<T extends Boolean>(p: T) {
  // if p is false, select the second thing which is false
  // if p is true, select the first which might be true or false. Have to use q as the result.
  return <K extends Boolean>(q: K) => p(q)(p);
}

// OR:= λpq.ppq - takes in boolean functions, can shortcircuit to true
export function OR<T extends Boolean>(p: T) {
  // vice versa of the and reasoning
  return <K extends Boolean>(q: K) => p(p)(q);
}

// BEQ := λpq.p (qTF) (qFT) - boolean equality
export function BEQ<T extends Boolean>(p: T) {
  return <K extends Boolean>(q: K) => p(q(True)(False))(q(False)(True));
}

/**
 * Church numerals
 */

// Succ := λnfx.f(nfx) - returns a new number function that does the original application n + 1 times
export function Succ<T extends Function>(numeral: T) {
  return <K extends Function>(f: K) =>
    <R>(x: R) =>
      f(numeral(f)(x));
}

// 0 := λfx.x - zero doesn't apply the function at all (like false)
export function Zero<T extends Function>(f: T) {
  return <K>(x: K) => x;
}

// Add := λab.a(succ)b
export function Add<T extends Function>(numA: T) {
  return <K extends Function>(numB: K) => numA(Succ)(numB);
}

// Multiply := λfgx.f(gx)
export function Mult<T extends Function>(f: T) {
  return <K extends Function>(g: K) =>
    <R>(x: R) =>
      f(g(x));
}

// Exp := λab.ba
export function Exp<T extends Function>(numA: T) {
    return <K extends Function>(numB: K) => numB(numA)
  }