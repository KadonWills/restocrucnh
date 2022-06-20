import Footer from "./components/footer";
import MenuTabs from "./components/menuTabs";
import  Nav  from "./components/nav";
import './index.css';
import './App.css';
import Modal from "./components/modal";

function App() {

  let default_table = {
    name: 'Table 1',
    description: 'A cool 4 seat table with a nice view of the bar side',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    seats: 4,
    status: 'free',
    id: 1
}


  return (
 
    <>
    
    <Nav table={default_table}/>
    {/* <Modal title="Payment successful" message="Hey!, Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order." buttonText="Ok, got it!"  /> */}
    
    <section class="flex flex-nowrap space-x-5 p-8 overflow-hidden   max-w-full min-h-screen h-auto">
            <div class="bg-transparent  my-4 px-2 w-full md:w-3/5 overflow-hidden sm:my-px sm:px-px md:my-4 md:px-4">
              
              {/* <!-- Column Content --> */}
              <MenuTabs className="min-w-full min-h-screen overflow-y-scroll overflow-x-hidden" />
            
            </div>


            <div class="bg-red-700 bg-opacity-75  rounded-xl shadow-md my-4 px-2 w-full md:w-2/5  overflow-hidden sm:my-px sm:px-px md:my-4 md:px-4">
              {/* <!-- Column Content --> */}
              checkout
            </div>
    </section>

    <Footer />
    
    </>

  );
}

export default App;
