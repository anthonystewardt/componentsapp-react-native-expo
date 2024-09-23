import { products } from '@/store/products'
import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
const ProductPageById = () => {
  const { id } = useLocalSearchParams()

  const item = products.find((product) => product.id === id)

  if (!item) {
    return <Text className='text-2xl font-raleway-black'>Product not found</Text>
  }

  return (
    <View className='px-4 mt-4'>
      <Text className='text-2xl font-raleway-black'>{item.title}</Text>
      <Text className='text-lg font-raleway-light'>{item.description}</Text>
      <View className='flex-row justify-between'>
        <Text className='mt-2 text-lg font-bold font-raleway-regular'>${item.price}</Text>
      </View>
    </View>
  )
}
export default ProductPageById