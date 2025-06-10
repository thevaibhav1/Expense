import React, { useState } from "react";
import style from "./Secondcontainer.module.css";
import Listcard from "./Listcard";

const mockData = [];

const ITEMS_PER_PAGE = 3;

const Secondcontainer = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < mockData.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  const visibleItems = mockData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className={style.Container}>
      <h2>Recent Transactions</h2>
      <div className={style.card}>
        {visibleItems.length > 0 &&
          visibleItems.map((item, index) => (
            <Listcard key={index} name={item.name} price={item.price} />
          ))}
        {visibleItems.length === 0 && <p>No transactions</p>}
      </div>
      <div className={style.controls}>
        <button onClick={handlePrev} disabled={startIndex === 0}>
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + ITEMS_PER_PAGE >= mockData.length}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Secondcontainer;
