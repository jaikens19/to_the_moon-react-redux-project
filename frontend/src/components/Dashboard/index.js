import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./Dashboard.css";
import useDarkMode from "use-dark-mode";
import Toggle from "react-toggle";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  
} from "recharts";

const data = [
  {
    name: "Page A",
    apples: 4000,
    bananas: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    apples: 3000,
    bananas: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    apples: 2000,
    bananas: 4200,
    amt: 2290,
  },
  {
    name: "Page D",
    apples: 2780,
    bananas: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    apples: 1890,
    bananas: 4500,
    amt: 2181,
  },
  {
    name: "Page F",
    apples: 2390,
    bananas: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    apples: 3490,
    bananas: 4300,
    amt: 2100,
  },
];


function Dashboard(){
    return (
      <div className="chart-dashboard">
        <h1>Line Chart</h1>
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line
              type="linear"
              dataKey="bananas"
              stroke="yellow"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="linear"
              dataKey="apples"
              stroke="red"
              strokeWidth={2}
              dot={false}
            />
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <CartesianGrid />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Dashboard