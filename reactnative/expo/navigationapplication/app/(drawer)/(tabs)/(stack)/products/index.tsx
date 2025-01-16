import { products } from '@/data/productsData'
import { Link } from 'expo-router'
import { View, Text, FlatList } from 'react-native'
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated'
import { SafeAreaView } from 'react-native-safe-area-context'
const ProductScreen = () => {



  return (
    <View
      className='flex-1 mt-3'
    >

      <View className='flex-1 px-5 '>
        <Text className='mb-4 text-3xl font-bold'>Productos</Text>
        <View className='flex-1'>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className='p-4 mb-4 '>
                <Text className='text-2xl font-semibold text-gray-600'>{item.title}</Text>
                <Text className='text-lg text-gray-400'>{item.description}</Text>
                <View
                  className='flex-row items-center justify-between'
                >
                  <Text className='text-lg text-gray-400'>{item.price}</Text>

                  <Link href={`/products/${item.id}`} className='text-blue-500'>Ver detalles</Link>
                </View>

              </View>
            )}
          />
        </View>
      </View>



    </View>
  )
}
export default ProductScreen