import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Janeiro",
    perda: 3000,
    ganho: 2298,
    amt: 2400,
  },
  {
    name: "Fevereiro",
    perda: 1000,
    ganho: 4598,
    amt: 2210,
  },
  {
    name: "Março",
    perda: 300,
    ganho: 6298,
    amt: 2290,
  },
];

export default function GraficoBarra() {
  return (
    <ResponsiveContainer width="100%" height="860" aspect={2}>
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="perda" stackId="a" fill="#da291c" />
        <Bar dataKey="ganho" stackId="a" fill="#00816e" />
      </BarChart>
    </ResponsiveContainer>
  );
}
