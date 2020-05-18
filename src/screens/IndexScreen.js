import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
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
        data={state}
        keyExtractor={(beer) => beer.name}
        renderItem={({ item }) => {
        return (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Show', { id: item.id })} 
          >
            <View style={styles.row}>
              <Text style={styles.beerName}>{item.name}</Text>
              <TouchableOpacity onPress={() => deleteBeer(item.id)}>
                <Feather style={styles.icon} name='trash' />
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
    headerRight: (() => 
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' style={styles.addBeerStyle} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  beerName: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  addBeerStyle: {
    fontSize: 30,
    marginRight: 10,
  }
});

export default IndexScreen;