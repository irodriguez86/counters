import React from "react";
import {fireEvent, getByText, render, within} from "@testing-library/react";
import App from "./App";

// Five 0s since there are 4 counters and the total count
test("should show 5 initial 0s", () => {
    const { getAllByText } = render(<App />);
    const linkElement = getAllByText("0");
    expect(linkElement.length).toEqual(5);
});

test("Should add 1 to the total counter when a counter + is clicked", async () => {
  const { getAllByText, getByTestId } = render(<App />);
  const firstAddButton = getAllByText("+")[0];
  fireEvent.click(firstAddButton);
  const { getByText } = within(getByTestId('total-count-id'));
  expect(getByText('1')).toBeTruthy();
});

test("Should subtract 1 to the total counter when a counter - is clicked", async () => {
  const { getAllByText, getByTestId } = render(<App />);
  const firstAddButton = getAllByText("-")[0];
  fireEvent.click(firstAddButton);
  const { getByText } = within(getByTestId('total-count-id'));
  expect(getByText('-1')).toBeTruthy();
});