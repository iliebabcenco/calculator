import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';
import '@testing-library/jest-dom';

it('renders correctly to Quote page', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('doesn\'t contain Let’s do some math!', () => {
  render(<Quote />);
  expect(screen.queryByText('Let’s do some math!')).not.toBeInTheDocument();
});
