import "./App.css";
import Companies from "./Components/Companies/Companies";
import Contact from "./Components/Contact/Contact";
import Extra from "./Components/Extra/Extra";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Header from "./Components/Header/Header";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Extra />
      </div>
      <Companies />
      <Residencies id="residencies" />
      <Value id="values" />
      <Contact id="contact" />
      <GetStarted id="get-started" />
      <Footer />
    </div>
  );
}

export default App;