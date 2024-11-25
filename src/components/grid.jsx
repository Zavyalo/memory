import './grid.css';
import { Cards } from "../components/cards"
import { images } from "./../data.js";

export function Grid(){
    return(
        <div className="container">
        {
        images.map((item)=>(
            <Cards
                key = {item.id}   
                url = {item.url}
                back = {item.back}
            ></Cards>
        ))
        }
            <Cards
            key = {images[0].id}   
            url = {images[0].url}
            back = {images[0].back}
            ></Cards>
            <Cards
            key = {images[2].id}   
            url = {images[2].url}
            back = {images[0].back}
            ></Cards>
            <Cards
            key = {images[3].id}   
            url = {images[3].url}
            back = {images[0].back}
            ></Cards>
            <Cards
            key = {images[4].id}   
            url = {images[4].url}
            back = {images[0].back}
            ></Cards>
            <Cards
            key = {images[5].id}   
            url = {images[5].url}
            back = {images[0].back}
            ></Cards>
            <Cards
            key = {images[1].id}   
            url = {images[1].url}
            back = {images[0].back}
            ></Cards>
        </div>
    )
}