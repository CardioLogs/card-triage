/**
 * @jest-environment jsdom
 */

import { act, fireEvent, render, screen } from "@testing-library/react";
import { FilterSection } from "../FilterSection";

describe("FilterSection", () => {
  const data = [
    { name: "Option 1", isChecked: false },
    { name: "Option 2", isChecked: true },
    { name: "Option 3", isChecked: false },
  ];

  it("renders correctly", () => {
    render(
      <FilterSection title="Test Title" data={data} setData={jest.fn()} />
    );

    expect(screen.getByText("Test Title")).toBeDefined();
    expect(screen.getByText("Option 1")).toBeDefined();
    expect(screen.getByText("Option 2")).toBeDefined();
    expect(screen.getByText("Option 3")).toBeDefined();
  });

  it("expands and collapses correctly", () => {
    render(
      <FilterSection title="Test Title" data={data} setData={jest.fn()} />
    );

    const crossSvg = screen.getByTestId("cross-svg");

    expect(crossSvg.classList).toContain("isClicked");

    fireEvent.click(crossSvg);

    act(() => {
      expect(crossSvg.classList).not.toContain("isClicked");
    });
  });

  it("calls setData correctly", () => {
    const setData = jest.fn();

    render(<FilterSection title="Test Title" data={data} setData={setData} />);

    const option1 = screen.getAllByRole("checkbox")[0];
    const option2 = screen.getAllByRole("checkbox")[1];

    fireEvent.click(option1);
    expect(setData).toHaveBeenCalledWith("Option 1");

    fireEvent.click(option2);
    expect(setData).toHaveBeenCalledWith("Option 2");
  });
});
