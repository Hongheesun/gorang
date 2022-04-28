import React, { useState } from "react";
import "../style/AddPage.css";

const AddPage = ({ handleAddItem, show }) => {
  const [isShow, setIsShow] = useState(false);

  function modalShow() {
    setIsShow(!isShow);
  }

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ name, content, image });
    show(false);
    // onHide();
  };

  return (
    <form className="addPage" onSubmit={handleSubmit}>
      <div className="addPageBack">
        <span className="closeBtn" onClick={show}>
          X
        </span>
        <label htmlFor="name" className="label">
          이름
        </label>
        <input
          id="inputName"
          type="text"
          className="input"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="image" className="label">
          이미지
        </label>
        <input
          id="inputImage"
          type="text"
          className="input"
          placeholder="URL"
          required
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <input
          id="inputText"
          type="text"
          className="input"
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submitBtn" onClick={show(false)}>
          저장
        </button>
      </div>
    </form>
  );
};
export default AddPage;
