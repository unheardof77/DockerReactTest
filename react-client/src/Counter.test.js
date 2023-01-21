import Counter from "./Counter";
import { getByTestId, render, screen } from '@testing-library/react';

test("Buttons should have appropriate classes", ()=>{
    render(<Counter/>);
    const firstBtn = getByTestId('firstBtn');
    const secondBtn = getByTestId('secondBtn');

    expect(firstBtn).toHaveClass('testClass')
    expect(secondBtn).toHaveClass('testClass')
})