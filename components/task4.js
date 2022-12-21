import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { cities } from './components/cities';

export default function App() {


  const [citylist, setcitylist] = useState(cities)

  const myFunc = () => {
    let tersten = citylist.sort((a, b) => b.localeCompare(a)
    )

    setcitylist([...tersten])
  }
  

  return (
    <View style={styles.container}>
      <Button title='plus' onPress={() => myFunc()}/>
        {
            cities.map((item) => <Text>{item}</Text>)
        }
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
