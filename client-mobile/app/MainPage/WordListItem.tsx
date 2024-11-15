import React from 'react'
import { Word } from '../types'
import { View, Text, StyleSheet } from 'react-native'

export default function WordListItem({ word, language } : { word: Word, language: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word.name[language]}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  word: {
    fontSize: 16,
  },
})