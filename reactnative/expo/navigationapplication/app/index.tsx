import { Redirect } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'


const HomeScreen = () => {
  return (
    <Redirect href={"/(stack)/home"} />
  )
}
export default HomeScreen