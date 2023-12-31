import { useContext } from 'react';

import { I18nContext } from '@/components/providers';
import { useAppDispatch } from '@/redux/hooks';

interface UseLocalizationResult {}

const useLocalization = (): UseLocalizationResult => {
  const { i18n } = useContext(I18nContext);

  /** Redux dispatch func. */
  const dispatch = useAppDispatch();

  return {};
};

export default useLocalization;
