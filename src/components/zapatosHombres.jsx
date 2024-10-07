// src/components/ZapatosHombres.jsx
import React from 'react';

const ZapatosHombres = ({ titulo, calzadoHombres, agregarAlCarrito }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <div className='divCalzadoHombres'>
        {calzadoHombres.map((calzado) => (
          <div className='calzadoHombres' key={calzado.id}>
            <h3>{calzado.Nombre}</h3>
            <img src={calzado.Imagen} alt={calzado.Nombre} style={{ width: '100px' }} />
            <p>Precio: {calzado.Precio}</p>
            {/* Asegúrate de pasar el producto al hacer clic en el botón */}
            <button onClick={() => agregarAlCarrito(calzado)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZapatosHombres;

