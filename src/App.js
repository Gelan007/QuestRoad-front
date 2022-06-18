import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css"
import About from "./pages/About";
import AppRouter from "./components/AppRouter";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";


function App() {
    const {user} = useContext(Context);
    const [login, setLogin] = useState(false);  // помогает перерендывать с помощью useEffect каждый раз
                                                            //когда обновляем

    useEffect(() => {
        if(localStorage.getItem('token') != null){
            user.setUser(true)
            user.setIsAuth(true)
            setLogin(true)
        }
        else {
            setLogin(false)
        }
    },[login])
    console.log(user.isAuth)
  return (
      <div className="App">
          <Navbar/>
          <AppRouter/>
      </div>
  );
}

export default App;
