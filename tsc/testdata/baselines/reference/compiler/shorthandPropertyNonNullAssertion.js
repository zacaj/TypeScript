//// [tests/cases/compiler/shorthandPropertyNonNullAssertion.ts] ////

//// [shorthandPropertyNonNullAssertion.ts]
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


//// [shorthandPropertyNonNullAssertion.js]
"use strict";
const a = { foo };
const aFoo = a.foo;
const b = { foo, bar, other: 1, method() { return 1; } };
const bFoo = b.foo;
const bBar = b.bar;
const c = { baz, foo };
c.baz.x;
c.foo.length; // error: possibly undefined
// Errors below
let target;
({ target } = { target: "" });
const d = { foo = "x" };
const e = { a: foo };
const f = { foo };


//// [shorthandPropertyNonNullAssertion.d.ts]
declare const foo: string | undefined;
declare const bar: number | null;
declare let baz: {
    x: number;
} | null | undefined;
declare const a: {
    foo: string;
};
declare const aFoo: string;
declare const b: {
    foo: string;
    bar: number;
    other: number;
    method(): number;
};
declare const bFoo: string;
declare const bBar: number;
declare const c: {
    baz: {
        x: number;
    };
    foo: string | undefined;
};
declare let target: string | undefined;
declare const d: {
    foo: string;
};
declare const e: {
    a: string | undefined;
};
declare const f: {
    foo: string | undefined;
};
