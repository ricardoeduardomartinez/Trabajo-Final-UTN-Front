import React from 'react';

const ZapatosHombres = (props) => {
  const calzadoHombresHTML = props.calzadoHombres.map((calzado) => {
    return (
      <div key={calzado.id}>
        <h3>{calzado.Nombre}</h3>
        
        {/* Mostrar la imagen adaptada */}
        <img
          src={calzado.Imagen}
          alt={calzado.Nombre}
          style={{
            width: '150px', // Adaptar el ancho de la imagen
            height: 'auto', // Mantener la proporción
            objectFit: 'cover', // Asegurarse de que la imagen se ajuste bien
            borderRadius: '10px' // Bordes redondeados opcionales
          }}
        />

        <p>Talles: {calzado.Talles}</p>
        <p>Descripción: {calzado.Descripcion}</p>
        <p>Precio: {calzado.Precio}</p>
        <br />
      </div>
    );
  });

  return (
    <div> 
      <h1>{props.titulo}</h1>
      {calzadoHombresHTML}
    </div>
  );
}

export default ZapatosHombres;
