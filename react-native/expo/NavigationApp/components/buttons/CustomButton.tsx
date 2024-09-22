import React from 'react'
import { View, Text, PressableProps, Pressable } from 'react-native'


interface CustomButtonProps extends PressableProps {
  title: string,
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'black',
  onPress?: () => void
  className?: string
  variant?: 'solid' | 'outline' | 'ghost'
}

const CustomButton = React.forwardRef(({ title, color, onPress, className, variant, ...props }: CustomButtonProps, ref: React.Ref<View>) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary ',
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
    light: 'bg-light',
    dark: 'bg-dark',
    white: 'bg-white',
    black: 'bg-black',
  }[color]

  if (variant === 'outline') {
    return (
      <Pressable ref={ref} onPress={onPress} className={`mt-2 rounded-md p-3 border border-${color} active:opacity-90 ${className}`} >
        <Text className={`font-semibold text-center text-${color}`}>{title}</Text>
      </Pressable>
    )
  }

  if (variant === 'ghost') {
    return (
      <Pressable ref={ref} onPress={onPress} className={`mt-2 rounded-md p-3 border  border-${color} active:opacity-90 ${className}`} >
        <Text className={`font-semibold text-center text-${color}`}>{title}</Text>
      </Pressable>
    )
  }
  return (
    <Pressable ref={ref} onPress={onPress} className={`mt-2 rounded-md p-3 ${btnColor} active:opacity-90 ${className} `} >
      <Text className='font-semibold text-center text-white'>{title}</Text>
    </Pressable>
  )
})

export default CustomButton