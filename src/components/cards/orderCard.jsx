import React from "react";
import RoundedButton from "../buttons/roundedButton";
import MessageCircle from "../icons/messageCircle";
import FileText from "../icons/filetext";

function orderCard({ status, timeLimit, contactName, createdAt, id }) {
  const types = ["pending", "delayed", "doing"];

  const cardType = types.includes(status) ? status : types[0];

  return (
    <div className="order-card">
      <div className={`order-card__status ${cardType}`}>
        <span className="order-card__timeLimit">
          {" "}
          Previsão {timeLimit} {status === "doing" ? "(Em andamento)" : ""}
        </span>
      </div>
      <div className="order-card__body">
        <div className="order-card__info">
          <span className="order-card__peopleName">{contactName}</span>
          <span className="order-card__createdAt">Solicitado {createdAt}</span>
        </div>
        <div className="order-card__actions">
          <RoundedButton content={<MessageCircle fill="none" />} />
          <RoundedButton palette="blue" content={<FileText fill="none" />} />
        </div>
      </div>
    </div>
  );
}

export default orderCard;
