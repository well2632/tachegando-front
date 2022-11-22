import React from "react";
import Header from "../components/header";
import OrderCard from "../components/cards/orderCard";
import OrderManager from "../components/orderManager";

function home() {
  return (
    <>
      <Header />
      <div className="page" id="home">
        <div className="order-list">
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" status="doing" />
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" status="delayed" />
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" />
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" />
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" />
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" />
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" />
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" />
          <OrderCard contactName="Robson" createdAt="14:00" timeLimit="15:00" />
        </div>
        <div className="content">
          <OrderManager />
        </div>
      </div>
    </>
  );
}

export default home;
