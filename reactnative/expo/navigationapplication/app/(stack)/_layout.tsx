import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        }
      }}
    >
      <Stack.Screen name="profile/index" />
      <Stack.Screen name="home/index" />
      <Stack.Screen name="settings/index" />
      <Stack.Screen name="products/index"
        options={{
          title: 'Products screen',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
      />
    </Stack>
  )
}
export default StackLayout