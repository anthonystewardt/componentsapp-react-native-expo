import { View, Text, TextProps } from 'react-native'

type Type = "h1" | "h2" | "h3" | "normal" | "small" | "tiny" | "bold" | "link"

interface Props extends TextProps {
  type?: Type,
  children: string,
  className?: string,
}

const ThemedText = ({ type, children, className }: Props) => {
  return (
    <View>
      <Text
        className={[
          className,
          type === "h1" ? "text-3xl" : "",
          type === "h2" ? "text-2xl" : "",
          type === "h3" ? "text-xl" : "",
          type === "normal" ? "text-base" : "",
          type === "small" ? "text-sm" : "",
          type === "tiny" ? "text-xs" : "",
          type === "link" ? "font-normal underline" : "",
        ].join(" ")}
      > {children} </Text>
    </View>
  )
}
export default ThemedText