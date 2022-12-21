import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {


  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(count + 2)
  }

  const minus = () => {
    setCount(count - 2)
  }

  return (
    <View style={styles.container}>
      <Button title='plus' onPress={plus}/>
      <Text >{count}</Text>
      <Button title='minus' onPress={minus}/>
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
