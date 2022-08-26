import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoreForm from './components/ChoreForm';
import ChoreChart from './components/ChoreChart';
import Home from "./components/Home";



function App() {
  // adds chorelog
  
    

  return (

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chores' element={<ChoreForm/>}/>
        <Route path='/chorechart' element={<ChoreChart/>}/>
      </Routes>
    </BrowserRouter>

      
    
  );
}

export default App;




