import React from "react";
import RoundedButton from "./buttons/roundedButton";
import Check from "./icons/check";
import Plus from "./icons/plus";
import Close from "./icons/close";

function OrderManager() {
  return (
    <div className="order-details">
      <div className="order-details__header">
        <h4 className="order-details__customer-name">Pedido de João</h4>
        <h4 className="order-details__timer">Tempo restante: 04:32</h4>
      </div>
      <div className="order-details__content">
        <div className="order-details__content-row">
          <div className="order-details__content-info">
            <div className="order-details__product-timer">5 minutos</div>
            <div className="order-details__product-name-quantity">1x X-Salada Bacon</div>
          </div>
          <div className="order-details__actions">
            <RoundedButton palette="red" content={<Close fill="transparent" />} />
            <RoundedButton palette="green" content={<Check fill="transparent" />} />
          </div>
        </div>
      </div>
      <div className="order-details__buttons">
        <button className="order-details__btn" id="confirm">
          <Check fill="transparent" />
          Concluir pedido
        </button>
        <button className="order-details__btn" id="new">
          <Plus fill="transparent" />
          Novo pedido
        </button>
      </div>
    </div>
  );
}

export default OrderManager;
