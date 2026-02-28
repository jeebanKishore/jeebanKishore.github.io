/* tslint:disable */
/* eslint-disable */

export class JsonVisualizer {
    free(): void;
    [Symbol.dispose](): void;
    animate(): boolean;
    clear(): void;
    collapse_all(): void;
    draw_labels(ctx: CanvasRenderingContext2D): void;
    expand_all(): void;
    export_svg(): string;
    get_current_search_index(): number;
    get_node_count(): number;
    get_pan_x(): number;
    get_pan_y(): number;
    get_search_result_count(): number;
    get_visible_count(): number;
    get_zoom(): number;
    handle_click(x: number, y: number): string | undefined;
    interact_minimap(screen_x: number, screen_y: number): boolean;
    constructor(canvas: HTMLCanvasElement);
    next_search_result(): boolean;
    pan(dx: number, dy: number): void;
    parse_chunk(chunk: string): void;
    prev_search_result(): boolean;
    render(): void;
    reset_view(): void;
    resize(width: number, height: number): void;
    search(query: string): number;
    set_dark_mode(is_dark: boolean): void;
    set_limits(max_depth: number, max_array_items: number, max_nodes: number): void;
    set_theme(theme: number): void;
    zoom(delta: number, center_x: number, center_y: number): void;
    is_dark_mode: boolean;
    theme: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_get_jsonvisualizer_is_dark_mode: (a: number) => number;
    readonly __wbg_get_jsonvisualizer_theme: (a: number) => number;
    readonly __wbg_jsonvisualizer_free: (a: number, b: number) => void;
    readonly __wbg_set_jsonvisualizer_is_dark_mode: (a: number, b: number) => void;
    readonly __wbg_set_jsonvisualizer_theme: (a: number, b: number) => void;
    readonly jsonvisualizer_animate: (a: number) => number;
    readonly jsonvisualizer_clear: (a: number) => void;
    readonly jsonvisualizer_collapse_all: (a: number) => void;
    readonly jsonvisualizer_draw_labels: (a: number, b: number) => void;
    readonly jsonvisualizer_expand_all: (a: number) => void;
    readonly jsonvisualizer_export_svg: (a: number, b: number) => void;
    readonly jsonvisualizer_get_current_search_index: (a: number) => number;
    readonly jsonvisualizer_get_node_count: (a: number) => number;
    readonly jsonvisualizer_get_pan_x: (a: number) => number;
    readonly jsonvisualizer_get_pan_y: (a: number) => number;
    readonly jsonvisualizer_get_search_result_count: (a: number) => number;
    readonly jsonvisualizer_get_visible_count: (a: number) => number;
    readonly jsonvisualizer_get_zoom: (a: number) => number;
    readonly jsonvisualizer_handle_click: (a: number, b: number, c: number, d: number) => void;
    readonly jsonvisualizer_interact_minimap: (a: number, b: number, c: number) => number;
    readonly jsonvisualizer_new: (a: number, b: number) => void;
    readonly jsonvisualizer_next_search_result: (a: number) => number;
    readonly jsonvisualizer_pan: (a: number, b: number, c: number) => void;
    readonly jsonvisualizer_parse_chunk: (a: number, b: number, c: number, d: number) => void;
    readonly jsonvisualizer_prev_search_result: (a: number) => number;
    readonly jsonvisualizer_render: (a: number, b: number) => void;
    readonly jsonvisualizer_reset_view: (a: number) => void;
    readonly jsonvisualizer_resize: (a: number, b: number, c: number) => void;
    readonly jsonvisualizer_search: (a: number, b: number, c: number) => number;
    readonly jsonvisualizer_set_dark_mode: (a: number, b: number) => void;
    readonly jsonvisualizer_set_limits: (a: number, b: number, c: number, d: number) => void;
    readonly jsonvisualizer_set_theme: (a: number, b: number) => void;
    readonly jsonvisualizer_zoom: (a: number, b: number, c: number, d: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number, b: number, c: number) => void;
    readonly __wbindgen_export4: (a: number) => void;
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
