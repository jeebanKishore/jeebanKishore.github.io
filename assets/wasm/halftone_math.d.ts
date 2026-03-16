/* tslint:disable */
/* eslint-disable */

export class HalftoneEngine {
    free(): void;
    [Symbol.dispose](): void;
    compute(width: number, height: number, pat: number, vnum: number, hdist: number, grot: number, offset_x: number, offset_y: number, freq: number, center_x: number, center_y: number, grad: number, contrast: number, size_max: number, size_min: number, rot: number, rotrnd: boolean, rotalt: boolean, shape_compression: number): void;
    get_output(): Float32Array;
    init_image(width: number, height: number, pixels: Uint8Array): void;
    constructor();
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_halftoneengine_free: (a: number, b: number) => void;
    readonly halftoneengine_compute: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number) => void;
    readonly halftoneengine_get_output: (a: number) => any;
    readonly halftoneengine_init_image: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly halftoneengine_new: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
