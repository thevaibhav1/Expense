import React, { useState, useEffect } from "react";
import { Contextobj } from "./Contextobj";

const ContextComp = ({ children }) => {
  const [balance, setBalance] = useState(5000);
  const [expenseitems, setExpenseItems] = useState([]);
  const [expensecategory, setExpenseCategory] = useState([
    { name: "Food", value: 0 },
    { name: "Entertainment", value: 0 },
    { name: "Travel", value: 0 },
  ]);
  const [loaded, setLoaded] = useState(false);

  const incrementBalance = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  const handleExpense = (expense) => {
    if (balance - expense.price < 0) {
      alert("Insufficient balance");
      return;
    }
    setExpenseItems((prevItems) => [...prevItems, expense]);
    setBalance((prevBalance) => {
      if (prevBalance - expense.price < 0) {
        alert("Insufficient balance");
        return prevBalance;
      }
      return prevBalance - expense.price;
    });
  };

  const handleRemove = (id) => {
    const itemToRemove = expenseitems.find((item) => item.id === id);
    if (!itemToRemove) return;

    setBalance((prevBalance) => prevBalance + itemToRemove.price);
    setExpenseItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const handleListEdit = (updatedItem) => {
    const itemToUpdate = expenseitems.find(
      (item) => item.id === updatedItem.id
    );
    if (!itemToUpdate) return;

    const priceDifference = updatedItem.price - itemToUpdate.price;
    const newBalance = balance - priceDifference;

    if (newBalance < 0) {
      alert("Insufficient balance after edit");
      return;
    }
    setBalance(newBalance);
    setExpenseItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("expenses"));
    const balance = JSON.parse(localStorage.getItem("balance"));
    if (items && balance) {
      setExpenseItems(items);
      setBalance(balance);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("expenses", JSON.stringify(expenseitems));
      localStorage.setItem("balance", JSON.stringify(balance));
    }
  }, [expenseitems, loaded, balance]);

  useEffect(() => {
    const initial = {
      Food: 0,
      Entertainment: 0,
      Travel: 0,
    };
    expenseitems.forEach((item) => {
      if (initial[item.category] !== undefined) {
        initial[item.category] += item.price;
      }
    });
    const updated = Object.entries(initial).map(([name, value]) => ({
      name,
      value,
    }));
    setExpenseCategory(updated);
  }, [expenseitems]);

  const valueObj = {
    balance,
    incrementBalance,
    expenseitems,
    handleExpense,
    expensecategory,
    handleRemove,
    handleListEdit,
  };

  return <Contextobj.Provider value={valueObj}>{children}</Contextobj.Provider>;
};

export default ContextComp;
