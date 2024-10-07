import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import imagen from "../images/LOGO.jpg";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegUser, FaSearch } from "react-icons/fa";

const HeaderNav = ({ carrito }) => {
  const [esAdmin, setEsAdmin] = useState(false); // Estado para verificar si es admin
  const navigate = useNavigate();

  const handleAdministradorClick = () => {
    const clave = prompt("Ingrese la clave de administrador:");
    if (clave === '1234') {
      setEsAdmin(true); // Si la clave es correcta, mostrar los botones
    } else {
      alert('Clave incorrecta');
    }
  };

  const handleCerrarAdmin = () => {
    setEsAdmin(false); // Cerrar el panel de administrador
    navigate('/'); // Redirigir a la página principal
  };

  return (
    <div className='contenedorLogoYMenu'>    
      <div className='divLogo'>
        <img className='logo' src={imagen} alt="Logo Bustamante" />
      </div>
      
      <div className='contenedorMenu'>
        <ul className='contenedorMenuUl'>
          <li><Link to='./'>INICIO</Link></li>
          <li>
            <Link to="/productos" style={{ textDecoration: 'none', color: 'inherit' }}>
              Productos
            </Link>
          </li>
          <li>INFORMACIÓN</li>
          <li>CONTACTO</li>
          <li><FaSearch /></li>
          <li><FaRegUser /></li>
          <li>
            <Link to="/carrito" style={{ textDecoration: 'none', color: 'inherit' }}>
              <GiShoppingCart />
              {carrito > 0 && <span>({carrito})</span>} {/* Mostrar la cantidad de productos en el carrito */}
            </Link>
          </li>
          {/* El botón "Administrador" solo se muestra si no está en modo admin */}
          {!esAdmin && (
            <li>
              <button onClick={handleAdministradorClick}>
                Administrador
              </button>
            </li>
          )}
        </ul>
        {/* Mostrar los botones solo si la clave es correcta */}
        {esAdmin && (
          <div>
            <button onClick={() => navigate('/formulario')}>Agregar Nuevo Calzado</button>
            <button onClick={() => navigate('/ventas')}>Ventas Logradas</button>
            <button onClick={handleCerrarAdmin}>Cerrar Administrador</button> {/* Botón para cerrar administrador */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderNav;
