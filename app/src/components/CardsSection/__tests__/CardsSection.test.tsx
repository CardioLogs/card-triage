/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { CardsSection } from "../CardsSection";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("CardsSection", () => {
  it("should render", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <CardsSection
          cards={[
            {
              patientName: "John",
              id: 0,
              status: "PENDING",
              arrhythmias: ["AFib", "AV Block", "Pause", "PSVC", "PVC"],
              createdDate: "2020-03-10T13:14:59+0000",
            },
            {
              patientName: "Leon",
              id: 5,
              status: "DONE",
              arrhythmias: ["Pause"],
              createdDate: "2020-08-10T13:14:59+0000",
            },
            {
              patientName: "Mary",
              id: 1,
              status: "REJECTED",
              arrhythmias: ["PSVC", "PVC"],
              createdDate: "2020-02-10T13:14:59+0000",
            },
            {
              patientName: "Jason",
              id: 27,
              status: "REJECTED",
              arrhythmias: [],
              createdDate: "2020-02-10T13:14:59+0000",
            },
          ]}
          setCards={jest.fn()}
        />
      </DndProvider>
    );

    // screen.debug();

    expect(screen.getByText("Pending")).toBeDefined();
    expect(screen.getByText("Done")).toBeDefined();
    expect(screen.getByText("Rejected")).toBeDefined();

    expect(screen.getByText("JOHN")).toBeDefined();
    expect(screen.getByText("AFib, AV Block, Pause, PSVC, PVC")).toBeDefined();

    expect(screen.getByText("MARY")).toBeDefined();
    expect(screen.getByText("PSVC, PVC")).toBeDefined();

    expect(screen.getByText("MARY")).toBeDefined();

    const pendingContent = screen.getByTestId("sectionContent-Pending");
    // eslint-disable-next-line testing-library/no-node-access
    expect(pendingContent.children.length).toBe(1);
    const doneContent = screen.getByTestId("sectionContent-Done");
    // eslint-disable-next-line testing-library/no-node-access
    expect(doneContent.children.length).toBe(1);
    const rejectedContent = screen.getByTestId("sectionContent-Rejected");
    // eslint-disable-next-line testing-library/no-node-access
    expect(rejectedContent.children.length).toBe(2);
  });
});
