import React, { useContext } from "react";
import style from "./ContainerWallet.module.css";
import Card from "./Card/Card";
import { Contextobj } from "../store/Contextobj";
import PieChartComponent from "./Charts/PieChartComponent.jsx";

const ContainerWallet = () => {
  const { balance, expenseitems } = useContext(Contextobj);

  const totalExpenses = expenseitems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={style.container}>
      <div className={style.cardcontainer}>
        <Card
          title="Wallet Balance:"
          value={`₹${balance}`}
          btn="+ Add Income"
          green={true}
        />
        <Card
          title="Expenses:"
          value={`₹${expenseitems.length === 0 ? 0 : totalExpenses}`}
          btn="+ Add Expense"
          green={false}
        />
      </div>
      <PieChartComponent />
    </div>
  );
};

export default ContainerWallet;
