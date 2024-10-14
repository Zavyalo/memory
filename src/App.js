import './App.css';
import {Header} from "./components/header";
import {Grid} from "./components/grid";
// import {Cards} from "./components/cards";
import {Footer} from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid />
      <Footer />    
    </div>
  );
}

export default App;