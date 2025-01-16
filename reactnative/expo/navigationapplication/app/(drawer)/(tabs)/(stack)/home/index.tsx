import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeScreen = () => {

  const navigation = useNavigation()

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View>
      <Text className='mb-5 text-3xl '>HomeScreen</Text>
      <View
        className='px-4'
      >

        {/* <Link href="/profile" asChild className='block mb-2'>
          <CustomButton color='secondary' onPress={() => console.log("profile")}>Profile</CustomButton>
        </Link> */}

        <View className='flex-col gap-2'>
          <CustomButton onPress={() => router.push("/products")} color='primary'>Products</CustomButton>
          <CustomButton onPress={() => router.push("/profile")} color='secondary'>Profile</CustomButton>
          <CustomButton onPress={() => router.push("/settings")} color='tertiary'>Settings</CustomButton>
          <CustomButton onPress={() => openDrawer()} color='primary'>Open menu</CustomButton>

        </View>
        {/* <Link className='mt-3 text-lg dark:text-gray-200' href="/products">Products</Link>
        <Link className='mt-3 text-lg dark:text-gray-200' href="/profile">Profile</Link>
        <Link className='mt-3 text-lg dark:text-gray-200' href="/settings">Settings</Link> */}
      </View>
    </View>
  )
}
export default HomeScreen