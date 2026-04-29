import { useState } from "react";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Header from "./components/Header";
import "./styles/style.css";

function App() {
  const [modalSrc, setModalSrc] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleImageClick(src) {
    setModalSrc(src);
    setModalVisible(true);
  }

  function handleClose() {
    setModalVisible(false);
  }

  return (
    <>
      

      <Header/>
      <Main onImageClick={handleImageClick} />

      <Modal src={modalSrc} visible={modalVisible} onClose={handleClose} />
    </>
  );
}

export default App;