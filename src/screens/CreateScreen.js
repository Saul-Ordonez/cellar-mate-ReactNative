import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Context } from '../context/CellarContext';
import CreateBeerForm from '../components/CreateBeerForm';

const CreateScreen = ({ navigation }) => {
  const { addBeer } = useContext(Context);

  return (
    <CreateBeerForm
      onSubmit={(name, brewery, beerStyle,  bottleDate, abv, ibu, description) => {
        addBeer(name, brewery, beerStyle, bottleDate, abv, ibu, description, () => navigation.navigate('Index'));
      }}
    />
  );
};

CreateScreen.navigationOptions = () => {
  return {
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
  
});

export default CreateScreen;