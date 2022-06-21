import { Fragment, useState, useEffect, useMemo, useCallback } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { MdClose } from "react-icons/md";

const ItemDetails = (props) => {

    const [item, setItem] = useState(props.item);
    const [isOpen, setIsOpen] = useState(props.isOpen)

    const { name, price, description, discount} = item;


    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    
    

    


    return (

        <Transition appear show={props.isOpen} as={Fragment} className="ease-in-out duration-300">
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex max-h-fit min-w-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="scale-75 w-full max-w-5xl transform overflow-hidden rounded-2xl bg-yellow-50 p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-bold leading-6 text-gray-900"
                                >
                                    Item Details

                                    <span className="float-right text-red-600">
                                        <MdClose className="text-2xl cursor-pointer" onClick={() => props.closeModal()}/>
                                        
                                    </span>
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div class=" py-6 sm:py-8 lg:py-12">
                                        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                                            <div class="grid md:grid-cols-2 gap-8">

                                                <div hidden class="grid lg:grid-cols-5 gap-4">
                                                    <div hidden class="flex lg:flex-col order-last lg:order-none gap-4">
                                                        <div class="bg-gray-100 rounded-lg overflow-hidden">
                                                            <img src={item?.image} loading="lazy" alt={item?.name} class="w-full h-full object-cover object-center" />
                                                        </div>

                                                        <div class="bg-gray-100 rounded-lg overflow-hidden">
                                                            <img src={item?.image} loading="lazy" alt={item?.name} class="w-full h-full object-cover object-center" />
                                                        </div>

                                                        <div class="bg-gray-100 rounded-lg overflow-hidden">
                                                            <img src={item?.image} loading="lazy" alt={item?.name} class="w-full h-full object-cover object-center" />
                                                        </div>
                                                    </div>

                                                    <div class="lg:col-span-4 bg-gray-100 rounded-lg overflow-hidden relative">
                                                        <img src={item?.image} loading="lazy" alt={item?.name} class="w-full h-full object-cover object-center" />

                                                        <span class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">Popular</span>

                                                        <a href="#" class="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-red-300 text-gray-500 active:text-gray-700 border text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 absolute right-4 top-4 px-3.5 py-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>


                                                <div class="md:py-8">

                                                    <div class="mb-2 md:mb-3">
                                                        <span class="inline-block text-gray-500 mb-0.5">Meal</span>
                                                        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">{name}</h2>
                                                    </div>

                                                    <div class="flex items-center gap-3 mb-6 md:mb-10">
                                                        <div class="h-7 flex items-center bg-red-900 text-white rounded-full gap-1 px-2">
                                                            <span class="text-sm">4.2</span>

                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        </div>

                                                        <span class="text-gray-500 text-sm transition duration-100">{ name.length } ratings</span>
                                                    </div>

                                                    <div class="mb-8 md:mb-10">
                                                        <span class="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Description</span>

                                                        <div class="block text-3xl">
                                                            {description}
                                                         </div>
                                                    </div>


                                                    <div class="mb-4">
                                                        <div class="flex items-end gap-2">
                                                            {discount > 0 ? <strike className="text-sm mx-2 text-red-500 line-through stroke-red-600  stroke-2 ">{price}</strike> : null}
                                                            <b className="text-gray-800 text-xl md:text-2xl">{discount > 0 ? (price - discount) : price} {item.currency}</b>

                                                        </div>

                                                        <span class="text-gray-500 text-sm">incl. VAT </span>
                                                    </div>


                                                    <div class="flex items-center text-gray-500 gap-2 mb-6">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                                        </svg>

                                                        <span class="text-sm">{item?.time}</span>
                                                    </div>


                                                    <div class="flex gap-2.5">
                                                        <button onClick={ () => {
                                                            props.handleAddToCart(item);
                                                            props.closeModal();
                                                            }} 
                                                            class="inline-block flex-1 sm:flex-none bg-red-900 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                                                            Add to cart
                                                            </button>

                                                        <button onClick={() => props.closeModal()}  class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-red-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                                                            Cancel
                                                            </button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 hidden">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-yellow-300 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                        onClick={() => props.closeModal()}
                                    >
                                        {"close"}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>


    )
}

export default ItemDetails;