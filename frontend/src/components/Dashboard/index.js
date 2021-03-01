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
    closed: 4000,
    open: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    closed: 3000,
    open: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    closed: 2000,
    open: 4200,
    amt: 2290,
  },
  {
    name: "Page D",
    closed: 2780,
    open: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    closed: 1890,
    open: 4500,
    amt: 2181,
  },
  {
    name: "Page F",
    closed: 2390,
    open: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    closed: 3490,
    open: 4300,
    amt: 2100,
  },
];


function Dashboard(){
    return (
      <div className="chart-dashboard">
        <h1>S&P 500</h1>
        <h2>$3,811.15</h2>
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line
              type="linear"
              dataKey="open"
              stroke="#00c109"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="linear"
              dataKey="closed"
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