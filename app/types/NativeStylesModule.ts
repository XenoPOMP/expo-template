import { RecursiveKeyValuePair } from 'tailwindcss/types/config';

/**
 * Construct Tailwind styles modules (like *.module.scss files).
 *
 * @example
 * const styles = {
 *   heading: 'font-bold',
 *
 *   footer: {
 *     label: 'text-2xl',
 *   },
 * } satisfies NativeStylesModule;
 */
export type NativeStylesModule = RecursiveKeyValuePair<PropertyKey, string>;
