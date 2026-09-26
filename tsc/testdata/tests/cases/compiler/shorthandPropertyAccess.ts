// @strict: true
// @declaration: true
// @target: esnext

declare const a: { b: { c: string }, arr: { name: number }[], default: boolean };
declare const maybe: { inner?: { value: string } } | undefined;
declare const nullable: { id: number } | null;
declare function f(): { x: string };
declare const foo: string;

// Property access chains
export const o1 = { a.b };
export const o2 = { a.b.c };
export const o3 = { maybe?.inner?.value };
export const o4 = { nullable!.id };
export const o5 = { a.arr[0].name };
export const o6 = { (f()).x };
export const o7 = { a.default };
export const o8 = { maybe!.inner!.value! };
export const o9 = { a.b.c, foo, other: 1, method() { return 1; }, ...a.b };

export const o10 = {
    a
        .b
        .c,
};

class C {
    value = 1;
    get() {
        return { this.value };
    }
}

// Contextual typing / assignability
const t1: { c: number } = { a.b.c };
