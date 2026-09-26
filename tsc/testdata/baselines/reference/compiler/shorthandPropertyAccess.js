//// [tests/cases/compiler/shorthandPropertyAccess.ts] ////

//// [shorthandPropertyAccess.ts]
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


//// [shorthandPropertyAccess.js]
// Property access chains
export const o1 = { b: a.b };
export const o2 = { c: a.b.c };
export const o3 = { value: maybe?.inner?.value };
export const o4 = { id: nullable.id };
export const o5 = { name: a.arr[0].name };
export const o6 = { x: (f()).x };
export const o7 = { default: a.default };
export const o8 = { value: maybe.inner.value };
export const o9 = { c: a.b.c, foo, other: 1, method() { return 1; }, ...a.b };
export const o10 = {
    c: a
        .b
        .c,
};
class C {
    value = 1;
    get() {
        return { value: this.value };
    }
}
// Contextual typing / assignability
const t1 = { c: a.b.c };


//// [shorthandPropertyAccess.d.ts]
export declare const o1: {
    b: {
        c: string;
    };
};
export declare const o2: {
    c: string;
};
export declare const o3: {
    value: string | undefined;
};
export declare const o4: {
    id: number;
};
export declare const o5: {
    name: number;
};
export declare const o6: {
    x: string;
};
export declare const o7: {
    default: boolean;
};
export declare const o8: {
    value: string;
};
export declare const o9: {
    c: string;
    foo: string;
    other: number;
    method(): number;
};
export declare const o10: {
    c: string;
};
