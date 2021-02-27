import { useDispatch } from "react-redux";

export default function StockChart({ symbol }) {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{symbol}</h1>
    </div>
  );
}
