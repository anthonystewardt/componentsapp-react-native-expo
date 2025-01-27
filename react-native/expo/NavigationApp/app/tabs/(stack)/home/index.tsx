import CustomButton from '@/components/buttons/CustomButton'
import { Link, router } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'
const HomeScreen = () => {
  return (
    <SafeAreaView  >
      <View className='px-4'>
        <View className='mt-3 bg-primary'>
          <Text className='ml-5 text-3xl font-semibold text-blue-400 font-raleway-black'>HomeScreen</Text>
        </View>

        <Link href="/tabs/(stack)/profile" asChild>
          <CustomButton title='Profile Screen' color='secondary' />
        </Link>


        <CustomButton variant="ghost" title='Products Screen' color='secondary' onPress={() => router.push('/tabs/(stack)/products')} />

        <CustomButton variant="outline" title='Settings Screen' color='secondary' onPress={() => router.push('/tabs/(stack)/Settings')} />

        {/* <Pressable className='py-2 mt-3 text-center rounded-full bg-primary'>
          <Link href={"/products"} className='ml-5 text-3xl font-semibold text-center text-white/95 font-raleway-black'>Products Screen</Link>
        </Pressable> */}
      </View>
    </SafeAreaView>
  )
}
export default HomeScreen