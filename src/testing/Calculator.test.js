import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
