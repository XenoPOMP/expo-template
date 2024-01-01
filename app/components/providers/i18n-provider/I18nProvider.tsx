import { PropsWith } from '@xenopomp/advanced-types';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { ContextType, FC, useEffect, useMemo } from 'react';

import locales from '@/localization/locales';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import I18nContext from './I18n.context';

/**
 * Creates context for using `expo-localization`.
 *
 * @param children
 * @param props
 * @constructor
 */
const I18nProvider: FC<PropsWith<'children', {}>> = ({ children }) => {
  /** Select data from redux. */
  const { language } = useAppSelector(state => state.appSettings);

  /** Init memoized i18n object. */
  const i18n = useMemo(() => new I18n(locales), [language]);

  /** Enable fallback if language`s locales are missing. */
  i18n.enableFallback = true;

  /** Change language. */
  i18n.locale = language ?? Localization.locale;
  console.log(`Current locale: ${i18n.locale}`);

  /** Change locale each time redux selector changes. */
  useEffect(() => {}, [language]);

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
