import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Context } from '../context/CellarContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state, deleteBeer } = useContext(Context);

  const beer = state.find((beer) => beer.id === navigation.getParam('id'));

  return (
    <ScrollView>
    <View style={styles.viewStyle}>
      <Text style={styles.labelStyle}>BEER NAME</Text>
      <Text style={styles.input}>{beer.name}</Text>
      <Text style={styles.labelStyle}>BREWERY</Text>
      <Text style={styles.input}>{beer.brewery}</Text>
      <Text style={styles.labelStyle}>STYLE</Text>
      <Text style={styles.input}>{beer.beerStyle}</Text>
      <Text style={styles.labelStyle}>DATE BOTTLED</Text>
      <Text style={styles.input}>{beer.bottleDate}</Text>
    <View style={styles.numberGroups} >
    <View style={styles.abvStyle}>
      <Text style={styles.labelStyle}>ABV</Text>
      <Text style={styles.input}>{beer.abv}%</Text>
    </View>
    <View style={styles.ibuStyle}>
      <Text style={styles.labelStyle}>IBU</Text>
      <Text style={styles.input}>{beer.ibu}</Text>
    </View>
    </View>
      <Text style={styles.labelStyle}>DESCRIPTION</Text>
      <Text style={styles.input}>{beer.description}</Text>
      {/* <Button 
        title='Delete'
        onPress={() => deleteBeer(beer.id), () => navigation.navigate('Index')}
      /> */}
    </View>
    </ScrollView>
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
        source={require('../img/header.png')}
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
    marginTop: 15,
    fontSize: 24,
    fontFamily: 'AvenirNextCondensed-DemiBold',
    textAlign: 'center',
  },
  input: {
    fontFamily: 'AvenirNextCondensed-Regular',
    fontSize: 24,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#ded7cd',
    paddingBottom: 230,
    paddingTop: 10,
  },
  abvStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 30
  },
  ibuStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numberGroups: {
    flexDirection: 'row'
  }
});

export default ShowScreen;