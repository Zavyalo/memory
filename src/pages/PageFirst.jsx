import { NavLink } from "react-router-dom";
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import "./FirstPage.css";


export function PageFirst(){
    return (
        <div>
            <Header/>
            <NavLink  to="/play" className={({ isActive }) => (isActive ? 'link link--active' : 'link')}>
                Начать игру
            </NavLink>
            <Footer/>
    </div>
    )
}