import { useState } from 'react';
import { GiHotMeal } from 'react-icons/gi';




const Nav = (props) => {
    const [table] = useState(props.table);


    return (
        <nav className="min-w-full h-auto bg-red-800 px-4 border-b-2 border-yellow-300">
            <header className="flex justify-between items-center py-2 scale-90">
                {/* <!-- logo - start --> */}
                <a href="/" className="inline-flex items-center text-yellow-300 text-2xl md:text-3xl font-bold " aria-label="logo">
                    <GiHotMeal />

                    RestoCrunch
                </a>
                {/* <!-- logo - end --> */}

                {/* <!-- nav - start --> */}
                <nav  className="flex text-lg mx-auto">
                    <a href="/" className="text-white hover:text-yellow-500 active:text-yellow-700 text-lg  font-bold transition duration-100 uppercase">
                        { table?.name }
                    </a>
                    </nav>
                {/* <!-- nav - end --> */}

                {/* <!-- buttons - start --> */}
                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start ">
  {
  
  props.isAuth  &&
                    <button onClick={  () => props.goTo("logout")} className="inline-block bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-red-900 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-6 py-2">
                        Logout
                    </button>
  } 

                </div>                
                {/* <!-- buttons - end --> */}

            </header>
        </nav>
    )
}

export default Nav;