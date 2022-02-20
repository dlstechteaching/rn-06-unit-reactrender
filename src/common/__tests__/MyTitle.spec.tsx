import React from 'react';
import renderer from 'react-test-renderer';
import { MyTitle } from '../MyTitle';

describe('MyTitle tests', () => {
  it('should render properly', () => {
    const tree = renderer.create(<MyTitle label={'title'} />);
    expect(tree).toMatchSnapshot();
  });
});