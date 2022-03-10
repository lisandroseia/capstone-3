import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { PropTypes } from 'prop-types';

import thunk from 'redux-thunk';
import HomeReducer from '../redux/Home/Home';

const reducer = combineReducers({
  HomeReducer,
});

function render(
  ui,
  {
    preloadedState,
    store = createStore(reducer, applyMiddleware(thunk)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.objectOf(String).isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
