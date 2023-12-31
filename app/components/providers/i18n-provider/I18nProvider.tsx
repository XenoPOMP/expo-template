import { PropsWith } from '@xenopomp/advanced-types';
import { I18n } from 'i18n-js';
import { ContextType, FC, useMemo } from 'react';

import locales from '@/localization/locales';

import I18nContext from './I18n.context';

/**
 * Creates context for using `expo-localization`.
 *
 * @param children
 * @param props
 * @constructor
 */
const I18nProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  /** Init memoized i18n object. */
  const i18n = useMemo(() => new I18n(locales), []);

  /** Enable fallback if language`s locales are missing. */
  i18n.enableFallback = true;

  return (
    <I18nContext.Provider
      value={{
        i18n,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export { I18nProvider as default, I18nContext };
