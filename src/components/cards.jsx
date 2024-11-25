import './cards.css';
import { useState } from "react";


export function Cards ({url, back}) {
    const [checkCards, setCheckCards] = useState(false);      
    const handleClick = () => {
        setCheckCards(!checkCards);
    }
    let className = `cards ${checkCards ? 'card-check' : ''}`;

    return(
        <div className= {className} onClick={handleClick} data-back={<img src={back} alt="" />}>
            <img src={url} alt="" />
        </div>
    );
}