import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Text } from 'react-native'
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      {...props}
    >
      <View className='flex justify-center items-center bg-indigo-600 mx-3 p-10 mb-10 h-[150px] rounded-lg'>
        <View className='flex items-center justify-center w-24 h-24 bg-white rounded-full'>
          <Text className='text-3xl text-primary font-raleway-black'>AS</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
export default CustomDrawer