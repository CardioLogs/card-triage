/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Card } from "../Card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("Card", () => {
  it("should render", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Card
          card={{
            patientName: "John",
            id: 0,
            status: "PENDING",
            arrhythmias: ["AFib", "AV Block", "Pause", "PSVC", "PVC"],
            createdDate: "2020-03-10T13:14:59+0000",
          }}
          currentSection="PENDING"
        />
      </DndProvider>
    );

    expect(screen.getByText("JOHN")).toBeDefined();
    expect(screen.getByText("AFib, AV Block, Pause, PSVC, PVC")).toBeDefined();
  });
});
