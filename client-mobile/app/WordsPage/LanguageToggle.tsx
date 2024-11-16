import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

export default function LanguageToggle({ language, setLanguage } : { language: string, setLanguage: (lang: string) => void }) {
  const [toggle, setToggle] = useState(language === "eng" ? false : true);

  const handleToggle = () => {
    const newLanguage = toggle ? "eng" : "kor";
    setToggle(!toggle);
    setLanguage(newLanguage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.languageText} >Language</Text>
      <View style={styles.switchContainer} >
        <Text>English</Text>
        <Switch 
          value={toggle}
          onValueChange={handleToggle}
          trackColor={{ false: 'lightgray', true: 'green' }}
        />
        <Text>Korean</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  languageText: {
    fontSize: 16,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
})