import {  useState } from 'react'
import { Tab, Combobox } from '@headlessui/react'

import { HiSelector } from 'react-icons/hi';
import { GiMeal } from 'react-icons/gi';
import {  MdRefresh } from 'react-icons/md';

import food_menu_data from '../data/menu';
import drink_menu_data from '../data/drinks';
import MenuItem from './menuItem';

const MenuTabs = (props) => {
    const classes = "bg-red-700 bg-opacity-75 rounded-xl shadow-md min-w-full min-h-full  my-4 px-2  md:w-3/5 overflow-hidden sm:my-px sm:px-px md:my-4 md:px-4";
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [foodMenu] = useState(food_menu_data);
    const [drinkMenu] = useState(drink_menu_data);
    const [foodQuery, setFoodQuery] = useState('');

    const [selectedFood, setSelectedFood] = useState('' ?? foodMenu[0]);
    const [filteredFood, setFilteredFood] = useState(foodMenu);


    const filterFood = () => {
        setFilteredFood(foodQuery === ''
            ? foodMenu
            : foodMenu.filter((food) => {
                return food.name.toLowerCase().includes(foodQuery.toLowerCase())
            }))
    }

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    
    

    const handleFoodQueryChange = (e) => {
        setFoodQuery(e.target.value)
        //filterFood()
    }

    const resetSearch = () => {
        setFoodQuery('')
        filterFood()
    }
    

    return (
        <Tab.Group
        selectedIndex={selectedIndex}
        onChange={(index) => {
            setSelectedIndex(index);
        }}>
            <Tab.List>
                <Tab className={({ selected }) => selected ? "py-2 px-3 bg-yellow-400 shadow-md text-red-900 md:mx-2 rounded-md font-bold focus:border-yellow-200" : " text-white p-3 border-1"}>Food Menu</Tab>
                <Tab className={({ selected }) => selected ? "py-2 px-3 bg-yellow-400 shadow-md text-red-900 md:mx-2 rounded-md font-bold focus:border-yellow-200" : " text-white p-3 border-1"}>Drink Menu</Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel className={classes}>
                    <div className="mx-auto my-4 relative">
                        <Combobox value={selectedFood} onChange={setSelectedFood} >
                            <Combobox.Input
                                placeholder="Search for a particular food"
                                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                onChange={(e) => handleFoodQueryChange(e)}
                                onSelect={() => filterFood() }
                                displayValue={(food) => food.name}
                                
                            />
                            <Combobox.Options className="absolute z-10 mt-1 max-w-max bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {filteredFood.map((food) => (
                                    <Combobox.Option
                                    key={food.id}
                                    value={food}
                                    disabled={food.unavailable}
                                    className={({ active }) =>
                                    classNames(
                                        active ? 'text-red-900 font-bold bg-yellow-400' : 'text-gray-900',
                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                        )
                                    }
                                    >
                                        <span className="flex items-center">
                                            { 
                                            food.image ? 
                                            <img src={food.image} alt={food.name + " illustration"} className="flex-shrink-0 h-6 w-6 rounded-full" /> :
                                            <div className="w-6 h-6 flex justify-center place-items-center  rounded-full  bg-yellow-400 text-red-900">
                                                <GiMeal className="text-6xl" />
                                            </div>
                                            }
                                            <span className="ml-3 block truncate">{food.name}</span>
                                        </span>
                                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <HiSelector className="h-5 w-5 text-gray-800" />
                                        </span>
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                            <MdRefresh onClick={resetSearch} className='float-right absolute top-1/2 -translate-y-1/2 right-2 text-2xl text-gray-300 hover:text-gray-400 cursor-pointer'/>
                        </Combobox>
                    </div>
                    {
                       filteredFood.map((item) => <MenuItem key={"food-item-" + item.id} item={item}  handleAddToCart={ () => props.addToCart(item)} />)
                    }
                </Tab.Panel>
                <Tab.Panel className={classes}>
                    {
                        drinkMenu.map((data, index) => <MenuItem key={"drink-item-" + data.id} item={data}   handleAddToCart={ () => props.addToCart(data)} />)
                    }
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default MenuTabs;
