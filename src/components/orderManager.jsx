import React from "react";
import Check from "./icons/check";
import Plus from "./icons/plus";
import RoundedButton from "./buttons/roundedButton";
import Trash from "./icons/trash";

function OrderManager({ onActionFirstButton, onActionSecondButton, handleExclude, id, name, createdDate, description }) {
  return (
    <div className="order-details">
      <div className="order-details__header">
        <div className="order-details__header-left">
          <h4 className="order-details__customer-name">Pedido {name}</h4>
          <span className="order-details__timer">Solicitado {createdDate}</span>
        </div>
      </div>
      <div className="order-details__content">{description}</div>
      <div className="order-details__buttons">
        <RoundedButton onClick={() => handleExclude(id)} palette="red" content={<span>Cancelar pedido</span>} />
        <RoundedButton onClick={() => handleExclude(id)} palette="green" content={<span>Concluir pedido</span>} />
      </div>
    </div>
  );
}

export default OrderManager;
