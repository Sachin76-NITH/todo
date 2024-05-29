
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Main from './components/Main';
import Todo from './components/Todo';
import Logout from './components/Logout';
function App() {
  return (
  
  <div className="App">
      <Router>
      <Navbar/>
      
      
    <Routes>
    
   
      <Route path="/" element={<Main/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/logout" element={<Logout/>}/>
    </Routes>
  
   </Router>
    </div>
  );
}

export default App;
