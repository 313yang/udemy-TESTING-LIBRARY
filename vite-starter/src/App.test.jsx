import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { kebapCaseToTitleCase } from "./helpers";

test("button click flow", () => {
  // render App
  render(<App />);

  // find the button
  const buttonElement = screen.getByRole('button', {name: /blue/i});

  // check initial color
  expect(buttonElement).toHaveClass('medium-violet-red');

  // click the button
  fireEvent.click(buttonElement);

  // check if the color changed
  expect(buttonElement).toHaveClass('midnight-blue');

  // check the button text
  expect(buttonElement).toHaveTextContent(/red/i);
});

test('checkbox flow', () => {
  // render App
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole('button', {name: /blue/i});
  const checkboxElement = screen.getByRole('checkbox', {name: /disable button/i});

  //check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  
  // click the checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveClass('gray');

  // click checkbox to again enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).not.toBeDisabled();
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toHaveClass('medium-violet-red');

  // click the change color button
  fireEvent.click(buttonElement);

  // check if the color changed
  expect(buttonElement).toHaveClass('midnight-blue');
  expect(buttonElement).toHaveTextContent(/red/i);

  // click the checkbox again
  fireEvent.click(checkboxElement);

  // check button is disabled and color is gray
  expect(buttonElement).toBeDisabled();
});

test('checkbox flow after button click', () => {
  // render App
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole('button', {name: /blue/i});
  const checkboxElement = screen.getByRole('checkbox', {name: /disable button/i});

  // click button to change to blue
  fireEvent.click(buttonElement);

  //click the checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('gray');

  //ckick checkbox again to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).not.toBeDisabled();
  expect(buttonElement).toHaveClass('midnight-blue');
});

// Unit test
describe('kebapCaseToTitleCase', () => {
  test('works for no hypens',() => {
    expect(kebapCaseToTitleCase('red')).toBe('Red');
  })
  test('works for one hypen',() => {
    expect(kebapCaseToTitleCase('midnight-blue')).toBe('Midnight Blue');
  })
  test('works for multiple hypens',() => {
    expect(kebapCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red');
  })
});
