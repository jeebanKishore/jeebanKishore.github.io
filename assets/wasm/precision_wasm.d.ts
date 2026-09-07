/* tslint:disable */
/* eslint-disable */

export function extract_precision_palette(rgba_in: Uint8Array, width: number, height: number, num_colors: number, palette_cleanup: boolean): Uint8Array;

export function init_panic_hook(): void;

export function precision_vectorize(rgba_in: Uint8Array, width_in: number, height_in: number, num_target_colors: number, user_palette_flat: Uint8Array | null | undefined, detail: number, smoothing_passes: number, speckle_size: number, corner_threshold_deg: number, quality_boost: boolean, palette_cleanup: boolean): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly extract_precision_palette: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
    readonly init_panic_hook: () => void;
    readonly precision_vectorize: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number) => void;
    readonly __wbindgen_export: (a: number, b: number, c: number) => void;
    readonly __wbindgen_export2: (a: number, b: number) => number;
    readonly __wbindgen_export3: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
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
