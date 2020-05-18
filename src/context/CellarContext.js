import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const beerReducer = (state, action) => {
  switch (action.type) {
    case 'get_beers':
      return action.payload;
    case 'edit_beer':
      return state.map((beer) => {
        return beer.id === action.payload.id
        ? action.payload
        : beer;
      });
    case 'delete_beer':
      return state.filter((beer) => beer.id !== action.payload);
    default:
      return state;
  }
};

const getBeers = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/beers');

    dispatch({ type: 'get_beers', payload: response.data });
  };
};

const addBeer = () => {
  return async (name, brewery, beerStyle, bottleDate, abv, ibu, description, callback) => {
    await jsonServer.post('/beers', { name, brewery, beerStyle, bottleDate, abv, ibu, description });
    if (callback) {
      callback();
    }
  };
};
const deleteBeer =(dispatch) => {
  return async (id) => { 
    await jsonServer.delete(`/beers/${id}`);
    dispatch({ 
      type: 'delete_beer', 
      payload: id }
    );
  };
};
const editBeer = (dispatch) => {
  return async (id, name, brewery, beerStyle, bottleDate, abv, ibu, description, callback) => {
    await jsonServer.put(`/beers/${id}`, { name, brewery, beerStyle, bottleDate, abv, ibu, description });
    dispatch({ 
      type: 'edit_beer', 
      payload: { id, name, brewery, beerStyle, bottleDate, abv, ibu, description }
    });
    if (callback) {
      callback();
    }
  };
};


export const { Context, Provider } = createDataContext(
  beerReducer, 
  { addBeer, deleteBeer, editBeer, getBeers }, 
  []
);