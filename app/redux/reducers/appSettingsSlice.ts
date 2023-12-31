import { createSlice } from '@reduxjs/toolkit';
import { Nullable } from '@xenopomp/advanced-types';

import locales from '@/localization/locales';
import { ReduxAction } from '@/redux/types';

export type AppSettings = {
  appVersion: string;
  appName: string;
  language: Nullable<keyof typeof locales>;
};

const initialState: AppSettings = {
  appVersion: '1.0.0',
  appName: 'React Native + Expo App',
  language: null,
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    // simpleAction(state, action: ReduxAction<number>) {},

    /** Change application`s language. */
    changeLang(state, { payload }: ReduxAction<AppSettings['language']>) {
      state.language = payload;
    },
  },
});

export default appSettingsSlice.reducer;
export const { changeLang } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
