import React, { useState } from "react";
import Menu from "./Menu";
import MainContents from "./MainContents";
import AddItemModal from "./AddItemModal";

import soju from "../img/soju.png";
import beer from "../img/beer.jpg";
import champagne from "../img/champagne.jpg";
import wine from "../img/wine.jpg";
import rum from "../img/rum.jpg";

export default function Main() {
  const [topics, setTopics] = useState([
    {
      id: 1,
      inputName: "소주",
      inputImg: soju,
      inputText: "저는 소주 안 좋아해요",
    },
    {
      id: 2,
      inputName: "럼",
      inputImg: rum,
      inputText: "먹어본 적이 없을 무!",
    },
    {
      id: 3,
      inputName: "와인",
      inputImg: wine,
      inputText: "와인의 매력을 아직 깨닫지 못했어요.",
    },
    {
      id: 4,
      inputName: "샴페인",
      inputImg: champagne,
      inputText: "샴페인 좋아요~ 샴페인 좋아요~",
    },
    {
      id: 5,
      inputName: "맥주",
      inputImg: beer,
      inputText: "애플퐉스같은 맛있는 맥주가 좋아요.",
    },
  ]);
  let content = null;
  let len = topics.length

  content = (
    <AddItemModal
      onCreate={(_inputName, _inputImg, _inputText) => {
        //새로운 객체 생성해주기!
        const newTopic = {
          id: len+1,
          inputName: _inputName,
          inputImg: _inputImg,
          inputText: _inputText,
        };
        const newTopics = [...topics];
        newTopics.push(newTopic);
        setTopics(newTopics);
      }}
    ></AddItemModal>
  );

  return (
    <div className="main">
      <Menu
        topics={topics}
        content={content}
      ></Menu>
      <MainContents topics={topics}></MainContents>
    </div>
  );
}
