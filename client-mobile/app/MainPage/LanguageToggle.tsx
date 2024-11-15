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
      <Text>Language</Text>
      <Switch 
        value={toggle}
        onValueChange={handleToggle}
        trackColor={{ false: 'lightgray', true: 'green' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
})