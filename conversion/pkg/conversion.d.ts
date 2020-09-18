/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} input_data
* @param {Function} on_progress
* @returns {ConversionResult}
*/
export function convert_to_avif(input_data: Uint8Array, on_progress: Function): ConversionResult;
/**
* A special thing for WebP.
* @param {Uint8Array} input_data
* @param {number} width
* @param {number} height
* @param {Function} on_progress
* @returns {ConversionResult}
*/
export function raw_rgba_to_avif(input_data: Uint8Array, width: number, height: number, on_progress: Function): ConversionResult;
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
