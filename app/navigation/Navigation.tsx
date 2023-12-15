import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';

import { BottomMenu } from '@/components/ui';

const Navigation: FC<{}> = () => {
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined
  );

  const navRef = useNavigationContainerRef();

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);

    const listener = navRef.addListener('state', () => {
      setCurrentRoute(navRef.getCurrentRoute()?.name);
    });

    return () => {
      navRef.removeListener('state', listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={navRef}>
        <></>
      </NavigationContainer>

      <View className={'bg-red-400'}></View>

      {currentRoute && (
        <BottomMenu navigate={navRef.navigate} currentRoute={currentRoute} />
      )}
    </>
  );
};

export default Navigation;
