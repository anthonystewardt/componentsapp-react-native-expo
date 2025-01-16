import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { View, Text } from 'react-native'
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        className='w-full  h-[180px] rounded-xl bg-indigo-600
          flex items-center justify-center'

      >

        <Text className='p-10 text-3xl font-bold bg-white rounded-full'>AS</Text>

      </View>

      {/* draweritems */}
      <View className='w-full h-[1px] bg-gray-300 my-3'></View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
export default CustomDrawer