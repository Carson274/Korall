import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function WordCard() {
  return (
    <View style={styles.container}>
      <Text>WordCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '60%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
})