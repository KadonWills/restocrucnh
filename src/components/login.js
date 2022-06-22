
import Modal  from "./modal";
import { GiHotMeal } from "react-icons/gi";

const LoginView = (props) => {


    return (
        <>

        <Modal title="APIE Samson" message="Welcome to my defense, let's go forward with my app's demonstration." buttonText="Close" visible={true} />
        
        <section  className="flex flex-wrap flex-col justify-center place-items-center text-center  space-x-5 p-7    max-w-screen h-[78vh] text-white  ">
            <div className="w-full text-center">
                <GiHotMeal className="text-8xl mx-auto animate-wobble " />
            </div>
            <div className="text-lg text-white my-6">
                Welcome to <mark className="rounded-full p-1">RestoCrunch</mark> connect as :
            </div>
            <div className="h-max w-full flex flex-col justify-center place-items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 ">

                <button onClick={ () => props.goTo("client") } className="flex text-lg text-center  font-bold p-3 justify-center  rounded-lg bg-yellow-400 text-red-900 w-64 h-14 hover:bg-red-900 hover:border-2 hover:text-yellow-400 border-yellow-400">
                    
                    Client Table 
                    
                </button>
                <button onClick={ () => props.goTo("waiter")} className="flex text-lg text-center  font-bold p-3 justify-center  rounded-lg bg-yellow-400 text-red-900 w-64 h-14 hover:bg-red-900 hover:border-2 hover:text-yellow-400 border-yellow-400">
                    
                    Waiter 
                    
                </button>
                <button onClick={() => props.goTo("chief")} className="flex text-lg  text-center  font-bold p-3 justify-center  rounded-lg bg-yellow-400 text-red-900 w-64 h-14 hover:bg-red-900 hover:border-2 hover:text-yellow-400 border-yellow-400">
                    
                    Chief 
                    
                </button>
            </div>
            
        </section>

        </>
    )
}

export default LoginView;