import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css"
import About from "./pages/About";
import AppRouter from "./components/AppRouter";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <AppRouter/>
      </div>
  );
}

export default App;
