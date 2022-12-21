import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { cities } from './components/cities';

export default function App() {


  const [citylist, setcitylist] = useState(cities)


  // const newFunc = () => {
  //   setcitylist(cities.filter(item => item[0] == ("A")))}


  const List = () => {
    let cityStartsA = citylist.filter((item) => item[0] == ("A"))
console.log(cityStartsA);
    setcitylist([...cityStartsA])
  }
  

  return (
    <View style={styles.container}>
      <Button title='plus' onPress={() => List()}/>
        {
            citylist.map((item) => <Text>{item}</Text>)
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
