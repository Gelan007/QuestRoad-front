import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css"
import About from "./pages/About";
import AppRouter from "./components/AppRouter";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";


const App = observer(() => {
    const {user} = useContext(Context);

    useEffect(() => {
        if(localStorage.getItem('token') != null){
            user.setIsAuth(true)
        }
    },[])
    console.log(user.isAuth)
  return (
      <div className="App">
          <Navbar/>
          <AppRouter/>
      </div>
  );
})

export default App;
