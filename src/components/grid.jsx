import './grid.css';
import { Cards } from "../components/cards"
import React from "react";



export  function Grid ({ images, finishedItems, checkItems }) {
    const [visibleItems, setVisibleItems] = React.useState([]);
    const handleCardsClick = (id) => {
        if (finishedItems.includes(id) || visibleItems.includes(id)) {
            return;
        }
        switch (visibleItems.length) {
            case 0:
                setVisibleItems([id]);
                break;
            case 1:
                setVisibleItems((items) => [...items, id]);
                checkItems(visibleItems[0], id);
                setTimeout(() => {
                    setVisibleItems([]);
                }, 1000);
                break;
            default:
                setVisibleItems([]);
        }
    };

    return (
        <ul className="cards">
        {images.map((item) => (
        <Cards
            key={item.id}
            id={item.id}
            url={item.url}
            isVisible={visibleItems.includes(item.id)} 
            isFinished={finishedItems.includes(item.id)} 
            onCardClick={handleCardsClick}
        />
        ))} 
        </ul>
    );
}







    