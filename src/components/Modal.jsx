import { useState } from "react";

function Modal({ src, visible, onClose }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`modal${visible ? " mostrar" : ""}`}>
      <div className="modal-overlay">
        <img
          loading="lazy"
          src={src}
          alt=""
          className={`img-modal${loaded ? " loaded" : ""}`}
          onLoad={() => setLoaded(true)}
          key={src}
        />
        <button className="btn-cerrar" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
}

export default Modal;