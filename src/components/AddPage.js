import React, { useState } from "react";
import "../style/AddPage.css";

export default function AddPage() {
  const [isShow, setIsShow] = useState(false);

  function modalShow() {
    setIsShow(!isShow);
  }

  return (
    <form className="addPage">
      <div className="addPageBack">
        <span className="closeBtn" onClick={setIsShow}>
          X
        </span>
        <label htmlFor="inputName" className="label">
          이름
        </label>
        <input id="inputName" type="text" className="input" required />
        <label htmlFor="inputImage" className="label">
          이미지
        </label>
        <input
          id="inputImage"
          type="text"
          className="input"
          placeholder="URL"
          required
        />
        <label htmlFor="inputText" className="label">
          내용
        </label>
        <input id="inputText" type="text" className="input" required />
        <button type="submit" className="submitBtn" onClick={setIsShow}>
          저장
        </button>
      </div>
    </form>
  );
}
