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
      <View style={styles.labels}>
        <Text style={styles.labelStyle}>BEER NAME</Text>
       <Text style={styles.input}>{beer.name}</Text>
      </View>
      <View style={styles.labels}>
        <Text style={styles.labelStyle}>BREWERY</Text>
        <Text style={styles.input}>{beer.brewery}</Text>
      </View>
      <View style={styles.labels} >
        <Text style={styles.labelStyle}>STYLE</Text>
        <Text style={styles.input}>{beer.beerStyle}</Text>
      </View>
      <View style={styles.labels}>
        <Text style={styles.labelStyle}>DATE BOTTLED</Text>
        <Text style={styles.input}>{beer.bottleDate}</Text>
      </View>
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
      <View style={styles.labels}>
        <Text style={styles.labelStyle}>DESCRIPTION</Text>
        <Text style={styles.input}>{beer.description}</Text>
      </View>
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
  },
  abvStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#eee9e2',
    paddingHorizontal: 20,
    marginVertical: 5
  },
  ibuStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#eee9e2',
    paddingHorizontal: 20,
    marginVertical: 5
  },
  numberGroups: {
    flexDirection: 'row',

  },
  // nameStyle: {
  //   backgroundColor: '#fba43a',
  //   paddingHorizontal: 120,
  // },
  // breweryStyle: {
  //   backgroundColor: '#eac292',
  //   paddingHorizontal: 120,
  // },
  // dateStyle: {
  //   backgroundColor: '#ded7cd',
  //   paddingHorizontal: 120,
  // },
  // styleStyle: {
  //   backgroundColor: '#e3cdb3',
  //   paddingHorizontal: 120,
  // },
  // descriptionStyle: {
  //   backgroundColor: '#ffffff',
  //   paddingHorizontal: 120,
  // },
  // labels: {
  //   paddingVertical: 5,
  //   borderWidth: 1,
  //   borderColor: 'red',
  //   paddingHorizontal: 30
  // }
});

export default ShowScreen;