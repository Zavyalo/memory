import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/header";
import {Grid} from "./components/grid";
// import {Cards} from "./components/cards";
import {Footer} from "./components/footer";
import {FirstPage} from "./components/FirstPage";

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <FirstPage /> 
    //   <Grid />
    //   <Footer />    
    // </div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage/>} />
          <Route path="/play" element={<Header/>} />
          <Route path="/play" element={<Grid/>} />
          <Route path="/play" element={<Footer/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;