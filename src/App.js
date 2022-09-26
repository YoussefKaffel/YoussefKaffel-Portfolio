import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Floatedbutton from "./components/floatedbutton";
function App() {
  return (
    <div className="App">
         <Home/>
         <About/>
         <Skills/>
         <Contact/>
        <Floatedbutton/>

    </div>
  );
}

export default App;
