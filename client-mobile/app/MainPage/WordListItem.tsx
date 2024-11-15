import React from 'react'
import { Word } from '../types'
import { View, Text, StyleSheet } from 'react-native'

export default function WordListItem({ word } : { word: Word }) {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word.name.eng}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  word: {
    fontSize: 16,
  },
})