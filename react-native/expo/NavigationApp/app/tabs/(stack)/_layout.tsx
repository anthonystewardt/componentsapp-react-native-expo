import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },

      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Products',
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Profile',
        }}
      />
    </Stack>
  )
}
export default StackLayout