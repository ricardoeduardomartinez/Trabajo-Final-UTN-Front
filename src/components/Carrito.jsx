import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Carrito = ({ carrito, finalizarCompra, quitarDelCarrito }) => {
  const navigate = useNavigate(); // Crear instancia de navigate
  const total = carrito.reduce((acc, item) => acc + (Number(item.Precio.replace('$', '').trim()) || 0), 0); // Calcular el total

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [datosCliente, setDatosCliente] = useState({
    nombre: '',
    correo_electronico: '',
    direccion: '',
    telefono: '',
  });

  const handleFinalizarCompra = () => {
    setMostrarFormulario(true); // Mostrar el formulario de compra
  };

  const handleCerrar = () => {
    navigate('/'); // Redirigir a la página principal al cerrar el carrito
  };

  const handleQuitar = (item) => {
    quitarDelCarrito(item); // Llamar a la función que quita el artículo del carrito
  };

  const handleInputChange = (e) => {
    setDatosCliente({
      ...datosCliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    finalizarCompra(datosCliente); // Pasar los datos del cliente a finalizarCompra
    alert(`Gracias por tu compra, ${datosCliente.nombre}! El total es de $${total} PRONTO NOS ESTAMOS COMUNICANDO PARA CORRDINAR EL PAGO Y EL ENVÍO`);
    navigate('/'); // Redirigir a la página principal después de finalizar
  };

  const handleCancelar = () => {
    setMostrarFormulario(false); // Ocultar el formulario sin vaciar el carrito
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {carrito.map((calzado) => (
              <li key={calzado.id}>
                <h3>{calzado.Nombre}</h3>
                <img src={calzado.Imagen} alt={calzado.Nombre} style={{ width: '50px' }} />
                <p>Precio: ${calzado.Precio.replace('$', '')}</p>
                <button onClick={() => handleQuitar(calzado)}>Quitar</button>
              </li>
            ))}
          </ul>
          <h2>Total: ${total}</h2>

          {!mostrarFormulario ? (
            <>
              <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
              <button onClick={handleCerrar} style={{ marginLeft: '10px' }}>Cerrar</button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={datosCliente.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Dirección:</label>
                <input
                  type="text"
                  name="direccion"
                  value={datosCliente.direccion}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Correo electrónico:</label>
                <input
                  type="text"
                  name="correo_electronico"
                  value={datosCliente.correo_electronico}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Teléfono:</label>
                <input
                  type="text"
                  name="telefono"
                  value={datosCliente.telefono}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Confirmar Pedido</button>
              <button type="button" onClick={handleCancelar} style={{ marginLeft: '10px' }}>Cancelar</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Carrito;
