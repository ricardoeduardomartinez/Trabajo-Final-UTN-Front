import React, { useState } from 'react';

const FormularioAgregarCalzado = ({ agregarCalzado }) => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState('');
  const [talles, setTalles] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [tipo, setTipo] = useState('femenino');

  // Función para manejar el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();

    const nuevoCalzado = {
      Nombre: nombre,
      Imagen: imagenPreview, // Guardamos la ruta de la imagen
      Talles: talles,
      Descripcion: descripcion,
      Precio: precio
    };

    agregarCalzado(nuevoCalzado, tipo);

    setNombre('');
    setImagen(null);
    setImagenPreview('');
    setTalles('');
    setDescripcion('');
    setPrecio('');
  };

  // Función para manejar la imagen seleccionada
  const manejarImagen = (e) => {
    const file = e.target.files[0];
    setImagen(file);
    setImagenPreview(URL.createObjectURL(file)); // Generar vista previa de la imagen
  };

  return (
    <div>
      <h2>Agregar Nuevo Calzado</h2>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Nombre del calzado:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Imagen del calzado:</label>
          <input
            type="file"
            accept="image/*"
            onChange={manejarImagen}
            required
          />
        </div>

        {/* Vista previa de la imagen seleccionada */}
        {imagenPreview && (
          <div>
            <p>Vista previa de la imagen:</p>
            <img
              src={imagenPreview}
              alt="Vista previa"
              style={{
                width: '150px', // Ajusta el ancho a 150px
                height: 'auto', // Mantén la proporción de la imagen
                objectFit: 'cover', // Adaptar la imagen dentro del contenedor
                borderRadius: '10px' // Bordes redondeados opcionales
              }}
            />
          </div>
        )}

        <div>
          <label>Talles disponibles:</label>
          <input
            type="text"
            value={talles}
            onChange={(e) => setTalles(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tipo de calzado:</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
          </select>
        </div>
        <button type="submit">Agregar Calzado</button>
      </form>
    </div>
  );
};

export default FormularioAgregarCalzado;
