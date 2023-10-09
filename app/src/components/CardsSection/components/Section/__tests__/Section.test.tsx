/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Section } from "../Section";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("Section", () => {
  it("should render", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Section
          cards={[
            {
              patientName: "John",
              id: 0,
              status: "PENDING",
              arrhythmias: ["AFib", "AV Block", "Pause", "PSVC", "PVC"],
              createdDate: "2020-03-10T13:14:59+0000",
            },
            {
              patientName: "Mary",
              id: 1,
              status: "PENDING",
              arrhythmias: ["PSVC", "PVC"],
              createdDate: "2020-02-10T13:14:59+0000",
            },
          ]}
          sectionName="Pending"
          onDrop={jest.fn()}
        />
      </DndProvider>
    );

    expect(screen.getByText("Pending")).toBeDefined();

    expect(screen.getByText("JOHN")).toBeDefined();
    expect(screen.getByText("AFib, AV Block, Pause, PSVC, PVC")).toBeDefined();

    expect(screen.getByText("MARY")).toBeDefined();
    expect(screen.getByText("PSVC, PVC")).toBeDefined();
  });
});
