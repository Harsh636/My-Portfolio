import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Aboutme from "./Components/Aboutme/Aboutme";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Aboutme/>
      <Footer />
    </div>
  );
}

export default App;
