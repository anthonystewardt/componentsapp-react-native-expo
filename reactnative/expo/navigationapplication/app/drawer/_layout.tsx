import { View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
      initialRouteName="profile/index"
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        drawerInactiveTintColor: 'gray',
        drawerActiveBackgroundColor: 'rgba(0,0,0,0.1)',
        // drawerStyle: {
        //   padding: 0,
        //   // width: 250,
        //   borderRadius: 10,
        // },
        // borderRadius: 10,
        drawerType: 'back',
        drawerContentContainerStyle: {
          backgroundColor: 'white',
          // borderRadius: 10,
        },
        drawerInactiveBackgroundColor: 'white',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          color: 'indigo',
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTintColor: 'indigo',
        headerTitleAlign: 'center',
        headerTitle: () => (
          <View>
            <Text>Header Title</Text>
          </View>
        ),


      }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen
        name="profile/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Profile',
          title: 'perfil',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}

      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Schedule',
          title: 'calendario',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  )
}
export default DrawerLayout