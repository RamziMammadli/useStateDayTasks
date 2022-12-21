import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { cities } from './components/cities'

const App = () => {

  const [citylist, setDeleteFromList] = useState(cities)

  const removeRandom = () => {
       const random = (Math.floor(Math.random() * citylist.length) - 1);
       citylist.splice(random, 1)
       setDeleteFromList([...citylist])
       
    }
  


  return (
    <View>
      <Button title="Delete" onPress={() => removeRandom()}/>
      {
            citylist.map((item) => <Text>{item}</Text>)
      }
    </View>
  )
}

export default App