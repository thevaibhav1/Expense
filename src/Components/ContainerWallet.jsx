import React, { useContext } from "react";
import style from "./ContainerWallet.module.css";
import Card from "./Card/Card";
import { Contextobj } from "../store/Contextobj"; // Adjust the path if needed

const ContainerWallet = () => {
  const { balance } = useContext(Contextobj); // ✅ Consume balance from context

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
          value="$500" // You can also make this dynamic later
          btn="+ Add Expense"
          green={false}
        />
      </div>
    </div>
  );
};

export default ContainerWallet;
