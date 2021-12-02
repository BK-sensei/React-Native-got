import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
 
const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(data => setCharacters(data))
  }, [] )

  return(
    <View style={styles.container}>
      <FlatList 
        data={characters} 
        renderItem={Character} 
        horizontal 
      />
    </View>
  )
}

const Character = ({ item }) => {
  return(
    <View style={styles.imgContainer}>
      <Image 
        style={styles.image}
        source={{uri: item.imageUrl}}
      />
      <Text>{item.fullName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    margin: 40,
  },
  image: {
    width: 200,
    height: 300,
  }
});

export default App
