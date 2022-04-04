import React from "react";
import styles from "../style/Menu.module.css";

export default function Menu(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>{t.inputName}</li>);
  }

  return (
    <>
      <div className="main">
        <nav className={styles.menu}>
          <button
            type="button"
            className={styles.addBtn}
            onClick={() => props.handleClick(true)}
          >
            추가
          </button>
          <ul>
            {lis}
            {/* {content} */}
          </ul>
        </nav>
      </div>
    </>
  );
}
