import React from "react";
import { Contextobj } from "./Contextobj";

const ContextComp = ({ children }) => {
  const [balance, setBalance] = React.useState(5000);

  const incrementBalance = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <Contextobj.Provider value={{ balance, incrementBalance }}>
      {children}
    </Contextobj.Provider>
  );
};

export default ContextComp;
