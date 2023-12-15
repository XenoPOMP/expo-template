import cn from 'classnames';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import fontsDeclaration from '@/fonts/fontsDeclaration';
import { flexCenter } from '@/styles/tailwind/utilities';

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
      className={cn('bg-purple-950 h-full', flexCenter)}
      style={{
        // paddingTop: top,
        // paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right,
      }}
    >
      <Text
        className={'text-white'}
        style={{
          fontSize: 30,
        }}
      >
        System font
      </Text>

      <Text
        className={'text-white'}
        style={{
          fontFamily: fontsDeclaration.Kalnia,
          fontSize: 30,
        }}
      >
        Kalnia font
      </Text>

      <Text
        className={'text-white'}
        style={{
          fontFamily: fontsDeclaration.SFProDisplay.Bold,
          fontSize: 30,
        }}
      >
        SF Pro Display font (Bold)
      </Text>

      <StatusBar style='auto' />
    </View>
  );
};

export default Application;
