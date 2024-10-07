import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioAgregarCalzado = ({ agregarCalzado }) => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [talles, setTalles] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [tipo, setTipo] = useState('Seleccione');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipo === 'Seleccione') {
      setError('Por favor, selecciona un género válido');
    } else {
      setError('');

      const nuevoCalzado = {
        id: Date.now(),
        Nombre: nombre,
        Imagen: imagen,
        Talles: talles,
        Descripcion: descripcion,
        Precio: precio,
      };

      agregarCalzado(nuevoCalzado, tipo);
      navigate('/'); // Redirigir a la página principal después de agregar el calzado
    }
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagen(reader.result); // Guardar la imagen en base64
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='contenedorForm'>
      <h2>Agregar Nuevo Calzado</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <br />
        <label>
          Imagen:
          <input type="file" accept="image/*" onChange={handleImagenChange} required />
        </label>
        <br />
        <label>
          Talles:
          <input type="text" value={talles} onChange={(e) => setTalles(e.target.value)} required />
        </label>
        <br />
        <label>
          Descripción:
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </label>
        <br />
        <label>
          Precio:
          <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        </label>
        <br />
        <label>
          Tipo:
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Seleccione">Seleccione</option> 
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
          </select>
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar el error */}
        <button type="submit">Agregar</button>
        <button type="button" onClick={() => navigate('/')}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormularioAgregarCalzado;
