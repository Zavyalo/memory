import './cards.css';

export function Cards({url, back}){
    return(
        // for и перебор карточек
        <div className="cards">
            <img src={url} alt="" />
        </div>
    )
}
