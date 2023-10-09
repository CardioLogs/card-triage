import { useDrag } from "react-dnd";

import styles from "./Card.module.scss";
import classnames from "classnames";
import { Card as CardInterface } from "../../services/cardsEndpoint/interfaces";

interface Props {
  className?: string;
  currentSection: string;
  card: CardInterface;
}

export const Card: React.FC<Props> = ({
  className,
  card: { patientName, id, status, arrhythmias },
  currentSection,
}) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "cards",
      item: { currentSection: currentSection, id: id },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0 : 1,
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div
      className={classnames(
        styles.root,
        {
          [styles.pending]: status === "PENDING",
          [styles.done]: status === "DONE",
          [styles.rejected]: status === "REJECTED",
        },
        className
      )}
      ref={dragRef}
      style={{ opacity }}
    >
      <div className={styles.patientName}>{patientName.toUpperCase()}</div>
      <div className={styles.arrhythmias}>{arrhythmias.join(", ")}</div>
    </div>
  );
};

Card.displayName = "Card";
