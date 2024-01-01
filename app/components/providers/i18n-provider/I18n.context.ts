import { I18n } from 'i18n-js';
import { createContext } from 'react';

interface I18nContextType {
  i18n: I18n;
}

const I18nContext = createContext<I18nContextType>({} as I18nContextType);

export default I18nContext;
