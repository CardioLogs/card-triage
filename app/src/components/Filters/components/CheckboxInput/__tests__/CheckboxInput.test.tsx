/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import { CheckboxInput } from "../CheckboxInput";

describe("CheckboxInput", () => {
  const data = { name: "Test Option", isChecked: false };
  const onClick = jest.fn();

  it("renders correctly", () => {
    render(<CheckboxInput data={data} onClick={onClick} />);

    expect(screen.getByText("Test Option")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("updates checkbox state correctly", () => {
    const { rerender } = render(
      <CheckboxInput data={data} onClick={onClick} />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    rerender(
      <CheckboxInput data={{ ...data, isChecked: true }} onClick={onClick} />
    );

    expect(checkbox).toBeChecked();
  });
});
