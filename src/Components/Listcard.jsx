import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineModeEditOutline } from "react-icons/md";
import style from "./Secondcontainer.module.css";

const Listcard = ({ name, price, date, categrory }) => {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className={style.listcontainer}>
      <div className={style.food}>
        <img src="logo_categrory" alt="Icon" />
        <div className={style.list}>
          <span>{name}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
      <div>
        <div className={style.icons}>
          <span>{price}</span>
          <div className={style.icon}>
            <TiDeleteOutline
              style={{ color: "white", width: "35px", height: "35px" }}
            />
          </div>
          <MdOutlineModeEditOutline className={style.icon} />
        </div>
      </div>
    </div>
  );
};

export default Listcard;
