import React, { useState, useContext } from "react";
import style from "./Card.module.css";
import ReactModal from "react-modal";
import Addexpensemodal from "../Modal/Addexpensemodal";
import { Contextobj } from "../../store/Contextobj";
import Editexpensemodal from "../Modal/Editexpensemodal";
// Set root element for accessibility
ReactModal.setAppElement("#modal");

const Card = ({ title, value, btn, green }) => {
  const { incrementBalance } = useContext(Contextobj);
  const [modalOpen, setModalOpen] = useState(false);
  const cardStyle = green ? style.greenCard : style.redCard;

  const onAddExpense = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={style.card}>
        <h5 className={style.title}>
          {title}
          <span>{value}</span>
        </h5>
        <button onClick={onAddExpense} className={`${style.btn} ${cardStyle}`}>
          {btn}
        </button>
      </div>

      {green ? (
        <ReactModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Add Expense Modal"
          className={style.modal}
        >
          <Addexpensemodal closeModal={closeModal} />
        </ReactModal>
      ) : (
        <ReactModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Add Expense Modal"
          className={style.modal}
        >
          <Editexpensemodal title="Add Expense" closeModal={closeModal} />
        </ReactModal>
      )}
    </>
  );
};

export default Card;
