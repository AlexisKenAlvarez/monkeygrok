import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./views/About";
import Hero from "./views/Hero";
import Tokenomics from "./views/Tokenomics";

const App = () => {
  return (
    <div className="w-full h-auto">
      <Nav />
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
