import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/redux';

/**
 * App dispatch hook. Type-safe.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed useSelector hook.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
