import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Aboutme from "./Components/Aboutme/Aboutme";
import MySkill from "./Components/MySkill/MySkill";
import Findme from "./Components/Findme/Findme";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Aboutme/>
      <MySkill/>
      <Findme/>
      <Footer />
    </div>
  );
}

export default App;
