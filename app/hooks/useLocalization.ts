import * as Localization from 'expo-localization';
import { useContext } from 'react';

import { I18nContext } from '@/components/providers';
import { ILocalization } from '@/localization';
import { useAppDispatch } from '@/redux/hooks';
import { AppSettings, changeLang } from '@/redux/reducers/appSettingsSlice';

interface UseLocalizationResult {
  /** Change language that will be persisted. */
  changeLanguage: (newLang: AppSettings['language']) => void;

  /** Get locale from I18n. */
  loc: (key: keyof ILocalization) => string;

  /** Current app`s locale (non-redux). */
  currentLocale: string;

  /** Device`s current locale. */
  deviceLocale: string;
}

const useLocalization = (): UseLocalizationResult => {
  const { i18n } = useContext(I18nContext);

  /** Redux dispatch func. */
  const dispatch = useAppDispatch();

  const changeLanguage: UseLocalizationResult['changeLanguage'] = newLang => {
    dispatch(changeLang(newLang));
  };

  const loc: UseLocalizationResult['loc'] = key => {
    return i18n.t(key);
  };

  return {
    changeLanguage,
    loc,
    currentLocale: i18n.locale,
    deviceLocale: Localization.getLocales()[0].languageCode,
  };
};

export default useLocalization;
