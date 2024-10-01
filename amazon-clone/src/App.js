import React, { useContext, useEffect } from "react";
import Routering from "./Router";
import { StateContext } from "./Components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import {Type} from './Utility/action.type'


function App() {
  const [{user}, dispatch] = useContext(StateContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=> {
      if (authUser) {
        console.log(authUser);
        
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        })
      }else {
         dispatch({
           type: Type.SET_USER,
           user: null,
         });
      }
    })
  },[])
  return (
    <>
      <Routering />
    </>
  );
}

export default App;
