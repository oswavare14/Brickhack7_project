import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { Link } from "react-router-dom";

function Employee(props) {

    const [orders, setOrders] = useState([])
    const [deliver, setDeliver] = useState([])

    useEffect(() => {
        setOrders(props.location.aboutProps.menu);
    }, [props.location.aboutProps.menu])


    const handleRemoveItem = (event) => {
        var flag = false
        var element
        var index
        for (index = 0; index < orders.length; index++) {
            element = orders[index];
            if (element.name === event.target.name) {
                flag = true
                break
            }
        }

        if (flag) {
            setDeliver(prevItems => [...prevItems, {
                name: element.name,
                value: element.value,
                cantidad: element.cantidad
            }]);
        }

        const temp = [...orders];
        temp.splice(index, 1);
        setOrders(temp);
    }

    const handleRemoveItem1 = (event) => {
        var flag = false
        var element
        var index
        for (index = 0; index < deliver.length; index++) {
            element = deliver[index];
            if (element.name === event.target.name) {
                flag = true
                break
            }
        }

        const temp = [...deliver];
        temp.splice(index, 1);
        setDeliver(temp);
    }

    return (
        <div>
            <div>
                <button class="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded"><Link to={{
                    pathname: '/'
                }} >Back</Link></button>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <div class="w-full h-full">
                        <div class="flex flex-row items-center justify-between px-5 mt-5">
                            <div class="font-bold text-xl">Kitchen</div>
                            
                        </div>

                        <div class="px-5 py-4 mt-5 overflow-y-auto h-64">
                            <label>Table ID#123 </label>
                            {orders.map(orders => {
                                const { name, value, cantidad } = orders
                                return (<div>
                                    <div class="grid grid-cols-3">
                                        <div><span class="ml-4 font-semibold text-lg">{name}</span></div>
                                        <div class="font-semibold text-base w-16 text-center">
                                            x{cantidad}
                                        </div>
                                        <div><button className="bg-green-500 h-6 w-6 text-white" name={name} onClick={handleRemoveItem}>√</button></div>
                                    </div>
                                </div>)
                            })
                            }
                        </div>

                        <div class="px-5 mt-5">
                            <div class="rounded-md shadow-lg px-4 py-40" />
                        </div>
                    </div>
                </div>

                <div>
                    <div class="w-full h-full">
                        <div class="flex flex-row items-center justify-between px-5 mt-5">
                            <div class="font-bold text-xl">Deliver Order</div>
                            
                        </div>

                        <div class="px-5 py-4 mt-5 overflow-y-auto h-64">
                        <label>Table ID#123 </label>
                            {deliver.map(deliver => {
                                const { name, value, cantidad } = deliver
                                return (<div>
                                    <div class="grid grid-cols-3">
                                        <div><span class="ml-4 font-semibold text-lg">{name}</span></div>
                                        <div class="font-semibold text-base w-16 text-center">
                                            x{cantidad}
                                        </div>
                                        <div><button className="bg-red-500 h-6 w-6 text-white" name={name} onClick={handleRemoveItem1}>X</button></div>
                                    </div>
                                </div>)
                            })
                            }
                        </div>

                        <div class="px-5 mt-5">
                            <div class="rounded-md shadow-lg px-4 py-40" />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default Employee