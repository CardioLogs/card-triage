import { type FC } from "react";

import styles from "./Section.module.scss";
import { useDrop } from "react-dnd";
import classnames from "classnames";
import { Card } from "../../../Card/Card";
import {
  Card as CardInterface,
  CardStatus,
} from "../../../../services/cardsEndpoint/interfaces";

interface Props {
  className?: string;
  cards: CardInterface[];
  sectionName: string;
  isLoading: boolean;
  onDrop: (item: any, sectionName: CardStatus) => void;
}

export const Section: FC<Props> = ({
  className,
  cards,
  sectionName,
  isLoading,
  onDrop,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "cards",
    drop: (item: any) => onDrop(item, sectionName.toUpperCase() as CardStatus),
    canDrop: (item: any) => {
      return item?.currentSection !== sectionName;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <li ref={drop} className={classnames(styles.root, className)}>
      <div className={styles.title}>{sectionName}</div>
      <div
        className={classnames(styles.content, {
          [styles.isLoading]: isLoading,
        })}
        data-testid={`sectionContent-${sectionName}`}
      >
        {!isOver && canDrop ? (
          <div className={styles.canDropContainer}>
            <div className={styles.canDrop} />
          </div>
        ) : null}
        {isOver && canDrop ? (
          <div className={styles.isOverContainer}>
            <div className={styles.isOver} />
          </div>
        ) : null}
        {cards.map((card) => (
          <Card
            key={card.id}
            className={styles.card}
            card={card}
            currentSection={sectionName}
          />
        ))}
      </div>
    </li>
  );
};

Section.displayName = "Section";
