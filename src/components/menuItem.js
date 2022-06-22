import { useState } from "react";

import { GiMeal } from "react-icons/gi";
import { HiPlus } from "react-icons/hi";

import ItemDetails from "./itemDetails";


const MenuItem = (props) => {
    const [item] = useState(props.item);
    const [isOpen, setIsOpen] = useState(false);

    let { name, price, discount, portion, image } = item;

    const openModal =()=> {
        //alert("opening")
        setIsOpen(true);
    }

    

    const closeModal = () => {
        //alert("closing")
        setIsOpen(false)
    }

    return (
        <>
            <div  className="flex  duration-200  place-items-center  rounded-lg  text-white bg-red-900 my-3 relative scale-95 hover:scale-100 hover:border-2 border-yellow-400">

                <div className="flex justify-center items-center w-1/5 p-3 cursor-pointer" onClick={() => openModal()} type="button">
                    {
                        image ?
                            <img src={image} alt={name} className="w-12 h-12 lg:w-24 lg:h-24 mr-auto rounded-full " /> :
                            <div className="w-12 h-12  lg:w-24 lg:h-24 flex justify-center place-items-center mr-auto rounded-full  bg-yellow-400 text-red-900">

                                <GiMeal className="text-6xl" />
                            </div>

                    }
                </div>
                <div className="flex flex-col justify-start w-3/5 p-3 cursor-pointer" onClick={() => openModal()} type="button">
                    <div className="flex flex-row  justify-start">
                        <h3 className="font-bold text-xl">{name} </h3>
                    </div>
                    <div className="flex flex-col  justify-start">
                        <p >  Portion : {portion}</p>
                        <p>Price :  <span className="">
                            {discount > 0 ? <strike className="text-sm mx-2 text-red-300 line-through ">{price}</strike> : null}
                            <b className="text-yellow-300">{discount > 0 ? (price - discount) : price} {item.currency}</b>
                        </span>
                        </p>

                    </div>
                </div>
                <div className="w-1/5 block  h-full   ">
                    <button
                        onClick={() => props.handleAddToCart(item)}
                        className="absolute top-0 right-0 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold w-12 h-12 py-2 px-4 rounded-tl-none rounded-br-none rounded-md">
                        <HiPlus className="font-bold" />
                    </button>
                </div>

            </div>

            <ItemDetails isOpen={isOpen} item={item} handleAddToCart={props?.handleAddToCart} closeModal={ closeModal} />
        </>
    )
}

export default MenuItem;