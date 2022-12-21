import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {


  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(count + Math.floor(Math.random() * 50))
  }

  const minus = () => {
    setCount(count - Math.floor(Math.random() * 50))
  }

  return (
    <View style={styles.container}>
      <Button title='plus' onPress={plus}/>
      <Text style={{fontSize: count}}>Text</Text>
      <Button title='plus' onPress={minus}/>
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
