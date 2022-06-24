import { useEffect, useState } from "react";
import { GiMeal } from "react-icons/gi";

import { MdDelete, MdRefresh } from "react-icons/md";
import MenuTabs from "./menuTabs";



const ClientView = () => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) ?? []);

    const calculateTotalPrice = (data=undefined) => {

        const orders = data ?? JSON.parse(localStorage.getItem('items')) ?? items;
        
        //alert("counting " + orders.length + " items");
        let price = 0;
        if (orders.length > 0) {
            // price = (orders.length>1) ? orders.reduce((a, b) => a.price + b.price) : orders[0].price;
            orders.forEach((o, index) => {
                price+=o.price
            })
        }
        return price;
    }

    const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());



    useEffect(() => {
        //alert("init")
        const storedItems = JSON.parse(localStorage.getItem('items'));
        if (storedItems.length > 0) {
            //setTotalPrice((storedItems.length>1) ? storedItems.reduce((a, b) => a.price + b.price) : storedItems[0].price);
            setTotalPrice(calculateTotalPrice(storedItems));
            console.log(storedItems);
        }
    }, []);


    const clearItems = () => {
        localStorage.setItem('items', JSON.stringify([]))
        setItems([]);
        //alert("Items cleared")
        setTotalPrice(calculateTotalPrice());

    }



    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(items))
    // }, [items]);

    const addToCart = (food) => {
        food.qty = "1";
        let newItems = [...items];
        newItems.push(food);
        localStorage.setItem('items', JSON.stringify(newItems))
        setItems(newItems);
        setTotalPrice(calculateTotalPrice());
    }




    return (
        <>
            <section className="flex flex-nowrap space-x-5 p-8 overflow-hidden   max-w-full min-h-screen h-auto">
                <div className="bg-transparent  my-4 px-2 w-full md:w-3/5 overflow-hidden sm:my-px sm:px-px md:my-4 md:px-4">

                    <MenuTabs
                        className="min-w-full min-h-screen overflow-y-scroll overflow-x-hidden"
                        items={items}
                        setItems={setItems}
                        addToCart={(data) => addToCart(data)} />

                </div>

                <div className="text-white my-4 w-full max-h-fit md:w-2/5  overflow-hidden sm:my-px  md:my-4 md:p-4">
                    <div className="block bg-red-700 text-white bg-opacity-75  rounded-xl shadow-md my-4 p-4 min-w-full w-full max-h-fit ">

                        <h2 className="text-yellow-400 text-2xl my-2 font-bold relative" >Checkout


                            <div title="clear all" onClick={() => clearItems()} className="cursor-pointer  w-8 h-8 rounded-md bg-red-900 hover:text-yellow-400 p-1 justify-center place-items-center text-white flex absolute top-0 right-0">
                                <MdRefresh />
                            </div>

                        </h2>

                        <div className="my-2 bock container flex justify-center place-items-center">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 scale-90 mx-auto">
                                <thead className="font-bold text-lg ">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <label htmlFor="checkbox-all" className="sr-only">-</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-sm font-bold tracking-wider text-left text-yellow-500 uppercase ">
                                            Item
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-sm font-bold tracking-wider text-left text-yellow-500 uppercase ">
                                            Price
                                        </th>
                                        <th scope="col" className="p-4" hidden>
                                            <span className="sr-only">Remove</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-transparent divide-y divide-gray-200  dark:divide-gray-700 rounded-md">

                                    {
                                        items.map((item, index) =>


                                        (
                                            <tr key={'cart-item-' + index} className="hover:bg-yellow-300 hover:text-red-800">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        {
                                                            item.image ?
                                                                <img src={item.image} alt={item.name} className="w-8 h-8  mr-auto rounded-full " /> :
                                                                <div className="w-8 h-8 flex justify-center place-items-center mr-auto rounded-full  bg-yellow-400 text-red-900">

                                                                    <GiMeal className="text-6xl" />
                                                                </div>

                                                        }
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium   ">{item.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium   ">{item.price}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-right " hidden>
                                                    <a href="/" className="text-red-600 dark:text-red-500 hover:underline">
                                                        <MdDelete className="text-lg" />
                                                    </a>
                                                </td>
                                            </tr>
                                        )

                                        )}

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="w-full text-xl bg-slate-100 text-red-800 rounded-lg p-4 flex">
                        <div className="w-full md:w-2/3">

                        Total bill <br />
                        <b className="font-mono text-3xl text-black">
                            {totalPrice.toLocaleString('cm')} XAF <sup className="text-sm">TTC*</sup>
                            </b>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center place-items-center">
                            <button className="scale-90 py-2 px-3 rounded-md bg-yellow-500 text-red-700 hover:bg-red-900 hover:text-yellow-400 font-mono" type="button" >
                                Pay Now
                                </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default ClientView;