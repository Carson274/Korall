import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import wordData from '../data/wordData.json'
import { Word } from '../types.js'
import WordList from './WordList'

export default function MainPage() {
  const [words, setWords] = useState<Word[]>(wordData)

  return (
    <View style={styles.container}>
      <WordList words={words} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
  },
})