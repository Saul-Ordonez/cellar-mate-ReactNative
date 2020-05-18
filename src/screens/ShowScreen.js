import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/CellarContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const beer = state.find((beer) => beer.id === navigation.getParam('id'));

  return (
    <View>
      <Text>Beer Name</Text>
      <Text>{beer.name}</Text>
      <Text>Brewery</Text>
      <Text>{beer.brewery}</Text>
      <Text>Date Bottled</Text>
      <Text>{beer.bottleDate}</Text>
      <Text>ABV</Text>
      <Text>{beer.abv}%</Text>
      <Text>IBU</Text>
      <Text>{beer.ibu}</Text>
      <Text>Description</Text>
      <Text>{beer.description}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity  
        onPress={() => 
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        } 
      >
        <EvilIcons name='pencil' style={styles.editBeerStyle} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  editBeerStyle: {
    fontSize: 35,
    marginRight: 10,
  }
});

export default ShowScreen;