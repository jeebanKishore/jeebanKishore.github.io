/* tslint:disable */
/* eslint-disable */

export class Layer {
    free(): void;
    [Symbol.dispose](): void;
    get_pixels(): Uint8Array;
    constructor(width: number, height: number);
    update_pixels(pixels: Uint8Array): void;
    blend_mode: number;
    opacity: number;
    visible: boolean;
}

export class LayerCompositor {
    free(): void;
    [Symbol.dispose](): void;
    add_layer(layer: Layer): number;
    composite_layers(): Uint8Array;
    get_layer(index: number): Layer | undefined;
    move_layer(from: number, to: number): boolean;
    constructor(width: number, height: number);
    remove_layer(index: number): boolean;
}

export function adjust_brightness_contrast(pixels: Uint8Array, brightness: number, contrast: number): void;

export function adjust_hue_saturation(pixels: Uint8Array, hue_shift: number, saturation: number): void;

export function process_displacement_map(_pixels: Uint8Array, _width: number, _height: number): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_layer_free: (a: number, b: number) => void;
    readonly __wbg_layercompositor_free: (a: number, b: number) => void;
    readonly adjust_brightness_contrast: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly adjust_hue_saturation: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly layer_blend_mode: (a: number) => number;
    readonly layer_get_pixels: (a: number, b: number) => void;
    readonly layer_new: (a: number, b: number) => number;
    readonly layer_opacity: (a: number) => number;
    readonly layer_set_blend_mode: (a: number, b: number) => void;
    readonly layer_set_opacity: (a: number, b: number) => void;
    readonly layer_set_visible: (a: number, b: number) => void;
    readonly layer_update_pixels: (a: number, b: number, c: number) => void;
    readonly layer_visible: (a: number) => number;
    readonly layercompositor_add_layer: (a: number, b: number) => number;
    readonly layercompositor_composite_layers: (a: number, b: number) => void;
    readonly layercompositor_get_layer: (a: number, b: number) => number;
    readonly layercompositor_move_layer: (a: number, b: number, c: number) => number;
    readonly layercompositor_new: (a: number, b: number) => number;
    readonly layercompositor_remove_layer: (a: number, b: number) => number;
    readonly process_displacement_map: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number) => void;
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
