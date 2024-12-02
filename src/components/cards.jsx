import './cards.css';


export  function Cards({ id,url, isVisible, isFinished, onCardsClick }) { 
  
    
    const handleClick = () => {
        onCardsClick(id);
    };
    const classCard = `card
    ${isVisible ?  "card-show" : ""}
    ${isFinished ?  "card-finished" : ""} `;
    return (
        <li className={classCard} onClick={handleClick}> 
            <img src={url} width="204" height="144" alt="" />
        </li>
    );
}
    