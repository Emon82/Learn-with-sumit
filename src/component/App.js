import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./page/Home";
import Login from "./page/Login";
import Quiz from "./page/Quiz";
import Result from "./page/Result";
import Signup from "./page/Signup";
function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/quiz' element={<Quiz/>}/>
          <Route  path='/result' element={<Result/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
