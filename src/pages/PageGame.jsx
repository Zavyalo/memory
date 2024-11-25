import { Header } from "../components/header"
import { Grid } from "../components/grid"
import { Cards } from "../components/cards"
import { Footer } from "../components/footer"

export function PageGame(){
    return(
        <div>
            <Header/>
            <Grid/>
            <Cards/>
            <Footer/>
        </div>
    )
}