import React, { useEffect, useState } from "react";
import Header from "../components/header";
import OrderCard from "../components/cards/orderCard";
import OrderManager from "../components/orderManager";
import api from "../utils/api";
import moment from "moment-timezone";
import Modal from "../components/modal";
import CreateOrderForm from "../components/forms/createOrderForm";
import Plus from "../components/icons/plus";

function Home() {
  const [orders, setOrders] = useState();
  const [hideModal, setHideModal] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState();

  async function fetchData() {
    const response = await api.get("order");

    setOrders(
      response.data.map((element) => ({
        contactName: element.contact_name,
        estimatedTime: element.estimated_time,
        createdAt: moment(element.created_at).tz("America/Sao_Paulo").format("HH:mm"),
        id: element.id,
      }))
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleExclude(id) {
    const response = await api.delete(`order/${id}`);
    if (response.status === 200) {
      setSelectedOrder(null);
      fetchData();
    } else {
      alert("Erro ao excluir");
    }
  }

  async function handleSelectOrder(id) {
    const response = await api.get(`order/${id}`);
    const orderMapped = {
      id: response.data.id,
      name: response.data.contact_name,
      description: response.data.description,
      contact_phone: response.data.phone,
      createdAt: moment(response.data.created_at).tz("America/Sao_Paulo").format("HH:mm"),
    };
    setSelectedOrder(orderMapped);
    console.log(orderMapped);
  }

  async function handleNewOrder() {
    fetchData();
    setHideModal(true);
  }

  return (
    <>
      <Header />
      {!hideModal && (
        <Modal
          close={() => {
            setHideModal(true);
          }}
        >
          <CreateOrderForm handleNewOrder={handleNewOrder} onClickCancel={() => setHideModal(true)} />
        </Modal>
      )}
      <div className="page" id="home">
        <div className="order-list">
          {orders &&
            orders.map((element) => (
              <OrderCard
                key={element.id}
                id={element.id}
                contactName={element.contactName}
                timeLimit={element.estimatedTime}
                createdAt={element.createdAt}
                selectOrder={handleSelectOrder}
              />
            ))}
        </div>
        <div className="content">
          {selectedOrder && (
            <OrderManager
              name={selectedOrder.name}
              id={selectedOrder.id}
              createdDate={selectedOrder.createdAt}
              description={selectedOrder.description}
              onActionFirstButton={() => console.log("teste")}
              handleExclude={handleExclude}
            />
          )}
          {!selectedOrder && <div className="no-order">Criar uma ordem para continuar</div>}
          <button className="order-details__btn" id="new" onClick={() => setHideModal(false)}>
            <Plus fill="transparent" />
            Novo pedido
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
