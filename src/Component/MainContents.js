import React from "react";
import styles from "../style/MainContents.module.css";

function MainContents(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <div className={styles.mainbox} key={t.id}>
        <img alt={t.inputName} src={t.inputImg}></img>
        <span>{t.inputText}</span>
      </div>
    );
  }
  return <section className={styles.mainContents}>{lis}</section>;
}

export default MainContents;
