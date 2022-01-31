import React, { useContext, useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/AuthContext';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
  const ctx = useContext(AuthContext)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // useEffect(() => {
  //   const storeLoggeInfo = localStorage.getItem('isLoggeIn');
    
  //   if(storeLoggeInfo === '1'){
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggeIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      {/* <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
      }}>*/}
      {/* <MainHeader onLogout={logoutHandler} />  */}
      <MainHeader /> 
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      {/* </AuthContext.Provider> */}
      </React.Fragment>
  );
}

export default App;
