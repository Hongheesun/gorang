import React, { useState } from "react";
import Menu from "./Menu";
import MainContents from "./MainContents";
import AddItemModal from "./AddItemModal";
import AddPage from "./AddPage";

import soju from "../img/soju.png";
import beer from "../img/beer.jpg";
import champagne from "../img/champagne.jpg";
import wine from "../img/wine.jpg";
import rum from "../img/rum.jpg";

export default function Main() {
  // const [id, setId] = useState(null);
  // //id값을 별도로 관리해주기 위해서
  // const [nextId, setNextId] = useState(4);
  const [data, setData] = useState([
    {
      id: 1,
      name: "소주",
      image: soju,
      content: "저는 소주 안 좋아해요",
    },
    {
      id: 2,
      name: "럼",
      image: rum,
      content: "먹어본 적이 없을 무!",
    },
    {
      id: 3,
      name: "와인",
      image: wine,
      content: "와인의 매력을 아직 깨닫지 못했어요.",
    },
    {
      id: 4,
      name: "샴페인",
      image: champagne,
      content: "샴페인 좋아요~ 샴페인 좋아요~",
    },
    {
      id: 5,
      name: "맥주",
      image: beer,
      content: "애플퐉스같은 맛있는 맥주가 좋아요.",
    },
  ]);

  // const [data, setData] = useState(initData);
  const [addItemModalOn, setAddItemModal] = useState(false);
  // let content = null;
  // let len = topics.length;

  // content = (
  //   <AddItemModal
  //     onCreate={(_inputName, _inputImg, _inputText) => {
  //       //새로운 객체 생성해주기!
  //       const newTopic = {
  //         id: len + 1,
  //         inputName: _inputName,
  //         inputImg: _inputImg,
  //         inputText: _inputText,
  //       };
  //       const newTopics = [...topics];
  //       newTopics.push(newTopic);
  //       setTopics(newTopics);
  //       // setId(nextId);
  //       // setNextId(nextId + 1);
  //     }}
  //   ></AddItemModal>
  // );
  let handleAddItem = (item) => {
    setData([...data, item]);
  };
  return (
    <div className="main">
      <Menu
        data={data}
        handleClick={setAddItemModal}
        // content={content}
        // onChangeMode={(_id) => {
        //   setId(_id);
        // }}
      ></Menu>
      <MainContents data={data}></MainContents>
      <AddPage
        handleAddItem={handleAddItem}
        show={() => setAddItemModal(true)}
        // onHide={() => setAddItemModal(false)}
      />
    </div>
  );
}
