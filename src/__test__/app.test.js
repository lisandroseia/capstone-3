import React from 'react';
import {
  waitFor, render, fireEvent, screen, cleanup,
} from './util';
import App from '../App';
import '@testing-library/jest-dom';

afterEach(() => cleanup());

describe('homepage', () => {
  test('homepage renders', async () => {
    const { container } = render(<App />);

    await waitFor(() => screen.getByText('Afghanistan'));

    expect(container).toMatchSnapshot();
  });

  test('API data renders', async () => {
    render(<App />);

    await waitFor(() => screen.getByText('Afghanistan'));

    expect(screen.getByText('Algeria')).toBeInTheDocument();
  });
});

describe('Details page', () => {
  test('Details page should render', async () => {
    const { container } = render(<App />);

    await waitFor(() => screen.getByText('Algeria'));

    fireEvent.click(screen.getByText('Algeria'));

    expect(container).toMatchSnapshot();
  });
});
