import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Word } from '../types.js'
import WordListItem from './WordListItem'

export default function WordList({ words, language, toggleModal } : { words: Word[], language: string, toggleModal: () => void }) {
  return (
    <ScrollView style={styles.container}>
      {words.map((word, index) => (
        <WordListItem key={index} word={word} language={language} toggleModal={toggleModal} />
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