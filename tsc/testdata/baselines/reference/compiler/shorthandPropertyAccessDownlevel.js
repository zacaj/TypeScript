//// [tests/cases/compiler/shorthandPropertyAccessDownlevel.ts] ////

//// [shorthandPropertyAccessDownlevel.ts]
declare const maybe: { inner?: { value: string, other: number } } | undefined;
export const value = 1;
export const o = { maybe?.inner?.value, maybe!.inner!.other! };


//// [shorthandPropertyAccessDownlevel.js]
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.o = exports.value = void 0;
exports.value = 1;
exports.o = { value: (_a = maybe === null || maybe === void 0 ? void 0 : maybe.inner) === null || _a === void 0 ? void 0 : _a.value, other: maybe.inner.other };
