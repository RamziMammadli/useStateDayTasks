import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { cities } from './components/cities'

const App = () => {

  const [citylist, setDeleteFromList] = useState(cities)

  const Delete = () => {
    let deleteCity = citylist.shift()
    console.log(citylist);

    setDeleteFromList([...citylist])
  }


  return (
    <View>
      <Button title="Delete" onPress={() => Delete()}/>
      {
            citylist.map((item) => <Text>{item}</Text>)
      }
    </View>
  )
}

export default App