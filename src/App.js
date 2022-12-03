import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import ServicesExperience from './components/ServicesExperience.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import 'animate.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ServicesExperience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
