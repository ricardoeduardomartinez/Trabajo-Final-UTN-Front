import React, { useState, useEffect } from 'react';
import EncabezaCuotasYEnvios from './components/EncabezaCuotasYEnvios';
import HeaderNav from './components/headerNav';
import DescripcionYOrigen from './components/descripcionYOrigen';
import ZapatosMujer from './components/zapatosMujer';
import ZapatosHombres from './components/zapatosHombres';
import FormularioAgregarCalzado from './components/formularioAgregarCalzado';
import Footer from './components/footer';


function App() {
  // Cargar calzado desde localStorage o inicializar con valores por defecto
  const obtenerCalzadoMujerLocalStorage = () => {
    const calzadoGuardado = localStorage.getItem('calzadoMujer');
    return calzadoGuardado ? JSON.parse(calzadoGuardado) : [
      {
        id: 1,
        Nombre: 'Gaby Negro',
        Imagen: './gaby-negro.jpg',
        Talles: 'del 35 al 41',
        Descripcion: 'Calzado de Cuero',
        Precio: '$10000'
      },
      {
        id: 2,
        Nombre: 'Romi Negro',
        Imagen: './romi-negro.jpg',
        Talles: 'del 35 al 41',
        Descripcion: 'Calzado de Cuero',
        Precio: '$13000'
      }
    ];
  };

  const obtenerCalzadoHombreLocalStorage = () => {
    const calzadoGuardado = localStorage.getItem('calzadoHombre');
    return calzadoGuardado ? JSON.parse(calzadoGuardado) : [
      {
        id: 1,
        Nombre: 'Lucas Azul',
        Imagen: './lucas-azul.jpg',
        Talles: 'del 39 al 45',
        Descripcion: 'Calzado de Cuero',
        Precio: '$11000'
      }
    ];
  };

  // Estados iniciales usando localStorage
  const [calzadoMujer, setCalzadoMujer] = useState(obtenerCalzadoMujerLocalStorage);
  const [calzadoHombre, setCalzadoHombre] = useState(obtenerCalzadoHombreLocalStorage);

  // Guardar en localStorage cuando cambie calzadoMujer o calzadoHombre
  useEffect(() => {
    localStorage.setItem('calzadoMujer', JSON.stringify(calzadoMujer));
  }, [calzadoMujer]);

  useEffect(() => {
    localStorage.setItem('calzadoHombre', JSON.stringify(calzadoHombre));
  }, [calzadoHombre]);

  // Función para agregar un nuevo calzado femenino o masculino
  const agregarCalzado = (nuevoCalzado, tipo) => {
    if (tipo === 'femenino') {
      setCalzadoMujer([...calzadoMujer, { ...nuevoCalzado, id: calzadoMujer.length + 1 }]);
    } else if (tipo === 'masculino') {
      setCalzadoHombre([...calzadoHombre, { ...nuevoCalzado, id: calzadoHombre.length + 1 }]);
    }
  };

  return (
    <div>
      <EncabezaCuotasYEnvios />
      <HeaderNav />
      <DescripcionYOrigen />
      
      <ZapatosMujer titulo="Modelos destacados de la temporada (Femenino)" calzadoMujer={calzadoMujer} />
      <ZapatosHombres titulo="Modelos destacados de la temporada (Masculino)" calzadoHombres={calzadoHombre} />

      {/* Formulario para agregar nuevo calzado */}
      <FormularioAgregarCalzado agregarCalzado={agregarCalzado} />
      <Footer />
    </div>
  );
}

export default App;
