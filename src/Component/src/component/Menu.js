// import React, { useState } from "react";
import React from "react";
import styles from "../style/Menu.module.css";
// import AddItemModal from "./AddItemModal";

export default function Menu(props) {
  // const [addItemModalOn, setAddItemModal] = useState(false);
  // const lis = [];
  // for (let i = 0; i < props.topics.length; i++) {
  //   let t = props.topics[i];
  //   lis.push(<li key={t.id}>{t.inputName}</li>);
  // }

  return (
    <>
      {/* <AddItemModal
        show={addItemModalOn}
        onHide={() => setAddItemModal(false)}
        // onCreate={(_inputName, _inputImg, _inputText) => {
        //   //새로운 객체 생성해주기!
        //   const newTopic = {
        //     id: nextId,
        //     inputName: _inputName,
        //     inputImg: _inputImg,
        //     inputText: _inputText,
        //   };
        //   const newTopics = [...props.topics];
        //   newTopics.push(newTopic);
        //   props.setTopics(newTopics);
        //   setId(nextId);
        //   setNextId(nextId + 1);
        // }}
      /> */}
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
            {props.data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
            {/* {lis} */}
            {/* {content} */}
          </ul>
        </nav>
      </div>
    </>
  );
}
