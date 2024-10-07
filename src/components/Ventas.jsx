import React from 'react';

const Ventas = ({ ventas }) => {
  const calcularTotalVenta = (productos) => {
    return productos.reduce((total, producto) => total + Number(producto.precio), 0);
  };

  return (
    <div>
      <h2>Ventas Logradas</h2>
      {ventas.length === 0 ? (
        <p>No hay ventas registradas.</p>
      ) : (
        ventas.map((venta, index) => (
          <div key={index} style={{ marginBottom: '20px', border: '1px solid black', padding: '10px' }}>
            <h3>Datos del cliente:</h3>
            <p>Nombre: {venta.cliente.nombre}</p>
            <p>Dirección: {venta.cliente.direccion}</p>
            <p>Correo electrónico: {venta.cliente.correo_electronico}</p>

            <h3>Productos Comprados:</h3>
            {venta.productos.map((producto, i) => (
              <div key={i}>
                <p>Producto: {producto.producto}</p>
                <p>Precio: ${producto.precio}</p>
              </div>
            ))}

            <h3>Total de la Venta: ${calcularTotalVenta(venta.productos)}</h3>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Ventas;
