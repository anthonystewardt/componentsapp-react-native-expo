import { Slot, SplashScreen, Stack } from 'expo-router'
import { View, Text } from 'react-native'
import "./global.css"
import { useFonts } from 'expo-font'
import { useEffect } from 'react'


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
    <Slot />
    // <Stack />
  )
}
export default RootLayout