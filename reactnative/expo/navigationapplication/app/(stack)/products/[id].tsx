import { products } from '@/data/productsData'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
const ProductId = () => {

  const { id } = useLocalSearchParams()
  console.log(id)

  const productItem = products.find(product => product.id === id)

  if (!productItem) {
    return <Redirect href="/(stack)/products" />
  }

  return (
    <View className='p-4 mb-4 '>
      <Text className='text-2xl font-semibold text-gray-600'>{productItem.title}</Text>
      <Text className='text-lg text-gray-400'>{productItem.description}</Text>
      <View
        className='flex-row items-center justify-between'
      >
        <Text className='text-lg text-gray-400'>{productItem.price}</Text>


      </View>

    </View>
  )
}
export default ProductId