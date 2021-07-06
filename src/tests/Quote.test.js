import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../components/Quote';

it('renders correctly to Quote page', () => {
  const tree = renderer
    .create(<Link to="/quote">Quote </Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
