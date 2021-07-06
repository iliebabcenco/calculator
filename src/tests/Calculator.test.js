import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

it('match the snapshot', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly to Calculator page', () => {
  render(<Calculator />);
  expect(screen.getByText('Let’s do some math!')).toBeInTheDocument();
});

it('doesn\'t contain Welcome to our page!', () => {
  render(<Calculator />);
  expect(screen.queryByText('Welcome to our page!')).not.toBeInTheDocument();
});
