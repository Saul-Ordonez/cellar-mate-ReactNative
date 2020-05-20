import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Context } from '../context/CellarContext';
import CreateBeerForm from '../components/CreateBeerForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBeer } = useContext(Context);

  const beer = state.find(
    (beer) => beer.id === id
  );

  return (
    <CreateBeerForm
      initialValues={{ 
        name: beer.name, 
        brewery: beer.brewery,
        beerStyle: beer.beerStyle,
        bottleDate: beer.bottleDate,
        abv: beer.abv,
        ibu: beer.ibu,
        description: beer.description
      }}
      onSubmit={(name, brewery, beerStyle, bottleDate, abv, ibu, description) => {
        editBeer(id, name, brewery, beerStyle, bottleDate, abv, ibu, description, () => navigation.pop());
      }}
    />
  );
};

EditScreen.navigationOptions = () => {
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
    )
  };
};

const styles = StyleSheet.create({

});

export default EditScreen;