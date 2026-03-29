import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
  test('Should render with default values', () => {

    const name = 'ItemCounter';

    // We can send properties when we are rendering
    render(<ItemCounter name={name} />);


    // We can evaluate toBeDefined and not.toBeNull
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();

  });

  test('Should render with custom quantity', () => {

    const name = 'ItemCounter';
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    // If there is another number like quantity in our component, this will fail
    expect(screen.getByText(quantity)).toBeDefined();

  });

  test('Should increase count when +1 button is pressed', () => {
    render(<ItemCounter name='Increase Button' quantity={1} />);

    const [addButton] = screen.getAllByRole('button');

    // We use fireEvent and the method click to activate the event
    // Must be cautious because this will execute the code of the button
    // including APIs calls, and so on
    fireEvent.click(addButton);

    expect(screen.getByText(2)).toBeDefined();
  });

  test('Should decrease count when -1 button is pressed', () => {
    // Quantity must be 5
    render(<ItemCounter name='Decrease Button' quantity={5} />);

    const [, decreaseButton] = screen.getAllByRole('button');

    fireEvent.click(decreaseButton);

    expect(screen.getByText(4)).toBeDefined();
  });

  test('Should not decrease count when -1 button is pressed and quantity is 1', () => {
    render(<ItemCounter name='Not Decrease if' />);

    const [, decreaseButton] = screen.getAllByRole('button');

    fireEvent.click(decreaseButton);

    expect(screen.getByText(1)).toBeDefined();
  });

  test('Should change to red when count is 1', () => {
    const quantity = 1;
    const name = 'ItemCounter';

    render(<ItemCounter name={name} quantity={quantity} />);

    const itemCounterText = screen.getByText(name);

    // We can evaluate the itemCounterText's css properties because it is an
    // html element, so we will evaluate style.color 
    expect(itemCounterText.style.color).toBe('red');
  });

  test('Should change to black when count is greater than 1', () => {
    const quantity = 2;
    const name = 'ItemCounter';

    render(<ItemCounter name={name} quantity={quantity} />);

    const itemCounterText = screen.getByText(name);

    expect(itemCounterText.style.color).toBe('black');
  });
});