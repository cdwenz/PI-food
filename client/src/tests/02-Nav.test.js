import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav/index'
import { NavLink } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom'

test('Rederiza texto de bienvenida', () => {
  render(<Nav />, { wrapper: MemoryRouter })

  expect(screen.find(NavLink)).toHaveLength(3);
})

// describe("<Nav />", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<Nav />);
//   });

//   it("Deberia renderizar Dos <Link />", () => {
//     expect(wrapper.find(Link)).toHaveLength(3);
//   });
// })