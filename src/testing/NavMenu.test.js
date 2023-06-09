import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavMenu from '../components/NavMenu';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
