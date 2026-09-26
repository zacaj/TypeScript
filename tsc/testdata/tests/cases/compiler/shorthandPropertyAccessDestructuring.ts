// @strict: true

declare const a: { b: { c: string } };

// Not allowed as a destructuring target
let target = { c: "" };
({ target.c } = a.b);
