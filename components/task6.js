import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function App() {


  const [count, setCount] = useState(0)



  const addTen = () => {
    setCount(count + 10)
    if(count == 100){
      setCount(0)
     }
  }

  return (<>
    <View>
      <Button title='plus' onPress={() => addTen()}/>
       <Text>{count}</Text>  
    </View></>
  );
 }

