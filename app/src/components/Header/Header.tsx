import { type FC } from "react";

import styles from "./Header.module.scss";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return <header className={styles.root}>This is a header</header>;
};

Header.displayName = "Header";
