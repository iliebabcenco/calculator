import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../components/Calculator';

it('renders correctly to Calculator page', () => {
  const tree = renderer
    .create(<Link to="/calculator">Calculator </Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
