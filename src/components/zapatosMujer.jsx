import React from 'react';

const ZapatosMujer = ({ titulo, calzadoMujer, agregarAlCarrito }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <div className='divCalzadoMujer'>
        {calzadoMujer.map((calzado) => (
          <div className='calzadoMujer' key={calzado.id}>
            <h3>{calzado.Nombre}</h3>
            <img src={calzado.Imagen} alt={calzado.Nombre} style={{ width: '100px' }} />
            <p>Precio: {calzado.Precio}</p> {/* Asegúrate de agregar $ aquí */}
            <button onClick={() => agregarAlCarrito(calzado)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZapatosMujer;


