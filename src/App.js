import "./App.css";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Start from "./Components/Start";
import Team from "./Components/Team";

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <Hero />
      <About />
      <Team />
      <Start />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
