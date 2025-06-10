import React, { useState } from "react";
import { Contextobj } from "./Contextobj";

const ContextComp = ({ children }) => {
  const [balance, setBalance] = useState(5000);
  const [expenseitems, setExpenseItems] = useState([]);

  const incrementBalance = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };
  const handleExpense = (expense) => {
    setExpenseItems((prevItems) => [expense, ...prevItems]);
  };
  const handleBalance = (price) => {
    setBalance(() => {
      return balance - price;
    });
  };

  const valueObj = {
    balance,
    incrementBalance,
    expenseitems,
    handleExpense,
    handleBalance,
  };
  return <Contextobj.Provider value={valueObj}>{children}</Contextobj.Provider>;
};

export default ContextComp;
