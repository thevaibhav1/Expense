import React, { useContext } from "react";
import style from "./ContainerWallet.module.css";
import Card from "./Card/Card";
import { Contextobj } from "../store/Contextobj"; // Adjust the path if needed

const ContainerWallet = () => {
  const { balance, expenseitems } = useContext(Contextobj); // ✅ Consume balance from context

  return (
    <div className={style.container}>
      <div className={style.cardcontainer}>
        <Card
          title="Wallet Balance:"
          value={`₹${balance}`} // ✅ Use context value
          btn="+ Add Income"
          green={true}
        />
        <Card
          title="Expenses:"
          value={
            expenseitems.length === 0
              ? "₹0"
              : `₹${expenseitems.reduce((acc, item) => acc + item.amount, 0)}`
          } // ✅ Calculate total expenses
          btn="+ Add Expense"
          green={false}
        />
      </div>
    </div>
  );
};

export default ContainerWallet;
