import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import style from "./BarChartComponent.module.css";
import { Contextobj } from "../../store/Contextobj";

const BarChartComponent = () => {
  const { expensecategory } = React.useContext(Contextobj);
  console.log(expensecategory);
  return (
    <div className={style.barchart}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={expensecategory}
          margin={{ left: 28 }}
        >
          <XAxis type="number" hide={true} />
          <YAxis type="category" dataKey="name" />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default BarChartComponent;
