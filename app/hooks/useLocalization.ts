import { useContext } from 'react';

import { I18nContext } from '@/components/providers';
import { Localization } from '@/localization';
import { useAppDispatch } from '@/redux/hooks';
import { AppSettings, changeLang } from '@/redux/reducers/appSettingsSlice';

interface UseLocalizationResult {
  /** Change language that will be persisted. */
  changeLanguage: (newLang: AppSettings['language']) => void;

  /** Get locale from I18n. */
  loc: (key: keyof Localization) => Localization[typeof key];
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

  return { changeLanguage, loc };
};

export default useLocalization;
