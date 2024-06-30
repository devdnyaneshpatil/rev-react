import { Route ,Routes} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
      <Route path="/services" Component={Services} />
      <Route path="/login" Component={Login}/>
     </Routes>
  );
}

export default App;
