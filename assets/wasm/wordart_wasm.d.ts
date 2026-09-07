/* tslint:disable */
/* eslint-disable */

/**
 * High-performance stateful Wordle spiral layout engine.
 */
export class WasmWordleLayout {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns the canvas 32-bit words buffer.
     */
    get_canvas_data(): Uint32Array;
    constructor(width: number, height: number);
    /**
     * Attempts to place a word sprite along a spiral.
     * Returns [placed_x, placed_y] on success, or None if no space was found.
     */
    place_word(sprite_width: number, sprite_height: number, sprite_words: Uint32Array, center_x: number, center_y: number, is_archimedean: boolean, spiral_dir: number): Int32Array | undefined;
    /**
     * Resets the canvas bitmap.
     */
    reset(): void;
}

export function init_panic_hook(): void;

/**
 * Calculates opaque bounding box of non-empty pixels.
 * Returns Int32Array [min_x, min_y, width, height].
 */
export function wasm_calculate_opaque_bounds(data: Uint8Array, width: number, height: number, alpha_threshold: number, check_white: boolean): Int32Array;

/**
 * Applies Canny edge detection in-place to RGBA pixel buffer, zeroing edge alpha.
 */
export function wasm_canny_edge_mask(rgba: Uint8Array, width: number, height: number, preset: number): void;

/**
 * Computes mask bounding box of pixels with alpha > threshold.
 * Returns Int32Array [min_x, min_y, max_x, max_y].
 */
export function wasm_compute_mask_bbox(pixels: Uint8Array, width: number, height: number, threshold: number): Int32Array;

/**
 * Extracts all OpenType-SVG documents from the font.
 * Returns JSON serialized string mapping glyph_id -> scoped SVG markup.
 */
export function wasm_extract_all_svg_documents(data: Uint8Array, face_idx: number, font_prefix: string): string;

/**
 * Extracts OpenType-SVG glyphs, fallback outlines, and metrics for specified text.
 * Returns JSON serialized string mapping "{font_prefix}.{glyph_id}" -> ColorGlyphInfo.
 */
export function wasm_extract_color_glyphs(data: Uint8Array, face_idx: number, text: string, font_prefix: string): string;

/**
 * Extracts raster PNG bytes for a glyph if available in font tables (CBDT/sbix).
 * Returns raw Uint8Array byte buffer or null.
 */
export function wasm_extract_glyph_shape_png(data: Uint8Array, face_idx: number, gid: number): Uint8Array | undefined;

/**
 * Extracts SVG markup for a glyph from SVG table or vector outline.
 * Returns SVG string or null.
 */
export function wasm_extract_glyph_shape_svg(data: Uint8Array, face_idx: number, gid: number): string | undefined;

/**
 * Finds the maximum empty rectangle within a masked bitmap region.
 * Returns Int32Array [x, y, width, height].
 */
export function wasm_find_max_empty_rectangle(pixels: Uint8Array, stride_width: number, sub_x: number, sub_y: number, sub_width: number, sub_height: number, target_aspect: number, is_cloud_candidate: boolean): Int32Array;

/**
 * Parses font binary data (single TTF/OTF or TrueType Collection .ttc/.otc)
 * into font families, styles, color flags, and capabilities.
 * Returns JSON serialized string.
 */
export function wasm_parse_font(data: Uint8Array): string;

/**
 * Runs complete custom shape preprocessing pipeline in-place.
 * Returns Int32Array [min_x, min_y, width, height] of the resulting opaque bounds.
 */
export function wasm_process_custom_shape(rgba: Uint8Array, width: number, height: number, threshold: number, edges: number, negative: boolean, neg_r: number, neg_g: number, neg_b: number, skip_edges: boolean): Int32Array;

/**
 * Samples average RGB color in an affine-transformed bounding box.
 * Returns hex string "rrggbb" or empty string if no valid pixels.
 */
export function wasm_sample_average_color(pixels: Uint8Array, stride_w: number, stride_h: number, bbox_x: number, bbox_y: number, bbox_xmax: number, bbox_ymax: number, inv_m00: number, inv_m01: number, inv_m02: number, inv_m10: number, inv_m11: number, inv_m12: number, trans_x_min: number, trans_y_min: number, trans_x_max: number, trans_y_max: number): string | undefined;

/**
 * Scans font cmap for emoji, pictograph, dingbat, and symbol glyphs.
 * Returns JSON serialized string of EmojiGlyphDescriptor array.
 */
export function wasm_scan_emoji_glyphs(data: Uint8Array, face_idx: number): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_wasmwordlelayout_free: (a: number, b: number) => void;
    readonly init_panic_hook: () => void;
    readonly wasm_calculate_opaque_bounds: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
    readonly wasm_canny_edge_mask: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly wasm_compute_mask_bbox: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly wasm_extract_all_svg_documents: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly wasm_extract_color_glyphs: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
    readonly wasm_extract_glyph_shape_png: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly wasm_extract_glyph_shape_svg: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly wasm_find_max_empty_rectangle: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
    readonly wasm_parse_font: (a: number, b: number, c: number) => void;
    readonly wasm_process_custom_shape: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => void;
    readonly wasm_sample_average_color: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number) => void;
    readonly wasm_scan_emoji_glyphs: (a: number, b: number, c: number, d: number) => void;
    readonly wasmwordlelayout_get_canvas_data: (a: number, b: number) => void;
    readonly wasmwordlelayout_new: (a: number, b: number) => number;
    readonly wasmwordlelayout_place_word: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
    readonly wasmwordlelayout_reset: (a: number) => void;
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
