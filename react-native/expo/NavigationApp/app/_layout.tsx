import { Slot, SplashScreen, Stack } from 'expo-router'
import { View, Text } from 'react-native'
import "./global.css"
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Raleway-Black': require('../assets/fonts/Raleway-Black.ttf'),
    'Raleway-Light': require('../assets/fonts/Raleway-Light.ttf'),
    'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
  })

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])


  if (!fontsLoaded && !error) {
    return null
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
    // <Stack />
  )
}
export default RootLayout