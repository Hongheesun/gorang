import React from "react";
import styles from "../style/MainContents.module.css";

function MainContents(props) {
  // const lis = [];
  // for (let i = 0; i < props.topics.length; i++) {
  //   let t = props.topics[i];
  //   lis.push(
  //     <div className={styles.mainbox} key={t.id}>
  //       <img alt={t.inputName} src={t.inputImg}></img>
  //       <span>{t.inputText}</span>
  //     </div>
  //   );
  // }
  return (
    <section className={styles.mainContents}>
      {props.data.map((item) => (
        <div className={styles.mainbox} key={item.id}>
          <img alt={item.name} src={item.image}></img>
          <span>{item.content}</span>
        </div>
      ))}
    </section>
  );
}

export default MainContents;
