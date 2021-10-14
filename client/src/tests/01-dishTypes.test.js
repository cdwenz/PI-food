import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import DishTypes from '../components/DishTypes/index';

test('render content launch', () => {
    const array = ['launch', 'cafe'];
    const component = render(<DishTypes arrayDish={array}/>)
    expect(component.container).toHaveTextContent('launch')
})
test('render content cafe', () => {
    const array = ['launch', 'cafe'];
    const component = render(<DishTypes arrayDish={array}/>)
    expect(component.container).toHaveTextContent('cafe')
})