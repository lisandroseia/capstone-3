import HomeReducer from '../redux/Home/Home';

describe('testing reducer pure function', () => {
  test('reducer return correct state', () => {
    const state = [
      {
        id: 'us',
        name: 'USA',
        continent: 'America',
      },
    ];

    const LIST_COUNTRIES = 'capstone3/home/LIST_COUNTRIES';
    const action = { type: LIST_COUNTRIES, payload: state };

    const reduced = HomeReducer([], action);

    expect(reduced).toEqual(state);
  });

  test('wrong action should throw', () => {
    const state = [
      {
        id: 'us',
        name: 'USA',
        continent: 'America',
      },
    ];

    const NOT_LIST_COUNTRIES = 'capstone3/home/NOT_LIST_COUNTRIES';
    const action = { type: NOT_LIST_COUNTRIES, payload: state };

    const reduced = HomeReducer([], action);

    expect(reduced).toEqual([]);
  });
});
