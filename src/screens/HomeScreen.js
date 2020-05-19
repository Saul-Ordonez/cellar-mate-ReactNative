import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.image} >Image Goes Here</Text>
      <View style={styles.buttonGroup} >
        <Button
          style={styles.cellarButton}
          title='View your cellar'
          onPress={() => navigation.navigate('Index')}
        />
        <Button 
          style={styles.addBeerButton}
          title='Add a beer'
          onPress={() => navigation.navigate('Create')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    marginTop: 75,
  },
  cellarButton: {
    marginTop: 25,
    borderColor: 'red',
    borderWidth: 2,
  },
  addBeerButton: {

  },
  image: {
    borderWidth: 2,
    borderColor: 'red',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    paddingTop: 125,
    paddingBottom: 125,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default HomeScreen;
