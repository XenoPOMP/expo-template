import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HelloWorld from './app/components/HelloWorld';

export default function App() {
  return (
    <View className={'bg-white'}>
      <HelloWorld className={'text-red-500'} />

      <StatusBar style='auto' />
    </View>
  );
}
