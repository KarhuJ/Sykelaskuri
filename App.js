import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [limitLo, setLimitLo] = useState('');
  const [limitHi, setLimitHi] = useState('');
  const [age, setAge] = useState('');


  function calculate() {
    const limitLo = (220 - age) * 0.65;
    const limitHi = (220 - age) * 0.85;
    setLimitLo(limitLo.toFixed(0));
    setLimitHi(limitHi.toFixed(0));
  }
  useEffect(() => {
    calculate();
  }, [age]);



return (
  <View style={styles.container}>
    <Text>Age</Text>
    <TextInput
      style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      value={age}
    />
    <Text>Limit: {limitLo} - {limitHi}</Text>
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
