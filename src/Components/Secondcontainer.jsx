import React, { useState, useContext } from "react";
import style from "./Secondcontainer.module.css";
import Listcard from "./Listcard";
import { Contextobj } from "../store/Contextobj";
import BarChartComponent from "./Charts/BarChartComponent";
import { ImArrowLeft2 } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";
const ITEMS_PER_PAGE = 3;

const Secondcontainer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const { expenseitems } = useContext(Contextobj);
  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < expenseitems.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  const visibleItems = expenseitems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  // console.log(visibleItems);
  return (
    <div className={style.Secondcontainer}>
      <div className={style.Container}>
        <h2>Recent Transactions</h2>
        <div className={style.card}>
          {visibleItems.length > 0 &&
            visibleItems.map((item) => (
              <Listcard
                key={item.id}
                id={item.id}
                name={item.name}
                price={`₹${item.price}`}
                date={item.date}
                category={item.category}
              />
            ))}
          {visibleItems.length === 0 && <p>No transactions</p>}
        </div>
        <div className={style.controls}>
          <button onClick={handlePrev} disabled={startIndex === 0}>
            <ImArrowLeft2 />
          </button>
          <span style={{ color: "white" }}>{1}</span>
          <button
            onClick={handleNext}
            disabled={startIndex + ITEMS_PER_PAGE >= expenseitems.length}
          >
            <ImArrowRight2 />
          </button>
        </div>
      </div>
      <BarChartComponent />
    </div>
  );
};

export default Secondcontainer;
