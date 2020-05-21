import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View 
      // style={{
      //   backgroundColor: '#0a2165', 
      //   paddingBottom: 150,
      // }} 
    >
      <Image
        style={styles.image}
        source={require('../img/logo.png')} 
      />
      <View style={styles.buttonGroup} >
      <TouchableOpacity onPress={() => navigation.navigate('Index')}>
          <Image style={styles.cellarIcon} source={require('../img/view_cellar.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Image style={styles.addIcon} source={require('../img/add_beer.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerShown: (
      false
    )
  };
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cellarIcon: {
    height: 147,
    width: 140,
    marginLeft: 35,
    marginTop: 105,
  },
  addIcon: {
    height: 147,
    width: 112,
    marginRight: 35,
    marginTop: 105,
  },
  image: {
    marginTop: 50,
    paddingTop: 125,
    paddingBottom: 125,
    height: 320,
    width: 320,
    alignSelf: 'center',
  }

});

export default HomeScreen;
