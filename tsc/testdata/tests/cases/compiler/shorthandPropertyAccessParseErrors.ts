// @strict: true

declare const a: { b: { c: string, fn(): void }, arr: { name: number }[] };

// Must end with a property name
const e1 = { a.arr[0] };
const e2 = { a.b.fn() };
