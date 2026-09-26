// @target: es2017
// @module: commonjs

declare const maybe: { inner?: { value: string, other: number } } | undefined;
export const value = 1;
export const o = { maybe?.inner?.value, maybe!.inner!.other! };
