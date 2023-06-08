import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Quotes from '../components/quotes'

describe('Quotes', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Quotes />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});