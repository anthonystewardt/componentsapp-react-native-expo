import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Stack, useNavigation } from 'expo-router'
import { View, Text } from 'react-native'
const StackLayout = () => {

  const navigation = useNavigation()


  const headerLeftFn = (canGoBack: boolean = false) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop())
      return
    }

    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <Stack
      screenOptions={{
        // headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: ({ canGoBack, tintColor }) => (
          <Ionicons name={
            canGoBack ? 'arrow-back' : 'menu'
          } size={24} color={tintColor} onPress={() => headerLeftFn(canGoBack)} />
        ),
        // headerRight: () => (
        //   <View>
        //     <Text>Right</Text>
        //   </View>
        // ),
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        }
      }}
    >
      <Stack.Screen name="home/index" />
      <Stack.Screen name="profile/index" />
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