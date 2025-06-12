import React, { useContext, useEffect, useState } from "react";
import style from "./Editexpensemodal.module.css";
import { Contextobj } from "../../store/Contextobj";

const Editexpensemodal = ({ title, closeModal, id }) => {
  const { handleExpense, handleListEdit, expenseitems } =
    useContext(Contextobj);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    if (title === "Edit Expense" && id) {
      const item = expenseitems.find((item) => item.id === id);
      if (item) {
        setFormData({
          title: item.name,
          price: item.price,
          category: item.category,
          date: item.date,
        });
      }
    }
  }, [title, id, expenseitems]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title: name, price, category, date } = formData;

    if (!name || !price || !category || !date) return;

    if (title === "Edit Expense") {
      handleListEdit({
        id,
        name,
        price: parseFloat(price),
        category,
        date,
      });
    } else {
      const objexpense = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        price: parseFloat(price),
        category,
        date,
      };
      handleExpense(objexpense);
    }

    closeModal();
  };

  return (
    <div className={style.modal}>
      <h2 className={style.heading}>
        {title === "Add Expense" ? "Add Expense" : "Edit Expense"}
      </h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            className={style.input}
            value={formData.title}
            onChange={handleChange}
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            className={style.input}
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className={style.inputGroup}>
          <select
            name="category"
            className={style.input}
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
          </select>
          <input
            name="date"
            type="date"
            className={style.input}
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className={style.buttonGroup}>
          <button type="submit" className={style.submitBtn}>
            Add Expense
          </button>
          <button
            type="button"
            className={style.cancelBtn}
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editexpensemodal;
