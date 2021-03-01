import { LineChart, Line, ResponsiveContainer } from "recharts";
import './StockChart.css'

export default function StockChart({ lineData }) {
  
      return (
        <div className="stock-chart-div">
          <ResponsiveContainer width="100%">
            <LineChart data={lineData}>
              <Line
                type="linear"
                dataKey="Open"
                stroke="#00c109"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
  
}
