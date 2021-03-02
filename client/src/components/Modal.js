import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active ">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui basic modal visible active inverted"
      >
        <div className="ui icon header">
          <i className="trash icon"></i>
          {props.title}
        </div>
        <div className="content ui segment">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
