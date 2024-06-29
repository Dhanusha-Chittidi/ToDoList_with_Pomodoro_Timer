
import './App.css';
import { PomodoroTimer } from './pomodoro-timer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './Navbar';
import { TodoList } from './TodoList';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<TodoList/>} />
          <Route path="/Timer" element={<PomodoroTimer/>}/>
        </Routes>
      </Router>
      
      
    </div>

  );

}

export default App;
