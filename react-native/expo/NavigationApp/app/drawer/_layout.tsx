import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <CustomDrawer {...props} />
      )}
      screenOptions={{
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneContainerStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}

      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Drawer>

  );
}
