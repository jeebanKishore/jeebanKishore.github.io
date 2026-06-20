/* @ts-self-types="./mockup_engine.d.ts" */

export class Layer {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Layer.prototype);
        obj.__wbg_ptr = ptr;
        LayerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LayerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_layer_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get blend_mode() {
        const ret = wasm.layer_blend_mode(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Uint8Array}
     */
    get_pixels() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.layer_get_pixels(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_export2(r0, r1 * 1, 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        const ret = wasm.layer_new(width, height);
        this.__wbg_ptr = ret >>> 0;
        LayerFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {number}
     */
    get opacity() {
        const ret = wasm.layer_opacity(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} mode
     */
    set blend_mode(mode) {
        wasm.layer_set_blend_mode(this.__wbg_ptr, mode);
    }
    /**
     * @param {number} opacity
     */
    set opacity(opacity) {
        wasm.layer_set_opacity(this.__wbg_ptr, opacity);
    }
    /**
     * @param {boolean} visible
     */
    set visible(visible) {
        wasm.layer_set_visible(this.__wbg_ptr, visible);
    }
    /**
     * @param {Uint8Array} pixels
     */
    update_pixels(pixels) {
        const ptr0 = passArray8ToWasm0(pixels, wasm.__wbindgen_export);
        const len0 = WASM_VECTOR_LEN;
        wasm.layer_update_pixels(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @returns {boolean}
     */
    get visible() {
        const ret = wasm.layer_visible(this.__wbg_ptr);
        return ret !== 0;
    }
}
if (Symbol.dispose) Layer.prototype[Symbol.dispose] = Layer.prototype.free;

export class LayerCompositor {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LayerCompositorFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_layercompositor_free(ptr, 0);
    }
    /**
     * @param {Layer} layer
     * @returns {number}
     */
    add_layer(layer) {
        _assertClass(layer, Layer);
        var ptr0 = layer.__destroy_into_raw();
        const ret = wasm.layercompositor_add_layer(this.__wbg_ptr, ptr0);
        return ret >>> 0;
    }
    /**
     * @returns {Uint8Array}
     */
    composite_layers() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.layercompositor_composite_layers(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_export2(r0, r1 * 1, 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * @param {number} index
     * @returns {Layer | undefined}
     */
    get_layer(index) {
        const ret = wasm.layercompositor_get_layer(this.__wbg_ptr, index);
        return ret === 0 ? undefined : Layer.__wrap(ret);
    }
    /**
     * @param {number} from
     * @param {number} to
     * @returns {boolean}
     */
    move_layer(from, to) {
        const ret = wasm.layercompositor_move_layer(this.__wbg_ptr, from, to);
        return ret !== 0;
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        const ret = wasm.layercompositor_new(width, height);
        this.__wbg_ptr = ret >>> 0;
        LayerCompositorFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {number} index
     * @returns {boolean}
     */
    remove_layer(index) {
        const ret = wasm.layercompositor_remove_layer(this.__wbg_ptr, index);
        return ret !== 0;
    }
}
if (Symbol.dispose) LayerCompositor.prototype[Symbol.dispose] = LayerCompositor.prototype.free;

/**
 * @param {Uint8Array} pixels
 * @param {number} brightness
 * @param {number} contrast
 */
export function adjust_brightness_contrast(pixels, brightness, contrast) {
    var ptr0 = passArray8ToWasm0(pixels, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    wasm.adjust_brightness_contrast(ptr0, len0, addHeapObject(pixels), brightness, contrast);
}

/**
 * @param {Uint8Array} pixels
 * @param {number} hue_shift
 * @param {number} saturation
 */
export function adjust_hue_saturation(pixels, hue_shift, saturation) {
    var ptr0 = passArray8ToWasm0(pixels, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    wasm.adjust_hue_saturation(ptr0, len0, addHeapObject(pixels), hue_shift, saturation);
}

/**
 * @param {Uint8Array} _pixels
 * @param {number} _width
 * @param {number} _height
 */
export function process_displacement_map(_pixels, _width, _height) {
    var ptr0 = passArray8ToWasm0(_pixels, wasm.__wbindgen_export);
    var len0 = WASM_VECTOR_LEN;
    wasm.process_displacement_map(ptr0, len0, addHeapObject(_pixels), _width, _height);
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_copy_to_typed_array_d2f20acdab8e0740: function(arg0, arg1, arg2) {
            new Uint8Array(getObject(arg2).buffer, getObject(arg2).byteOffset, getObject(arg2).byteLength).set(getArrayU8FromWasm0(arg0, arg1));
        },
        __wbg___wbindgen_throw_6ddd609b62940d55: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbindgen_object_drop_ref: function(arg0) {
            takeObject(arg0);
        },
    };
    return {
        __proto__: null,
        "./mockup_engine_bg.js": import0,
    };
}

const LayerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_layer_free(ptr >>> 0, 1));
const LayerCompositorFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_layercompositor_free(ptr >>> 0, 1));

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

function dropObject(idx) {
    if (idx < 1028) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

let heap = new Array(1024).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('mockup_engine_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
