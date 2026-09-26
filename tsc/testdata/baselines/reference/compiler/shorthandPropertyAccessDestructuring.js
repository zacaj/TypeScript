//// [tests/cases/compiler/shorthandPropertyAccessDestructuring.ts] ////

//// [shorthandPropertyAccessDestructuring.ts]
declare const a: { b: { c: string } };

// Not allowed as a destructuring target
let target = { c: "" };
({ target.c } = a.b);


//// [shorthandPropertyAccessDestructuring.js]
"use strict";
// Not allowed as a destructuring target
let target = { c: "" };
({ c: target.c } = a.b);
