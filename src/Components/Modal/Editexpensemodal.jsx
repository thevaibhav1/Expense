import React, { useContext } from "react";
import style from "./Editexpensemodal.module.css";
import { Contextobj } from "../../store/Contextobj";

const Editexpensemodal = ({ closeModal }) => {
  const { handleExpense, handleBalance } = useContext(Contextobj);

  const handleCancel = () => {
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const name = formdata.get("title");
    const price = parseFloat(formdata.get("price"));
    const category = formdata.get("category");
    const date = formdata.get("date");

    if (name && !isNaN(price) && category && date) {
      const objexpense = {
        name,
        price,
        category,
        date,
      };
      handleExpense(objexpense);
      handleBalance(price);
    }

    closeModal();
  };

  return (
    <div className={style.modal}>
      <h2 className={style.heading}>Add Expense</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            className={style.input}
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            className={style.input}
          />
        </div>
        <div className={style.inputGroup}>
          <select name="category" className={style.input}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
          </select>
          <input name="date" type="date" className={style.input} />
        </div>
        <div className={style.buttonGroup}>
          <button type="submit" className={style.submitBtn}>
            Add Expense
          </button>
          <button
            type="button"
            className={style.cancelBtn}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editexpensemodal;
