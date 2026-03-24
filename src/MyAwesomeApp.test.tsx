import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'

import { MyAwesomeApp } from "./MyAwesomeApp";

// To do tests with componentes we'll be using Testing Library
// Using container object
describe("MyAwesomeApp", () => {
  test("Should render firstName and lastName - container", () => {
    // We use the render function to load the component into the virtual jsdom
    const { container } = render(<MyAwesomeApp />)
    // We use the screen function to search and see the dom
    screen.debug();

    // We can use the container object to search the elements
    // querySelector method will get the first element of the dom
    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    // We use toContain method because the element has spaces
    expect(h1?.innerHTML).toContain('Alberto');
    expect(h3?.innerHTML).toContain('Aleman');
  });
});

// Using screen function
describe("MyAwesomeApp", () => {
  test("Should render firstName and lastName - screen", () => {
    // We only need to render the component
    render(<MyAwesomeApp />)

    // const h1 = screen.getByRole('heading', {
    //   level: 1
    // });
    const h1 = screen.getByTestId('first-name-title');
    const h3 = screen.getByTestId('last-name-title');

    // We use toContain method because the element has spaces
    expect(h1?.innerHTML).toContain('Alberto');
    expect(h3?.innerHTML).toContain('Aleman');
  });

  test('Should match the snapshot - container', () => {
    const { container } = render(<MyAwesomeApp />)

    // toMatchSnapshot takes a 'copy' of the HTML and compares it, if something's
    // different, the test fail
    expect(container).toMatchSnapshot();
  });

  test('Should match the snapshot - screen', () => {
    render(<MyAwesomeApp />)

    // It is not reccomended to use data-testid because the app can run
    // without it, so someone could delete them and the app will still work
    // but the tests will fail
    expect(screen.getByTestId('my-awesome-app-id')).toMatchSnapshot();
  });
});