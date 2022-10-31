import styles from "../styles/components/Navigation.module.css";

import { Trophy, User, House, List } from "phosphor-react";
import { useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState(true);

  function handleToggleNavigationBar() {
    setActive((prev) => !prev);
  }
  return (
    <div className={styles.navigationContainer}>
      {active && (
        <div className={styles.navigationConst}>
          <img src="/iconMoveIt.svg" alt="" />
          <div className={styles.navbar}>
            <House size={30} />
            <Trophy size={30} />
            <User size={30} />
          </div>
          <button>Sair</button>
        </div>
      )}
      <button onClick={handleToggleNavigationBar}>
        <List size={30} />
      </button>
    </div>
  );
}
