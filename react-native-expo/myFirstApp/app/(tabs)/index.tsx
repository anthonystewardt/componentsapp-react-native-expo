import { Image, StyleSheet, Platform, View, Text, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import FAB from '@/components/buttons/FAB';

export default function HomeScreen() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title} >{count}</Text>

      <FAB count={count} setCount={
        () => setCount(count - 1)
      }
        position="left"
        content='-1'
        onLongpress={() => setCount(0)}
      />
      <FAB count={count} setCount={
        () => setCount(count + 1)
      }
        onLongpress={() => setCount(0)}
        position="right"
        content='+1'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'white',
  }
});
