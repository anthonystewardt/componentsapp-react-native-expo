import CustomButton from '@/components/buttons/CustomButton'
import { Link, Redirect, router } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    // <Redirect href="/(stack)/home" />
    <Redirect href="/drawer" />
    // <SafeAreaView  >
    //   <View className='px-4'>
    //     <View className='mt-3 bg-primary'>
    //       <Text className='ml-5 text-3xl font-semibold text-blue-400 font-raleway-black'>HomeScreen</Text>
    //     </View>

    //     <Link href="/profile" asChild>
    //       <CustomButton title='Profile Screen' color='secondary' />
    //     </Link>


    //     <CustomButton variant="ghost" title='Products Screen' color='secondary' onPress={() => router.push('/products')} />

    //     <CustomButton variant="outline" title='Products Screen' color='secondary' onPress={() => router.push('/products')} />

    //     {/* <Pressable className='py-2 mt-3 text-center rounded-full bg-primary'>
    //       <Link href={"/products"} className='ml-5 text-3xl font-semibold text-center text-white/95 font-raleway-black'>Products Screen</Link>
    //     </Pressable> */}
    //   </View>
    // </SafeAreaView>
  )
}
export default HomeScreen