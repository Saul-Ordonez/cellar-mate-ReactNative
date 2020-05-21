import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { Context } from '../context/CellarContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state, deleteBeer } = useContext(Context);

  const beer = state.find((beer) => beer.id === navigation.getParam('id'));

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.labelStyle}>Beer Name</Text>
      <Text style={styles.input}>{beer.name}</Text>
      <Text style={styles.labelStyle}>Brewery</Text>
      <Text style={styles.input}>{beer.brewery}</Text>
      <Text style={styles.labelStyle}>Style</Text>
      <Text style={styles.input}>{beer.beerStyle}</Text>
      <Text style={styles.labelStyle}>Date Bottled</Text>
      <Text style={styles.input}>{beer.bottleDate}</Text>
      <Text style={styles.labelStyle}>ABV</Text>
      <Text style={styles.input}>{beer.abv}%</Text>
      <Text style={styles.labelStyle}>IBU</Text>
      <Text style={styles.input}>{beer.ibu}</Text>
      <Text style={styles.labelStyle}>Description</Text>
      <Text style={styles.input}>{beer.description}</Text>
      {/* <Button 
        title='Delete'
        onPress={() => deleteBeer(beer.id), () => navigation.navigate('Index')}
      /> */}
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
    ),
    headerTitle: (
      <Image
        style={{
          width: 125,
          height: 125,
          alignSelf: 'center',
          resizeMode: 'contain',
        }}
        source={require('../img/title1.png')}
      />
    ),
    headerBackTitle: 'Back',
    headerTintColor: 'black'
  };
};

const styles = StyleSheet.create({
  editBeerStyle: {
    fontSize: 35,
    marginRight: 10,
  },
  labelStyle: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {

  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#ded7cd',
    paddingBottom: 500,
    paddingTop: 10,
    
  }
});

export default ShowScreen;