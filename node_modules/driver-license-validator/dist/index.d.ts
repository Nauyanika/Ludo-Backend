import { ValidateOptions, ValidationMatch } from './interfaces.js';
/**
 * Check if a driver license number matches any format.
 *
 * @param dl Driver license number.
 * @param options Optional configuration options.
 */
export declare function isValid(dl: string, options?: ValidateOptions): boolean;
/**
 * Get all matching formats for a driver license number.
 *
 * @param dl Driver license number.
 * @param options Optional configuration options.
 */
export declare function getMatches(dl: string, options?: ValidateOptions): ValidationMatch[];
