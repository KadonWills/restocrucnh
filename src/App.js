import { useState } from "react";

import Footer from "./components/footer";
import  Nav  from "./components/nav";

import './index.css';
import './App.css';
import ClientView from "./components/client";
import ChiefView from "./components/chief";
import LoginView from "./components/login";
import WaiterView from "./components/waiter";

function App() {

    const [isClient, setIsClient] = useState(false);
    const [isChief, setIsChief] = useState(false);
    const [isWaiter, setIsWaiter] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    if(localStorage.getItem('items') == null)localStorage.setItem('items', []);


  let default_table = {
    name: 'Table 1',
    description: 'A cool 4 seat table with a nice view of the bar side',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    seats: 4,
    status: 'free',
    id: 1
}

  function goTo (view)  {

      switch (view) {

        case "logout":          
              setIsAuth(false);
              setIsWaiter(false);
              setIsChief(false);
              setIsClient(false);
          break;
          
          case "waiter":          
              setIsAuth(true)
              setIsWaiter(true)
              setIsChief(false)
              setIsClient(false)
          break;

        case "chief":          
              setIsAuth(true)
              setIsChief(true)
              setIsClient(false)
              setIsWaiter(false)
          break;

        case "client":          
              setIsAuth(true)
              setIsClient(true)
              setIsWaiter(false)
              setIsChief(false)
          break;
      
        default:
          setIsAuth(false)
          setIsWaiter(false)
          setIsChief(false)
          setIsClient(false)
          break;
      }
  }


  return (
 
    <>
    {/* <Modal title="Payment successful" message="Hey!, Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order." buttonText="Ok, got it!"  /> */}
    
    <Nav table={(isAuth && isClient) ? default_table : null} isAuth={isAuth} goTo={(r) => goTo(r)} />
    
        { !isAuth && <LoginView goTo={(r) => goTo(r)} /> }
        { isClient && <ClientView  /> }
        { isChief && <ChiefView  /> }
        { isWaiter && <WaiterView  /> }
    
    <Footer />
    
    </>

  );
}

export default App;
