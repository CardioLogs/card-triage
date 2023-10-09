/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";
import { Filters } from "../Filters";
import { FiltersContext } from "../FiltersProvider";
import { Card } from "../../../services/cardsEndpoint/interfaces";

describe("Filters", () => {
  const cards: Card[] = [
    {
      id: 1,
      patientName: "John Doe",
      arrhythmias: ["AFib", "AV Block", "Pause", "PSVC", "PVC"],
      status: "PENDING",
      createdDate: "2020-03-10T13:14:59+0000",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      arrhythmias: ["PSVC", "PVC"],
      status: "PENDING",
      createdDate: "2020-03-10T13:14:59+0000",
    },
  ];

  it("renders correctly", () => {
    render(
      <FiltersContext.Provider
        value={{
          activePatientName: [],
          activeArrhythmias: [],
          setActivePatienName: jest.fn(),
          setArrhythmias: jest.fn(),
        }}
      >
        <Filters cards={cards} />
      </FiltersContext.Provider>
    );

    expect(screen.getByText("Patient name")).toBeDefined();
    expect(screen.getByText("Arrhythmias")).toBeDefined();
    expect(screen.getByText("John Doe")).toBeDefined();
    expect(screen.getByText("Jane Smith")).toBeDefined();
    expect(screen.getByText("AFib")).toBeDefined();
    expect(screen.getByText("AV Block")).toBeDefined();
    expect(screen.getByText("Pause")).toBeDefined();
    expect(screen.getByText("PSVC")).toBeDefined();
    expect(screen.getByText("PVC")).toBeDefined();
  });

  it("filters patient names correctly", () => {
    const setActivePatientName = jest.fn();
    const activePatientName = ["John Doe"];

    render(
      <FiltersContext.Provider
        value={{
          activePatientName,
          activeArrhythmias: [],
          setActivePatienName: setActivePatientName,
          setArrhythmias: jest.fn(),
        }}
      >
        <Filters cards={cards} />
      </FiltersContext.Provider>
    );

    const johnDoeCheckbox = screen.getByLabelText("John Doe");
    const janeSmithCheckbox = screen.getByLabelText("Jane Smith");

    expect(johnDoeCheckbox).toBeChecked();
    expect(janeSmithCheckbox).not.toBeChecked();

    fireEvent.click(janeSmithCheckbox);

    expect(setActivePatientName).toHaveBeenCalledWith([
      "John Doe",
      "Jane Smith",
    ]);
  });

  it("filters arrhythmias correctly", () => {
    const setArrhythmias = jest.fn();
    const activeArrhythmias = ["AV Block"];

    render(
      <FiltersContext.Provider
        value={{
          activeArrhythmias,
          activePatientName: [],
          setArrhythmias: setArrhythmias,
          setActivePatienName: jest.fn(),
        }}
      >
        <Filters cards={cards} />
      </FiltersContext.Provider>
    );

    const avBlockCheckbox = screen.getByLabelText("AV Block");
    const pauseCheckbox = screen.getByLabelText("Pause");

    expect(avBlockCheckbox).toBeChecked();
    expect(pauseCheckbox).not.toBeChecked();

    fireEvent.click(pauseCheckbox);

    expect(setArrhythmias).toHaveBeenCalledWith(["AV Block", "Pause"]);
  });
});
