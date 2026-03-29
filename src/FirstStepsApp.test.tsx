import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

// When we create a mock, vitest 'intercepts' the rendering components and create
// a 'fictional' ones
// vi.mock('./shopping-cart/ItemCounter', (props: unknown) => ({
// This is a way to receive and use props of the components inside a mock
// but there is another way
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid='ItemCounter'
//       name={props.name}
//       quantity={props.quantity}
//     />
//   )
// }));

// With this we separate the component render and vitest can create an 'spy'
// so it can known if the component was called and so on
const mockItemCounter = vi.fn((_props: unknown) => {
  return (<div data-testid='ItemCounter' />);
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  // And here we 'inject the spy' into de module system of vitest
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepsApp', () => {

  // After each test we clear all mocks so it can count 'fresh' inside every test
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test('Should render the correct number of itemCounter components', () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId('ItemCounter');

    expect(itemCounters.length).toBe(3);

    // screen.debug();
  });

  test('Should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    // With the spy injected we can know how many times it was called the component
    // instead of searching data-testid and counting
    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    // And also we do not render the props, but we have them so we can test
    // it with this method
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Nintendo Switch 2',
      quantity: 2
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Pro Controller',
      quantity: 1
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Super Smash',
      quantity: 5
    });
  });
});