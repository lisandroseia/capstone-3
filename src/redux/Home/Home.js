const LIST_COUNTRIES = 'capstone3/home/LIST_COUNTRIES';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

const listCountries = (payload) => ({
  type: LIST_COUNTRIES,
  payload,
});

export function loadCountries(){
    return (dispatch) => {
        const url = 'https://disease.sh/v3/covid-19/countries';
        fetch(url)
        .then(res => res.json())
        .then(data => dispatch(listCountries(data)))
    }
}
