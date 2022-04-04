import React from "react";
import styles from "../style/Menu.module.css";

export default function Menu(props) {
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
            {
              props.topics.map(item=><li key={item.id}>{item.inputName}</li>)
            }
            {/* {content} */}
          </ul>
        </nav>
      </div>
    </>
  );
}
