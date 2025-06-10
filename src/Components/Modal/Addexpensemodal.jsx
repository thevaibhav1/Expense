import React, { useContext } from "react";
import style from "./Addexpensemodal.module.css";

import { Contextobj } from "../../store/Contextobj";
const Addexpensemodal = ({ closeModal }) => {
  const { balance, incrementBalance } = useContext(Contextobj);

  const handleCancel = () => {
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const amount = parseFloat(formdata.get("amount"));
    if (!isNaN(amount) && amount > 0) {
      incrementBalance(amount);
    }
    closeModal();
  };

  return (
    <div className={style.modal}>
      <h2 className={style.title}>Add Balance</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          name="amount"
          type="number"
          placeholder="Enter Amount"
          className={style.input}
        />
        <button type="submit" className={style.submitBtn}>
          Add Balance
        </button>
        <button
          type="button"
          className={style.cancelBtn}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Addexpensemodal;
