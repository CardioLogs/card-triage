import { useState, type FC } from "react";

import styles from "./FilterSection.module.scss";
import classnames from "classnames";
import { FilterData } from "../../interfaces";
import { CheckboxInput } from "../CheckboxInput/CheckboxInput";
import { CrossSvg } from "../CrossSvg/CrossSvg";

interface Props {
  className?: string;
  title: string;
  data: FilterData[];
  setData: (key: string) => void;
}

export const FilterSection: FC<Props> = ({
  className,
  title,
  data,
  setData,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.titleContainer}>
        {title}
        <CrossSvg
          className={classnames({ [styles.isClicked]: isExpanded })}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>

      <div
        className={classnames(styles.content, {
          [styles.isExpanded]: isExpanded,
        })}
      >
        <div className={styles.inputContainer}>
          {data.map((data) => (
            <CheckboxInput
              className={styles.input}
              key={data.name}
              data={data}
              onClick={() => setData(data.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

FilterSection.displayName = "FilterSection";
