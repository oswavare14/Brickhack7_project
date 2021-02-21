import React, { useState } from 'react'
import { db } from '../firebase'
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com'

function Client() {

    const [menu, setMenu] = useState([]);
    const [total, setTotal] = useState(() => { return 0 });

    const generarFactura = async (event) => {
        event.preventDefault();

        /*let factura = []
        factura.push("XQDDWDOPQMDPW!@NP")
        factura.push(total)
        factura.push(menu)*/

        let store = await db.collection("Facturas").doc("XQDDWDOPQMDPW!@NP").set({
            DocID: "XQDDWDOPQMDPW!@NP",
            Total: total,
            Menu: menu
        }).then(() => {
        }).catch(() => {
        })
    }

    const refreshPage = () => {
        window.location.reload()
    }

    const addItem = (event) => {

        const input = document.getElementById(event.target.name + "_input")

        if (input.value != 0) {
            setMenu(prevItems => [...prevItems, {
                name: event.target.name,
                value: event.target.value,
                cantidad: input.value
            }]);
            /*
                setTax(tax + (event.target.value * 0.12))
                setSubtotal(subtotal + (event.target.value - (event.target.value * 0.12)))*/
            var numero = Number(event.target.value)
            setTotal(prevTot => prevTot + (numero * input.value))
        } else {
            alert("no amount selected");
        }
    }

    const handleRemoveItem = (event) => {
        var flag = false
        var element
        var index
        for (index = 0; index < menu.length; index++) {
            element = menu[index];
            if (element.name === event.target.name) {
                flag = true
                break
            }
        }

        if (flag) {
            setTotal(prevTot => prevTot - (element.value * element.cantidad))
        }

        const temp = [...menu];
        temp.splice(index, 1);
        setMenu(temp);
    }

    const handleRemoveAllItems = () => {
        setMenu([]);
        setTotal(0)
    }

    const handleChange = (event) => {
        /*var numero = Number(event.target.id)
        var numero1 = Number(event.target.value)
        setTotal(prevTot => prevTot + (numero * numero1))*/
    }

    return (
        <div>
            <div class="container mx-auto bg-white">
                <div class="flex lg:flex-row flex-col-reverse shadow-lg">
                    <div class="w-full lg:w-3/5 min-h-screen shadow-lg">
                        <div class="flex flex-row justify-between items-center px-5 mt-5">
                            <div class="text-gray-800">
                                <div class="font-bold text-xl">IM HUNGRY</div>
                                <span class="text-xs">ID#123</span>
                            </div>
                            <div class="flex items-center">
                                <div className="space-x-5">
                                    <button class="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded"><Link to={{
                                        pathname: '/admin',
                                        aboutProps: {
                                            menu: menu
                                        }
                                    }} className="btn btn-primary rounded cursor-pointer">Orders</Link></button>
                                    <button class="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded">Help</button>
                                </div>
                            </div>
                        </div>

                        <div>

                            <div class="grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto h-3/4">

                                <div className="text-7xl">Pizzas</div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Pizza 1</div>
                                        </div>
                                        <button value={2} name="Pizza 1" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Pizza 1_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$2.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Pizza 2</div>
                                        </div>
                                        <button value={3} name="Pizza 2" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Pizza 2_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$3.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPER%20SUPREMA.jpg" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Pizza 3</div>
                                        </div>
                                        <button value={3} name="Pizza 3" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Pizza 3_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$3.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Pizza 4</div>
                                        </div>
                                        <button value={2} name="Pizza 4" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Pizza 4_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$2.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PEPPERONI%20O%20JAMON%20LOVERS.jpg" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Pizza 5</div>
                                        </div>
                                        <button value={3} name="Pizza 5" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Pizza 5_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$3.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPREMA.jpg" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div className="text-7xl">Burgers</div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Burger 1</div>
                                        </div>
                                        <button value={3} name="Burger 1" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Burger 1_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$3.00</span>
                                        <img src="https://pinchofyum.com/wp-content/uploads/Tofu-Burgers-Square.jpg" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Burger 2</div>
                                        </div>
                                        <button value={5} name="Burger 2" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Burger 2_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$5.00</span>
                                        <img src="https://vignette.wikia.nocookie.net/eruowood/images/c/ca/BBQ_Tendercrisp_chicken_sandwich.png/revision/latest?cb=20150731202858" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Burger 3</div>
                                        </div>
                                        <button value={3} name="Burger 3" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Burger 3_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$3.00</span>
                                        <img src="https://th.bing.com/th/id/Rc87556d1f68c61ead6230c77a5e50a51?rik=saV7ZpA7y7ekcg&riu=http%3a%2f%2fcdn2.coachmag.co.uk%2fsites%2fcoachmag%2ffiles%2fstyles%2finsert_main_wide_image%2fpublic%2f2017%2f08%2fchicken-burger.jpg%3fitok%3dSiWTYMBr&ehk=szbi8Z9fmZm9PH%2frK1rZkS2NuiViw7WBO4E6BaaFC%2b0%3d&risl=&pid=ImgRaw" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div />
                                <div />

                                <div className="text-7xl">Drinks</div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Drink 1</div>
                                        </div>
                                        <button value={1} name="Drink 1" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Drink 1_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$1.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/BEBIDAS/PEPSI%20500%20ML.png" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Drink 2</div>
                                        </div>
                                        <button value={1} name="Drink 2" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Drink 2_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$1.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/BEBIDAS/MIRINDA%20500%20ML.png" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Drink 3</div>
                                        </div>
                                        <button value={1} name="Drink 3" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Drink 3_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$1.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/BEBIDAS/7%20500%20ML.png" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-48 justify-between">
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2">
                                            <div class="font-bold text-gray-800">Drink 4</div>
                                        </div>
                                        <button value={1} name="Drink 4" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                                    </div>
                                    <input id="Drink 4_input" placeholder="1" type="number" min={1} max={10} className="w-14 border border-gray-200 rounded-md " />
                                    <span class="font-light text-sm text-gray-400">150g</span>
                                    <div class="flex flex-row justify-between items-center">
                                        <span class="self-end font-bold text-lg text-yellow-500">$1.00</span>
                                        <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/BEBIDAS/AGUAZUL.png" class=" h-24 w-24 object-cover rounded-md" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="w-full lg:w-2/5">

                        <div class="flex flex-row items-center justify-between px-5 mt-5">
                            <div class="font-bold text-xl">Current Order</div>
                            <div class="font-semibold">
                                <button class="px-4 py-2 rounded-md bg-red-100 text-red-500" onClick={handleRemoveAllItems}>Clear All</button>
                            </div>
                        </div>

                        <div class="px-5 py-4 mt-5 overflow-y-auto h-64">

                            {menu.map(menu => {
                                const { name, value, cantidad } = menu
                                return (<div>
                                    <div class="grid grid-cols-3">
                                        <div><span class="ml-4 font-semibold text-lg">{name}</span></div>
                                        <div class="font-semibold text-base w-16 text-center">
                                            ${value}.00 x{cantidad}
                                        </div>
                                        <div><button className="bg-red-500 h-6 w-6 text-white" name={name} onClick={handleRemoveItem}>X</button></div>
                                    </div>
                                </div>)
                            })
                            }
                        </div>
                        {/*}
            <div class="px-5 mt-5">
              <div class="py-4 rounded-md shadow-lg">
                <div class=" px-4 flex justify-between ">
                  <span class="font-semibold text-sm">Subtotal</span>
                  <span class="font-bold">$ {subtotal}</span>
                </div>
                <div class=" px-4 flex justify-between ">
                  <span class="font-semibold text-sm">Tax</span>
                  <span class="font-bold">$ {tax}</span>
                </div>
              </div>
            </div>*/
                        }
                        <div class="px-5 mt-5">
                            <div class="rounded-md shadow-lg px-4 py-4">
                                <div class="flex flex-row justify-between items-center">
                                    <div class="flex flex-col">
                                        <span class="uppercase text-xs font-semibold">Total</span>
                                        <span class="text-xl font-bold text-yellow-500">${total}</span>
                                    </div>
                                    <button class="px-4 py-3 bg-gray-300 text-gray-800 rounded-md font-bold" onClick={refreshPage}>Cancel</button>
                                </div>
                            </div>
                        </div>

                        <div class="px-5 mt-5 space-y-1">
                            <div class="px-4 py-5 rounded-md shadow-lg text-center bg-red-500 text-white font-semibold">
                                Place order
                            </div>
                            <button class="px-4 py-5 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold" onClick={generarFactura}>
                                Pay With Cash
                            </button>
                            <button class="px-4 py-5 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold" onClick={generarFactura}>
                                Pay With Credis/Debit Card
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Client