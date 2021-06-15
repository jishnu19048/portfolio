import logo from './logo.svg';
import Header from './components/header';
import About from './components/about';
import ContactMe from './components/contact';
import Projects from './components/projects';
import Experience from './components/experience';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header class="app-header"/>
      <About />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer/>
    </div>
  );
}

export default App;
