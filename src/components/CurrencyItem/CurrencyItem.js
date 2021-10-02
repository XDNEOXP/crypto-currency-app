import { useState} from 'react';
import Image from "../Image/Image"
import Button from "../Button/Button"
import {HiCurrencyDollar, HiEye, HiEyeOff} from 'react-icons/hi'

const CurrencyItem = ({item}) => {
    const [active, setActive] = useState(true)
    const handelClassName = () => {
        setActive(!active)
     }
  
    return(
            <li  className={`CurrencyItem ${active === true ? '' : 'active'}`} >
            <Image imgSrc={item.image}/>
            <span className="Name">{item.name}</span> 
            <span className="Price">{item.current_price} <HiCurrencyDollar /></span>
            <Button handelClick={handelClassName}>
                {active ? <HiEye /> : <HiEyeOff />}
            </Button><br></br>
            <span className="Info">High 24h : {item.high_24h}</span>
            <span className="Info">Low 24h  : {item.low_24h}</span>
            <span className="Info">ATH  : {item.ath}</span><br></br>
            <span className="Info">Fully diluted valuation : {item.fully_diluted_valuation === null ? 'No Price!' : item.fully_diluted_valuation}</span>
            </li>    
    )
}

export default CurrencyItem