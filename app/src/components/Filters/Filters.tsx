import { type FC, useContext } from "react";

import styles from "./Filters.module.scss";
import { FiltersContext } from "./FiltersProvider";
import { Card } from "../../services/cardsEndpoint/interfaces";
import { FilterSection } from "./components/FilterSection/FilterSection";
import classNames from "classnames";

interface Props {
  className?: string;
  cards: Card[];
}

export const Filters: FC<Props> = ({ className, cards }) => {
  const {
    activeArrhythmias,
    activePatientName,
    setActivePatienName,
    setArrhythmias,
  } = useContext(FiltersContext);

  const filterArrhythmias = (arrhythmia: string) => {
    if (activeArrhythmias.includes(arrhythmia)) {
      setArrhythmias(activeArrhythmias.filter((arr) => arr !== arrhythmia));
    } else {
      setArrhythmias([...activeArrhythmias, arrhythmia]);
    }
  };

  const filterPatientName = (patientName: string) => {
    if (activePatientName.includes(patientName)) {
      setActivePatienName(
        activePatientName.filter((name) => name !== patientName)
      );
    } else {
      setActivePatienName([...activePatientName, patientName]);
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <FilterSection
        title="Patient name"
        setData={(key) => filterPatientName(key)}
        data={cards.map((card) => ({
          name: card.patientName,
          isChecked: activePatientName.includes(card.patientName),
        }))}
      />
      <FilterSection
        title="Arrhythmias"
        setData={(key) => filterArrhythmias(key)}
        data={cards
          .map((card) => card.arrhythmias)
          .flat()
          .filter((arrhythmia, index, arr) => arr.indexOf(arrhythmia) === index)
          .map((arrhythmia) => ({
            name: arrhythmia,
            isChecked: activeArrhythmias.includes(arrhythmia),
          }))}
      />
    </div>
  );
};

Filters.displayName = "Filters";
