import React, { useState } from 'react'
import { data } from '../data/data'


const Food = () => {

    const [food, setFood] = useState(data)

    // filter type pizza/burger/etc
    const filterType = (category) => {
        setFood(data.filter((item) => {
            return item.category === category
        }))
    }

    const filterPrice = (price) => {
        setFood(data.filter((item) => {
            return item.price === price
        }))
    }

    return (
        <div className='max-w-[1240px] m-auto px-4 py-12'>
            <h1 className='font-bold text-4xl text-center text-orange-600'>Top Rated Menu Items</h1>
            {/* filter row */}
            <div className=' flex flex-col lg:flex-row justify-between'>
                {/* filter type */}
                <div>
                    <p className='font-bold text-gray-700'>  Filter type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=> setFood(data)} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>All</button>
                        <button onClick={()=> filterType('burger')} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>Burgers</button>
                        <button onClick={()=> filterType('pizza')} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>Pizza</button>
                        <button onClick={()=> filterType('salad')} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>Salad</button>
                        <button onClick={()=> filterType('chicken')} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>Chicken</button>

                    </div>
                </div>
                {/* filter price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=> filterPrice('$')} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>$</button>
                        <button onClick={()=> filterPrice('$$')} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>$$</button>
                        <button onClick={()=> filterPrice('$$$')} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>$$$</button>
                        <button onClick={()=> filterPrice('$$$$')} className='mx-1 border-orange-600 text-orange-600  hover:text-white hover:bg-orange-600'>$$$$</button>


                    </div>
                </div>

            </div>
            {/* display food */}
            <div className='grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6'>
                {food.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img className='max-h-[100px] sm:max-h-[200px] w-full object-cover rounded-t-lg ' src={item.image} alt={item.name}></img>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold text-orange-600'>{item.name}</p>

                            <p className='text-gray-700'><span className='bg-orange-500 text-white rounded-full p-1'>{item.price}</span></p>

                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Food