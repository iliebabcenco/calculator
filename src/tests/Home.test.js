import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom';

it('renders correctly to Home page', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('doesn\'t contain Let’s do some math!', () => {
  render(<Home />);
  expect(screen.queryByText('Let’s do some math!')).not.toBeInTheDocument();
});
