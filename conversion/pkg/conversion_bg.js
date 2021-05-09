import * as wasm from './conversion_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
* @param {Uint8Array} input_data
* @param {ConversionOptions} options
* @param {Function} on_progress
* @returns {ConversionResult}
*/
export function convert_to_avif(input_data, options, on_progress) {
    var ptr0 = passArray8ToWasm0(input_data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    _assertClass(options, ConversionOptions);
    var ret = wasm.convert_to_avif(ptr0, len0, options.ptr, addHeapObject(on_progress));
    return ConversionResult.__wrap(ret);
}

/**
* A special function for WebP.
* @param {Uint8Array} input_data
* @param {ConversionOptions} options
* @param {number} width
* @param {number} height
* @param {Function} on_progress
* @returns {ConversionResult}
*/
export function rgba_to_avif(input_data, options, width, height, on_progress) {
    var ptr0 = passArray8ToWasm0(input_data, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    _assertClass(options, ConversionOptions);
    var ret = wasm.rgba_to_avif(ptr0, len0, options.ptr, width, height, addHeapObject(on_progress));
    return ConversionResult.__wrap(ret);
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}
/**
*/
export const Subsampling = Object.freeze({ YUV420:0,"0":"YUV420",YUV444:1,"1":"YUV444",YUV400:2,"2":"YUV400", });
/**
*/
export class ConversionOptions {

    static __wrap(ptr) {
        const obj = Object.create(ConversionOptions.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_conversionoptions_free(ptr);
    }
    /**
    * Effort of conversion as a percentage from 0 to 100.
    * @returns {number}
    */
    get effort() {
        var ret = wasm.__wbg_get_conversionoptions_effort(this.ptr);
        return ret;
    }
    /**
    * Effort of conversion as a percentage from 0 to 100.
    * @param {number} arg0
    */
    set effort(arg0) {
        wasm.__wbg_set_conversionoptions_effort(this.ptr, arg0);
    }
    /**
    * Quality of conversion as a percentage from 0 to 100.
    * @returns {number}
    */
    get quality() {
        var ret = wasm.__wbg_get_conversionoptions_quality(this.ptr);
        return ret;
    }
    /**
    * Quality of conversion as a percentage from 0 to 100.
    * @param {number} arg0
    */
    set quality(arg0) {
        wasm.__wbg_set_conversionoptions_quality(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get subsampling() {
        var ret = wasm.__wbg_get_conversionoptions_subsampling(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set subsampling(arg0) {
        wasm.__wbg_set_conversionoptions_subsampling(this.ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get keep_transparency() {
        var ret = wasm.__wbg_get_conversionoptions_keep_transparency(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set keep_transparency(arg0) {
        wasm.__wbg_set_conversionoptions_keep_transparency(this.ptr, arg0);
    }
    /**
    * @param {number} effort
    * @param {number} quality
    * @param {number} subsampling
    * @param {boolean} keep_transparency
    */
    constructor(effort, quality, subsampling, keep_transparency) {
        var ret = wasm.conversionoptions_new(effort, quality, subsampling, keep_transparency);
        return ConversionOptions.__wrap(ret);
    }
}
/**
*/
export class ConversionResult {

    static __wrap(ptr) {
        const obj = Object.create(ConversionResult.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_conversionresult_free(ptr);
    }
    /**
    * @returns {number}
    */
    get data() {
        var ret = wasm.__wbg_get_conversionresult_data(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set data(arg0) {
        wasm.__wbg_set_conversionresult_data(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get size() {
        var ret = wasm.__wbg_get_conversionresult_size(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set size(arg0) {
        wasm.__wbg_set_conversionresult_size(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get error() {
        var ret = wasm.__wbg_get_conversionresult_error(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set error(arg0) {
        wasm.__wbg_set_conversionresult_error(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get error_size() {
        var ret = wasm.__wbg_get_conversionresult_error_size(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set error_size(arg0) {
        wasm.__wbg_set_conversionresult_error_size(this.ptr, arg0);
    }
}

export const __wbindgen_number_new = function(arg0) {
    var ret = arg0;
    return addHeapObject(ret);
};

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

export const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};

export const __wbg_call_f5e0576f61ee7461 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
});

export const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

