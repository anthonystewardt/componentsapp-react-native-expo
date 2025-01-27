import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'blue',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        paddingTop: 5,
      },
    }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
