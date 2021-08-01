import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {MemoizedCounter} from "./Counter";

test("Should render the initial value", () => {
    const { getByText } = render(<MemoizedCounter value={0} />);
    const counterText = getByText("0");
    expect(counterText).toBeInTheDocument();
});

test("Should increase counter when + button is clicked, from 0 to 1", async () => {
    const { getByText } = render(<MemoizedCounter value={0} onCounterChange={() => {}} />);
    const addButton = getByText("+");
    fireEvent.click(addButton);
    const counterText = getByText("1");
    expect(counterText).toBeInTheDocument();
});

test("Should decrease counter when - button is clicked, from 0 to -1", async () => {
    const { getByText } = render(<MemoizedCounter value={0} onCounterChange={() => {}} />);
    const addButton = getByText("-");
    fireEvent.click(addButton);
    const counterText = getByText("-1");
    expect(counterText).toBeInTheDocument();
});