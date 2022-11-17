import "./App.css";
import Hero from "./Components/Hero/Hero";
import MainBody from "./Components/MainBody/MainBody";
import ParticlesComponent from "./Components/Particles";

function App() {
  return (
    <div className="App">
      <main>
        <Hero/>
        <MainBody/>
      </main>
      <ParticlesComponent />
    </div>
  );
}

export default App;
