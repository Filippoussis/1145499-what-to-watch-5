import films from "../mocks/films";

const initialState = {
  films,
  genre: 'All genres',
  step: 4

}

const reducer = (state = initialState, action) => {
  if (action.type === `FILTER`) {
    return Object.assign({}, state, {
      genre: action.payload
    });
  }

  return state;
};

export {reducer};
