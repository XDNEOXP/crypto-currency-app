import { useEffect, useState } from 'react';
import CurrencyItem from '../CurrencyItem/CurrencyItem';
import './Currencies.css'

const Currencies = () => {
    const [data, setData] = useState([])
    let loadDataIntrval
    const loadData = async () => {
    const resonseData = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const getData = await resonseData.json()
    setData(getData)
   }
    const refereshData = () => {
    loadDataIntrval = setInterval(() => {
      loadData()
    }, 10000);
   }

    useEffect(() => {
    loadData()
    refereshData()
    return () => {
        clearInterval(loadDataIntrval)
    }
   }, []);
      
    return(
        <ul className="CryptoForm">
        {data.map((item) => (
            <CurrencyItem item={item} />
        ))}
        </ul>
    )
}

export default Currencies