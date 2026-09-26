// @strict: true

declare const a: { b: { c: string }, arr: { name: number }[] };
declare const foo: string;

// Duplicate key
const d1 = { foo, a.b.c, c: 2 };
const d2 = { a.b.c, a.b.c };
