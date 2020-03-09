import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, checkProptypes } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{guessedWord: 'train', letterMarchCount: 3}],
};

/**
 * Functional react component for congratulatory message.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
*/

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords { ...setupProps } />)
}

test('does not throw warning with expected props', () => {
  checkProptypes(GuessedWords, defaultProps);
});