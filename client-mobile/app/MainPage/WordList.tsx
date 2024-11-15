import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Word } from '../types.js'
import WordListItem from './WordListItem'

export default function WordList({ words, language } : { words: Word[], language: string }) {
  return (
    <ScrollView style={styles.container}>
      {words.map((word, index) => (
        <WordListItem key={index} word={word} language={language} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
})