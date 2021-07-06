import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../components/Home';

it('renders correctly to Home page', () => {
  const tree = renderer
    .create(<Link to="/">Home </Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});