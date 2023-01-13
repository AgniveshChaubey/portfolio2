import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import RenderComponent from './components/RenderComponent';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
