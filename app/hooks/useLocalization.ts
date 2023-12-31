import { useContext } from 'react';

import { I18nContext } from '@/components/providers';

interface UseLocalizationResult {}

const useLocalization = (): UseLocalizationResult => {
  const { i18n } = useContext(I18nContext);

  return {};
};

export default useLocalization;
