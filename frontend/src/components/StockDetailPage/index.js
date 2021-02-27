import { useParams } from 'react-router-dom'
import StockChart from '../Charts/StockChart'
import StockInfo from './StockInfo'
export default function StockDetailPage() {
    const {symbol} = useParams()
    
    
    return (
        <div>
            <h1>Stock Detail Page</h1>
            <StockChart symbol={symbol}/>
            <StockInfo symbol={symbol}/>
        </div>
    )
}