import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const FiltersContext = createContext<{
  activePatientName: string[];
  activeArrhythmias: string[];
  setActivePatienName: Dispatch<SetStateAction<string[]>>;
  setArrhythmias: Dispatch<SetStateAction<string[]>>;
}>({
  activePatientName: [],
  activeArrhythmias: [],

  setActivePatienName: () => {},
  setArrhythmias: () => {},
});

interface ProviderProps {
  children?: ReactNode;
}

export const FiltersProvider = ({ children }: ProviderProps) => {
  const [activePatientName, setActivePatienName] = useState<string[]>([]);
  const [activeArrhythmias, setArrhythmias] = useState<string[]>([]);

  return (
    <FiltersContext.Provider
      value={{
        activeArrhythmias: activeArrhythmias,
        activePatientName: activePatientName,
        setArrhythmias: setArrhythmias,
        setActivePatienName: setActivePatienName,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
