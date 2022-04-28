import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../style/AddPage.css";

const AddItemModal = ({ handleAddItem, show, onHide }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ name, content, image });
    show(false);
  };
  return (
    <Modal
      // {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form
          className="addPage"
          onSubmit={handleSubmit}
          // onSubmit={function (event) {
          //   event.preventDefault();
          //   //event.target은 결국 이 form태그에서 발생한 것이므로 target은 form 태그임!
          //   const inputName = event.target.inputName.value;
          //   const inputImg = event.target.inputImg.value;
          //   const inputText = event.target.inputText.value;

          //   //props를 통해 onCreate함수 호출하기!
          //   //이게 실행되면 app함수에 있는 onCreate함수가 실행된다!
          //   props.onCreate(inputName, inputImg, inputText);
          // }}
        >
          <div className="addPageBack">
            <span className="closeBtn" onClick={onHide}>
              X
            </span>
            <Form.Group>
              <Form.Label htmlFor="name" className="label">
                이름
              </Form.Label>
              <Form.Control
                id="inputName"
                name="name"
                className="input"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                htmlFor="inputImage"
                name="inputImg"
                className="label"
              >
                이미지
              </Form.Label>
              <Form.Control
                id="inputImage"
                name="image"
                className="input"
                placeholder="URL"
                required
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlfor="content" className="label">
                내용
              </Form.Label>
              <Form.Control
                id="inputText"
                name="content"
                className="input"
                required
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Button
              type="submit"
              value="Create"
              className="submitBtn"
              onClick={onHide}
            >
              저장
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddItemModal;
