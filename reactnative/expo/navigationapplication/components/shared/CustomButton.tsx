import { View, Text, Pressable, PressableProps } from 'react-native'

interface Props extends PressableProps {
  children: string,
  color: 'primary' | 'secondary' | 'tertiary',
  onPress: () => void,
  className?: string

}


const CustomButton = ({ children, color, onPress, className }: Props) => {

  const buttonColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary"
  }[color]

  return (
    <Pressable
      onPress={onPress}
      className={`  w-full h-12  rounded-lg justify-center items-center ${buttonColor} ${className} `}
    >
      <Text className='font-semibold text-white'>{children}</Text>
    </Pressable>
  )
}
export default CustomButton