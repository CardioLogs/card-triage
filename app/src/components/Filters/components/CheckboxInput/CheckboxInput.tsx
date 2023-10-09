import { type FC } from "react";

import styles from "./CheckboxInput.module.scss";
import classnames from "classnames";
import { FilterData } from "../../interfaces";

interface Props {
  className?: string;
  data: FilterData;
  onClick: () => void;
}

export const CheckboxInput: FC<Props> = ({ className, data, onClick }) => {
  const { isChecked, name } = data;
  return (
    <div className={classnames(styles.root, className)}>
      <input
        id={name}
        type="checkbox"
        checked={isChecked}
        onClick={() => {
          onClick();
        }}
        onChange={() => {
          onClick();
        }}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

CheckboxInput.displayName = "CheckboxInput";
