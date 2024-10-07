import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormularioCompra = ({ carrito, finalizarCompra }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
    direccion: {
      provincia: '',
      ciudad: '',
      calle: '',
      entreCalles: '',
      codigoPostal: '',
    },
    aclaraciones: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDireccionChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      direccion: {
        ...prevData.direccion,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    finalizarCompra(formData); // Pasar los datos de la compra a la función finalizarCompra
    alert('Compra finalizada con éxito. Pronto estaremos comunicándonos para coordinar el pago y envío. Muchas gracias');
    navigate('/'); // Redirigir a la página principal
  };

  const handleCancel = () => {
    alert('Compra cancelada');
    navigate('/carrito');
  };

  return (
    <div>
      <h1>Formulario de Compra</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Número de Celular:</label>
          <input type="text" name="celular" value={formData.celular} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <h3>Dirección:</h3>
          <div>
            <label>Provincia:</label>
            <input type="text" name="provincia" value={formData.direccion.provincia} onChange={handleDireccionChange} required />
          </div>
          <div>
            <label>Ciudad:</label>
            <input type="text" name="ciudad" value={formData.direccion.ciudad} onChange={handleDireccionChange} required />
          </div>
          <div>
            <label>Calle:</label>
            <input type="text" name="calle" value={formData.direccion.calle} onChange={handleDireccionChange} required />
          </div>
          <div>
            <label>Entre Calles:</label>
            <input type="text" name="entreCalles" value={formData.direccion.entreCalles} onChange={handleDireccionChange} />
          </div>
          <div>
            <label>Código Postal:</label>
            <input type="text" name="codigoPostal" value={formData.direccion.codigoPostal} onChange={handleDireccionChange} required />
          </div>
        </div>
        <div>
          <label>Aclaraciones:</label>
          <textarea name="aclaraciones" value={formData.aclaraciones} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormularioCompra;


