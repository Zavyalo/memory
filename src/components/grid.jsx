import './grid.css';
import {Cards} from "./cards";
import {images} from "./../data.js";

export function Grid(){
    return(
        <div className="container">
        {
        images.map((item)=>(
            <Cards
                key = {item.id}   
                url = {item.url}
            ></Cards>
        ))
        }
            <Cards
            key = {images[0].id}   
            url = {images[0].url}
            ></Cards>
            <Cards
            key = {images[2].id}   
            url = {images[2].url}
            ></Cards>
            <Cards
            key = {images[3].id}   
            url = {images[3].url}
            ></Cards>
            <Cards
            key = {images[4].id}   
            url = {images[4].url}
            ></Cards>
            <Cards
            key = {images[5].id}   
            url = {images[5].url}
            ></Cards>
            <Cards
            key = {images[1].id}   
            url = {images[1].url}
            ></Cards>
        </div>
    )
}