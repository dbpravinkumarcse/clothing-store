import React,{useState,useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';
import ShopPage from './Component/Shop/ShopPage';
import Header from './Component/Shop/Header';
import HomePage from './HomePage';
import Signin from './Component/SignIn/Signin';
import {auth, UserValid} from "./Component/Shop/firebase";

function App() {


  const [userstate,setuserstate] = useState({currentuser :""});

  let isuserSignedIN = null;
  useEffect(() => {
  isuserSignedIN = auth.onAuthStateChanged((user)=> {
      UserValid(user);
      setuserstate({currentuser : user});
       
    });
  
    return()=>{
      isuserSignedIN();
    }
    
  }, []);

  return (
   
    
    <div>
      <Header currentuser = {userstate.currentuser}/>
      <Routes >
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/shop' element={<ShopPage />} />
      <Route exact path='/signin' element={<Signin  user={userstate.currentuser}/>} />
      </Routes>
    </div>
   
  );
}

export default App;
