import { useContext } from 'react';

import { I18nContext } from '@/components/providers';
import { useAppDispatch } from '@/redux/hooks';
import { AppSettings, changeLang } from '@/redux/reducers/appSettingsSlice';

interface UseLocalizationResult {
  /** Change language that will be persisted. */
  changeLanguage: (newLang: AppSettings['language']) => void;
}

const useLocalization = (): UseLocalizationResult => {
  const { i18n } = useContext(I18nContext);

  /** Redux dispatch func. */
  const dispatch = useAppDispatch();

  const changeLanguage: UseLocalizationResult['changeLanguage'] = newLang => {
    dispatch(changeLang(newLang));
  };

  return { changeLanguage };
};

export default useLocalization;
