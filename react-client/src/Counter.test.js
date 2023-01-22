import Counter from "./Counter";
import { render, fireEvent } from '@testing-library/react';

it("Count goes up and down properly", ()=>{
    const { queryByTestId, getByTestId } = render(<Counter/>);
    expect(queryByTestId("count").innerHTML).toBe("0");
    fireEvent.click(getByTestId("firstBtn"));
    expect(queryByTestId("count").innerHTML).toBe("1");
    fireEvent.click(getByTestId("secondBtn"));
    expect(queryByTestId("count").innerHTML).toBe("0");
})