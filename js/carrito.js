const lista = document.getElementById("shop")
const prodAlistados = document.getElementById("prodAlistados")
const vaciarCarrito = document.getElementById("vaciarCarrito")
const precioTotal = document.getElementById("precioTotal")
const verTotal = document.getElementById("total")

// FUNCIONES
//traerProd: obtiene los datos de un producto en formato JSON a través de una llamada asíncrona a una API y los muestra en la interfaz de usuario junto con otros productos almacenados localmente.
const traerProd = async (id) => {
    const resp = await fetch('/producto.json');
    const data = await resp.json();
    const producto = data.productos[id];
    cargarProducto(producto);
    mostrarProdLocalStorage();
    mostrarProductos();
  }
  //mostrarProductos: muestra la lista de productos disponibles en la interfaz de usuario. Se utiliza una llamada asíncrona a una API para obtener los datos de los productos.
  const mostrarProductos = async () => {
    try {
      const resp = await fetch('/producto.json');
      if (!resp.ok) {
        throw new Error('Error al obtener los datos del servidor');
      }
      const data = await resp.json();
      const productos = data.productos;
      const productosContenedor = document.getElementById("productosContenedor");
  
      productosContenedor.innerHTML = "";
  
      productos.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.classList.add("col-6", "col-md-4", "col-lg-2", "p-0");
        productoElemento.innerHTML = `
        <div class="product-container">
        <div class="card prod p-3 style="width: 20rem; ">
            <div class="card-body container d-flex flex-column justify-content-around align-items-center">
                <img class="prod__img" src="${producto.img}" alt="">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <button class="button-43" id="buy${productos.indexOf(producto)+1}">Agregar al carrito
                    <span></span>
                </button>
            </div>
        </div>
    </div>
    </div>
    
        `;
        productosContenedor.appendChild(productoElemento);
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  mostrarProductos();//mostrarProductos: muestra la lista de productos disponibles en la interfaz de usuario.
  
//guardarLocalStorage: función que permite guardar datos en el LocalStorage del navegador.
const guardarLocalStorage = async (key, value) => {
    return localStorage.setItem(key, value)
}
//mostrarProdLocalStorage: muestra el producto agregado dentro del carrito de compras y muestra una notificación con toastify al agregarlo correctamente. También se actualiza el valor del total de la compra y se guarda en el LocalStorage.
const mostrarProdLocalStorage = () => {
    const listaProdLS = JSON.parse(localStorage.getItem("listaProd"))
    prodAlistados.textContent = ""

    let total = 0

    for (const prod of listaProdLS) {

        let currentProd = document.createElement('p')
        currentProd.innerHTML = (`<p> ${prod.nombre}  💲${prod.precio}</p>`)
        prodAlistados.appendChild(currentProd)

        total += prod.precio
    }

    precioTotal.textContent = `Total: $${total}`
    guardarLocalStorage("total", total)

    Toastify({
        text: `Se agregó un producto al carrito.`,
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "linear-gradient(to right, #190806, #289600)",
        }
    }).showToast();
    carritoContenedor.textContent = listaProdLS.length;
    
}

//cargarProducto: recibe un objeto Producto, agrega su precio al valor total, guarda el Producto en un array y en el localStorage.
const cargarProducto = async (obj) => {
    total += obj.precio
    guardarLocalStorage("total", total)

    productos.push(obj)
    guardarLocalStorage("listaProd", JSON.stringify(productos))
}

vaciarCarrito.onclick = function (e) {
    swal({
        title: "Estas seguro de vaciar el carrito?",
        icon: "warning",
        buttons: ["Cancelar", "Si, vacialo!"],
        dangerMode: true,
    })
        .then((value) => {
            if (value) {
                swal("El carrito se vació correctamente!", {
                    icon: "success",
                });
                prodAlistados.textContent = ""
                precioTotal.textContent = "Total: $0"
                localStorage.clear()
                guardarLocalStorage("total", 0)
                productos.length = 0
                carritoContenedor.textContent = 0;
            }
        });
  }
// Función que muestra por sweetAlert el total de los productos agregados al carrito
verTotal.onclick = function (e) {
    e.preventDefault()
  
    const total = parseInt(localStorage.getItem("total")) || 0
  
    if (total == 0) {
        swal({
            icon: "error",
            title: "No hay productos en su carrito :("
        })
    } else {
        swal({
            title: "El valor total de su compra es:",
            text: `$ ${total}`,
            buttons: {
                comprar: "Comprar",
                continuar: "Seguir comprando"
            }
        }).then((value) => {
            if (value == "comprar") {
                swal({
                    icon: "success",
                    title: "Gracias por su compra!",
                    text: `El total de su compra es $ ${total}`
                }).then(() => {
                    prodAlistados.textContent = ""
                    precioTotal.textContent = "Total: $0"
                    localStorage.clear()
                    guardarLocalStorage("total", 0)
                    productos.length = 0
                    carritoContenedor.textContent = 0;
                })
            }
        })
    }
  }

//Variables
let total = 0
guardarLocalStorage("total", 0)
const productos = []

//Programa

lista.addEventListener("click", agregar)
function agregar(e) {
    e.preventDefault()
    let opc = e.target.id
    switch (opc) {
        case "buy1":
            traerProd(0)
            break;
        case "buy2":
            traerProd(1)
            break;
        case "buy3":
            traerProd(2)
            break;
        case "buy4":
            traerProd(3)
            break;
        case "buy5":
            traerProd(4)
            break;
        case "buy6":
            traerProd(5)
            break;
        case "buy7":
            traerProd(6)
            break;
        case "buy8":
            traerProd(7)
            break;

    }

}