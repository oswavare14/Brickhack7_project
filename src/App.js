import React, { useState } from 'react'
import { db } from './firebase'

function App() {

  const [menu, setMenu] = useState([]);
  const [total, setTotal] = useState(() => {return 0});

  const agrega = () => {
    db.collection("Facturas").doc("123").set({
      Nombre: "oswaldo",
      Apellido: "si"
    }).then(() => {
      console.log("funciona")
    }).catch(() => {
      console.log("no funciona")
    })
  }

  const addItem = (event) => {
    setMenu(prevItems => [...prevItems, {
      name: event.target.name,
      value: event.target.value
    }]);
/*
    setTax(tax + (event.target.value * 0.12))
    setSubtotal(subtotal + (event.target.value - (event.target.value * 0.12)))*/
    var numero = Number(event.target.value)
    setTotal(prevTotal => prevTotal + numero)
  }

  const handleRemoveItem = (event) => {
    var flag = false
    var element
    for (let index = 0; index < menu.length; index++) {
      element = menu[index];
      if (element.name === event.target.name) {
        flag = true
        break
      }
    }

    if (flag) {
      setTotal(prevSub => prevSub - element.value)
    }

    const temp = [...menu];
    temp.splice(event.target.name, 1);
    setMenu(temp);
  }

  const handleRemoveAllItems = () => {
    setMenu([]);
    setTotal(0)
  }

  const handleChange = (event) => {
  }

  return (
    <div>
      <div class="container mx-auto bg-white">
        <div class="flex lg:flex-row flex-col-reverse shadow-lg">
          <div class="w-full lg:w-3/5 min-h-screen shadow-lg">
            <div class="flex flex-row justify-between items-center px-5 mt-5">
              <div class="text-gray-800">
                <div class="font-bold text-xl">NAME</div>
                <span class="text-xs">ID#123</span>
              </div>
              <div class="flex items-center">
                <div>
                  <span class="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded">Help</span>
                </div>
              </div>
            </div>

            <div>

              <div class="grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto h-3/4">

                <div className="text-7xl">Pizzas</div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Pizza 1</div>
                    </div>
                    <button value={2} name="Pizza 1" className="bg-yellow-500 text-center text-white" onClick={addItem}>Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Pizza 2</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPER%20SUPREMA.jpg" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Pizza 3</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/CANADIENSE.jpg" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Pizza 4</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/PEPPERONI%20O%20JAMON%20LOVERS.jpg" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Pizza 5</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/SUPREMA.jpg" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div className="text-7xl">Burgers</div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Burger 1</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://pinchofyum.com/wp-content/uploads/Tofu-Burgers-Square.jpg" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Burger 2</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://vignette.wikia.nocookie.net/eruowood/images/c/ca/BBQ_Tendercrisp_chicken_sandwich.png/revision/latest?cb=20150731202858" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Burger 3</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://th.bing.com/th/id/Rc87556d1f68c61ead6230c77a5e50a51?rik=saV7ZpA7y7ekcg&riu=http%3a%2f%2fcdn2.coachmag.co.uk%2fsites%2fcoachmag%2ffiles%2fstyles%2finsert_main_wide_image%2fpublic%2f2017%2f08%2fchicken-burger.jpg%3fitok%3dSiWTYMBr&ehk=szbi8Z9fmZm9PH%2frK1rZkS2NuiViw7WBO4E6BaaFC%2b0%3d&risl=&pid=ImgRaw" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div />
                <div />

                <div className="text-7xl">Drinks</div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Drink 1</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/BEBIDAS/PEPSI%20500%20ML.png" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Drink 2</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/BEBIDAS/MIRINDA%20500%20ML.png" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Drink 3</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/BEBIDAS/7%20500%20ML.png" class=" h-14 w-14 object-cover rounded-md" alt="" />
                  </div>
                </div>

                <div class="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2">
                      <div class="font-bold text-gray-800">Drink 4</div>
                    </div>
                    <button className="bg-yellow-500 text-center text-white">Order</button>
                  </div>
                  <span class="font-light text-sm text-gray-400">150g</span>
                  <div class="flex flex-row justify-between items-center">
                    <span class="self-end font-bold text-lg text-yellow-500">$1.75</span>
                    <img src="https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/BEBIDAS/AGUAZUL.png" class=" h-14 w-14 object-cover rounded-md" alt="" />
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
                const { name, value } = menu
                return (<div>
                  <div class="grid grid-cols-4">
                    <div><span class="ml-4 font-semibold text-sm">{name}</span></div>
                    <div class="w-32 flex justify-between">
                      <input placeholder="1" onChange={handleChange} type="number" disable min={1} max={10} className="border border-gray-200 rounded-md " />
                    </div>
                    <div class="font-semibold text-lg w-16 text-center">
                      ${value}.00
                    </div>
                    <div><button className="bg-red-500 h-6 w-6 text-white" name={name} onClick={handleRemoveItem}>x</button></div>
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
                  <div class="px-4 py-3 bg-gray-300 text-gray-800 rounded-md font-bold">Cancel</div>
                </div>
              </div>
            </div>

            <div class="px-5 mt-5 space-y-1">
              <div class="px-4 py-5 rounded-md shadow-lg text-center bg-red-500 text-white font-semibold">
                Order food
              </div>
              <div class="px-4 py-5 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold">
                Pay With Cash
              </div>
              <div class="px-4 py-5 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold">
                Pay With Credis/Debit Card
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
