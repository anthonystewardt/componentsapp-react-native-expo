import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'blue',
      headerShown: false

    }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,

        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heartbeat" color={color} />,
        }}
      />
    </Tabs>
  )
}
export default TabLayout