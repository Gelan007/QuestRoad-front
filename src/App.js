import Navbar from "./components/Navbar/Navbar";
import "./styles/App.css"
import About from "./pages/About";
import AppRouter from "./components/AppRouter";
import {useContext, useEffect, useState, Suspense} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Registration from "./pages/Registration";



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
          <Suspense fallback={<Registration/>}>
          <Navbar/>
          <AppRouter/>
      </Suspense>
      </div>

  );
})

export default App;
