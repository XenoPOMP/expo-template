import { Defined } from '@xenopomp/advanced-types';
import { I18n } from 'i18n-js';

import { en } from './en';
import { ru } from './ru';

/**
 * Dictionary of in-app locales.
 */
const locales = {
  en,
  ru,
} satisfies Defined<ConstructorParameters<typeof I18n>[0]>;

export default locales;
