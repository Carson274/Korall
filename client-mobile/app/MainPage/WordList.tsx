import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Word } from '../types.js'
import WordListItem from './WordListItem'

export default function WordList({ words } : { words: Word[] }) {
  return (
    <View style={styles.container}>
      {words.map((word, index) => (
        <WordListItem key={index} word={word} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
})