import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface Props {
  count: number
  setCount: () => void,
  position?: 'right' | 'left',
  content?: string,
  onLongpress?: () => void
}

const FAB = ({ count, setCount, position = "right", content, onLongpress }: Props) => {
  return (
    <>
      <Pressable
        onLongPress={onLongpress}
        style={({ pressed }) => [styles.FAB, position === 'right' ? styles.buttonRight : styles.buttonLeft, { opacity: pressed ? 0.7 : 1 }]}
        onPress={() =>
          setCount()
        }
      >
        <Text
          style={styles.FABText}
        >{content}</Text>
      </Pressable>
    </>
  )
}
export default FAB
const styles = StyleSheet.create({
  FAB: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#3b82f6',
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FABText: {
    color: 'white',
    fontSize: 20,
  },
  buttonRight: {
    right: 20,
  },
  buttonLeft: {
    left: 20,
  },
});