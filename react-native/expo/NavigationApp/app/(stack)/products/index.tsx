import { products } from '@/store/products'
import { Link } from 'expo-router'
import { View, Text, FlatList } from 'react-native'
const ProductsScreen = () => {
  return (
    <View className='flex-1 px-4 mb-10'>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <View className='mt-4'>
          <Text className='text-2xl font-raleway-black'>{item.title}</Text>
          <Text className='text-lg font-raleway-light'>{item.description}</Text>
          <View className='flex-row justify-between'>
            <Text className='text-lg font-raleway-regular'>{item.price}</Text>
            <Link href={`/(stack)/products/${item.id}`} className='text-lg font-semibold text-blue-400 font-raleway-regular'>View</Link>
          </View>
        </View>}
      />
    </View>
  )
}
export default ProductsScreen