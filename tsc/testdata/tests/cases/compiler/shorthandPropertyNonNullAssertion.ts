// @strict: true
// @target: esnext
// @declaration: true

declare const foo: string | undefined;
declare const bar: number | null;
declare let baz: { x: number } | null | undefined;

const a = { foo! };
const aFoo: string = a.foo;

const b = { foo!, bar!, other: 1, method() { return 1; } };
const bFoo: string = b.foo;
const bBar: number = b.bar;

const c = { baz!, foo };
c.baz.x;
c.foo.length; // error: possibly undefined

// Errors below
let target: string | undefined;
({ target! } = { target: "" });
const d = { foo! = "x" };
const e = { a!: foo };
const f = { foo? };
