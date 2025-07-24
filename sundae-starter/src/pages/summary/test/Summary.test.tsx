import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';
import SummaryForm from "../SummaryForm";

test('Initial conditions', () => {
    // render Summary Form
    render(<SummaryForm />);

    // find checkbox with name options
    const checkboxElement = screen.getByRole('checkbox', { name: /agree/i });

    // default checkbox should not be checked
    expect(checkboxElement).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const checkboxElement = screen.getByRole('checkbox', { name: /agree/i });
    const buttonElement = screen.getByRole('button', { name: /confirm order/i });

    await user.click(checkboxElement);
    expect(buttonElement).toBeEnabled();

    // button should be enabled after checkbox is checked
    await user.click(checkboxElement);
    expect(buttonElement).toBeDisabled();
});

test("popover responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // popover starts out hidden
    const nullPopoverEl = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopoverEl).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await userEvent.hover(termsAndConditions);
    const popoverEl = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popoverEl).toBeInTheDocument();

    // popover disappears when we mouse out
    await userEvent.unhover(termsAndConditions);
    expect(popoverEl).not.toBeInTheDocument();
});
