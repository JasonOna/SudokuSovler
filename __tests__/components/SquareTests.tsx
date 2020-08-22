import React from 'react';
import renderer from 'react-test-renderer';

import { Square } from '../../SudokuSolver/components/Square'

describe('Square', () => {
  it('has a text input', () => {
    const thing = renderer.create(<Square callback={() => {}} value="3" />)

    expect(thing.toJSON()?.type).toEqual(expect.stringContaining('TextInput'))
  })
})