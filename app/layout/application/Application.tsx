import cn from 'classnames';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Navigation from '@/navigation/Navigation';

SplashScreen.preventAutoHideAsync();

const Application = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  const [fontsLoaded, fontError] = useFonts({
    Kalnia: require('../../fonts/google fonts/Kalnia.ttf'),

    'SF-Pro-Display-Regular': require('@/fonts/SFProDisplay/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-Regular-Italic': require('@/fonts/SFProDisplay/SF-Pro-Display-RegularItalic.otf'),

    'SF-Pro-Display-Medium': require('@/fonts/SFProDisplay/SF-Pro-Display-Medium.otf'),
    'SF-Pro-Display-Medium-Italic': require('@/fonts/SFProDisplay/SF-Pro-Display-MediumItalic.otf'),

    'SF-Pro-Display-Bold': require('@/fonts/SFProDisplay/SF-Pro-Display-Bold.otf'),
    'SF-Pro-Display-Bold-Italic': require('@/fonts/SFProDisplay/SF-Pro-Display-BoldItalic.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      className={cn('bg-purple-950 h-full')}
      style={{
        // paddingTop: top,
        // paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right,
      }}
    >
      <Navigation />

      <StatusBar style='auto' />
    </View>
  );
};

export default Application;
