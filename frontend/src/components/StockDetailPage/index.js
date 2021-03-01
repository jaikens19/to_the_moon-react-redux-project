import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { getLineDataByList } from "../../store/stockData";
import { getStockInfo } from '../../store/stockData'
import StockChart from '../Charts/StockChart'
import StockInfo from './StockInfo'
export default function StockDetailPage() {
    const dispatch = useDispatch()
    const {symbol} = useParams()
    const { [symbol]: stockData } = useSelector( (state) => state.stockData.stocks);
    
    useEffect(async () => {
      await dispatch(getLineDataByList([symbol]));
      await dispatch(getStockInfo(symbol))
    }, [dispatch, symbol]);

    

    return (
      <div>
        <h1>Stock Detail Page</h1>
        <h2>{symbol}</h2>
        {/* <h3>${stockData?.lineData[0].Closed}</h3> */}
        <StockChart lineData={stockData?.lineData} />
        <StockInfo info={stockData?.info} />
        {/* <StockInfo info={{}} /> */}
      </div>
    );
}