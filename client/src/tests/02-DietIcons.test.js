import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import DietIcons from '../components/DietsIcons/index';

test('render content vegan', () => {
    const array = ['vegan', 'primal'];
    const component = render(<DietIcons arrayDiets={array}/>)
    expect(component.container).toHaveTextContent('vegan')
})
test('render content gluten free', () => {
    const array = ['vegetarian', 'gluten free'];
    const component = render(<DietIcons arrayDiets={array}/>)
    expect(component.container).toHaveTextContent('gluten free')
})