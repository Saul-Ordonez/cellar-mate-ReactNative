import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  
});

export default CreateScreen;