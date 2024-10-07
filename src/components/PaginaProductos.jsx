import React from 'react';

const PaginaProductos = ({ calzadoHombre, calzadoMujer, agregarAlCarrito }) => {
  return (
    <div>
      <h1>Todos los productos</h1>
      
      <h2>Calzado de Mujer</h2>
      <div className='divCalzadoMujer'>
        {calzadoMujer.map((calzado) => (
          <div className='calzadoMujer' key={calzado.id}>
            <h3>{calzado.Nombre}</h3>
            <img src={calzado.Imagen} alt={calzado.Nombre} style={{ width: '100px' }} />
            <p>Precio: {calzado.Precio}</p>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button> {/* Botón para comprar */}
          </div>
        ))}
      </div>

      <h2>Calzado de Hombre</h2>
      <div className='divCalzadoHombres'>
        {calzadoHombre.map((calzado) => (
          <div className='calzadoHombres' key={calzado.id}>
            <h3>{calzado.Nombre}</h3>
            <img src={calzado.Imagen} alt={calzado.Nombre} style={{ width: '100px' }} />
            <p>Precio: {calzado.Precio}</p>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button> {/* Botón para comprar */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaProductos;
