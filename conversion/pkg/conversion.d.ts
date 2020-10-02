/* tslint:disable */
/* eslint-disable */
/**
 * @param {Uint8Array} input_data
 * @param {ConversionOptions} options
 * @param {Function} on_progress
 * @returns {ConversionResult}
 */
export function convert_to_avif(input_data: Uint8Array, options: ConversionOptions, on_progress: Function): ConversionResult;

/**
 * A special function for WebP.
 * @param {Uint8Array} input_data
 * @param {ConversionOptions} options
 * @param {number} width
 * @param {number} height
 * @param {Function} on_progress
 * @returns {ConversionResult}
 */
export function raw_rgba_to_avif(input_data: Uint8Array, options: ConversionOptions, width: number, height: number, on_progress: Function): ConversionResult;

/**
 */
export enum Subsampling {
    YUV420,
    YUV444,
}

/**
 */
export class ConversionOptions {
    free(): void;

    /**
     * @param {number} quality
     * @param {number} subsampling
     */
    constructor(quality: number, subsampling: number);

    /**
     * Quality of conversion as a percentage from 0 to 100.
     * @returns {number}
     */
    quality: number;
    /**
     * @returns {number}
     */
    subsampling: number;
}

/**
 */
export class ConversionResult {
    free(): void;

    /**
     * @returns {number}
     */
    data: number;
    /**
     * @returns {number}
*/
  error: number;
/**
* @returns {number}
*/
  error_size: number;
/**
* @returns {number}
*/
  size: number;
}
