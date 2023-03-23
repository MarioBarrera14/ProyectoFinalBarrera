# PreEntrega2Barrera.
Este código es una implementación de una tienda en línea que permite al usuario ver una lista de productos, agregarlos al carrito de compras y ver el total de los productos seleccionados.

Primero, se definen las variables que se utilizarán para acceder a los elementos HTML relevantes: lista, prodAlistados, vaciarCarrito, precioTotal y verTotal.

Luego se definen las funciones:

traerProd: obtiene los datos de un producto en formato JSON a través de una llamada asíncrona a una API y los muestra en la interfaz de usuario junto con otros productos almacenados localmente.

mostrarProductos: muestra la lista de productos disponibles en la interfaz de usuario. Se utiliza una llamada asíncrona a una API para obtener los datos de los productos.

guardarLocalStorage: función que permite guardar datos en el LocalStorage del navegador.

mostrarProdLocalStorage: muestra el producto agregado dentro del carrito de compras y muestra una notificación con toastify al agregarlo correctamente. También se actualiza el valor del total de la compra y se guarda en el LocalStorage.

cargarProducto: recibe un objeto Producto, agrega su precio al valor total, guarda el Producto en un array y en el localStorage.

Después, se definen los eventos para los botones de vaciar el carrito y ver el total de la compra. Al hacer clic en el botón "vaciarCarrito", se muestra una alerta de sweetAlert para confirmar si el usuario desea vaciar el carrito. Si el usuario acepta, se borran los datos de LocalStorage y se reinician las variables de los productos y el total de la compra.

Al hacer clic en el botón "verTotal", se muestra el valor total de los productos agregados al carrito. Si no hay productos en el carrito, se muestra una alerta de sweetAlert. Si hay productos, se muestra el valor total y se ofrece la opción de comprar o seguir comprando. Si el usuario elige "comprar", se muestra otra alerta de sweetAlert agradeciendo al usuario por su compra y se reinician las variables del carrito y del total de la compra.

Finalmente, se llama a la función mostrarProductos para mostrar los productos disponibles en la página.



# ProyectoFinalBarrera
