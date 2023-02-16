import About from "./Components/About/About";
import Cursuri from "./Components/Cursuri/Cursuri";
import Footer from "./Components/Footer/Footer";
import Galerie from "./Components/Galerie/Galerie";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Cursuri />
      <Galerie />
      <Footer />
    </div>
  );
}

export default App;
