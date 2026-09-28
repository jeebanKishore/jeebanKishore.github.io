/* tslint:disable */
/* eslint-disable */

export function analyze_design(flat_instructions: Int32Array): string;

export function auto_repair_design(flat_instructions: Int32Array): Int32Array;

export function export_design(format: string, flat_instructions: Int32Array, colors: Uint8Array): Uint8Array;

export function import_design(format: string, data: Uint8Array): Int32Array;

export function init_panic_hook(): void;

export function process_advanced_embroidery(vertices: Float32Array, path_lengths: Uint32Array, layer_path_counts: Uint32Array, _design_width_mm: number, row_spacing_mm: number, stitch_len_mm: number, angle_deg: number, use_auto_angle: boolean, max_satin_mm: number, fill_pattern: string, satin_style: string, underlay_style: string, plan_mode: string, stagger: number, randomness: number, pull_comp_mm: number, push_comp_mm: number, edge_jitter_mm: number, density_gradient: boolean, gradient_start_spacing_mm: number, gradient_end_spacing_mm: number, overlap_margin_mm: number, carve_pitch_mm: number, carve_angle_a_deg: number, carve_angle_b_deg: number): Uint8Array;

export function process_bitmap(image_data: Uint8Array, width: number, height: number, density: number, angle_deg: number, use_underlay: boolean, auto_angle: boolean): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly analyze_design: (a: number, b: number) => [number, number, number, number];
    readonly auto_repair_design: (a: number, b: number) => [number, number];
    readonly export_design: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number, number];
    readonly import_design: (a: number, b: number, c: number, d: number) => [number, number, number, number];
    readonly init_panic_hook: () => void;
    readonly process_advanced_embroidery: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number, u: number, v: number, w: number, x: number, y: number, z: number, a1: number, b1: number, c1: number, d1: number, e1: number, f1: number) => [number, number, number, number];
    readonly process_bitmap: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => [number, number, number, number];
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_table_dealloc: (a: number) => void;
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
