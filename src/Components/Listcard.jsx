import React, { useContext, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineModeEditOutline } from "react-icons/md";
import style from "./Secondcontainer.module.css";
import { Contextobj } from "../store/Contextobj";
import ReactModal from "react-modal";
import Editexpensemodal from "./Modal/Editexpensemodal";
import Food from "../icons/Food.png";
import Travel from "../icons/Travel.png";
import Entertainment from "../icons/Entertainment.png";
const Listcard = ({ name, price, date, category, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { handleRemove, handleListEdit } = useContext(Contextobj);
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const iconMap = {
    Food,
    Travel,
    Entertainment,
  };

  const onAddExpense = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const listRemoveHandler = (id) => {
    console.log(`Removing item with id: ${id}`);
    handleRemove(id);
  };
  // console.log(category);

  return (
    <div className={style.listcontainer}>
      <div className={style.food}>
        <div className={style.iconsimg}>
          <img src={iconMap[category]} alt={category} />
        </div>
        <div className={style.list}>
          <span>{name}</span>
          <span style={{ color: "#9B9B9B" }}>{formattedDate}</span>
          {/* <span>{category}</span> */}
        </div>
      </div>
      <div>
        <div className={style.icons}>
          <span className={style.price}>{price}</span>
          <div className={style.icondel}>
            <TiDeleteOutline
              onClick={() => listRemoveHandler(id)}
              style={{ color: "white", width: "35px", height: "35px" }}
            />
          </div>
          <div className={style.iconedit}>
            <MdOutlineModeEditOutline
              onClick={onAddExpense}
              className={style.icon}
              style={{ color: "white" }}
            />
          </div>
          {modalOpen && (
            <ReactModal
              isOpen={modalOpen}
              onRequestClose={closeModal}
              contentLabel="Edit Expense Modal"
              className={style.modal}
            >
              <Editexpensemodal
                title="Edit Expense"
                closeModal={closeModal}
                id={id}
              />
            </ReactModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listcard;
