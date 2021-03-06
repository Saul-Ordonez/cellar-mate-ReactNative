import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Context } from '../context/CellarContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBeer, getBeers } = useContext(Context);

  useEffect(() => {
    getBeers();

    const listener = navigation.addListener('didFocus', ()=> {
      getBeers();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList  
        data={state.sort((a,b) => a.brewery.localeCompare(b.brewery))}
        keyExtractor={(beer) => beer.name}
        renderItem={({ item }) => {
        return (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Show', { id: item.id })} 
          >
            <View style={styles.row}>
              <View style={styles.listItems}>
              <Text style={styles.beerName}>{item.name}</Text>
              <Text style={styles.breweryName}>{item.brewery}</Text>
              </View>
              <TouchableOpacity onPress={() => deleteBeer(item.id)}>
                <Image
                  style={styles.icon}
                  source={require('../img/opener.png')}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: ( 
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' style={styles.addBeerStyle} />
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
    headerTintColor: 'black'
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  beerName: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontFamily: 'AvenirNextCondensed-DemiBold',
    fontSize: 22,
  },
  icon: {
    height: 40,
    width: 20,
    marginRight: 10,
    marginTop: 10,
  },
  addBeerStyle: {
    fontSize: 30,
    marginRight: 10,
  },
  breweryName: {
    fontFamily: 'AvenirNextCondensed-Regular',
    fontSize: 20,
  },
  listItems: {
    flexDirection: 'column',
  }
});

export default IndexScreen;